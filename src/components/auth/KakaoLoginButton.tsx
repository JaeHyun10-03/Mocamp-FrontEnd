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
      className="flex bg-[#FEE500] w-full h-[6.25rem] justify-center items-center relative border border-gray-300 rounded-[0.3125rem] group"
    >
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 rounded-[0.3125rem] pointer-events-none transition-opacity duration-200" />
      <p className="text-[#3C1E1E] text-[1.75rem] font-semibold">카카오톡 계정으로 시작하기</p>
      <div
        className={`absolute right-[0.9375rem] top-[-1.625rem] items-center justify-center px-5 py-2.5 rounded-tl-[0.625rem] rounded-tr-[0.625rem] rounded-br-[0.625rem] bg-white border border-[#00af83] ${
          platform === 'kakao' ? 'flex' : 'hidden'
        }`}
      >
        <p className="flex w-24 h-8 text-xl justify-center items-center font-semibold text-[#00af83] text-center">
          최근 로그인
        </p>
      </div>
    </button>
  );
};

export default KakaoLoginButton;
