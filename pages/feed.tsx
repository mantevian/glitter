import PostData from "../src/post_data";
import Post from "./post/post";

export default function Feed({ posts }: { posts: PostData[] }) {
	return (
		<div className="w-96 flex flex-col gap-2 m-2">
			{posts.map((post, i) => (
				<Post key={i} data={post} />
			))}
		</div>
	);
}
