import { useState } from 'react';
import { Todo } from '@/types/todo';
import GoalModalWrapper from '@/components/todo/modal/GoalModalWrapper';

interface TodoEmptyContentProps {
  onAddTodos: (newTodos: Todo[]) => void;
}

const TodoEmptyContent = ({ onAddTodos }: TodoEmptyContentProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="flex h-full w-[480px] flex-col items-center justify-center gap-5 rounded-[20px] bg-[#FEFEFE]">
        <span className="text-2xl font-semibold text-[#C4C4C4]">오늘의 목표는 무엇인가요?</span>
        <button
          onClick={handleOpen}
          className="h-[60px] w-[160px] rounded-[10px] bg-[#27CFA5] text-2xl font-semibold text-white"
        >
          추가하기
        </button>
      </div>

      {showModal && (
        <GoalModalWrapper
          onClose={handleClose}
          mode="add"
          onSubmit={(newTodos) => {
            onAddTodos(newTodos);
            handleClose();
          }}
        />
      )}
    </>
  );
};

export default TodoEmptyContent;
