import { Component, input, linkedSignal } from '@angular/core';
import { FktTableActionFn, FktTableClassesFn, FktTableColumnFn, FktTableComponent } from 'frakton-ng/table';
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
	selector: 'fkt-table-examples-table-with-actions',
	imports: [
		FktTableComponent
	],
	templateUrl: './fkt-table-examples-table-with-actions.component.html',
	styleUrl: './fkt-table-examples-table-with-actions.component.scss'
})
export class FktTableExamplesTableWithActionsComponent {
	data = input<User[]>(users);
	mainAction = input<FktButtonAction | undefined>(userMainAction);
	loading = input<boolean>(false);
	noHeaderWhenEmpty = input<boolean>(false);
	noResults = input<FktNoResults>({
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
			click: () => {
				this.addUser();
			}
		}
	});

	protected tableData = linkedSignal<User[]>(this.data);

	actionsFn: FktTableActionFn<User> = (user) => [
		{
			identifier: 'view',
			condition: true,
			theme: 'basic',
			icon: 'eye',
			color: 'primary',
			click: () => this.viewUser(user)
		},
		{
			identifier: 'edit',
			condition: user.status !== 'inactive',
			theme: 'basic',
			icon: 'pencil',
			color: 'success',
			click: () => this.editUser(user)
		},
		{
			identifier: 'toggle-status',
			condition: true,
			theme: 'basic',
			icon: user.status === 'active' ? 'pause' : 'play',
			color: user.status === 'active' ? 'accent' : 'success',
			click: () => this.toggleUserStatus(user)
		},
		{
			identifier: 'delete',
			condition: user.role !== 'admin',
			theme: 'basic',
			icon: 'trash',
			color: 'danger',
			click: () => this.deleteUser(user)
		}
	];

	columnsFn: FktTableColumnFn<User> = (user) => [
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
								return "info";
							case "moderator":
								return "warning";
							default:
								return "success"
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
								return "success";
							case "pending":
								return "warning";
							default:
								return "danger"
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

	private viewUser(user: User) {
		console.log('Viewing user:', user);
	}

	private editUser(user: User) {
		console.log('Editing user:', user);
	}

	private toggleUserStatus(userToToggle: User) {
		this.tableData.update(data => {
			return data.map(user => {
					if (user.id !== userToToggle.id) return user;

					return {
						...user,
						status: userToToggle.status === 'active' ? 'inactive' : 'active' as User['status']
					}
				}
			)
		});
	}

	private deleteUser(userToRemove: User) {
		this.tableData.update(users => users.filter(user => user.id !== userToRemove.id));
	}

	private addUser(): void {
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
