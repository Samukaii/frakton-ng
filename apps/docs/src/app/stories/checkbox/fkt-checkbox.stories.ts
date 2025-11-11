import { FktCheckboxComponent } from 'frakton-ng/checkbox';
import {
	FktCheckboxBasicExampleComponent,
	FktCheckboxDisabledExampleComponent,
	FktCheckboxPreCheckedExampleComponent,
	FktCheckboxValidationExampleComponent
} from './examples';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-checkbox.docs.md' with { loader: "text" };

const meta: Meta = {
	title: "Components/Form/Checkbox",
	component: FktCheckboxComponent,
    description: "The FktCheckbox component provides a clean and accessible checkbox input with custom styling. Built with Angular signals and reactive forms, it offers seamless integration with form validation and state management.",
	documentation,
	argTypes: {
		label: {
			control: "text",
			category: "Attributes",
			type: "string",
			defaultValue: "''",
			description: 'Label text displayed next to the checkbox'
		}
	}
}

export const BasicCheckbox: Story<FktCheckboxBasicExampleComponent> = {
	component: FktCheckboxBasicExampleComponent,
	description: "A basic checkbox with label text. Click either the checkbox or the label to toggle the state.",
	args: {
		label: "Accept terms and conditions"
	}
};

export const PreCheckedCheckbox: Story<FktCheckboxPreCheckedExampleComponent> = {
	component: FktCheckboxPreCheckedExampleComponent,
	description: "A checkbox that is initially checked. The control is initialized with true as the default value.",
	args: {
		label: "Subscribe to newsletter"
	}
};

export const DisabledState: Story<FktCheckboxDisabledExampleComponent> = {
	component: FktCheckboxDisabledExampleComponent,
	description: "A checkbox in disabled state. The checkbox cannot be toggled and appears with reduced opacity.",
	args: {}
};

export const Validation: Story<FktCheckboxValidationExampleComponent> = {
	component: FktCheckboxValidationExampleComponent,
	description: "A checkbox with required validation. The checkbox must be checked for the form to be valid, and shows error state when invalid.",
	args: {}
};

export default meta;
