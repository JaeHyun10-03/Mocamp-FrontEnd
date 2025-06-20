interface SlideCardLayoutProps {
  title: string;
  description: React.ReactNode;
  children: React.ReactNode;
}

const SlideCardLayout = ({ title, description, children }: SlideCardLayoutProps) => {
  return (
    <div className="bg-gray2 border-gray4 flex h-[267px] w-[480px] shrink-0 gap-[28px] rounded-[20px] border px-[26.67px] pt-[36.27px] pb-[34.75px] lg:h-[375px] lg:w-[675px] lg:gap-10 lg:px-[37.5px] lg:pt-[51px] lg:pb-[48.87px] xl:h-[500px] xl:w-[900px] xl:gap-[54px] xl:px-[50px] xl:pt-[70px] xl:pb-[71.15px]">
      {/* 왼쪽 텍스트 */}
      <div className="flex w-full min-w-[145px] flex-col gap-[10.67px] lg:max-w-51 lg:gap-[14.75px] xl:max-w-[272px] xl:gap-5">
        <span className="text-primary xl:text-title2 flex h-6 items-center text-[15px] font-semibold tracking-[-0.02em] lg:h-[34px] lg:text-[21px] xl:h-[45px]">
          {title}
        </span>
        <span className="text-gray9 xl:text-title3 flex h-10 flex-col items-center text-left text-[12.8px] leading-[160%] font-medium tracking-[-0.02em] lg:h-[58px] lg:text-lg xl:h-[76px]">
          {description}
        </span>
      </div>

      {/* 오른쪽 콘텐츠 */}
      <div className="flex h-fit min-w-64 flex-col justify-center gap-[9.8px] lg:gap-[13.25px] xl:gap-[18px]">
        {children}
      </div>
    </div>
  );
};

export default SlideCardLayout;
