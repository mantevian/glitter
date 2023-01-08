import { IUserProps } from "./userProps";

export interface IPostProps {
	author: IUserProps
	id: string;
	createdTimestamp: number;
	text: string;
}