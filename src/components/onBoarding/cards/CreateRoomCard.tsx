import SlideCardLayout from '@/components/onBoarding/SlideCardLayout';

const CreateRoomCard = () => {
  return (
    <SlideCardLayout
      title="함께 할 모각작 방 생성"
      description={
        <>
          모각작 방을 만들고 바로 시작!
          <br />
          쉽고 빠르게 설정할 수 있어요
        </>
      }
    >
      {/* 오른쪽 카드 콘텐츠 */}
      <div className="flex h-fit w-fit min-w-64 flex-col justify-center gap-[5.33px] lg:gap-[7.5px] xl:gap-[10px]">
        <div className="bg-gray1 border-gray4 flex gap-[8.28px] rounded-[10.67px] border pt-[15.47px] pr-[11.97px] pb-[17.67px] pl-[12.27px] lg:gap-[11.64px] lg:rounded-[15px] lg:pt-[21.75px] lg:pr-[16.84px] lg:pb-[24.85px] lg:pl-[17.25px] xl:gap-[15.52px] xl:rounded-[20px] xl:pt-[29px] xl:pr-[22.45px] xl:pb-[33.14px] xl:pl-[23px]">
          <div className="text-gray9 flex flex-col gap-[8.28px] text-[9.9325px] font-semibold tracking-[-0.02em] lg:gap-[11.52px] lg:text-[13.97px] xl:gap-[16.02px] xl:text-[18.6px]">
            <div className="flex items-center gap-[3.9px] lg:gap-[5.71px] xl:gap-[7.94px]">
              <span>
                방 이름 <span className="text-primary">*</span>
              </span>
              <span className="text-gray6 text-[6.62px] font-medium lg:text-[9.31px] xl:text-[12.41px]">
                최대 20자
              </span>
            </div>
            <div className="bg-gray3 text-gray9 h-fit max-h-[69.84px] min-h-[37.25px] min-w-[144.85px] rounded-[4.14px] px-[16.55px] py-[13.62px] text-[8.28px] font-medium lg:min-h-[52.378px] lg:min-w-[203.7px] lg:rounded-[5.82px] lg:px-[23.28px] lg:py-[19.18px] lg:text-[11.64px] xl:min-h-[69.84px] xl:min-w-[271.59px] xl:rounded-[7.76px] xl:px-[31.04px] xl:py-[25.42px] xl:text-[15.51px]">
              은학샘과 아이들
            </div>
          </div>
          <div className="text-gray9 flex flex-col gap-[8.28px] text-[9.9325px] font-semibold tracking-[-0.02em] lg:gap-[11.52px] lg:text-[13.97px] xl:gap-[16.02px] xl:text-[18.6px]">
            <div className="flex items-center gap-[3.9px] lg:gap-[5.71px] xl:gap-[7.94px]">
              <span>
                마이크 설정 <span className="text-primary">*</span>
              </span>
            </div>
            <div className="bg-gray3 text-gray9 h-fit max-h-[69.84px] min-w-[78.6px] rounded-[4.14px] px-[25.04px] py-[9.49px] text-[15.51px] font-medium lg:rounded-[5.82px] lg:px-[35.15px] lg:py-[13.37px] xl:min-w-[146.7px] xl:rounded-[7.76px] xl:px-[46.7px] xl:py-[17.66px]">
              <div className="bg-primary flex max-h-[34.5px] w-fit items-center justify-center rounded-[413.44px] px-[8.28px] py-[4.14px] text-center text-[8.28px] font-semibold text-white lg:px-[11.64px] lg:py-[5.82px] lg:text-[11.64px] xl:px-[15.52px] xl:py-[7.76px] xl:text-[15.52px]">
                <span>ON</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray1 border-gray4 flex gap-[8.28px] rounded-[10.67px] border pt-[15.47px] pr-[11.97px] pb-[17.67px] pl-[12.27px] lg:gap-[11.64px] lg:rounded-[15px] lg:pt-[21.75px] lg:pr-[16.84px] lg:pb-[24.85px] lg:pl-[17.25px] xl:gap-[15.52px] xl:rounded-[20px] xl:pt-[29px] xl:pr-[22.45px] xl:pb-[33.14px] xl:pl-[23px]">
          <div className="text-gray9 flex flex-col gap-[8.28px] text-[9.9325px] font-semibold tracking-[-0.02em] lg:gap-[11.52px] lg:text-[13.97px] xl:gap-[16.02px] xl:text-[18.6px]">
            <div className="flex items-center gap-[3.9px] lg:gap-[5.71px] xl:gap-[7.94px]">
              <span>
                진행 시간 <span className="text-primary">*</span>
              </span>
              <span className="text-gray6 text-[6.62px] font-medium lg:text-[9.31px] xl:text-[12.41px]">
                최대 12시간
              </span>
            </div>
            <div className="bg-gray3 text-gray9 flex h-fit max-h-[37.25px] min-w-[144.85px] items-center justify-center gap-[4.14px] rounded-[4.14px] px-[27.66px] py-[10.35px] text-[9.9325px] font-medium lg:min-h-[52.37px] lg:min-w-[203.7px] lg:gap-[5.82px] lg:rounded-[5.8198px] lg:px-[39.34px] lg:py-[14.55px] lg:text-[13.967px] xl:min-h-[69.84px] xl:min-w-[271.59px] xl:gap-[7.76px] xl:rounded-[7.76px] xl:px-[52.62px] xl:py-[19.4px] xl:text-[18.623px]">
              <div className="text-primary border-gray4 w-fit rounded-[4.1385px] border-[0.4139px] bg-white px-[8.28px] py-[2.07px] text-center lg:px-[11.64px] lg:py-[2.91px] xl:px-[15.52px] xl:py-[3.88px]">
                3
              </div>
              <span className="text-gray9">시간</span>

              <div className="text-primary border-gray4 w-fit rounded-[4.1385px] border-[0.4139px] bg-white px-[8.28px] py-[2.07px] text-center lg:px-[11.64px] lg:py-[2.91px] xl:px-[15.52px] xl:py-[3.88px]">
                15
              </div>
              <span>분</span>
            </div>
          </div>
          <div className="text-gray9 flex flex-col gap-[8.28px] text-[9.9325px] font-semibold tracking-[-0.02em] lg:gap-[11.52px] lg:text-[13.97px] xl:gap-[16.02px] xl:text-[18.6px]">
            <div className="flex items-center gap-[3.9px] lg:gap-[5.71px] xl:gap-[7.94px]">
              <span>
                인원 수 <span className="text-primary">*</span>
              </span>
              <span className="text-gray6 text-[6.62px] font-medium lg:text-[9.31px] xl:text-[12.41px]">
                최대 5명
              </span>
            </div>
            <div className="bg-gray3 text-gray9 flex h-fit max-h-[69.84px] min-w-[78.6px] items-center gap-[4.14px] rounded-[4.14px] px-[20.97px] py-[10.35px] text-[9.9325px] font-medium lg:gap-[5.82px] lg:rounded-[5.82px] lg:px-[29.74px] lg:py-[14.55px] lg:text-[13.967px] xl:min-w-[146.7px] xl:gap-[7.76px] xl:rounded-[7.76px] xl:px-[39.82px] xl:py-[19.4px] xl:text-[18.623px]">
              <div className="text-primary border-gray4 w-fit gap-[4.14px] rounded-[4.1385px] border-[0.4139px] bg-white px-[8.28px] py-[2.07px] text-center lg:px-[11.64px] lg:py-[2.91px] xl:px-[15.52px] xl:py-[3.88px]">
                4
              </div>
              <span>명</span>
            </div>
          </div>
        </div>
      </div>
    </SlideCardLayout>
  );
};

export default CreateRoomCard;
