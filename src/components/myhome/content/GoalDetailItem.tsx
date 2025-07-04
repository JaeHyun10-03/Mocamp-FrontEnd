import { ReactNode } from 'react';

interface GoalDetailItemProps {
  isCompleted: boolean;
  children: ReactNode;
}

const GoalDetailItem = ({ isCompleted, children }: GoalDetailItemProps) => {
  return isCompleted ? (
    <div className="flex h-[70px] items-center justify-between rounded-[10px] border border-[#e8e8e8] bg-neutral-50 px-10 py-5">
      <p className="flex-1 text-xl font-medium text-[#c4c4c4]">{children}</p>
    </div>
  ) : (
    <div className="flex h-[70px] items-center justify-between rounded-[10px] border border-[#e8e8e8] bg-white px-10 py-5">
      <p className="flex-1 text-xl font-medium text-[#555]">{children}</p>
    </div>
  );
};

export default GoalDetailItem;
