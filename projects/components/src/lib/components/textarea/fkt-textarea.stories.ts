import type { Meta } from '@storybook/angular';
import { FktComponentInputs } from '../../shared/types';
import { SignalFormControl } from '../../form/signal-form-control';
import { FktTextareaComponent } from './fkt-textarea.component';

const meta: Meta<FktTextareaComponent> = {
	title: 'Components/Form/Textarea',
	component: FktTextareaComponent,
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
	args: Partial<FktComponentInputs<FktTextareaComponent>>
}

export const Preview: Story = {
	args: {
		control: new SignalFormControl(''),
		label: "Label",
		placeholder: "Placeholder",
	}
};


export default meta;
