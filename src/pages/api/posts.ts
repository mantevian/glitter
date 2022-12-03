import type { NextApiRequest, NextApiResponse } from 'next'
import PostData from '../../models/PostData';
import { getAllPosts } from '../../utils/database/posts';

export default async (req: NextApiRequest, res: NextApiResponse<PostData[]>) => {
	const posts = await getAllPosts();

	res.status(200).json(posts);
}
