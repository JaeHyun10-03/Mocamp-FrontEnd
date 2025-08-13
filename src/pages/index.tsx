// pages/index.tsx
import { GetStaticProps } from 'next';
import Head from 'next/head';
import MocampIcon from '@/public/svgs/MocampIcon.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import CreateRoomCard from '@/components/onBoarding/cards/CreateRoomCard';
import AchievementCard from '@/components/onBoarding/cards/AchievementCard';
import GoalManagementCard from '@/components/onBoarding/cards/GoalManagementCard';
import OnboardingHeader from '@/components/Header/OnboardingHeader';
import Footer from '@/components/Footer/Footer';

// 정적 데이터 정의
interface OnBoardingProps {
  metadata: {
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    ogUrl: string;
  };
  content: {
    mainTitle: string;
    highlightText: string;
    swiperConfig: {
      autoplayDelay: number;
      loop: boolean;
    };
  };
  buildTime: string;
}

const slides = [CreateRoomCard, AchievementCard, GoalManagementCard];

const OnBoarding = ({ metadata, content, buildTime }: OnBoardingProps) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={metadata.ogUrl} />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="theme-color" content="#your-primary-color" />
        <link rel="canonical" href={metadata.ogUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: '모캠프',
              description: metadata.description,
              url: metadata.ogUrl,
              applicationCategory: 'EducationalApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'KRW',
              },
              creator: {
                '@type': 'Organization',
                name: '모캠프',
              },
            }),
          }}
        />
      </Head>

      <div className="flex min-h-screen w-screen flex-col">
        <div className="flex h-screen flex-col">
          <OnboardingHeader />
          <main className="relative flex flex-col items-center justify-center pt-[39.67px] pb-20 lg:pt-[50.25px] lg:pb-[112.5px] xl:pt-[74px] xl:pb-[150px]">
            <MocampIcon
              className="mb-[26.72px] h-[54px] w-[133px] object-contain lg:mb-[37.58px] lg:h-[75.7px] lg:w-[187.5px] xl:mb-[50.1px] xl:h-[100px] xl:w-[250px]"
              alt="모캠프 로고"
            />
            <h1 className="text-gray9 xl:text-title2 mb-[26.13px] text-[15px] leading-[160%] font-medium lg:mb-[36.5px] lg:text-[21px] xl:mb-[49px]">
              {content.mainTitle}&nbsp;
              <span className="text-primary font-semibold">{content.highlightText}</span>
            </h1>
            <section
              className="w-full max-w-[480px] lg:max-w-[675px] xl:max-w-[900px]"
              aria-label="온보딩 기능 소개"
            >
              <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{
                  delay: content.swiperConfig.autoplayDelay,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true, el: '.swiper-custom-pagination' }}
                loop={content.swiperConfig.loop}
                className="w-full"
                aria-label="기능 소개 슬라이더"
              >
                {slides.map((Slide, idx) => (
                  <SwiperSlide key={idx} aria-label={`기능 소개 ${idx + 1}`}>
                    <Slide />
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>

            <div
              className="swiper-custom-pagination mt-[13.3px] flex justify-center gap-[10px] lg:mt-[18.75px] lg:gap-[15px] xl:mt-[25px] xl:gap-5"
              aria-label="슬라이더 페이지네이션"
            />

            {/* 빌드 시간 표시 */}
            {process.env.NODE_ENV === 'development' && (
              <div className="fixed right-4 bottom-4 rounded bg-white p-2 text-xs text-gray-500 shadow">
                Built: {buildTime}
              </div>
            )}
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

// SSG를 위한 getStaticProps 함수
export const getStaticProps: GetStaticProps<OnBoardingProps> = async () => {
  const metadata = {
    title: '모캠프 - 함께 모여 캠핑하고 성취하는 공간',
    description: '대학생과 청년이 함께 캠핑하고 목표를 성취하는 모임 플랫폼, 모캠프',
    keywords:
      '모캠프, 모여서, 캠키고, 프로젝트, 모여서 캠키고 프로젝트, 캠, 프로젝트, 목표관리, 스터디모임, 스터디, 모임',
    ogTitle: '모캠프 - 함께 모여 캠핑하고 성취하는 공간',
    ogDescription: '대학생과 청년이 함께 캠핑하고 목표를 성취하는 모임 플랫폼, 모캠프',
    ogImage: 'https://mocamp-front-end.vercel.app/svgs/MocampIcon',
    ogUrl: 'https://mocamp-front-end.vercel.app',
  };

  const content = {
    mainTitle: '함께 모여 캠핑하고 성취하는',
    highlightText: '우리만의 공간',
    swiperConfig: {
      autoplayDelay: 5000,
      loop: true,
    },
  };

  const buildTime = new Date().toISOString();

  return {
    props: {
      metadata,
      content,
      buildTime,
    },
    // ISR (Incremental Static Regeneration) 설정
    revalidate: 36000, // 10시간마다 재생성
  };
};

export default OnBoarding;
