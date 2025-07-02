// lib/api.ts
import axios from 'axios';
import { getAccessToken, setAccessToken } from '@/utils/token';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

// 토큰이 필요한 요청용 인스턴스
const apiWithToken = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// 요청 인터셉터 - 액세스 토큰 첨부
apiWithToken.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 응답 인터셉터 - 토큰 재발급 처리
let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });
  failedQueue = [];
};

apiWithToken.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: (token: string) => {
              originalRequest.headers.Authorization = 'Bearer ' + token;
              resolve(apiWithToken(originalRequest));
            },
            reject: (err: any) => reject(err),
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const res = await axios.post(`${BASE_URL}/login/re-issue`, {}, { withCredentials: true });

        const newAccessToken = res.data.accessToken;
        setAccessToken(newAccessToken);
        apiWithToken.defaults.headers.common.Authorization = 'Bearer ' + newAccessToken;
        processQueue(null, newAccessToken);

        return apiWithToken(originalRequest);
      } catch (err) {
        processQueue(err, null);
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

// 토큰이 필요 없는 요청용 인스턴스
const apiAuth = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export { apiWithToken, apiAuth };
