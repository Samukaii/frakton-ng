import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FktInputComponent, fktInputTransformers, fktInputTypes } from 'frakton-ng/input';
import { SignalFormControl, SignalValidators } from 'frakton-ng/forms';
import {
	BasicExampleComponent,
	CurrencyExampleComponent,
	DisabledExampleComponent,
	EmailExampleComponent,
	FormIntegrationExampleComponent,
	HourExampleComponent,
	LoginFormExampleComponent,
	NumberExampleComponent,
	PasswordExampleComponent,
	PercentExampleComponent,
	SuffixExampleComponent,
	ValidationExampleComponent
} from './examples';

const meta: Meta<FktInputComponent> = {
	title: 'Components/Form/Input',
	component: FktInputComponent,
	decorators: [
		moduleMetadata({
			imports: [
				BasicExampleComponent,
				PasswordExampleComponent,
				NumberExampleComponent,
				EmailExampleComponent,
				CurrencyExampleComponent,
				PercentExampleComponent,
				HourExampleComponent,
				ValidationExampleComponent,
				DisabledExampleComponent,
				SuffixExampleComponent,
				FormIntegrationExampleComponent,
				LoginFormExampleComponent,
			]
		})
	],
	argTypes: {
		control: {
			control: false,
			description: 'The SignalFormControl instance that manages the component state and validation',
			type: {
				name: "object",
				value: {},
				required: true,
			},
			table: {
				category: 'Attributes',
				type: {
					summary: 'SignalFormControl<string>',
					detail: "import {SignalFormControl} from 'frakton-ng/forms';"
				},
			}
		},
		label: {
			control: 'text',
			description: 'Label text displayed above the input field',
			table: {
				category: 'Attributes',
				type: { summary: 'string' },
				defaultValue: { summary: "''" }
			}
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text shown when the input is empty',
			table: {
				category: 'Attributes',
				type: { summary: 'string' },
				defaultValue: { summary: "''" }
			}
		},
		type: {
			control: 'select',
			options: fktInputTypes,
			description: 'The type of input field determining its behavior and validation',
			table: {
				category: 'Attributes',
				type: {
					summary: 'FktInputType',
					detail: "import {FktInputType} from 'frakton-ng/input';"
				},
				defaultValue: { summary: "'text'" }
			}
		},
		transformer: {
			control: 'select',
			options: [...fktInputTransformers],
			description: 'Data transformer for automatic formatting of input values',
			table: {
				category: 'Attributes',
				type: {
					summary: 'FktInputTransformer',
					detail: "import {FktInputTransformer} from 'frakton-ng/input';"
				},
				defaultValue: { summary: 'undefined' }
			}
		},
		spellcheck: {
			control: 'boolean',
			description: 'Enable or disable spell checking for the input',
			table: {
				category: 'Attributes',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' }
			}
		}
	}
};

type Story = StoryObj<FktInputComponent>;

// Default text input story
export const BasicInput: Story = {
	render: (args) => ({
		template: `<input-basic-example [control]="control" [label]="label" [placeholder]="placeholder" [type]="type" [spellcheck]="spellcheck"></input-basic-example>`,
		props: {
			...args
		}
	}),
	args: {
		control: new SignalFormControl(''),
		label: 'Full Name',
		placeholder: 'Enter your full name',
		type: 'text',
		spellcheck: true
	},
	parameters: {
		docs: {
			description: {
				story: 'A basic text input field with label and placeholder text for general text entry.'
			}
		}
	}
};

// Password input story
export const PasswordField: Story = {
	render: (args) => ({
		template: `<input-password-example [control]="control" [label]="label" [placeholder]="placeholder"></input-password-example>`,
		props: {
			...args
		}
	}),
	args: {
		control: new SignalFormControl(''),
		label: 'Password',
		placeholder: 'Enter your password'
	},
	parameters: {
		docs: {
			description: {
				story: 'A password input field with show/hide toggle functionality. Click the eye icon to toggle password visibility.'
			}
		}
	}
};

export const EmailField: Story = {
	render: (args) => ({
		template: `<input-email-example [control]="control" [label]="label" [placeholder]="placeholder"></input-email-example>`,
		props: {
			...args
		}
	}),
	args: {
		control: new SignalFormControl(''),
		label: 'Email Address',
		placeholder: 'Enter your email address'
	},
	parameters: {
		docs: {
			description: {
				story: 'An email input field optimized for email addresses with proper keyboard and validation support.'
			}
		}
	}
};

