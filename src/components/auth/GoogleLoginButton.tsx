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
      className="flex bg-white w-full h-[6.25rem] justify-center items-center relative border border-gray-300 group"
    >
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 rounded pointer-events-none transition-opacity duration-200" />
      <p className="text-gray-700 text-[1.75rem] font-semibold">구글 계정으로 시작하기</p>
      <div
        className={`absolute right-[0.9375rem] top-[-1.625rem] items-center justify-center px-5 py-2.5 rounded-tl-[0.625rem] rounded-tr-[0.625rem] rounded-br-[0.625rem] bg-white border border-[#00af83] ${
          platform === 'google' ? 'flex' : 'hidden'
        }`}
      >
        <p className="flex w-24 h-8 text-xl justify-center items-center font-semibold text-[#00af83] text-center">
          최근 로그인
        </p>
      </div>
    </button>
  );
};

export default GoogleLoginButton;
