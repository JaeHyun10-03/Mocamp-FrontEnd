import { useEffect, useRef, useState } from 'react';
import TodoMoreIcon from '@/public/svgs/TodoMoreIcon.svg';
import PencilIcon from '@/public/svgs/PencilIcon.svg';

interface MoreMenuProps {
  onEditGoal: () => void;
  onEditCommitment?: () => void;
}

const MoreMenu = ({ onEditGoal, onEditCommitment }: MoreMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className="relative">
      <TodoMoreIcon
        className="h-[13.34px] w-[2.67px] cursor-pointer lg:h-[18.75px] lg:w-[3.75px] xl:h-[25px] xl:w-[6px]"
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && (
        <div className="border-gray4 absolute top-[18.67px] right-0 z-10 w-[83.34px] rounded-[5.333px] border-[0.533px] bg-white p-[10.67px] lg:top-[26.25px] lg:w-[116.65px] lg:rounded-[7.5px] lg:border-[0.75px] lg:p-[15px] xl:top-[35px] xl:w-[155px] xl:rounded-[10px] xl:border xl:p-5">
          <div
            className="flex cursor-pointer items-center gap-[4.8px] lg:gap-[6.75px] xl:gap-[9px]"
            onClick={onEditCommitment}
          >
            <PencilIcon className="h-2 w-[11.2px] lg:h-[11.25px] lg:w-[15.75px] xl:h-[15px] xl:w-[21px]" />
            <button className="w-full text-[8.533px] font-medium lg:text-xs xl:text-base">
              다짐 수정하기
            </button>
          </div>
          <div className="bg-gray4 my-[10.67px] h-[1px] lg:my-[15px] xl:my-[19.5px]" />
          <div
            className="flex cursor-pointer items-center gap-[4.8px] lg:gap-[6.75px] xl:gap-[9px]"
            onClick={() => {
              setIsOpen(false);
              onEditGoal();
            }}
          >
            <PencilIcon className="h-2 w-[11.2px] lg:h-[11.25px] lg:w-[15.75px] xl:h-[15px] xl:w-[21px]" />
            <button className="w-full text-[8.533px] font-medium lg:text-xs xl:text-base">
              목표 수정하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreMenu;
