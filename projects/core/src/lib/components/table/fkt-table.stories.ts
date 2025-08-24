import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { TableComponent } from './table.component';
import { BasicTableExampleComponent } from './examples/basic-table-example.component';
import { TableWithActionsExampleComponent } from './examples/table-with-actions-example.component';
import { TableStatesExampleComponent } from './examples/table-states-example.component';
import { CustomCellsExampleComponent } from './examples/custom-cells-example.component';
import {
	mockUsers,
	mockProducts,
	mockTasks,
	createUserColumns,
	createProductColumns,
	createTaskColumns,
	createUserActions,
	createProductActions,
	createTaskActions,
	createUserClasses,
	createProductClasses,
	createTaskClasses,
	createUserMainAction,
	createProductMainAction,
	createTaskMainAction
} from './examples/table-mock-data';

const meta: Meta<TableComponent<any>> = {
	title: 'Components/Table',
	component: TableComponent,
	decorators: [
		moduleMetadata({
			imports: [
				BasicTableExampleComponent,
				TableWithActionsExampleComponent,
				TableStatesExampleComponent,
				CustomCellsExampleComponent
			]
		})
	],
	argTypes: {
		data: {
			control: 'object',
			description: 'Array of data items to display in the table. Each item must extend FktIdentifiable.',
			table: {
				type: { summary: 'T[]' },
				defaultValue: { summary: '[]' }
			}
		},
		columnsFn: {
			control: false,
			description: 'Function that defines the columns for each data item. Returns an array of TableColumn configurations.',
			table: {
				type: { summary: 'TableColumnFn<T>' },
				defaultValue: { summary: 'required' }
			}
		},
		classesFn: {
			control: false,
			description: 'Optional function that returns CSS classes for each table row based on the data item.',
			table: {
				type: { summary: 'TableClassesFn<T>' },
				defaultValue: { summary: '() => ""' }
			}
		},
		actionsFn: {
			control: false,
			description: 'Optional function that returns an array of actions for each table row.',
			table: {
				type: { summary: 'TableActionFn<T>' },
				defaultValue: { summary: '() => []' }
			}
		},
		mainAction: {
			control: 'object',
			description: 'Optional main action button displayed in the table header.',
			table: {
				type: { summary: 'FktButtonAction' },
				defaultValue: { summary: 'undefined' }
			}
		},
		loading: {
			control: 'boolean',
			description: 'Whether the table is in a loading state. Shows a spinner when true.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			}
		},
		noHeaderWhenEmpty: {
			control: 'boolean',
			description: 'Whether to hide the table header when there is no data.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			}
		},
		noResults: {
			control: 'object',
			description: 'Configuration for the empty state display when no data is available.',
			table: {
				type: { summary: 'FktNoResults' },
				defaultValue: { summary: '{ label: "Sem resultados" }' }
			}
		},
		createAction: {
			control: false,
			description: 'Output event emitted when a create action is triggered.',
			table: {
				type: { summary: 'EventEmitter<void>' }
			}
		}
	}
};

type Story = StoryObj<TableComponent<any>>;

// Basic Table
export const BasicTable: Story = {
	render: (args) => ({
		template: `
			<basic-table-example
				[data]="data"
				[columnsFn]="columnsFn"
				[classesFn]="classesFn"
				[actionsFn]="actionsFn"
				[mainAction]="mainAction"
				[loading]="loading"
				[noHeaderWhenEmpty]="noHeaderWhenEmpty"
				[noResults]="noResults"
			/>
		`,
		props: {
			...args
		}
	}),
	args: {
		data: mockUsers,
		columnsFn: createUserColumns,
		classesFn: () => '',
		actionsFn: () => [],
		mainAction: undefined,
		loading: false,
		noHeaderWhenEmpty: false,
		noResults: {
			label: 'No data available',
			description: 'There are no records to display at this time.',
			icon: { name: 'document-text', size: '80px' }
		}
	}
};

// Table with Actions
export const WithActions: Story = {
	render: (args) => ({
		template: `
			<table-with-actions-example
				[data]="data"
				[columnsFn]="columnsFn"
				[classesFn]="classesFn"
				[actionsFn]="actionsFn"
				[mainAction]="mainAction"
				[loading]="loading"
				[noHeaderWhenEmpty]="noHeaderWhenEmpty"
				[noResults]="noResults"
			/>
		`,
		props: {
			...args
		}
	}),
	args: {
		data: mockUsers,
		columnsFn: createUserColumns,
		classesFn: createUserClasses,
		actionsFn: createUserActions,
		mainAction: createUserMainAction(),
		loading: false,
		noHeaderWhenEmpty: false,
		noResults: {
			label: 'No users found',
			description: 'There are no users to display. Add a new user to get started.',
			icon: { name: 'user-group', size: '80px' },
			action: {
				identifier: 'add-user-from-empty',
				text: 'Add User',
				theme: 'raised',
				color: 'primary',
				icon: 'plus',
				iconPosition: 'left',
				click: () => console.log('Add user from empty state')
			}
		}
	}
};

