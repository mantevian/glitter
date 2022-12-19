import { useRouter } from "next/router";
import { DependencyList, useEffect } from "react";

export default function useRedirect(condition: () => boolean, path: string, deps?: DependencyList) {
	const router = useRouter();

	useEffect(() => {
		if (condition()) router.replace(path);
	}, deps);
}