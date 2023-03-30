import axios, { AxiosError } from 'axios';
import AuthAPI from './AuthAPI';
// get env

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_API_BASEURL,
});

const refreshAccessToken = async () => {
  const storedCookies = await axios.get('/api/cookie');
  const { Refresh } = storedCookies.data;
  const res = await AuthAPI.post('/refresh', null, {
    headers: {
      // 'access': Refresh
    },
  });

  return res.data;
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
      const res = await refreshAccessToken();
    }

    return Promise.reject(error);
  },
);

export default API;
