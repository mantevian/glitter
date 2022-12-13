import Feed from "../components/Feed";
import MainContainer from "../components/MainContainer";
import useSWR, { mutate } from "swr";
import fetcher from "../utils/fetcher";

import { useSession, signIn, signOut } from "next-auth/react";
import CreatePostForm from "../components/CreatePostForm";
import UserInitForm from "../components/UserInitForm";

export default function Home() {
	const { data: session }: any = useSession();
	const { data: userData, error: userError } = useSWR(`/api/user/id/${session?.user?.id}`, fetcher);

	return (
		<MainContainer>
			{session ? (
				<>
					Signed in as {session.user?.email} <button onClick={() => signOut()}>Sign out</button>
					{userData ? (
						!userData.username ? (
							<UserInitForm id={userData.id.toString()} />
						) : (
							<>
								<br />
								Welcome {userData.displayname}! What's on your mind today?
								<br />
								<p className="text-sm text-black-6 dark:text-white-6">{`13.12.2022: Migrated to a Postgres database, loading times should be almost instant!`}</p>

								<CreatePostForm />
								<Feed />
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
