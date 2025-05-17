import { useAuthStore } from '@/stores/auth-store';

const NaverLoginButton = () => {
  const { platform, setPlatform } = useAuthStore();

  const handleNaverLogin = () => {
    setPlatform('naver');
    localStorage.setItem('platform', 'naver');
    const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
    const REDIRECT_URI = process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI;
    const STATE = crypto.randomUUID();
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <button
      onClick={() => {
        handleNaverLogin();
      }}
      className="flex bg-[#05C050] w-full h-[6.25rem] justify-center items-center relative border border-gray-300 rounded-[0.3125rem] group"
    >
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 rounded-[0.3125rem] pointer-events-none transition-opacity duration-200" />
      <p className="text-[#ffffff] text-[1.75rem] font-semibold">네이버 계정으로 시작하기</p>
      <div
        className={`absolute right-[0.9375rem] top-[-1.625rem] items-center justify-center px-5 py-2.5 rounded-tl-[0.625rem] rounded-tr-[0.625rem] rounded-br-[0.625rem] bg-white border border-[#00af83] ${
          platform === 'naver' ? 'flex' : 'hidden'
        }`}
      >
        <p className="flex w-24 h-8 text-xl justify-center items-center font-semibold text-[#00af83] text-center">
          최근 로그인
        </p>
      </div>
    </button>
  );
};

export default NaverLoginButton;
