import MainContainer from "../components/MainContainer";
import HomeContent from "../components/HomeContent";
import useOwnSessionUser from "../utils/hooks/useOwnSessionUser";
import useRedirect from "../utils/hooks/useRedirect";

export default function Home() {
	const { sessionStatus, userData, userLoading } = useOwnSessionUser();

	useRedirect(() => sessionStatus == "unauthenticated"
		|| (!userLoading && (!userData || !userData.username)), "/login", []);

	return (
		<MainContainer>
			<HomeContent displayName={userData?.display_name.toString()} />
		</MainContainer>
	);
}
