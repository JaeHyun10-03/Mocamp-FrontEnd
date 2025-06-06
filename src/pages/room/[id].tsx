import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Todo } from '@/types/todo';
import TodoSection from '@/components/todo/TodoSection';
import { fetchRoomParticipants } from '@/apis/room';

const RoomPage = () => {
  const router = useRouter();
  const { id: roomId } = router.query;

  const [todoGroups, setTodoGroups] = useState<{ id: string; items: Todo[] }[]>([]);

  useEffect(() => {
    if (!roomId) return;

    const loadData = async () => {
      const participants = await fetchRoomParticipants(roomId as string);
      if (!participants) return;

      const formatted = participants.map((user) => ({
        id: String(user.userId),
        items: Array.isArray(user.goalList)
          ? user.goalList.map((text, idx) => ({
              id: `${user.userId}-${idx}`,
              text,
              done: false,
            }))
          : [],
      }));

      setTodoGroups(formatted);
      console.log(todoGroups);
    };

    loadData();
  }, [roomId]);

  return (
    <div className="bg-gray3 flex h-screen w-screen items-center gap-5 pl-[320px]">
      {todoGroups.map((group) => (
        <TodoSection key={group.id} todos={group.items} />
      ))}
    </div>
  );
};

export default RoomPage;
