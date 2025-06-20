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
      className="group relative flex h-[6.25rem] w-full items-center justify-center rounded-[0.3125rem] border border-gray-300 bg-[#FEE500]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[0.3125rem] bg-black opacity-0 transition-opacity duration-200 group-hover:opacity-5" />
      <p className="text-[1.75rem] font-semibold text-[#3C1E1E]">카카오톡 계정으로 시작하기</p>
      <div
        className={`absolute top-[-1.625rem] right-[0.9375rem] items-center justify-center rounded-tl-[0.625rem] rounded-tr-[0.625rem] rounded-br-[0.625rem] border border-[#00af83] bg-white px-5 py-2.5 ${
          platform === 'kakao' ? 'flex' : 'hidden'
        }`}
      >
        <p className="flex h-8 w-24 items-center justify-center text-center text-xl font-semibold text-[#00af83]">
          최근 로그인
        </p>
      </div>
    </button>
  );
};

export default KakaoLoginButton;
