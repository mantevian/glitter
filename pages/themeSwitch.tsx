import { createRef, useEffect } from "react";

export function switchTheme() {
	localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
	applyTheme();
}

export function applyTheme() {
	if (
		localStorage.theme === "dark" ||
		(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
	)
		document.documentElement.classList.add("dark");
	else document.documentElement.classList.remove("dark");
}

export default function () {
	let checkboxRef = createRef<HTMLInputElement>();

	useEffect(() => {
		if (checkboxRef.current) checkboxRef.current.checked = localStorage.theme === "dark";
	}, [checkboxRef]);

	return (
		<div className="m-2 text-black-2 dark:text-white-2">
			Dark theme: <input type="checkbox" onClick={switchTheme} ref={checkboxRef}></input>
		</div>
	);
}
