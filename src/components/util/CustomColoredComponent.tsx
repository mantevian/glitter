import * as React from "react";
import { ReactNode } from "react";

export interface ICustomColoredComponentProps {
	color?: string | null;
	children?: ReactNode;
}

export default function CustomColoredComponent(props: ICustomColoredComponentProps) {
	return (
		<span
			style={{
				color: `#${props.color ?? `d674d8`}`,
			}}
		>
			{props.children}
		</span>
	);
}
