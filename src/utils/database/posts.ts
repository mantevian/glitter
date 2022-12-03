import PostData, { compareDates } from '../../models/PostData';
import database, { setDoc, getDocFromCollection } from '../firebase';
import { Identifier, timestampFromStringId } from '../../models/Identifier';
import { getUserById } from './users';

export async function getAllPosts() {
	const snapshot = await database.collection('posts').get();

	let posts: PostData[] = [];

	for (let doc of snapshot.docs) {
		const docData = doc.data();
		const user = await getUserById(docData.author);
		posts.push({
			id: doc.id,
			username: user.username,
			displayName: user.displayName,
			text: docData.text,
			timestamp: timestampFromStringId(doc.id)
		});
	}

	posts = posts.sort((a, b) => compareDates(a, b));

	return posts;
}

export async function getPost(id: string) {
	const snapshotData = await getDocFromCollection('posts', id);

	const data = {
		id,
		author: snapshotData.author,
		text: snapshotData.text
	};

	return data;
}

export function createPost(author: string, text: string) {
	const data = {
		id: new Identifier().toString(),
		author: author,
		text: text
	}

	setDoc('posts', data.id, data);
}