import { useRef, useState } from 'react';
import { Publisher } from 'openvidu-browser';
import { useRoomStore } from '@/stores/todo-store';
import { useRoomStoreName } from '@/stores/roomStore';
import { signalingSocket } from '@/libs/socket';

export const useOpenViduControls = () => {
  const publisherRef = useRef<Publisher | null>(null);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);

  const myUserId = useRoomStoreName((s) => s.myUserId);
  const roomId = useRoomStore((s) => s.roomData?.roomId);

  const setPublisher = (publisher: Publisher) => {
    publisherRef.current = publisher;
  };

  const toggleCam = () => {
    const publisher = publisherRef.current;
    if (!publisher || !myUserId || !roomId) return;

    const newCamStatus = !publisher.stream.videoActive;
    publisher.publishVideo(newCamStatus);
    setIsCameraOn(newCamStatus);

    signalingSocket.send(`/pub/data/camera/${roomId}`, {
      userId: myUserId,
      camStatus: newCamStatus,
    });
  };

  const toggleMic = () => {
    const publisher = publisherRef.current;
    if (!publisher || !myUserId || !roomId) return;

    const newMicStatus = !publisher.stream.audioActive;
    publisher.publishAudio(newMicStatus);
    setIsMicOn(newMicStatus);

    signalingSocket.send(`/pub/data/mic/${roomId}`, {
      userId: myUserId,
      micStatus: newMicStatus,
    });
  };

  return {
    toggleCam,
    toggleMic,
    isCameraOn,
    isMicOn,
    setPublisher,
  };
};