// Loading State
export const LoadingState: Story = {
	render: (args) => ({
		template: `
			<basic-table-example
				[data]="data"
				[columnsFn]="columnsFn"
				[classesFn]="classesFn"
				[actionsFn]="actionsFn"
				[mainAction]="mainAction"
				[loading]="loading"
				[noHeaderWhenEmpty]="noHeaderWhenEmpty"
				[noResults]="noResults"
			/>
		`,
		props: {
			...args
		}
	}),
	args: {
		data: mockUsers,
		columnsFn: createUserColumns,
		classesFn: createUserClasses,
		actionsFn: createUserActions,
		mainAction: createUserMainAction(),
		loading: true,
		noHeaderWhenEmpty: false,
		noResults: {
			label: 'Loading data...',
			description: 'Please wait while we fetch your data.',
			icon: { name: 'arrow-up', size: '80px' }
		}
	}
};

// Empty State
export const EmptyState: Story = {
	render: (args) => ({
		template: `
			<basic-table-example
				[data]="data"
				[columnsFn]="columnsFn"
				[classesFn]="classesFn"
				[actionsFn]="actionsFn"
				[mainAction]="mainAction"
				[loading]="loading"
				[noHeaderWhenEmpty]="noHeaderWhenEmpty"
				[noResults]="noResults"
			/>
		`,
		props: {
			...args
		}
	}),
	args: {
		data: [],
		columnsFn: createUserColumns,
		classesFn: createUserClasses,
		actionsFn: createUserActions,
		mainAction: createUserMainAction(),
		loading: false,
		noHeaderWhenEmpty: true,
		noResults: {
			label: 'No data to display',
			description: 'The table is currently empty. Add some records to get started.',
			icon: { name: 'table-cells', size: '96px' },
			action: {
				identifier: 'add-data',
				text: 'Add Data',
				theme: 'raised',
				color: 'primary',
				icon: 'plus',
				iconPosition: 'left',
				click: () => console.log('Add data clicked')
			}
		}
	}
};

// Interactive States
export const InteractiveStates: Story = {
	render: (args) => ({
		template: `
			<table-states-example
				[data]="data"
				[columnsFn]="columnsFn"
				[classesFn]="classesFn"
				[actionsFn]="actionsFn"
				[mainAction]="mainAction"
				[loading]="loading"
				[noHeaderWhenEmpty]="noHeaderWhenEmpty"
				[noResults]="noResults"
			/>
		`,
		props: {
			...args
		}
	}),
	args: {
		data: mockUsers,
		columnsFn: createUserColumns,
		classesFn: createUserClasses,
		actionsFn: createUserActions,
		mainAction: createUserMainAction(),
		loading: false,
		noHeaderWhenEmpty: true,
		noResults: {
			label: 'No data to display',
			description: 'The table is currently empty. Try loading some data or adding new records.',
			icon: { name: 'table-cells', size: '96px' },
			action: {
				identifier: 'load-data',
				text: 'Load Sample Data',
				theme: 'raised',
				color: 'primary',
				icon: 'arrow-down-tray',
				iconPosition: 'left',
				click: () => console.log('Load sample data')
			}
		}
	}
};

// Custom Cells
export const CustomCells: Story = {
	render: (args) => ({
		template: `
			<custom-cells-example
				[loading]="loading"
				[noHeaderWhenEmpty]="noHeaderWhenEmpty"
			/>
		`,
		props: {
			...args
		}
	}),
	args: {
		loading: false,
		noHeaderWhenEmpty: false
	}
};

// Product Table Example
export const ProductTable: Story = {
	render: (args) => ({
		template: `
			<basic-table-example
				[data]="data"
				[columnsFn]="columnsFn"
				[classesFn]="classesFn"
				[actionsFn]="actionsFn"
				[mainAction]="mainAction"
				[loading]="loading"
				[noHeaderWhenEmpty]="noHeaderWhenEmpty"
				[noResults]="noResults"
			/>
		`,
		props: {
			...args
		}
	}),
	args: {
		data: mockProducts,
		columnsFn: createProductColumns,
		classesFn: createProductClasses,
		actionsFn: createProductActions,
		mainAction: createProductMainAction(),
		loading: false,
		noHeaderWhenEmpty: false,
		noResults: {
			label: 'No products available',
			description: 'Your product catalog is empty. Add some products to get started.',
			icon: { name: 'shopping-bag', size: '80px' },
			action: {
				identifier: 'add-product',
				text: 'Add Product',
				theme: 'raised',
				color: 'primary',
				icon: 'plus',
				iconPosition: 'left',
				click: () => console.log('Add product')
			}
		}
	}
};

// Task Table Example
export const TaskTable: Story = {
	render: (args) => ({
		template: `
			<basic-table-example
				[data]="data"
				[columnsFn]="columnsFn"
				[classesFn]="classesFn"
				[actionsFn]="actionsFn"
				[mainAction]="mainAction"
				[loading]="loading"
				[noHeaderWhenEmpty]="noHeaderWhenEmpty"
				[noResults]="noResults"
			/>
		`,
		props: {
			...args
		}
	}),
	args: {
		data: mockTasks,
		columnsFn: createTaskColumns,
		classesFn: createTaskClasses,
		actionsFn: createTaskActions,
		mainAction: createTaskMainAction(),
		loading: false,
		noHeaderWhenEmpty: false,
		noResults: {
			label: 'No tasks assigned',
			description: 'You don\'t have any tasks yet. Create your first task to get started.',
			icon: { name: 'clipboard-document-list', size: '80px' },
			action: {
				identifier: 'add-task',
				text: 'Create Task',
				theme: 'raised',
				color: 'primary',
				icon: 'plus',
				iconPosition: 'left',
				click: () => console.log('Add task')
			}
		}
	}
};

export default meta;
