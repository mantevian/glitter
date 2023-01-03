import query from '../database';
import { Identifier } from '../Identifier';

export async function getAllPosts() {
	return (await query(`
	select 
		glitter_users.id as user_id,
		glitter_users.username,
		glitter_users.display_name,
		glitter_posts.id as post_id,
		glitter_posts.created_timestamp,
		glitter_posts.text
	from glitter_posts inner join glitter_users on glitter_posts.author = glitter_users.id
	order by glitter_posts.created_timestamp desc limit 100
	`)).map(row => {
		return {
			authorId: row.user_id,
			authorUsername: row.username,
			authorDisplayName: row.display_name,
			postId: row.post_id,
			postCreatedTimestamp: row.created_timestamp,
			postText: row.text,
		}
	});
}

export async function getPost(id: string) {
	return (await query(`
	select 
		glitter_users.id as authorId,
		glitter_users.username as authorUsername,
		glitter_users.display_name as authorDisplayName,
		glitter_posts.id as postId,
		glitter_posts.created_timestamp as postCreatedTimestamp,
		glitter_posts.text as postText
	from glitter_posts inner join glitter_users on glitter_posts.author = glitter_users.id where glitter_posts.id = '${id}'
	`))[0];
}

export async function createPost(author: string, text: string) {
	return await query(`
	insert into glitter_posts
		(id, author, text, created_timestamp)
	values
		(${new Identifier().toString()}, ${author}, '${text}', ${Math.floor(Date.now() / 1000)})
	`);
}