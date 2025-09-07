import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
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

const meta: Meta<FktSelectComponent> = {
	title: 'Components/Form/Select',
	component: FktSelectComponent,
	decorators: [
		moduleMetadata({
			imports: [
				DefaultExampleComponent,
				PreselectedExampleComponent,
				LargeListExampleComponent,
				LoadingExampleComponent,
				EmptyStateExampleComponent,
				ValidationExampleComponent,
				DisabledExampleComponent,
				AsyncLoadingExampleComponent
			]
		})
	],
	argTypes: {
		control: {
			control: false,
			type: {
				name: "object",
				value: {},
				required: true
			},
			table: {
				category: "Attributes",
				type: {
					summary: 'SignalFormControl<T>',
					detail: "import {SignalFormControl} from 'frakton-ng/forms'"
				},
			},
			description: 'The form control that manages the select state and validation'
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
					summary: "undefined"
				}
			},
			description: 'Label text displayed above the select field'
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
					summary: "undefined"
				}
			},
			description: 'Placeholder text displayed inside the select field'
		},
		options: {
			control: "object",
			type: {
				name: "array",
				value: {
					name: 'object',
					value: {}
				},
				required: true
			},
			table: {
				category: "Attributes",
				type: {
					summary: "FktSelectOption[]",
					detail: "import {FktSelectOption} from 'frakton-ng/select'"
				},
			},
			description: 'Array of options to display in the dropdown'
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
			description: 'Show loading state in the dropdown'
		},
		noResults: {
			control: 'object',
			table: {
				category: "Attributes",
				type: {
					summary: "FktNoResults",
					detail: "import {FktNoResults} from 'frakton-ng/no-results'"
				},
				defaultValue: {
					summary: "{ label: 'Sem resultados' }"
				}
			},
			description: 'Configuration for message when no options are available'
		},
	}
};

type Story = StoryObj<FktSelectComponent>;

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

export const BasicSelect: Story = {
	render: (args) => ({
		template: '<select-default-example [label]="label" [placeholder]="placeholder" [options]="options" [loading]="loading" [noResults]="noResults"></select-default-example>',
		props: {
			...args
		}
	}),
	args: {
		label: "Select Option",
		placeholder: "Choose an option",
		options: basicOptions,
		loading: false
	},
	parameters: {
		docs: {
			description: {
				story: 'A basic select dropdown with a few options. Click to open the dropdown and select an option.'
			}
		}
	}
};

export const PreSelectedOption: Story = {
	render: (args) => ({
		template: '<select-preselected-example [label]="label" [placeholder]="placeholder" [options]="options"></select-preselected-example>',
		props: {
			...args
		}
	}),
	args: {
		label: "Country",
		placeholder: "Select your country",
		options: countryOptions,
	},
	parameters: {
		docs: {
			description: {
				story: 'A select with a pre-selected value. The control is initialized with "us" showing "United States" as selected.'
			}
		}
	}
};

export const LargeOptionsList: Story = {
	render: (args) => ({
		template: '<select-large-list-example [label]="label" [placeholder]="placeholder" [options]="options"></select-large-list-example>',
		props: {
			...args
		}
	}),
	args: {
		label: "Select Item",
		placeholder: "Select from many options",
		options: largeOptionList,
	},
	parameters: {
		docs: {
			description: {
				story: 'A select with many options showing the scrollable dropdown behavior when there are too many options to fit.'
			}
		}
	}
};

export const LoadingState: Story = {
	render: (args) => ({
		template: '<select-loading-example [label]="label" [placeholder]="placeholder" [options]="options" [loading]="loading"></select-loading-example>',
		props: {
			...args
		}
	}),
	args: {
		label: "Loading Options",
		placeholder: "Loading...",
		options: [],
		loading: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'A select showing loading state. This is useful when options are being fetched from an API.'
			}
		}
	}
};

export const EmptyState: Story = {
	render: (args) => ({
		template: '<select-empty-state-example [label]="label" [placeholder]="placeholder" [options]="options" [loading]="loading" [noResults]="noResults"></select-empty-state-example>',
		props: {
			...args
		}
	}),
	args: {
		label: "No Options Available",
		placeholder: "Select an option",
		options: [],
		loading: false,
		noResults: {
			label: "No options available at this time",
		}
	},
	parameters: {
		docs: {
			description: {
				story: 'A select with no options showing a custom "no results" message.'
			}
		}
	}
};

export const WithValidation: Story = {
	render: (args) => ({
		template: '<select-validation-example [label]="label" [placeholder]="placeholder" [options]="options"></select-validation-example>',
		props: {
			...args
		}
	}),
	args: {
		label: "Priority (Required)",
		placeholder: "Select priority",
		options: [
			{value: "low", label: "Low Priority"},
			{value: "medium", label: "Medium Priority"},
			{value: "high", label: "High Priority"},
			{value: "urgent", label: "Urgent"},
		],
	},
	parameters: {
		docs: {
			description: {
				story: 'A select with required validation. The field shows error state when no option is selected.'
			}
		}
	}
};

export const DisabledState: Story = {
	render: (args) => ({
		template: '<select-disabled-example [label]="label" [placeholder]="placeholder" [options]="options"></select-disabled-example>',
		props: {
			...args
		}
	}),
	args: {
		label: "Disabled Select",
		placeholder: "Cannot select",
		options: basicOptions,
	},
	parameters: {
		docs: {
			description: {
				story: 'A select in disabled state. The dropdown cannot be opened and the field appears with reduced opacity.'
			}
		}
	}
};

export const AsyncLoading: Story = {
	render: (args) => ({
		template: '<select-async-loading-example [label]="label" [placeholder]="placeholder"></select-async-loading-example>',
		props: {
			...args
		}
	}),
	args: {
		label: "Async Loaded Users",
		placeholder: "Select a user",
	},
	parameters: {
		docs: {
			description: {
				story: 'A select that loads options asynchronously. Options are fetched after a simulated API delay.'
			}
		}
	}
};

export default meta;
