import { setAccessToken } from '@/utils/token';
import { apiAuth } from './axios';

interface SocialLoginParams {
  code: string | null;
  redirectUrl: string;
}

export const loginByGoogle = async ({ code, redirectUrl }: SocialLoginParams) => {
  try {
    const res = await apiAuth.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login/google/process`,
      {
        params: {
          code,
          redirect_url: redirectUrl,
        },
      },
    );
    const data = res.data.message;
    setAccessToken(data.accessToken);
    return true;
  } catch (err) {
    throw new Error(`구글 로그인 에러: ${err}`);
  }
};

export const loginByNaver = async ({ code, redirectUrl }: SocialLoginParams) => {
  try {
    const res = await apiAuth.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login/naver/process`,
      {
        params: {
          code,
          redirect_url: redirectUrl,
        },
      },
    );
    const data = res.data.message;
    setAccessToken(data.accessToken);
    return true;
  } catch (err) {
    throw new Error(`네이버 로그인 에러: ${err}`);
  }
};

export const loginByKakao = async ({ code, redirectUrl }: SocialLoginParams) => {
  try {
    const res = await apiAuth.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login/kakao/process`,
      {
        params: {
          code,
          redirect_url: redirectUrl,
        },
      },
    );
    const data = res.data.message;
    setAccessToken(data.accessToken);
    return true;
  } catch (err) {
    throw new Error(`카카오 로그인 에러: ${err}`);
  }
};
