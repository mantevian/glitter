import type { NextApiRequest, NextApiResponse } from 'next';
import { updateUser } from '../../utils/database/users';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case 'POST': {
			try {
				updateUser(req.body.id, {
					username: req.body.username,
					displayName: req.body.displayName,
					avatarURL: req.body.avatarURL,
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