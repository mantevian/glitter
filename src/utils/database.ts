import mysql from 'serverless-mysql';

const connection = mysql({
	config: {
		host: process.env.MYSQL_HOST,
		user: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DATABASE
	}
});

connection.connect();

async function query(q: string): Promise<any> {
	let results = await connection.query(q);
	await connection.end();
	return results;
}

export default query;