import { useAuthStore } from '@/stores/auth-store';

const GoogleLoginButton = () => {
  const { platform, setPlatform } = useAuthStore();

  const handleGoogleLogin = () => {
    setPlatform('google');
    localStorage.setItem('platform', 'google');

    const GOOGLE_REST_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const GOOGLE_REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
    const scope = [
      'openid',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ].join(' ');

    const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_REST_API_KEY}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=${encodeURIComponent(scope)}&access_type=offline&prompt=consent`;
    window.location.href = googleURL;
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="group relative flex h-[3.333rem] w-full cursor-pointer items-center justify-center rounded-[0.3125rem] border border-gray-300 bg-white lg:h-[4.688rem] xl:h-[6.25rem]"
    >
      <div className="pointer-events-none absolute inset-0 rounded bg-black opacity-0 transition-opacity duration-200 group-hover:opacity-5" />
      <p className="text-[0.933rem] font-semibold text-gray-700 lg:text-[1.313rem] xl:text-[1.75rem]">
        구글 계정으로 시작하기
      </p>

      <div
        className={`absolute top-[-0.867rem] right-[0.667rem] items-center justify-center rounded-tl-[0.625rem] rounded-tr-[0.625rem] rounded-br-[0.625rem] border border-[#00af83] bg-white px-[0.667rem] py-[0.333rem] lg:top-[-1.219rem] lg:right-[0.969rem] lg:px-[0.938rem] lg:py-[0.469rem] xl:top-[-1.625rem] xl:right-[0.938rem] xl:px-5 xl:py-2.5 ${
          platform === 'google' ? 'flex' : 'hidden'
        }`}
      >
        <p className="flex h-[1.063rem] w-[3rem] items-center justify-center text-center text-[0.667rem] font-semibold tracking-[-0.01875rem] text-[#00af83] lg:h-[1.5rem] lg:w-[4.188rem] lg:text-[0.938rem] xl:h-8 xl:w-24 xl:text-xl">
          최근 로그인
        </p>
      </div>
    </button>
  );
};

export default GoogleLoginButton;
