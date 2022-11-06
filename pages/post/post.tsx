import PostData from "../../src/post_data";
import Timestamp from "./timestamp";

export default function Post({ data }: { data: PostData }) {
	return (
		<div className="border p-2 bg-white-1 border-white-5 dark:bg-black-1 dark:border-black-5">
			<div className="absolute rounded-full w-10 h-10 bg-glitter"></div>
			<div className="ml-12">
				<div className="flex gap-2 items-center">
					<span className="font-semibold text-glitter">{data.author}</span>
					<Timestamp timestamp={data.timestamp} />
				</div>
				<div className="break-words text-black-4 dark:text-white-4">{data.text}</div>
			</div>
		</div>
	);
}
