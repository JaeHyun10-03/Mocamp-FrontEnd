import React from 'react';
import { useRouter } from 'next/router';

const OnboardingHeader = () => {
const router = useRouter();

const handleLoginClick = () => {
    router.push('/login'); 
};
    return (
    <header className="w-full bg-white h-[100px] min-w-[1920px]">
    <div className="relative w-[1920px] h-full mx-auto">
    {/* 버튼(기존 디자인에서 패딩값, 폰트 크기 차이 존재*/}
    <button
        type="button"
        onClick={handleLoginClick}
        className="
            absolute top-[25px] left-[1410px]
            w-[190px] h-[51px]
            rounded-[10px] border border-solid border-[#27CFA5]
            px-[20px] py-[10px]
            font-pre font-semibold
            text-[17px] leading-[100%] tracking-[-0.02em]
            text-white
            bg-[#27CFA5]
            hover:bg-teal-500
            flex items-center justify-center"
        >
        로그인 후 시작하기
        </button>
    </div>
    </header>
);
};

export default OnboardingHeader;


