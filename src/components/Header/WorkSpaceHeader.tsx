'use client';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import CommonModal from '@/components/common/modal/CommonModal';
import Portal from '../common/modal/Portal';
import { useRoomPublisher } from '@/hooks/room/useRoomPublisher';
import { useRoomContext } from '@/hooks/room/useRoomContext';
import CopyComplete from '@/components/Header/modal/Copy';

interface WorkspaceHeaderProps {
  roomName?: string;
  isOwner?: boolean;
  roomSeq?: string;
}

const WorkspaceHeader = ({ roomName = '', isOwner = true, roomSeq = '' }: WorkspaceHeaderProps) => {
  const router = useRouter();
  const { id } = router.query;
  const roomId = Array.isArray(id) ? id[0] : id;

  const { notice, setNotice } = useRoomContext(roomId as string);
  const { updateNotice } = useRoomPublisher(roomId as string);

  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const [isCopyModalOpen, setIsCopyModalOpen] = useState(false);
  const [isKakaoInitialized, setIsKakaoInitialized] = useState(false);

  const handleNoticeClick = () => {
    if (isOwner) setShowNoticeModal(true);
  };

  const handleNoticeSubmit = (newNotice: string) => {
    updateNotice(newNotice);
    setNotice(newNotice);
    setShowNoticeModal(false);
  };

  useEffect(() => {
    const waitForKakaoReady = () => {
      const checkLinkReady = setInterval(() => {
        if (window.Kakao?.Link) {
          setIsKakaoInitialized(true);
          console.log('Kakao SDK 완전 초기화 완료');
          clearInterval(checkLinkReady);
        } else {
          console.log('Kakao.Link 아직 준비되지 않음');
        }
      }, 100);
    };

    const tryInitKakao = () => {
      if (
        typeof window !== 'undefined' &&
        window.kakaoSdkLoaded &&
        window.Kakao &&
        !window.Kakao.isInitialized()
      ) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
        console.log('Kakao SDK 초기화 시작');
        waitForKakaoReady(); // 기다림
      } else if (window.Kakao?.isInitialized() && window.Kakao?.Link) {
        setIsKakaoInitialized(true);
        console.log('Kakao SDK 이미 초기화됨 + Link 준비됨');
      } else {
        console.log('Kakao SDK 아직 로드되지 않음');
      }
    };

    const loader = setInterval(() => {
      if (window.kakaoSdkLoaded) {
        tryInitKakao();
        clearInterval(loader);
      }
    }, 200);

    return () => clearInterval(loader);
  }, []);

  const handleKakaoShare = () => {
    const isLoggedIn = Boolean(localStorage.getItem('accessToken'));
    const targetUrl = isLoggedIn
      ? `${window.location.origin}/myhome`
      : `${window.location.origin}/login`;

    if (!roomSeq) {
      console.warn('방 고유번호(roomSeq)가 없어 카카오 공유를 할 수 없습니다.');
      return;
    }

    if (!isKakaoInitialized || !window.Kakao?.Link?.sendDefault) {
      console.error('Kakao SDK가 완전히 초기화되지 않았습니다.');
      return;
    }

    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '모캠프',
        description: `아래 번호를 입력하여 모캠프에 참여하세요! ${roomSeq}`,
        imageUrl: `${window.location.origin}/kakao_preview.png`,
        link: {
          mobileWebUrl: targetUrl,
          webUrl: targetUrl,
        },
      },
      buttons: [
        {
          title: '서비스 바로가기',
          link: {
            mobileWebUrl: targetUrl,
            webUrl: targetUrl,
          },
        },
      ],
    });
  };

  const handleCopyRoomSeq = async () => {
    if (!roomSeq) return;

    try {
      await navigator.clipboard.writeText(roomSeq);
      setIsCopyModalOpen(true);
      setTimeout(() => {
        setIsCopyModalOpen(false);
      }, 1500);
    } catch (err) {
      console.error('고유번호 복사 실패:', err);
    }
  };

  const handleGoToTutorial = () => {
    router.push('/tutorial');
  };

  return (
    <header className="fixed top-0 left-0 z-50 h-[53.34px] w-screen border-b-0 bg-white lg:h-[75px] xl:h-[100px]">
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

        {/* 고유 복사 버튼 */}
        <button
          onClick={handleCopyRoomSeq}
          className="absolute top-[10.67px] left-[853.34px] flex h-8 w-8 items-center justify-center rounded-[10px] border border-[#E6E6E6] bg-white lg:top-[15px] lg:left-300 lg:h-[45px] lg:w-[45px] xl:top-[20px] xl:left-400 xl:h-[60px] xl:w-[60px]"
        >
          <img
            src="/svgs/link_icon.svg"
            alt="고유번호 복사"
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

        {/* 튜토리얼 돌아가기 버튼 */}
        <button
          onClick={handleGoToTutorial}
          className="absolute top-[10.67px] left-[928px] flex h-8 w-8 items-center justify-center rounded-[10px] border border-[#E6E6E6] bg-white lg:top-[15px] lg:left-[1305px] lg:h-[45px] lg:w-[45px] xl:top-[20px] xl:left-[1740px] xl:h-[60px] xl:w-[60px]"
        >
          <img
            src="/svgs/que.svg"
            alt="튜토리얼로 돌아가기"
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

      {/* 고유 번호 복사 모달 */}
      {isCopyModalOpen && (
        <Portal>
          <CopyComplete onClose={() => setIsCopyModalOpen(false)} />
        </Portal>
      )}
    </header>
  );
};

export default WorkspaceHeader;
