import {PropsWithChildren} from "react";

export const If = (props: PropsWithChildren<{ condition: boolean }>) => {
	return props.condition ? <>{props.children}</> : null;
}
