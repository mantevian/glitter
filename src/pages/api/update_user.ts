import type { NextApiRequest, NextApiResponse } from 'next';
import { updateUser } from '../../utils/database/users';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case 'POST': {
			try {
				updateUser(req.body.id, {
					username: req.body.username,
					display_name: req.body.display_name,
					avatar_url: req.body.avatar_url,
					color: req.body.color
				});
				res.status(302).end();
			}
			catch (e) {
				res.status(500).redirect('./');
			}

			break;
		}
	}
}