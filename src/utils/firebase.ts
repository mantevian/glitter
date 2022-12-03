import admin from 'firebase-admin';
import { Query } from 'firebase-admin/firestore';

if (!admin.apps.length)
	admin.initializeApp({
		credential: admin.credential.cert({
			projectId: process.env.FIREBASE_PROJECT_ID,
			clientEmail: process.env.FIREBASE_EMAIL,
			privateKey: process.env.FIREBASE_PRIVATE_KEY
		})
	});

const database = admin.firestore();

export default database;

export async function getDocFromCollection(collection: string, doc: string) {
	const snapshot = await database.collection(collection).doc(doc).get();
	const snapshotData = snapshot.data();

	if (!snapshot.exists || !snapshotData)
		throw 'getDocFromCollection -> Not found';

	return snapshotData;
}

export async function getByQuery(ref: Query) {
	const snapshot = await ref.get();
	return snapshot.docs;
}

export async function docExists(collection: string, id: string) {
	const snapshot = await database.collection(collection).doc(id).get();
	return snapshot.exists;
}

export async function setDoc(collection: string, doc: string, data: any, merge = false) {
	return database.collection(collection).doc(doc).set(data, { merge: merge });
}