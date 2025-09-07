import { argsToTemplate, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
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


type Story = StoryObj<FktNoResultsComponent>;


const meta: Meta<FktNoResultsComponent> = {
	title: 'Components/No results',
	component: FktNoResultsComponent,
	decorators: [
		moduleMetadata({
			imports: [
				SimpleExampleComponent,
				WithIconAndDescriptionExampleComponent,
				WithActionExampleComponent,
				SearchResultsExampleComponent,
				DataTableExampleComponent,
				FileUploadExampleComponent,
				CompactExampleComponent,
			],
		})
	],
	argTypes: {
		noResults: {
			control: 'object',
			table: {
				type: {
					summary: 'FktNoResults',
				}
			}
		}
	}
};


export const SimpleNoResults: Story = {
	parameters: {
		docs: {
			description: {
				story: "Basic no results display with just a label, perfect for minimal empty states."
			}
		}
	},
	render: (args) => ({
		template: `<simple-example ${argsToTemplate(args)}/>`
	})
};


export const WithIconAndDescription: Story = {
	parameters: {
		docs: {
			description: {
				story: "No results display with an icon and descriptive text for better user understanding."
			}
		}
	},
	render: (args) => ({
		template: `<with-icon-and-description-example ${argsToTemplate(args)}/>`
	})
};


export const WithActionButton: Story = {
	parameters: {
		docs: {
			description: {
				story: "Complete no results state with an action button to guide users on next steps."
			}
		}
	},
	render: (args) => ({
		template: `<with-action-example ${argsToTemplate(args)}/>`
	})
};


export const SearchResults: Story = {
	parameters: {
		docs: {
			description: {
				story: "No results state specifically designed for search scenarios with clear search action."
			}
		}
	},
	render: (args) => ({
		template: `<search-results-example ${argsToTemplate(args)}/>`
	})
};


export const DataTableEmptyState: Story = {
	parameters: {
		docs: {
			description: {
				story: "No results configuration optimized for data tables with add record functionality."
			}
		}
	},
	render: (args) => ({
		template: `<data-table-example ${argsToTemplate(args)}/>`
	})
};


export const FileUploadEmptyState: Story = {
	parameters: {
		docs: {
			description: {
				story: "No results state for file management interfaces with upload functionality."
			}
		}
	},
	render: (args) => ({
		template: `<file-upload-example ${argsToTemplate(args)}/>`
	})
};


export const CompactSize: Story = {
	parameters: {
		docs: {
			description: {
				story: "Compact no results display for smaller containers or inline usage."
			}
		}
	},
	render: (args) => ({
		template: `<compact-example ${argsToTemplate(args)}/>`
	})
};

export default meta;
