import type { NextApiRequest, NextApiResponse } from 'next';

type LoginResponse = {
  email: string
}

export default (req: NextApiRequest, res: NextApiResponse<LoginResponse>) => {
  res.status(200).json({ email: 'test@test.com.au' });
}
