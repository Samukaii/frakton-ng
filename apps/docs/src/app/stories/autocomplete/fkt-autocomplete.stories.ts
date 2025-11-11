import { FktAutocompleteComponent } from 'frakton-ng/autocomplete';
import {
	FktAutocompleteBasicExampleComponent,
	FktAutocompleteAutoCreationExampleComponent,
	FktAutocompleteCustomStylingExampleComponent,
	FktAutocompleteEventsExampleComponent,
	FktAutocompleteLoadingStatesExampleComponent
} from './examples';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-autocomplete.docs.md' with { loader: "text" };
import designTokens from './fkt-autocomplete-design-tokens.json';

const meta: Meta = {
	title: "Components/Form/Autocomplete",
	component: FktAutocompleteComponent,
    designTokens: designTokens as any,
    description: "A powerful and flexible autocomplete input component with dropdown options, search functionality, and support for custom actions. Built with Angular signals and reactive patterns, it offers seamless integration with forms and dynamic data sources.",
	documentation,
	argTypes: {
		value: {
			control: "text",
			category: "Attributes",
			type: "ModelSignal<string | number | null>",
			defaultValue: "''",
			description: "The field value, controlled via ModelSignal. Supports string, number, or null. Enables reactive two-way data binding."
		},
		touched: {
			control: 'boolean',
			category: "Attributes",
			type: "ModelSignal<boolean>",
			defaultValue: "false",
			description: "Indicates whether the field has been touched by the user. Useful for conditional validation or error display."
		},
		disabled: {
			control: 'boolean',
			category: "Attributes",
			type: "boolean",
			defaultValue: "false",
			description: "Disables the input field. Can be controlled externally or by Angular."
		},
		invalid: {
			control: 'boolean',
			category: "Attributes",
			type: "boolean",
			defaultValue: "false",
			description: "Sets the field as invalid. Can be used for error styling or custom validation handling."
		},
		errors: {
			control: 'object',
			category: "Attributes",
			type: "readonly WithOptionalField<ValidationError>[]",
			import: "import { ValidationError, WithOptionalField } from '@angular/forms/signals'",
			defaultValue: "[]",
			description: "Array of validation errors for the field. Used to display validation messages or custom error handling."
		},
		options: {
			control: "object",
			category: "Attributes",
			type: "FktAutocompleteOption[]",
			import: "import {FktAutocompleteOption} from 'frakton-ng/autocomplete'",
			defaultValue: "[]",
			description: "Array of options to display in the dropdown. Each option must have a value and label property."
		},
		actions: {
			control: "object",
			category: "Attributes",
			type: "FktButtonAction[]",
			import: "import {FktButtonAction} from 'frakton-ng/button'",
			defaultValue: "[]",
			description: "Array of action buttons to display with each option. Useful for edit, delete, favorite operations."
		},
		allowAddOption: {
			control: 'boolean',
			category: "Attributes",
			type: "boolean",
			defaultValue: "false",
			description: "Allow users to create new options by typing text not in the options list. Perfect for tag systems."
		},
		noResults: {
			control: 'object',
			category: "Attributes",
			type: "FktNoResults",
			import: "import {FktNoResults} from 'frakton-ng/no-results'",
			defaultValue: "{ label: 'Sem resultados' }",
			description: "Configuration for the message shown when no options match the search criteria."
		},
		addOptionLabel: {
			control: "text",
			category: "Attributes",
			type: "string",
			defaultValue: "undefined",
			description: "Customizes the label displayed when the user types a value not present in the options list. Use '{{inputValue}}' as a placeholder."
		},
		loading: {
			control: 'boolean',
			category: "Attributes",
			type: "boolean",
			defaultValue: "false",
			description: "Show loading spinner in the dropdown while fetching data from API or performing search operations."
		},
		label: {
			control: "text",
			category: "Attributes",
			type: "string",
			defaultValue: "''",
			description: "Label text displayed above the input field for accessibility and user guidance."
		},
		placeholder: {
			control: "text",
			category: "Attributes",
			type: "string",
			defaultValue: "''",
			description: "Placeholder text shown in the input field when no value is selected."
		},
		search: {
			control: 'text',
			category: "Events",
			type: "EventEmitter<string>",
			description: "Event emitted when user types in the input field. Use for real-time search API calls."
		},
		addOption: {
			control: 'text',
			category: "Events",
			type: "EventEmitter<FktAutoCompleteAddOptionEvent>",
			import: "import { FktAutoCompleteAddOptionEvent } from 'frakton-ng/autocomplete'",
			description: "Triggered when the user selects a custom option they've typed. Only fires if 'allowAddOption' is enabled."
		}
	}
}

