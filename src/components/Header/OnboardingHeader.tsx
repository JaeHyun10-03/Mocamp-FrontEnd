import React from 'react';
import { useRouter } from 'next/router';

const OnboardingHeader = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };
  return (
    <header className="h-[53.5px] w-screen bg-white lg:h-19 xl:h-[100px]">
      <div className="relative mx-auto h-full w-screen">
        <button
          type="button"
          onClick={handleLoginClick}
          className="font-pre absolute top-[13.3px] right-[170px] flex h-[27px] w-fit cursor-pointer items-center justify-center rounded-[5.333px] border border-solid border-[#27CFA5] bg-[#27CFA5] px-4 py-2 text-[9.6px] leading-[100%] font-semibold tracking-[-0.02em] text-white lg:top-[18.75px] lg:right-[239.5px] lg:h-[38.5px] lg:rounded-[7.5px] lg:px-[22.5px] lg:py-[11.25px] lg:text-[13.5px] xl:top-[25px] xl:right-80 xl:h-[51px] xl:w-[190px] xl:rounded-[10px] xl:px-[20px] xl:py-[10px] xl:text-[17px]"
        >
          로그인 후 시작하기
        </button>
      </div>
    </header>
  );
};

export default OnboardingHeader;
