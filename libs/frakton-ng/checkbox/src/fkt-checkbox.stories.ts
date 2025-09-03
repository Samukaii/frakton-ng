import type { Meta, StoryObj } from '@storybook/angular';
import { SignalFormControl, SignalValidators } from 'frakton-ng/forms';
import { FktCheckboxComponent } from 'frakton-ng/checkbox';

const meta: Meta<FktCheckboxComponent> = {
	title: 'Components/Form/Checkbox',
	component: FktCheckboxComponent,
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
			description: 'The form control that manages the checkbox state and validation'
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
					summary: "''"
				}
			},
			description: 'Label text displayed next to the checkbox'
		},
	}
};

type Story = StoryObj<FktCheckboxComponent>;

// Basic checkbox example
export const Default: Story = {
	args: {
		control: new SignalFormControl(false),
		label: "Accept terms and conditions",
	},
	parameters: {
		docs: {
			description: {
				story: 'A basic checkbox with label text. Click either the checkbox or the label to toggle the state.'
			}
		}
	}
};

// Pre-checked checkbox
export const Checked: Story = {
	args: {
		control: new SignalFormControl(true),
		label: "Subscribe to newsletter",
	},
	parameters: {
		docs: {
			description: {
				story: 'A checkbox that is initially checked. The control is initialized with true as the default value.'
			}
		}
	}
};

// Checkbox with longer label
export const WithLongLabel: Story = {
	args: {
		control: new SignalFormControl(false),
		label: "I understand and agree to the Terms of Service, Privacy Policy, and Cookie Policy. I also consent to receiving marketing communications.",
	},
	parameters: {
		docs: {
			description: {
				story: 'A checkbox with a longer label text showing proper text wrapping and alignment behavior.'
			}
		}
	}
};

// Disabled checkbox
export const Disabled: Story = {
	args: {
		control: (() => {
			const control = new SignalFormControl(false);
			control.disable();
			return control;
		})(),
		label: "This option is disabled",
	},
	parameters: {
		docs: {
			description: {
				story: 'A checkbox in disabled state. The checkbox cannot be toggled and appears with reduced opacity.'
			}
		}
	}
};

// Checkbox with validation
export const WithValidation: Story = {
	args: {
		control: new SignalFormControl(false, {
			validators: [SignalValidators.requiredTrue()]
		}),
		label: "I accept the terms (required)",
	},
	parameters: {
		docs: {
			description: {
				story: 'A checkbox with required validation. The checkbox must be checked for the form to be valid, and shows error state when invalid.'
			}
		}
	}
};

// Disabled and checked
export const DisabledChecked: Story = {
	args: {
		control: (() => {
			const control = new SignalFormControl(true);
			control.disable();
			return control;
		})(),
		label: "This option is enabled by default",
	},
	parameters: {
		docs: {
			description: {
				story: 'A checkbox that is both disabled and checked, showing read-only state with a selected value.'
			}
		}
	}
};

// Legacy export for backward compatibility
export const Preview: Story = Default;

export default meta;
