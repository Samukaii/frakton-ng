import { FktSelectComponent } from 'frakton-ng/select';
import {
	AsyncLoadingExampleComponent,
	DefaultExampleComponent,
	DisabledExampleComponent,
	EmptyStateExampleComponent,
	LargeListExampleComponent,
	LoadingExampleComponent,
	PreselectedExampleComponent,
	ValidationExampleComponent
} from './examples';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-select.docs.md' with { loader: "text" };

import designTokens from './fkt-select-design-tokens.json';
import { DesignToken } from '@/models/design-token';

const meta: Meta = {
	title: "Components/Form/Select",
    description: "A dropdown selection component that provides a clean and accessible interface for choosing options. Built with Angular signals and reactive forms, it offers a styled alternative to native select elements with enhanced functionality and consistent design.",
	component: FktSelectComponent,
    designTokens: designTokens as DesignToken[],
    panelStyle: {
        outerWidth: '100%',
        fillContainer: true
    },
	documentation,
	argTypes: {
		label: {
			control: "text",
			category: "Attributes",
			type: "string",
			defaultValue: "undefined",
			description: 'Label text displayed above the select field'
		},
		placeholder: {
			control: "text",
			category: "Attributes",
			type: "string",
			defaultValue: "undefined",
			description: 'Placeholder text displayed inside the select field'
		},
		options: {
			control: "array",
            schema: {
                value: {
                    type: "text",
                },
                label: {
                    type: "text"
                }
            },
			category: "Attributes",
			type: "FktSelectOption[]",
			import: "import {FktSelectOption} from 'frakton-ng/select'",
			description: 'Array of options to display in the dropdown',
			required: true
		},
		loading: {
			control: 'boolean',
			category: "Attributes",
			type: "boolean",
			defaultValue: "false",
			description: 'Show loading state in the dropdown'
		},
		noResults: {
			control: 'object',
			category: "Attributes",
			type: "FktNoResults",
			import: "import {FktNoResults} from 'frakton-ng/no-results'",
			defaultValue: "{ label: 'Sem resultados' }",
			description: 'Configuration for message when no options are available'
		}
	}
}

const basicOptions = [
	{value: "option1", label: "Option 1"},
	{value: "option2", label: "Option 2"},
	{value: "option3", label: "Option 3"},
	{value: "option4", label: "Option 4"},
];

const countryOptions = [
	{value: "us", label: "United States"},
	{value: "ca", label: "Canada"},
	{value: "uk", label: "United Kingdom"},
	{value: "de", label: "Germany"},
	{value: "fr", label: "France"},
	{value: "es", label: "Spain"},
	{value: "it", label: "Italy"},
	{value: "jp", label: "Japan"},
];

const largeOptionList = Array.from({length: 50}, (_, i) => ({
	value: `item-${i + 1}`,
	label: `Item ${i + 1}`
}));

export const BasicSelect: Story<DefaultExampleComponent> = {
	component: DefaultExampleComponent,
	description: "A basic select dropdown with a few options. Click to open the dropdown and select an option.",
	args: {
		label: "Select Option",
		placeholder: "Choose an option",
		options: basicOptions,
		loading: false
	}
};

export const PreSelectedOption: Story<PreselectedExampleComponent> = {
	component: PreselectedExampleComponent,
	description: "A select with a pre-selected value. The control is initialized with a default selection showing the selected option.",
	args: {
		label: "Country",
		placeholder: "Select your country",
		options: countryOptions
	}
};

export const LargeOptionsList: Story<LargeListExampleComponent> = {
	component: LargeListExampleComponent,
	description: "A select with many options showing the scrollable dropdown behavior when there are too many options to fit.",
	args: {
		label: "Select Item",
		placeholder: "Select from many options",
		options: largeOptionList
	}
};

export const LoadingState: Story<LoadingExampleComponent> = {
	component: LoadingExampleComponent,
	description: "A select showing loading state. This is useful when options are being fetched from an API.",
	args: {
		label: "Loading Options",
		placeholder: "Loading...",
		options: [],
		loading: true
	}
};

export const EmptyState: Story<EmptyStateExampleComponent> = {
	component: EmptyStateExampleComponent,
	description: "A select with no options showing a custom 'no results' message.",
	args: {
		label: "No Options Available",
		placeholder: "Select an option",
		options: [],
		loading: false,
		noResults: {
			label: "No options available at this time"
		}
	}
};

export const WithValidation: Story<ValidationExampleComponent> = {
	component: ValidationExampleComponent,
	description: "A select with required validation. The field shows error state when no option is selected.",
	args: {
		label: "Priority (Required)",
		placeholder: "Select priority",
		options: [
			{value: "low", label: "Low Priority"},
			{value: "medium", label: "Medium Priority"},
			{value: "high", label: "High Priority"},
			{value: "urgent", label: "Urgent"},
		]
	}
};

export const DisabledState: Story<DisabledExampleComponent> = {
	component: DisabledExampleComponent,
	description: "A select in disabled state. The dropdown cannot be opened and the field appears with reduced opacity.",
	args: {
		label: "Disabled Select",
		placeholder: "Cannot select",
		options: basicOptions
	}
};

export const AsyncLoading: Story<AsyncLoadingExampleComponent> = {
	component: AsyncLoadingExampleComponent,
	description: "A select that loads options asynchronously. Options are fetched after a simulated API delay.",
	args: {
		label: "Async Loaded Users",
		placeholder: "Select a user"
	}
};

export default meta;
