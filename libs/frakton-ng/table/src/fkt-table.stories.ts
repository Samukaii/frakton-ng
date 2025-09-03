import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FktTableComponent } from 'frakton-ng/table';
import { productData, taskData, userData } from './examples/table-mock-data';


import {
	FktTableExamplesBasicTableComponent,
	FktTableExamplesCustomCellsComponent,
	FktTableExamplesEmptyStateComponent,
	FktTableExamplesInteractiveStatesComponent,
	FktTableExamplesLoadingStateComponent,
	FktTableExamplesProductTableComponent,
	FktTableExamplesTableWithActionsComponent,
	FktTableExamplesTaskTableComponent,
} from './examples';

const meta: Meta<FktTableComponent<any>> = {
	title: 'Components/Table',
	component: FktTableComponent,
	decorators: [
		moduleMetadata({
			imports: [
				FktTableExamplesBasicTableComponent,
				FktTableExamplesCustomCellsComponent,
				FktTableExamplesEmptyStateComponent,
				FktTableExamplesInteractiveStatesComponent,
				FktTableExamplesLoadingStateComponent,
				FktTableExamplesProductTableComponent,
				FktTableExamplesTableWithActionsComponent,
				FktTableExamplesTaskTableComponent,
			]
		})
	],
	argTypes: {
		data: {
			control: 'object',
			description: 'Array of data items to display in the table. Each item must extend FktIdentifiable.',
			table: {
				type: {summary: 'T[]'},
				defaultValue: {summary: '[]'},
				category: "Attributes"
			}
		},
		columnsFn: {
			control: false,
			description: 'Function that defines the columns for each data item. Returns an array of TableColumn configurations.',
			table: {
				type: {summary: 'TableColumnFn<T>'},
				defaultValue: {summary: 'required'},
				category: "Attributes"
			}
		},
		classesFn: {
			control: false,
			description: 'Optional function that returns CSS classes for each table row based on the data item.',
			table: {
				type: {summary: 'TableClassesFn<T>'},
				defaultValue: {summary: '() => ""'},
				category: "Attributes"
			}
		},
		actionsFn: {
			control: false,
			description: 'Optional function that returns an array of actions for each table row.',
			table: {
				type: {summary: 'TableActionFn<T>'},
				defaultValue: {summary: '() => []'},
				category: "Attributes"
			}
		},
		mainAction: {
			control: 'object',
			description: 'Optional main action button displayed in the table header.',
			table: {
				type: {summary: 'FktButtonAction'},
				defaultValue: {summary: 'undefined'},
				category: "Attributes"
			}
		},
		loading: {
			control: 'boolean',
			description: 'Whether the table is in a loading state. Shows a spinner when true.',
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'},
				category: "Attributes"
			}
		},
		noHeaderWhenEmpty: {
			control: 'boolean',
			description: 'Whether to hide the table header when there is no data.',
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'},
				category: "Attributes"
			}
		},
		noResults: {
			control: 'object',
			description: 'Configuration for the empty state display when no data is available.',
			table: {
				type: {summary: 'FktNoResults'},
				defaultValue: {summary: '{ label: "Sem resultados" }'},
				category: "Attributes"
			}
		},
	}
};

type Story = StoryObj<FktTableComponent<any>>;

// Basic Table
export const BasicTable: Story = {
	render: (args) => ({
		template: `
			<fkt-table-examples-basic-table
				[data]="data"
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
		data: userData.users,
		loading: false,
		noHeaderWhenEmpty: false,
		noResults: {
			label: 'No data available',
			description: 'There are no records to display at this time.',
			icon: {name: 'document-text', size: '80px'}
		}
	}
};

// Table with Actions
export const WithActions: Story = {
	render: (args) => ({
		template: `
			<fkt-table-examples-table-with-actions
				[data]="data"
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
		data: userData.users,
		mainAction: userData.userMainAction,
		loading: false,
		noHeaderWhenEmpty: false,
		noResults: {
			label: 'No users found',
			description: 'There are no users to display. Add a new user to get started.',
			icon: {name: 'user-group', size: '80px'},
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
			<fkt-table-examples-loading-state
				[data]="data"
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
		data: userData.users,
		mainAction: userData.userMainAction,
		loading: true,
		noHeaderWhenEmpty: false,
		noResults: {
			label: 'Loading data...',
			description: 'Please wait while we fetch your data.',
			icon: {name: 'arrow-up', size: '80px'}
		}
	}
};

// Empty State
export const EmptyState: Story = {
	render: (args) => ({
		template: `
			<fkt-table-examples-empty-state
				[data]="data"
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
		mainAction: userData.userMainAction,
		loading: false,
		noHeaderWhenEmpty: true,
		noResults: {
			label: 'No data to display',
			description: 'The table is currently empty. Add some records to get started.',
			icon: {name: 'table-cells', size: '96px'},
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
			<fkt-table-examples-interactive-states
				[data]="data"
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
		data: userData.users,
		mainAction: userData.userMainAction,
		loading: false,
		noHeaderWhenEmpty: true,
		noResults: {
			label: 'No data to display',
			description: 'The table is currently empty. Try loading some data or adding new records.',
			icon: {name: 'table-cells', size: '96px'},
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
			<fkt-table-examples-custom-cells
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
			<fkt-table-examples-product-table
				[data]="data"
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
		data: productData.products,
		mainAction: productData.productMainAction,
		loading: false,
		noHeaderWhenEmpty: false,
		noResults: {
			label: 'No products available',
			description: 'Your product catalog is empty. Add some products to get started.',
			icon: {name: 'shopping-bag', size: '80px'},
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
			<fkt-table-examples-task-table
				[data]="data"
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
		data: taskData.tasks,
		mainAction: taskData.taskMainAction,
		loading: false,
		noHeaderWhenEmpty: false,
		noResults: {
			label: 'No tasks assigned',
			description: 'You don\'t have any tasks yet. Create your first task to get started.',
			icon: {name: 'clipboard-document-list', size: '80px'},
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
