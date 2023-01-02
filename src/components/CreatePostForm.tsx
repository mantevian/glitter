import { useSession } from "next-auth/react";
import { FormEvent, useRef } from "react";
import { useSWRConfig } from "swr";

export default function CreatePostForm() {
	const postTextRef = useRef<HTMLInputElement>(null);
	const { data: session }: any = useSession();
	const { mutate } = useSWRConfig();

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const form = e.target as HTMLFormElement;

		const data = {
			author: session.user.id,
			text: form.text.value,
		};

		await fetch("/api/post/[id]", {
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		if (postTextRef.current) postTextRef.current.value = "";

		mutate("/api/posts/");
	};

	return (
		<form autoComplete="off" onSubmit={onSubmit} className="generic-box flex flex-col gap-2 items-start text-black-4 dark:text-white-4">
			Post text: <input type="text" id="text" name="text" size={100} ref={postTextRef}></input>
			<input type="submit" value="send" className="cursor-pointer"></input>
		</form>
	);
}
