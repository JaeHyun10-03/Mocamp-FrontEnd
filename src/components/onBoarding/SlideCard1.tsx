import React from 'react';

const SlideCard1 = () => {
  return (
    // 전체 카드 컨테이너
    <div className="bg-gray2 border-gray4 flex h-[500px] w-[900px] shrink-0 gap-[54px] rounded-[20px] border px-[50px]">
      {/* 왼쪽 텍스트 블럭 (제목 + 설명) */}
      <div className="flex w-full flex-col gap-5">
        {/* 슬로건 제목 */}
        <span className="text-primary text-title2 mt-[68px] flex h-[45px] items-center">
          누구나 쉬운 목표 관리
        </span>

        {/* 설명 문구 */}
        <span className="text-gray9 text-title3 flex h-[76px] items-center leading-[160%] font-medium">
          오늘 수행할 목표를 작성하고, <br />
          체크박스를 눌러 게이지 UP!
        </span>
      </div>

      {/* 오른쪽 카드 콘텐츠 (진행도 + 투두리스트) */}
      <div className="flex flex-col justify-center gap-[18px]">
        {/* 진행도 박스 */}
        <div className="bg-gray1 border-gray4 mt-[3px] flex flex-col gap-5 rounded-[20px] border p-[30px]">
          <div className="flex items-center gap-[20.38px]">
            {/* 진행 상태 뱃지 */}
            <span className="text-blue border-blue rounded-4xl border bg-[#D7F0FF] px-[30px] py-[10px] text-lg font-medium">
              1/2
            </span>

            {/* 진행 설명 */}
            <span className="text-gray9 text-body1">목표 두 개 꼭 완수하기!</span>
          </div>

          {/* 게이지 바 */}
          <div className="bg-gray3 relative h-[27.84px] w-[417.7px] rounded-[20px]">
            <div className="bg-primary absolute top-0 left-0 h-full w-[208.5px] rounded-[20px]" />
          </div>
        </div>

        {/* 투두 리스트 박스 */}
        <div className="border-gray4 flex flex-col gap-5 rounded-[20px] border bg-white p-[50px]">
          {/* 투두 항목 1 (완료) */}
          <div className="flex items-center gap-5">
            <div className="border-primary h-10 w-10 rounded-[10px] border bg-[#BEF1E4]" />
            <span className="text-gray6 text-body1 line-through">디자인 가이드라인 설정하기</span>
          </div>

          {/* 투두 항목 2 (미완료) */}
          <div className="flex items-center gap-5">
            <div className="border-gray4 bg-gray1 h-10 w-10 rounded-[10px] border" />
            <span className="text-body1 text-gray9">중충실도 와이어프레임 설계하기</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideCard1;
