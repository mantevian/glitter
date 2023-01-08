import query from '../database';

export async function doesUserExist(id: string) {
	return (await query(`
	select 1 where exists
		(select from glitter_users where id = '${id}')
	`)) === 1;
}

export async function getUserById(id: string) {
	return (await query(`
	select * from glitter_users
	where id = '${id}'
	`))[0];
}

export async function getUserByUsername(username: string) {
	return (await query(`
	select * from glitter_users
	where username = '${username}'
	`))[0];
}

export async function createUser(id: string) {
	await query(`
	insert ignore into glitter_users
		(id, created_timestamp)
	values
		(${id}, ${Math.floor(Date.now() / 1000)})
	`);
}

export async function initUser(id: string, username: string, displayName: string) {
	await query(`
	update glitter_users
	set
		username = '${username}',
		display_name = '${displayName}'
	where id = '${id}'`);
}

export async function updateUser(id: string, options: { username: string, displayName: string, avatarURL: string, color: string }) {
	await query(`
	update glitter_users
	set
		username = '${options.username}',
		display_name = '${options.displayName}',
		avatar_url = '${options.avatarURL}',
		color = '${options.color}'
	where id = '${id}'`);
}