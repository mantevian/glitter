import type { NextApiRequest, NextApiResponse } from 'next'
import PostData from '../../models/PostData';
import database from '../../setup/firebase';

export default async (req: NextApiRequest, res: NextApiResponse<PostData[]>) => {
	const snapshot = await database.collection('posts').get();

	let posts: PostData[] = [];

	snapshot.forEach(doc => {
		const docData = doc.data();
		posts.push({ id: doc.id, author: docData.author, text: docData.text, timestamp: docData.timestamp._seconds });
	});

	posts = posts.sort((a, b) => b.timestamp - a.timestamp);

	res.status(200).json(posts);
}
