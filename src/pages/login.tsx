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
    <div className="flex bg-[#ffffff] w-screen h-screen">
      <div className="h-full mx-auto justify-center items-center flex flex-col bg-[#ffffff]">
        <MocampIcon />
        <div className="mt-[1.875rem] mb-[8.4375rem] text-[1.75rem] font-medium leading-[1.6]">
          <p>
            모캠프는 <span className="text-[#27CFA5] font-semibold">로그인</span> 후
          </p>
          <p>시작할 수 있어요 :D</p>
        </div>
        <div className="flex flex-col gap-5 w-[37.5rem]">
          <NaverLoginButton />
          <KakaoLoginButton />
          <GoogleLoginButton />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
