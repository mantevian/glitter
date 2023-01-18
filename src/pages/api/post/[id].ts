import type { NextApiRequest, NextApiResponse } from 'next'
import { getPost } from '../../../utils/database/posts';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case 'GET': {
			const id = req.query.id?.toString();

			if (!id)
				return res.status(400).json({ error: 'id not specified' });

			try {
				const data = await getPost(id);
				res.status(200).json(data);
			}
			catch (e) {
				res.status(404).end();
			}
			break;
		}

		default: {
			res.status(405).end();
		}
	}
}