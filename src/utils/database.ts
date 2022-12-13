import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL ?? '', {
	max: 3,
	max_lifetime: 1,
	idle_timeout: 1
});

export default sql;