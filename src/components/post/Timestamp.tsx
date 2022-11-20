import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addLocale(en);

interface ITimestampProps {
	timestamp: number;
}

export default function Timestamp(props: ITimestampProps) {
	return (
		<span className="timestamp">
			{new TimeAgo('en-US').format(props.timestamp * 1000)}
		</span>
	);
}
