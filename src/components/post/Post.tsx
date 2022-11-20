import PostData from "../../models/PostData";
import Timestamp from "./Timestamp";
import * as React from "react";
import Link from "next/link";

export interface IPostProps {
	data: PostData;
}

export default function Post(props: IPostProps) {
	return (
		<Link href={ `/post/${props.data.id}` }>
			<div className="generic-box">
				<div className="absolute rounded-full w-10 h-10 bg-glitter"></div>
				<div className="ml-12">
					<div className="flex gap-2 items-center">
						<span className="font-semibold text-glitter">{props.data.author}</span>
						<Timestamp timestamp={props.data.timestamp} />
					</div>
					<div className="break-words text-black-6 dark:text-white-6">{props.data.text}</div>
				</div>
			</div>
		</Link>
	);
}
