import sql from '../database';
import { Identifier } from '../Identifier';
import { parseSQLRow } from '../regex';

export async function getAllPosts() {
	let rows = await sql`
	select (
		users.id,
		users.username,
		users.displayname,
		posts.id,
		posts.createdtimestamp,
		posts.text
	)
	from
		posts
	inner join
		users
	on
		posts.author = users.id
	order by
		createdtimestamp
	desc
	limit 100
	`;

	let result = rows.map(row => {
		let fields = parseSQLRow(row.row);

		return {
			authorId: fields[0],
			authorUsername: fields[1],
			authorDisplayName: fields[2],
			postId: fields[3],
			postCreatedTimestamp: parseInt(fields[4]),
			postText: fields[5]
		}
	});

	return result;
}

export async function getPost(id: string) {
	let row = (await sql`
	select (
		users.id,
		users.username,
		users.displayname,
		posts.id,
		posts.createdtimestamp,
		posts.text
	)
	from
		posts
	inner join
		users
	on
		posts.author = users.id
	where
		posts.id = ${id}
	`)[0].row;

	let fields = parseSQLRow(row);

	return {
		authorId: fields[0],
		authorUsername: fields[1],
		authorDisplayName: fields[2],
		postId: fields[3],
		postCreatedTimestamp: parseInt(fields[4]),
		postText: fields[5]
	}
}

export async function createPost(author: string, text: string) {
	await sql`
	insert into posts
		(id, author, text, createdtimestamp)
	values
		(${new Identifier().toString()}, ${author}, ${text}, ${Math.floor(Date.now() / 1000)})
	`;
}