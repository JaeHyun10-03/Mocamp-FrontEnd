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
      onClick={handleNaverLogin}
      className="group relative flex h-[3.333rem] w-full cursor-pointer items-center justify-center rounded-[0.3125rem] border border-gray-300 bg-[#05C050] lg:h-[4.688rem] xl:h-[6.25rem]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[0.3125rem] bg-black opacity-0 transition-opacity duration-200 group-hover:opacity-5" />
      <p className="text-[0.933rem] font-semibold text-white lg:text-[1.313rem] xl:text-[1.75rem]">
        네이버 계정으로 시작하기
      </p>

      <div
        className={`absolute top-[-0.867rem] right-[0.667rem] items-center justify-center rounded-tl-[0.625rem] rounded-tr-[0.625rem] rounded-br-[0.625rem] border border-[#00af83] bg-white px-[0.667rem] py-[0.333rem] lg:top-[-1.219rem] lg:right-[0.969rem] lg:px-[0.938rem] lg:py-[0.469rem] xl:top-[-1.625rem] xl:right-[0.938rem] xl:px-5 xl:py-2.5 ${
          platform === 'naver' ? 'flex' : 'hidden'
        }`}
      >
        <p className="flex h-[1.063rem] w-[3rem] items-center justify-center text-center text-[0.667rem] font-semibold tracking-[-0.01875rem] text-[#00af83] lg:h-[1.5rem] lg:w-[4.188rem] lg:text-[0.938rem] xl:h-8 xl:w-24 xl:text-xl">
          최근 로그인
        </p>
      </div>
    </button>
  );
};

export default NaverLoginButton;
