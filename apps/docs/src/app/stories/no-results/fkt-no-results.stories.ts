import { FktNoResultsComponent } from 'frakton-ng/no-results';
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
import documentation from './fkt-no-results.docs.md' with { loader: 'text' };
import { buttonActionSchema } from '@/static/schemas/button-action.schema';
import { DesignToken } from '@/models/design-token';
import designTokens from './fkt-no-results-design-tokens.json';

const meta: Meta = {
    title: "Components/Feedback/No Results",
    description: "The FktNoResults component provides a consistent and configurable way to display empty states when no data is available. It supports custom icons, descriptions, and action buttons to guide users on what to do next.",
    component: FktNoResultsComponent,
    designTokens: designTokens as DesignToken[],
    documentation,
    argTypes: {
        noResults: {
            control: 'object',
            schema: {
                label: "text",
                icon: {
                    type: "object",
                    schema: {
                        name: 'icon',
                        size: "text"
                    }
                },
                description: "text",
                action: {
                    type: 'object',
                    schema: buttonActionSchema
                }
            },
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

export const SimpleNoResults: Story<FktNoResultsComponent> = {
    description: "Basic no results display with just a label, perfect for minimal empty states.",
    args: {
        noResults: {
            label: 'No results found'
        },
        borderless: false as any
    }
};

export const WithIconAndDescription: Story<FktNoResultsComponent> = {
    description: "No results display with an icon and descriptive text for better user understanding.",
    args: {
        noResults: {
            label: 'No products available',
            description: 'We couldn\'t find any products matching your criteria.',
            icon: {name: 'shopping-bag', size: '96px'}
        },
        borderless: false as any
    }
};

export const WithActionButton: Story<FktNoResultsComponent> = {
    description: "Complete no results state with an action button to guide users on next steps.",
    args: {
        noResults: {
            label: 'No tasks assigned',
            description: 'You don\'t have any tasks assigned yet.',
            icon: {name: 'clipboard-document-list'},
            action: {
                text: 'Create Task',
                theme: 'raised',
                identifier: 'create-task',
                click: () => {}
            }
        },
        borderless: false as any
    }
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
