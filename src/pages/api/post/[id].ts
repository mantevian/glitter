import type { NextApiRequest, NextApiResponse } from 'next'
import PostData from '../../../models/PostData';
import database from '../../../setup/firebase';
import { v4 } from 'uuid';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case 'GET': {
			const id = req.query.id?.toString();

			if (!id) {
				res.status(400).json({ error: 'Field id not specified' });
				return;
			}

			const snapshot = await database.collection('posts').doc(id).get();
			const snapshotData = snapshot.data();

			if (!snapshot.exists || !snapshotData) {
				res.status(404).json({ error: 'Post not found' });
				return;
			}

			const data: PostData = {
				id, author: snapshotData.author, text: snapshotData.text, timestamp: snapshotData.timestamp._seconds
			}

			res.status(200).json(data);

			break;
		}

		case 'POST': {
			const fields = ['author', 'text'];

			for (let f of fields) {
				if (!req.body[f]) {
					res.status(400).json({ error: `Field ${f} not specified` });
					return;
				}
			}

			const data = {
				id: v4(),
				author: req.body.author as string,
				text: req.body.text as string,
				timestamp: new Date()
			}

			database.collection('posts').doc(data.id).set(data)
				.then(() => {
					res.status(200).redirect('/');
				})
				.catch(e => res.status(500).json({ error: e }))

			break;
		}
	}
}