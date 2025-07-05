import { useState } from 'react';

import ModalLayout from '@/components/common/modal/ModalLayout';
import GoalModalContent from './GoalModalContent';

import UnlockButton from '@/public/svgs/UnlockIcon.svg';
import LockButton from '@/public/svgs/LockIcon.svg';

import { useRoomPublisher } from '@/hooks/room/useRoomPublisher';
import { Todo } from '@/types/todo';

interface GoalModalWrapperProps {
  onClose: () => void;
  mode: 'add' | 'edit';
  todos?: Todo[];
  onSubmit: (updatedTodos: Todo[]) => void;
  roomId: string;
  isSecret: boolean;
}

const GoalModalWrapper = ({
  onClose,
  mode,
  todos = [],
  onSubmit,
  roomId,
  isSecret,
}: GoalModalWrapperProps) => {
  const [currentTodos, setCurrentTodos] = useState<Todo[]>(todos);
  const { updateGoals } = useRoomPublisher(roomId);
  const [isPrivate, setIsPrivate] = useState(isSecret);

  const handleAddTodo = () => {
    setCurrentTodos((prev) => [
      {
        goalId: Date.now(),
        content: '',
        isCompleted: false,
      },
      ...prev,
    ]);
  };

  const handleSubmit = () => {
    const filtered = currentTodos.filter((todo) => todo.content.trim() !== '');

    const createGoals = filtered
      .filter((todo) => !todos.some((t) => t.goalId === todo.goalId))
      .map((todo) => ({ content: todo.content }));

    const deleteGoals = todos
      .filter((t) => !filtered.some((todo) => todo.goalId === t.goalId))
      .map((t) => {
        const idAsNumber = Number(t.goalId);
        return isNaN(idAsNumber) ? undefined : idAsNumber;
      })
      .filter((id): id is number => id !== undefined);

    updateGoals(createGoals, deleteGoals, isPrivate);
    onSubmit(filtered);
    onClose();
  };

  return (
    <ModalLayout
      onClose={onClose}
      className="h-[470px] w-[352px] lg:h-[660px] lg:w-[495px] xl:h-[880px] xl:w-[660px]"
    >
      <button
        className="absolute top-[21.67px] right-[21.67px] h-4 w-4 cursor-pointer lg:top-[37.5px] lg:right-[37.5px] lg:h-[22.5px] lg:w-[22.5px] xl:top-[50px] xl:right-[50px] xl:h-[30px] xl:w-[30px]"
        onClick={() => setIsPrivate((prev) => !prev)}
      >
        {isPrivate ? <LockButton /> : <UnlockButton />}
      </button>

      {/* 헤더 */}
      <div className="mb-[26.87px] flex flex-col gap-[5.6px] lg:mb-[37.25px] lg:gap-[7px] xl:mb-[50px] xl:gap-[10px]">
        <div className="flex w-[530px] justify-between">
          <span className="text-gray9 text-[17.067px] font-semibold lg:text-2xl xl:text-[32px]">
            나의 목표 관리
          </span>
        </div>
        <span className="text-gray7 text-[9.6px] font-semibold lg:text-[13.5px] xl:text-lg">
          나의 목표를 자유롭게 설정할 수 있어요
        </span>
      </div>

      <GoalModalContent todos={currentTodos} setTodos={setCurrentTodos} mode={mode} />

      {/* 하단 버튼 */}
      <div className="absolute bottom-[26.67px] flex h-[44.8px] w-full items-center gap-[10.67px] lg:bottom-[37.5px] lg:h-16 lg:gap-[15px] xl:bottom-[50px] xl:h-[84px] xl:gap-5">
        <button
          onClick={handleAddTodo}
          className="h-full w-[99.67px] cursor-pointer rounded-[5.333px] border border-[#e8e8e8] bg-white text-[10.67px] font-semibold tracking-[-0.02em] text-[#27cfa5] hover:bg-[#b2b2b2] hover:text-[#1B9174] lg:w-[140px] lg:rounded-[7.5px] lg:text-[15px] xl:w-[187px] xl:rounded-[10px] xl:text-[18px]"
        >
          목표 생성하기
        </button>
        <button
          onClick={handleSubmit}
          className="h-full w-[188.267px] cursor-pointer rounded-[10px] bg-[#27cfa5] text-[10.67px] font-semibold text-white hover:bg-[#1B9174] hover:text-[#B2B2B2] lg:w-[264.75px] lg:text-[15px] xl:w-[353px] xl:text-[20px]"
        >
          완료하기
        </button>
      </div>
    </ModalLayout>
  );
};

export default GoalModalWrapper;
