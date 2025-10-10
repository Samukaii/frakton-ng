import {useOf,} from "@storybook/addon-docs/blocks";
import {ModuleExport} from "storybook/internal/types";
import {useArgs} from "storybook/preview-api";

type FktControlsProps = {
	of: ModuleExport;
};


export const FktControls = (props: FktControlsProps) => {
	const resolvedOf = useOf(props.of || 'story', ['story', 'meta']);

	if (resolvedOf.type !== "story")
		throw new Error(`"of" property must be a valid story`);
	const a = useArgs();

	return (
		<div>
		</div>
	)
}
