import type { Meta } from '@storybook/angular';
import { FktComponentInputs } from '../../shared/types';
import { fktSidebarModes } from './fkt-drawer.types';
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
