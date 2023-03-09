import axios from 'axios';

export const getStoredCookies = async () => {
  const res = await axios.get('/api/cookie');
  return res.data;
};

export const storeCookies = async (cookies) => {
  const res = await axios.post('/api/cookie', cookies);
  return res.data;
};

export const removeCookies = async () => {
  return await axios.delete('/api/cookie');
};
