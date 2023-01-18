import * as React from "react";
import CreatePostForm from "./CreatePostForm";
import Feed from "./Feed";

export default function HomeContent({ display_name }: { display_name: string }) {
	if (!display_name) return <>Loading...</>;

	return (
		<>
			<CreatePostForm />
			<Feed />
		</>
	);
}
