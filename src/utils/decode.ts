// 추후 마이홈 api 코드 가져오면 없어질 예정(웹캠 닉네임 띄우기용)
import { jwtDecode } from 'jwt-decode';
import { UserInfo } from '@/types/preview';

interface TokenPayload {
  userId: number;
  username: string;
}

export const getUserFromToken = (): UserInfo | null => {
  const token = localStorage.getItem('accessToken');
  if (!token) return null;

  try {
    const decoded = jwtDecode<TokenPayload>(token);
    return {
      userId: decoded.userId,
      nickname: decoded.username,
      isWorking: true,
      camStatus: true,
      micStatus: true,
    };
  } catch (e) {
    console.error('토큰 디코드 실패', e);
    return null;
  }
};
