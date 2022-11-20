import * as React from "react";
import ThemeSwitch from "./ThemeSwitch";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
	return (
		<div className="header">
			<ThemeSwitch />
		</div>
	);
}
