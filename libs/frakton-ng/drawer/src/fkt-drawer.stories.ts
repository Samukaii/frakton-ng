import type { Meta, StoryObj } from '@storybook/angular';
import { FktComponentInputs } from 'frakton-ng/internal/types';
import { fktSidebarModes } from 'frakton-ng/drawer';
import { FktDrawerExampleComponent } from './example/fkt-drawer-example.component';
import { fktStoryRenderer } from '../../.storybook/decorators/fkt-story-renderer';
import { renderComponent } from '../../.storybook/decorators/render-component';

const meta: Meta<FktDrawerExampleComponent> = {
	title: 'Components/Overlay/Drawer',
	component: FktDrawerExampleComponent,
	decorators: [
		fktStoryRenderer()
	],
	argTypes: {
		mode: {
			control: 'select',
			options: fktSidebarModes,
			table: {
				type: {
					summary: "FktDrawerTypes",
					detail: "import {FktDrawerTypes} from 'frakton-ng/drawer'"
				},
				category: "Attributes",
				defaultValue: {
					summary: "'push'"
				},
			}
		},
		width: {
			control: 'text',
			table: {
				type: {
					summary: "string",
				},
				category: "Attributes",
				defaultValue: {
					summary: "'250px'"
				},
			}
		},
		opened: {
			control: 'boolean',
			table: {
				type: {
					summary: "boolean",
				},
				category: "Attributes",
				defaultValue: {
					summary: "false"
				},
			}
		}
	}
};

export const Preview: StoryObj = {
	render: renderComponent(FktDrawerExampleComponent),
	args: {
		mode: 'push',
		opened: true,
		width: '300px'
	}
};

export default meta;
