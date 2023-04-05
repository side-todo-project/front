import { ITokens } from '@/types';
import axios, { AxiosError } from 'axios';
import AuthAPI from './AuthAPI';

/**
 * API 호출용 axios 인스턴스
 */
const API = axios.create({
  baseURL: '/api',
});

const refreshAccessToken = async () => {
  const apiRes = await AuthAPI.get('/refresh');
  return apiRes.status;
};

// Add a request interceptor
API.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
API.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async (error: AxiosError) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (error.response.status === 401) {
      // 토큰갱신 실패시 로그인페이지로
      const status = await refreshAccessToken();
      if (status !== 200) {
        alert('다시 로그인 해주세요');
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  },
);

export default API;
