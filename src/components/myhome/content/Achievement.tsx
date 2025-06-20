import CommentIcon from '@/public/svgs/comment_icon.svg';

interface AchievementProps {
  type: 'Goal' | 'Time';
  GoalNumber?: number;
  TimeNumber?: number;
}

const Achievement = ({ type, GoalNumber = 0, TimeNumber = 0 }: AchievementProps) => {
  const isGoal = type === 'Goal';

  return (
    <div>
      <div className="flex w-[250px] flex-col">
        <div className="flex h-[50px] items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-[#27cfa5]">
          <p className="text-base font-semibold text-white">
            {isGoal ? '최근 7일동안 달성한 목표 수는?' : '최근 7일동안 집중한 시간은?'}
          </p>
        </div>
        <div className="flex h-20 items-center justify-center rounded-br-[10px] rounded-bl-[10px] border border-[#e8e8e8] bg-white">
          <p className="text-[28px] font-semibold text-[#4b4b4b]">
            {isGoal ? `${GoalNumber}개` : `${TimeNumber}분`}
          </p>
        </div>
      </div>
      <div className="relative mt-2 flex justify-center">
        <CommentIcon />
        <p className="absolute inset-0 top-3 flex items-center justify-center text-base font-medium text-[#00af83]">
          영화 한 편 볼 시간동안 집중했어요!
        </p>
      </div>
    </div>
  );
};

export default Achievement;
