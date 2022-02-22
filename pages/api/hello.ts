// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { authorization } = req.headers;

      if (authorization === `Bearer ${process.env.API_SECRET_KEY}`) {
        res.status(200).json({ success: true });
        console.log("good");
      } else {
        res.status(401).json({ success: false });
        console.log("bad");
      }
    } catch (err) {
      res.status(500).json({ statusCode: 500 });
      console.log("server err");
    }
  } else {
    //res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    console.log("not allowed");
  }
}
