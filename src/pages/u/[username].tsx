import router, { useRouter } from "next/router";
import * as React from "react";
import useSWR from "swr";
import Post from "../../components/post/Post";
import CustomColoredComponent from "../../components/util/CustomColoredComponent";
import { IPostProps } from "../../models/client/postProps";
import { IUserProps } from "../../models/client/userProps";
import fetcher from "../../utils/fetcher";

export interface IUserProfileProps {}

export default function UserProfile(props: IUserProfileProps) {
	const router = useRouter();
	const { data, error } = useSWR<IUserProps>(router.query.username ? `/api/user/username/${router.query.username}` : ``, fetcher);

	const { data: posts, error: postsError } = useSWR<IPostProps[]>(`/api/user/posts/${data?.id}`, fetcher);
	
	if (error || postsError) return <div>Error</div>;

	return (
		<>
			<div className="generic-box mt-2 flex items-baseline gap-5">
				<img className="inline aspect-square w-32 rounded-full" src={data?.avatar_url ?? ""} />
				<span className="text-5xl font-bold">
					<CustomColoredComponent color={data?.color}>{data?.display_name}</CustomColoredComponent>
				</span>
				<span className="text-4xl text-white-6 dark:text-black-6">{`@${data?.username}`}</span>
			</div>

			<div className="generic-box mt-2 flex flex-col gap-2">
				{posts?.map((post, i) => (
					<Post key={i} {...post} />
				))}
			</div>
		</>
	);
}
