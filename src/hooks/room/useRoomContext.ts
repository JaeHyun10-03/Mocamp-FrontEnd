'use client';

import { useEffect, useState, useCallback } from 'react';
import { fetchRoomData, fetchRoomParticipants } from '@/apis/room';
import { useRoomSubscriber } from '@/hooks/room/useRoomSubscriber';
import type { Goal, Participant, RoomInfo } from '@/types/room';

export interface TodoGroup {
  userId: number;
  goals: Goal[];
  resolution: string;
  isMyGoal: boolean;
  isSecret: boolean;
}

export const useRoomContext = (roomId?: string) => {
  const [todoGroups, setTodoGroups] = useState<TodoGroup[]>([]);
  const [notice, setNotice] = useState('');
  const [roomData, setRoomData] = useState<RoomInfo | null>(null);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [alertInfo, setAlertInfo] = useState({ visible: false, minutesLeft: 0 });

  useEffect(() => {

    if (!roomId) {
    
      return; 
    }

    const load = async () => {
      const [users, room] = await Promise.all([
        fetchRoomParticipants(roomId),
        fetchRoomData(roomId),
      ]);
      if (!users || !room) return;

      setParticipants(users);
      setRoomData(room);
      setNotice(room.notice ?? '');

      const formatted = users.map((u) => ({
        userId: u.userId,
        goals: u.goals ?? [],
        resolution: u.resolution ?? '',
        isMyGoal: u.isMyGoal,
        isSecret: u.isSecret,
      }));
      setTodoGroups(formatted);
    };

    load();
  }, [roomId]); 

  useRoomSubscriber(roomId ?? null, {
    onListUpdate: (d) => {
      if (!d?.goals || typeof d.userId !== 'number') return;

      setTodoGroups((prev) => {
        const updated = {
          userId: d.userId,
          goals: d.goals,
          resolution: d.resolution ?? '',
          isMyGoal: d.isMyGoal ?? false,
          isSecret: d.isSecret ?? false,
        };
        const exists = prev.some((g) => g.userId === d.userId);
        return exists ? prev.map((g) => (g.userId === d.userId ? updated : g)) : [...prev, updated];
      });
    },

    onUserUpdate: (d) => {
      if (typeof d.userId !== 'number') return;

      const newUser: Participant = {
        userId: d.userId,
        username: d.username,
        goals: d.goals ?? [],
        resolution: d.resolution ?? '',
        isMyGoal: d.isMyGoal,
        isSecret: d.isSecret,
        isAdmin: false,
        camStatus: false,
        micStatus: false,
        isWorking: false,
      };

      setParticipants((prev) => {
        const exists = prev.some((p) => p.userId === newUser.userId);
        return exists ? prev : [...prev, newUser];
      });

      setTodoGroups((prev) => {
        const exists = prev.some((g) => g.userId === newUser.userId);
        if (exists) return prev;
        return [
          ...prev,
          {
            userId: newUser.userId,
            resolution: newUser.resolution,
            goals: newUser.goals,
            isMyGoal: newUser.isMyGoal,
            isSecret: newUser.isSecret,
          },
        ];
      });
    },

    onUserLeave: (d) => {
      if (typeof d.userId !== 'number') return;
      setParticipants((prev) => prev.filter((p) => p.userId !== d.userId));
      setTodoGroups((prev) => prev.filter((g) => g.userId !== d.userId));
    },

    onCompleteUpdate: (d) => {
      setTodoGroups((prev) =>
        prev.map((g) => {
          if (g.userId !== d.userId) return g;
          return {
            ...g,
            goals: g.goals.map((goal) =>
              goal.goalId === d.goalId ? { ...goal, isCompleted: d.isCompleted } : goal,
            ),
          };
        }),
      );
    },

    onResolutionUpdate: (d) => {
      setTodoGroups((prev) =>
        prev.map((g) => (g.userId === d.userId ? { ...g, resolution: d.resolution } : g)),
      );
    },

    onNoticeUpdate: (d) => {
      if (typeof d.notice === 'string') {
        setNotice(d.notice);
      }
    },

    onAlertUpdate: (d) => {
      if (typeof d.minutesLeft !== 'number') return;
      setAlertInfo({ visible: true, minutesLeft: d.minutesLeft });
    },
  });

  const setTodosByUser = useCallback((userId: number, updated: Goal[]) => {
    setTodoGroups((prev) => prev.map((g) => (g.userId === userId ? { ...g, goals: updated } : g)));
  }, []);

  const setAlertVisible = (visible: boolean) => {
    setAlertInfo((prev) => ({ ...prev, visible }));
  };

  return {
    todoGroups,
    setTodosByUser,
    roomData,
    participants,
    alertInfo,
    setAlertVisible,
    notice,
    setNotice,
  };
};
