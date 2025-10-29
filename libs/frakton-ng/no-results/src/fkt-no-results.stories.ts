import { Meta, StoryObj } from '@storybook/angular';
import { FktNoResults, FktNoResultsComponent } from 'frakton-ng/no-results';
import {
	CompactExampleComponent,
	DataTableExampleComponent,
	FileUploadExampleComponent,
	SearchResultsExampleComponent,
	SimpleExampleComponent,
	WithActionExampleComponent,
	WithIconAndDescriptionExampleComponent
} from './examples';
import { fktStoryRenderer } from '../../.storybook/decorators/fkt-story-renderer';
import { renderComponent } from '../../.storybook/decorators/render-component';
import designTokens from './fkt-no-results-design-tokens.json';


type Story = StoryObj<FktNoResultsComponent>;


const meta: Meta<FktNoResultsComponent> = {
	title: 'Components/Feedback/No results',
	component: FktNoResultsComponent,
	decorators: [
		fktStoryRenderer({designTokens}),
	],
	argTypes: {
		noResults: {
			control: 'object',
			description: "Configuration object for the no results display",
			type: {
				name: "object",
				value: {},
				required: true
			},
			table: {
				category: 'Attributes',
				type: {
					summary: 'FktNoResults',
					detail: "import {FktNoResults} from 'frakton-ng/no-results'",
				},
			}
		},
		borderless: {
			control: "boolean",
			description: "Whether to display the component without a border",
			table: {
				category: 'Attributes',
				type: {
					summary: 'boolean',
				},
				defaultValue: {
					summary: '"false"'
				}
			}
		}
	}
};


export const SimpleNoResults: Story = {
	render: renderComponent(SimpleExampleComponent),
	parameters: {
		docs: {
			description: {
				story: "Basic no results display with just a label, perfect for minimal empty states."
			}
		}
	},
	args: {
		noResults: {
			label: 'No results found'
		},
		borderless: false
	}
};


export const WithIconAndDescription: Story = {
	render: renderComponent(WithIconAndDescriptionExampleComponent),
	parameters: {
		docs: {
			description: {
				story: "No results display with an icon and descriptive text for better user understanding."
			}
		}
	},
};


export const WithActionButton: Story = {
	render: renderComponent(WithActionExampleComponent),
	parameters: {
		docs: {
			description: {
				story: "Complete no results state with an action button to guide users on next steps."
			}
		}
	},
};


export const SearchResults: Story = {
	render: renderComponent(SearchResultsExampleComponent),
	parameters: {
		docs: {
			description: {
				story: "No results state specifically designed for search scenarios with clear search action."
			}
		}
	},
};


export const DataTableEmptyState: Story = {
	render: renderComponent(DataTableExampleComponent),
	parameters: {
		docs: {
			description: {
				story: "No results configuration optimized for data tables with add record functionality."
			}
		}
	},
};


export const FileUploadEmptyState: Story = {
	render: renderComponent(FileUploadExampleComponent),
	parameters: {
		docs: {
			description: {
				story: "No results state for file management interfaces with upload functionality."
			}
		}
	},
};


export const CompactSize: Story = {
	render: renderComponent(CompactExampleComponent),
	parameters: {
		docs: {
			description: {
				story: "Compact no results display for smaller containers or inline usage."
			}
		}
	},
};

export default meta;