export const Basic: Story<FktAutocompleteBasicExampleComponent> = {
	component: FktAutocompleteBasicExampleComponent,
	description: "Basic autocomplete implementation with predefined options. Perfect starting point showing essential functionality with search and selection capabilities.",
	args: {
		label: "Select a fruit",
		placeholder: "Start typing...",
		options: [
			{ value: "apple", label: "Apple" },
			{ value: "banana", label: "Banana" },
			{ value: "cherry", label: "Cherry" },
			{ value: "grape", label: "Grape" },
			{ value: "orange", label: "Orange" },
			{ value: "strawberry", label: "Strawberry" },
		]
	}
};

export const AutoCreation: Story<FktAutocompleteAutoCreationExampleComponent> = {
	component: FktAutocompleteAutoCreationExampleComponent,
	description: "Auto-creation mode allows users to create new options by typing values not in the predefined list. Ideal for tag systems, category management, and dynamic data entry.",
	args: {
		label: "Country (create new if not found)",
		placeholder: "Type a country name",
		allowAddOption: true,
		addOptionLabel: 'Add country "{{inputValue}}"',
		options: [
			{ value: "us", label: "United States" },
			{ value: "ca", label: "Canada" },
			{ value: "uk", label: "United Kingdom" },
			{ value: "de", label: "Germany" },
			{ value: "fr", label: "France" },
			{ value: "es", label: "Spain" },
			{ value: "it", label: "Italy" },
			{ value: "jp", label: "Japan" },
			{ value: "au", label: "Australia" },
			{ value: "br", label: "Brazil" },
		]
	}
};

export const CustomStyling: Story<FktAutocompleteCustomStylingExampleComponent> = {
	component: FktAutocompleteCustomStylingExampleComponent,
	description: "Custom styling and disabled state demonstration. Shows how to apply visual customization and handle disabled states with interactive controls.",
	args: {
		label: "Styled Autocomplete",
		placeholder: "This field can be disabled",
		options: [
			{ value: "apple", label: "Apple" },
			{ value: "banana", label: "Banana" },
			{ value: "cherry", label: "Cherry" },
			{ value: "grape", label: "Grape" },
			{ value: "orange", label: "Orange" },
			{ value: "strawberry", label: "Strawberry" },
		]
	}
};

export const Events: Story<FktAutocompleteEventsExampleComponent> = {
	component: FktAutocompleteEventsExampleComponent,
	description: "Interactive functionality with event handling and custom actions. Demonstrates search events, value changes, and action button interactions with real-time event logging.",
	args: {
		label: "Manage tags",
		placeholder: "Select or search for tags",
		options: [
			{ value: "frontend", label: "Frontend" },
			{ value: "backend", label: "Backend" },
			{ value: "react", label: "React" },
			{ value: "angular", label: "Angular" },
			{ value: "vue", label: "Vue" },
			{ value: "javascript", label: "JavaScript" },
			{ value: "typescript", label: "TypeScript" },
			{ value: "nodejs", label: "Node.js" },
			{ value: "python", label: "Python" },
			{ value: "java", label: "Java" },
		]
	} as any
};

export const LoadingStates: Story<FktAutocompleteLoadingStatesExampleComponent> = {
	component: FktAutocompleteLoadingStatesExampleComponent,
	description: "Loading states and no results handling with simulated API calls. Perfect for async data fetching scenarios with realistic loading indicators and empty state messaging.",
	args: {
		label: "Search with Loading States",
		placeholder: "Type to search",
		loading: false,
		noResults: {
			label: "No users found. Try a different search term."
		}
	}
};

export default meta;
