import * as React from "react";
import Post from "../../components/post/Post";
import useSWR from "swr";
import { useRouter } from "next/router";
import fetcher from "../../utils/fetcher";
import { IPostProps } from "../../models/client/postProps";

export default function PostPage() {
	const router = useRouter();
	const { data, error } = useSWR<IPostProps>(router.query.id ? `/api/post/${router.query.id}` : ``, fetcher);

	if (error) return <div>Error</div>;
	if (!data) return null;

	return <Post {...data} />;
}
