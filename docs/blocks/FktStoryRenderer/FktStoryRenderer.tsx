import {ModuleExport} from "storybook/internal/types";
import {FktStoryPlayground} from "../FktStoryPlayground/FktStoryPlayground";
import {Description, Subheading, useOf,} from "@storybook/addon-docs/blocks";
import './FktStoryRenderer.css';

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
	} | {
		name: string;
		files: {
			name: string;
			content: string;
			language: 'typescript' | 'css' | 'html'
		}[]
	}[];
};

export const FktStoryRenderer = (props: CanvasBlockProps) => {
	const resolvedOf = useOf(props.of || 'story', ['story', 'meta']);

	if (resolvedOf.type !== "story")
		throw new Error(`"of" property must be a valid story`);

	const storyName = resolvedOf.story.name;

	return (
		<div>
			<span className="story-renderer__heading">
				<Subheading>
				{storyName}
				</Subheading>
			</span>

			<Description of={props.of}/>

			<FktStoryPlayground {...props}/>
		</div>
	)
}
