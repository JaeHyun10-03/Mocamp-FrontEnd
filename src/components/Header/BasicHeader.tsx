// 모캠프프 생성 페이지 + 웹 캠 프리뷰 페이지 사용 예정
import React from 'react';
import { useRouter } from 'next/router';

const BasicHeader = () => {
    //추후 마이홈 페이지로 라우팅 
    // const router = useRouter();

    // const handleLogoClick = () => {
    //     router.push('/myhome'); 
    // };
return (    
    <header className="w-full bg-white h-[100px] min-w-[1920px]">
    <div className="relative w-[1920px] h-full mx-auto">
        <img
        src="/svgs/MocampIcon.svg"
        alt="모캠프 로고"
        className="absolute top-[26px] left-[320px] w-[120px] h-[48.46px]"
        // onClick={handleLogoClick} 
        />
    </div>
    </header>
    )
};

export default BasicHeader;