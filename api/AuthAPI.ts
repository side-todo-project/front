import axios from 'axios';
/**
 * 인증 관련용 axios 인스턴스
 */
const AuthAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_AUTH_BASEURL,
});

export default AuthAPI;
