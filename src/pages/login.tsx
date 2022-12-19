import { signIn } from "next-auth/react";
import * as React from "react";
import UserInitForm from "../components/UserInitForm";
import useOwnSessionUser from "../utils/hooks/useOwnSessionUser";
import useRedirect from "../utils/hooks/useRedirect";

export default function Login() {
	const { sessionStatus, userData } = useOwnSessionUser();

	useRedirect(() => sessionStatus == "authenticated" && userData && userData.username, "./");

	if (!userData)
		return (
			<>
				Not signed in <button onClick={() => signIn()}>Sign in</button>
			</>
		);

	if (!userData.username) return <UserInitForm id={userData.id.toString()} />;

	return <></>;
}
