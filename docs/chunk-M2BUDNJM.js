import"./chunk-A25UGBQK.js";var t=`<fkt-table\r
			[data]="data()"\r
			[columnsFn]="columnsFn"\r
			[loading]="loading()"\r
			[noHeaderWhenEmpty]="noHeaderWhenEmpty()"\r
			[noResults]="noResults()"\r
		/>`;var e=`fkt-table {\r
	background-color: var(--fkt-color-neutral-100);\r
}\r
`;var a=`import { Component, input } from '@angular/core';\r
import { FktTableColumnFn, FktTableComponent } from 'frakton-ng/table';\r
import { FktNoResults } from 'frakton-ng/no-results';\r
import { FktIdentifiable } from 'frakton-ng/core';\r
\r
export interface User extends FktIdentifiable {\r
	name: string;\r
	email: string;\r
	role: 'admin' | 'user' | 'moderator';\r
	status: 'active' | 'inactive' | 'pending';\r
	joinedAt: Date;\r
	lastLogin?: Date;\r
}\r
\r
export const users: User[] = [\r
	{\r
		id: 1,\r
		name: 'John Doe',\r
		email: 'john.doe@example.com',\r
		role: 'admin',\r
		status: 'active',\r
		joinedAt: new Date('2023-01-15'),\r
		lastLogin: new Date('2024-08-20')\r
	},\r
	{\r
		id: 2,\r
		name: 'Jane Smith',\r
		email: 'jane.smith@example.com',\r
		role: 'user',\r
		status: 'active',\r
		joinedAt: new Date('2023-02-20'),\r
		lastLogin: new Date('2024-08-19')\r
	},\r
	{\r
		id: 3,\r
		name: 'Bob Johnson',\r
		email: 'bob.johnson@example.com',\r
		role: 'moderator',\r
		status: 'inactive',\r
		joinedAt: new Date('2023-03-10'),\r
		lastLogin: new Date('2024-08-10')\r
	},\r
	{\r
		id: 4,\r
		name: 'Alice Brown',\r
		email: 'alice.brown@example.com',\r
		role: 'user',\r
		status: 'pending',\r
		joinedAt: new Date('2024-08-15')\r
	}\r
];\r
\r
@Component({\r
	selector: 'fkt-table-examples-basic-table',\r
	imports: [\r
		FktTableComponent\r
	],\r
	templateUrl: './fkt-table-examples-basic-table.component.html',\r
	styleUrl: './fkt-table-examples-basic-table.component.scss'\r
})\r
export class FktTableExamplesBasicTableComponent {\r
	data = input<User[]>(users);\r
	loading = input<boolean>(false);\r
	noHeaderWhenEmpty = input<boolean>(false);\r
	noResults = input<FktNoResults>({\r
		label: 'No data available',\r
		description: 'There are no records to display at this time.',\r
		icon: {name: 'document-text', size: '80px'}\r
	});\r
\r
	columnsFn: FktTableColumnFn<User> = (user) => [\r
		{\r
			position: '1',\r
			name: 'Name',\r
			cell: {\r
				type: 'default',\r
				options: { value: user.name }\r
			}\r
		},\r
		{\r
			position: '2',\r
			name: 'Email',\r
			cell: {\r
				type: 'default',\r
				options: { value: user.email }\r
			}\r
		},\r
		{\r
			position: '3',\r
			name: 'Role',\r
			cell: {\r
				type: 'badge',\r
				options: {\r
					text: user.role,\r
					color: (() => {\r
						switch (user.role) {\r
							case "admin":\r
								return "info";\r
							case "moderator":\r
								return "warning";\r
							default:\r
								return "success"\r
						}\r
					})(),\r
					variant: "faded"\r
				}\r
			}\r
		},\r
		{\r
			position: '4',\r
			name: 'Status',\r
			cell: {\r
				type: 'badge',\r
				options: {\r
					text: user.status,\r
					color: (() => {\r
						switch (user.status) {\r
							case "active":\r
								return "success";\r
							case "pending":\r
								return "warning";\r
							default:\r
								return "danger"\r
						}\r
					})()\r
				}\r
			}\r
		}\r
	];\r
}\r
`;var o=`<div class="container">\r
			<div class="container__table">\r
				<h3>Products - Custom Price and Status Formatting</h3>\r
				<fkt-table\r
					[data]="productData()"\r
					[columnsFn]="productColumns()"\r
					[classesFn]="productClassesFn"\r
					[actionsFn]="productActionsFn"\r
					[mainAction]="productMainAction()"\r
					[loading]="loading()"\r
					[noHeaderWhenEmpty]="noHeaderWhenEmpty()"\r
					[noResults]="productNoResults"\r
				/>\r
			</div>\r
\r
			<div class="container__table">\r
				<h3>Tasks - Status and Priority Indicators</h3>\r
				<fkt-table\r
					[data]="taskData()"\r
					[columnsFn]="taskColumns()"\r
					[classesFn]="taskClassesFn"\r
					[actionsFn]="taskActionsFn"\r
					[mainAction]="taskMainAction()"\r
					[loading]="loading()"\r
					[noHeaderWhenEmpty]="noHeaderWhenEmpty()"\r
					[noResults]="taskNoResults"\r
				/>\r
			</div>\r
		</div>`;var n=`.container {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-2xl);\r
\r
	&__table {\r
		h3 {\r
			font-size: var(--fkt-font-size-lg);\r
			font-weight: var(--fkt-font-semibold);\r
			margin-bottom: var(--fkt-space-md);\r
			color: var(--fkt-color-neutral-800);\r
		}\r
	}\r
}\r
\r
:host ::ng-deep {\r
	.table-task-completed {\r
		background-color: var(--fkt-color-success-opacity-10);\r
\r
		&:hover {\r
			background-color: var(--fkt-color-success-opacity-20) !important;\r
		}\r
	}\r
\r
	.table-task-in-progress {\r
		background-color: #155DFC14;\r
\r
		&:hover {\r
			background-color: var(--fkt-color-info-opacity-20) !important;\r
		}\r
	}\r
\r
	.table-task-cancelled {\r
		background-color: var(--fkt-color-danger-opacity-10);\r
\r
		&:hover {\r
			background-color: var(--fkt-color-danger-opacity-20) !important;\r
		}\r
	}\r
\r
	.table-product-no-stock {\r
		background-color: var(--fkt-color-danger-opacity-10);\r
\r
		&:hover {\r
			background-color: var(--fkt-color-danger-opacity-20) !important;\r
		}\r
	}\r
\r
	.table-product-discontinued {\r
		background-color: var(--fkt-color-neutral-100);\r
		opacity: 60%;\r
		filter: grayscale(1);\r
		cursor: pointer;\r
		pointer-events: none;\r
\r
		&:hover {\r
			background-color: var(--fkt-color-neutral-100) !important;\r
		}\r
	}\r
}\r
\r
fkt-table {\r
	background-color: var(--fkt-color-neutral-100);\r
}\r
\r
`;var s=`import { Component, computed, input, signal } from '@angular/core';\r
import { Product, productData, Task, taskData } from '../table-mock-data';\r
import { FktTableActionFn, FktTableClassesFn, FktTableColumnFn, FktTableComponent } from 'frakton-ng/table';\r
import { FktButtonAction } from 'frakton-ng/button';\r
import { FktNoResults } from 'frakton-ng/no-results';\r
import { FktColor } from 'frakton-ng/core';\r
import { FktIconName } from 'frakton-ng/icon';\r
\r
@Component({\r
	selector: 'fkt-table-examples-custom-cells',\r
	imports: [\r
		FktTableComponent\r
	],\r
	templateUrl: './fkt-table-examples-custom-cells.component.html',\r
	styleUrl: './fkt-table-examples-custom-cells.component.scss'\r
})\r
export class FktTableExamplesCustomCellsComponent {\r
	loading = input<boolean>(false);\r
	noHeaderWhenEmpty = input<boolean>(false);\r
\r
	productData = signal<Product[]>(productData.products);\r
	taskData = signal<Task[]>(taskData.tasks);\r
\r
	productColumns = computed<FktTableColumnFn<Product>>(() => (product) => [\r
		{\r
			position: '1',\r
			name: 'Product',\r
			cell: {\r
				type: 'default',\r
				options: {value: product.name}\r
			}\r
		},\r
		{\r
			position: '2',\r
			name: 'Category',\r
			cell: {\r
				type: 'default',\r
				options: {value: product.category}\r
			}\r
		},\r
		{\r
			position: '3',\r
			name: 'Price',\r
			cell: {\r
				type: 'default',\r
				options: {\r
					value: new Intl.NumberFormat('en-US', {\r
						style: 'currency',\r
						currency: 'USD'\r
					}).format(product.price)\r
				}\r
			}\r
		},\r
		{\r
			position: '4',\r
			name: 'Stock',\r
			cell: {\r
				type: 'default',\r
				options: {\r
					value: product.stock === 0\r
						? 'Out of Stock'\r
						: \`\${product.stock} units\`\r
				}\r
			}\r
		},\r
		{\r
			position: '5',\r
			name: 'Status',\r
			cell: {\r
				type: 'with-action',\r
				options: {\r
					text: {\r
						value:\r
							this.formatProductStatus(product.status)\r
					},\r
					actions: [{\r
						identifier: 'toggle-product-status',\r
						icon: product.status === 'active' ? 'check-circle' : 'x-circle',\r
						theme: 'basic',\r
						color: product.status === 'active' ? 'success' : 'danger',\r
						ariaLabel: product.status === 'active' ? 'Deactivate product' : 'Activate product',\r
						click: () => this.toggleProductStatus(product)\r
					}]\r
				}\r
			}\r
		}\r
	]);\r
\r
	taskColumns = computed<FktTableColumnFn<Task>>(() => (task) => [\r
		{\r
			position: '1',\r
			name: 'Task',\r
			cell: {\r
				type: 'default',\r
				options: {value: task.title}\r
			}\r
		},\r
		{\r
			position: '2',\r
			name: 'Assignee',\r
			cell: {\r
				type: 'default',\r
				options: {value: task.assignee}\r
			}\r
		},\r
		{\r
			position: '3',\r
			name: 'Priority',\r
			cell: {\r
				type: 'with-action',\r
				options: {\r
					text: {\r
						value: this.formatPriority(task.priority)\r
					},\r
					actions: [\r
						{\r
							identifier: 'change-priority',\r
							icon: this.getPriorityIcon(task.priority),\r
							color: this.getPriorityColor(task.priority),\r
							tooltip: "Change priority",\r
							theme: 'basic',\r
							condition: true,\r
							ariaLabel: 'Change priority',\r
							click: () => this.changePriority(task)\r
						}\r
					]\r
				}\r
			}\r
		},\r
		{\r
			position: '4',\r
			name: 'Status',\r
			cell: {\r
				type: 'with-action',\r
				options: {\r
					text: {value: this.formatTaskStatus(task.status)},\r
					actions: [\r
						{\r
							identifier: 'change-task',\r
							condition: true,\r
							theme: 'basic',\r
							color: this.getStatusColor(task.status),\r
							icon: this.getStatusIcon(task.status),\r
							ariaLabel: 'Change task status',\r
							click: () => this.changeTaskStatus(task)\r
						}\r
					]\r
				}\r
			}\r
		},\r
		{\r
			position: '5',\r
			name: 'Due Date',\r
			cell: {\r
				type: 'default',\r
				options: {\r
					value: new Intl.DateTimeFormat('en-US', {\r
						month: 'short',\r
						day: 'numeric',\r
						year: 'numeric'\r
					}).format(task.dueDate)\r
				}\r
			}\r
		}\r
	]);\r
\r
	productClassesFn: FktTableClassesFn<Product> = (product) => {\r
		if (product.stock === 0) {\r
			return 'table-product-no-stock';\r
		}\r
		if (product.status === 'discontinued') {\r
			return 'table-product-discontinued';\r
		}\r
		return '';\r
	};\r
\r
	taskClassesFn: FktTableClassesFn<Task> = (task) => {\r
		switch (task.status) {\r
			case 'completed':\r
				return 'table-task-completed';\r
			case 'in-progress':\r
				return 'table-task-in-progress';\r
			case 'cancelled':\r
				return 'table-task-cancelled';\r
			default:\r
				return '';\r
		}\r
	};\r
\r
	productActionsFn: FktTableActionFn<Product> = (product) => [\r
		{\r
			identifier: 'edit',\r
			condition: product.status !== 'discontinued',\r
			icon: 'pencil',\r
			color: 'success',\r
			theme: 'basic',\r
			ariaLabel: 'Edit product',\r
			click: () => console.log('Edit product:', product.name)\r
		},\r
		{\r
			identifier: 'delete',\r
			condition: true,\r
			icon: 'trash',\r
			color: 'danger',\r
			theme: 'basic',\r
			ariaLabel: 'Delete product',\r
			click: () => console.log('Delete product:', product.name)\r
		}\r
	];\r
\r
	taskActionsFn: FktTableActionFn<Task> = (task) => [\r
		{\r
			identifier: 'complete',\r
			condition: task.status !== 'completed' && task.status !== 'cancelled',\r
			icon: 'check',\r
			color: 'success',\r
			theme: 'basic',\r
			ariaLabel: 'Complete task',\r
			click: () => console.log('Complete task:', task.title)\r
		},\r
		{\r
			identifier: 'edit',\r
			condition: task.status !== 'completed',\r
			icon: 'pencil',\r
			color: 'primary',\r
			theme: 'basic',\r
			ariaLabel: 'Edit task',\r
			click: () => console.log('Edit task:', task.title)\r
		},\r
		{\r
			identifier: 'cancel',\r
			condition: task.status !== 'completed' && task.status !== 'cancelled',\r
			icon: 'x-mark',\r
			color: 'danger',\r
			theme: 'basic',\r
			ariaLabel: 'Cancel task',\r
			click: () => console.log('Cancel task:', task.title)\r
		}\r
	];\r
\r
	taskMainAction = computed<FktButtonAction>(() => ({\r
		identifier: 'add-task',\r
		text: 'New Task',\r
		theme: 'raised',\r
		color: 'primary',\r
		icon: 'plus',\r
		iconPosition: 'left',\r
		click: () => console.log('Add new task')\r
	}));\r
	productMainAction = computed<FktButtonAction>(() => ({\r
		identifier: 'add-product',\r
		text: 'Add Product',\r
		theme: 'raised',\r
		color: 'primary',\r
		icon: 'plus',\r
		iconPosition: 'left',\r
		click: () => console.log('Add new product')\r
	}));\r
\r
\r
	taskNoResults: FktNoResults = {\r
		label: 'No tasks assigned',\r
		description: 'You don\\'t have any tasks yet. Create your first task to get started.',\r
		icon: {name: 'clipboard-document-list', size: '80px'},\r
		action: {\r
			identifier: 'add-first-task',\r
			text: 'Create Task',\r
			theme: 'raised',\r
			color: 'primary',\r
			icon: 'plus',\r
			iconPosition: 'left',\r
			click: () => console.log('Add first task')\r
		}\r
	};\r
\r
	productNoResults: FktNoResults = {\r
		label: 'No products available',\r
		description: 'Your product catalog is empty. Add some products to get started.',\r
		icon: {name: 'shopping-bag', size: '80px'},\r
		action: {\r
			identifier: 'add-first-product',\r
			text: 'Add Product',\r
			theme: 'raised',\r
			color: 'primary',\r
			icon: 'plus',\r
			iconPosition: 'left',\r
			click: () => console.log('Add first product')\r
		}\r
	};\r
\r
	private formatProductStatus(status: Product['status']): string {\r
		switch (status) {\r
			case 'active':\r
				return 'Active';\r
			case 'inactive':\r
				return 'Inactive';\r
			case 'discontinued':\r
				return 'Discontinued';\r
			default:\r
				return status;\r
		}\r
	}\r
\r
	private toggleProductStatus(product: Product): void {\r
		console.log('Toggle product status:', product);\r
	}\r
\r
	private formatPriority(priority: Task['priority']): string {\r
		return priority.charAt(0).toUpperCase() + priority.slice(1);\r
	}\r
\r
	private getPriorityIcon(priority: Task['priority']): FktIconName {\r
		switch (priority) {\r
			case 'high':\r
				return 'arrow-up';\r
			case 'medium':\r
				return 'minus';\r
			case 'low':\r
				return 'arrow-down';\r
			default:\r
				return 'minus';\r
		}\r
	}\r
\r
	private getPriorityColor(priority: Task['priority']): FktColor {\r
		switch (priority) {\r
			case 'high':\r
				return 'danger';\r
			case 'medium':\r
				return 'accent';\r
			default:\r
				return 'success';\r
		}\r
	}\r
\r
	private formatTaskStatus(status: Task['status']): string {\r
		switch (status) {\r
			case 'todo':\r
				return 'To Do';\r
			case 'in-progress':\r
				return 'In Progress';\r
			case 'completed':\r
				return 'Completed';\r
			case 'cancelled':\r
				return 'Cancelled';\r
			default:\r
				return status;\r
		}\r
	}\r
\r
	private getStatusIcon(status: Task['status']): FktIconName {\r
		switch (status) {\r
			case 'todo':\r
				return 'clock';\r
			case 'in-progress':\r
				return 'play';\r
			case 'completed':\r
				return 'check';\r
			case 'cancelled':\r
				return 'x-mark';\r
			default:\r
				return 'clock';\r
		}\r
	}\r
\r
	private getStatusColor(status: Task['status']): FktColor {\r
		switch (status) {\r
			case 'in-progress':\r
				return 'accent';\r
			case 'completed':\r
				return 'success';\r
			case 'cancelled':\r
				return 'danger';\r
			default:\r
				return 'info';\r
		}\r
	}\r
\r
	private changePriority(task: Task): void {\r
		console.log('Change priority for task:', task);\r
	}\r
\r
	private changeTaskStatus(task: Task): void {\r
		console.log('Change status for task:', task);\r
	}\r
}\r
`;var r=`<fkt-table\r
			[data]="tableData()"\r
			[columnsFn]="columnsFn"\r
			[classesFn]="classesFn"\r
			[mainAction]="tableMainAction()"\r
			[loading]="loading()"\r
			[noHeaderWhenEmpty]="noHeaderWhenEmpty()"\r
			[noResults]="tableNoResults()"\r
		/>`;var i=`:host ::ng-deep {\r
	.table-user-active {\r
		background-color: var(--fkt-color-danger-opacity-10);\r
\r
		&:hover {\r
			background-color: var(--fkt-color-danger-opacity-20) !important;\r
		}\r
	}\r
\r
	.table-user-pending {\r
		background-color: var(--fkt-color-accent-opacity-10);\r
\r
		&:hover {\r
			background-color: var(--fkt-color-accent-opacity-20) !important;\r
		}\r
	}\r
\r
	.table-user-inactive {\r
		background-color: var(--fkt-color-neutral-100);\r
		opacity: 60%;\r
		filter: grayscale(1);\r
		cursor: pointer;\r
		pointer-events: none;\r
\r
		&:hover {\r
			background-color: var(--fkt-color-neutral-100) !important;\r
		}\r
	}\r
}\r
\r
fkt-table {\r
	background-color: var(--fkt-color-neutral-100);\r
}\r
`;var l=`import { Component, input, linkedSignal } from '@angular/core';\r
import { FktTableClassesFn, FktTableColumnFn, FktTableComponent } from 'frakton-ng/table';\r
import { FktButtonAction } from 'frakton-ng/button';\r
import { FktNoResults } from 'frakton-ng/no-results';\r
import { FktIdentifiable } from 'frakton-ng/core';\r
\r
export interface User extends FktIdentifiable {\r
	name: string;\r
	email: string;\r
	role: 'admin' | 'user' | 'moderator';\r
	status: 'active' | 'inactive' | 'pending';\r
	joinedAt: Date;\r
	lastLogin?: Date;\r
}\r
\r
export const users: User[] = [\r
	{\r
		id: 1,\r
		name: 'John Doe',\r
		email: 'john.doe@example.com',\r
		role: 'admin',\r
		status: 'active',\r
		joinedAt: new Date('2023-01-15'),\r
		lastLogin: new Date('2024-08-20')\r
	},\r
	{\r
		id: 2,\r
		name: 'Jane Smith',\r
		email: 'jane.smith@example.com',\r
		role: 'user',\r
		status: 'active',\r
		joinedAt: new Date('2023-02-20'),\r
		lastLogin: new Date('2024-08-19')\r
	},\r
	{\r
		id: 3,\r
		name: 'Bob Johnson',\r
		email: 'bob.johnson@example.com',\r
		role: 'moderator',\r
		status: 'inactive',\r
		joinedAt: new Date('2023-03-10'),\r
		lastLogin: new Date('2024-08-10')\r
	},\r
	{\r
		id: 4,\r
		name: 'Alice Brown',\r
		email: 'alice.brown@example.com',\r
		role: 'user',\r
		status: 'pending',\r
		joinedAt: new Date('2024-08-15')\r
	}\r
];\r
\r
export const userMainAction: FktButtonAction = {\r
	identifier: 'add-user',\r
	text: 'Add User',\r
	theme: 'raised',\r
	color: 'primary',\r
	icon: 'plus',\r
	iconPosition: 'left',\r
	click: () => console.log('Add new user')\r
};\r
\r
\r
@Component({\r
	selector: 'fkt-table-examples-empty-state',\r
	imports: [\r
		FktTableComponent\r
	],\r
	templateUrl: './fkt-table-examples-empty-state.component.html',\r
	styleUrl: './fkt-table-examples-empty-state.component.scss'\r
})\r
export class FktTableExamplesEmptyStateComponent {\r
	data = input<User[]>(users);\r
	mainAction = input<FktButtonAction>(userMainAction);\r
	loading = input<boolean>(false);\r
	noHeaderWhenEmpty = input<boolean>(false);\r
	noResults = input<FktNoResults>({\r
		label: 'No data available',\r
		description: 'There are no records to display at this time.',\r
		icon: {name: 'document-text', size: '80px'}\r
	});\r
\r
	tableData = linkedSignal(this.data);\r
\r
	tableNoResults = linkedSignal((): FktNoResults => {\r
		return {\r
			...this.noResults(),\r
			action: {\r
				identifier: 'add-data',\r
				text: 'Add Data',\r
				theme: 'raised',\r
				color: 'primary',\r
				icon: 'plus',\r
				iconPosition: 'left',\r
				click: () => {\r
					this.addUser();\r
				}\r
			}\r
		}\r
	});\r
\r
	tableMainAction(): FktButtonAction {\r
		return {\r
			...this.mainAction(),\r
			click: () => {\r
				this.addUser();\r
			}\r
		}\r
	}\r
\r
	columnsFn: FktTableColumnFn<User> = (user) => [\r
		{\r
			position: '1',\r
			name: 'Name',\r
			cell: {\r
				type: 'default',\r
				options: {value: user.name}\r
			}\r
		},\r
		{\r
			position: '2',\r
			name: 'Email',\r
			cell: {\r
				type: 'default',\r
				options: {value: user.email}\r
			}\r
		},\r
		{\r
			position: '3',\r
			name: 'Role',\r
			cell: {\r
				type: 'badge',\r
				options: {\r
					text: user.role,\r
					color: (() => {\r
						switch (user.role) {\r
							case "admin":\r
								return "info";\r
							case "moderator":\r
								return "warning";\r
							default:\r
								return "success"\r
						}\r
					})(),\r
					variant: "faded"\r
				}\r
			}\r
		},\r
		{\r
			position: '4',\r
			name: 'Status',\r
			cell: {\r
				type: 'badge',\r
				options: {\r
					text: user.status,\r
					color: (() => {\r
						switch (user.status) {\r
							case "active":\r
								return "success";\r
							case "pending":\r
								return "warning";\r
							default:\r
								return "danger"\r
						}\r
					})()\r
				}\r
			}\r
		}\r
	];\r
\r
	classesFn: FktTableClassesFn<User> = (user) => {\r
		switch (user.status) {\r
			case 'active':\r
				return 'table-user-active';\r
			case 'inactive':\r
				return 'table-user-inactive';\r
			case 'pending':\r
				return 'table-user-pending';\r
			default:\r
				return '';\r
		}\r
	};\r
\r
	private addUser() {\r
		const newUser: User = {\r
			id: Date.now(),\r
			name: \`New User \${Math.floor(Math.random() * 1000)}\`,\r
			email: \`user\${Math.floor(Math.random() * 1000)}@example.com\`,\r
			role: 'user',\r
			status: 'active',\r
			joinedAt: new Date(),\r
			lastLogin: new Date()\r
		};\r
\r
		this.tableData.update(data => [...data, newUser]);\r
	}\r
}\r
`;var c=`<div class="container">\r
			<div class="container__actions">\r
				<fkt-button\r
					text="Loading State"\r
					color="primary"\r
					[theme]="currentState() === 'loading' ? 'raised' : 'stroked'"\r
					[disabled]="false"\r
					(click)="setState('loading')"\r
				/>\r
				<fkt-button\r
					text="Empty State"\r
					color="accent"\r
					[theme]="currentState() === 'empty' ? 'raised' : 'stroked'"\r
					[disabled]="false"\r
					(click)="setState('empty')"\r
				/>\r
				<fkt-button\r
					text="Populated State"\r
					color="success"\r
					[theme]="currentState() === 'populated' ? 'raised' : 'stroked'"\r
					[disabled]="false"\r
					(click)="setState('populated')"\r
				/>\r
			</div>\r
\r
			<fkt-table\r
				[data]="tableData()"\r
				[columnsFn]="columnsFn"\r
				[classesFn]="classesFn"\r
				[actionsFn]="actionsFn"\r
				[mainAction]="tableMainAction()"\r
				[loading]="tableLoading()"\r
				[noHeaderWhenEmpty]="noHeaderWhenEmpty()"\r
				[noResults]="tableNoResults()"\r
			/>\r
		</div>\r
`;var u=`.container {\r
	display: block;\r
\r
	&__actions {\r
		display: flex;\r
		gap: var(--fkt-space-xs);\r
		padding: var(--fkt-space-md);\r
		background-color: var(--fkt-color-neutral-100);\r
		border-radius: var(--fkt-radius-lg);\r
		margin-bottom: var(--fkt-space-md);\r
	}\r
}\r
\r
:host ::ng-deep {\r
	.table-user-active {\r
		background-color: var(--fkt-color-danger-opacity-10);\r
\r
		&:hover {\r
			background-color: var(--fkt-color-danger-opacity-20) !important;\r
		}\r
	}\r
\r
	.table-user-pending {\r
		background-color: var(--fkt-color-accent-opacity-10);\r
\r
		&:hover {\r
			background-color: var(--fkt-color-accent-opacity-20) !important;\r
		}\r
	}\r
\r
	.table-user-inactive {\r
		background-color: var(--fkt-color-neutral-100);\r
		opacity: 60%;\r
		filter: grayscale(1);\r
		cursor: pointer;\r
		pointer-events: none;\r
\r
		&:hover {\r
			background-color: var(--fkt-color-disabled) !important;\r
		}\r
	}\r
}\r
\r
fkt-table {\r
	background-color: var(--fkt-color-neutral-100);\r
}\r
`;var p=`import { Component, input, linkedSignal, signal } from '@angular/core';\r
import { FktButtonAction, FktButtonComponent } from 'frakton-ng/button';\r
import { FktTableActionFn, FktTableClassesFn, FktTableColumnFn, FktTableComponent } from 'frakton-ng/table';\r
import { FktNoResults } from 'frakton-ng/no-results';\r
import { FktIdentifiable } from 'frakton-ng/core';\r
\r
type TableState = 'loading' | 'empty' | 'populated';\r
\r
export interface User extends FktIdentifiable {\r
	name: string;\r
	email: string;\r
	role: 'admin' | 'user' | 'moderator';\r
	status: 'active' | 'inactive' | 'pending';\r
	joinedAt: Date;\r
	lastLogin?: Date;\r
}\r
\r
export const users: User[] = [\r
	{\r
		id: 1,\r
		name: 'John Doe',\r
		email: 'john.doe@example.com',\r
		role: 'admin',\r
		status: 'active',\r
		joinedAt: new Date('2023-01-15'),\r
		lastLogin: new Date('2024-08-20')\r
	},\r
	{\r
		id: 2,\r
		name: 'Jane Smith',\r
		email: 'jane.smith@example.com',\r
		role: 'user',\r
		status: 'active',\r
		joinedAt: new Date('2023-02-20'),\r
		lastLogin: new Date('2024-08-19')\r
	},\r
	{\r
		id: 3,\r
		name: 'Bob Johnson',\r
		email: 'bob.johnson@example.com',\r
		role: 'moderator',\r
		status: 'inactive',\r
		joinedAt: new Date('2023-03-10'),\r
		lastLogin: new Date('2024-08-10')\r
	},\r
	{\r
		id: 4,\r
		name: 'Alice Brown',\r
		email: 'alice.brown@example.com',\r
		role: 'user',\r
		status: 'pending',\r
		joinedAt: new Date('2024-08-15')\r
	}\r
];\r
\r
export const userMainAction: FktButtonAction = {\r
	identifier: 'add-user',\r
	text: 'Add User',\r
	theme: 'raised',\r
	color: 'primary',\r
	icon: 'plus',\r
	iconPosition: 'left',\r
	click: () => console.log('Add new user')\r
};\r
\r
\r
@Component({\r
	selector: 'fkt-table-examples-interactive-states',\r
	imports: [\r
		FktButtonComponent,\r
		FktTableComponent\r
	],\r
	templateUrl: './fkt-table-examples-interactive-states.component.html',\r
	styleUrl: './fkt-table-examples-interactive-states.component.scss'\r
})\r
export class FktTableExamplesInteractiveStatesComponent {\r
	data = input<User[]>(users);\r
	mainAction = input<FktButtonAction>(userMainAction);\r
	loading = input<boolean>(false);\r
	noHeaderWhenEmpty = input<boolean>(true);\r
	noResults = input<FktNoResults>({\r
		label: 'No data to display',\r
		description: 'The table is currently empty. Try loading some data or adding new records.',\r
		icon: { name: 'table-cells', size: '96px' },\r
	});\r
\r
	protected currentState = signal<TableState>('populated');\r
\r
	protected tableLoading = linkedSignal(() => {\r
		const state = this.currentState();\r
		const inputLoading = this.loading();\r
		return state === 'loading' || inputLoading;\r
	});\r
\r
	tableMainAction = linkedSignal((): FktButtonAction => {\r
		return {\r
			...this.mainAction(),\r
			click: () => this.addUser()\r
		}\r
	})\r
\r
	tableNoResults = linkedSignal((): FktNoResults => {\r
		return {\r
			...this.noResults(),\r
			action: {\r
				identifier: 'load-data',\r
				text: 'Load Sample Data',\r
				theme: 'raised',\r
				color: 'primary',\r
				icon: 'arrow-down-tray',\r
				iconPosition: 'left',\r
				click: () => this.addUser()\r
			}\r
		}\r
	})\r
\r
	protected tableData = linkedSignal(() => {\r
		const state = this.currentState();\r
		const inputData = this.data();\r
\r
		switch (state) {\r
			case 'loading':\r
				return inputData;\r
			case 'empty':\r
				return [];\r
			case 'populated':\r
				return inputData;\r
			default:\r
				return inputData;\r
		}\r
	});\r
\r
	protected columnsFn: FktTableColumnFn<User> = (user) => [\r
		{\r
			position: '1',\r
			name: 'Name',\r
			cell: {\r
				type: 'default',\r
				options: { value: user.name }\r
			}\r
		},\r
		{\r
			position: '2',\r
			name: 'Email',\r
			cell: {\r
				type: 'default',\r
				options: { value: user.email }\r
			}\r
		},\r
		{\r
			position: '3',\r
			name: 'Role',\r
			cell: {\r
				type: 'badge',\r
				options: {\r
					text: user.role,\r
					color: (() => {\r
						switch (user.role) {\r
							case "admin":\r
								return "info";\r
							case "moderator":\r
								return "warning";\r
							default:\r
								return "success"\r
						}\r
					})(),\r
					variant: "faded"\r
				}\r
			}\r
		},\r
		{\r
			position: '4',\r
			name: 'Status',\r
			cell: {\r
				type: 'badge',\r
				options: {\r
					text: user.status,\r
					color: (() => {\r
						switch (user.status) {\r
							case "active":\r
								return "success";\r
							case "pending":\r
								return "warning";\r
							default:\r
								return "danger"\r
						}\r
					})()\r
				}\r
			}\r
		}\r
	];\r
\r
	protected classesFn: FktTableClassesFn<User> = (user) => {\r
		switch (user.status) {\r
			case 'active':\r
				return 'table-user-active';\r
			case 'inactive':\r
				return 'table-user-inactive';\r
			case 'pending':\r
				return 'table-user-pending';\r
			default:\r
				return '';\r
		}\r
	};\r
\r
	protected actionsFn: FktTableActionFn<User> = (user) => [\r
		{\r
			identifier: 'view',\r
			condition: true,\r
			theme: 'basic',\r
			icon: 'eye',\r
			color: 'primary',\r
			ariaLabel: 'View user',\r
			click: () => console.log('View user:', user.name)\r
		},\r
		{\r
			identifier: 'edit',\r
			condition: user.status !== 'inactive',\r
			theme: 'basic',\r
			icon: 'pencil',\r
			color: 'success',\r
			ariaLabel: 'Edit user',\r
			click: () => console.log('Edit user:', user.name)\r
		},\r
		{\r
			identifier: 'delete',\r
			condition: user.role === 'admin',\r
			theme: 'basic',\r
			icon: 'trash',\r
			color: 'danger',\r
			ariaLabel: 'Delete user',\r
			click: () => console.log('Delete user:', user.name)\r
		}\r
	];\r
\r
	protected setState(newState: TableState): void {\r
		this.currentState.set(newState);\r
	}\r
\r
	private addUser(): void {\r
		this.setState('populated');\r
	}\r
}\r
`;var d=`<fkt-table\r
			[data]="data()"\r
			[columnsFn]="columnsFn"\r
			[classesFn]="classesFn"\r
			[actionsFn]="actionsFn"\r
			[mainAction]="tableMainAction()"\r
			[loading]="loading()"\r
			[noHeaderWhenEmpty]="noHeaderWhenEmpty()"\r
			[noResults]="tableNoResults()"\r
		/>`;var m=`:host ::ng-deep {\r
	.table-user-active {\r
		background-color: var(--fkt-color-danger-opacity-10);\r
\r
		&:hover {\r
			background-color: var(--fkt-color-danger-opacity-20) !important;\r
		}\r
	}\r
\r
	.table-user-pending {\r
		background-color: var(--fkt-color-accent-opacity-10);\r
\r
		&:hover {\r
			background-color: var(--fkt-color-accent-opacity-20) !important;\r
		}\r
	}\r
\r
	.table-user-inactive {\r
		background-color: var(--fkt-color-neutral-100);\r
		opacity: 60%;\r
		filter: grayscale(1);\r
		cursor: pointer;\r
		pointer-events: none;\r
\r
		&:hover {\r
			background-color: var(--fkt-color-neutral-100) !important;\r
		}\r
	}\r
}\r
\r
fkt-table {\r
	background-color: var(--fkt-color-neutral-100);\r
}\r
`;var k=`import { Component, input, linkedSignal } from '@angular/core';\r
import { FktIdentifiable } from 'frakton-ng/core';\r
import { FktTableActionFn, FktTableClassesFn, FktTableColumnFn, FktTableComponent } from 'frakton-ng/table';\r
import { FktButtonAction } from 'frakton-ng/button';\r
import { FktNoResults } from 'frakton-ng/no-results';\r
\r
export interface User extends FktIdentifiable {\r
	name: string;\r
	email: string;\r
	role: 'admin' | 'user' | 'moderator';\r
	status: 'active' | 'inactive' | 'pending';\r
	joinedAt: Date;\r
	lastLogin?: Date;\r
}\r
\r
export const users: User[] = [\r
	{\r
		id: 1,\r
		name: 'John Doe',\r
		email: 'john.doe@example.com',\r
		role: 'admin',\r
		status: 'active',\r
		joinedAt: new Date('2023-01-15'),\r
		lastLogin: new Date('2024-08-20')\r
	},\r
	{\r
		id: 2,\r
		name: 'Jane Smith',\r
		email: 'jane.smith@example.com',\r
		role: 'user',\r
		status: 'active',\r
		joinedAt: new Date('2023-02-20'),\r
		lastLogin: new Date('2024-08-19')\r
	},\r
	{\r
		id: 3,\r
		name: 'Bob Johnson',\r
		email: 'bob.johnson@example.com',\r
		role: 'moderator',\r
		status: 'inactive',\r
		joinedAt: new Date('2023-03-10'),\r
		lastLogin: new Date('2024-08-10')\r
	},\r
	{\r
		id: 4,\r
		name: 'Alice Brown',\r
		email: 'alice.brown@example.com',\r
		role: 'user',\r
		status: 'pending',\r
		joinedAt: new Date('2024-08-15')\r
	}\r
];\r
\r
export const userMainAction: FktButtonAction = {\r
	identifier: 'add-user',\r
	text: 'Add User',\r
	theme: 'raised',\r
	color: 'primary',\r
	icon: 'plus',\r
	iconPosition: 'left',\r
	click: () => console.log('Add new user')\r
};\r
\r
@Component({\r
	selector: 'fkt-table-examples-loading-state',\r
	imports: [\r
		FktTableComponent\r
	],\r
	templateUrl: './fkt-table-examples-loading-state.component.html',\r
	styleUrl: './fkt-table-examples-loading-state.component.scss'\r
})\r
export class FktTableExamplesLoadingStateComponent {\r
	data = input<User[]>(users);\r
	mainAction = input<FktButtonAction>(userMainAction);\r
	loading = input<boolean>(false);\r
	noHeaderWhenEmpty = input<boolean>(false);\r
	noResults = input<FktNoResults>({\r
		label: 'No data available',\r
		description: 'There are no records to display at this time.',\r
		icon: {name: 'document-text', size: '80px'}\r
	});\r
\r
	tableData = linkedSignal(this.data);\r
\r
	tableMainAction = linkedSignal((): FktButtonAction => {\r
		return {\r
			...this.mainAction(),\r
			click: () => this.addUser()\r
		}\r
	})\r
\r
	tableNoResults = linkedSignal((): FktNoResults => {\r
		return {\r
			...this.noResults(),\r
			action: {\r
				identifier: 'load-data',\r
				text: 'Load Sample Data',\r
				theme: 'raised',\r
				color: 'primary',\r
				icon: 'arrow-down-tray',\r
				iconPosition: 'left',\r
				click: () => this.addUser()\r
			}\r
		}\r
	})\r
\r
	protected columnsFn: FktTableColumnFn<User> = (user) => [\r
		{\r
			position: '1',\r
			name: 'Name',\r
			cell: {\r
				type: 'default',\r
				options: {value: user.name}\r
			}\r
		},\r
		{\r
			position: '2',\r
			name: 'Email',\r
			cell: {\r
				type: 'default',\r
				options: {value: user.email}\r
			}\r
		},\r
		{\r
			position: '3',\r
			name: 'Role',\r
			cell: {\r
				type: 'badge',\r
				options: {\r
					text: user.role,\r
					color: (() => {\r
						switch (user.role) {\r
							case "admin":\r
								return "info";\r
							case "moderator":\r
								return "warning";\r
							default:\r
								return "success"\r
						}\r
					})(),\r
					variant: "faded"\r
				}\r
			}\r
		},\r
		{\r
			position: '4',\r
			name: 'Status',\r
			cell: {\r
				type: 'badge',\r
				options: {\r
					text: user.status,\r
					color: (() => {\r
						switch (user.status) {\r
							case "active":\r
								return "success";\r
							case "pending":\r
								return "accent";\r
							default:\r
								return "danger"\r
						}\r
					})()\r
				}\r
			}\r
		}\r
	];\r
\r
	protected classesFn: FktTableClassesFn<User> = (user) => {\r
		switch (user.status) {\r
			case 'active':\r
				return 'table-user-active';\r
			case 'inactive':\r
				return 'table-user-inactive';\r
			case 'pending':\r
				return 'table-user-pending';\r
			default:\r
				return '';\r
		}\r
	};\r
\r
	protected actionsFn: FktTableActionFn<User> = (user) => [\r
		{\r
			identifier: 'view',\r
			condition: true,\r
			theme: 'basic',\r
			icon: 'eye',\r
			color: 'primary',\r
			ariaLabel: 'View user',\r
			click: () => console.log('View user:', user.name)\r
		},\r
		{\r
			identifier: 'edit',\r
			condition: user.status !== 'inactive',\r
			theme: 'basic',\r
			icon: 'pencil',\r
			color: 'success',\r
			ariaLabel: 'Edit user',\r
			click: () => console.log('Edit user:', user.name)\r
		},\r
		{\r
			identifier: 'delete',\r
			condition: user.role === 'admin',\r
			theme: 'basic',\r
			icon: 'trash',\r
			color: 'danger',\r
			ariaLabel: 'Delete user',\r
			click: () => console.log('Delete user:', user.name)\r
		}\r
	];\r
\r
	private addUser(): void {\r
		const newUser: User = {\r
			id: Date.now(),\r
			name: \`New User \${Math.floor(Math.random() * 1000)}\`,\r
			email: \`user\${Math.floor(Math.random() * 1000)}@example.com\`,\r
			role: 'user',\r
			status: 'active',\r
			joinedAt: new Date(),\r
			lastLogin: new Date()\r
		};\r
\r
		this.tableData.update(data => [...data, newUser]);\r
	}\r
}\r
`;var b=`<fkt-table\r
			[data]="data()"\r
			[columnsFn]="columnsFn"\r
			[classesFn]="classesFn"\r
			[actionsFn]="actionsFn"\r
			[mainAction]="mainAction()"\r
			[loading]="loading()"\r
			[noHeaderWhenEmpty]="noHeaderWhenEmpty()"\r
			[noResults]="noResults()"\r
		/>`;var g=`:host ::ng-deep {\r
	.table-product-no-stock {\r
		background-color: var(--fkt-color-danger-opacity-10);\r
\r
		&:hover {\r
			background-color: var(--fkt-color-danger-opacity-20) !important;\r
		}\r
	}\r
\r
	.table-product-discontinued {\r
		background-color: var(--fkt-color-neutral-100);\r
		opacity: 60%;\r
		filter: grayscale(1);\r
		cursor: pointer;\r
		pointer-events: none;\r
\r
		&:hover {\r
			background-color: var(--fkt-color-neutral-100) !important;\r
		}\r
	}\r
}\r
\r
fkt-table {\r
	background-color: var(--fkt-color-neutral-100);\r
}\r
`;var f=`import { Component, input } from '@angular/core';\r
import { FktTableActionFn, FktTableClassesFn, FktTableColumnFn, FktTableComponent } from 'frakton-ng/table';\r
import { FktButtonAction } from 'frakton-ng/button';\r
import { FktNoResults } from 'frakton-ng/no-results';\r
import { FktIdentifiable } from 'frakton-ng/core';\r
\r
export interface Product extends FktIdentifiable {\r
	name: string;\r
	category: string;\r
	price: number;\r
	stock: number;\r
	status: 'active' | 'inactive' | 'discontinued';\r
	createdAt: Date;\r
}\r
\r
export const products: Product[] = [\r
	{\r
		id: 1,\r
		name: 'Laptop Pro',\r
		category: 'Electronics',\r
		price: 1299.99,\r
		stock: 25,\r
		status: 'active',\r
		createdAt: new Date('2023-01-10')\r
	},\r
	{\r
		id: 2,\r
		name: 'Wireless Headphones',\r
		category: 'Electronics',\r
		price: 199.99,\r
		stock: 0,\r
		status: 'inactive',\r
		createdAt: new Date('2023-02-15')\r
	},\r
	{\r
		id: 3,\r
		name: 'Office Chair',\r
		category: 'Furniture',\r
		price: 299.99,\r
		stock: 12,\r
		status: 'active',\r
		createdAt: new Date('2023-03-20')\r
	},\r
	{\r
		id: 4,\r
		name: 'Standing Desk',\r
		category: 'Furniture',\r
		price: 599.99,\r
		stock: 8,\r
		status: 'discontinued',\r
		createdAt: new Date('2023-01-25')\r
	}\r
];\r
\r
export const productMainAction: FktButtonAction = {\r
	identifier: 'add-product',\r
	text: 'Add Product',\r
	theme: 'raised',\r
	color: 'primary',\r
	icon: 'plus',\r
	iconPosition: 'left',\r
	click: () => console.log('Add new product')\r
};\r
\r
@Component({\r
	selector: 'fkt-table-examples-product-table',\r
	imports: [\r
		FktTableComponent\r
	],\r
	templateUrl: './fkt-table-examples-product-table.component.html',\r
	styleUrl: './fkt-table-examples-product-table.component.scss'\r
})\r
export class FktTableExamplesProductTableComponent {\r
	data = input<Product[]>(products);\r
\r
	mainAction = input<FktButtonAction>(productMainAction);\r
	loading = input<boolean>(false);\r
	noHeaderWhenEmpty = input<boolean>(false);\r
	noResults = input<FktNoResults>({\r
		label: 'No data available',\r
		description: 'There are no records to display at this time.',\r
		icon: {name: 'document-text', size: '80px'}\r
	});\r
\r
	columnsFn: FktTableColumnFn<Product> = (product) => [\r
		{\r
			position: '1',\r
			name: 'Product',\r
			cell: {\r
				type: 'default',\r
				options: {value: product.name}\r
			}\r
		},\r
		{\r
			position: '2',\r
			name: 'Category',\r
			cell: {\r
				type: 'default',\r
				options: {value: product.category}\r
			}\r
		},\r
		{\r
			position: '3',\r
			name: 'Price',\r
			cell: {\r
				type: 'badge',\r
				options: {\r
					text: \`$\${product.price.toFixed(2)}\`,\r
					color: "success",\r
					variant: "faded"\r
				}\r
			}\r
		},\r
		{\r
			position: '4',\r
			name: 'Stock',\r
			cell: {\r
				type: 'badge',\r
				options: {\r
					text: product.stock.toString(),\r
					color: "info",\r
					variant: "opaque"\r
				}\r
			}\r
		}\r
	];\r
\r
	classesFn: FktTableClassesFn<Product> = (product) => {\r
		if (product.stock === 0) {\r
			return 'table-product-no-stock';\r
		}\r
		if (product.status === 'discontinued') {\r
			return 'table-product-discontinued';\r
		}\r
		return '';\r
	};\r
\r
	actionsFn: FktTableActionFn<Product> = (product) => [\r
		{\r
			identifier: 'edit',\r
			condition: product.status !== 'discontinued',\r
			icon: 'pencil',\r
			color: 'success',\r
			theme: 'basic',\r
			ariaLabel: 'Edit product',\r
			click: () => console.log('Edit product:', product.name)\r
		},\r
		{\r
			identifier: 'delete',\r
			condition: true,\r
			icon: 'trash',\r
			color: 'danger',\r
			theme: 'basic',\r
			ariaLabel: 'Delete product',\r
			click: () => console.log('Delete product:', product.name)\r
		}\r
	];\r
}\r
`;var h=`<fkt-table\r
			[data]="tableData()"\r
			[columnsFn]="columnsFn"\r
			[classesFn]="classesFn"\r
			[actionsFn]="actionsFn"\r
			[mainAction]="mainAction()"\r
			[loading]="loading()"\r
			[noHeaderWhenEmpty]="noHeaderWhenEmpty()"\r
			[noResults]="noResults()"\r
		/>`;var F=`:host ::ng-deep {\r
	.table-user-active {\r
		background-color: var(--fkt-color-danger-opacity-10);\r
\r
		&:hover {\r
			background-color: var(--fkt-color-danger-opacity-20) !important;\r
		}\r
	}\r
\r
	.table-user-pending {\r
		background-color: var(--fkt-color-accent-opacity-10);\r
\r
		&:hover {\r
			background-color: var(--fkt-color-accent-opacity-20) !important;\r
		}\r
	}\r
\r
	.table-user-inactive {\r
		background-color: var(--fkt-color-neutral-100);\r
		opacity: 60%;\r
		filter: grayscale(1);\r
		cursor: pointer;\r
		pointer-events: none;\r
\r
		&:hover {\r
			background-color: var(--fkt-color-neutral-100) !important;\r
		}\r
	}\r
}\r
\r
fkt-table {\r
	background-color: var(--fkt-color-neutral-100);\r
}\r
`;var v=`import { Component, input, linkedSignal } from '@angular/core';\r
import { FktTableActionFn, FktTableClassesFn, FktTableColumnFn, FktTableComponent } from 'frakton-ng/table';\r
import { FktButtonAction } from 'frakton-ng/button';\r
import { FktNoResults } from 'frakton-ng/no-results';\r
import { FktIdentifiable } from 'frakton-ng/core';\r
\r
export interface User extends FktIdentifiable {\r
	name: string;\r
	email: string;\r
	role: 'admin' | 'user' | 'moderator';\r
	status: 'active' | 'inactive' | 'pending';\r
	joinedAt: Date;\r
	lastLogin?: Date;\r
}\r
\r
export const users: User[] = [\r
	{\r
		id: 1,\r
		name: 'John Doe',\r
		email: 'john.doe@example.com',\r
		role: 'admin',\r
		status: 'active',\r
		joinedAt: new Date('2023-01-15'),\r
		lastLogin: new Date('2024-08-20')\r
	},\r
	{\r
		id: 2,\r
		name: 'Jane Smith',\r
		email: 'jane.smith@example.com',\r
		role: 'user',\r
		status: 'active',\r
		joinedAt: new Date('2023-02-20'),\r
		lastLogin: new Date('2024-08-19')\r
	},\r
	{\r
		id: 3,\r
		name: 'Bob Johnson',\r
		email: 'bob.johnson@example.com',\r
		role: 'moderator',\r
		status: 'inactive',\r
		joinedAt: new Date('2023-03-10'),\r
		lastLogin: new Date('2024-08-10')\r
	},\r
	{\r
		id: 4,\r
		name: 'Alice Brown',\r
		email: 'alice.brown@example.com',\r
		role: 'user',\r
		status: 'pending',\r
		joinedAt: new Date('2024-08-15')\r
	}\r
];\r
\r
export const userMainAction: FktButtonAction = {\r
	identifier: 'add-user',\r
	text: 'Add User',\r
	theme: 'raised',\r
	color: 'primary',\r
	icon: 'plus',\r
	iconPosition: 'left',\r
	click: () => console.log('Add new user')\r
};\r
\r
@Component({\r
	selector: 'fkt-table-examples-table-with-actions',\r
	imports: [\r
		FktTableComponent\r
	],\r
	templateUrl: './fkt-table-examples-table-with-actions.component.html',\r
	styleUrl: './fkt-table-examples-table-with-actions.component.scss'\r
})\r
export class FktTableExamplesTableWithActionsComponent {\r
	data = input<User[]>(users);\r
	mainAction = input<FktButtonAction | undefined>(userMainAction);\r
	loading = input<boolean>(false);\r
	noHeaderWhenEmpty = input<boolean>(false);\r
	noResults = input<FktNoResults>({\r
		label: 'No users found',\r
		description: 'There are no users to display. Add a new user to get started.',\r
		icon: {name: 'user-group', size: '80px'},\r
		action: {\r
			identifier: 'add-user-from-empty',\r
			text: 'Add User',\r
			theme: 'raised',\r
			color: 'primary',\r
			icon: 'plus',\r
			iconPosition: 'left',\r
			click: () => {\r
				this.addUser();\r
			}\r
		}\r
	});\r
\r
	protected tableData = linkedSignal<User[]>(this.data);\r
\r
	actionsFn: FktTableActionFn<User> = (user) => [\r
		{\r
			identifier: 'view',\r
			condition: true,\r
			theme: 'basic',\r
			icon: 'eye',\r
			color: 'primary',\r
			ariaLabel: 'View user',\r
			click: () => this.viewUser(user)\r
		},\r
		{\r
			identifier: 'edit',\r
			condition: user.status !== 'inactive',\r
			theme: 'basic',\r
			icon: 'pencil',\r
			color: 'success',\r
			ariaLabel: 'Edit user',\r
			click: () => this.editUser(user)\r
		},\r
		{\r
			identifier: 'toggle-status',\r
			condition: true,\r
			theme: 'basic',\r
			icon: user.status === 'active' ? 'pause' : 'play',\r
			color: user.status === 'active' ? 'accent' : 'success',\r
			ariaLabel: user.status === 'active' ? 'Deactivate user' : 'Activate user',\r
			click: () => this.toggleUserStatus(user)\r
		},\r
		{\r
			identifier: 'delete',\r
			condition: user.role !== 'admin',\r
			theme: 'basic',\r
			icon: 'trash',\r
			color: 'danger',\r
			ariaLabel: 'Delete user',\r
			click: () => this.deleteUser(user)\r
		}\r
	];\r
\r
	columnsFn: FktTableColumnFn<User> = (user) => [\r
		{\r
			position: '1',\r
			name: 'Name',\r
			cell: {\r
				type: 'default',\r
				options: { value: user.name }\r
			}\r
		},\r
		{\r
			position: '2',\r
			name: 'Email',\r
			cell: {\r
				type: 'default',\r
				options: { value: user.email }\r
			}\r
		},\r
		{\r
			position: '3',\r
			name: 'Role',\r
			cell: {\r
				type: 'badge',\r
				options: {\r
					text: user.role,\r
					color: (() => {\r
						switch (user.role) {\r
							case "admin":\r
								return "info";\r
							case "moderator":\r
								return "warning";\r
							default:\r
								return "success"\r
						}\r
					})(),\r
					variant: "faded"\r
				}\r
			}\r
		},\r
		{\r
			position: '4',\r
			name: 'Status',\r
			cell: {\r
				type: 'badge',\r
				options: {\r
					text: user.status,\r
					color: (() => {\r
						switch (user.status) {\r
							case "active":\r
								return "success";\r
							case "pending":\r
								return "warning";\r
							default:\r
								return "danger"\r
						}\r
					})()\r
				}\r
			}\r
		}\r
	];\r
\r
	classesFn: FktTableClassesFn<User> = (user) => {\r
		switch (user.status) {\r
			case 'active':\r
				return 'table-user-active';\r
			case 'inactive':\r
				return 'table-user-inactive';\r
			case 'pending':\r
				return 'table-user-pending';\r
			default:\r
				return '';\r
		}\r
	};\r
\r
	private viewUser(user: User) {\r
		console.log('Viewing user:', user);\r
	}\r
\r
	private editUser(user: User) {\r
		console.log('Editing user:', user);\r
	}\r
\r
	private toggleUserStatus(userToToggle: User) {\r
		this.tableData.update(data => {\r
			return data.map(user => {\r
					if (user.id !== userToToggle.id) return user;\r
\r
					return {\r
						...user,\r
						status: userToToggle.status === 'active' ? 'inactive' : 'active' as User['status']\r
					}\r
				}\r
			)\r
		});\r
	}\r
\r
	private deleteUser(userToRemove: User) {\r
		this.tableData.update(users => users.filter(user => user.id !== userToRemove.id));\r
	}\r
\r
	private addUser(): void {\r
		const newUser: User = {\r
			id: Date.now(),\r
			name: \`New User \${Math.floor(Math.random() * 1000)}\`,\r
			email: \`user\${Math.floor(Math.random() * 1000)}@example.com\`,\r
			role: 'user',\r
			status: 'active',\r
			joinedAt: new Date(),\r
			lastLogin: new Date()\r
		};\r
\r
		this.tableData.update(data => [...data, newUser]);\r
	}\r
}\r
`;var y=`<fkt-table\r
			[data]="data()"\r
			[columnsFn]="columnsFn"\r
			[classesFn]="classesFn"\r
			[actionsFn]="actionsFn"\r
			[mainAction]="mainAction()"\r
			[loading]="loading()"\r
			[noHeaderWhenEmpty]="noHeaderWhenEmpty()"\r
			[noResults]="noResults()"\r
		/>`;var x=`:host ::ng-deep {\r
	.table-task-completed {\r
		background-color: var(--fkt-color-success-opacity-10);\r
\r
		&:hover {\r
			background-color: var(--fkt-color-success-opacity-20) !important;\r
		}\r
	}\r
\r
	.table-task-in-progress {\r
		background-color: #155DFC14;\r
\r
		&:hover {\r
			background-color: var(--fkt-color-info-opacity-20) !important;\r
		}\r
	}\r
\r
	.table-task-cancelled {\r
		background-color: var(--fkt-color-danger-opacity-10);\r
\r
		&:hover {\r
			background-color: var(--fkt-color-danger-opacity-20) !important;\r
		}\r
	}\r
}\r
\r
fkt-table {\r
	background-color: var(--fkt-color-neutral-100);\r
}\r
`;var T=`import { Component, input } from '@angular/core';\r
import { FktTableActionFn, FktTableClassesFn, FktTableColumnFn, FktTableComponent } from 'frakton-ng/table';\r
import { FktButtonAction } from 'frakton-ng/button';\r
import { FktNoResults } from 'frakton-ng/no-results';\r
import { FktIdentifiable } from 'frakton-ng/core';\r
\r
export interface Task extends FktIdentifiable {\r
	title: string;\r
	description: string;\r
	priority: 'high' | 'medium' | 'low';\r
	status: 'todo' | 'in-progress' | 'completed' | 'cancelled';\r
	assignee: string;\r
	dueDate: Date;\r
	completedAt?: Date;\r
}\r
\r
export const taskMainAction: FktButtonAction = {\r
	identifier: 'add-task',\r
	text: 'New Task',\r
	theme: 'raised',\r
	color: 'primary',\r
	icon: 'plus',\r
	iconPosition: 'left',\r
	click: () => console.log('Add new task')\r
};\r
\r
export const tasks: Task[] = [\r
	{\r
		id: 1,\r
		title: 'Update documentation',\r
		description: 'Update the API documentation with recent changes',\r
		priority: 'high',\r
		status: 'in-progress',\r
		assignee: 'John Doe',\r
		dueDate: new Date('2024-08-25')\r
	},\r
	{\r
		id: 2,\r
		title: 'Fix login bug',\r
		description: 'Resolve the authentication issue on mobile devices',\r
		priority: 'high',\r
		status: 'todo',\r
		assignee: 'Jane Smith',\r
		dueDate: new Date('2024-08-23')\r
	},\r
	{\r
		id: 3,\r
		title: 'Implement search feature',\r
		description: 'Add search functionality to the products page',\r
		priority: 'medium',\r
		status: 'completed',\r
		assignee: 'Bob Johnson',\r
		dueDate: new Date('2024-08-20'),\r
		completedAt: new Date('2024-08-19')\r
	}\r
];\r
\r
@Component({\r
	selector: 'fkt-table-examples-task-table',\r
	imports: [\r
		FktTableComponent\r
	],\r
	templateUrl: './fkt-table-examples-task-table.component.html',\r
	styleUrl: './fkt-table-examples-task-table.component.scss'\r
})\r
export class FktTableExamplesTaskTableComponent {\r
	data = input<Task[]>(tasks);\r
\r
	mainAction = input<FktButtonAction>(taskMainAction);\r
	loading = input<boolean>(false);\r
	noHeaderWhenEmpty = input<boolean>(false);\r
	noResults = input<FktNoResults>({\r
		label: 'No data available',\r
		description: 'There are no records to display at this time.',\r
		icon: {name: 'document-text', size: '80px'}\r
	});\r
\r
	protected columnsFn: FktTableColumnFn<Task> = (task) => [\r
		{\r
			position: '1',\r
			name: 'Task',\r
			cell: {\r
				type: 'default',\r
				options: { value: task.title }\r
			}\r
		},\r
		{\r
			position: '2',\r
			name: 'Assignee',\r
			cell: {\r
				type: 'default',\r
				options: { value: task.assignee }\r
			}\r
		},\r
		{\r
			position: '3',\r
			name: 'Priority',\r
			cell: {\r
				type: 'badge',\r
				options: {\r
					text: task.priority,\r
					color: (() => {\r
						switch (task.priority) {\r
							case "high":\r
								return "danger";\r
							case "medium":\r
								return "warning";\r
							default:\r
								return "info"\r
						}\r
					})()\r
				}\r
			}\r
		},\r
		{\r
			position: '4',\r
			name: 'Status',\r
			cell: {\r
				type: 'badge',\r
				options: {\r
					text: task.status,\r
					color: (() => {\r
						switch (task.status) {\r
							case "todo":\r
								return "success";\r
							case "completed":\r
								return "info";\r
							case "in-progress":\r
								return "warning";\r
							default:\r
								return "danger"\r
						}\r
					})()\r
				}\r
			}\r
		}\r
	];\r
\r
	protected classesFn: FktTableClassesFn<Task> = (task) => {\r
		switch (task.status) {\r
			case 'completed':\r
				return 'table-task-completed';\r
			case 'in-progress':\r
				return 'table-task-in-progress';\r
			case 'cancelled':\r
				return 'table-task-cancelled';\r
			default:\r
				return '';\r
		}\r
	};\r
\r
	protected actionsFn: FktTableActionFn<Task> = (task) => [\r
		{\r
			identifier: 'complete',\r
			condition: task.status !== 'completed' && task.status !== 'cancelled',\r
			icon: 'check',\r
			color: 'success',\r
			theme: 'basic',\r
			ariaLabel: 'Complete task',\r
			click: () => console.log('Complete task:', task.title)\r
		},\r
		{\r
			identifier: 'edit',\r
			condition: task.status !== 'completed',\r
			icon: 'pencil',\r
			color: 'primary',\r
			theme: 'basic',\r
			ariaLabel: 'Edit task',\r
			click: () => console.log('Edit task:', task.title)\r
		},\r
		{\r
			identifier: 'cancel',\r
			condition: task.status !== 'completed' && task.status !== 'cancelled',\r
			icon: 'x-mark',\r
			color: 'danger',\r
			theme: 'basic',\r
			ariaLabel: 'Cancel task',\r
			click: () => console.log('Cancel task:', task.title)\r
		}\r
	];\r
}\r
`;var zt={FktTableExamplesBasicTableComponent:{name:"FktTableExamplesBasicTable",files:[{name:"fkt-table-examples-basic-table.component.html",content:t,language:"html"},{name:"fkt-table-examples-basic-table.component.ts",content:a,language:"typescript"},{name:"fkt-table-examples-basic-table.component.scss",content:e,language:"css"}]},FktTableExamplesCustomCellsComponent:{name:"FktTableExamplesCustomCells",files:[{name:"fkt-table-examples-custom-cells.component.html",content:o,language:"html"},{name:"fkt-table-examples-custom-cells.component.ts",content:s,language:"typescript"},{name:"fkt-table-examples-custom-cells.component.scss",content:n,language:"css"}]},FktTableExamplesEmptyStateComponent:{name:"FktTableExamplesEmptyState",files:[{name:"fkt-table-examples-empty-state.component.html",content:r,language:"html"},{name:"fkt-table-examples-empty-state.component.ts",content:l,language:"typescript"},{name:"fkt-table-examples-empty-state.component.scss",content:i,language:"css"}]},FktTableExamplesInteractiveStatesComponent:{name:"FktTableExamplesInteractiveStates",files:[{name:"fkt-table-examples-interactive-states.component.html",content:c,language:"html"},{name:"fkt-table-examples-interactive-states.component.ts",content:p,language:"typescript"},{name:"fkt-table-examples-interactive-states.component.scss",content:u,language:"css"}]},FktTableExamplesLoadingStateComponent:{name:"FktTableExamplesLoadingState",files:[{name:"fkt-table-examples-loading-state.component.html",content:d,language:"html"},{name:"fkt-table-examples-loading-state.component.ts",content:k,language:"typescript"},{name:"fkt-table-examples-loading-state.component.scss",content:m,language:"css"}]},FktTableExamplesProductTableComponent:{name:"FktTableExamplesProductTable",files:[{name:"fkt-table-examples-product-table.component.html",content:b,language:"html"},{name:"fkt-table-examples-product-table.component.ts",content:f,language:"typescript"},{name:"fkt-table-examples-product-table.component.scss",content:g,language:"css"}]},FktTableExamplesTableWithActionsComponent:{name:"FktTableExamplesTableWithActions",files:[{name:"fkt-table-examples-table-with-actions.component.html",content:h,language:"html"},{name:"fkt-table-examples-table-with-actions.component.ts",content:v,language:"typescript"},{name:"fkt-table-examples-table-with-actions.component.scss",content:F,language:"css"}]},FktTableExamplesTaskTableComponent:{name:"FktTableExamplesTaskTable",files:[{name:"fkt-table-examples-task-table.component.html",content:y,language:"html"},{name:"fkt-table-examples-task-table.component.ts",content:T,language:"typescript"},{name:"fkt-table-examples-task-table.component.scss",content:x,language:"css"}]}};export{zt as default};
