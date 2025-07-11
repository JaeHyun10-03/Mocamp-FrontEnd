import { useEffect } from 'react';
import { useRoomStore } from '@/stores/todo-store';
import { useRoomSubscriber } from '@/hooks/room/useRoomSubscriber';
import { fetchRoomData, fetchRoomParticipants } from '@/apis/room';
import { useRoomStoreName } from '@/stores/roomStore';

export const useRoomSync = (roomId?: string) => {
  const {
    setAll,
    upsertGroup,
    toggleGoal,
    removeUser,
    setNotice,
    setAlert,
    setResolutionByUser,
    setTodosByUser,
  } = useRoomStore.getState();

  /* ---------- 1) 초기 로딩 ---------- */
  useEffect(() => {
    if (!roomId) return;
    (async () => {
      const [users, room] = await Promise.all([
        fetchRoomParticipants(roomId),
        fetchRoomData(roomId),
      ]);
      if (!users || !room) return;

      const groups = users.map((u) => ({
        userId: u.userId,
        goals: u.goals ?? [],
        resolution: u.resolution ?? '',
        isMyGoal: u.isMyGoal,
        isSecret: u.isSecret,
      }));
      setAll({ groups, parts: users, room });
      setNotice(room.notice ?? useRoomStore.getState().notice);
    })();
  }, [roomId, setAll, setNotice]);

  /* ---------- 2) 실시간 STOMP ---------- */
  useRoomSubscriber(roomId ?? null, {
    /* 목표 리스트 갱신 ----------------- */
    onListUpdate: (d) => {
      setTodosByUser(d.userId, d.goals);
      const prevIsMyGoal =
        useRoomStore.getState().todoGroups.find((g) => g.userId === d.userId)?.isMyGoal ?? false;

      upsertGroup({
        userId: d.userId,
        goals: d.goals,
        resolution: d.resolution ?? '',
        isMyGoal: prevIsMyGoal,
        isSecret: d.isSecret,
      });
    },

    onUserUpdate: (d) => {
      useRoomStore.setState((s) => {
        const exists = s.participants.some((p) => p.userId === d.userId);
        if (!exists) {
          s.participants.push({
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
          });
        }
      });

      const prev = useRoomStore.getState().todoGroups.find((g) => g.userId === d.userId);
      const prevIsMyGoal = prev?.isMyGoal ?? d.isMyGoal;

      upsertGroup({
        userId: d.userId,
        goals: d.goals ?? [],
        resolution: d.resolution ?? '',
        isMyGoal: prevIsMyGoal,
        isSecret: d.isSecret,
      });
    },

    /*  카메라 상태 변경 ------------------- */
    onCamStatusUpdate: (d) => {
      useRoomStore.setState((state) => {
        state.participants = state.participants.map((p) =>
          p.userId === d.userId ? { ...p, camStatus: d.camStatus } : p,
        );
      });
    },

    /*  마이크 상태 변경 ------------------- */
    onMicStatusUpdate: (d: { userId: number; micStatus: boolean }) => {
      useRoomStore.setState((state) => {
        state.participants = state.participants.map((p) =>
          p.userId === d.userId ? { ...p, micStatus: d.micStatus } : p,
        );
      });
    },

    /*  작업 상태 변경 ------------------- */
    onWorkStatusUpdate: (d) => {
      useRoomStore.setState((state) => {
        state.participants = state.participants.map((p) =>
          p.userId === d.userId ? { ...p, isWorking: d.workStatus } : p,
        );
      });
    },


    /*  개별 목표 토글 ------------------- */
    onCompleteUpdate: (d) => toggleGoal(d.userId, d.goalId, d.isCompleted),

    /* 유저 퇴장 ----------------------- */
    onUserLeave: (d) => removeUser(d.userId),

    /* 공지/다짐/알림 ------------------ */
    onNoticeUpdate: (d) => setNotice(d.content),
    onResolutionUpdate: (d) => setResolutionByUser(d.userId, d.resolution),
    onAlertUpdate: (d) => setAlert(d.minutesLeft),

    /* 방장 변경 ----------------------- */
    onAdminUpdate: (d) => {
      useRoomStore.setState((s) => {
        s.participants.forEach((p) => {
          if (p.username === d.previousAdminUsername) p.isAdmin = false;
          if (p.username === d.newAdminUsername) p.isAdmin = true;
        });
      });

      // 방장 이름 상태 전역으로 업데이트
      useRoomStoreName.getState().setAdminUsername(d.newAdminUsername);
    },
  });
};
