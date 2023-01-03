import MainContainer from "../components/MainContainer";
import HomeContent from "../components/HomeContent";
import useOwnSessionUser from "../utils/hooks/useOwnSessionUser";
import useRedirect from "../utils/hooks/useRedirect";
import { useRouter } from "next/router";

export default function Home() {
	const { sessionStatus, userData, userLoading } = useOwnSessionUser();

	const router = useRouter();

	useRedirect(() => sessionStatus == "unauthenticated" || (!userLoading && (!userData || !userData.username)), "/login", []);

	return (
		<MainContainer>
			<HomeContent displayName={userData?.display_name.toString()} />
		</MainContainer>
	);
}
