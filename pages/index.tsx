import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center py-2 bg-black">
			<Head>
				<title>glitter</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1 className="text-6xl font-bold text-glitter">glitter</h1>
			<h1 className="text-6xl font-bold text-starlight">starlight</h1>
		</div>
	);
};

export default Home;
