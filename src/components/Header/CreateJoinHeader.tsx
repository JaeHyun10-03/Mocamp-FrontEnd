// 마이 홈 헤더
import { MYHOME_PATH, ROOM_CREATE_PATH } from '@/constants/routes';
import { enterRoom } from '@/apis/room';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const CreateJoinHeader = () => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isJoinModalOpen, setJoinModalOpen] = useState(false);
  const router = useRouter();

  // 모달 열기
  const handleCreateClick = () => setCreateModalOpen(true);

  const handleJoinClick = async () => {
    try {
      await enterRoom('38', {
        micTurnedOn: false,
        camTurnedOn: false,
      });

      router.push('/room/38');
      setJoinModalOpen(true);
    } catch (error) {
      console.error('방 입장 실패:', error);
      alert('방 입장에 실패했습니다.');
    }
  };

  // 모달 닫기
  const closeModals = () => {
    setCreateModalOpen(false);
    setJoinModalOpen(false);
  };

  const handleLogoClick = () => {
    router.asPath === MYHOME_PATH ? router.reload() : router.push(MYHOME_PATH);
  };

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
            onClick={handleJoinClick}
            className="my-auto flex h-[50.4px] w-[171px] cursor-pointer items-center justify-center rounded-[10px] bg-gray-100 text-[17.9px] leading-[100%] font-semibold tracking-[-0.02em] text-[#555555] hover:bg-gray-200"
          >
            모캠프 참여하기
          </button>
          <button
            type="button"
            onClick={() => router.push(ROOM_CREATE_PATH)}
            className="my-auto flex h-[50.4px] w-[171px] cursor-pointer items-center justify-center rounded-[10px] bg-[#27CFA5] text-[17.9px] leading-[100%] font-semibold tracking-[-0.02em] text-white hover:bg-teal-500"
          >
            모캠프 생성하기
          </button>
        </div>
      </div>

      {/* 추후 추가 */}
      {/* <Modal isOpen={isJoinModalOpen} onClose={closeModals} title="모캠프 참여하기">
        <p>링크 붙여넣기 모달창</p>
      </Modal> */}

      {/* <Modal isOpen={isCreateModalOpen} onClose={closeModals} title="모캠프 생성하기">
        <p>방 생성 모달</p>
      </Modal> */}
    </header>
  );
};

export default CreateJoinHeader;
