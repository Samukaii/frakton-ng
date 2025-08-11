import type { Meta } from '@storybook/angular';
import { FktComponentInputs } from '../../shared/types';
import { SignalFormControl } from '../../form/signal-form-control';
import { FktDatePickerComponent } from './fkt-date-picker.component';

const meta: Meta<FktDatePickerComponent> = {
	title: 'Components/Form/Datepicker',
	component: FktDatePickerComponent,
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
		placeholder: {
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
	args: Partial<FktComponentInputs<FktDatePickerComponent>>
}

export const Preview: Story = {
	args: {
		control: new SignalFormControl(''),
		label: "Label",
		placeholder: "Placeholder",
	}
};

export default meta;
