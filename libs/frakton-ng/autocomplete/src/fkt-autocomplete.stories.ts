import { Meta, StoryObj } from '@storybook/angular';
import {
	FktAutocompleteAutoCreationExampleComponent,
	FktAutocompleteBasicExampleComponent,
	FktAutocompleteCustomStylingExampleComponent,
	FktAutocompleteEventsExampleComponent,
	FktAutocompleteLoadingStatesExampleComponent
} from './examples';
import { FktAutocompleteComponent } from './fkt-autocomplete.component';
import { customDocsControl } from '../../.storybook/decorators/custom-docs-control';
import { renderComponent } from '../../.storybook/decorators/render-component';
import designTokens from './fkt-autocomplete-design-tokens.json';

const meta: Meta<FktAutocompleteComponent> = {
	title: 'Components/Form/Autocomplete',
	component: FktAutocompleteComponent,
	decorators: [
		customDocsControl({
			designTokens: designTokens as any
		}),
	],
	argTypes: {
		value: {
			control: "text",
			description: "The field value, controlled via ModelSignal. Supports string, number, or null. Enables reactive two-way data binding.",
			table: {
				category: "Attributes",
				type: {
					summary: "ModelSignal<string | number | null>",
				},
				defaultValue: {
					summary: "''"
				}
			}
		},
		touched: {
			control: 'boolean',
			description: "Indicates whether the field has been touched by the user. Useful for conditional validation or error display.",
			table: {
				category: "Attributes",
				type: {
					summary: "ModelSignal<boolean>",
				},
				defaultValue: {
					summary: "false"
				}
			}
		},
		disabled: {
			control: 'boolean',
			description: "Disables the input field. Can be controlled externally or by Angular. Default is false.",
			table: {
				category: "Attributes",
				type: {
					summary: "boolean"
				},
				defaultValue: {
					summary: "false"
				}
			}
		},
		invalid: {
			control: 'boolean',
			description: "Sets the field as invalid. Can be used for error styling or custom validation handling.",
			table: {
				category: "Attributes",
				type: {
					summary: "boolean"
				},
				defaultValue: {
					summary: "false"
				}
			}
		},
		errors: {
			control: 'object',
			description: "Array of validation errors for the field. Each error follows the Angular signal format (ValidationError). Used to display validation messages or custom error handling. Should be readonly.",
			table: {
				category: "Attributes",
				type: {
					summary: "readonly WithOptionalField<ValidationError>[]",
					detail: "import { ValidationError, WithOptionalField } from '@angular/forms/signals'"
				},
				defaultValue: {
					summary: "[]"
				}
			}
		},
		options: {
			control: "object",
			description: 'Array of options to display in the dropdown. Each option must have a value and label property.',
			table: {
				category: "Attributes",
				type: {
					summary: "FktAutocompleteOption[]",
					detail: 'import {FktAutocompleteOption} from "frakton-ng/autocomplete"'
				},
				defaultValue: {
					summary: "[]"
				}
			}
		},
		actions: {
			control: "object",
			description: 'Array of action buttons to display with each option. Useful for edit, delete, favorite operations.',
			table: {
				category: "Attributes",
				type: {
					summary: "FktButtonAction[]",
					detail: 'import {FktButtonAction} from "frakton-ng/button"'
				},
				defaultValue: {
					summary: "[]"
				}
			}
		},
		allowAddOption: {
			control: 'boolean',
			description: 'Allow users to create new options by typing text not in the options list. Perfect for tag systems.',
			table: {
				category: "Attributes",
				type: {
					summary: "boolean"
				},
				defaultValue: {
					summary: "false"
				}
			}
		},
		noResults: {
			control: 'object',
			description: 'Configuration for the message shown when no options match the search criteria.',
			table: {
				category: "Attributes",
				type: {
					summary: "FktNoResults",
					detail: 'import {FktNoResults} from "frakton-ng/no-results"'
				},
				defaultValue: {
					summary: "{ label: 'Sem resultados' }"
				}
			}
		},
		addOptionLabel: {
			description: "Customizes the label displayed when the user types a value not present in the options list " +
				"(e.g., 'Add country \"{{inputValue}}\"'). Use '{{inputValue}}' as a placeholder for the user's input. " +
				"This label only appears when 'allowAddOption' is enabled. Enables localization and dynamic messaging " +
				"for custom option creation.",
			control: "text",
			table: {
				category: "Attributes",
				type: {
					summary: "string",
				},
				defaultValue: {
					summary: "undefined"
				}
			}
		},
		loading: {
			control: 'boolean',
			description: 'Show loading spinner in the dropdown while fetching data from API or performing search operations.',
			table: {
				category: "Attributes",
				type: {
					summary: "boolean"
				},
				defaultValue: {
					summary: "false"
				}
			}
		},
		label: {
			control: "text",
			description: 'Label text displayed above the input field for accessibility and user guidance.',
			table: {
				category: "Attributes",
				type: {
					summary: "string"
				},
				defaultValue: {
					summary: "''"
				}
			}
		},
		placeholder: {
			control: "text",
			description: 'Placeholder text shown in the input field when no value is selected.',
			table: {
				category: "Attributes",
				type: {
					summary: "string"
				},
				defaultValue: {
					summary: "''"
				}
			}
		},
		search: {
			table: {
				category: "Events",
				type: {
					summary: "EventEmitter<string>"
				}
			},
			description: 'Event emitted when user types in the input field. Use for real-time search API calls.'
		},
		addOption: {
			description:
				"Triggered when the user selects a custom option they've typed (not present in the options list). " +
				"This event only fires if 'allowAddOption' is enabled. Useful for implementing features like dynamic option creation, " +
				"on-the-fly item registration, or triggering async backend calls for new entries. Receives an event object with the new input value.",
			table: {
				category: "Events",
				type: {
					summary: "EventEmitter<FktAutoCompleteAddOptionEvent>",
					detail: "import { FktAutoCompleteAddOptionEvent } from 'frakton-ng/autocomplete'"
				}
			},
		},
	}
};

