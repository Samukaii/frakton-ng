import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FktTextareaComponent } from './fkt-textarea.component';
import { SignalFormControl } from '../../form/signal-form-control';
import {
	BasicExampleComponent,
	ValidationExampleComponent,
	AutoExpandExampleComponent,
	FormIntegrationExampleComponent,
	DisabledExampleComponent,
	CharacterCounterExampleComponent
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
			table: {
				type: { summary: 'SignalFormControl<any>' },
				defaultValue: { summary: 'Required' },
				category: 'Inputs'
			}
		},
		label: {
			control: 'text',
			description: 'Label text displayed above the textarea',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'Required' },
				category: 'Inputs'
			}
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text shown when the textarea is empty',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: "''" },
				category: 'Inputs'
			}
		},
		autoExpand: {
			control: 'boolean',
			description: 'When enabled, the textarea automatically expands to fit content',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
				category: 'Inputs'
			}
		},
		focus: {
			control: false,
			description: 'Programmatically focuses the textarea element',
			table: {
				type: { summary: '() => void' },
				category: 'Methods'
			}
		}
	}
};

type Story = StoryObj<FktTextareaComponent>;

export const Basic: Story = {
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

export const WithValidation: Story = {
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
	render: () => ({
		template: `<textarea-form-integration-example></textarea-form-integration-example>`,
		props: {}
	}),
	args: {}
};

export const CharacterCounter: Story = {
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
