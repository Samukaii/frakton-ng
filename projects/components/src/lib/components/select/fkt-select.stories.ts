import type { Meta } from '@storybook/angular';
import { FktComponentInputs } from '../../shared/types';
import { SignalFormControl } from '../../form/signal-form-control';
import { FktSelectComponent } from './fkt-select.component';

const meta: Meta<FktSelectComponent> = {
	title: 'Components/Form/Select',
	component: FktSelectComponent,
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
		options: {
			control: "object",
			type: {
				name: "array",
				value: {
					name: 'object',
					value: {}
				}
			},
			table: {
				category: "Attributes",
			}
		},
	}
};

type Story = {
	args: Partial<FktComponentInputs<FktSelectComponent>>
}

const options = [
	{
		value: "opt-1",
		label: "Option 1",
	},
	{
		value: "opt-2",
		label: "Option 2",
	},
	{
		value: "opt-3",
		label: "Option 3",
	},
	{
		value: "opt-4",
		label: "Option 4",
	},
	{
		value: "opt-5",
		label: "Option 5",
	},
	{
		value: "opt-6",
		label: "Option 6",
	},
	{
		value: "opt-7",
		label: "Option 7",
	},
	{
		value: "opt-8",
		label: "Option 8",
	},
	{
		value: "opt-9",
		label: "Option 9",
	},
	{
		value: "opt-10",
		label: "Option 10",
	},
];

export const Preview: Story = {
	args: {
		control: new SignalFormControl(''),
		label: "Label",
		options
	}
};

export default meta;
