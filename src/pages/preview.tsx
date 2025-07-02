import WebCamPreviewModal from '@/components/webcamPreview/WebCamPreview';
import { RoomInfo, UserInfo } from '@/types/preview';
import { useEffect } from 'react';
import { useMediaDevices } from '@/hooks/useMediaDevices';

const roomData: RoomInfo = {
  roomId: 1,
  imageUrl: '',
  status: '진행 전',
  name: '은학샘과 아이들',
  date: '2025. 06. 03',
  duration: '3h 30m',
};

const userData: UserInfo = {
  userId: 1,
  nickname: '이수민',
  isWorking: true,
  cameraOn: true,
  micOn: true,
};

const WebCamPreviewPage = () => {
  const { stream, error, getMedia } = useMediaDevices();

  useEffect(() => {
    getMedia();
  }, [getMedia]);

  const handleClose = () => {};
  const handleEditRoom = () => {};
  const handleEnterRoom = () => {};

  const isHost = true;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAFA]">
      <WebCamPreviewModal
        room={roomData}
        user={{ ...userData, stream, error }}
        isHost={isHost}
        onClose={handleClose}
        onEditRoom={handleEditRoom}
        onEnterRoom={handleEnterRoom}
      />
    </div>
  );
};

export default WebCamPreviewPage;
