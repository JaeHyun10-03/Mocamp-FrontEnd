import { useState } from 'react';
import TodoEmptyContent from './TodoEmptyContent';
import ProgressCard from '@/components/todo/progress/ProgressCard';
import TodoCard from './TodoCard';
import { Todo } from '@/types/todo';

interface TodoSectionProps {
  todos: Todo[];
}

const TodoSection = ({ todos: initialTodos }: TodoSectionProps) => {
  const [todos, setTodos] = useState(initialTodos);

  const doneCount = todos.filter((item) => item.done).length;

  const handleToggleDone = (targetId: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === targetId ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  return (
    <div className="flex h-[630px] w-[480px] items-center justify-center">
      {todos.length > 0 ? (
        <div className="relative flex h-full w-full flex-col items-center">
          <div className="absolute top-[149.5px] h-[2px] w-[445px] bg-[repeating-linear-gradient(to_right,#F2F2F2_0_10px,transparent_10px_20px)] bg-[length:20px_2px] bg-repeat-x" />
          <ProgressCard
            todos={todos}
            done={doneCount}
            total={todos.length}
            onUpdateTodos={setTodos}
          />
          <TodoCard items={todos} onToggle={handleToggleDone} />
        </div>
      ) : (
        <TodoEmptyContent
          onAddTodos={(newTodos) => {
            setTodos(newTodos);
          }}
        />
      )}
    </div>
  );
};

export default TodoSection;
