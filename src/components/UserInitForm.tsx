import { signOut } from "next-auth/react";
import { FormEvent, useRef } from "react";

interface IUserInitFormProps {
	id: string;
}

export default function UserInitForm({ id }: IUserInitFormProps) {
	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const form = e.target as HTMLFormElement;

		const data = {
			id,
			username: form.username.value,
			display_name: form.display_name.value,
		};

		await fetch("/api/init_user", {
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		window.location.reload();
	};

	return (
		<>
			{"Welcome to glitter! Please continue registration by providing a unique @username and any display name."}
			<form
				autoComplete="off"
				onSubmit={onSubmit}
				className="generic-box flex flex-col gap-2 items-start text-black-4 dark:text-white-4"
			>
				{"@username (must be unique): "} <input type="text" id="username" name="username"></input>
				{"Display name: "} <input type="text" id="display_name" name="display_name"></input>
				<input type="submit" value="Send" className="cursor-pointer"></input>
			</form>
			<button onClick={() => signOut()}>Sign out</button>
		</>
	);
}
