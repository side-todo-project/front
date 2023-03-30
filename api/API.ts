import axios, { AxiosError } from 'axios';
// get env
import dotenv from 'dotenv';
import { refreshAccessToken } from './client';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_API_BASEURL,
});

// Add a request interceptor
API.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
API.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error: AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    
    if (error.response.status === 401) {
      const res = await refreshAccessToken();
    }
    
    return Promise.reject(error);
  }
);

export default API;
