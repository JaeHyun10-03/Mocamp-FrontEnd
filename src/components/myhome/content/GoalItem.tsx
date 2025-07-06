import { ReactNode } from 'react';

interface GoalItemProps {
  children: ReactNode;
  completed?: boolean;
}

const GoalItem = ({ children, completed = true }: GoalItemProps) => {
  return (
    <div
      className={`border-gray4 mb-4 flex h-[59px] w-[198px] items-center justify-start rounded-[6px] border pl-5 last:mb-0`}
    >
      <div className="flex items-center gap-3">
        <div className={`h-4 w-4 rounded-full`} />
        <p className={`text-base ${completed ? 'text-gray9' : 'text-gray6'}`}>{children}</p>
      </div>
    </div>
  );
};

export default GoalItem;
