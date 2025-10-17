import type { Meta, StoryObj } from '@storybook/angular';
import { FktTooltipDirective } from 'frakton-ng/tooltip';
import { fktGeometryPositions } from 'frakton-ng/internal/types';
import { customDocsControl } from '../../.storybook/decorators/custom-docs-control';
import { renderComponent } from '../../.storybook/decorators/render-component';
import {
	BasicTooltipExampleComponent,
	DifferentElementsExampleComponent,
	InteractiveTooltipExampleComponent,
	PositioningTooltipExampleComponent
} from './examples';
import { FktTooltipComponent } from './fkt-tooltip.component';

const meta: Meta<FktTooltipDirective> = {
	title: 'Components/Tooltip',
	component: FktTooltipComponent,
	decorators: [
		customDocsControl()
	],
	argTypes: {
		fktTooltip: {
			control: 'text',
			description: 'The tooltip text to display',

			table: {
				type: {summary: 'string'},
				defaultValue: {summary: 'Required - tooltip message'}
			}
		},
		tooltipEnabled: {
			control: 'boolean',
			description: 'Whether the tooltip is enabled or disabled',
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'true'}
			}
		},
		position: {
			control: 'select',
			options: fktGeometryPositions,
			description: 'Position of the tooltip relative to the trigger element',
			table: {
				type: {
					summary: 'FktGeometryPosition',
					detail: "import {FktGeometryPosition} from ''"
				},
				defaultValue: {summary: 'bottom-center'}
			}
		}
	}
};

type Story = StoryObj<FktTooltipDirective>;

export const BasicTooltips: Story = {
	render: renderComponent(BasicTooltipExampleComponent),
	parameters: {
		docs: {
			description: {
				story: 'Basic tooltip examples showing simple hover interactions with different button styles and states.'
			}
		}
	}
};

export const Positioning: Story = {
	render: renderComponent(PositioningTooltipExampleComponent),
	parameters: {
		docs: {
			description: {
				story: 'Comprehensive positioning examples showing all available tooltip positions: top, bottom, left, right with start, center, and end alignments.'
			}
		}
	}
};

export const InteractiveControls: Story = {
	render: renderComponent(InteractiveTooltipExampleComponent),
	parameters: {
		docs: {
			description: {
				story: 'Interactive example with form controls allowing you to dynamically change tooltip text, position, and enabled state.'
			}
		}
	}
};

export const DifferentElements: Story = {
	render: renderComponent(DifferentElementsExampleComponent),
	parameters: {
		docs: {
			description: {
				story: 'Examples showing tooltips on various UI elements including buttons, icons, badges, text, and custom elements.'
			}
		}
	}
};

export default meta;
