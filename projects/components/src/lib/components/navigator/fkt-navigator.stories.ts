import { Meta, StoryObj } from '@storybook/angular';
import { FktNavigatorComponent } from './fkt-navigator.component';

const meta: Meta = {
	title: 'Components/Navigator',
	component: FktNavigatorComponent,
	argTypes: {
		canGoToPrevious: {
			control: 'boolean',
			table: {
				category: 'Attributes'
			}
		},
		canGoToNext: {
			control: 'boolean',
			table: {
				category: 'Attributes'
			}
		},
		next: {
			control: 'object',
			table: {
				category: 'Actions'
			}
		},
		previous: {
			control: 'object',
			table: {
				category: 'Actions'
			}
		},
	}
};
export default meta;

type Story = StoryObj<FktNavigatorComponent>;

export const Preview: Story = {
	args: {
		canGoToPrevious: true,
		canGoToNext: true,
	}
};
