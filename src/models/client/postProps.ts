import { IUserProps } from "./userProps";

export interface IPostProps {
	author: IUserProps
	id: string;
	created_timestamp: number;
	text: string;
}