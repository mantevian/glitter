import Timestamp from "./Timestamp";
import * as React from "react";
import Link from "next/link";
const he = require("he");
import Markdown from "markdown-to-jsx";

export interface IPostProps {
	authorId: string;
	authorUsername: string;
	authorDisplayName: string;
	postId: string;
	postCreatedTimestamp: number;
	postText: string;
}

export default function Post(props: IPostProps) {
	console.log(props.postText)
	return (
		<Link className="post" href={`/post/${props.postId}`}>
			<div className="generic-box">
				<div className="absolute rounded-full w-10 h-10 bg-glitter"></div>
				<div className="ml-12">
					<div className="flex gap-2 items-baseline">
						<div className="flex gap-2 items-center">
							<span className="font-semibold text-glitter">{props.authorDisplayName}</span>
							<span className="font-semibold text-black-7">@{props.authorUsername}</span>
						</div>
						<Timestamp timestamp={props.postCreatedTimestamp} />
					</div>
					<div className="break-words text-black-6 dark:text-white-6">
						<Markdown>{he.decode(props.postText)}</Markdown>
					</div>
				</div>
			</div>
		</Link>
	);
}
