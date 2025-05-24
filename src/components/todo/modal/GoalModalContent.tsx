import { useState } from 'react';
import { Todo } from '@/types/todo';
import CloseButton from '@/public/svgs/CloseButton.svg';

interface GoalModalContentProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  mode: 'add' | 'edit';
}

const GoalModalContent = ({ todos, setTodos }: GoalModalContentProps) => {
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleRemove = (targetId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== targetId));
  };

  const sortedTodos = [...todos].sort(
    (a, b) => Number(a.done) - Number(b.done),
  );

  return (
    <div className="custom-scrollbar flex h-[470px] flex-col gap-[10px] overflow-auto overflow-x-hidden">
      {todos.length === 0 ? (
        <span className="flex flex-1 items-center justify-center text-[20px] font-medium tracking-[0.02em] text-[#c4c4c4]">
          목표 생성하기 버튼을 눌러 <br /> 오늘의 목표를 설정하세요
        </span>
      ) : (
        sortedTodos.map((todoItem) => {
          const isCompleted = todoItem.done;
          const isEditing = editingId === todoItem.id || todoItem.text === '';

          return (
            <div
              key={todoItem.id}
              className={`flex h-auto min-h-[70px] w-full max-w-[560px] items-center justify-between rounded-[10px] border px-10 py-[23px] ${isCompleted ? 'border-[#e8e8e8] bg-[#fafafa]' : 'border-[#e8e8e8] bg-white'} `}
              style={{
                maxWidth: todos.length > 6 ? '530px' : '560px',
              }}
            >
              <div className="flex min-h-6 w-[404px]">
                {isEditing ? (
                  <textarea
                    autoFocus
                    rows={1}
                    maxLength={40}
                    className="h-6 max-h-12 w-full resize-none overflow-hidden bg-transparent pt-[2px] text-[20px] font-medium leading-none text-[#555555] outline-none placeholder:text-[#c4c4c4]"
                    placeholder="세부 목표를 입력하세요"
                    value={todoItem.text}
                    onChange={(e) => {
                      const text = e.target.value;
                      const maxNewlines = 1; // 2줄까지 허용

                      const newlineCount = (text.match(/\n/g) || []).length;
                      if (newlineCount > maxNewlines) return;

                      setTodos((prev) =>
                        prev.map((t) =>
                          t.id === todoItem.id ? { ...t, text } : t,
                        ),
                      );
                    }}
                    onFocus={() => setEditingId(todoItem.id)}
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      target.style.height = 'auto';
                      target.style.height = `${target.scrollHeight}px`;
                    }}
                  />
                ) : (
                  <span
                    onClick={() => setEditingId(todoItem.id)}
                    className={`cursor-text text-[20px] font-medium ${
                      isCompleted
                        ? 'text-[#c4c4c4] line-through'
                        : 'text-[#555555]'
                    }`}
                  >
                    {todoItem.text}
                  </span>
                )}
              </div>

              <button onClick={() => handleRemove(todoItem.id)}>
                <CloseButton
                  className={`h-4 w-4 cursor-pointer ${
                    isCompleted ? 'hidden' : 'text-[#A7A7A7]'
                  }`}
                />
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default GoalModalContent;
