import Feed from "../components/Feed";
import MainContainer from "../components/MainContainer";
import PostData from "../models/PostData";
import useSWR from "swr";
import fetcher from "../setup/fetcher";
import { FormEvent } from "react";

export default function Home() {
	const { data, error, mutate } = useSWR<PostData[]>("/api/posts/", fetcher);

	if (error) return <div>Error</div>;
	if (!data) return null;

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const form = e.target as HTMLFormElement;

		const data = {
			author: form.author.value,
			text: form.text.value,
		};

		await fetch("/api/post/[id]", {
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		mutate();
	};

	return (
		<MainContainer>
			<form
				onSubmit={onSubmit}
				className="generic-box flex flex-col gap-2 items-start text-black-4 dark:text-white-4"
			>
				Author name: <input type="text" id="author" name="author"></input>
				Post text: <input type="text" id="text" name="text"></input>
				<input type="submit" value="send" className="cursor-pointer"></input>
			</form>

			<Feed posts={data} />
		</MainContainer>
	);
}
