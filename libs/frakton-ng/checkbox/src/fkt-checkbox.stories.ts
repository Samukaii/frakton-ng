import {Meta, StoryObj} from '@storybook/angular';
import {FktCheckboxComponent} from 'frakton-ng/checkbox';
import {
	FktCheckboxBasicExampleComponent,
	FktCheckboxDisabledExampleComponent,
	FktCheckboxPreCheckedExampleComponent,
	FktCheckboxValidationExampleComponent
} from './examples';
import {customDocsControl} from "../../.storybook/decorators/custom-docs-control";
import {renderComponent} from "../../.storybook/decorators/render-component";
import designTokens from './fkt-checkbox-design-tokens.json';

const meta: Meta<FktCheckboxComponent> = {
	title: 'Components/Form/Checkbox',
	component: FktCheckboxComponent,
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
					summary: "''"
				}
			},
			description: 'Label text displayed next to the checkbox'
		},
	}
};

type Story = StoryObj<FktCheckboxComponent>;

export const BasicCheckbox: Story = {
	render: renderComponent(FktCheckboxBasicExampleComponent),
	args: {
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

export const PreCheckedCheckbox: Story = {
	render: renderComponent(FktCheckboxPreCheckedExampleComponent),
	args: {
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

export const DisabledState: Story = {
	render: renderComponent(FktCheckboxDisabledExampleComponent),
	parameters: {
		docs: {
			description: {
				story: 'A checkbox in disabled state. The checkbox cannot be toggled and appears with reduced opacity.'
			}
		}
	}
};

export const Validation: Story = {
	render: renderComponent(FktCheckboxValidationExampleComponent),
	parameters: {
		docs: {
			description: {
				story: 'A checkbox with required validation. The checkbox must be checked for the form to be valid, and shows error state when invalid.'
			}
		}
	}
};

export default meta;
