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
    <header className="sticky top-0 left-0 h-[53.333px] w-screen bg-white lg:h-[75px] xl:h-[100px]">
      <div className="relative mx-auto h-full w-full">
        <img
          src="/svgs/MocampIcon.svg"
          alt="모캠프 로고"
          className="absolute top-[13.67px] left-[170.67px] h-[25.83px] w-16 lg:top-[19.5px] lg:left-60 lg:h-[36.32px] lg:w-[90px] xl:top-[26px] xl:left-[320px] xl:h-[48.46px] xl:w-[120px]"
        />

        <div className="my-auto flex flex-row gap-[8.45px]">
          <button
            type="button"
            onClick={openJoinModal}
           className="font-pre absolute top-[13.33px] right-[266.4px] flex h-[27px] w-[92px] items-center justify-center rounded-[5.333px] bg-gray-100 px-4 py-2 text-[9.6px] leading-[100%] font-semibold tracking-[-0.02em] text-[#555555] hover:bg-gray-200 lg:top-[18.75px] lg:right-[376px] lg:h-[38.5px] lg:w-[128px] lg:rounded-[7.5px] lg:px-[22.5px] lg:py-[11.25px] lg:text-[13.5px] xl:top-[25px] xl:right-[501px] xl:h-[51px] xl:w-[171px] xl:rounded-[10px] xl:px-[20px] xl:py-[10px] xl:text-[18px]"
        >
            모캠프 참여하기
          </button>
          <button
            type="button"
            onClick={handleCreateClick}
            className="font-pre absolute top-[13.33px] right-[169.87px] flex h-[27px] w-[92px] items-center justify-center rounded-[5.333px] bg-[#27CFA5] px-4 py-2 text-[9.6px] leading-[100%] font-semibold tracking-[-0.02em] text-white hover:bg-teal-500 lg:top-[18.75px] lg:right-[240.25px] lg:h-[38.5px] lg:w-[128px] lg:rounded-[7.5px] lg:px-[22.5px] lg:py-[11.25px] lg:text-[13.5px] xl:top-[25px] xl:right-80 xl:h-[51px] xl:w-[171px] xl:rounded-[10px] xl:px-[20px] xl:py-[10px] xl:text-[18px]"
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
