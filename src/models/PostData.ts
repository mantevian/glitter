import { Identifier } from "./Identifier";

type PostData = {
	id: string;
	username: string;
	displayName: string;
	text: string;
	timestamp: number;
}

export default PostData;

export function compareDates(a: PostData, b: PostData) {
	return new Identifier(b.id).timestamp - new Identifier(a.id).timestamp;
}