import { Component, input } from '@angular/core';
import { FktTableColumnFn, FktTableComponent } from '@frakton-ng/table';
import { FktNoResults } from '@frakton-ng/no-results';
import { FktIdentifiable } from '@frakton-ng/core';

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

@Component({
	selector: 'fkt-table-examples-basic-table',
	imports: [
		FktTableComponent
	],
	template: `
		<fkt-table
			[data]="data()"
			[columnsFn]="columnsFn"
			[loading]="loading()"
			[noHeaderWhenEmpty]="noHeaderWhenEmpty()"
			[noResults]="noResults()"
		/>
	`,
	styleUrl: './fkt-table-examples-basic-table.component.scss'
})
export class FktTableExamplesBasicTableComponent {
	data = input<User[]>(users);
	loading = input<boolean>(false);
	noHeaderWhenEmpty = input<boolean>(false);
	noResults = input<FktNoResults>({
		label: 'No data available',
		description: 'There are no records to display at this time.',
		icon: {name: 'document-text', size: '80px'}
	});

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
}
