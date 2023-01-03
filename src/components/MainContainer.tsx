import * as React from "react";
import { ReactNode } from "react";
import Header from "./Header";
import Head from "next/head";

export interface IMainContainerProps {
	children?: ReactNode;
}

export default function MainContainer(props: IMainContainerProps) {
	return (
		<div>
			<Head>
				<title>glitter</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<div className="mx-[max(calc(calc(100%-500px)*0.4),0.5rem)]">{props.children}</div>
		</div>
	);
}
