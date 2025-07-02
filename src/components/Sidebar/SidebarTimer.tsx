// 사이드바 - 시간, 종료, 남는 시간
import { useEffect, useState } from 'react';
import { formatTime, getRemainingTime, formatRemainingTime } from '@/utils/timeUtils';

interface SidebarTimerProps {
  startTime: string;
  endTime: string;
}
const SidebarTimer = ({ startTime, endTime }: SidebarTimerProps) => {
  const start = new Date(startTime);
  const end = new Date(endTime);

  const [remainingTime, setRemainingTime] = useState(getRemainingTime(end));

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(getRemainingTime(end));
    }, 1000);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="relative w-full bg-white text-[10.667px] lg:text-[15px] xl:text-xl">
      {/* 시작 / 종료 박스 */}
      <div className="absolute top-[70px] left-[13.3px] flex w-20 flex-col gap-[10.13px] rounded-[10px] border border-[#E8E8E8] bg-white p-[10.67px] lg:top-[97.5px] lg:left-[18.75px] lg:w-[112.5px] lg:gap-[14.25px] lg:p-[15px] xl:top-[130px] xl:left-[25px] xl:w-[150px] xl:gap-[19px] xl:p-5">
        <div className="flex items-center gap-[7.67px] lg:gap-[11.5px] xl:gap-[15px]">
          <div className="font-pre text-primary font-semibold">시작</div>
          <div className="font-pre text-gray9 font-medium">{formatTime(start)}</div>
        </div>
        <div className="h-[1px] w-full bg-[#E8E8E8]" />
        <div className="flex items-center gap-[7.67px] lg:gap-[11.5px] xl:gap-[15px]">
          <div className="font-pre font-semibold text-[#27CFA5]">종료</div>
          <div className="font-pre font-medium text-[#555555]">{formatTime(end)}</div>
        </div>
      </div>

      {/* 남은 시간 박스 */}
      <div className="absolute top-[147.2px] left-[13.3px] flex h-fit w-20 flex-col gap-[10.13px] rounded-[10px] border border-[#E8E8E8] bg-white p-[10.67px] lg:top-[207px] lg:left-[18.75px] lg:w-[112.5px] lg:gap-[14.25px] lg:p-[15px] xl:top-[276px] xl:left-[25px] xl:w-[150px] xl:gap-[19px] xl:p-5">
        <div className="font-pre font-semibold text-[#27CFA5]">남은 시간</div>
        <div className="mx-[2px] h-[1px] w-full bg-[#E8E8E8]" />
        <div className="font-pre font-medium text-[#555555]">
          {remainingTime > 0 ? formatRemainingTime(remainingTime) : '종료'}
        </div>
      </div>
    </div>
  );
};

export default SidebarTimer;
