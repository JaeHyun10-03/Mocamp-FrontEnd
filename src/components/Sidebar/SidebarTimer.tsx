// 사이드바 - 시간, 종료, 남는 시간
import { useEffect, useState } from 'react';
import {
  formatTime,
  getRemainingTime,
  formatRemainingTime,
} from '@/utils/timeUtils';

interface SidebarTimerProps {
  startTime: Date;
  endTime: Date;
}

const SidebarTimer= ({ startTime, endTime }: SidebarTimerProps) => {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime(endTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(getRemainingTime(endTime));
    }, 1000);
    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="w-[200px] h-[1080px] bg-white relative">
      {/* 시작 / 종료 박스 */}
      <div className="w-[150px] absolute top-[70px] left-[25px] rounded-[10px] border border-[#E8E8E8] bg-white flex flex-col gap-[19px] p-[20px]">
        {/* 시작 */}
        <div className="flex items-center gap-[15px]">
          <div className="h-[24px] flex items-center justify-center font-pre font-semibold text-[18px] leading-[1] tracking-[-0.02em] text-[#27CFA5]">
            시작
          </div>
          <div className="h-[24px] flex items-center justify-center font-pre font-medium text-[18px] leading-[1] tracking-[-0.02em] text-[#555555]">
            {formatTime(startTime)}
          </div>
        </div>

        {/* 구분선 */}
        <div className="w-full h-[1px] bg-[#E8E8E8]" />

        {/* 종료 */}
        <div className="flex items-center gap-[15px]">
          <div className="h-[24px] flex items-center justify-center font-pre font-semibold text-[18px] leading-[1] tracking-[-0.02em] text-[#27CFA5]">
            종료
          </div>
          <div className="h-[24px] flex items-center justify-center font-pre font-medium text-[18px] leading-[1] tracking-[-0.02em] text-[#555555]">
            {formatTime(endTime)}
          </div>
        </div>
      </div>

      {/* 남은 시간 박스 */}
      <div className="w-[150px] h-[126px] absolute top-[210px] left-[25px] rounded-[10px] border border-[#E8E8E8] bg-white flex flex-col gap-[19px] p-[20px]">
        {/* 남은 시간 */}
        <div className="h-[24px] flex items-start font-pre font-semibold text-[18px] leading-[1] tracking-[-0.02em] text-[#27CFA5] bg-transparent rounded">
          남은 시간
        </div>

        {/* 구분선 */}
        <div className="w-[110px] h-[1px] bg-[#E8E8E8] mx-[2px]" />

        {/* 남은 시간 표시 */}
        <div className="h-[24px] flex items-start font-pre font-medium text-[18px] leading-[1] tracking-[-0.02em] text-[#555555] bg-transparent rounded">
          {remainingTime > 0 ? formatRemainingTime(remainingTime) : '종료'}
        </div>
      </div>
    </div>
  );
};

export default SidebarTimer;
