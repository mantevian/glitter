import { useSession } from "next-auth/react";
import useSWR from "swr";
import fetcher from "../fetcher";

export default function useOwnSessionUser() {
	const { data: sessionData, status: sessionStatus } = useSession();
	const { data: userData, error: userError } = useSWR(`/api/user/id/${sessionData?.user?.id}`, fetcher);

	return {
		sessionData,
		sessionStatus,
		userData,
		userError
	}
}