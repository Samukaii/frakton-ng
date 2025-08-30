import type { Meta, StoryObj } from '@storybook/angular';
import { FktAutocompleteComponent } from './fkt-autocomplete.component';
import { SignalFormControl } from '../../form/signal-form-control';

const meta: Meta<FktAutocompleteComponent> = {
	title: 'Components/Form/Autocomplete',
	component: FktAutocompleteComponent,
	argTypes: {
		control: {
			control: false,
			table: {
				category: "Attributes",
				type: {
					summary: 'SignalFormControl<any>',
				},
				defaultValue: {
					summary: "Required - SignalFormControl instance"
				}
			},
			description: 'The form control that manages the component state and validation'
		},
		options: {
			control: "object",
			type: {
				name: "object",
				value: {}
			},
			table: {
				category: "Attributes",
				type: {
					summary: "FktAutocompleteOption[]"
				},
				defaultValue: {
					summary: "[]"
				}
			},
			description: 'Array of options to display in the dropdown'
		},
		actions: {
			control: "object",
			type: {
				name: "object",
				value: {}
			},
			table: {
				category: "Attributes",
				type: {
					summary: "FktButtonAction[]"
				},
				defaultValue: {
					summary: "[]"
				}
			},
			description: 'Array of action buttons to display with each option'
		},
		enableAutoCreation: {
			control: 'boolean',
			table: {
				category: "Attributes",
				type: {
					summary: "boolean"
				},
				defaultValue: {
					summary: "false"
				}
			},
			description: 'Allow users to create new options by typing text not in the options list'
		},
		noResults: {
			control: 'object',
			table: {
				category: "Attributes",
				type: {
					summary: "FktNoResults"
				},
				defaultValue: {
					summary: "{ label: 'Sem resultados' }"
				}
			},
			description: 'Configuration for the message shown when no options match'
		},
		loading: {
			control: 'boolean',
			table: {
				category: "Attributes",
				type: {
					summary: "boolean"
				},
				defaultValue: {
					summary: "false"
				}
			},
			description: 'Show loading spinner in the dropdown'
		},
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
			description: 'Label text displayed above the input'
		},
		placeholder: {
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
			description: 'Placeholder text for the input field'
		},
		search: {
			table: {
				category: "Events",
				type: {
					summary: "EventEmitter<string>"
				}
			},
			description: 'Event emitted when user types in the input'
		}
	}
};

type Story = StoryObj<FktAutocompleteComponent>;

// Sample data for different use cases
const basicOptions = [
	{ value: "apple", label: "Apple" },
	{ value: "banana", label: "Banana" },
	{ value: "cherry", label: "Cherry" },
	{ value: "grape", label: "Grape" },
	{ value: "orange", label: "Orange" },
	{ value: "strawberry", label: "Strawberry" },
];

const countryOptions = [
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
];

const tagOptions = [
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
];

// Basic autocomplete example
export const Default: Story = {
	args: {
		control: new SignalFormControl(''),
		label: "Select a fruit",
		placeholder: "Start typing...",
		options: basicOptions,
	},
	parameters: {
		docs: {
			description: {
				story: 'A basic autocomplete component with simple options. Click on the input field to see all options or start typing to filter them.'
			}
		}
	}
};

// Autocomplete with a pre-selected value
export const WithPreselectedValue: Story = {
	args: {
		control: new SignalFormControl('apple'),
		label: "Favorite fruit",
		placeholder: "Choose your favorite fruit",
		options: basicOptions,
	},
	parameters: {
		docs: {
			description: {
				story: 'An autocomplete component with a pre-selected value. The control is initialized with "apple" as the default value.'
			}
		}
	}
};

// Autocomplete with custom actions on each option
export const WithActions: Story = {
	args: {
		control: new SignalFormControl(''),
		label: "Manage tags",
		placeholder: "Select or search for tags",
		options: tagOptions,
		actions: [
			{
				icon: "pencil",
				color: 'primary',
				theme: 'basic',
				identifier: 'edit'
			},
			{
				icon: "trash",
				color: 'red',
				theme: 'basic',
				identifier: 'delete'
			}
		]
	},
	parameters: {
		docs: {
			description: {
				story: 'An autocomplete with action buttons for each option. In this example, each tag has edit and delete actions available.'
			}
		}
	}
};

// Autocomplete with auto-creation enabled
export const WithAutoCreation: Story = {
	args: {
		control: new SignalFormControl(''),
		label: "Country (create new if not found)",
		placeholder: "Type a country name",
		options: countryOptions,
		enableAutoCreation: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'An autocomplete that allows users to create new options. If you type something that doesn\'t exist in the list, you can select it as a new option.'
			}
		}
	}
};

// Autocomplete with loading state
export const WithLoadingState: Story = {
	args: {
		control: new SignalFormControl(''),
		label: "Search (loading...)",
		placeholder: "Type to search",
		options: [],
		loading: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'An autocomplete showing a loading state. This is useful when options are being fetched from an API.'
			}
		}
	}
};

// Autocomplete with no results
export const WithNoResults: Story = {
	args: {
		control: new SignalFormControl(''),
		label: "Search with no matches",
		placeholder: "Try searching for something",
		options: [],
		loading: false,
		noResults: {
			label: "No matching results found. Try a different search term."
		}
	},
	parameters: {
		docs: {
			description: {
				story: 'An autocomplete with a custom "no results" message. This appears when the options array is empty and not loading.'
			}
		}
	}
};

// Autocomplete with all features combined
export const Complete: Story = {
	args: {
		control: new SignalFormControl(''),
		label: "Full-featured autocomplete",
		placeholder: "Search skills or add new ones",
		options: tagOptions,
		enableAutoCreation: true,
		actions: [
			{
				icon: "star",
				color: 'yellow',
				theme: 'basic',
				identifier: 'favorite'
			},
			{
				icon: "information-circle",
				color: 'primary',
				theme: 'basic',
				identifier: 'info'
			}
		],
		noResults: {
			label: "No skills found. Type to create a new one!"
		}
	},
	parameters: {
		docs: {
			description: {
				story: 'A complete example showcasing all autocomplete features: pre-defined options, auto-creation, custom actions, and custom no-results message.'
			}
		}
	}
};

// Disabled state
export const Disabled: Story = {
	args: {
		control: (() => {
			const control = new SignalFormControl('apple');
			control.disable();
			return control;
		})(),
		label: "Disabled autocomplete",
		placeholder: "This field is disabled",
		options: basicOptions,
	},
	parameters: {
		docs: {
			description: {
				story: 'An autocomplete component in disabled state. The dropdown won\'t open when clicked.'
			}
		}
	}
};

// Legacy export for backward compatibility
export const Preview: Story = Default;

export default meta;
