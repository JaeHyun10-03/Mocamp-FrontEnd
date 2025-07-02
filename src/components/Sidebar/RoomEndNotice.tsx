'use client';

import { useEffect } from 'react';
import CloseIcon from '@/public/svgs/closeIcon.svg';

interface RoomEndNoticeProps {
  minutesLeft: number;
  onClose: () => void;
}

const RoomEndNotice = ({ minutesLeft, onClose }: RoomEndNoticeProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 30 * 1000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div className="border-primary fixed bottom-[60.13px] left-[25px] z-50 h-20 w-70 rounded-[10px] border bg-[#d4f5ed] lg:bottom-[80.5px] xl:bottom-[104px]">
      <div className="relative flex h-full items-center justify-center">
        <p className="text-body2 text-primary text-center">
          모캠프 종료까지 {minutesLeft}분 남았어요
        </p>
        <button className="absolute top-4 right-4" onClick={onClose} aria-label="닫기">
          <CloseIcon className="text-primary h-[10px] w-[10px]" />
        </button>
      </div>
    </div>
  );
};

export default RoomEndNotice;
