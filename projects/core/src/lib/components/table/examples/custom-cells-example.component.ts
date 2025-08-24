import { Component, computed, input } from '@angular/core';
import { TableComponent } from '../table.component';
import { FktButtonAction } from '../../button';
import {
	createProductActions,
	createProductClasses,
	createTaskActions,
	createTaskClasses,
	mockProducts,
	mockTasks,
	Product,
	Task
} from './table-mock-data';
import { FktNoResults } from '../../no-results';
import { FktTableActionFn, FktTableClassesFn, FktTableColumnFn } from '../fkt-table.types';
import { FktIconName } from '../../../shared/types';

@Component({
	selector: 'custom-cells-example',
	template: `
		<div class="space-y-8">
			<!-- Product Table with Custom Formatting -->
			<div>
				<h3 class="text-lg font-semibold mb-4 text-gray-800">Products - Custom Price and Status Formatting</h3>
				<fkt-table
					[data]="productData()"
					[columnsFn]="productColumns()"
					[classesFn]="productClassesFn()"
					[actionsFn]="productActionsFn()"
					[mainAction]="productMainAction()"
					[loading]="loading()"
					[noHeaderWhenEmpty]="noHeaderWhenEmpty()"
					[noResults]="productNoResults()"
				/>
			</div>

			<!-- Task Table with Status and Priority Indicators -->
			<div>
				<h3 class="text-lg font-semibold mb-4 text-gray-800">Tasks - Status and Priority Indicators</h3>
				<fkt-table
					[data]="taskData()"
					[columnsFn]="taskColumns()"
					[classesFn]="taskClassesFn()"
					[actionsFn]="taskActionsFn()"
					[mainAction]="taskMainAction()"
					[loading]="loading()"
					[noHeaderWhenEmpty]="noHeaderWhenEmpty()"
					[noResults]="taskNoResults()"
				/>
			</div>
		</div>
	`,
	standalone: true,
	imports: [TableComponent]
})
export class CustomCellsExampleComponent {
	// Input properties that can be controlled from stories
	loading = input<boolean>(false);
	noHeaderWhenEmpty = input<boolean>(false);

	// Product data and configurations
	productData = input<Product[]>(mockProducts);

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
					text: {value:
							this.formatProductStatus(product.status)
					},
					actions: [{
						identifier: 'toggle-product-status',
						icon: product.status === 'active' ? 'check-circle' : 'x-circle',
						theme: 'basic',
						color: product.status === 'active' ? 'green' : 'red',
						click: () => this.toggleProductStatus(product)
					}]
				}
			}
		}
	]);

	productClassesFn = computed<FktTableClassesFn<Product>>(() => createProductClasses);
	productActionsFn = computed<FktTableActionFn<Product>>(() => createProductActions);

	productMainAction = computed<FktButtonAction>(() => ({
		identifier: 'add-product',
		text: 'Add Product',
		theme: 'raised',
		color: 'primary',
		icon: 'plus',
		iconPosition: 'left',
		click: () => console.log('Add new product')
	}));

	productNoResults = computed<FktNoResults>(() => ({
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
	}));

	// Task data and configurations
	taskData = input<Task[]>(mockTasks);

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

	taskClassesFn = computed<FktTableClassesFn<Task>>(() => createTaskClasses);
	taskActionsFn = computed<FktTableActionFn<Task>>(() => createTaskActions);

	taskMainAction = computed<FktButtonAction>(() => ({
		identifier: 'add-task',
		text: 'New Task',
		theme: 'raised',
		color: 'primary',
		icon: 'plus',
		iconPosition: 'left',
		click: () => console.log('Add new task')
	}));

	taskNoResults = computed<FktNoResults>(() => ({
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
	}));

	// Helper methods for product formatting
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

	// Helper methods for task formatting
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

	private getPriorityColor(priority: Task['priority']): string {
		switch (priority) {
			case 'high':
				return 'red';
			case 'medium':
				return 'yellow';
			case 'low':
				return 'green';
			default:
				return 'gray';
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

	private getStatusColor(status: Task['status']): string {
		switch (status) {
			case 'todo':
				return 'gray';
			case 'in-progress':
				return 'blue';
			case 'completed':
				return 'green';
			case 'cancelled':
				return 'red';
			default:
				return 'gray';
		}
	}

	private changePriority(task: Task): void {
		console.log('Change priority for task:', task);
	}

	private changeTaskStatus(task: Task): void {
		console.log('Change status for task:', task);
	}
}
