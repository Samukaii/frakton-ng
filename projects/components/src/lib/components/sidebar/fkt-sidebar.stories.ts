import type { Meta } from '@storybook/angular';
import { FktComponentInputs } from '../../shared/types';
import { fktSidebarModes } from './fkt-sidebar.types';
import { FktSidebarExampleComponent } from './example/fkt-sidebar-example.component';

const meta: Meta<FktSidebarExampleComponent> = {
	title: 'Components/Sidebar',
	component: FktSidebarExampleComponent,
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
	args: Partial<FktComponentInputs<FktSidebarExampleComponent>>
}

export const Preview: Story = {
	args: {
		mode: 'push',
		opened: true,
		width: '300px'
	}
};

export default meta;
