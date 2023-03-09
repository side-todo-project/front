import { NextApiRequest, NextApiResponse } from 'next';

const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7일

/**
 * 쿠키 저장, 획득, 삭제 API
 * @param req
 * @param res
 * @returns
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // get stored Cookies
    if (req.method === 'GET') {
      const { cookies } = req;
      if (cookies) {
        return res.status(200).json(cookies);
      } else {
        return res.status(400).json({ error: 'cookie parse error' });
      }
      // store new Cookies
    } else if (req.method === 'POST') {
      if (!req.body) return res.status(400).json({ error: 'body is empty' });
      const {} = req.body;
      res.setHeader('Set-Cookie', []);
      res.status(200).json({ message: 'success' });
      // delete Cookies
    } else if (req.method === 'DELETE') {
      res.setHeader('Set-Cookie', []);
      res.status(200).json({ message: 'success' });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

//  HttpOnly; Secure;
const getSecureStr = () => {
  return process.env.NODE_ENV === 'development' ? '' : 'HttpOnly; Secure;';
};
