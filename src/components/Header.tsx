import Link from "next/link";
import * as React from "react";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
	return (
		<div
			className="sticky z-10 top-0 left-0
			flex items-center justify-center gap-24
			h-12 w-screen
			bg-white-3 dark:bg-black-3
			border-b border-white-6 dark:border-black-6
			px-16"
		>
			<ThemeSwitch />
			<Link className="w-6" href="/settings">
				<img src="/settings.png" />
			</Link>

			<Link className="w-6" href="/info">
				<img src="/info.png" />
			</Link>
		</div>
	);
}
