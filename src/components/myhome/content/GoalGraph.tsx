// GoalGraph.tsx
import { useEffect, useState } from 'react';
import { DailyGoal } from '@/types/myhome';

interface GoalGraphProps {
  goalList: DailyGoal[];
  onDateClick: (date: string) => void;
  selectedDate: string | null;
}

const getHeightFromAmount = (amount: number): number => {
  if (amount >= 14) return 350;

  const heightTable: { [key: number]: number } = {
    0: 0,
    2: 50,
    4: 100,
    6: 150,
    8: 200,
    10: 250,
    12: 300,
  };

  if (heightTable[amount] !== undefined) return heightTable[amount];

  const keys = Object.keys(heightTable).map(Number);
  const lower = Math.max(...keys.filter((k) => k < amount));
  const upper = Math.min(...keys.filter((k) => k > amount));
  const heightLower = heightTable[lower];
  const heightUpper = heightTable[upper];
  const ratio = (amount - lower) / (upper - lower);
  return Math.round(heightLower + ratio * (heightUpper - heightLower));
};

const GoalGraph = ({ goalList, onDateClick, selectedDate }: GoalGraphProps) => {
  const [animated, setAnimated] = useState(false);

  const chartData = goalList.map((item) => ({
    ...item,
    height: getHeightFromAmount(item.amount),
    color: selectedDate === item.date ? 'bg-[#27CFA5]' : 'bg-[#A9ECDB]',
  }));

  useEffect(() => {
    const timeout = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex w-[536px] items-start gap-4">
      {/* y축 라벨 */}
      <div className="flex h-[350px] w-[40px] flex-col justify-between pt-2 text-right text-base text-[#555555]">
        <span>14개</span>
        <span>12개</span>
        <span>10개</span>
        <span>8개</span>
        <span>6개</span>
        <span>4개</span>
        <span>2개</span>
        <span>0개</span>
      </div>

      {/* 차트 본체 */}
      <div className="flex flex-1 flex-col">
        {/* 바 차트 */}
        <div className="relative flex h-[350px] items-end justify-between gap-3 px-2">
          {/* 그리드 라인 */}
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-px w-full bg-[#E8E8E8]" />
            ))}
          </div>

          {/* 막대 그래프 */}
          {chartData.map((item) => (
            <div
              key={item.date}
              className={`w-[48px] ${item.color} relative cursor-pointer rounded-t-sm border border-[#27CFA5] mix-blend-multiply transition-all duration-700 ease-out hover:opacity-80`}
              style={{ height: animated ? `${item.height}px` : '0px' }}
              onClick={() => onDateClick(item.date)}
            />
          ))}
        </div>

        {/* x축 라벨 */}
        <div className="mt-3 flex justify-between px-2 text-base text-[#555555]">
          {chartData.map((item) => (
            <span
              key={item.date}
              className={`w-[48px] cursor-pointer text-center hover:text-[#27CFA5] ${
                selectedDate === item.date ? 'font-semibold text-[#27CFA5]' : ''
              }`}
              onClick={() => onDateClick(item.date)}
            >
              {item.date}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoalGraph;
