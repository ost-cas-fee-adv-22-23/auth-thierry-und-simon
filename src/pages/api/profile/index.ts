import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import { fetchProfile } from '@/services/fetchProfile';
 
type ResponseData = {
  profile: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const token = await getToken({req})
  const accessToken = token?.accessToken as string
    if (!accessToken) {
        return res.status(401).json({ profile: null });
    }
    const profile = await fetchProfile(accessToken)
  res.status(200).json({ profile: profile});
}