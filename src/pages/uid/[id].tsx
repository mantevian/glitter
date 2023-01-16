import { useRouter } from "next/router";
import * as React from "react";
import useSWR from "swr";
import { IUserProps } from "../../models/client/userProps";
import fetcher from "../../utils/fetcher";
import useRedirect from "../../utils/hooks/useRedirect";

export default function UserProfile() {
	const router = useRouter();
	const { data, error } = useSWR<IUserProps>(router.query.id ? `/api/user/id/${router.query.id}` : ``, fetcher);

	useRedirect(() => (data ? true : false), `/u/${data?.username}`, [data]);

	if (error) return <div>Error</div>;

	return <div>Loading...</div>;
}
