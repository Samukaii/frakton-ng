import React, {PropsWithChildren} from "react";
import './FktHeading.css';

const getHeading = (level: number) => {
	return (props: PropsWithChildren<{ id: string }>) => {
		return React.createElement(`h${level}`, {id: props.id, className: "fkt-heading"}, props.children);
	}
}

export const FktHeading = (level: 1 | 2 | 3 | 4 | 5 | 6) => (props: PropsWithChildren<{ id: string }>) => {
	const Heading = getHeading(level);

	return (
		<Heading id={props.id}>
			<a aria-hidden="true" className="fkt-heading__link" href={`#${props.id}`} tabIndex={-1} target="_self">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
					 stroke="currentColor" className="size-6">
					<path stroke-linecap="round" stroke-linejoin="round"
						  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"/>
				</svg>
			</a>
			{props.children}
		</Heading>
	)
}
