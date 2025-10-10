import type { Meta, StoryObj } from '@storybook/angular';
import { FktDatePickerComponent } from 'frakton-ng/date-picker';
import { customDocsControl } from '../../.storybook/decorators/custom-docs-control';
import { renderComponent } from '../../.storybook/decorators/render-component';
import designTokens from './fkt-date-picker-design-tokens.json';

const meta: Meta<FktDatePickerComponent> = {
	title: 'Components/Form/Datepicker',
	component: FktDatePickerComponent,
	decorators: [
		customDocsControl({
			designTokens: designTokens as any
		})
	],
	argTypes: {
		label: {
			control: "text",
			type: {
				name: "string",
			},
			table: {
				category: "Attributes",
				type: {
					summary: "string"
				},
				defaultValue: {
					summary: "undefined"
				}
			},
			description: 'Label text displayed above the input field'
		},
		placeholder: {
			control: "text",
			type: {
				name: "string",
			},
			table: {
				category: "Attributes",
				type: {
					summary: "string"
				},
				defaultValue: {
					summary: "undefined"
				}
			},
			description: 'Placeholder text shown in the input field'
		},
	}
};

type Story = StoryObj<FktDatePickerComponent>;

export const BasicDatePicker: Story = {
	render: renderComponent(FktDatePickerComponent),
	args: {
		label: "Birth Date",
		placeholder: "Select your birth date",
	},
	parameters: {
		docs: {
			description: {
				story: 'A basic date picker with label and placeholder. Click the input field to open the calendar modal for date selection.'
			}
		}
	}
};

export const WithPrefilledDate: Story = {
	render: renderComponent(FktDatePickerComponent),
	args: {
		label: "Event Date",
		placeholder: "Select event date",
	},
	parameters: {
		docs: {
			description: {
				story: 'A date picker initialized with today\'s date, showing how the component displays pre-selected values.'
			}
		}
	}
};

export const RequiredValidation: Story = {
	render: renderComponent(FktDatePickerComponent),
	args: {
		label: "Due Date (Required)",
		placeholder: "Please select a due date",
	},
	parameters: {
		docs: {
			description: {
				story: 'A date picker with required field validation. The field shows error state when empty and must be filled for form submission.'
			}
		}
	}
};

export const DisabledState: Story = {
	render: renderComponent(FktDatePickerComponent),
	args: {
		label: "Fixed Date",
		placeholder: "This date cannot be changed",
	},
	parameters: {
		docs: {
			description: {
				story: 'A date picker in disabled state. The field shows a date value but cannot be modified by the user.'
			}
		}
	}
};

export const WithFormatHint: Story = {
	render: renderComponent(FktDatePickerComponent),
	args: {
		label: "Start Date",
		placeholder: "DD/MM/YYYY format",
	},
	parameters: {
		docs: {
			description: {
				story: 'A date picker with a format hint in the placeholder to guide users on the expected date format.'
			}
		}
	}
};

export default meta;
