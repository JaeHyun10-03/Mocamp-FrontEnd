//마이 홈 헤더
import React, { useState } from 'react';
//생성 & 링크 붙여넣기 모달 개발 후 import

const CreateJoinHeader = () => {
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const [isJoinModalOpen, setJoinModalOpen] = useState(false);

    //모달 열기
    const handleCreateClick = () => setCreateModalOpen(true);
    const handleJoinClick = () => setJoinModalOpen(true)
    
    //모달 닫기
    const closeModals = () => {
        setCreateModalOpen(false);
        setJoinModalOpen(false);
    };



return (
    <header className="w-full bg-white h-[100px] min-w-[1920px]">
    <div className="relative w-[1920px] h-full mx-auto">
        <img
        src="/svgs/MocampIcon.svg"
        alt="모캠프 로고"
        className="absolute top-[26px] left-[320px] w-[120px] h-[48.46px]"
        />

        <button
        type="button"
        // onClick={handleJoinClick}
        className="
        absolute top-[25px] left-[1248px]
        w-[171px] h-[51px]
        rounded-[10px]
        px-[20px] py-[10px]
        font-pre font-semibold
        text-[18px] leading-[100%] tracking-[-0.02em] 
        text-[#555555]
        bg-gray-100
        hover:bg-gray-200
        flex items-center justify-center"
        >
        모캠프 참여하기
        </button>


        <button
        type="button"
        // onClick={handleCreateClick}
        className="
        absolute top-[25px] left-[1429px]
        w-[171px] h-[51px]
        rounded-[10px]
        px-[20px] py-[10px]
        font-pre font-semibold
        text-[18px] leading-[100%] tracking-[-0.02em]
        text-white
        bg-[#27CFA5]
        hover:bg-teal-500
        flex items-center justify-center"
        >
        모캠프 생성하기
        </button>
    </div>
    {/* 추 후 추가 */}
    {/* {/*<Modal isOpen={isJoinModalOpen} onClose={closeModals} title="모캠프 참여하기">
        <p>링크 붙여넣기 모달창</p></Modal> */}


    {/* <Modal isOpen={isCreateModalOpen} onClose={closeModals} title="모캠프 생성하기기">
        <p>방 생성 모달달</p> </Modal> */}
    </header>
);
};

export default CreateJoinHeader;