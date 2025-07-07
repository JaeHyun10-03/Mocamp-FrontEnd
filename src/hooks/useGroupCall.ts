import { useState, useEffect, useRef, useCallback } from 'react';
import { KurentoSignalingSocket } from '@/libs/groupcallsignal';
import { Participant } from '@/types/room';
import { apiWithToken } from '@/apis/axios';
import { DelegationUpdateResponse } from '@/types/delegation';
import { signalingSocket } from '@/libs/socket';

interface UseGroupCallProps {
  roomId: number;
  myUserId: number;
  myUsername: string;
  camStatus: boolean;
  micStatus: boolean;
  initialParticipants?: Participant[];
  onRoomLeft?: () => void;
  isHost: boolean;
}

export const getMainVideoResolution = () => {
  const width = typeof window !== 'undefined' ? window.innerWidth : 1920;
  if (width >= 1920) return { width: 480, height: 270 };
  if (width >= 1440) return { width: 360, height: 202.5 };
  return { width: 256, height: 144 };
};

export function useGroupCall({
  roomId,
  myUserId,
  myUsername,
  camStatus,
  micStatus,
  initialParticipants = [],
  onRoomLeft,
  isHost,
}: UseGroupCallProps) {
  const [participants, setParticipants] = useState<Participant[]>(initialParticipants);
  const participantsRef = useRef<Participant[]>([]);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [adminUsername, setAdminUsername] = useState<string>(myUsername);
  const adminUsernameRef = useRef<string>(adminUsername);
  const [isDelegationOpen, setIsDelegationOpen] = useState<boolean>(false);
  const [selectedDelegateId, setSelectedDelegateId] = useState<number | null>(null);
  const peerConnections = useRef<{ [userId: number]: RTCPeerConnection }>({});
  const kurentoSignalingRef = useRef<KurentoSignalingSocket | null>(null);
  const hasJoinedRoom = useRef(false);

  useEffect(() => {
    participantsRef.current = participants;
  }, [participants]);

  useEffect(() => {
    adminUsernameRef.current = adminUsername;
  }, [adminUsername]);

  const getLocalMediaStream = useCallback(async () => {
    try {
      const { width, height } = getMainVideoResolution();
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width, height },
        audio: micStatus,
      });
      if (!camStatus) {
        stream.getVideoTracks().forEach((track) => (track.enabled = false));
      }
      return stream;
    } catch (error: any) {
      setError(error.message || '카메라/마이크 접근 실패');
      throw error;
    }
  }, [camStatus, micStatus]);

  const setParticipantWorkStatus = useCallback(
    (status: boolean) => {
      setParticipants((prev) =>
        prev.map((p) => (p.userId === myUserId ? { ...p, isWorking: status } : p)),
      );
     signalingSocket.send(`/pub/data/work-status/${roomId}`, {
  userId: myUserId,
  workStatus: status,
});
    },
    [myUserId, roomId],
  );

  const toggleMedia = useCallback(
    (type: 'video' | 'audio', status: boolean) => {
      if (!localStream) return;
      if (type === 'video') {
        localStream.getVideoTracks().forEach((track) => (track.enabled = status));
        setParticipants((prev) =>
          prev.map((p) => (p.userId === myUserId ? { ...p, camStatus: status } : p)),
        );
        signalingSocket.send(`/pub/data/cam-status/${roomId}`, {
  userId: myUserId,
  camStatus: status,
});
      } else {
        localStream.getAudioTracks().forEach((track) => (track.enabled = status));
        setParticipants((prev) =>
          prev.map((p) => (p.userId === myUserId ? { ...p, micStatus: status } : p)),
        );
        signalingSocket.send(`/pub/data/mic-status/${roomId}`, {
  userId: myUserId,
  micStatus: status,
});
      }
    },
    [localStream, myUserId, roomId],
  );

  const delegateAdmin = useCallback(
    (newAdminId: number) => {
      signalingSocket.send(`/pub/data/delegation/${roomId}`, {
  newAdminId,
});
    },
    [roomId],
  );

  const openDelegationModal = useCallback(() => {
    setIsDelegationOpen(true);
  }, []);

  const removeParticipant = useCallback((userId: number) => {
    setParticipants((prev) => prev.filter((p) => p.userId !== userId));
    const pc = peerConnections.current[userId];
    if (pc) {
      pc.close();
      delete peerConnections.current[userId];
    }
  }, []);

  const addIceCandidate = useCallback((username: string, candidate: any) => {
    const user = participantsRef.current.find((p) => p.username === username);
    if (!user) return;
    const pc = peerConnections.current[user.userId];
    if (pc && candidate) {
      try {
        pc.addIceCandidate(new RTCIceCandidate(candidate));
      } catch (e) {
        console.error('[Kurento] ICE 추가 실패:', e);
      }
    }
  }, []);

  const createPeerConnection = useCallback(
    async (remoteUserId: number, remoteUsername: string, stream: MediaStream) => {
      const pc = new RTCPeerConnection({ iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] });
      peerConnections.current[remoteUserId] = pc;
      stream.getTracks().forEach((track) => pc.addTrack(track, stream));
      pc.onicecandidate = (e) => {
        if (e.candidate) {
          kurentoSignalingRef.current?.send('onIceCandidate', {
            candidate: {
              candidate: e.candidate.candidate,
              sdpMid: e.candidate.sdpMid,
              sdpMLineIndex: e.candidate.sdpMLineIndex,
            },
            name: myUsername,
          });
        }
      };
      pc.ontrack = (e) => {
        if (e.streams && e.streams[0]) {
          setParticipants((prev) =>
            prev.map((p) => (p.userId === remoteUserId ? { ...p, stream: e.streams[0] } : p)),
          );
        }
      };
      return pc;
    },
    [myUsername],
  );

  const receiveVideoFrom = useCallback(
    async (remoteUserId: number, remoteUsername: string, sdpOffer: string) => {
      let pc = peerConnections.current[remoteUserId];
      if (!pc) {
        const streamToUse = localStream || (await getLocalMediaStream());
        if (!streamToUse) return;
        pc = await createPeerConnection(remoteUserId, remoteUsername, streamToUse);
      }
      try {
        await pc.setRemoteDescription(new RTCSessionDescription({ type: 'offer', sdp: sdpOffer }));
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);
        kurentoSignalingRef.current?.send('answer', { name: myUsername, sdpAnswer: answer.sdp });
      } catch (e) {
        console.error('[Kurento] SDP 처리 실패:', e);
      }
    },
    [createPeerConnection, localStream, getLocalMediaStream, myUsername],
  );

  const leaveRoom = useCallback(async () => {
    kurentoSignalingRef.current?.send('leaveRoom');
    kurentoSignalingRef.current?.close();
    kurentoSignalingRef.current = null;
    localStream?.getTracks().forEach((t) => t.stop());
    setLocalStream(null);
    Object.values(peerConnections.current).forEach((pc) => pc.close());
    peerConnections.current = {};
    setParticipants([]);
    hasJoinedRoom.current = false;
    setError(null);
    onRoomLeft?.();
  }, [localStream, roomId, onRoomLeft]);

  useEffect(() => {
    const socket = new KurentoSignalingSocket();
    kurentoSignalingRef.current = socket;
    socket.connect();

   socket.setOnOpenCallback(async () => {
  const stream = await getLocalMediaStream();
  if (stream) {
    setLocalStream(stream);

    const updatedInitial = initialParticipants.map((p) => ({
      ...p,
      isAdmin: p.username === adminUsernameRef.current,
      stream: p.userId === myUserId ? stream : null,
    }));

    setParticipants(updatedInitial);
    participantsRef.current = updatedInitial;
  }

  socket.send('joinRoom', { room: `room${roomId}`, name: myUsername });
});


    socket.on('roomParticipants', (msg) => {
      const effectiveAdmin = msg.adminUsername || msg.participants[0]?.username || '';
      setAdminUsername(effectiveAdmin);

      const filtered = msg.participants.filter((p: Participant) => p.username !== myUsername);
      const updated = filtered.map((p: Participant) => ({
        ...p,
        stream: null,
        isAdmin: p.username === effectiveAdmin,
        isMyGoal: false,
      }));

      const me = participantsRef.current.find((p) => p.username === myUsername);
      const finalList = me ? [me, ...updated] : updated;

      setParticipants(finalList);
      participantsRef.current = finalList;
    });

    socket.on('ADMIN_UPDATED', (msg: DelegationUpdateResponse) => {
      setAdminUsername(msg.newAdminUsername);

      setParticipants((prev) => {
        const updated = prev.map((p) => {
          const isNowAdmin = p.username === msg.newAdminUsername;
          return {
            ...p,
            isAdmin: isNowAdmin,
          };
        });

        participantsRef.current = updated;
        return updated;
      });
    });

    socket.on('receiveVideoFrom', async (msg) => {
      const existing = participantsRef.current.find((p) => p.username === msg.sender);
      if (!existing) return;
      await receiveVideoFrom(existing.userId, existing.username, msg.sdpOffer);
    });

    socket.on('iceCandidate', (msg) => addIceCandidate(msg.name, msg.candidate));

    socket.on('participantLeft', (msg) => {
      const user = participantsRef.current.find((p) => p.username === msg.name);
      if (user) removeParticipant(user.userId);
    });

    socket.on('newParticipantArrived', (msg) => {
      const { name } = msg;
      if (
        !name ||
        name.trim() === '' ||
        name === myUsername ||
        participantsRef.current.some((p) => p.username === name)
      ) {
        return;
      }
      const userId =
        name.split('').reduce((acc: number, c: string) => acc + c.charCodeAt(0), 0) % 10000;
      setParticipants((prev) => {
        const updated = [
          ...prev,
          {
            userId,
            username: name,
            camStatus,
            micStatus,
            isWorking: true,
            isAdmin: name === adminUsernameRef.current,
            stream: null,
            goals: [],
            resolution: '',
            isMyGoal: false,
            isSecret: false,
          },
        ];
        participantsRef.current = updated;
        return updated;
      });
    });

    socket.on('WORK_STATUS_UPDATED', (msg) => {
      setParticipants((prev) => {
        const updated = prev.map((p) =>
          p.userId === msg.userId ? { ...p, isWorking: msg.workStatus } : p,
        );
        participantsRef.current = updated;
        return updated;
      });
    });

    socket.on('CAM_STATUS_UPDATED', (msg) => {
      setParticipants((prev) => {
        const updated = prev.map((p) =>
          p.userId === msg.userId ? { ...p, camStatus: msg.camStatus } : p,
        );
        participantsRef.current = updated;
        return updated;
      });
    });

    socket.on('MIC_STATUS_UPDATED', (msg) => {
      setParticipants((prev) => {
        const updated = prev.map((p) =>
          p.userId === msg.userId ? { ...p, micStatus: msg.micStatus } : p,
        );
        participantsRef.current = updated;
        return updated;
      });
    });

    return () => {
      socket.close();
    };
  }, [roomId, myUsername, getLocalMediaStream]);

  return {
    participants,
    localStream,
    error,
    adminUsername,
    isDelegationOpen,
    setIsDelegationOpen,
    selectedDelegateId,
    setSelectedDelegateId,
    setAdminUsername,
    openDelegationModal,
    delegateAdmin,
    toggleMedia,
    leaveRoom,
    setParticipantWorkStatus,
  };
}
