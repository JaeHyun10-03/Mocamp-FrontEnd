import SlideCardLayout from '@/components/onBoarding/SlideCardLayout';
import Graph from '@/public/svgs/OnBoardingGraph.svg';
import Todo from '@/public/svgs/OnBoardingTodo.svg';

const AchievementCard = () => {
  return (
    <SlideCardLayout
      title="한 눈에 보는 성취도"
      description={
        <>
          작업한 시간과 달성한 목표를
          <br />
          확인하고 성취를 느껴보세요!
        </>
      }
    >
      <div className="flex h-fit min-w-64 flex-col justify-center gap-[9.8px] lg:gap-[7.5px] xl:gap-[18px]">
        <div className="bg-gray1 border-gray4 flex flex-col rounded-[10.67px] border pt-[8.53px] pr-[16.14px] pb-2 pl-4 lg:w-90 lg:rounded-[15px] lg:p-[22.5px] lg:text-[5.71px] xl:w-120 xl:rounded-[20px] xl:px-[30px] xl:pt-4 xl:pb-[15px]">
          <div className="bg-primary flex h-[12.7px] items-center justify-center rounded-t-[2.5318px] text-[4.06px] font-semibold text-white lg:h-[17.85px] lg:rounded-t-[3.5692px] xl:h-[23.8px] xl:w-105 xl:rounded-t-[4.7589px] xl:text-[7.6142px]">
            주은님이 그동안 달성한 목표 수는?
          </div>
          <div className="border-gray4 text-gray9 mb-[0.38px] ml-[0.18px] flex h-[29.67px] items-center justify-center rounded-b-[2.5318px] border-[0.2358px] border-t-0 text-[7.106px] font-semibold tracking-[-0.02em] lg:h-[41.75px] lg:rounded-b-[3.5692px] lg:text-[9.99px] xl:h-[55.7px] xl:w-105 xl:rounded-b-[4.7589px] xl:text-[13.3249px]">
            그동안 주은님은 123개의 목표를 달성했어요!
          </div>
        </div>
        <div className="bg-gray1 border-gray4 flex h-32 items-end gap-[7.28px] rounded-[10.67px] border px-[28.27px] pt-[6.93px] pb-[7.5px] lg:h-45 lg:w-90 lg:gap-[10.24px] lg:rounded-[15px] lg:px-[39.75px] lg:pt-[9.75px] lg:pb-[10.55px] xl:h-60 xl:w-120 xl:gap-[13.65px] xl:rounded-[20px] xl:p-[30px] xl:px-[53px] xl:pt-[13px] xl:pb-[14.07px]">
          <Graph className="h-[95px] lg:h-[133px] lg:w-[186px] xl:h-[178px] xl:w-[248px]" />
          <Todo className="h-[114px] lg:h-40 lg:w-[84.6px] xl:h-[213px] xl:w-[113px]" />
        </div>
      </div>
    </SlideCardLayout>
  );
};

export default AchievementCard;
