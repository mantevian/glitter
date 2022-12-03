import Feed from "../components/Feed";
import MainContainer from "../components/MainContainer";
import useSWR from "swr";
import fetcher from "../utils/fetcher";

import { useSession, signIn, signOut } from "next-auth/react";
import CreatePostForm from "../components/CreatePostForm";
import UserInitForm from "../components/UserInitForm";
import PostData from "../models/PostData";

export default function Home() {
	const { data: posts, error: postsError, mutate } = useSWR<PostData[]>("/api/posts/", fetcher);
	const { data: session }: any = useSession();
	const { data: userData, error: userError } = useSWR<PostData>(`/api/user/id/${session?.user?.id}`, fetcher);

	if (postsError) return <div>Error</div>;
	if (!posts) return null;

	return (
		<MainContainer>
			{session ? (
				<>
					Signed in as {session.user?.email} <button onClick={() => signOut()}>Sign out</button>
					{userData ? (
						userData.username === "" ? (
							<UserInitForm id={userData.id.toString()} />
						) : (
							<>
								<br />
								Welcome {userData.displayName}! What's on your mind today?
								<br />
								<CreatePostForm mutate={mutate} />
								<Feed posts={posts} />
							</>
						)
					) : (
						""
					)}
				</>
			) : (
				<>
					Not signed in <button onClick={() => signIn()}>Sign in</button>{" "}
				</>
			)}
		</MainContainer>
	);
}
