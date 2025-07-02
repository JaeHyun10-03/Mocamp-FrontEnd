import TodoEmptyContent from './TodoEmptyContent';
import ProgressCard from '@/components/todo/progress/ProgressCard';
import TodoSecretContent from './TodoSecretContent';
import TodoCard from './TodoCard';

import { Todo } from '@/types/todo';
import { useRoomPublisher } from '@/hooks/room/useRoomPublisher';

interface TodoSectionProps {
  roomId: string;
  todos: Todo[];
  resolution: string;
  isMyGoal: boolean;
  isSecret: boolean;
  setTodos: (newTodos: Todo[]) => void;
}
const TodoSection = ({
  roomId,
  todos,
  setTodos,
  resolution,
  isMyGoal,
  isSecret,
}: TodoSectionProps) => {
  const { toggleTodo } = useRoomPublisher(roomId);

  const handleToggleDone = (targetId: number, newDone: boolean) => {
    const updatedTodos = todos.map((todo) =>
      todo.goalId === targetId ? { ...todo, isCompleted: newDone } : todo,
    );
    setTodos(updatedTodos);
    toggleTodo(targetId, newDone);
  };

  const doneCount = todos.filter((t) => t.isCompleted).length;
  const shouldHide = isSecret && !isMyGoal;

  return (
    <div className="flex h-[336px] w-64 max-w-[789.33px] items-center justify-center overflow-x-auto lg:h-[472.5px] lg:w-90 lg:max-w-[1110px] xl:h-[630px] xl:w-[480px] xl:max-w-[1480px]">
      <div className="relative flex h-full w-full flex-col items-center">
        <div className="absolute top-[79.5px] h-[1.067px] w-[237.333px] bg-[repeating-linear-gradient(to_right,#F2F2F2_0_10px,transparent_10px_20px)] bg-[length:20px_2px] bg-repeat-x lg:top-[112px] lg:h-[1.5px] lg:w-[333.75px] xl:top-[149.5px] xl:h-[2px] xl:w-[445px]" />

        <ProgressCard
          roomId={roomId}
          todos={todos}
          done={doneCount}
          total={todos.length}
          onUpdateTodos={setTodos}
          resolution={resolution}
          isMyGoal={isMyGoal}
          isSecret={isSecret}
        />

        {todos.length > 0 ? (
          <TodoCard items={todos} onToggle={handleToggleDone} editable={isMyGoal} />
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
