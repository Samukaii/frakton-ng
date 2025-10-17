import type { Meta, StoryObj } from '@storybook/angular';
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
import { customDocsControl } from '../../.storybook/decorators/custom-docs-control';
import { renderComponent } from '../../.storybook/decorators/render-component';

const meta: Meta<FktTableComponent<any>> = {
	title: 'Components/Table',
	component: FktTableComponent,
	decorators: [
		customDocsControl(),
	],
	argTypes: {
		data: {
			control: 'object',
			description: 'Array of data items to display in the table. Each item must extend FktIdentifiable.',
			type: {
				name: "object",
				value: {},
				required: true
			},
			table: {
				type: {summary: 'T[]'},
				category: "Attributes"
			}
		},
		columnsFn: {
			control: false,
			description: 'Function that defines the columns for each data item. Returns an array of TableColumn configurations.',
			type: {
				name: "object",
				value: {},
				required: true
			},
			table: {
				type: {
					summary: 'TableColumnFn<T>',
					detail: "import {TableColumnFn} from 'frakton-ng/table'"
				},
				category: "Attributes"
			}
		},
		classesFn: {
			control: false,
			description: 'Optional function that returns CSS classes for each table row based on the data item.',
			table: {
				type: {
					summary: 'TableClassesFn<T>',
					detail: "import {TableClassesFn} from 'frakton-ng/table'"
				},
				defaultValue: {summary: '() => ""'},
				category: "Attributes"
			}
		},
		actionsFn: {
			control: false,
			description: 'Optional function that returns an array of actions for each table row.',
			table: {
				type: {
					summary: 'TableActionFn<T>',
					detail: "import {TableActionFn} from 'frakton-ng/table'"
				},
				defaultValue: {summary: 'undefined'},
				category: "Attributes"
			}
		},
		mainAction: {
			control: 'object',
			description: 'Optional main action button displayed in the table header.',
			table: {
				type: {
					summary: 'FktButtonAction',
					detail: "import {FktButtonAction} from 'frakton-ng/button'"
				},
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
				type: {
					summary: 'FktNoResults',
					detail: "import {FktNoResults} from 'frakton-ng/no-results'"
				},
				defaultValue: {summary: '{ label: "Sem resultados" }'},
				category: "Attributes"
			}
		},
	}
};

type Story = StoryObj<FktTableComponent<any>>;

export const BasicTable: Story = {
	render: renderComponent(FktTableExamplesBasicTableComponent),
	parameters: {
		docs: {
			description: {
				story: "A simple table displaying user data with basic column configuration."
			}
		}
	},
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

export const TableWithActions: Story = {
	render: renderComponent(FktTableExamplesTableWithActionsComponent),
	parameters: {
		docs: {
			description: {
				story: "Complete table with row actions, main header action, and conditional styling."
			}
		}
	},
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

export const LoadingState: Story = {
	render: renderComponent(FktTableExamplesLoadingStateComponent),
	parameters: {
		docs: {
			description: {
				story: "Table displaying loading spinner with customizable loading message."
			}
		}
	},
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

export const EmptyState: Story = {
	render: renderComponent(FktTableExamplesEmptyStateComponent),
	parameters: {
		docs: {
			description: {
				story: "Table with comprehensive empty state configuration including action button."
			}
		}
	},
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

export const InteractiveStates: Story = {
	render: renderComponent(FktTableExamplesInteractiveStatesComponent),
	parameters: {
		docs: {
			description: {
				story: "Interactive example with state controls for testing different table states."
			}
		}
	},
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
export const CustomCellTypes: Story = {
	render: renderComponent(FktTableExamplesCustomCellsComponent),
	parameters: {
		docs: {
			description: {
				story: "Advanced example showing different cell types and custom formatting."
			}
		}
	},
	args: {
		loading: false,
		noHeaderWhenEmpty: false
	}
};

export const ProductTable: Story = {
	render: renderComponent(FktTableExamplesProductTableComponent),
	parameters: {
		docs: {
			description: {
				story: "Real-world example with product data and inventory management actions."
			}
		}
	},
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

export const TaskTable: Story = {
	render: renderComponent(FktTableExamplesTaskTableComponent),
	parameters: {
		docs: {
			description: {
				story: "Task management table with priority and status indicators."
			}
		}
	},
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
