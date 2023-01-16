import HomeContent from "../components/HomeContent";
import useOwnSessionUser from "../utils/hooks/useOwnSessionUser";
import useRedirect from "../utils/hooks/useRedirect";

export default function Home() {
	const { sessionStatus, userData, userError } = useOwnSessionUser();

	useRedirect(() => sessionStatus == "unauthenticated" || userError || (userData && !userData.username), "/login", [
		sessionStatus,
		userError,
		userData,
	]);

	return <HomeContent display_name={userData?.display_name.toString()} />;
}
