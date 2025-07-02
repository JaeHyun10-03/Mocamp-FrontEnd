'use client';

import { useRouter } from 'next/router';
import React, { useState } from 'react';
import CommonModal from '@/components/common/modal/CommonModal';
import Portal from '../common/modal/Portal';
import { useRoomPublisher } from '@/hooks/room/useRoomPublisher';
import { useRoomContext } from '@/hooks/room/useRoomContext';

interface WorkspaceHeaderProps {
  roomName?: string;
  isOwner?: boolean;
}

const WorkspaceHeader = ({ roomName = '', isOwner = true }: WorkspaceHeaderProps) => {
  const { id } = useRouter().query;
  const roomId = Array.isArray(id) ? id[0] : id;

  const { notice, setNotice } = useRoomContext(roomId as string);
  const { updateNotice } = useRoomPublisher(roomId as string);

  const [showNoticeModal, setShowNoticeModal] = useState(false);

  const handleNoticeClick = () => {
    if (isOwner) setShowNoticeModal(true);
  };

  const handleNoticeSubmit = (newNotice: string) => {
    updateNotice(newNotice);
    setNotice(newNotice);
    setShowNoticeModal(false);
  };

  const handleKakaoShare = () => {
    alert('추후 구현');
  };

  const handleCopyLink = async () => {
    try {
      const link = window.location.href;
      await navigator.clipboard.writeText(link);
      alert('링크가 복사되었습니다!');
    } catch (err) {
      console.error('링크 복사에 실패하였습니다:', err);
    }
  };

  return (
    <header className="fixed top-0 left-0 h-[53.34px] w-screen border-b-0 bg-white lg:h-[75px] xl:h-[100px]">
      <div className="relative mx-auto h-full w-full">
        {/* 로고 */}
        <img
          src="/svgs/MocampIcon.svg"
          alt="모캠프 로고"
          className="absolute top-[13.87px] left-[170.67px] h-[25.83px] w-16 lg:top-[19.5px] lg:left-60 lg:h-[36.323px] lg:w-[90px] xl:top-[26px] xl:left-[320px] xl:h-[48.46px] xl:w-[120px]"
        />

        {/* 방 이름 */}
        <input
          type="text"
          value={roomName}
          readOnly
          className="font-pre absolute top-[10.67px] left-[264px] h-8 w-40 rounded-[10px] border border-[#E6E6E6] bg-white px-[16.53px] text-left text-[10.67px] leading-[100%] font-semibold tracking-[-0.02em] text-[#555555] focus:outline-none lg:top-[15px] lg:left-[371.25px] lg:h-[45px] lg:w-[225px] lg:px-[23.25px] lg:text-[15px] xl:top-[20px] xl:left-[495px] xl:h-[60px] xl:w-[300px] xl:px-6 xl:text-[20px]"
        />

        {/* 공지사항 필드 */}
        <div
          className="absolute top-[10.67px] left-[434.67px] flex h-8 w-102 items-center rounded-[10px] border border-[#E8E8E8] bg-white px-[21.33px] focus:outline-none lg:top-[15px] lg:left-[611px] lg:h-[45px] lg:w-[573.75px] lg:px-7.5 xl:top-[20px] xl:left-[815px] xl:h-[60px] xl:w-[765px] xl:px-10"
          onClick={handleNoticeClick}
        >
          <span
            key={notice}
            className={`font-pre h-full w-full text-[10.67px] leading-[100%] font-medium tracking-[-0.02em] lg:text-[15px] xl:text-[20px] ${notice ? 'font-semibold text-[#555555]' : 'text-[#C4C4C4]'} flex items-center text-left`}
          >
            {notice === '' ? '공지사항을 입력하세요' : notice}
          </span>
        </div>

        {/* 링크 복사 버튼 */}
        <button
          onClick={handleCopyLink}
          className="absolute top-[10.67px] left-[853.34px] flex h-8 w-8 items-center justify-center rounded-[10px] border border-[#E6E6E6] bg-white lg:top-[15px] lg:left-300 lg:h-[45px] lg:w-[45px] xl:top-[20px] xl:left-400 xl:h-[60px] xl:w-[60px]"
        >
          <img
            src="/svgs/link_icon.svg"
            alt="링크 복사"
            className="h-[15px] w-[15px] lg:h-[21px] lg:w-[21px] xl:h-[28px] xl:w-[28px]"
          />
        </button>

        {/* 카카오 공유 버튼 */}
        <button
          onClick={handleKakaoShare}
          className="absolute top-[10.67px] left-[890.67px] flex h-8 w-8 items-center justify-center rounded-[10px] border border-[#E6E6E6] bg-white lg:top-[15px] lg:left-[1252.5px] lg:h-[45px] lg:w-[45px] xl:top-[20px] xl:left-[1670px] xl:h-[60px] xl:w-[60px]"
        >
          <img
            src="/svgs/Kakao_link_icon.svg"
            alt="카카오톡 공유"
            className="h-[12.8px] w-[13.867px] lg:h-4.5 lg:w-[19.5px] xl:h-[24px] xl:w-[26px]"
          />
        </button>

        {/* 설정 버튼 */}
        <button className="absolute top-[10.67px] left-[928px] flex h-8 w-8 items-center justify-center rounded-[10px] border border-[#E6E6E6] bg-white lg:top-[15px] lg:left-[1305px] lg:h-[45px] lg:w-[45px] xl:top-[20px] xl:left-[1740px] xl:h-[60px] xl:w-[60px]">
          <img
            src="/svgs/setting_icon.svg"
            alt="설정"
            className="h-[15px] w-[15px] lg:h-[21px] lg:w-[21px] xl:h-[28px] xl:w-[28px]"
          />
        </button>
      </div>

      {/* 공지사항 수정 모달 */}
      {showNoticeModal && (
        <Portal>
          <CommonModal
            title="공지사항"
            description="전체 인원에게 알릴 공지사항을 한 줄로 작성할 수 있어요"
            placeholder="공지사항을 작성하세요"
            initialValue={notice ?? ''}
            onSubmit={handleNoticeSubmit}
            onClose={() => setShowNoticeModal(false)}
          />
        </Portal>
      )}
    </header>
  );
};

export default WorkspaceHeader;
