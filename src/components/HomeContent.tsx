import * as React from "react";
import CreatePostForm from "./CreatePostForm";
import Feed from "./Feed";

export default function HomeContent({ display_name }: { display_name: string }) {
	if (!display_name) return <>Loading...</>;

	return (
		<>
			<br />
			Welcome {display_name}! What's on your mind today?
			<br />
			<p className="text-sm text-black-6 dark:text-white-6">{`02.01.2023: MySQL database is here!`}</p>
			<CreatePostForm />
			<Feed />
		</>
	);
}
