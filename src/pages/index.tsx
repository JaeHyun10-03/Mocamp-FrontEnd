'use client';

import React from 'react';
import MocampIcon from '@/public/svgs/MocampIcon.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SlideCard1 from '@/components/onBoarding/SlideCard1';
// import SlideCard2 from '@/components/onBoarding/SlideCard2';
// import SlideCard3 from '@/components/onBoarding/SlideCard3';

const OnBoarding = () => {
  const slides = [<SlideCard1 />, <SlideCard1 />, <SlideCard1 />];

  return (
    <div className="bg-gray1 relative flex h-screen w-screen flex-col">
      <div className="mx-auto flex h-full flex-col items-center justify-center">
        <MocampIcon className="mb-[50.05px] h-[100px] w-[250px]" />
        <p className="text-gray9 text-title2 mb-[49px] font-medium">
          함께 모여 캠키고 성취하는&nbsp;
          <span className="text-primary font-semibold">우리만의 공간</span>
        </p>

        <div className="w-full max-w-[900px]">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.swiper-custom-pagination' }}
            loop
            className="w-full"
          >
            {slides.map((Component, idx) => (
              <SwiperSlide key={idx}>{Component}</SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-custom-pagination mt-[25px] flex justify-center gap-5" />
      </div>
    </div>
  );
};

export default OnBoarding;
