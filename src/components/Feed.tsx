import PostData from "../models/PostData";
import Post from "./post/Post";

export interface IFeedProps {
	posts: PostData[]
}

export default function Feed(props: IFeedProps) {
	return (
		<div className="w-6/12 flex flex-col gap-2 m-2">
			{props.posts.map((post, i) => (
				<Post key={i} data={post} />
			))}
		</div>
	);
}
