import clsx from 'clsx';
import { Todo } from '@/types/todo';

interface TodoCardProps {
  items: Todo[];
  onToggle: (id: string) => void;
}

const TodoCard = ({ items, onToggle }: TodoCardProps) => {
  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle(id);
    }
  };

  return (
    <div className="flex h-[479.6px] w-full rounded-[20px] bg-[#fefefe] py-[50px] pl-[50px] pr-[10px]">
      <div className="custom-scrollbar flex w-full flex-col gap-[20.32px] overflow-y-auto">
        {items.map((item) => (
          <div
            key={item.id}
            role="button"
            tabIndex={0}
            aria-checked={item.done}
            aria-disabled={false}
            onClick={() => onToggle(item.id)}
            onKeyDown={(e) => handleKeyDown(e, item.id)}
            className="flex cursor-pointer gap-5"
          >
            <div
              className={clsx(
                'h-[40.645px] w-[40px] shrink-0 rounded-[10px] border transition-colors duration-200',
                item.done
                  ? 'border-[#27cfa5] bg-[#BEF1E4]'
                  : 'border-[#E8E8E8] bg-[#ffffff]',
              )}
            />
            <span
              className={clsx(
                'w-full max-w-[320px] overflow-hidden whitespace-pre-line text-xl font-medium transition-all duration-200',
                item.done ? 'text-[#a7a7a7] line-through' : 'text-[#555]',
              )}
            >
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoCard;
