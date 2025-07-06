import { useState } from 'react';
import { useRouter } from 'next/router';

import { fetchRoomDataBySeq } from '@/apis/room';
import { MYHOME_PATH, ROOM_CREATE_PATH } from '@/constants/routes';

import Portal from '../common/modal/Portal';
import JoinRoomModal from './modal/Join';

const CreateJoinHeader = () => {
  const [isJoinModalOpen, setJoinModalOpen] = useState(false);
  const router = useRouter();

  const openJoinModal = () => setJoinModalOpen(true);
  const closeJoinModal = () => setJoinModalOpen(false);

  const handleJoinRoom = async (roomSeq: string) => {
    try {
      const roomInfo = await fetchRoomDataBySeq(roomSeq);
      if (!roomInfo?.roomId) {
        throw new Error('유효하지 않은 방입니다.');
      }

      router.push({
        pathname: `/preview/${roomInfo.roomId}`,
        query: { from: 'join' },
      });

      closeJoinModal();
    } catch (error) {
      console.error('방 입장 실패:', error);
      alert('방 입장에 실패했습니다.');
    }
  };

  const handleCreateClick = () => router.push(ROOM_CREATE_PATH);

  const handleLogoClick = () => {
    if (router.asPath === MYHOME_PATH) {
      router.reload();
    } else {
      router.push(MYHOME_PATH);
    }
  };

  const baseButtonStyle =
    'my-auto flex h-[50.4px] w-[171px] cursor-pointer items-center justify-center rounded-[10px] text-[17.9px] leading-[100%] font-semibold tracking-[-0.02em]';

  return (
    <header className="h-[100px] justify-center bg-white">
      <div className="mx-auto flex h-full max-w-[1280px] justify-between">
        <img
          src="/svgs/MocampIcon.svg"
          alt="모캠프 로고"
          className="my-auto h-[48.46px] w-[120px] cursor-pointer"
          onClick={handleLogoClick}
        />

        <div className="my-auto flex flex-row gap-[8.45px]">
          <button
            type="button"
            onClick={openJoinModal}
            className={`${baseButtonStyle} bg-gray-100 text-[#555555] hover:bg-gray-200`}
          >
            모캠프 참여하기
          </button>
          <button
            type="button"
            onClick={handleCreateClick}
            className={`${baseButtonStyle} bg-[#27CFA5] text-white hover:bg-teal-500`}
          >
            모캠프 생성하기
          </button>
        </div>
      </div>

      {isJoinModalOpen && (
        <Portal>
          <JoinRoomModal onClose={closeJoinModal} onJoin={handleJoinRoom} />
        </Portal>
      )}
    </header>
  );
};

export default CreateJoinHeader;
