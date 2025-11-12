import { FktInputComponent, fktInputTransformers, fktInputTypes } from 'frakton-ng/input';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-input.docs.md' with { loader: "text" };
import designTokens from './fkt-input-design-tokens.json';

const meta: Meta = {
	title: "Components/Form/Input",
	component: FktInputComponent,
    designTokens: designTokens as any,
    description: "A versatile form input component with multiple types, data transformers, and comprehensive validation support. Built with Angular signals for reactive form integration.",
	documentation,
	argTypes: {
		label: {
			control: 'text',
			category: "Attributes",
			type: 'string',
			defaultValue: "''",
			description: 'Label text displayed above the input field'
		},
		placeholder: {
			control: 'text',
			category: "Attributes",
			type: 'string',
			defaultValue: "''",
			description: 'Placeholder text shown when the input is empty'
		},
		type: {
			control: 'select',
			category: "Attributes",
			type: 'FktInputType',
			options: fktInputTypes,
			import: "import {FktInputType} from 'frakton-ng/input'",
			defaultValue: "'text'",
			description: 'The type of input field determining its behavior and validation'
		},
		formatter: {
			control: 'select',
			category: "Attributes",
			type: 'FktInputTransformer',
			options: fktInputTransformers,
			import: "import {FktInputTransformer} from 'frakton-ng/input'",
			defaultValue: "undefined",
			description: 'Data transformer for automatic formatting of input values'
		},
		spellcheck: {
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: "true",
			description: 'Enable or disable spell checking for the input'
		}
	}
}

export const Basic: Story<FktInputComponent> = {
	description: "A basic text input field with label and placeholder text for general text entry.",
	args: {
		label: 'Full Name',
		placeholder: 'Enter your full name',
		type: 'text',
		spellcheck: true
	}
};

export const Password: Story<FktInputComponent> = {
	description: "A password input field with show/hide toggle functionality. Click the eye icon to toggle password visibility.",
	args: {
		label: 'Password',
		placeholder: 'Enter your password',
		type: 'password'
	}
};

export const Email: Story<FktInputComponent> = {
	description: "An email input field optimized for email addresses with proper keyboard and validation support.",
	args: {
		label: 'Email Address',
		placeholder: 'Enter your email address',
		type: 'email'
	}
};

export const Number: Story<FktInputComponent> = {
	description: "A numeric input that only accepts numbers and shows numeric keypad on mobile devices.",
	args: {
		label: 'Age',
		placeholder: 'Enter your age',
		type: 'number'
	}
};

export const Currency: Story<FktInputComponent> = {
	description: "Input with currency transformer that automatically formats values as currency (e.g., $1,234.56).",
	args: {
		label: 'Product Price',
		placeholder: '0.00',
		formatter: 'currency'
	}
};

export const Percent: Story<FktInputComponent> = {
	description: "Input with percentage transformer that automatically formats values as percentages (e.g., 45.5%).",
	args: {
		label: 'Completion Rate',
		placeholder: 'Enter percentage',
		formatter: 'percent'
	}
};

export const Hour: Story<FktInputComponent> = {
	description: "Input with hour transformer that formats time values as duration (e.g., 8h 30m).",
	args: {
		label: 'Work Duration',
		placeholder: 'Enter time duration',
		formatter: 'hour'
	}
};

export default meta;
