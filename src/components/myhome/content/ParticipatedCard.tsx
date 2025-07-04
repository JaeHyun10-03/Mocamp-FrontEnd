import MocampIcon from '@/public/svgs/mocamp_gray_icon.svg';
import { formatTimeString, formatDateToString } from '@/utils/timeUtils';
import { useRouter } from 'next/router';

interface ParticipatedCardProps {
  size: 'sm' | 'md' | 'lg'; // 아직 사용되지 않음
  isCompleted: boolean;
  roomId: number;
  roomName: string;
  createdAt: string;
  time: string;
}

function ParticipatedCard({
  size = 'lg',
  isCompleted,
  roomId,
  roomName,
  createdAt,
  time,
}: ParticipatedCardProps) {
  const router = useRouter();

  return (
    <div className="flex h-[169px] w-[449px] items-center rounded-[0.625rem] border border-[#E8E8E8] bg-white px-[1.25rem] py-[2.625rem]">
      {/* 썸네일 */}
      <div className="mr-[1rem] h-[5.3125rem] w-[5.3125rem] rounded-[0.625rem] bg-[#d9d9d9]">
        <MocampIcon />
      </div>

      {/* 텍스트 정보 */}
      <div className="relative flex flex-1 cursor-default flex-col justify-center space-y-[0.25rem]">
        {isCompleted ? (
          <p className="text-xl font-semibold text-[#f00]">종료</p>
        ) : (
          <p className="text-xl font-medium text-[#0096ff]">진행 중</p>
        )}
        <p className="text-xl font-semibold text-[#333]">{roomName}</p>
        <div className="flex flex-row gap-4">
          <p className="text-xl text-[#c4c4c4]">{formatDateToString(createdAt)}</p>
          <p className="text-xl text-[#c4c4c4]">{formatTimeString(time)}</p>
        </div>

        {!isCompleted && (
          <button
            onClick={() => {
              router.push(`/room/${roomId}`);
            }}
            className="hover:bg-gray5 absolute top-0 right-0 h-[2.4375rem] w-[5.9375rem] cursor-pointer rounded-[0.625rem] bg-[#f2f2f2] text-base font-semibold text-[#555555]"
          >
            입장하기
          </button>
        )}
      </div>
    </div>
  );
}

export default ParticipatedCard;
