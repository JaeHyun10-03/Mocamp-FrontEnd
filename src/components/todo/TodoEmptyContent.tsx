import { useState } from 'react';
import GoalModalWrapper from '@/components/todo/modal/GoalModalWrapper';
import { Goal } from '@/types/room';

interface TodoEmptyContentProps {
  onAddTodos: (newTodos: Goal[]) => void;
  roomId: string;
  isMyGoal: boolean;
  isSecret: boolean;
}

const TodoEmptyContent = ({ onAddTodos, roomId, isMyGoal, isSecret }: TodoEmptyContentProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  if (!isMyGoal) {
    return (
      <div className="flex h-full w-64 flex-col items-center justify-center rounded-[20px] bg-[#FEFEFE] lg:w-90 xl:w-[480px]">
        <span className="lg:text-subhead xl:text-title3 text-gray6 text-[12.8px]">
          오늘의 목표를 추가하지 않았어요
        </span>
      </div>
    );
  }

  return (
    <>
      <div className="flex h-full w-64 flex-col items-center justify-center gap-[10.64px] rounded-[20px] bg-[#FEFEFE] lg:w-90 lg:gap-[14.97px] xl:w-[480px] xl:gap-5">
        <span className="lg:text-subhead xl:text-title3 text-gray6 text-[12.8px]">
          오늘의 목표는 무엇인가요?
        </span>
        <button
          onClick={handleOpen}
          className="bg-primary lg:text-body2 xl:text-title3 h-[31.933px] w-[85.333px] cursor-pointer rounded-[5.333px] text-[12.8px] font-semibold text-white lg:h-[44.906px] lg:w-30 lg:rounded-[7.5px] xl:h-[60px] xl:w-[160px] xl:rounded-[10px]"
        >
          추가하기
        </button>
      </div>

      {showModal && (
        <GoalModalWrapper
          roomId={roomId}
          onClose={handleClose}
          mode="add"
          onSubmit={(newTodos) => {
            onAddTodos(newTodos);
            handleClose();
          }}
          isSecret={isSecret}
        />
      )}
    </>
  );
};

export default TodoEmptyContent;
