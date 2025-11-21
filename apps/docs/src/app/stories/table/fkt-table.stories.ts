import { FktTableComponent } from 'frakton-ng/table';
import { TableExamplesBasicTableComponent } from './examples';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-table.docs.md' with { loader: 'text' };
import designTokens from './fkt-table-design-tokens.json';
import { DesignToken } from '@/models/design-token';
import {
    TableExamplesWithPaginationComponent
} from '@/stories/table/examples/with-pagination/table-examples-with-pagination.component';

const meta: Meta = {
	title: "Components/Data Display/Table",
	component: FktTableComponent,
    description: "A powerful and flexible table component for displaying tabular data with dynamic columns, row actions, loading states, and customizable empty states. Built with Angular signals for optimal performance and provides extensive customization options for real-world data display scenarios.",
	documentation,
    designTokens: designTokens as DesignToken[],
	argTypes: {
		data: {
			control: 'object',
			category: "Attributes",
			type: 'T[]',
			required: true,
			description: 'Array of data items to display in the table. Each item must extend FktIdentifiable.'
		},
		columnsFn: {
			control: 'text',
			category: "Attributes",
			type: 'TableColumnFn<T>',
			import: "import {TableColumnFn} from 'frakton-ng/table'",
			required: true,
			description: 'Function that defines the columns for each data item. Returns an array of TableColumn configurations.'
		},
		classesFn: {
			control: 'text',
			category: "Attributes",
			type: 'TableClassesFn<T>',
			import: "import {TableClassesFn} from 'frakton-ng/table'",
			defaultValue: '() => ""',
			description: 'Optional function that returns CSS classes for each table row based on the data item.'
		},
		actionsFn: {
			control: 'text',
			category: "Attributes",
			type: 'TableActionFn<T>',
			import: "import {TableActionFn} from 'frakton-ng/table'",
			defaultValue: 'undefined',
			description: 'Optional function that returns an array of actions for each table row.'
		},
		mainAction: {
			control: 'object',
			category: "Attributes",
			type: 'FktButtonAction',
			import: "import {FktButtonAction} from 'frakton-ng/button'",
			defaultValue: 'undefined',
			description: 'Optional main action button displayed in the table header.'
		},
		loading: {
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: 'false',
			description: 'Whether the table is in a loading state. Shows a spinner when true.'
		},
		noHeaderWhenEmpty: {
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: 'false',
			description: 'Whether to hide the table header when there is no data.'
		},
		noResults: {
			control: 'object',
			category: "Attributes",
			type: 'FktNoResults',
			import: "import {FktNoResults} from 'frakton-ng/no-results'",
			defaultValue: '{ label: "Sem resultados" }',
			description: 'Configuration for the empty state display when no data is available.'
		}
	}
}

export const BasicTable: Story<TableExamplesBasicTableComponent> = {
	component: TableExamplesBasicTableComponent,
	description: "A simple table displaying user data with basic column configuration.",
	args: {
		loading: false,
		noHeaderWhenEmpty: false,
		noResults: {
			label: 'No data available',
			description: 'There are no records to display at this time.',
			icon: {name: 'document-text', size: '80px'}
		}
	}
};

export const WithPagination: Story<TableExamplesWithPaginationComponent> = {
    component: TableExamplesWithPaginationComponent,
    description: "A simple table displaying user data with basic column configuration.",
    args: {
        // loading: false,
        // noHeaderWhenEmpty: false,
        // noResults: {
        //     label: 'No data available',
        //     description: 'There are no records to display at this time.',
        //     icon: {name: 'document-text', size: '80px'}
        // }
    }
};

export default meta;
