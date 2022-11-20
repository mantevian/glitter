import Feed from "../components/Feed";
import MainContainer from "../components/MainContainer";
import PostData from "../models/PostData";
import useSWR from "swr";
import fetcher from "../setup/fetcher";

export default function Home() {
	const { data, error } = useSWR<PostData[]>("/api/posts/", fetcher);

	if (error) return <div>Failed to load post</div>;
	if (!data) return null;

	return (
		<MainContainer>
			<form action="/api/post/[id]" method="POST" className="generic-box flex flex-col gap-2 items-start text-black-4 dark:text-white-4">
				Author name: <input type="text" id="author" name="author"></input>
				Post text: <input type="text" id="text" name="text"></input>
				<input type="submit" value="send" className="cursor-pointer"></input>
			</form>

			<Feed posts={data} />
		</MainContainer>
	);
}
