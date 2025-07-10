import { useEffect, useState, useRef } from 'react';
import { OpenVidu, Session, Publisher, StreamManager } from 'openvidu-browser';
import { initOpenVidu, getOVInstance } from '@/libs/openviduClient';
import { apiWithToken } from '@/apis/axios';
import { useOpenViduStore } from '@/stores/openViduStore';
interface UseOpenViduParams {
  sessionId: string;
  userName: string;
}

export const useOpenVidu = ({ sessionId, userName }: UseOpenViduParams) => {
  const [session, setSession] = useState<Session | null>(null);
  const [publisher, setPublisher] = useState<Publisher | null>(null);
  const [subscribers, setSubscribers] = useState<StreamManager[]>([]);
  const [micStatus, setMicStatus] = useState(true);
  const [camStatus, setCamStatus] = useState(true);

  const OVRef = useRef<OpenVidu | null>(null);

const normalizeToken = (rawToken: string): string => {
  try {
    // wss 프로토콜 강제 적용 + 포트 제거
    const normalized = rawToken
      .replace('ws://', 'wss://')
      .replace('http://', 'wss://')
      .replace(':4443', '');
    return normalized;
  } catch (error) {
    console.error('[OpenVidu] normalizeToken error:', error);
    return rawToken;
  }
};


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

  // 조인 세션
const joinSession = async () => {
  if (session) {
    session.disconnect();
  }

  const newOV = initOpenVidu();
  OVRef.current = newOV;

  if (!session || !userName) {
    console.warn('[OpenVidu] joinSession: Session or userName not ready.', session, userName);
    return;
  }

  try {
    const sessionRes = await apiWithToken.post('/api/sessions', {
      customSessionId: sessionId,
    });
    const sessionIdFromServer = sessionRes.data;

    const tokenRes = await apiWithToken.post(`/api/sessions/${sessionId}/connections`);
    const rawToken = tokenRes.data;
    const token = normalizeToken(rawToken);

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
      publishAudio: micStatus,
      publishVideo: camStatus,
      resolution: getVideoResolution(),
      frameRate: 30,
      insertMode: 'APPEND',
    });

    await session.publish(newPublisher);
    console.log('[OpenVidu] Publisher successfully published');
    setPublisher(newPublisher);
    useOpenViduStore.getState().setPublisher(newPublisher);
  } catch (error) {
    console.error('[OpenVidu] joinSession error:', error);
  }
};


  const leaveSession = () => {
    if (session) {
      session.disconnect();
    }
    setSession(null);
    setPublisher(null);
    setSubscribers([]);
  };

  // 미디어 스트림 트랙 스탑

  // 카메라
  const toggleMic = () => {
    if (publisher) {
      const isAudioActive = publisher.stream.audioActive;
      publisher.publishAudio(!isAudioActive);
    }
  };

  // 마이크
  const toggleCam = () => {
    if (publisher) {
      const isVideoActive = publisher.stream.videoActive;
      publisher.publishVideo(!isVideoActive);
    }
  };

  return {
    session,
    publisher,
    subscribers,
    joinSession,
    leaveSession,
    toggleMic,
    toggleCam,
  };
};
