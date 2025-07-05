import { useAuthStore } from '@/stores/auth-store';

const KakaoLoginButton = () => {
  const { platform, setPlatform } = useAuthStore();

  const handleKakaoLogin = () => {
    setPlatform('kakao');
    localStorage.setItem('platform', 'kakao');
    const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
    const KAKAO_REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoURL;
  };

  return (
    <button
      onClick={handleKakaoLogin}
      className="group relative flex h-[3.333rem] w-full cursor-pointer items-center justify-center rounded-[0.3125rem] border border-gray-300 bg-[#FEE500] lg:h-[4.688rem] xl:h-[6.25rem]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[0.3125rem] bg-black opacity-0 transition-opacity duration-200 group-hover:opacity-5" />
      <p className="text-[0.933rem] font-semibold text-[#3C1E1E] lg:text-[1.313rem] xl:text-[1.75rem]">
        카카오톡 계정으로 시작하기
      </p>

      <div
        className={`absolute top-[-0.867rem] right-[0.667rem] items-center justify-center rounded-tl-[0.625rem] rounded-tr-[0.625rem] rounded-br-[0.625rem] border border-[#00af83] bg-white px-[0.667rem] py-[0.333rem] lg:top-[-1.219rem] lg:right-[0.969rem] lg:px-[0.938rem] lg:py-[0.469rem] xl:top-[-1.625rem] xl:right-[0.938rem] xl:px-5 xl:py-2.5 ${
          platform === 'kakao' ? 'flex' : 'hidden'
        }`}
      >
        <p className="flex h-[1.063rem] w-[3rem] items-center justify-center text-center text-[0.667rem] font-semibold tracking-[-0.01875rem] text-[#00af83] lg:h-[1.5rem] lg:w-[4.188rem] lg:text-[0.938rem] xl:h-8 xl:w-24 xl:text-xl">
          최근 로그인
        </p>
      </div>
    </button>
  );
};

export default KakaoLoginButton;
