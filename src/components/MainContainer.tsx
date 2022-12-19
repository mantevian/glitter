import * as React from "react";
import { ReactNode } from "react";
import Header from "./Header";
import Head from "next/head";

export interface IHOCProps {
	children?: ReactNode;
}

export default function MainContainer(props: IHOCProps) {
	return (
		<div className="absolute bg-white-0 dark:bg-black-0">
			<Head>
				<title>glitter</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<div className="mx-64">{props.children}</div>
		</div>
	);
}
