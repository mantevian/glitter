import useSWR from "swr";
import fetcher from "../utils/fetcher";
import Post, { IPostProps } from "./post/Post";

export default function Feed() {
	const { data: posts, error: postsError } = useSWR<IPostProps[]>("/api/posts/", fetcher);
	
	if (postsError) return <div>Error</div>;
	if (!posts) return <div>Loading...</div>;

	return (
		<div className="w-6/12 flex flex-col gap-2 m-2">
			{posts.map((post, i) => (
				<Post key={i} {...post} />
			))}
		</div>
	);
}
