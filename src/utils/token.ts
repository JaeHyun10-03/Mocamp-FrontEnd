// 로컬스토리지에서 토큰을 가져오고, 수정하기 위한 코드
export const getAccessToken = () => localStorage.getItem('accessToken');
export const setAccessToken = (token: string) => localStorage.setItem('accessToken', token);
