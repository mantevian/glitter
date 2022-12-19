import MainContainer from "../components/MainContainer";
import HomeContent from "../components/HomeContent";
import useOwnSessionUser from "../utils/hooks/useOwnSessionUser";
import useRedirect from "../utils/hooks/useRedirect";

export default function Home() {
	const { sessionStatus, userData } = useOwnSessionUser();

	useRedirect(() => sessionStatus == "unauthenticated" || !userData || (userData && !userData.username), "/login", [sessionStatus]);

	return (
		<MainContainer>
			<HomeContent displayName={userData?.displayname.toString()} />
		</MainContainer>
	);
}
