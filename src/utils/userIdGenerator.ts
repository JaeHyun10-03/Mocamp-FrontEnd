const USER_ID_KEY = 'mock_user_id';
const USER_NAME_KEY = 'mock_user_name';

export const getOrCreateUserId = (): number => {
  if (typeof window === 'undefined') return 0;

  let userId = sessionStorage.getItem(USER_ID_KEY);
  if (!userId) {
    userId = String(Date.now() + Math.floor(Math.random() * 10000));
    sessionStorage.setItem(USER_ID_KEY, userId);
  }
  return parseInt(userId, 10);
};

export const getOrCreateUserName = (userId: number): string => {
  if (typeof window === 'undefined') {
    return 'ServerUser';
  }

  let userName = sessionStorage.getItem(USER_NAME_KEY);
  if (!userName) {
    userName = `MocampUser-${userId}`;
    sessionStorage.setItem(USER_NAME_KEY, userName);
  }
  return userName;
};

export const resetUserIdentity = () => {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem(USER_ID_KEY);
    sessionStorage.removeItem(USER_NAME_KEY);
    console.log('User identity reset in sessionStorage.');
  }
};
