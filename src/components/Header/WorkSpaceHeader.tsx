//메인 작업 공간 사용 예정
import { useRouter } from 'next/router';
import React, { useState } from 'react';
//세팅 모달 개발 후 import

interface WorkspaceHeaderProps {
    roomName?: string;
    initialNotice?: string;
    isOwner?: boolean;
}

const WorkspaceHeader = ({
    // api 연결 후: roomname & Owner 판단 
    roomName = '은학샘과 아이들',
    initialNotice = '',
    isOwner = true,
}: WorkspaceHeaderProps) => {

    const router = useRouter();
    const [notice, setNotice] = useState(initialNotice);
    const [editing, setEditing] = useState(isOwner && !notice);

    const handleNoticeChange = (e: React.ChangeEvent<HTMLInputElement>) => setNotice(e.target.value);
    const handleNoticeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') setEditing(false);
    };

    const handleNoticeBlur = (e: React.FocusEvent<HTMLInputElement>) => 
        setEditing(false);


    const handleNoticeClick = () => {
    if (isOwner) setEditing(true);
    };

    const handleKakaoShare = () => {
        alert('추후 구현');
    }

    const handleCopyLink = async () => {
        try {
            const link = window.location.href;
            await navigator.clipboard.writeText(link);
            alert('링크가 복사되었습니다!');
        } catch (err) {
            console.error('링크 복사에 실패하였습니다:', err);
        }
    };
    
    //설정 모달 열고 닫기
    // const handleSettingClick = () => {
    //     setShowModal(true);
    // };

    // const closeModal = () => {
    //     setShowModal(false);
    // };

return (
    <header className="w-full bg-white h-[100px] min-w-[1920px] border-b-0">
    <div className="relative w-[1920px] h-full mx-auto">
        <img
        src="/svgs/MocampIcon.svg"
        alt="모캠프 로고"
        className="absolute top-[26px] left-[320px] w-[120px] h-[48.46px]"
        />

        {/* 방이름 */}
        <input
        type="text"
        value={roomName}
        readOnly
        className="
            absolute top-[20px] left-[495px]
            w-[300px] h-[60px]
            rounded-[10px] border border-[#E6E6E6] bg-white
            text-[#555555] font-pre font-semibold text-[20px] leading-[100%] tracking-[-0.02em]
            text-left pl-[24px] pr-[24px]
            focus:outline-none
        "
        />

        {/* 공지사항 필드 */}
        <div
        className="
            absolute top-[20px] left-[815px]
            w-[765px] h-[60px]
            rounded-[10px] border border-[#E8E8E8] bg-white
            flex items-center
            pl-[40px] pr-[10px]
            focus:outline-none
        "
        onClick={handleNoticeClick}
        >
        {editing && isOwner ? (
            <input
            type="text"
            value={notice}
            onChange={handleNoticeChange}
            onKeyDown={handleNoticeKeyDown}
            onBlur={handleNoticeBlur}
            placeholder="공지사항을 입력하세요"
            className="
                flex-1 bg-transparent outline-none border-none
                font-pre font-medium text-[20px] leading-[100%] tracking-[-0.02em]
                text-[#555555] placeholder-[#C4C4C4]
                text-left"
            autoFocus
            />
        ) : (
            <span
            className={`
                w-full h-full
                font-pre font-medium text-[20px] leading-[100%] tracking-[-0.02em]
                ${notice ? 'text-[#555555] font-semibold' : 'text-[#C4C4C4]'}
                text-left flex items-center
            `}
            >
            {notice || '공지사항을 입력하세요'}
            </span>
        )}
        </div>


        {/* 링크 복사 버튼 */}
        <button
        onClick={handleCopyLink}
        className="
            absolute top-[20px] left-[1600px]
            w-[60px] h-[60px]
            rounded-[10px] border border-[#E6E6E6] bg-white
            flex items-center justify-center
        "
        >
        <img src="/svgs/link_icon.svg" alt="링크 복사" className="w-[28px] h-[28px]" />
        </button>

        {/* 카카오 공유 버튼 */}
        <button
        onClick={handleKakaoShare}
        className="
            absolute top-[20px] left-[1670px]
            w-[60px] h-[60px]
            rounded-[10px] border border-[#E6E6E6] bg-white
            flex items-center justify-center
        "
        >
        <img src="/svgs/Kakao_link_icon.svg" alt="카카오톡 공유" className="w-[26px] h-[24px]" />
        </button>

        {/* 설정(?) 버튼 */}
        <button
        // onClick={handleSettingClick}
        className="
            absolute top-[20px] left-[1740px]
            w-[60px] h-[60px]
            rounded-[10px] border border-[#E6E6E6] bg-white
            flex items-center justify-center
        "
        >
        <img src="/svgs/setting_icon.svg" alt="설정" className="w-[28px] h-[28px]" />
        </button>
    </div>
    </header>
);
};

export default WorkspaceHeader;


