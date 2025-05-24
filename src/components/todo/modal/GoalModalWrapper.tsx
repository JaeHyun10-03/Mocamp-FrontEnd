import { useState } from 'react';
import UnsecretIcon from '@/public/svgs/UnsecretIcon.svg';
import ModalLayout from '@/components/common/modal/ModalLayout';
import GoalModalContent from './GoalModalContent';
import CloseButton from '@/public/svgs/CloseButton.svg';
import { Todo } from '@/types/todo';
import { v4 as uuidv4 } from 'uuid';

interface GoalModalWrapperProps {
  onClose: () => void;
  mode: 'add' | 'edit';
  todos?: Todo[];
  onSubmit: (updatedTodos: Todo[]) => void;
}

const GoalModalWrapper = ({
  onClose,
  mode,
  todos,
  onSubmit,
}: GoalModalWrapperProps) => {
  const [currentTodos, setCurrentTodos] = useState<Todo[]>(todos || []);

  const handleAddTodo = () => {
    setCurrentTodos((prev) => [
      {
        id: uuidv4(),
        text: '',
        done: false,
      },
      ...prev,
    ]);
  };

  return (
    <ModalLayout onClose={onClose} width="660px" height="880px">
      <button
        className="absolute right-[50px] top-[50px] h-[25px] w-[25px] text-[#d9d9d9]"
        onClick={onClose}
      >
        <CloseButton />
      </button>

      {/* 헤더 */}
      <div className="mb-[50px] flex flex-col gap-[10px]">
        <div className="flex w-[530px] justify-between">
          <span className="text-[32px] font-semibold text-[#555555]">
            나의 목표 관리
          </span>
          {/* <UnsecretIcon className="w-[30px] h-[38px]" /> */}
        </div>
        <span className="text-lg font-semibold text-[#a7a7a7]">
          나의 목표를 자유롭게 설정할 수 있어요
        </span>
      </div>
      <GoalModalContent
        todos={currentTodos}
        setTodos={setCurrentTodos}
        mode={mode}
      />

      {/* 하단 버튼 */}
      <div className="absolute bottom-[50px] flex h-[84px] w-full items-center gap-5">
        <button
          onClick={handleAddTodo}
          className="w-[187px] rounded-[10px] border border-[#e8e8e8] bg-white px-10 py-[30px] text-[18px] font-semibold tracking-[-0.02em] text-[#27cfa5]"
        >
          목표 생성하기
        </button>
        <button
          onClick={() => {
            const filtered = currentTodos.filter(
              (todo) => todo.text.trim() !== '',
            );
            onSubmit(filtered);
            onClose();
          }}
          className="w-[353px] rounded-[10px] bg-[#27cfa5] px-10 py-[30px] text-[20px] font-semibold text-white"
        >
          완료하기
        </button>
      </div>
    </ModalLayout>
  );
};

export default GoalModalWrapper;
