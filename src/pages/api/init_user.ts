import type { NextApiRequest, NextApiResponse } from 'next';
import { initUser } from '../../utils/database/users';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case 'POST': {
			try {
				initUser(req.body.id, req.body.username, req.body.display_name);
				res.status(302).end();
			}
			catch (e) {
				res.status(500).redirect('/');
			}

			break;
		}
	}
}