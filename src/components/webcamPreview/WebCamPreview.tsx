'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { fetchRoomData } from '@/apis/room';
import { useMediaDevices } from '@/hooks/useMediaDevices';
import { useRoomFormStore } from '@/stores/roomForm-store';

import CloseIcon from '@/public/svgs/closeIcon.svg';
import RoomInfoSection from './RoomInfo';
import ActionButtons from './Buttons';
import WebCamSection from './Cam';
import { RoomInfo, UserInfo } from '@/types/room';

interface WebCamPreviewModalProps {
  roomId?: string; // 초대 입장에서는 있음, 방 생성에서는 없음
  user: UserInfo;
  isHost: boolean;
  onClose: () => void;
  onEnterRoom: (options: { camStatus: boolean; micStatus: boolean }) => void;
}

const formatDuration = (duration: string) => {
  const [hours, minutes] = duration.split(':');
  return `${parseInt(hours)}h ${parseInt(minutes)}m`;
};

const WebCamPreviewModal = ({
  roomId,
  user,
  isHost,
  onClose,
  onEnterRoom,
}: WebCamPreviewModalProps) => {
  const [roomInfo, setRoomInfo] = useState<RoomInfo | null>(null);
  const { stream, error } = useMediaDevices();
  const [camStatus, setCamStatus] = useState(true);
  const [micStatus, setMicStatus] = useState(true);
  const router = useRouter();
  const { formData } = useRoomFormStore();

  useEffect(() => {
    const loadRoom = async () => {
      try {
        const data = await fetchRoomData(roomId!);
        setRoomInfo(data);
      } catch (e) {
        console.error('방 정보 조회 실패', e);
      }
    };

    const buildPreviewRoom = () => {
      if (!formData.roomName || !formData.duration || !formData.capacity) return;

      const previewRoomInfo: RoomInfo = {
        roomId: -1,
        roomName: formData.roomName,
        roomSeq: '',
        capacity: formData.capacity,
        status: false,
        notice: '',
        startedAt: formData.startedAt ?? '',
        endedAt: '',
        duration: formData.duration,
        imagePath:
          formData.initialPreviewUrl || (formData.image ? URL.createObjectURL(formData.image) : ''),
        micAvailability: formData.micAvailability,
        adminUsername: user.nickname,
      };

      setRoomInfo(previewRoomInfo);
    };

    if (roomId) loadRoom();
    else buildPreviewRoom();
  }, [roomId, formData, user.nickname]);

  const handleEditRoom = () => {
    if (!roomInfo) return;

    useRoomFormStore.getState().setFormData({
      roomId: String(roomInfo.roomId),
      roomName: roomInfo.roomName,
      capacity: roomInfo.capacity,
      startedAt: roomInfo.startedAt,
      duration: roomInfo.duration,
      micAvailability: roomInfo.micAvailability,
      micTurnedOn: micStatus,
      camTurnedOn: camStatus,
      image: new File([], ''),
      initialPreviewUrl: roomInfo.imagePath,
    });

    router.push('/create?from=edit');
  };

  if (!roomInfo || !user) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <span className="text-gray7 font-pre text-sm">정보를 불러오는 중입니다...</span>
      </div>
    );
  }

  return (
    <div className="relative flex h-full w-full flex-col items-center">
      {/* 상단 헤더 */}
      <div className="relative flex w-full items-center justify-center">
        <span className="font-pre bg-gray1 text-primary border-primary rounded-full border px-[10.67px] py-[5.333px] text-[8.533px] font-semibold tracking-[-0.32px] lg:px-[15px] lg:py-[7.5px] lg:text-xs xl:px-[20px] xl:py-[10px] xl:text-base">
          Web Cam Preview
        </span>
        <button type="button" onClick={onClose} className="absolute right-0">
          <CloseIcon className="h-[13.333px] w-[13.333px] cursor-pointer lg:h-[22.5px] lg:w-[22.5px] xl:h-[29px] xl:w-[29px]" />
        </button>
      </div>

      {/* 안내 문구 */}
      <div className="font-pre text-gray9 mt-[16.13px] w-[336px] text-center text-[12.8px] leading-[160%] font-semibold tracking-[-0.48px] lg:mt-[22.5px] lg:text-lg xl:mt-[30px] xl:text-[24px]">
        입장할 방의 정보와 카메라 환경이
        <br />
        올바르게 세팅되었는지 확인해주세요
      </div>

      {/* 방 정보 + 캠 프리뷰 */}
      <div className="border-gray4 bg-gray1 mt-[16.53px] flex h-[256.53px] w-[298.67px] flex-col items-center rounded-[5.333px] border p-0 lg:mt-[21.5px] lg:h-[360.75px] lg:w-[420px] lg:rounded-[7.5px] xl:mt-[30px] xl:h-[481px] xl:w-[560px] xl:rounded-[10px]">
        <RoomInfoSection
          room={{
            ...roomInfo,
            duration: formatDuration(roomInfo.duration),
          }}
          isHost={isHost}
        />
        <div className="bg-gray4 h-[1px] w-full" />
        <div className="flex h-full w-full flex-1 items-center justify-center">
          <WebCamSection
            user={user}
            stream={stream}
            error={error}
            onStatusChange={({ camStatus, micStatus }) => {
              setCamStatus(camStatus);
              setMicStatus(micStatus);
            }}
          />
        </div>
      </div>

      {/* 버튼 */}
      <div className="mt-[24px] flex w-full justify-center px-[20px]">
        <ActionButtons
          isHost={isHost}
          roomName={roomInfo.roomName}
          onEditRoom={handleEditRoom}
          onEnterRoom={() => onEnterRoom({ camStatus, micStatus })}
        />
      </div>
    </div>
  );
};

export default WebCamPreviewModal;
