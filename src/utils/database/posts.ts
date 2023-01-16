import { IPostProps } from '../../models/client/postProps';
import query from '../database';
import { Identifier } from '../Identifier';

export async function getAllPosts() {
	return (await query(`
	select 
		glitter_users.id as author_id,
		glitter_users.username as author_username,
		glitter_users.display_name as author_display_name,
		glitter_users.avatar_url as author_avatar_url,
		glitter_users.color as authorColor,
		glitter_posts.id as post_id,
		glitter_posts.created_timestamp as post_created_timestamp,
		glitter_posts.text as post_text
	from glitter_posts inner join glitter_users on glitter_posts.author = glitter_users.id
	order by glitter_posts.created_timestamp desc limit 100
	`)).map(row => {
		return {
			author: {
				id: row.author_id,
				username: row.author_username,
				display_name: row.author_display_name,
				avatar_url: row.author_avatar_url,
				color: row.authorColor
			},
			id: row.post_id,
			created_timestamp: row.post_created_timestamp,
			text: row.post_text
		} as IPostProps
	});
}

export async function getPost(id: string) {
	const data = (await query(`
	select 
		glitter_users.id as author_id,
		glitter_users.username as author_username,
		glitter_users.display_name as author_display_name,
		glitter_users.avatar_url as author_avatar_url,
		glitter_users.color as authorColor,
		glitter_posts.id as post_id,
		glitter_posts.created_timestamp as post_created_timestamp,
		glitter_posts.text as post_text
	from glitter_posts inner join glitter_users on glitter_posts.author = glitter_users.id where glitter_posts.id = '${id}'
	`))[0];

	return {
		author: {
			id: data.author_id,
			username: data.author_username,
			display_name: data.author_display_name,
			avatar_url: data.author_avatar_url,
			color: data.authorColor
		},
		id: data.post_id,
		created_timestamp: data.post_created_timestamp,
		text: data.post_text
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

export async function getAllPostsByUserId(author: string) {
	return (await query(`
	select 
		glitter_users.id as author_id,
		glitter_users.username as author_username,
		glitter_users.display_name as author_display_name,
		glitter_users.avatar_url as author_avatar_url,
		glitter_users.color as authorColor,
		glitter_posts.id as post_id,
		glitter_posts.created_timestamp as post_created_timestamp,
		glitter_posts.text as post_text
	from glitter_posts inner join glitter_users on glitter_posts.author = glitter_users.id
	where glitter_users.id = '${author}'
	order by glitter_posts.created_timestamp desc limit 100
	`)).map(row => {
		return {
			author: {
				id: row.author_id,
				username: row.author_username,
				display_name: row.author_display_name,
				avatar_url: row.author_avatar_url,
				color: row.authorColor
			},
			id: row.post_id,
			created_timestamp: row.post_created_timestamp,
			text: row.post_text
		} as IPostProps
	});
}