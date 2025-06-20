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
      className="group relative flex h-[6.25rem] w-full items-center justify-center rounded-[0.3125rem] border border-gray-300 bg-[#05C050]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[0.3125rem] bg-black opacity-0 transition-opacity duration-200 group-hover:opacity-5" />
      <p className="text-[1.75rem] font-semibold text-[#ffffff]">네이버 계정으로 시작하기</p>
      <div
        className={`absolute top-[-1.625rem] right-[0.9375rem] items-center justify-center rounded-tl-[0.625rem] rounded-tr-[0.625rem] rounded-br-[0.625rem] border border-[#00af83] bg-white px-5 py-2.5 ${
          platform === 'naver' ? 'flex' : 'hidden'
        }`}
      >
        <p className="flex h-8 w-24 items-center justify-center text-center text-xl font-semibold text-[#00af83]">
          최근 로그인
        </p>
      </div>
    </button>
  );
};

export default NaverLoginButton;
