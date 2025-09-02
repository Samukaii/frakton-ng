import type { Meta, StoryObj } from '@storybook/angular';
import { SignalFormControl, SignalValidators } from '@frakton-ng/forms';
import { FktDatePickerComponent } from '@frakton-ng/date-picker';

const meta: Meta<FktDatePickerComponent> = {
	title: 'Components/Form/Datepicker',
	component: FktDatePickerComponent,
	argTypes: {
		control: {
			control: false,
			table: {
				category: "Attributes",
				type: {
					summary: 'SignalFormControl<any>',
				},
				defaultValue: {
					summary: "Required - SignalFormControl instance"
				}
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

// Basic date picker example
export const Default: Story = {
	args: {
		control: new SignalFormControl(''),
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

// Date picker with pre-filled date
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

// Date picker with required validation
export const RequiredField: Story = {
	args: {
		control: new SignalFormControl('', {
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

// Disabled date picker
export const Disabled: Story = {
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

// Date picker without label
export const WithoutLabel: Story = {
	args: {
		control: new SignalFormControl(''),
		placeholder: "mm/dd/yyyy",
	},
	parameters: {
		docs: {
			description: {
				story: 'A date picker without a label, useful for compact layouts where space is limited or when the context is clear.'
			}
		}
	}
};

// Date picker with custom format hint
export const WithFormatHint: Story = {
	args: {
		control: new SignalFormControl(''),
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

// Legacy export for backward compatibility
export const Preview: Story = Default;

export default meta;
