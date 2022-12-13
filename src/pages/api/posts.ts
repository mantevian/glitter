import type { NextApiRequest, NextApiResponse } from 'next'
import { IPostProps } from '../../components/post/Post';
import { getAllPosts } from '../../utils/database/posts';

export default async (req: NextApiRequest, res: NextApiResponse<IPostProps[]>) => {
	const posts = await getAllPosts();

	res.status(200).json(posts);
}
