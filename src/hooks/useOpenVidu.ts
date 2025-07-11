import { useEffect, useState, useRef } from 'react';
import { OpenVidu, Session, Publisher, StreamManager } from 'openvidu-browser';
import { initOpenVidu, getOVInstance } from '@/libs/openviduClient';
import { apiWithToken } from '@/apis/axios';
import { useOpenViduStore } from '@/stores/openViduStore';
import { useOpenViduControlsStore } from '@/stores/openViduControlsStore';

interface UseOpenViduParams {
  sessionId: string;
  userName: string;
}

export const useOpenVidu = ({ sessionId, userName }: UseOpenViduParams) => {
  const [session, setSession] = useState<Session | null>(null);
  const [publisher, setPublisher] = useState<Publisher | null>(null);
  const [subscribers, setSubscribers] = useState<StreamManager[]>([]);

  const { isCameraOn, isMicOn } = useOpenViduControlsStore.getState(); // 전역 상태
  const { setPublisher: setStorePublisher } = useOpenViduControlsStore.getState(); // tore method

  const OVRef = useRef<OpenVidu | null>(null);

  // 1. 세션 초기화
  useEffect(() => {
    if (!OVRef.current) {
      OVRef.current = initOpenVidu();
    }

    if (!sessionId || !userName) return;

    const ov = OVRef.current!;
    const newSession = ov.initSession();

    newSession.on('streamCreated', (event) => {
      const stream = event.stream;
      if (
        !stream ||
        !stream.connection ||
        !stream.connection.connectionId ||
        !stream.connection.data
      ) {
        console.warn('[OpenVidu] Skipping subscription: invalid stream or connection data');
        return;
      }

      const newConnectionId = stream.connection.connectionId;

      setSubscribers((prev) => {
        const exists = prev.some((sub) => sub.stream.connection.connectionId === newConnectionId);
        if (exists) return prev;

        try {
          const subscriber = newSession.subscribe(stream, undefined);
          return [...prev, subscriber];
        } catch (error) {
          console.error('[OpenVidu] subscribe() failed:', error);
          return prev;
        }
      });
    });

    newSession.on('streamDestroyed', (event) => {
      setSubscribers((prev) =>
        prev.filter(
          (sub) => sub.stream.connection.connectionId !== event.stream.connection.connectionId,
        ),
      );
    });

    setSession(newSession);

    return () => {
      newSession.disconnect();
      setSession(null);
      setPublisher(null);
      setSubscribers([]);
    };
  }, [sessionId, userName]);

  // 2. 세션 참가
  const joinSession = async () => {
    if (!session || !userName) {
      console.warn('[OpenVidu] joinSession: Session or userName not ready.', session, userName);
      return;
    }

    try {
      const sessionRes = await apiWithToken.post('/api/sessions', {
        customSessionId: sessionId,
      });
      const sessionIdFromServer = sessionRes.data;

      const tokenRes = await apiWithToken.post(`/api/sessions/${sessionIdFromServer}/connections`);
      const token = tokenRes.data;

      await session.connect(token, { clientData: userName });

      const ovInstance = getOVInstance();
      if (!ovInstance) {
        console.error('[OpenVidu] OpenVidu instance not initialized');
        return;
      }

      const getVideoResolution = () => {
        const width = window.innerWidth;
        if (width >= 1920) return '480x270';
        if (width >= 1440) return '360x202';
        return '256x144';
      };

      const newPublisher = ovInstance.initPublisher(undefined, {
        audioSource: undefined,
        videoSource: undefined,
        publishAudio: isMicOn,
        publishVideo: isCameraOn,
        resolution: getVideoResolution(),
        frameRate: 30,
        insertMode: 'APPEND',
      });

      await session.publish(newPublisher);
      console.log('[OpenVidu] Publisher successfully published');
      setPublisher(newPublisher);
      useOpenViduStore.getState().setPublisher(newPublisher); // (기존 스토어 유지하는 경우)
      setStorePublisher(newPublisher); // controls store에도 저장
    } catch (error) {
      console.error('[OpenVidu] joinSession error:', error);
    }
  };

  // 3. 세션 종료
  const leaveSession = () => {
    if (session) {
      session.disconnect();
    }
    setSession(null);
    setPublisher(null);
    setSubscribers([]);
  };

  return {
    session,
    publisher,
    subscribers,
    joinSession,
    leaveSession,
    toggleCam: useOpenViduControlsStore.getState().toggleCam,
    toggleMic: useOpenViduControlsStore.getState().toggleMic,
  };
};
