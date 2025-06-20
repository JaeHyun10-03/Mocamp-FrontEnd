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
      className="group relative flex h-[6.25rem] w-full items-center justify-center border border-gray-300 bg-white"
    >
      <div className="pointer-events-none absolute inset-0 rounded bg-black opacity-0 transition-opacity duration-200 group-hover:opacity-5" />
      <p className="text-[1.75rem] font-semibold text-gray-700">구글 계정으로 시작하기</p>
      <div
        className={`absolute top-[-1.625rem] right-[0.9375rem] items-center justify-center rounded-tl-[0.625rem] rounded-tr-[0.625rem] rounded-br-[0.625rem] border border-[#00af83] bg-white px-5 py-2.5 ${
          platform === 'google' ? 'flex' : 'hidden'
        }`}
      >
        <p className="flex h-8 w-24 items-center justify-center text-center text-xl font-semibold text-[#00af83]">
          최근 로그인
        </p>
      </div>
    </button>
  );
};

export default GoogleLoginButton;
