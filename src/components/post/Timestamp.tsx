import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { useState } from "react";

import { useInterval } from "usehooks-ts";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

interface ITimestampProps {
	timestamp: number;
}

function formatTimestamp(timestamp: number) {
	return timeAgo.format(timestamp * 1000);
}

export default function Timestamp(props: ITimestampProps) {
	const [date, setDate] = useState(formatTimestamp(props.timestamp));

	useInterval(() => setDate(formatTimestamp(props.timestamp)), 1000);

	return <span className="timestamp">{date}</span>;
}
