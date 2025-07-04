import MocampGrayIcon from '@/public/svgs/mocamp_gray_icon.svg';
import { useState } from 'react';
import ParticipantedMocampModal from './ParticipantedMocampModal';
import { formatDateToString, formatTimeString } from '@/utils/timeUtils';
import { useRouter } from 'next/router';

interface ParticipantedMocampItemProps {
  size?: 'sm' | 'md' | 'lg';
  isCompleted: boolean;
  roomName: string;
  createdAt: string;
  time: string;
  roomId: number;
}

const ParticipantedMocampItem = ({
  size = 'lg',
  roomId,
  isCompleted,
  roomName,
  createdAt,
  time,
}: ParticipantedMocampItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-[169px] w-[852px] rounded-[10px] border border-[#e8e8e8] bg-white p-6">
      <div className="flex items-center justify-between">
        {/* 왼쪽 콘텐츠 영역 */}
        <div className="flex items-center gap-6">
          {/* 아이콘 */}
          <MocampGrayIcon />

          {/* 텍스트 정보 */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              {isCompleted ? (
                <span className="text-xl font-semibold text-[#FF0000]">종료</span>
              ) : (
                <span className="text-xl font-semibold text-[#0096ff]">진행 중</span>
              )}
            </div>
            <h3 className="text-xl font-semibold text-[#555]">{roomName}</h3>
            <div className="flex items-center gap-4 text-xl font-medium text-[#c4c4c4]">
              <span>{formatDateToString(createdAt)}</span>
              <span>{formatTimeString(time)}</span>
            </div>
          </div>
        </div>

        {/* 오른쪽 버튼 영역 */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className="hover:bg-gray5 flex cursor-pointer items-center justify-center gap-2.5 rounded-[10px] bg-[#f2f2f2] px-[30px] py-[15px]"
          >
            <span className="text-lg font-semibold text-[#555]">세부 목표 확인</span>
          </button>
          <button
            onClick={() => {
              router.push(`/room/${roomId}`);
            }}
            className="flex cursor-pointer items-center justify-center gap-2.5 rounded-[10px] bg-[#27cfa5] px-[30px] py-[15px] hover:bg-teal-500"
          >
            <span className="text-lg font-semibold text-white">입장하기</span>
          </button>
        </div>
      </div>
      {isOpen && <ParticipantedMocampModal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default ParticipantedMocampItem;
