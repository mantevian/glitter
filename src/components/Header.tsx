import Link from "next/link";
import * as React from "react";
import ThemeSwitch from "./ThemeSwitch";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
	return (
		<div className="header">
			<ThemeSwitch />
			<Link className="button" href="/settings">
				Settings
			</Link>
		</div>
	);
}
