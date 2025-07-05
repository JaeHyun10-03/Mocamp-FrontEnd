import { useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { loginByGoogle, loginByKakao, loginByNaver } from '@/apis/auth';
import MocampIcon from '@/public/svgs/MocampIcon.svg';
import GoogleLoginButton from '@/components/auth/GoogleLoginButton';
import KakaoLoginButton from '@/components/auth/KakaoLoginButton';
import NaverLoginButton from '@/components/auth/NaverLoginButton';
import { platformType } from '@/types/auth';
import { useAuthStore } from '@/stores/auth-store';

const LoginPage: NextPage = () => {
  const router = useRouter();
  const { platform, setPlatform } = useAuthStore();

  useEffect(() => {
    const storedPlatform = localStorage.getItem('platform');
    setPlatform(storedPlatform as platformType);
  }, []);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    if (!code || !platform) return;

    const redirectMap = {
      naver: process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI,
      kakao: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
      google: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
    };

    const processMap = {
      naver: loginByNaver,
      kakao: loginByKakao,
      google: loginByGoogle,
    };

    const selectedRedirect = redirectMap[platform];
    const selectedProcess = processMap[platform];

    const handleLogin = async () => {
      if (selectedRedirect && selectedProcess) {
        const success = await selectedProcess({ code, redirectUrl: selectedRedirect });
        if (success) {
          router.push('/myhome');
        }
      }
    };

    handleLogin();
  }, [platform]);

  return (
    <div className="flex h-screen w-screen bg-white">
      <div className="mx-auto flex h-full flex-col items-center justify-center bg-white">
        <MocampIcon className="h-[3.363rem] w-[8.333rem] lg:h-[4.729rem] lg:w-[11.719rem] xl:h-[6.306rem] xl:w-[15.625rem]" />

        <div className="mt-[1rem] mb-[4.502rem] text-[0.933rem] leading-[1.6] font-medium lg:mt-[1.409rem] lg:mb-[6.3rem] lg:text-[1.313rem] xl:mt-[1.875rem] xl:mb-[8.4375rem] xl:text-[1.75rem]">
          <p>
            모캠프는 <span className="font-semibold text-[#27CFA5]">로그인</span> 후
          </p>
          <p>시작할 수 있어요 :D</p>
        </div>

        <div className="flex w-80 flex-col gap-[0.667rem] lg:w-[28.125rem] lg:gap-[0.938rem] xl:w-[37.5rem] xl:gap-5">
          <NaverLoginButton />
          <KakaoLoginButton />
          <GoogleLoginButton />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
