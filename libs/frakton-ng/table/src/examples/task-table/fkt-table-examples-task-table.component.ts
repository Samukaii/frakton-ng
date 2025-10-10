import { Component, input } from '@angular/core';
import { FktTableActionFn, FktTableClassesFn, FktTableColumnFn, FktTableComponent } from 'frakton-ng/table';
import { FktButtonAction } from 'frakton-ng/button';
import { FktNoResults } from 'frakton-ng/no-results';
import { FktIdentifiable } from 'frakton-ng/core';

export interface Task extends FktIdentifiable {
	title: string;
	description: string;
	priority: 'high' | 'medium' | 'low';
	status: 'todo' | 'in-progress' | 'completed' | 'cancelled';
	assignee: string;
	dueDate: Date;
	completedAt?: Date;
}

export const taskMainAction: FktButtonAction = {
	identifier: 'add-task',
	text: 'New Task',
	theme: 'raised',
	color: 'primary',
	icon: 'plus',
	iconPosition: 'left',
	click: () => console.log('Add new task')
};

export const tasks: Task[] = [
	{
		id: 1,
		title: 'Update documentation',
		description: 'Update the API documentation with recent changes',
		priority: 'high',
		status: 'in-progress',
		assignee: 'John Doe',
		dueDate: new Date('2024-08-25')
	},
	{
		id: 2,
		title: 'Fix login bug',
		description: 'Resolve the authentication issue on mobile devices',
		priority: 'high',
		status: 'todo',
		assignee: 'Jane Smith',
		dueDate: new Date('2024-08-23')
	},
	{
		id: 3,
		title: 'Implement search feature',
		description: 'Add search functionality to the products page',
		priority: 'medium',
		status: 'completed',
		assignee: 'Bob Johnson',
		dueDate: new Date('2024-08-20'),
		completedAt: new Date('2024-08-19')
	}
];

@Component({
	selector: 'fkt-table-examples-task-table',
	imports: [
		FktTableComponent
	],
	templateUrl: './fkt-table-examples-task-table.component.html',
	styleUrl: './fkt-table-examples-task-table.component.scss'
})
export class FktTableExamplesTaskTableComponent {
	data = input<Task[]>(tasks);

	mainAction = input<FktButtonAction>(taskMainAction);
	loading = input<boolean>(false);
	noHeaderWhenEmpty = input<boolean>(false);
	noResults = input<FktNoResults>({
		label: 'No data available',
		description: 'There are no records to display at this time.',
		icon: {name: 'document-text', size: '80px'}
	});

	protected columnsFn: FktTableColumnFn<Task> = (task) => [
		{
			position: '1',
			name: 'Task',
			cell: {
				type: 'default',
				options: { value: task.title }
			}
		},
		{
			position: '2',
			name: 'Assignee',
			cell: {
				type: 'default',
				options: { value: task.assignee }
			}
		},
		{
			position: '3',
			name: 'Priority',
			cell: {
				type: 'badge',
				options: {
					text: task.priority,
					color: (() => {
						switch (task.priority) {
							case "high":
								return "danger";
							case "medium":
								return "warning";
							default:
								return "info"
						}
					})()
				}
			}
		},
		{
			position: '4',
			name: 'Status',
			cell: {
				type: 'badge',
				options: {
					text: task.status,
					color: (() => {
						switch (task.status) {
							case "todo":
								return "success";
							case "completed":
								return "info";
							case "in-progress":
								return "warning";
							default:
								return "danger"
						}
					})()
				}
			}
		}
	];

	protected classesFn: FktTableClassesFn<Task> = (task) => {
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

	protected actionsFn: FktTableActionFn<Task> = (task) => [
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
}
