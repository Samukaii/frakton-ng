import { Component, computed, input, signal } from '@angular/core';
import { Product, productData, Task, taskData } from '../table-mock-data';
import { FktTableActionFn, FktTableClassesFn, FktTableColumnFn, FktTableComponent } from 'frakton-ng/table';
import { FktButtonAction } from 'frakton-ng/button';
import { FktNoResults } from 'frakton-ng/no-results';
import { FktColor } from 'frakton-ng/core';
import { FktIconName } from 'frakton-ng/icon';

@Component({
	selector: 'fkt-table-examples-custom-cells',
	imports: [
		FktTableComponent
	],
	templateUrl: './fkt-table-examples-custom-cells.component.html',
	styleUrl: './fkt-table-examples-custom-cells.component.scss'
})
export class FktTableExamplesCustomCellsComponent {
	loading = input<boolean>(false);
	noHeaderWhenEmpty = input<boolean>(false);

	productData = signal<Product[]>(productData.products);
	taskData = signal<Task[]>(taskData.tasks);

	productColumns = computed<FktTableColumnFn<Product>>(() => (product) => [
		{
			position: '1',
			name: 'Product',
			cell: {
				type: 'default',
				options: {value: product.name}
			}
		},
		{
			position: '2',
			name: 'Category',
			cell: {
				type: 'default',
				options: {value: product.category}
			}
		},
		{
			position: '3',
			name: 'Price',
			cell: {
				type: 'default',
				options: {
					value: new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD'
					}).format(product.price)
				}
			}
		},
		{
			position: '4',
			name: 'Stock',
			cell: {
				type: 'default',
				options: {
					value: product.stock === 0
						? 'Out of Stock'
						: `${product.stock} units`
				}
			}
		},
		{
			position: '5',
			name: 'Status',
			cell: {
				type: 'with-action',
				options: {
					text: {
						value:
							this.formatProductStatus(product.status)
					},
					actions: [{
						identifier: 'toggle-product-status',
						icon: product.status === 'active' ? 'check-circle' : 'x-circle',
						theme: 'basic',
						color: product.status === 'active' ? 'success' : 'danger',
						click: () => this.toggleProductStatus(product)
					}]
				}
			}
		}
	]);

	taskColumns = computed<FktTableColumnFn<Task>>(() => (task) => [
		{
			position: '1',
			name: 'Task',
			cell: {
				type: 'default',
				options: {value: task.title}
			}
		},
		{
			position: '2',
			name: 'Assignee',
			cell: {
				type: 'default',
				options: {value: task.assignee}
			}
		},
		{
			position: '3',
			name: 'Priority',
			cell: {
				type: 'with-action',
				options: {
					text: {
						value: this.formatPriority(task.priority)
					},
					actions: [
						{
							identifier: 'change-priority',
							icon: this.getPriorityIcon(task.priority),
							color: this.getPriorityColor(task.priority),
							tooltip: "Change priority",
							theme: 'basic',
							condition: true,
							click: () => this.changePriority(task)
						}
					]
				}
			}
		},
		{
			position: '4',
			name: 'Status',
			cell: {
				type: 'with-action',
				options: {
					text: {value: this.formatTaskStatus(task.status)},
					actions: [
						{
							identifier: 'change-task',
							condition: true,
							theme: 'basic',
							color: this.getStatusColor(task.status),
							icon: this.getStatusIcon(task.status),
							click: () => this.changeTaskStatus(task)
						}
					]
				}
			}
		},
		{
			position: '5',
			name: 'Due Date',
			cell: {
				type: 'default',
				options: {
					value: new Intl.DateTimeFormat('en-US', {
						month: 'short',
						day: 'numeric',
						year: 'numeric'
					}).format(task.dueDate)
				}
			}
		}
	]);

	productClassesFn: FktTableClassesFn<Product> = (product) => {
		if (product.stock === 0) {
			return 'table-product-no-stock';
		}
		if (product.status === 'discontinued') {
			return 'table-product-discontinued';
		}
		return '';
	};

	taskClassesFn: FktTableClassesFn<Task> = (task) => {
		switch (task.status) {
			case 'completed':
				return 'table-task-completed';
			case 'in-progress':
				return 'table-task-in-progress';
			case 'cancelled':
				return 'table-task-cancelled';
			default:
				return '';
		}
	};

	productActionsFn: FktTableActionFn<Product> = (product) => [
		{
			identifier: 'edit',
			condition: product.status !== 'discontinued',
			icon: 'pencil',
			color: 'success',
			theme: 'basic',
			click: () => console.log('Edit product:', product.name)
		},
		{
			identifier: 'delete',
			condition: true,
			icon: 'trash',
			color: 'danger',
			theme: 'basic',
			click: () => console.log('Delete product:', product.name)
		}
	];

	taskActionsFn: FktTableActionFn<Task> = (task) => [
		{
			identifier: 'complete',
			condition: task.status !== 'completed' && task.status !== 'cancelled',
			icon: 'check',
			color: 'success',
			theme: 'basic',
			click: () => console.log('Complete task:', task.title)
		},
		{
			identifier: 'edit',
			condition: task.status !== 'completed',
			icon: 'pencil',
			color: 'primary',
			theme: 'basic',
			click: () => console.log('Edit task:', task.title)
		},
		{
			identifier: 'cancel',
			condition: task.status !== 'completed' && task.status !== 'cancelled',
			icon: 'x-mark',
			color: 'danger',
			theme: 'basic',
			click: () => console.log('Cancel task:', task.title)
		}
	];

	taskMainAction = computed<FktButtonAction>(() => ({
		identifier: 'add-task',
		text: 'New Task',
		theme: 'raised',
		color: 'primary',
		icon: 'plus',
		iconPosition: 'left',
		click: () => console.log('Add new task')
	}));
	productMainAction = computed<FktButtonAction>(() => ({
		identifier: 'add-product',
		text: 'Add Product',
		theme: 'raised',
		color: 'primary',
		icon: 'plus',
		iconPosition: 'left',
		click: () => console.log('Add new product')
	}));


	taskNoResults: FktNoResults = {
		label: 'No tasks assigned',
		description: 'You don\'t have any tasks yet. Create your first task to get started.',
		icon: {name: 'clipboard-document-list', size: '80px'},
		action: {
			identifier: 'add-first-task',
			text: 'Create Task',
			theme: 'raised',
			color: 'primary',
			icon: 'plus',
			iconPosition: 'left',
			click: () => console.log('Add first task')
		}
	};

	productNoResults: FktNoResults = {
		label: 'No products available',
		description: 'Your product catalog is empty. Add some products to get started.',
		icon: {name: 'shopping-bag', size: '80px'},
		action: {
			identifier: 'add-first-product',
			text: 'Add Product',
			theme: 'raised',
			color: 'primary',
			icon: 'plus',
			iconPosition: 'left',
			click: () => console.log('Add first product')
		}
	};

	private formatProductStatus(status: Product['status']): string {
		switch (status) {
			case 'active':
				return 'Active';
			case 'inactive':
				return 'Inactive';
			case 'discontinued':
				return 'Discontinued';
			default:
				return status;
		}
	}

	private toggleProductStatus(product: Product): void {
		console.log('Toggle product status:', product);
	}

	private formatPriority(priority: Task['priority']): string {
		return priority.charAt(0).toUpperCase() + priority.slice(1);
	}

	private getPriorityIcon(priority: Task['priority']): FktIconName {
		switch (priority) {
			case 'high':
				return 'arrow-up';
			case 'medium':
				return 'minus';
			case 'low':
				return 'arrow-down';
			default:
				return 'minus';
		}
	}

	private getPriorityColor(priority: Task['priority']): FktColor {
		switch (priority) {
			case 'high':
				return 'danger';
			case 'medium':
				return 'accent';
			default:
				return 'success';
		}
	}

	private formatTaskStatus(status: Task['status']): string {
		switch (status) {
			case 'todo':
				return 'To Do';
			case 'in-progress':
				return 'In Progress';
			case 'completed':
				return 'Completed';
			case 'cancelled':
				return 'Cancelled';
			default:
				return status;
		}
	}

	private getStatusIcon(status: Task['status']): FktIconName {
		switch (status) {
			case 'todo':
				return 'clock';
			case 'in-progress':
				return 'play';
			case 'completed':
				return 'check';
			case 'cancelled':
				return 'x-mark';
			default:
				return 'clock';
		}
	}

	private getStatusColor(status: Task['status']): FktColor {
		switch (status) {
			case 'in-progress':
				return 'accent';
			case 'completed':
				return 'success';
			case 'cancelled':
				return 'danger';
			default:
				return 'info';
		}
	}

	private changePriority(task: Task): void {
		console.log('Change priority for task:', task);
	}

	private changeTaskStatus(task: Task): void {
		console.log('Change status for task:', task);
	}
}
