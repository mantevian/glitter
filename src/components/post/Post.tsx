import Timestamp from "./Timestamp";
import * as React from "react";
import Link from "next/link";
import PostData from "../../models/PostData";

export default function Post(props: PostData) {
	return (
		<Link className="post" href={`/post/${props.id}`}>
			<div className="generic-box">
				<div className="absolute rounded-full w-10 h-10 bg-glitter"></div>
				<div className="ml-12">
					<div className="flex gap-2 items-center">
						<span className="font-semibold text-glitter">{props.displayName}</span>
						<span className="font-semibold text-black-7">@{props.username}</span>
						<Timestamp timestamp={props.timestamp} />
					</div>
					<div className="break-words text-black-6 dark:text-white-6">{props.text}</div>
				</div>
			</div>
		</Link>
	);
}
