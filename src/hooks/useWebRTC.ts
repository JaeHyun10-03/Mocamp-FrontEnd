import { useEffect, useRef, useState } from 'react';
import { signalingSocket } from '@/apis/signal';

interface UseWebRTCProps {
  roomId: number;
  userId: number;
}

export function useWebRTC({ roomId, userId }: UseWebRTCProps) {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  const peerConnection = useRef<RTCPeerConnection | null>(null);
  const [isOfferSent, setIsOfferSent] = useState(false); 

  const getResponsiveResolution = () => {
  const width = window.innerWidth;

  if (width >= 1920) {
    return { width: 520, height: 270 };
  } else if (width >= 1440) {
    return { width: 390, height: 202 };
  } else {
    return { width: 277, height: 144 };
  }
};


  useEffect(() => {
    let pc: RTCPeerConnection;

    async function start() {
      try {
      const { width, height } = getResponsiveResolution();

      const localStream = await navigator.mediaDevices.getUserMedia({
        video: { width, height },
        audio: true,
      });
        
        setStream(localStream);

        pc = new RTCPeerConnection({
          iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
        });

        localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));
        peerConnection.current = pc;

        // 먼저 구독 설정
        signalingSocket.subscribe(`/sub/rtc/offer/${roomId}`, async (payload) => {
          console.log('[RTC] SDP Answer 수신:', payload);
          if (payload.sdpAnswer && payload.userId !== userId) {
            await pc.setRemoteDescription(
              new RTCSessionDescription({ type: 'answer', sdp: payload.sdpAnswer }),
            );
          }
        });

        signalingSocket.subscribe(`/sub/rtc/ice/${roomId}`, (payload) => {
          console.log('[RTC] ICE Candidate 수신:', payload);
          if (
            payload.candidate &&
            payload.sdpMid &&
            payload.sdpMLineIndex !== undefined &&
            payload.userId !== userId
          ) {
            pc.addIceCandidate(
              new RTCIceCandidate({
                candidate: payload.candidate,
                sdpMid: payload.sdpMid,
                sdpMLineIndex: payload.sdpMLineIndex,
              }),
            );
          }
        });

        // 연결 시작
        signalingSocket.connect();

        // 연결 완료 후 offer 전송
        const waitForConnectionAndSendOffer = async () => {
          if (signalingSocket.isConnected() && !isOfferSent) {
            try {
              const offer = await pc.createOffer();
              await pc.setLocalDescription(offer);

              const sdp = pc.localDescription?.sdp;
              if (!sdp) {
                setError('SDP 생성 실패');
                return;
              }

              setIsOfferSent(true);
              signalingSocket.send(`/pub/rtc/offer/${roomId}`, { sdpOffer: sdp });
              console.log('[RTC] SDP Offer 전송 성공');
            } catch (e: any) {
              setError(e.message || 'Offer 생성 실패');
            }
          } else if (!signalingSocket.isConnected()) {
            setTimeout(waitForConnectionAndSendOffer, 100);
          }
        };

        // ICE 후보 전송
        pc.onicecandidate = (event) => {
          if (
            event.candidate &&
            event.candidate.candidate &&
            event.candidate.sdpMid &&
            event.candidate.sdpMLineIndex !== undefined &&
            signalingSocket.isConnected()
          ) {
            signalingSocket.send(`/pub/rtc/ice/${roomId}`, {
              candidate: event.candidate.candidate,
              sdpMid: event.candidate.sdpMid,
              sdpMLineIndex: event.candidate.sdpMLineIndex,
              userId: userId,
            });

            console.log('[RTC] ICE Candidate 전송 성공');
          }
        };

        // 연결 상태 모니터링
        pc.onconnectionstatechange = () => {
          console.log('[RTC] Connection state:', pc.connectionState);
        };

        // 연결 완료 대기 후 offer 전송
        setTimeout(waitForConnectionAndSendOffer, 1000);
      } catch (err: any) {
        setError(err.message || 'WebRTC 연결 실패');
      }
    }

    start();

    return () => {
      pc?.close();
      setIsOfferSent(false);
    };
  }, [roomId, userId]);

  return { stream, error };
}
