import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FktTextareaComponent } from 'frakton-ng/textarea';
import { SignalFormControl } from 'frakton-ng/forms';
import {
	AutoExpandExampleComponent,
	BasicExampleComponent,
	CharacterCounterExampleComponent,
	DisabledExampleComponent,
	FormIntegrationExampleComponent,
	ValidationExampleComponent
} from './examples';

const meta: Meta<FktTextareaComponent> = {
	title: 'Components/Form/Textarea',
	component: FktTextareaComponent,
	decorators: [
		moduleMetadata({
			imports: [
				BasicExampleComponent,
				ValidationExampleComponent,
				AutoExpandExampleComponent,
				FormIntegrationExampleComponent,
				DisabledExampleComponent,
				CharacterCounterExampleComponent
			]
		})
	],
	argTypes: {
		control: {
			control: false,
			description: 'SignalFormControl instance that manages the textarea state and validation',
			type: {
				name: "object",
				value: {},
				required: true,
			},
			table: {
				type: {
					summary: 'SignalFormControl<string>',
					detail: "import {SignalFormControl} from 'frakton-ng/forms'"
				},
				category: 'Attributes'
			}
		},
		label: {
			control: 'text',
			description: 'Label text displayed above the textarea',
			type: {
				name: "string",
				required: true,
			},
			table: {
				type: {summary: 'string'},
				category: 'Attributes'
			}
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text shown when the textarea is empty',
			table: {
				type: {summary: 'string'},
				defaultValue: {summary: "''"},
				category: 'Attributes'
			}
		},
		autoExpand: {
			control: 'boolean',
			description: 'When enabled, the textarea automatically expands to fit content',
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'},
				category: 'Attributes'
			}
		},
		focus: {
			control: false,
			description: 'Programmatically focuses the textarea element',
			table: {
				type: {
					summary: '() => void',
				},
				category: 'Methods'
			}
		}
	}
};

type Story = StoryObj<FktTextareaComponent>;

export const BasicUsage: Story = {
	parameters: {
		docs: {
			story: {
				description: 'A basic textarea with label and placeholder. Use this as a starting point for most scenarios where free-form multi-line text input is needed.',
			}
		}
	},
	render: (args) => ({
		template: `<textarea-basic-example
			[control]="control"
			[label]="label"
			[placeholder]="placeholder"
		></textarea-basic-example>`,
		props: {
			...args
		}
	}),
	args: {
		control: new SignalFormControl(''),
		label: 'Description',
		placeholder: 'Enter a detailed description...'
	}
};

export const Validation: Story = {
	parameters: {
		docs: {
			story: {
				description: 'Textarea with validation logic for minimum and maximum length. Shows error messages and disables submission if the requirements are not met.',
			}
		}
	},
	render: () => ({
		template: `<textarea-validation-example
			[minLength]="20"
			[maxLength]="500"
			[label]="'Bio'"
			[placeholder]="'Tell us about yourself...'"
		></textarea-validation-example>`,
		props: {}
	}),
	args: {}
};

export const AutoExpand: Story = {
	parameters: {
		docs: {
			story: {
				description: 'Textarea with auto-expand enabled. The textarea grows vertically as the user types more lines, improving the writing experience for long texts.',
			}
		}
	},
	render: (args) => ({
		template: `<textarea-auto-expand-example
			[control]="control"
			[label]="label"
			[placeholder]="placeholder"
			[autoExpand]="autoExpand"
		></textarea-auto-expand-example>`,
		props: {
			...args
		}
	}),
	args: {
		control: new SignalFormControl('Type here and press Enter to add new lines.\nThe textarea will automatically expand to fit the content when auto-expand is enabled.'),
		label: 'Notes',
		placeholder: 'Start typing...',
		autoExpand: true
	}
};

export const FormIntegration: Story = {
	parameters: {
		docs: {
			story: {
				description: 'Demonstrates how the textarea integrates with reactive forms using SignalFormControl. This is ideal for real-world forms that need validation, control and submission.',
			}
		}
	},
	render: () => ({
		template: `<textarea-form-integration-example></textarea-form-integration-example>`,
		props: {}
	}),
	args: {}
};

export const CharacterCounter: Story = {
	parameters: {
		docs: {
			story: {
				description: 'Textarea with a live character counter, ideal for use cases like social posts, tweets, or messages with a maximum allowed length.',
			}
		}
	},
	render: () => ({
		template: `<textarea-character-counter-example
			[maxLength]="280"
			[label]="'Tweet'"
			[placeholder]="'What is happening?'"
		></textarea-character-counter-example>`,
		props: {}
	}),
	args: {}
};

export const DisabledState: Story = {
	parameters: {
		docs: {
			story: {
				description: 'Shows the textarea in a disabled state. Useful for read-only or preview scenarios, or when editing is not allowed due to permissions or workflow status.',

			}
		}
	},
	render: () => ({
		template: `<textarea-disabled-example
			[label]="'Terms and Conditions'"
			[placeholder]="'Content will appear here...'"
			[initialDisabled]="true"
		></textarea-disabled-example>`,
		props: {}
	}),
	args: {}
};

export default meta;
