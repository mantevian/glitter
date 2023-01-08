import Timestamp from "./Timestamp";
import * as React from "react";
import Link from "next/link";
const he = require("he");
import Markdown from "markdown-to-jsx";
import { IPostProps } from "../../models/client/postProps";

export default function Post(props: IPostProps) {
	return (
		<Link className="post" href={`/post/${props.id}`}>
			<div className="generic-box">
				<div className="absolute rounded-full w-10 h-10 bg-glitter">
					<img className="rounded-full" src={props.author.avatarURL ?? ""} />
				</div>
				<div className="ml-12">
					<div className="flex gap-2 items-baseline">
						<div className="flex gap-2 items-center">
							<span className="font-semibold text-glitter"
								style={{
								color: `#${props.author.color}`
							}}>{props.author.displayName}</span>
							<span className="text-white-6 dark:text-black-6">@{props.author.username}</span>
						</div>
						<Timestamp timestamp={props.createdTimestamp} />
					</div>
					<div className="break-words text-black-6 dark:text-white-6">
						<Markdown>{he.decode(props.text)}</Markdown>
					</div>
				</div>
			</div>
		</Link>
	);
}
