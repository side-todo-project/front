import axios from 'axios';
/**
 * 인증 관련용 axios 인스턴스
 */
const AuthAPI = axios.create({
  baseURL: '/auth',
});

export default AuthAPI;
