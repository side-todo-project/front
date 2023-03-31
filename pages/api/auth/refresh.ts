import AuthAPI from '@/api/AuthAPI';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const { cookies } = req;
      if (cookies) {
        // TODO: refresh token 어떻게 넣는지 확인
        const apiRes = await AuthAPI.post('/refresh', null, {
          headers: {},
        });
        return res.status(apiRes.status).json(cookies);
      } else {
        return res.status(500).json({ error: 'refresh token not exists' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
