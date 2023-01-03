import { useSession } from "next-auth/react";
import { FormEvent, useRef } from "react";
import { useSWRConfig } from "swr";
const he = require("he");

export default function CreatePostForm() {
	const postTextRef = useRef<HTMLTextAreaElement>(null);
	const { data: session }: any = useSession();
	const { mutate } = useSWRConfig();

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const data = {
			author: session.user.id,
			text: he.encode(postTextRef.current?.value),
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
		<div className="generic-box flex flex-col gap-2 items-start text-black-4 dark:text-white-4">
			Post text: <textarea name="text" className="w-full" ref={postTextRef}></textarea>
			<button onMouseDown={onSubmit}>Send</button>
		</div>
	);
}