export const Basic: StoryObj = {
	render: renderComponent(FktAutocompleteBasicExampleComponent),
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
	},
	parameters: {
		docs: {
			description: {
				story: 'Basic autocomplete implementation with predefined options. Perfect starting point showing essential functionality with search and selection capabilities.'
			}
		}
	}
};

export const AutoCreation: StoryObj = {
	render: renderComponent(FktAutocompleteAutoCreationExampleComponent),
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
	},
	parameters: {
		docs: {
			description: {
				story: 'Auto-creation mode allows users to create new options by typing values not in the predefined list. Ideal for tag systems, category management, and dynamic data entry.'
			}
		}
	}
};

export const CustomStyling: StoryObj = {
	render: renderComponent(FktAutocompleteCustomStylingExampleComponent),
	args: {
		label: "Styled Autocomplete",
		placeholder: "This field can be disabled",
		disabled: false,
		options: [
			{ value: "apple", label: "Apple" },
			{ value: "banana", label: "Banana" },
			{ value: "cherry", label: "Cherry" },
			{ value: "grape", label: "Grape" },
			{ value: "orange", label: "Orange" },
			{ value: "strawberry", label: "Strawberry" },
		]
	},
	parameters: {
		docs: {
			description: {
				story: 'Custom styling and disabled state demonstration. Shows how to apply visual customization and handle disabled states with interactive controls.'
			}
		}
	}
};

export const Events: StoryObj = {
	render: renderComponent(FktAutocompleteEventsExampleComponent),
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
		],
		actions: [
			{
				icon: "pencil",
				color: 'primary',
				theme: 'basic',
				identifier: 'edit'
			},
			{
				icon: "star",
				color: 'accent',
				theme: 'basic',
				identifier: 'favorite'
			},
			{
				icon: "trash",
				color: 'danger',
				theme: 'basic',
				identifier: 'delete'
			}
		]
	},
	parameters: {
		docs: {
			description: {
				story: 'Interactive functionality with event handling and custom actions. Demonstrates search events, value changes, and action button interactions with real-time event logging.'
			}
		}
	}
};

export const LoadingStates: StoryObj = {
	render: renderComponent(FktAutocompleteLoadingStatesExampleComponent),
	args: {
		label: "Search with Loading States",
		placeholder: "Type to search",
		loading: false,
		options: [
			{ value: "user1", label: "Alice Johnson" },
			{ value: "user2", label: "Bob Smith" },
			{ value: "user3", label: "Carol Davis" },
			{ value: "user4", label: "David Wilson" },
			{ value: "user5", label: "Emma Brown" },
			{ value: "user6", label: "Frank Miller" },
			{ value: "user7", label: "Grace Taylor" },
			{ value: "user8", label: "Henry Anderson" },
		],
		noResults: {
			label: "No users found. Try a different search term."
		}
	},
	parameters: {
		docs: {
			description: {
				story: 'Loading states and no results handling with simulated API calls. Perfect for async data fetching scenarios with realistic loading indicators and empty state messaging.'
			}
		}
	}
};

export default meta;
