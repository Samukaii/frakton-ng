import { Component, computed, input, signal } from '@angular/core';
import { TableComponent } from '../table.component';
import { FktButtonAction } from '../../button';
import {
	createUserActions,
	createUserClasses,
	createUserColumns,
	createUserMainAction,
	mockUsers,
	User
} from './table-mock-data';
import { FktNoResults } from '../../no-results';
import { FktTableActionFn, FktTableClassesFn, FktTableColumnFn } from '../fkt-table.types';

@Component({
	selector: 'table-with-actions-example',
	template: `
		<fkt-table
			[data]="tableData()"
			[columnsFn]="columnsFn()"
			[classesFn]="classesFn()"
			[actionsFn]="actionsFn()"
			[mainAction]="mainAction()"
			[loading]="loading()"
			[noHeaderWhenEmpty]="noHeaderWhenEmpty()"
			[noResults]="noResults()"
		/>
	`,
	standalone: true,
	imports: [TableComponent]
})
export class TableWithActionsExampleComponent {
	// Input properties that can be controlled from stories
	data = input<User[]>(mockUsers);
	columnsFn = input<FktTableColumnFn<User>>(createUserColumns);
	classesFn = input<FktTableClassesFn<User>>(createUserClasses);
	actionsFn = input<FktTableActionFn<User>>(createUserActions);
	mainAction = input<FktButtonAction | undefined>(createUserMainAction());
	loading = input<boolean>(false);
	noHeaderWhenEmpty = input<boolean>(false);
	noResults = input<FktNoResults>({
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
	});

	// Internal data state (for demonstration of interactive actions)
	private _internalData = signal<User[]>(mockUsers);

	// Computed values for the template
	tableData = computed(() => {
		const inputData = this.data();
		// Use internal data if provided data is the default mock data
		return inputData === mockUsers ? this._internalData() : inputData;
	});

	// Enhanced actions that can modify the data
	enhancedActionsFn = computed<FktTableActionFn<User>>(() => {
		return (user: User) => [
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
				color: 'green',
				click: () => this.editUser(user)
			},
			{
				identifier: 'toggle-status',
				condition: true,
				theme: 'basic',
				icon: user.status === 'active' ? 'pause' : 'play',
				color: user.status === 'active' ? 'yellow' : 'green',
				click: () => this.toggleUserStatus(user)
			},
			{
				identifier: 'delete',
				condition: user.role !== 'admin',
				theme: 'basic',
				icon: 'trash',
				color: 'red',
				click: () => this.deleteUser(user)
			}
		];
	});

	// Enhanced main action
	enhancedMainAction = computed<FktButtonAction>(() => ({
		identifier: 'add-user',
		text: 'Add User',
		theme: 'raised',
		color: 'primary',
		icon: 'plus',
		iconPosition: 'left',
		click: () => this.addUser()
	}));

	// Action handlers
	private viewUser(user: User): void {
		console.log('Viewing user:', user);
		// In a real app, this might open a modal or navigate to a detail page
	}

	private editUser(user: User): void {
		console.log('Editing user:', user);
		// In a real app, this might open an edit form or modal
	}

	private toggleUserStatus(user: User): void {
		const currentData = this._internalData();
		const updatedData = currentData.map(u =>
			u.id === user.id
				? { ...u, status: u.status === 'active' ? 'inactive' : 'active' as User['status'] }
				: u
		);
		this._internalData.set(updatedData);
		console.log('Toggled user status:', user.name);
	}

	private deleteUser(user: User): void {
		const currentData = this._internalData();
		const updatedData = currentData.filter(u => u.id !== user.id);
		this._internalData.set(updatedData);
		console.log('Deleted user:', user.name);
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

		const currentData = this._internalData();
		this._internalData.set([...currentData, newUser]);
		console.log('Added new user:', newUser);
	}
}
