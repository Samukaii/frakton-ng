import { Component, input, linkedSignal } from '@angular/core';
import { FktTableClassesFn, FktTableColumnFn, FktTableComponent } from 'frakton-ng/table';
import { FktButtonAction } from 'frakton-ng/button';
import { FktNoResults } from 'frakton-ng/no-results';
import { FktIdentifiable } from 'frakton-ng/core';

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
	selector: 'fkt-table-examples-empty-state',
	imports: [
		FktTableComponent
	],
	template: `
		<fkt-table
			[data]="tableData()"
			[columnsFn]="columnsFn"
			[classesFn]="classesFn"
			[mainAction]="tableMainAction()"
			[loading]="loading()"
			[noHeaderWhenEmpty]="noHeaderWhenEmpty()"
			[noResults]="tableNoResults()"
		/>
	`,
	styleUrl: './fkt-table-examples-empty-state.component.scss'
})
export class FktTableExamplesEmptyStateComponent {
	data = input<User[]>(users);
	mainAction = input<FktButtonAction>(userMainAction);
	loading = input<boolean>(false);
	noHeaderWhenEmpty = input<boolean>(false);
	noResults = input<FktNoResults>({
		label: 'No data available',
		description: 'There are no records to display at this time.',
		icon: {name: 'document-text', size: '80px'}
	});

	tableData = linkedSignal(this.data);

	tableNoResults = linkedSignal((): FktNoResults => {
		return {
			...this.noResults(),
			action: {
				identifier: 'add-data',
				text: 'Add Data',
				theme: 'raised',
				color: 'primary',
				icon: 'plus',
				iconPosition: 'left',
				click: () => {
					this.addUser();
				}
			}
		}
	});

	tableMainAction(): FktButtonAction {
		return {
			...this.mainAction(),
			click: () => {
				this.addUser();
			}
		}
	}

	columnsFn: FktTableColumnFn<User> = (user) => [
		{
			position: '1',
			name: 'Name',
			cell: {
				type: 'default',
				options: {value: user.name}
			}
		},
		{
			position: '2',
			name: 'Email',
			cell: {
				type: 'default',
				options: {value: user.email}
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

	classesFn: FktTableClassesFn<User> = (user) => {
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

	private addUser() {
		const newUser: User = {
			id: Date.now(),
			name: `New User ${Math.floor(Math.random() * 1000)}`,
			email: `user${Math.floor(Math.random() * 1000)}@example.com`,
			role: 'user',
			status: 'active',
			joinedAt: new Date(),
			lastLogin: new Date()
		};

		this.tableData.update(data => [...data, newUser]);
	}
}
