import {ModuleExport} from "storybook/internal/types";
import {CanvasBlock} from "./CanvasBlock";
import {Description, Subheading, useOf,} from "@storybook/addon-docs/blocks";

type CanvasBlockProps = {
	fixedSize?: boolean;
	of: ModuleExport;
	code?: string | {
		name: string;
		files: {
			name: string;
			content: string;
			language: 'typescript' | 'css' | 'html'
		}[]
	};
};

export const StoryDoc = (props: CanvasBlockProps) => {
	const resolvedOf = useOf(props.of || 'story', ['story', 'meta']);

	if (resolvedOf.type !== "story")
		throw new Error(`"of" property must be a valid story`);

	const storyName = resolvedOf.story.name;

	return (
		<div>
			<Subheading>
				{storyName}
			</Subheading>
			<Description of={props.of}/>

			<CanvasBlock {...props}/>
		</div>
	)
}
