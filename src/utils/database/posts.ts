import { IPostProps } from '../../models/client/postProps';
import query from '../database';
import { Identifier } from '../Identifier';

export async function getAllPosts() {
	return (await query(`
	select 
		glitter_users.id as authorId,
		glitter_users.username as authorUsername,
		glitter_users.display_name as authorDisplayName,
		glitter_users.avatar_url as authorAvatarURL,
		glitter_users.color as authorColor,
		glitter_posts.id as postId,
		glitter_posts.created_timestamp as postCreatedTimestamp,
		glitter_posts.text as postText
	from glitter_posts inner join glitter_users on glitter_posts.author = glitter_users.id
	order by glitter_posts.created_timestamp desc limit 100
	`)).map(row => {
		return {
			author: {
				id: row.authorId,
				username: row.authorUsername,
				displayName: row.authorDisplayName,
				avatarURL: row.authorAvatarURL,
				color: row.authorColor
			},
			id: row.postId,
			createdTimestamp: row.postCreatedTimestamp,
			text: row.postText
		} as IPostProps
	});
}

export async function getPost(id: string) {
	const data = (await query(`
	select 
		glitter_users.id as authorId,
		glitter_users.username as authorUsername,
		glitter_users.display_name as authorDisplayName,
		glitter_users.avatar_url as authorAvatarURL,
		glitter_users.color as authorColor,
		glitter_posts.id as postId,
		glitter_posts.created_timestamp as postCreatedTimestamp,
		glitter_posts.text as postText
	from glitter_posts inner join glitter_users on glitter_posts.author = glitter_users.id where glitter_posts.id = '${id}'
	`))[0];

	return {
		author: {
			id: data.authorId,
			username: data.authorUsername,
			displayName: data.authorDisplayName,
			avatarURL: data.authorAvatarURL,
			color: data.authorColor
		},
		id: data.postId,
		createdTimestamp: data.postCreatedTimestamp,
		text: data.postText
	} as IPostProps
}

export async function createPost(author: string, text: string) {
	return await query(`
	insert into glitter_posts
		(id, author, text, created_timestamp)
	values
		(${new Identifier().toString()}, ${author}, '${text}', ${Math.floor(Date.now() / 1000)})
	`);
}