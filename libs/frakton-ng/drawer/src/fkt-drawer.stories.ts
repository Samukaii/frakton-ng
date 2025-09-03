import type { Meta } from '@storybook/angular';
import { FktComponentInputs } from 'frakton-ng/internal/types';
import { fktSidebarModes } from 'frakton-ng/drawer';
import { FktDrawerExampleComponent } from './example/fkt-drawer-example.component';

const meta: Meta<FktDrawerExampleComponent> = {
	title: 'Components/Drawer',
	component: FktDrawerExampleComponent,
	argTypes: {
		mode: {
			control: 'select',
			options: fktSidebarModes
		},
		width: {
			control: 'text'
		},
		opened: {
			control: 'boolean'
		}
	}
};

type Story = {
	args: Partial<FktComponentInputs<FktDrawerExampleComponent>>
}

export const Preview: Story = {
	args: {
		mode: 'push',
		opened: true,
		width: '300px'
	}
};

export default meta;
