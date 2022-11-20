import * as React from "react";
import MainContainer from "../../components/MainContainer";
import Post from "../../components/post/Post";
import PostData from "../../models/PostData";
import useSWR from "swr";
import { useRouter } from "next/router";
import fetcher from "../../setup/fetcher";

export default function PostPage() {
	const router = useRouter();
	const { data, error } = useSWR<PostData>(`/api/post/${router.query.id}`, fetcher);

	if (error) return <div>Failed to load post</div>;
	if (!data) return null;

	return (
		<MainContainer>
			<Post data={data} />
		</MainContainer>
	);
}
