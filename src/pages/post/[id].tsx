import * as React from "react";
import MainContainer from "../../components/MainContainer";
import Post, { IPostProps } from "../../components/post/Post";
import useSWR from "swr";
import { useRouter } from "next/router";
import fetcher from "../../utils/fetcher";

export default function PostPage() {
	const router = useRouter();
	const { data, error } = useSWR<IPostProps>(router.query.id ? `/api/post/${router.query.id}` : ``, fetcher);

	if (error) return <div>Error</div>;
	if (!data) return null;

	return (
		<MainContainer>
			<Post {... data} />
		</MainContainer>
	);
}
