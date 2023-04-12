// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    console.log(req.body.name)
    console.log(req.body.email)
    console.log(req.body.message)
    res.status(200).json({ name: 'John Doe' })
  }
  res.status(500)
}
