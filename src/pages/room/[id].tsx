'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Arrow from '@/public/svgs/LeftArrowButton.svg';
import TodoSection from '@/components/todo/TodoSection';
import WorkspaceHeader from '@/components/Header/WorkSpaceHeader';
import Sidebar from '@/components/Sidebar/Sidebar';
import WebCamTile from '@/components/WebCam/WebCam';
import DelegationModal from '@/components/WebCam/modal/DelegationModal';
import NotDelegationModal from '@/components/WebCam/modal/NotDelegationModal';

import { leaveRoom } from '@/apis/room';
import { useRoomSync } from '@/hooks/room/useRoomSync';
import { useOpenVidu } from '@/hooks/useOpenVidu';
import { useRoomStore } from '@/stores/todo-store';
import { useRoomStoreName } from '@/stores/roomStore';
import { useTutorial } from '@/stores/tutorial-store';
import Tutorial from '@/components/WebCam/tutorial/Tutorial';

const MAX_VISIBLE = 2;

const RoomPage = () => {
  const router = useRouter();
  const { id, from, cam, mic } = router.query;
  const { step, startTutorial } = useTutorial();

  const roomId = Array.isArray(id) ? id[0] : id || '';
  const isHost = from === 'create';
  const camStatus = cam !== 'false';
  const micStatus = mic !== 'false';

  useEffect(() => {
    useRoomStore.getState().setIsHost(isHost);
  }, [isHost]);

  useRoomSync(roomId);

  const todoGroups = useRoomStore((s) => s.todoGroups);
  const participants = useRoomStore((s) => s.participants);
  const roomData = useRoomStore((s) => s.roomData);
  const alertInfo = useRoomStore((s) => s.alertInfo);
  const notice = useRoomStore((s) => s.notice);

  const setAlert = useRoomStore((s) => s.setAlert);
  const setAlertVisible = (visible: boolean) => {
    setAlert(visible ? alertInfo.minutesLeft : 0);
  };
  const setTodosByUser = useRoomStore((s) => s.setTodosByUser);

  const me = participants.find((p) => p.isMyGoal);
  const myUserId = me?.userId ?? 0;
  const myUsername = me?.username ?? '';

  useEffect(() => {
    if (me?.username) {
      useRoomStoreName.getState().setMyUsername(me.username);
    }
  }, [me?.username]);

  const { session, publisher, subscribers, joinSession, leaveSession, toggleCam, toggleMic } =
    useOpenVidu({
      sessionId: String(roomId),
      userName: myUsername,
    });

  useEffect(() => {
    if (session && roomId && myUsername) {
      joinSession();
    }
  }, [session, roomId, myUsername]);

  const handleLeaveRoom = async () => {
    try {
      await leaveRoom(roomId);
      leaveSession();
      router.push('/myhome');
    } catch (e) {
      alert('방 퇴장 실패');
    }
  };

  useEffect(() => {
    if (roomId && myUsername && !session) {
      joinSession();
    }
  }, [roomId, myUsername, session, joinSession]);

  const [slideIndex, setSlideIndex] = useState(0);
  const [isNotDelegationModalOpen, setIsNotDelegationModalOpen] = useState(false);

  const meGroup = todoGroups.find((g) => g.isMyGoal);
  const othersTodo = todoGroups.filter((g) => !g.isMyGoal);
  const sortedOthersTodo = [...othersTodo].sort((a, b) => a.userId - b.userId);
  const visibleTodoSlide = sortedOthersTodo.slice(slideIndex, slideIndex + MAX_VISIBLE);

  const visibleTodoGroups = meGroup ? [meGroup, ...visibleTodoSlide] : visibleTodoSlide;
  const canSlideLeft = slideIndex > 0;
  const canSlideRight = slideIndex + MAX_VISIBLE < othersTodo.length;

  useEffect(() => {
    if (othersTodo.length > MAX_VISIBLE && slideIndex + MAX_VISIBLE >= othersTodo.length) {
      setSlideIndex(Math.max(0, othersTodo.length - MAX_VISIBLE));
    }
  }, [othersTodo.length, slideIndex]);

  useEffect(() => {
    const record = localStorage.getItem('tutorial');
    if (!record) {
      startTutorial();
      localStorage.setItem('tutorial', '1');
    }
  }, [step]);

  if (
    !router.isReady ||
    !roomId ||
    !roomData ||
    participants.length === 0 ||
    todoGroups.length === 0
  ) {
    return null;
  }

  return (
    <>
      {Number(step) > 0 ? (
        <Tutorial />
      ) : (
        <div className="bg-gray3 relative flex h-screen w-screen flex-1 items-center justify-center gap-5 pl-[106.667px] lg:pl-[150px] xl:pl-[200px]">
          <WorkspaceHeader
            roomName={roomData.roomName}
            roomSeq={roomData.roomSeq}
            isOwner={isHost}
          />
          <Sidebar
            startTime={roomData.startedAt}
            endTime={roomData.endedAt}
            participants={participants.length}
            onLeaveRoom={handleLeaveRoom}
            alertInfo={alertInfo}
            onCloseAlert={() => setAlertVisible(false)}
          />
          <div className="relative flex h-full w-[789.33px] flex-col justify-center pt-[53.333px] lg:w-[1110px] lg:pt-[75px] xl:w-[1480px] xl:pt-[100px]">
            <div className="mb-[10.67px] flex w-full gap-[10.67px] lg:mb-[15px] lg:gap-[15px] xl:mb-5 xl:gap-5">
              {publisher && (
                <WebCamTile
                  key="me"
                  streamManager={publisher}
                  isLocal={true}
                  toggleCamera={toggleCam}
                  toggleMic={toggleMic}
                  roomId={String(roomId)}
                  myUserId={myUserId}
                  participants={participants}
                />
              )}
              {subscribers.map((subscriber, index) => (
                <WebCamTile
                  key={subscriber.stream.connection.connectionId}
                  streamManager={subscriber}
                  isLocal={false}
                  roomId={String(roomId)}
                  myUserId={myUserId}
                  participants={participants}
                />
              ))}
            </div>

            <div className="flex">
              {canSlideLeft && todoGroups.length > 3 && (
                <Arrow
                  onClick={() => setSlideIndex((prev) => prev - 1)}
                  className="absolute top-1/2 left-[-48px] h-8 w-8 -translate-y-1/2 cursor-pointer lg:left-[-67.5px] lg:h-[45px] lg:w-[45px] xl:left-[-90px] xl:h-[60px] xl:w-[60px]"
                />
              )}

              {isNotDelegationModalOpen && (
                <NotDelegationModal onClose={() => setIsNotDelegationModalOpen(false)} />
              )}

              <div className="flex w-[789.33px] gap-[10.67px] lg:w-[1110px] lg:gap-[15px] xl:w-[1480px] xl:gap-5">
                {visibleTodoGroups.map((g) => (
                  <TodoSection
                    key={g.userId}
                    userId={g.userId}
                    resolution={g.resolution}
                    isMyGoal={g.isMyGoal}
                    isSecret={g.isSecret}
                    roomId={String(roomId)}
                    goals={g.goals}
                    setTodos={(updated) => setTodosByUser(g.userId, updated)}
                  />
                ))}
              </div>

              {canSlideRight && todoGroups.length > 3 && (
                <Arrow
                  onClick={() => setSlideIndex((prev) => prev + 1)}
                  className="absolute top-1/2 right-[-48px] h-8 w-8 -translate-y-1/2 rotate-180 cursor-pointer lg:right-[-67.5px] lg:h-[45px] lg:w-[45px] xl:right-[-90px] xl:h-[60px] xl:w-[60px]"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RoomPage;
