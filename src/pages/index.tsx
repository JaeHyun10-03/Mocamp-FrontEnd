import MocampIcon from '@/public/svgs/MocampIcon.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import CreateRoomCard from '@/components/onBoarding/cards/CreateRoomCard';
import AchievementCard from '@/components/onBoarding/cards/AchievementCard';
import GoalManagementCard from '@/components/onBoarding/cards/GoalManagementCard';

const slides = [CreateRoomCard, AchievementCard, GoalManagementCard];

const OnBoarding = () => {
  return (
    <div className="bg-gray1 relative flex h-screen w-screen flex-col items-center justify-center">
      <MocampIcon className="mb-[26.72px] h-[54px] w-[133px] object-contain lg:mb-[37.58px] lg:h-[75.7px] lg:w-[187.5px] xl:mb-[50.1px] xl:h-[100px] xl:w-[250px]" />
      <p className="text-gray9 xl:text-title2 mb-[26.13px] text-[15px] leading-[160%] font-medium lg:mb-[36.5px] lg:text-[21px] xl:mb-[49px]">
        함께 모여 캠키고 성취하는&nbsp;
        <span className="text-primary font-semibold">우리만의 공간</span>
      </p>

      <div className="w-full max-w-[480px] lg:max-w-[675px] xl:max-w-[900px]">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.swiper-custom-pagination' }}
          loop
          className="w-full"
        >
          {slides.map((Slide, idx) => (
            <SwiperSlide key={idx}>
              <Slide />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-custom-pagination mt-[13.3px] flex justify-center gap-[10px] lg:mt-[18.75px] lg:gap-[15px] xl:mt-[25px] xl:gap-5" />
    </div>
  );
};

export default OnBoarding;
