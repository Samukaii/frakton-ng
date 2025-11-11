import { FktNoResultsComponent, FktNoResults } from 'frakton-ng/no-results';
import {
	CompactExampleComponent,
	DataTableExampleComponent,
	FileUploadExampleComponent,
	SearchResultsExampleComponent,
	SimpleExampleComponent,
	WithActionExampleComponent,
	WithIconAndDescriptionExampleComponent
} from './examples';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-no-results.docs.md' with { loader: "text" };

const meta: Meta = {
	title: "Components/Feedback/No Results",
    description: "The FktNoResults component provides a consistent and configurable way to display empty states when no data is available. It supports custom icons, descriptions, and action buttons to guide users on what to do next.",
	component: FktNoResultsComponent,
	documentation,
	argTypes: {
		noResults: {
			control: 'object',
			category: "Attributes",
			type: 'FktNoResults',
			import: "import {FktNoResults} from 'frakton-ng/no-results'",
			required: true,
			description: 'Configuration object for the no results display'
		},
		borderless: {
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: 'false',
			description: 'Whether to display the component without a border'
		}
	}
}

export const SimpleNoResults: Story<SimpleExampleComponent> = {
	component: SimpleExampleComponent,
	description: "Basic no results display with just a label, perfect for minimal empty states.",
	args: {
		noResults: {
			label: 'No results found'
		},
		borderless: false
	}
};

export const WithIconAndDescription: Story<WithIconAndDescriptionExampleComponent> = {
	component: WithIconAndDescriptionExampleComponent,
	description: "No results display with an icon and descriptive text for better user understanding.",
	args: {}
};

export const WithActionButton: Story<WithActionExampleComponent> = {
	component: WithActionExampleComponent,
	description: "Complete no results state with an action button to guide users on next steps.",
	args: {}
};

export const SearchResults: Story<SearchResultsExampleComponent> = {
	component: SearchResultsExampleComponent,
	description: "No results state specifically designed for search scenarios with clear search action.",
	args: {}
};

export const DataTableEmptyState: Story<DataTableExampleComponent> = {
	component: DataTableExampleComponent,
	description: "No results configuration optimized for data tables with add record functionality.",
	args: {}
};

export const FileUploadEmptyState: Story<FileUploadExampleComponent> = {
	component: FileUploadExampleComponent,
	description: "No results state for file management interfaces with upload functionality.",
	args: {}
};

export const CompactSize: Story<CompactExampleComponent> = {
	component: CompactExampleComponent,
	description: "Compact no results display for smaller containers or inline usage.",
	args: {}
};

export default meta;
