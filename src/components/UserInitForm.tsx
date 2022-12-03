import { FormEvent, useRef } from "react";

interface IUserInitFormProps {
	id: string;
}

export default function UserInitForm({ id }: IUserInitFormProps) {
	const postTextRef = useRef<HTMLInputElement>(null);

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const form = e.target as HTMLFormElement;

		const data = {
			id,
			username: form.username.value,
			displayName: form.displayName.value,
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
			Welcome! Please provide some info to continue.
			<form
				autoComplete="off"
				onSubmit={onSubmit}
				className="generic-box flex flex-col gap-2 items-start text-black-4 dark:text-white-4"
			>
				{"@username (must be unique): "} <input type="text" id="username" name="username"></input>
				{"Display name: "} <input type="text" id="displayName" name="displayName" ref={postTextRef}></input>
				<input type="submit" value="send" className="cursor-pointer"></input>
			</form>
		</>
	);
}
