import { exitPreview } from '@prismicio/next'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return await exitPreview({ req, res })
}
