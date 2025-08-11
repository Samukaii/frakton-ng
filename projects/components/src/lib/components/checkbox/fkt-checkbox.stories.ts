import type { Meta } from '@storybook/angular';
import { FktComponentInputs } from '../../shared/types';
import { SignalFormControl } from '../../form/signal-form-control';
import { FktCheckboxComponent } from './fkt-checkbox.component';

const meta: Meta<FktCheckboxComponent> = {
	title: 'Components/Form/Checkbox',
	component: FktCheckboxComponent,
	argTypes: {
		control: {
			control: 'object',
			type: {
				name: "object",
				value: {}
			},
			table: {
				category: "Attributes",
				type: {
					summary: 'SignalFormControl',
				},
				defaultValue: {
					summary: "SignalFormControl"
				}
			}
		},
		label: {
			control: "text",
			type: {
				name: "string",
			},
			table: {
				category: "Attributes",
			}
		},
	}
};

type Story = {
	args: Partial<FktComponentInputs<FktCheckboxComponent>>
}

export const Preview: Story = {
	args: {
		control: new SignalFormControl(''),
		label: "Label",
	}
};

export default meta;
