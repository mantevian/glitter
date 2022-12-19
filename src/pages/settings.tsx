import { signOut } from "next-auth/react";
import * as React from "react";
import useOwnSessionUser from "../utils/hooks/useOwnSessionUser";
import useRedirect from "../utils/hooks/useRedirect";

export default function Settings() {
	const { sessionData, sessionStatus } = useOwnSessionUser();

	useRedirect(() => sessionStatus == 'unauthenticated' || !sessionData, "./login", [sessionData, sessionStatus]);

	return (
		<div>
			Signed in as {sessionData?.user?.email} <button onClick={() => signOut()}>Sign out</button>
		</div>
	);
}
