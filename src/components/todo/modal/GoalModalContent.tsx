import { useState } from 'react';
import CloseButton from '@/public/svgs/CloseButton.svg';
import { Goal } from '@/types/room';

interface GoalModalContentProps {
  todos: Goal[];
  setTodos: React.Dispatch<React.SetStateAction<Goal[]>>;
  mode: 'add' | 'edit';
}

const GoalModalContent = ({ todos, setTodos }: GoalModalContentProps) => {
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleRemove = (targetId: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.goalId !== targetId));
  };

  const sortedTodos = [...todos].sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));

  return (
    <div className="custom-scrollbar-main flex h-[250.67px] flex-col gap-[5.333px] overflow-x-hidden overflow-y-auto lg:h-[352.5px] lg:gap-[7.5px] xl:h-[470px] xl:gap-[10px]">
      {todos.length === 0 ? (
        <span className="flex flex-1 items-center justify-center text-[10.67px] font-medium tracking-[0.02em] text-[#c4c4c4] lg:text-[15px] xl:text-[20px]">
          목표 생성하기 버튼을 눌러 <br /> 오늘의 목표를 설정하세요
        </span>
      ) : (
        sortedTodos.map((todoItem) => {
          const isCompleted = todoItem.isCompleted;
          const isEditing = editingId === todoItem.goalId || todoItem.content === '';

          const isLongList = todos.length > 5;
          const maxWidthClass = isLongList
            ? 'xl:max-w-[530px] lg:max-w-[397.5px] max-w-[282.67px]'
            : 'xl:max-w-[560px] lg:max-w-[427.5px] max-w-[312.67px]';

          return (
            <div
              key={todoItem.goalId}
              className={`flex h-fit w-full items-center justify-between rounded-[5.333px] border px-[21.33px] py-[12.17px] lg:rounded-[7.5px] lg:px-7.5 lg:py-[17.25px] xl:rounded-[10px] xl:px-10 xl:py-[23px] ${isCompleted ? 'border-[#e8e8e8] bg-[#fafafa]' : 'border-[#e8e8e8] bg-white'} ${maxWidthClass}`}
            >
              <div className="flex min-h-[13px] w-[188.8px] lg:min-h-[18px] lg:w-[315.5px] xl:min-h-6 xl:w-[404px]">
                {isEditing ? (
                  <textarea
                    autoFocus
                    rows={1}
                    maxLength={40}
                    className="h-[13px] max-h-12 w-full resize-none overflow-hidden bg-transparent text-[10.67px] leading-snug font-medium whitespace-pre-wrap text-[#555555] outline-none placeholder:text-[#c4c4c4] lg:h-4.5 lg:text-[15px] xl:h-6 xl:pt-[2px] xl:text-[20px]"
                    placeholder="세부 목표를 입력하세요"
                    value={todoItem.content}
                    onChange={(e) => {
                      const text = e.target.value;
                      const maxNewlines = 1; // 2줄까지 허용

                      const newlineCount = (text.match(/\n/g) || []).length;
                      if (newlineCount > maxNewlines) return;

                      setTodos((prev) =>
                        prev.map((t) =>
                          t.goalId === todoItem.goalId ? { ...t, content: text } : t,
                        ),
                      );
                    }}
                    onFocus={() => setEditingId(todoItem.goalId)}
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      target.style.height = 'auto';
                      target.style.height = `${target.scrollHeight}px`;
                    }}
                  />
                ) : (
                  <span
                    onClick={() => setEditingId(todoItem.goalId)}
                    className={`cursor-text text-[10.67px] font-medium whitespace-pre-wrap lg:text-[15px] xl:text-[20px] ${
                      isCompleted ? 'text-[#c4c4c4] line-through' : 'text-[#555555]'
                    }`}
                  >
                    {todoItem.content}
                  </span>
                )}
              </div>

              <button onClick={() => handleRemove(todoItem.goalId)}>
                <CloseButton
                  className={`h-[8.533px] w-[8.533px] cursor-pointer lg:h-3 lg:w-3 xl:h-4 xl:w-4 ${isCompleted ? 'hidden' : 'text-[#A7A7A7]'}`}
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
