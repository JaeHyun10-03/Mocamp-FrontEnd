'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';

import Arrow from '@/public/svgs/LeftArrowButton.svg';
import TodoSection from '@/components/todo/TodoSection';
import WorkspaceHeader from '@/components/Header/WorkSpaceHeader';
import Sidebar from '@/components/Sidebar/Sidebar';
import WebCamTile from '@/components/WebCam/WebCam';

import DelegationModal from '@/components/WebCam/modal/DelegationModal';
import NotDelegationModal from '@/components/WebCam/modal/NotDelegationModal';

import { leaveRoom } from '@/apis/room';
import { useRoomContext } from '@/hooks/room/useRoomContext';
import { useGroupCall } from '@/hooks/useGroupCall';
import type { Participant } from '@/types/room';

const MAX_VISIBLE = 2;
const RoomPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const roomId = Array.isArray(id) ? id[0] : id;

  const { todoGroups, setTodosByUser, roomData, participants, alertInfo, setAlertVisible } =
    useRoomContext(roomId);

  const me = participants.find((p) => p.isMyGoal);
  const myUserId = me?.userId ?? 0;
  const myUsername = me?.username ?? '';

  const camStatus = router.query.cam !== 'false';   
const micStatus = router.query.mic !== 'false';


  const {
    participants: callParticipants,
    toggleMedia,
    delegateAdmin,
    adminUsername,
    leaveRoom: leaveGroupCall,
    openDelegationModal,
    setParticipantWorkStatus,
    isDelegationOpen,
    setIsDelegationOpen,
    selectedDelegateId,
    setSelectedDelegateId,
  } = useGroupCall({
    roomId: Number(roomId ?? 0),
    myUserId,
    myUsername,
    camStatus,    
  micStatus,
  });

  const [slideIndex, setSlideIndex] = useState(0);
  const [isNotDelegationModalOpen, setIsNotDelegationModalOpen] = useState(false);

  if (!router.isReady || !roomId || !roomData || participants.length === 0) {
    return null;
  }

  const slidingItems = todoGroups.slice(1);
  const visibleSlide = slidingItems.slice(slideIndex, slideIndex + MAX_VISIBLE);
  const visibleGroups = [todoGroups[0], ...visibleSlide];

  const canSlideLeft = slideIndex > 0;
  const canSlideRight = slideIndex + MAX_VISIBLE < slidingItems.length;

  const handleLeaveRoom = async () => {
    try {
      await leaveRoom(roomId as string);
      leaveGroupCall();

      router.push('/myhome');
    } catch (e) {
      alert('방 퇴장 실패');
    }
  };

  return (
    <div className="bg-gray3 relative flex h-screen w-screen flex-1 items-center justify-center gap-5 pl-[106.667px] lg:pl-[150px] xl:pl-[200px]">
      <WorkspaceHeader roomName={roomData.roomName} roomSeq={roomData.roomSeq} />
      <Sidebar
        startTime={roomData.startedAt}
        endTime={roomData.endedAt}
        participants={participants.length}
        onLeaveRoom={handleLeaveRoom}
        alertInfo={alertInfo}
        onCloseAlert={() => setAlertVisible(false)}
      />
      <div className="relative flex h-full w-[789.33px] flex-col justify-center lg:w-[1110px] xl:w-[1480px]">
        {/* 웹캠 영역 */}
        <div className="mb-5 flex w-full gap-[10.67px] lg:gap-[15px] xl:gap-5">
          {Array.isArray(callParticipants) &&
            callParticipants.map((participant: Participant) => (
              <WebCamTile
                key={participant.userId}
                participant={participant}
                isLocal={participant.userId === myUserId}
                adminUsername={adminUsername}
                onToggleMedia={toggleMedia}
                onOpenDelegationModal={openDelegationModal}
                onShowNotDelegationModal={() => setIsNotDelegationModalOpen(true)}
                onSetWorkStatus={setParticipantWorkStatus}
              />
            ))}
        </div>

        <div className="flex">
          {/* 왼쪽 화살표 */}
          {canSlideLeft && todoGroups.length > 3 && (
            <Arrow
              onClick={() => setSlideIndex((prev) => prev - 1)}
              className="absolute top-1/2 left-[-48px] h-8 w-8 -translate-y-1/2 cursor-pointer lg:left-[-67.5px] lg:h-[45px] lg:w-[45px] xl:left-[-90px] xl:h-[60px] xl:w-[60px]"
            />
          )}

          {isDelegationOpen && (
            <DelegationModal
              participants={callParticipants}
              currentUserId={myUserId}
              selectedUserId={selectedDelegateId}
              onSelect={setSelectedDelegateId}
              onClose={() => setIsDelegationOpen(false)}
              onConfirm={() => {
                if (selectedDelegateId) {
                  delegateAdmin(selectedDelegateId);
                  setIsDelegationOpen(false);
                }
              }}
            />
          )}

          {isNotDelegationModalOpen && (
            <NotDelegationModal onClose={() => setIsNotDelegationModalOpen(false)} />
          )}

          {/* TodoSection 리스트 */}
          <div className="flex w-[789.33px] gap-[10.67px] lg:w-[1110px] lg:gap-[15px] xl:w-[1480px] xl:gap-5">
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
              className="absolute top-1/2 right-[-48px] h-8 w-8 -translate-y-1/2 rotate-180 cursor-pointer lg:right-[-67.5px] lg:h-[45px] lg:w-[45px] xl:right-[-90px] xl:h-[60px] xl:w-[60px]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
