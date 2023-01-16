import { useSession } from "next-auth/react";
import { FormEvent, useRef } from "react";
import { useSWRConfig } from "swr";
const he = require("he");

export default function CreatePostForm() {
	const post_textRef = useRef<HTMLTextAreaElement>(null);
	const { data: session } = useSession();
	const { mutate } = useSWRConfig();

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const data = {
			author: session?.user?.id,
			text: he.encode(post_textRef.current?.value),
		};

		await fetch("/api/post/[id]", {
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		if (post_textRef.current) post_textRef.current.value = "";

		mutate("/api/posts/");
	};

	return (
		<div className="generic-box flex flex-col gap-2 items-start text-black-4 dark:text-white-4">
			Post text: <textarea name="text" className="w-full" ref={post_textRef}></textarea>
			<button onMouseDown={onSubmit}>Send</button>
		</div>
	);
}
