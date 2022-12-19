import sql from '../database';

export async function doesUserExist(id: string) {
	return ((await sql`
	select 1 where exists (select from users where id = ${id})
	`)[0]['?column?'] === 1);
}

export async function getUserById(id: string) {
	return (await sql`
	select * from users where id = ${id}
	`)[0];
}

export async function getUserByUsername(username: string) {
	return (await sql`
	select * from users where username = ${username}
	`)[0];
}

export async function createUser(id: string) {
	await sql`
    	insert into users (id) values (${id}) on conflict(id) do nothing
  	`;
}

export async function initUser(id: string, username: string, displayname: string) {
	await sql`
    update users set
		username = ${username},
		displayname = ${displayname}
    where id = ${id}
  	`;
}