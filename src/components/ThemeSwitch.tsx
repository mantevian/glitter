"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function () {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState<boolean>(false);

	if (!theme)
		setTheme('light');

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<div className="m-2 text-black-2 dark:text-white-2">
			<select value={theme} onChange={(e) => setTheme(e.target.value)}>
				<option value="light">Light</option>
				<option value="dark">Dark</option>
			</select>
		</div>
	);
}
