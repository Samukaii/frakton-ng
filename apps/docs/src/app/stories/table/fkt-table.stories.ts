import { FktTableComponent } from 'frakton-ng/table';
import {
	FktTableExamplesBasicTableComponent,
	FktTableExamplesCustomCellsComponent,
	FktTableExamplesEmptyStateComponent,
	FktTableExamplesInteractiveStatesComponent,
	FktTableExamplesLoadingStateComponent,
	FktTableExamplesProductTableComponent,
	FktTableExamplesTableWithActionsComponent,
	FktTableExamplesTaskTableComponent
} from './examples';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-table.docs.md' with { loader: "text" };

const meta: Meta = {
	title: "Components/Data Display/Table",
	component: FktTableComponent,
	documentation,
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

export const BasicTable: Story<FktTableExamplesBasicTableComponent> = {
	component: FktTableExamplesBasicTableComponent,
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

export const TableWithActions: Story<FktTableExamplesTableWithActionsComponent> = {
	component: FktTableExamplesTableWithActionsComponent,
	description: "Complete table with row actions, main header action, and conditional styling.",
	args: {
		loading: false,
		noHeaderWhenEmpty: false,
		noResults: {
			label: 'No users found',
			description: 'There are no users to display. Add a new user to get started.',
			icon: {name: 'user-group', size: '80px'}
		}
	}
};

export const LoadingState: Story<FktTableExamplesLoadingStateComponent> = {
	component: FktTableExamplesLoadingStateComponent,
	description: "Table displaying loading spinner with customizable loading message.",
	args: {
		loading: true,
		noHeaderWhenEmpty: false,
		noResults: {
			label: 'Loading data...',
			description: 'Please wait while we fetch your data.',
			icon: {name: 'arrow-up', size: '80px'}
		}
	}
};

export const EmptyState: Story<FktTableExamplesEmptyStateComponent> = {
	component: FktTableExamplesEmptyStateComponent,
	description: "Table with comprehensive empty state configuration including action button.",
	args: {
		loading: false,
		noHeaderWhenEmpty: true,
		noResults: {
			label: 'No data to display',
			description: 'The table is currently empty. Add some records to get started.',
			icon: {name: 'table-cells', size: '96px'}
		}
	}
};

export const InteractiveStates: Story<FktTableExamplesInteractiveStatesComponent> = {
	component: FktTableExamplesInteractiveStatesComponent,
	description: "Interactive example with state controls for testing different table states.",
	args: {
		loading: false,
		noHeaderWhenEmpty: true,
		noResults: {
			label: 'No data to display',
			description: 'The table is currently empty. Try loading some data or adding new records.',
			icon: {name: 'table-cells', size: '96px'}
		}
	}
};

export const CustomCellTypes: Story<FktTableExamplesCustomCellsComponent> = {
	component: FktTableExamplesCustomCellsComponent,
	description: "Advanced example showing different cell types and custom formatting.",
	args: {
		loading: false,
		noHeaderWhenEmpty: false
	}
};

export const ProductTable: Story<FktTableExamplesProductTableComponent> = {
	component: FktTableExamplesProductTableComponent,
	description: "Real-world example with product data and inventory management actions.",
	args: {
		loading: false,
		noHeaderWhenEmpty: false,
		noResults: {
			label: 'No products available',
			description: 'Your product catalog is empty. Add some products to get started.',
			icon: {name: 'shopping-bag', size: '80px'}
		}
	}
};

export const TaskTable: Story<FktTableExamplesTaskTableComponent> = {
	component: FktTableExamplesTaskTableComponent,
	description: "Task management table with priority and status indicators.",
	args: {
		loading: false,
		noHeaderWhenEmpty: false,
		noResults: {
			label: 'No tasks assigned',
			description: 'You don\'t have any tasks yet. Create your first task to get started.',
			icon: {name: 'clipboard-document-list', size: '80px'}
		}
	}
};

export default meta;