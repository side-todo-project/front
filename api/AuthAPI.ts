import axios from 'axios';

const AuthAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_AUTH_BASEURL,
});



export default AuthAPI;