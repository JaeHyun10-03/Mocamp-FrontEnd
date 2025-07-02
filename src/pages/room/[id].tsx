'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';

import Arrow from '@/public/svgs/LeftArrowButton.svg';
import TodoSection from '@/components/todo/TodoSection';
import WorkspaceHeader from '@/components/Header/WorkSpaceHeader';
import Sidebar from '@/components/Sidebar/Sidebar';
import WebCamTile from '@/components/WebCam/WebCam';

import { leaveRoom } from '@/apis/room';
import { useRoomContext } from '@/hooks/room/useRoomContext';


const MAX_VISIBLE = 2;

const RoomPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const roomId = Array.isArray(id) ? id[0] : id;

  const { todoGroups, setTodosByUser, roomData, participants, alertInfo, setAlertVisible } =
    useRoomContext(roomId);

  const [slideIndex, setSlideIndex] = useState(0);

  if (!router.isReady || !roomId || !roomData || todoGroups.length === 0) return null;

  const slidingItems = todoGroups.slice(1);
  const visibleSlide = slidingItems.slice(slideIndex, slideIndex + MAX_VISIBLE);
  const visibleGroups = [todoGroups[0], ...visibleSlide];

  const canSlideLeft = slideIndex > 0;
  const canSlideRight = slideIndex + MAX_VISIBLE < slidingItems.length;

  const handleLeaveRoom = async () => {
    try {
      await leaveRoom(roomId as string);
      router.push('/myhome');
    } catch (e) {
      alert('방 퇴장 실패');
    }
  };

  return (
    <div className="bg-gray3 relative flex h-screen w-screen flex-1 items-center justify-center gap-5 pl-[106.667px] lg:pl-[150px] xl:pl-[200px]">
      <WorkspaceHeader roomName={roomData.roomName} />
      <Sidebar
        startTime={roomData.startedAt}
        endTime={roomData.endedAt}
        participants={participants.length}
        onLeaveRoom={handleLeaveRoom}
        alertInfo={alertInfo}
        onCloseAlert={() => setAlertVisible(false)}
      />
      <div className="flex w-full justify-center flex-col items-center">
        {/* 웹캠 영역 */}
        <div className="mb-5 flex gap-4">
          {participants.map((participant) => (
            <WebCamTile
              key={participant.userId}
              participant={participant}
              adminUsername={roomData.adminUsername}
              onToggleMedia={() => {}}
              onOpenDelegationModal={() => {}}
              onSetWorkStatus={() => {}}
            />
          ))}
        </div>
        <div className="relative flex items-center">
          {/* 왼쪽 화살표 */}
          {canSlideLeft && todoGroups.length > 3 && (
            <Arrow
              onClick={() => setSlideIndex((prev) => prev - 1)}
              className="absolute left-[-48px] h-8 w-8 cursor-pointer lg:left-[-67.5px] lg:h-[45px] lg:w-[45px] xl:left-[-90px] xl:h-[60px] xl:w-[60px]"
            />
          )}

          {/* TodoSection 리스트 */}
          <div className="flex gap-4">
            {visibleGroups.map((g) => (
              <TodoSection
                key={g.id}
                resolution={g.resolution}
                isMyGoal={g.isMyGoal}
                isSecret={g.isSecret}
                roomId={String(roomId)}
                todos={g.items}
                setTodos={(updated) => setTodosByUser(g.id, updated)}
              />
            ))}
          </div>

          {/* 오른쪽 화살표 */}
          {canSlideRight && todoGroups.length > 3 && (
            <Arrow
              onClick={() => setSlideIndex((prev) => prev + 1)}
              className="absolute right-[-48px] h-8 w-8 rotate-180 cursor-pointer lg:right-[-67.5px] lg:h-[45px] lg:w-[45px] xl:right-[-90px] xl:h-[60px] xl:w-[60px]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
