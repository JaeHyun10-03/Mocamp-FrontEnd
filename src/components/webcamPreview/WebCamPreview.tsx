import { useEffect, useState } from 'react';
import { fetchRoomData } from '@/apis/room';
import { useMediaDevices } from '@/hooks/useMediaDevices';

import CloseIcon from '@/public/svgs/closeIcon.svg';
import RoomInfoSection from './RoomInfo';
import ActionButtons from './Buttons';
import WebCamSection from './Cam';
import { RoomInfo, UserInfo } from '../../types/preview';


interface WebCamPreviewModalProps {
  roomId: number;
  user: UserInfo;
  isHost: boolean;
  onClose: () => void;
  onEditRoom: () => void;
  onEnterRoom: (options: { camStatus: boolean; micStatus: boolean }) => void; 
}

const WebCamPreviewModal = ({
  roomId,
  user,
  isHost,
  onClose,
  onEditRoom,
  onEnterRoom,
}: WebCamPreviewModalProps) => {
  const [roomInfo, setRoomInfo] = useState<RoomInfo | null>(null);

  const { stream, error } = useMediaDevices(); 
const [camStatus, setCamStatus] = useState(true);
const [micStatus, setMicStatus] = useState(true);

  useEffect(() => {
    const loadRoom = async () => {
      try {
        const res = await fetchRoomData(roomId);
        setRoomInfo({
          roomId: res.roomId,
          name: res.roomName,
          status: res.status ? '진행 중' : '진행 전',
          date: res.startedAt?.split(' ')[0] || '',
          duration: res.duration,
          imageUrl: res.imagePath || '',
        });
      } catch (e) {
        console.error('방 정보 조회 실패', e);
      }
    };

    loadRoom();
  }, [roomId]);

  if (!roomInfo || !user || !roomId) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <span className="text-gray7 text-sm font-pre">정보를 불러오는 중입니다...</span>
      </div>
    );
  }

  return (
    <div className="relative flex h-full w-full flex-col items-center">
      <div className="relative flex w-full items-center justify-center">
        <span className="font-pre bg-gray1 text-primary border-primary rounded-full border px-[10.67px] py-[5.333px] text-[8.533px] font-semibold tracking-[-0.32px] lg:px-[15px] lg:py-[7.5px] lg:text-xs xl:px-[20px] xl:py-[10px] xl:text-base">
          Web Cam Preview
        </span>

        <button type="button" onClick={onClose} className="absolute right-0">
          <CloseIcon className="h-[13.333px] w-[13.333px] cursor-pointer lg:h-[22.5px] lg:w-[22.5px] xl:h-[29px] xl:w-[29px]" />
        </button>
      </div>

      <div className="font-pre text-gray9 mt-[16.13px] w-[336px] text-center text-[12.8px] leading-[160%] font-semibold tracking-[-0.48px] lg:mt-[22.5px] lg:text-lg xl:mt-[30px] xl:text-[24px]">
        입장할 방의 정보와 카메라 환경이
        <br />
        올바르게 세팅되었는지 확인해주세요
      </div>

      <div className="border-gray4 bg-gray1 mt-[16.53px] flex h-[256.53px] w-[298.67px] flex-col items-center rounded-[5.333px] border p-0 lg:mt-[21.5px] lg:h-[360.75px] lg:w-[420px] lg:rounded-[7.5px] xl:mt-[30px] xl:h-[481px] xl:w-[560px] xl:rounded-[10px]">
        <RoomInfoSection  room={roomInfo} />
        <div className="bg-gray4 h-[1px] w-full" />
        <div className="flex h-full w-full flex-1 items-center justify-center">
          <WebCamSection   user={user}
  stream={stream}
  error={error}
  roomId={roomInfo.roomId}
   onStatusChange={({ camStatus, micStatus }) => {
    setCamStatus(camStatus);
    setMicStatus(micStatus);
  }} />
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-0 flex w-[560px] ${isHost ? 'justify-start gap-[16px]' : 'justify-center gap-0'} `}
      >
        <ActionButtons
           isHost={isHost}
          roomName={roomInfo.name}
          onEditRoom={onEditRoom}
          onEnterRoom={() => onEnterRoom({ camStatus, micStatus })}
        />
      </div>
    </div>
  );
};

export default WebCamPreviewModal;
