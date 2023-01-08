import { signOut } from "next-auth/react";
import Link from "next/link";
import * as React from "react";
import { FormEvent } from "react";
import useOwnSessionUser from "../utils/hooks/useOwnSessionUser";
import useRedirect from "../utils/hooks/useRedirect";

export default function Settings() {
	const { sessionData, sessionStatus, userData } = useOwnSessionUser();

	useRedirect(() => sessionStatus == "unauthenticated" || !sessionData, "./login", [sessionData, sessionStatus]);

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const form = e.target as HTMLFormElement;

		const data = {
			id: sessionData?.user?.id,
			username: form.username.value ?? userData?.username,
			displayName: form.displayName.value ?? userData?.display_name,
			avatarURL: form.avatarURL.value ?? userData?.avatar_url,
			color: form.color.value.replace("#", "") ?? userData?.color
		};

		await fetch("/api/update_user", {
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		window.location.reload();
	};

	return (
		<div>
			<Link className="button" href="./">
				Back
			</Link>
			<br />
			Signed in as {sessionData?.user?.email} <button onClick={() => signOut()}>Sign out</button>
			<br />
			Below you can change your data. To not change something you can just leave a field empty.
			<form
				autoComplete="off"
				onSubmit={onSubmit}
				className="generic-box flex flex-col gap-2 items-start text-black-4 dark:text-white-4"
			>
				{"@username (must be unique): "} <input type="text" id="username" name="username" value={userData?.username} />
				{"Display name: "} <input type="text" id="displayName" name="displayName" value={userData?.display_name} />
				{"Avatar URL: "} <input type="text" id="avatarURL" name="avatarURL" value={userData?.avatar_url} />
				{"Profile color: "} <input type="color" id="color" name="color" value={"#" + userData?.color} />
				<input type="submit" value="Send" className="cursor-pointer" />
			</form>
		</div>
	);
}
