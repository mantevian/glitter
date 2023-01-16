import type { NextApiRequest, NextApiResponse } from 'next'
import { getUserByUsername } from '../../../../utils/database/users';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case 'GET': {
			const username = req.query.username?.toString();

			if (!username)
				return res.status(404).end();

			try {
				const data = await getUserByUsername(username);
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