import type { Meta, StoryObj } from '@storybook/angular';
import { SignalFormControl, SignalValidators } from 'frakton-ng/forms';
import { FktDatePickerComponent } from 'frakton-ng/date-picker';

const meta: Meta<FktDatePickerComponent> = {
	title: 'Components/Form/Datepicker',
	component: FktDatePickerComponent,
	argTypes: {
		control: {
			control: false,
			type: {
				name: "object",
				value: {},
				required: true,
			},
			table: {
				category: "Attributes",
				type: {
					summary: 'SignalFormControl<Date>',
					detail: "import {SignalFormControl} from 'frakton-ng/forms';"
				},
			},
			description: 'The form control that manages the date picker state and validation'
		},
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
	args: {
		control: new SignalFormControl(null),
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
	args: {
		control: new SignalFormControl(new Date()),
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
	args: {
		control: new SignalFormControl(null, {
			validators: [SignalValidators.required()]
		}),
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
	args: {
		control: (() => {
			const control = new SignalFormControl(new Date('2024-12-25'));
			control.disable();
			return control;
		})(),
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
	args: {
		control: new SignalFormControl(null),
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
