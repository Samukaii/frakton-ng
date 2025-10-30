import {Story, useOf} from "@storybook/addon-docs/blocks";
import {ModuleExport} from "storybook/internal/types";
import {useState} from "react";
import {If} from "../../utils/If";
import {FilesSource} from "../FktFilesRenderer/FktFilesRenderer";
import './FktStoryPlayground.css';

type FktPlaygroundProps = {
	of: ModuleExport;
	fixedSize?: boolean;
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


export const FktStoryPlayground = (props: FktPlaygroundProps) => {
	const resolvedOf = useOf(props.of || 'story', ['story', 'meta']);
	const [tab, setTab] = useState('preview');

	if (resolvedOf.type !== "story")
		throw new Error(`"of" property must be a valid story`);

	const sources = (Array.isArray(props.code) ? props.code : [props.code]);

	return (
		<div className="canvas-block">
			<div className="canvas-block__tabs">
				<button
					className={tab === 'preview' ? 'active' : ''}
					onClick={() => setTab('preview')}
				>
					<div className="frakton-icon">
						
					</div>
					Preview
				</button>
				<button
					className={tab === 'code' ? 'active' : ''}
					onClick={() => setTab('code')}
				>
					<div className="frakton-icon">
						
					</div>
					Code
				</button>
			</div>

			<div className="canvas-block__content">
				<If condition={tab === "preview"}>
					<div className="canvas-block__canvas">

						<Story of={props.of}/>
					</div>
				</If>
				<If condition={tab === "code"}>
					{sources.map(source => {
						return <FilesSource code={source} of={props.of}/>
					})}
				</If>
			</div>
		</div>
	)
}
