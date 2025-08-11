import type { Meta } from '@storybook/angular';
import { FktComponentInputs, fktColors } from '../../shared/types';
import { FktSpinnerComponent } from './fkt-spinner.component';

const meta: Meta<FktSpinnerComponent> = {
	title: 'Components/Spinner',
	component: FktSpinnerComponent,
	argTypes: {
		color: {
			control: 'select',
			options: fktColors
		},
		size: {
			control: "number",
		},
		stroke: {
			control: "number",
		},
	}
};

type Story = {
	args: Partial<FktComponentInputs<FktSpinnerComponent>>
}

export const Preview: Story = {
	args: {
		color: 'primary',
		size: 150,
		stroke: 10
	}
};

export default meta;
