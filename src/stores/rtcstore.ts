import { create } from 'zustand';
import { SignalingSocket } from '@/libs/socket';
import { SdpAnswerResponse, IceCandidateDto } from '@/types/rtc';
import { getAccessToken } from '@/utils/token';

interface WebRTCState {
  isConnected: boolean;
  stream: MediaStream | null;
  error: string | null;
  signaling: SignalingSocket | null;
  peerConnection: RTCPeerConnection | null;
  cameraStatus: 'ON' | 'OFF';
  connectWebRTC: (roomId: string | number) => Promise<void>;
  disconnectWebRTC: () => void;
  updateCameraStatus: (roomId: string | number, status: 'ON' | 'OFF') => void;
}

export const useWebRTCStore = create<WebRTCState>((set, get) => ({
  isConnected: false,
  stream: null,
  error: null,
  signaling: null,
  peerConnection: null,
  cameraStatus: 'ON',

  connectWebRTC: async (roomId) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      set({ stream });

      const pc = new RTCPeerConnection({
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
      });
      stream.getTracks().forEach((track) => pc.addTrack(track, stream));
      set({ peerConnection: pc });

      const token = getAccessToken();
      if (!token) {
        set({ error: '로그인이 필요합니다.' });
        return;
      }

      const rawUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? '';
      const signalingUrl = rawUrl.replace(/^http/, 'ws') + '/ws';

      const signaling = new SignalingSocket(signalingUrl, token);
      set({ signaling });

      signaling.subscribe(`/sub/rtc/offer/${roomId}`, (payload: SdpAnswerResponse) => {
        if (payload.sdpAnswer) {
          pc.setRemoteDescription(
            new RTCSessionDescription({ type: 'answer', sdp: payload.sdpAnswer }),
          );
        }
      });

      signaling.subscribe(`/sub/rtc/ice/${roomId}`, (payload: IceCandidateDto) => {
        if (
          payload.candidate &&
          payload.sdpMid &&
          payload.sdpMLineIndex !== undefined
        ) {
          pc.addIceCandidate(new RTCIceCandidate(payload));
        }
      });

      signaling.subscribe(`/sub/video/${roomId}`, (payload) => {
        console.log('[RTC] Video stream update:', payload);
      });

      signaling.subscribe(`/sub/audio/${roomId}`, (payload) => {
        console.log('[RTC] Audio stream update:', payload);
      });

      signaling.connect();

      setTimeout(() => {
        signaling.send(`/pub/data/cam/${roomId}`, { status: get().cameraStatus });
      }, 500);

      setTimeout(async () => {
        const offer = await pc.createOffer();
        if (!offer.sdp) {
          console.error('[RTC] Offer SDP 생성 실패');
          return;
        }

        await pc.setLocalDescription(offer);
        signaling.send(`/pub/rtc/offer/${roomId}`, { sdpOffer: offer.sdp });
      }, 1000);

      pc.onicecandidate = (event) => {
        if (
          event.candidate &&
          event.candidate.candidate &&
          event.candidate.sdpMid &&
          event.candidate.sdpMLineIndex !== undefined
        ) {
          signaling.send(`/pub/rtc/ice/${roomId}`, {
            candidate: event.candidate.candidate,
            sdpMid: event.candidate.sdpMid,
            sdpMLineIndex: event.candidate.sdpMLineIndex,
          });
        }
      };

      pc.onconnectionstatechange = () => {
        if (pc.connectionState === 'connected') {
          set({ isConnected: true, error: null });
        }
        if (pc.connectionState === 'failed' || pc.connectionState === 'disconnected') {
          set({ error: '미디어 서버 연결 실패', isConnected: false });
        }
      };
    } catch (err: any) {
      set({ error: err.message || 'WebRTC 연결 실패', isConnected: false });
    }
  },

  updateCameraStatus: (roomId, status) => {
    const { signaling } = get();
    set({ cameraStatus: status });

    if (signaling) {
      signaling.send(`/pub/data/cam/${roomId}`, { status });
    }
  },

  disconnectWebRTC: () => {
    const { peerConnection, signaling } = get();
    peerConnection?.close();
    signaling?.close();
    set({
      isConnected: false,
      peerConnection: null,
      signaling: null,
      stream: null,
      cameraStatus: 'ON',
    });
  },
}));

export default useWebRTCStore;
