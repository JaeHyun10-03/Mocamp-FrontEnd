import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { subscribeWithSelector } from 'zustand/middleware';
import { RoomInfo } from '@/types/room';

import { Participant, Goal } from '@/types/room';

interface TodoGroup {
  userId: number;
  goals: Goal[];
  resolution: string;
  isMyGoal: boolean;
  isSecret: boolean;
}

interface RoomState {
  todoGroups: TodoGroup[];
  participants: Participant[];
  roomData: RoomInfo | null;
  notice: string;
  alertInfo: { visible: boolean; minutesLeft: number };

  /* 업데이트 메서드 */
  setAll: (payload: { groups: TodoGroup[]; parts: Participant[]; room: RoomInfo }) => void;
  upsertGroup: (group: TodoGroup) => void;
  toggleGoal: (userId: number, goalId: number, done: boolean) => void;
  removeUser: (userId: number) => void;
  setNotice: (notice: string) => void;
  setAlert: (m: number) => void;
  setTodosByUser: (userId: number, updated: Goal[]) => void;
  setResolutionByUser: (userId: number, value: string) => void;
}

export const useRoomStore = create<RoomState>()(
  subscribeWithSelector(
    immer<RoomState>((set) => ({
      todoGroups: [],
      participants: [],
      roomData: null,
      notice: '',
      alertInfo: { visible: false, minutesLeft: 0 },

      /* 메서드 */
      setAll: ({ groups, parts, room }) =>
        set((s) => {
          s.todoGroups = groups;
          s.participants = parts;
          s.roomData = room;
          if (!s.notice) s.notice = room.notice ?? '';
        }),

      upsertGroup: (group) =>
        set((s) => {
          const idx = s.todoGroups.findIndex((g) => g.userId === group.userId);
          const prev = s.todoGroups[idx];

          const next = {
            userId: group.userId,
            goals: group.goals.map((g) => ({ ...g })),
            resolution: group.resolution,
            isMyGoal: prev?.isMyGoal ?? group.isMyGoal,
            isSecret: group.isSecret,
          };

          idx !== -1 ? (s.todoGroups[idx] = next) : s.todoGroups.push(next);
        }),

      toggleGoal: (uid, gid, done) =>
        set((s) => {
          const grp = s.todoGroups.find((g) => g.userId === uid);
          const goal = grp?.goals.find((g) => g.goalId === gid);
          if (goal) goal.isCompleted = done;
        }),

      removeUser: (uid) =>
        set((s) => {
          s.todoGroups = s.todoGroups.filter((g) => g.userId !== uid);
          s.participants = s.participants.filter((p) => p.userId !== uid);
        }),
      setNotice: (n) => {
        set((s) => {
          s.notice = typeof n === 'string' ? n : '';
        });
      },
      setAlert: (m) => {
        set((s) => {
          s.alertInfo = { visible: m > 0, minutesLeft: m };
        });
      },

      setTodosByUser: (uid, updated) =>
        set((s) => {
          const grp = s.todoGroups.find((g) => g.userId === uid);
          if (grp) grp.goals = updated.map((goal) => ({ ...goal }));
        }),

      setResolutionByUser: (uid, value) =>
        set((s) => {
          const grp = s.todoGroups.find((g) => g.userId === uid);
          if (grp) grp.resolution = value;
        }),
    })),
  ),
);
