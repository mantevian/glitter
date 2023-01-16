import Timestamp from "./Timestamp";
import * as React from "react";
import Link from "next/link";
const he = require("he");
import Markdown from "markdown-to-jsx";
import { IPostProps } from "../../models/client/postProps";
import CustomColoredComponent from "../util/CustomColoredComponent";

export default function Post(props: IPostProps) {
	return (
		<div className="generic-box post">
			<Link href={`/uid/${props.author.id}`} className="absolute rounded-full w-10 h-10 bg-glitter">
				<img className="aspect-square w-10 rounded-full" src={props.author.avatar_url ?? ""} />
			</Link>
			<div className="ml-12">
				<Link href={`/uid/${props.author.id}`}>
					<div className="flex gap-2 items-baseline">
						<div className="flex gap-2 items-center">
							<div className="font-semibold text-glitter">
								<CustomColoredComponent color={props.author.color}>{props.author.display_name}</CustomColoredComponent>
							</div>
							<span className="text-white-6 dark:text-black-6">@{props.author.username}</span>
						</div>
						<Timestamp timestamp={props.created_timestamp} />
					</div>
				</Link>
				<Link href={`./post/${props.id}`}>
					<div className="break-words text-black-6 dark:text-white-6">
						<Markdown>{he.decode(props.text)}</Markdown>
					</div>
				</Link>
			</div>
		</div>
	);
}
