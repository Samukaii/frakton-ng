import { FktTooltipDirective } from 'frakton-ng/tooltip';
import { fktColors } from 'frakton-ng/core';
import { FktGeometryPosition } from 'frakton-ng/internal/types';
import {
	BasicTooltipExampleComponent,
	PositioningTooltipExampleComponent,
	InteractiveTooltipExampleComponent,
	DifferentElementsExampleComponent
} from './examples';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
import designTokens from './fkt-tooltip-design-tokens.json';
import { DesignToken } from '@/models/design-token';
// @ts-expect-error
import documentation from './fkt-tooltip.docs.md' with { loader: "text" };

const positionOptions: FktGeometryPosition[] = [
	'top-left', 'top-center', 'top-right',
	'bottom-left', 'bottom-center', 'bottom-right',
	'top-left', 'left-center', 'bottom-left',
	'top-right', 'right-center', 'bottom-right'
];

const meta: Meta = {
	title: "Components/Overlays/Tooltip",
	component: FktTooltipDirective,
    description: "A lightweight tooltip directive that provides contextual information on hover. Built with Angular signals and overlay system, it offers flexible positioning and seamless integration with any HTML element.",
	documentation,
	designTokens: designTokens as DesignToken[],
	argTypes: {
		fktTooltip: {
			control: 'text',
			category: "Attributes",
			type: 'string',
			defaultValue: "''",
			description: 'Text content to display in the tooltip'
		},
		tooltipEnabled: {
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: "true",
			description: 'Controls whether the tooltip is enabled'
		},
		detectOverflow: {
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: "false",
			description: 'Shows tooltip only when text is truncated/overflowing'
		},
		tooltipColor: {
			control: 'select',
			category: "Attributes",
			type: 'FktColor',
			options: fktColors,
			import: "import {FktColor} from 'frakton-ng/core'",
			defaultValue: "'primary'",
			description: 'Color theme of the tooltip'
		},
		disableAutoReposition: {
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: "false",
			description: 'Prevents automatic repositioning when tooltip goes off-screen'
		},
		position: {
			control: 'select',
			category: "Attributes",
			type: 'FktGeometryPosition',
			options: positionOptions,
			import: "import {FktGeometryPosition} from 'frakton-ng/internal/types'",
			defaultValue: "'bottom-center'",
			description: 'Position of the tooltip relative to the target element'
		}
	}
}

export const Basic: Story<BasicTooltipExampleComponent> = {
	component: BasicTooltipExampleComponent,
	description: "Simple tooltip implementation with basic text content and hover interaction.",
	args: {}
};

export const Positioning: Story<PositioningTooltipExampleComponent> = {
	component: PositioningTooltipExampleComponent,
	description: "Tooltip positioning examples showing all available position options.",
	args: {}
};

export const Interactive: Story<InteractiveTooltipExampleComponent> = {
	component: InteractiveTooltipExampleComponent,
	description: "Advanced tooltip examples with different colors and overflow detection.",
	args: {}
};

export const DifferentElements: Story<DifferentElementsExampleComponent> = {
	component: DifferentElementsExampleComponent,
	description: "Tooltips applied to various UI elements like buttons, icons, and text.",
	args: {}
};

export default meta;
