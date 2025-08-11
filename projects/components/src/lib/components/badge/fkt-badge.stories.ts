import type { Meta } from '@storybook/angular';
import { FktComponentInputs } from '../../shared/types';
import { FktBadgeComponent } from './fkt-badge.component';
import { fktBadgeColors, fktBadgeVariants } from './fkt-badge.types';

const meta: Meta<FktBadgeComponent> = {
	title: 'Components/Badge',
	component: FktBadgeComponent,
	argTypes: {
		text: { control: 'text' },
		variant: {
			control: 'select',
			options: fktBadgeVariants,

		},
		color: {
			control: 'select',
			options: fktBadgeColors
		},
	}
};

type Story = {
	args: Partial<FktComponentInputs<FktBadgeComponent>>
}

export const Preview: Story = {
	args: {
		text: 'Success',
		color: 'green',
		variant: 'opaque',
	}
};


export default meta;
