import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllPostsByUserId } from '../../../../utils/database/posts';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case 'GET': {
			if (!req.query.id)
				return res.status(400).json({ error: 'id not specified' });

			const id = req.query.id.toString();

			try {
				const data = await getAllPostsByUserId(id);
				res.status(200).json(data);
			}
			catch (e) {
				res.status(404).end();
			}
			break;
		}

		default: {
			res.status(405).end();
			break;
		}
	}
}