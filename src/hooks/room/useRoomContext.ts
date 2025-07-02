'use client';

import { useCallback, useEffect, useState } from 'react';
import { Todo } from '@/types/todo';
import { fetchRoomData, fetchRoomParticipants } from '@/apis/room';
import { useRoomSubscriber } from '@/hooks/room/useRoomSubscriber';
import { Participant, RoomInfo } from '@/types/room';

export interface TodoGroup {
  id: number;
  items: Todo[];
  resolution: string;
  isMyGoal: boolean;
  isSecret: boolean;
}

export const useRoomContext = (roomId?: string) => {
  const [todoGroups, setTodoGroups] = useState<TodoGroup[]>([]);
  const [notice, setNotice] = useState('');
  const [roomData, setRoomData] = useState<RoomInfo | null>(null);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [alertInfo, setAlertInfo] = useState<{
    visible: boolean;
    minutesLeft: number;
  }>({ visible: false, minutesLeft: 0 });

  useEffect(() => {
    if (!roomId) return;

    const loadData = async () => {
      const [users, room] = await Promise.all([
        fetchRoomParticipants(roomId),
        fetchRoomData(roomId),
      ]);
      if (!users || !room) return;

      setParticipants(users);
      setRoomData(room);
      setNotice(room.notice ?? '');

      const formatted = users.map((u) => ({
        id: u.userId,
        items: (u.goals ?? []).map((g) => ({
          goalId: g.goalId,
          content: g.content,
          isCompleted: g.isCompleted,
        })),
        resolution: u.resolution ?? '',
        isMyGoal: u.isMyGoal,
        isSecret: u.isSecret,
      }));
      setTodoGroups(formatted);
    };

    loadData();
  }, [roomId]);

  useRoomSubscriber(roomId && typeof roomId === 'string' ? roomId : null, {
    // 목표 리스트 업데이트
    onListUpdate: (d) => {
      if (!d?.goals || typeof d.userId !== 'number') return;

      setTodoGroups((prev) => {
        const prevGroup = prev.find((g) => g.id === d.userId);

        const formatted: TodoGroup = {
          id: d.userId,
          items: d.goals.map((g: any) => ({
            goalId: g.goalId,
            content: g.content,
            isCompleted: g.isCompleted,
          })),
          resolution: d.resolution ?? '',
          isMyGoal: d.isMyGoal ?? prevGroup?.isMyGoal ?? false,
          isSecret: d.isSecret ?? prevGroup?.isSecret ?? false,
        };

        return prev.some((g) => g.id === d.userId)
          ? prev.map((g) => (g.id === d.userId ? formatted : g))
          : [...prev, formatted];
      });
    },

    // 사용자 입장 시 참가자 목록 업데이트
    onUserUpdate: (d) => {
      if (typeof d.userId !== 'number') return;

      const newParticipant: Participant = {
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
        const exists = prev.some((p) => p.userId === newParticipant.userId);
        return exists ? prev : [...prev, newParticipant];
      });

      setTodoGroups((prev) => {
        const exists = prev.some((g) => g.id === newParticipant.userId);
        if (exists) return prev;

        const newGroup: TodoGroup = {
          id: newParticipant.userId,
          resolution: newParticipant.resolution ?? '',
          items: (newParticipant.goals ?? []).map((g: any) => ({
            goalId: g.goalId,
            content: g.content,
            isCompleted: g.isCompleted,
          })),
          isMyGoal: newParticipant.isMyGoal,
          isSecret: newParticipant.isSecret,
        };

        return [...prev, newGroup];
      });
    },

    // 유저 퇴장 시 참가자 목록 업데이트
    onUserLeave: (d) => {
      if (typeof d.userId !== 'number') return;

      setParticipants((prev) => prev.filter((p) => p.userId !== d.userId));
      setTodoGroups((prev) => prev.filter((g) => g.id !== d.userId));
    },

    // 목표 토글 업데이트
    onCompleteUpdate: (d) => {
      setTodoGroups((prev) =>
        prev.map((g) =>
          g.id === d.userId
            ? {
                ...g,
                items: g.items.map((i) =>
                  i.goalId === d.goalId ? { ...i, isCompleted: d.isCompleted } : i,
                ),
              }
            : g,
        ),
      );
    },

    // 다짐 업데이트
    onResolutionUpdate: (d) => {
      setTodoGroups((prev) =>
        prev.map((g) => (g.id === d.userId ? { ...g, resolution: d.resolution } : g)),
      );
    },

    // 공지사항 업데이트
    onNoticeUpdate: (d) => {
      if (typeof d.notice === 'string') {
        setNotice(d.notice);
      }
    },

    // 알람 업데이트
    onAlertUpdate: (d) => {
      if (typeof d.minutesLeft !== 'number') return;
      setAlertInfo({
        visible: true,
        minutesLeft: d.minutesLeft,
      });
    },
  });

  const setTodosByUser = useCallback((userId: number, updated: Todo[]) => {
    setTodoGroups((prev) => prev.map((g) => (g.id === userId ? { ...g, items: updated } : g)));
  }, []);

  const setAlertVisible = (visible: boolean) => {
    setAlertInfo((prev) => ({ ...prev, visible }));
  };

  return {
    todoGroups,
    setTodosByUser,
    notice,
    setNotice,
    roomData,
    participants,
    alertInfo,
    setAlertVisible,
  };
};
