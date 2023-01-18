"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function () {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState<boolean>(false);

	if (!theme) setTheme("light");

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<div className="text-black-2 dark:text-white-2">
			<input
				type="checkbox"
				id="checkbox"
				className="invisible absolute"
				checked={theme == "dark"}
				onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
			/>
			<label htmlFor="checkbox" className="block w-6 h-6 cursor-pointer bg-contain image-light-mode dark:image-dark-mode" />
		</div>
	);
}
