import type { Meta, StoryObj } from '@storybook/angular';
import { FktTextareaComponent } from 'frakton-ng/textarea';
import {
	AutoExpandExampleComponent,
	BasicExampleComponent,
	CharacterCounterExampleComponent,
	DisabledExampleComponent,
	FormIntegrationExampleComponent,
	ValidationExampleComponent
} from './examples';
import { customDocsControl } from '../../.storybook/decorators/custom-docs-control';
import { renderComponent } from '../../.storybook/decorators/render-component';
import designTokens from './fkt-textarea-design-tokens.json';

const meta: Meta<FktTextareaComponent> = {
	title: 'Components/Form/Textarea',
	component: FktTextareaComponent,
	decorators: [
		customDocsControl({
			designTokens: designTokens as any
		}),
	],
	argTypes: {
		label: {
			control: 'text',
			description: 'Label text displayed above the textarea',
			table: {
				category: 'Attributes',
				type: {summary: 'string'},
				defaultValue: {summary: "''"}
			}
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text shown when the textarea is empty',
			table: {
				category: 'Attributes',
				type: {summary: 'string'},
				defaultValue: {summary: "''"}
			}
		},
		autoExpand: {
			control: 'boolean',
			description: 'When enabled, the textarea automatically expands to fit content',
			table: {
				category: 'Attributes',
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'}
			}
		},
		spellcheck: {
			control: 'boolean',
			description: 'Enable or disable spell checking for the textarea',
			table: {
				category: 'Attributes',
				type: {summary: 'boolean'},
				defaultValue: {summary: 'true'}
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
	render: renderComponent(BasicExampleComponent),
	args: {
		label: 'Description',
		placeholder: 'Enter a detailed description...',
		spellcheck: true
	},
	parameters: {
		options: {
			showPanel: true,
		},
		docs: {
			description: {
				story: 'A basic textarea with label and placeholder. Use this as a starting point for most scenarios where free-form multi-line text input is needed.'
			}
		}
	}
};

export const Validation: Story = {
	render: renderComponent(ValidationExampleComponent),
	args: {},
	parameters: {
		docs: {
			description: {
				story: 'Textarea with validation logic for minimum and maximum length. Shows error messages and disables submission if the requirements are not met.'
			}
		}
	}
};

export const AutoExpand: Story = {
	render: renderComponent(AutoExpandExampleComponent),
	args: {
		label: 'Notes',
		placeholder: 'Start typing...',
		autoExpand: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Textarea with auto-expand enabled. The textarea grows vertically as the user types more lines, improving the writing experience for long texts.'
			}
		}
	}
};

export const FormIntegration: Story = {
	render: renderComponent(FormIntegrationExampleComponent),
	args: {},
	parameters: {
		docs: {
			description: {
				story: 'Demonstrates how the textarea integrates with signal forms. This is ideal for real-world forms that need validation, control and submission.'
			}
		}
	}
};

export const CharacterCounter: Story = {
	render: renderComponent(CharacterCounterExampleComponent),
	args: {},
	parameters: {
		docs: {
			description: {
				story: 'Textarea with a live character counter, ideal for use cases like social posts, tweets, or messages with a maximum allowed length.'
			}
		}
	}
};

export const DisabledState: Story = {
	render: renderComponent(DisabledExampleComponent),
	args: {},
	parameters: {
		docs: {
			description: {
				story: 'Shows the textarea in a disabled state. Useful for read-only or preview scenarios, or when editing is not allowed due to permissions or workflow status.'
			}
		}
	}
};

export default meta;
