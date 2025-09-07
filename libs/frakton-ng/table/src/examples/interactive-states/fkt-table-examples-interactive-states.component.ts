import { Component, input, linkedSignal, signal } from '@angular/core';
import { FktButtonAction, FktButtonComponent } from 'frakton-ng/button';
import { FktTableActionFn, FktTableClassesFn, FktTableColumnFn, FktTableComponent } from 'frakton-ng/table';
import { FktNoResults } from 'frakton-ng/no-results';
import { FktIdentifiable } from 'frakton-ng/core';

type TableState = 'loading' | 'empty' | 'populated';

export interface User extends FktIdentifiable {
	name: string;
	email: string;
	role: 'admin' | 'user' | 'moderator';
	status: 'active' | 'inactive' | 'pending';
	joinedAt: Date;
	lastLogin?: Date;
}

export const users: User[] = [
	{
		id: 1,
		name: 'John Doe',
		email: 'john.doe@example.com',
		role: 'admin',
		status: 'active',
		joinedAt: new Date('2023-01-15'),
		lastLogin: new Date('2024-08-20')
	},
	{
		id: 2,
		name: 'Jane Smith',
		email: 'jane.smith@example.com',
		role: 'user',
		status: 'active',
		joinedAt: new Date('2023-02-20'),
		lastLogin: new Date('2024-08-19')
	},
	{
		id: 3,
		name: 'Bob Johnson',
		email: 'bob.johnson@example.com',
		role: 'moderator',
		status: 'inactive',
		joinedAt: new Date('2023-03-10'),
		lastLogin: new Date('2024-08-10')
	},
	{
		id: 4,
		name: 'Alice Brown',
		email: 'alice.brown@example.com',
		role: 'user',
		status: 'pending',
		joinedAt: new Date('2024-08-15')
	}
];

export const userMainAction: FktButtonAction = {
	identifier: 'add-user',
	text: 'Add User',
	theme: 'raised',
	color: 'primary',
	icon: 'plus',
	iconPosition: 'left',
	click: () => console.log('Add new user')
};


@Component({
	selector: 'fkt-table-examples-interactive-states',
	imports: [
		FktButtonComponent,
		FktTableComponent
	],
	templateUrl: './fkt-table-examples-interactive-states.component.html',
	styleUrl: './fkt-table-examples-interactive-states.component.scss'
})
export class FktTableExamplesInteractiveStatesComponent {
	data = input<User[]>(users);
	mainAction = input<FktButtonAction>(userMainAction);
	loading = input<boolean>(false);
	noHeaderWhenEmpty = input<boolean>(true);
	noResults = input<FktNoResults>({
		label: 'No data to display',
		description: 'The table is currently empty. Try loading some data or adding new records.',
		icon: { name: 'table-cells', size: '96px' },
	});

	protected currentState = signal<TableState>('populated');

	protected tableLoading = linkedSignal(() => {
		const state = this.currentState();
		const inputLoading = this.loading();
		return state === 'loading' || inputLoading;
	});

	tableMainAction = linkedSignal((): FktButtonAction => {
		return {
			...this.mainAction(),
			click: () => this.addUser()
		}
	})

	tableNoResults = linkedSignal((): FktNoResults => {
		return {
			...this.noResults(),
			action: {
				identifier: 'load-data',
				text: 'Load Sample Data',
				theme: 'raised',
				color: 'primary',
				icon: 'arrow-down-tray',
				iconPosition: 'left',
				click: () => this.addUser()
			}
		}
	})

	protected tableData = linkedSignal(() => {
		const state = this.currentState();
		const inputData = this.data();

		switch (state) {
			case 'loading':
				return inputData;
			case 'empty':
				return [];
			case 'populated':
				return inputData;
			default:
				return inputData;
		}
	});

	protected columnsFn: FktTableColumnFn<User> = (user) => [
		{
			position: '1',
			name: 'Name',
			cell: {
				type: 'default',
				options: { value: user.name }
			}
		},
		{
			position: '2',
			name: 'Email',
			cell: {
				type: 'default',
				options: { value: user.email }
			}
		},
		{
			position: '3',
			name: 'Role',
			cell: {
				type: 'badge',
				options: {
					text: user.role,
					color: (() => {
						switch (user.role) {
							case "admin":
								return "blue";
							case "moderator":
								return "orange";
							default:
								return "green"
						}
					})(),
					variant: "faded"
				}
			}
		},
		{
			position: '4',
			name: 'Status',
			cell: {
				type: 'badge',
				options: {
					text: user.status,
					color: (() => {
						switch (user.status) {
							case "active":
								return "green";
							case "pending":
								return "orange";
							default:
								return "red"
						}
					})()
				}
			}
		}
	];

	protected classesFn: FktTableClassesFn<User> = (user) => {
		switch (user.status) {
			case 'active':
				return 'table-user-active';
			case 'inactive':
				return 'table-user-inactive';
			case 'pending':
				return 'table-user-pending';
			default:
				return '';
		}
	};

	protected actionsFn: FktTableActionFn<User> = (user) => [
		{
			identifier: 'view',
			condition: true,
			theme: 'basic',
			icon: 'eye',
			color: 'primary',
			click: () => console.log('View user:', user.name)
		},
		{
			identifier: 'edit',
			condition: user.status !== 'inactive',
			theme: 'basic',
			icon: 'pencil',
			color: 'green',
			click: () => console.log('Edit user:', user.name)
		},
		{
			identifier: 'delete',
			condition: user.role === 'admin',
			theme: 'basic',
			icon: 'trash',
			color: 'red',
			click: () => console.log('Delete user:', user.name)
		}
	];

	protected setState(newState: TableState): void {
		this.currentState.set(newState);
	}

	private addUser(): void {
		this.setState('populated');
	}
}
