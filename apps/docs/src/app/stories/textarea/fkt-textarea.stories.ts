import { FktTextareaComponent } from 'frakton-ng/textarea';
import {
	AutoExpandExampleComponent,
	BasicExampleComponent,
	CharacterCounterExampleComponent,
	DisabledExampleComponent,
	FormIntegrationExampleComponent,
	ValidationExampleComponent
} from './examples';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-textarea.docs.md' with { loader: "text" };

const meta: Meta = {
	title: "Components/Form/Textarea",
	component: FktTextareaComponent,
	documentation,
	argTypes: {
		label: {
			control: 'text',
			category: "Attributes",
			type: 'string',
			defaultValue: "''",
			description: 'Label text displayed above the textarea'
		},
		placeholder: {
			control: 'text',
			category: "Attributes",
			type: 'string',
			defaultValue: "''",
			description: 'Placeholder text shown when the textarea is empty'
		},
		autoExpand: {
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: 'false',
			description: 'When enabled, the textarea automatically expands to fit content'
		},
		spellcheck: {
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: 'true',
			description: 'Enable or disable spell checking for the textarea'
		},
		focus: {
			control: 'boolean',
			category: 'Methods',
			type: '() => void',
			description: 'Programmatically focuses the textarea element'
		}
	}
}

export const BasicUsage: Story<BasicExampleComponent> = {
	component: BasicExampleComponent,
	description: "A basic textarea with label and placeholder. Use this as a starting point for most scenarios where free-form multi-line text input is needed.",
	args: {
		label: 'Description',
		placeholder: 'Enter a detailed description...',
		spellcheck: true
	}
};

export const Validation: Story<ValidationExampleComponent> = {
	component: ValidationExampleComponent,
	description: "Textarea with validation logic for minimum and maximum length. Shows error messages and disables submission if the requirements are not met.",
	args: {}
};

export const AutoExpand: Story<AutoExpandExampleComponent> = {
	component: AutoExpandExampleComponent,
	description: "Textarea with auto-expand enabled. The textarea grows vertically as the user types more lines, improving the writing experience for long texts.",
	args: {
		label: 'Notes',
		placeholder: 'Start typing...',
		autoExpand: true
	}
};

export const FormIntegration: Story<FormIntegrationExampleComponent> = {
	component: FormIntegrationExampleComponent,
	description: "Demonstrates how the textarea integrates with signal forms. This is ideal for real-world forms that need validation, control and submission.",
	args: {}
};

export const CharacterCounter: Story<CharacterCounterExampleComponent> = {
	component: CharacterCounterExampleComponent,
	description: "Textarea with a live character counter, ideal for use cases like social posts, tweets, or messages with a maximum allowed length.",
	args: {}
};

export const DisabledState: Story<DisabledExampleComponent> = {
	component: DisabledExampleComponent,
	description: "Shows the textarea in a disabled state. Useful for read-only or preview scenarios, or when editing is not allowed due to permissions or workflow status.",
	args: {}
};

export default meta;
