import clsx from 'clsx';
import { Goal } from '@/types/room';

interface TodoCardProps {
  goals: Goal[];
  onToggle: (id: number, isCompleted: boolean) => void;
  editable?: boolean;
}

const TodoCard = ({ goals, onToggle, editable }: TodoCardProps) => {
  const handleKeyDown = (e: React.KeyboardEvent, id: number, done: boolean) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle(id, done);
    }
  };

  return (
    <div className="flex h-64 w-full rounded-[10.67px] bg-[#fefefe] py-[26.67px] pr-[10px] pl-[26.67px] lg:h-90 lg:rounded-[15px] lg:py-[37.5px] lg:pl-[37.5px] xl:h-120 xl:rounded-[20px] xl:py-[50px] xl:pl-[50px]">
      <div className="custom-scrollbar flex w-full flex-col gap-[10.67px] overflow-y-auto lg:gap-4 xl:gap-[20.32px]">
        {goals.map((item) => (
          <div
            role={editable ? 'button' : undefined}
            tabIndex={editable ? 0 : -1}
            aria-checked={item.isCompleted}
            aria-disabled={!editable}
            onClick={editable ? () => onToggle(item.goalId, !item.isCompleted) : undefined}
            onKeyDown={(e) => handleKeyDown(e, item.goalId, !item.isCompleted)}
            className={clsx(
              'flex items-center gap-[10.67px] lg:gap-[15px] xl:gap-5',
              editable ? 'cursor-pointer' : 'cursor-default',
            )}
          >
            <div
              className={clsx(
                'h-[21.333px] w-[21.333px] shrink-0 self-baseline rounded-[5.333px] border transition-colors duration-200 lg:h-7.5 lg:w-7.5 lg:rounded-[7.5px] xl:h-[40.645px] xl:w-[40px] xl:rounded-[10px]',
                item.isCompleted
                  ? 'border-[#27cfa5] bg-[#BEF1E4]'
                  : 'border-[#E8E8E8] bg-[#ffffff]',
              )}
            />
            <span
              className={clsx(
                'w-full max-w-[170.67px] overflow-hidden text-[10.67px] font-medium whitespace-pre-line transition-all duration-200 lg:max-w-60 lg:text-[15px] xl:max-w-80 xl:text-xl',
                item.isCompleted ? 'text-[#a7a7a7] line-through' : 'text-[#555]',
              )}
            >
              {item.content}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoCard;
