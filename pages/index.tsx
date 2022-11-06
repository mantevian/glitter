import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import PostData from "../src/post_data";
import Feed from "../components/feed";
import ThemeSwitch, { applyTheme } from "../components/themeSwitch";

const Home: NextPage = () => {
	let data: PostData[] = [
		{ author: "jan mante", text: "ma o toki!", timestamp: 0 },
		{ author: "Manteo", text: "Saluton, mondo!", timestamp: 200000000000 },
		{
			author: "Mante",
			text: "Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world!",
			timestamp: 1000000000000,
		},
		{
			author: "Mante",
			text: "this is a lot of 'a' without spaces: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
			timestamp: 1000000000000,
		},
	];

	useEffect(() => {
		applyTheme();
	});

	return (
		<div className="absolute w-screen h-screen bg-white-0 dark:bg-black-0">
			<div>
				<Head>
					<title>glitter</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<Feed posts={data}></Feed>

				<ThemeSwitch></ThemeSwitch>
			</div>
		</div>
	);
};

export default Home;
