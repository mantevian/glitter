import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addLocale(en);

export default function Timestamp({ timestamp }: { timestamp: number }) {
	return (
		<span className="text-xs text-black-7 font-medium align-bottom">
			{new TimeAgo('en-US').format(Date.now() - timestamp)}
		</span>
	);
}
