import database, { setDoc, getDocFromCollection, getByQuery } from '../firebase';

export async function getUserById(id: string) {
	const snapshotData = await getDocFromCollection('users', id);

	const data = {
		id: snapshotData.id,
		username: snapshotData.username,
		displayName: snapshotData.displayName
	};

	return data;
}

export async function getUserByUsername(username: string) {
	return (await getByQuery(database.collection('users').where('username', '==', username)))[0];
}

export function createUser(id: string) {
	const data = {
		id,
		username: '',
		displayName: ''
	}

	setDoc('users', data.id, data);
}

export async function initUser(id: string, username: string, displayName: string) {
	if (await getUserByUsername(username))
		throw 'initUser -> Username already exists';
	
	setDoc('users', id, { username, displayName }, true);
}