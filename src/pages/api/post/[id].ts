import type { NextApiRequest, NextApiResponse } from 'next'
import { IPostProps } from '../../../models/client/postProps';
import { createPost, getPost } from '../../../utils/database/posts';

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
	}
}