// Number input story
export const NumericField: Story = {
	render: (args) => ({
		template: `<input-number-example [control]="control" [label]="label" [placeholder]="placeholder"></input-number-example>`,
		props: {
			...args
		}
	}),
	args: {
		control: new SignalFormControl(''),
		label: 'Age',
		placeholder: 'Enter your age'
	},
	parameters: {
		docs: {
			description: {
				story: 'A numeric input that only accepts numbers and shows numeric keypad on mobile devices.'
			}
		}
	}
};

// Currency transformer story
export const CurrencyTransformer: Story = {
	render: (args) => ({
		template: `<input-currency-example [control]="control" [label]="label" [placeholder]="placeholder"></input-currency-example>`,
		props: {
			...args
		}
	}),
	args: {
		control: new SignalFormControl(''),
		label: 'Product Price',
		placeholder: '0.00'
	},
	parameters: {
		docs: {
			description: {
				story: 'Input with currency transformer that automatically formats values as currency (e.g., $1,234.56).'
			}
		}
	}
};

// Percentage transformer story
export const PercentTransformer: Story = {
	render: (args) => ({
		template: `<input-percent-example [control]="control" [label]="label" [placeholder]="placeholder"></input-percent-example>`,
		props: {
			...args
		}
	}),
	args: {
		control: new SignalFormControl(''),
		label: 'Completion Rate',
		placeholder: 'Enter percentage'
	},
	parameters: {
		docs: {
			description: {
				story: 'Input with percentage transformer that automatically formats values as percentages (e.g., 45.5%).'
			}
		}
	}
};

// Hour transformer story
export const HourTransformer: Story = {
	render: (args) => ({
		template: `<input-hour-example [control]="control" [label]="label" [placeholder]="placeholder"></input-hour-example>`,
		props: {
			...args
		}
	}),
	args: {
		control: new SignalFormControl(''),
		label: 'Work Duration',
		placeholder: 'Enter time duration'
	},
	parameters: {
		docs: {
			description: {
				story: 'Input with hour transformer that formats time values as duration (e.g., 8h 30m).'
			}
		}
	}
};

// Validation story
export const WithValidation: Story = {
	render: (args) => ({
		template: `<input-validation-example [control]="control" [label]="label" [placeholder]="placeholder"></input-validation-example>`,
		props: {
			...args
		}
	}),
	args: {
		control: new SignalFormControl('', {
			validators: [
				SignalValidators.required(),
				SignalValidators.email()
			]
		}),
		label: 'Email Address (Required)',
		placeholder: 'Enter your email address'
	},
	parameters: {
		docs: {
			description: {
				story: 'Input with validation rules showing error states and validation feedback in real-time.'
			}
		}
	}
};

// Disabled state story
export const DisabledState: Story = {
	render: (args) => ({
		template: `<input-disabled-example [control]="control" [label]="label" [placeholder]="placeholder"></input-disabled-example>`,
		props: {
			...args
		}
	}),
	args: {
		control: (() => {
			const ctrl = new SignalFormControl('This field is disabled');
			ctrl.disable();
			return ctrl;
		})(),
		label: 'Disabled Field',
		placeholder: 'This field is disabled'
	},
	parameters: {
		docs: {
			description: {
				story: 'Input in disabled state that cannot be edited and shows visual disabled feedback.'
			}
		}
	}
};

// Suffix content story
export const WithCustomSuffix: Story = {
	render: (args) => ({
		template: `<input-suffix-example [control]="control" [label]="label" [placeholder]="placeholder"></input-suffix-example>`,
		props: {
			...args
		}
	}),
	args: {
		control: new SignalFormControl(''),
		label: 'Search Products',
		placeholder: 'Search products...'
	},
	parameters: {
		docs: {
			description: {
				story: 'Input with custom suffix content (buttons, icons, text) using content projection.'
			}
		}
	}
};

// Form integration story
export const FormIntegration: Story = {
	render: (args) => ({
		template: `<input-form-integration-example></input-form-integration-example>`,
		props: {
			...args
		}
	}),
	args: {},
	parameters: {
		docs: {
			description: {
				story: 'Complete form integration example showing multiple input types working together with validation.'
			}
		}
	}
};

export default meta;
