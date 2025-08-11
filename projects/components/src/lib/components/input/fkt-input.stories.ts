import type { Meta } from '@storybook/angular';
import { FktComponentInputs } from '../../shared/types';
import { SignalFormControl } from '../../form/signal-form-control';
import { FktInputComponent } from './fkt-input.component';
import { fktInputTransformers, fktInputTypes } from './fkt-input.types';

const meta: Meta<FktInputComponent> = {
	title: 'Components/Form/Input',
	component: FktInputComponent,
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
		type: {
			control: "select",
			options: fktInputTypes,
			table: {
				category: "Attributes",
			}
		},
		transformer: {
			control: "select",
			options: [...fktInputTransformers, "Custom transformer"],
			table: {
				category: "Attributes",
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
	args: Partial<FktComponentInputs<FktInputComponent>>
}

export const Preview: Story = {
	args: {
		control: new SignalFormControl(''),
		label: "Label",
		placeholder: "Placeholder",
		type: 'text'
	}
};

export const Currency: Story = {
	args: {
		control: new SignalFormControl(''),
		label: "Label",
		placeholder: "Placeholder",
		transformer: 'currency',
		type: 'text'
	}
};

export const Hour: Story = {
	args: {
		control: new SignalFormControl(''),
		label: "Label",
		placeholder: "Placeholder",
		transformer: 'hour',
		type: 'text'
	}
};

export const Percent: Story = {
	args: {
		control: new SignalFormControl(''),
		label: "Label",
		placeholder: "Placeholder",
		transformer: 'percent',
		type: 'text'
	}
};

export const Number: Story = {
	args: {
		control: new SignalFormControl(''),
		label: "Label",
		placeholder: "Placeholder",
		type: 'number',

	}
};

export const Password: Story = {
	args: {
		control: new SignalFormControl(''),
		label: "Label",
		placeholder: "Placeholder",
		type: 'password',

	}
};

export default meta;
