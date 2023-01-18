import type { NextApiRequest, NextApiResponse } from 'next'
import { createPost } from '../../utils/database/posts';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case 'POST': {
			try {
				createPost(req.body.author, req.body.text);
				res.status(302).end();
			}
			catch (e) {
				res.status(500).json({ error: e });
			}

			break;
		}
			
		default: {
			res.status(405).end();
		}
	}
}