import TodoEmptyContent from './TodoEmptyContent';
import ProgressCard from '@/components/todo/progress/ProgressCard';
import TodoSecretContent from './TodoSecretContent';
import TodoCard from './TodoCard';

import { useRoomPublisher } from '@/hooks/room/useRoomPublisher';
import { Goal } from '@/types/room';

interface TodoSectionProps {
  roomId: string;
  goals: Goal[];
  resolution: string;
  isMyGoal: boolean;
  isSecret: boolean;
  setTodos: (newTodos: Goal[]) => void;
}
const TodoSection = ({
  roomId,
  goals,
  setTodos,
  resolution,
  isMyGoal,
  isSecret,
}: TodoSectionProps) => {
  const { toggleTodo } = useRoomPublisher(roomId);

  const handleToggleDone = (targetId: number, newDone: boolean) => {
    const updatedTodos = goals.map((todo) =>
      todo.goalId === targetId ? { ...todo, isCompleted: newDone } : todo,
    );
    setTodos(updatedTodos);
    toggleTodo(targetId, newDone);
  };

  const doneCount = goals.filter((t) => t.isCompleted).length;
  const shouldHide = isSecret && !isMyGoal;

  return (
    <div className="flex h-[336px] w-64 overflow-x-auto lg:h-[472.5px] lg:w-90 xl:h-[630px] xl:w-120">
      <div className="relative flex h-full flex-col">
        <div className="absolute top-[79.5px] h-[1.067px] w-[237.333px] bg-[repeating-linear-gradient(to_right,#F2F2F2_0_10px,transparent_10px_20px)] bg-[length:20px_2px] bg-repeat-x lg:top-[112px] lg:h-[1.5px] lg:w-[333.75px] xl:top-[149.5px] xl:h-[2px] xl:w-[445px]" />

        <ProgressCard
          roomId={roomId}
          todos={goals}
          done={doneCount}
          total={goals.length}
          onUpdateTodos={setTodos}
          resolution={resolution}
          isMyGoal={isMyGoal}
          isSecret={isSecret}
        />

        {goals.length > 0 ? (
          <TodoCard goals={goals} onToggle={handleToggleDone} editable={isMyGoal} />
        ) : (
          <TodoEmptyContent
            onAddTodos={setTodos}
            roomId={roomId}
            isMyGoal={isMyGoal}
            isSecret={isSecret}
          />
        )}

        {/* 비공개 오버레이 */}
        {shouldHide && <TodoSecretContent />}
      </div>
    </div>
  );
};

export default TodoSection;
