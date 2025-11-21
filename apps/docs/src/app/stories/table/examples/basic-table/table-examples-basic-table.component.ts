import { Component, input } from '@angular/core';
import { FktTableColumnFn, FktTableComponent } from 'frakton-ng/table';
import { FktNoResults } from 'frakton-ng/no-results';
import { FktIdentifiable } from 'frakton-ng/core';

export interface User extends FktIdentifiable {
	name: string;
	email: string;
	role: 'Admin' | 'User' | 'Moderator';
	status: 'Active' | 'Inactive' | 'Pending';
	joinedAt: Date;
	lastLogin?: Date;
}

export const users: User[] = [
	{
		id: 1,
		name: 'John Doe',
		email: 'john.doe@example.com',
		role: 'Admin',
		status: 'Active',
		joinedAt: new Date('2023-01-15'),
		lastLogin: new Date('2024-08-20')
	},
	{
		id: 2,
		name: 'Jane Smith',
		email: 'jane.smith@example.com',
		role: 'User',
		status: 'Active',
		joinedAt: new Date('2023-02-20'),
		lastLogin: new Date('2024-08-19')
	},
	{
		id: 3,
		name: 'Bob Johnson',
		email: 'bob.johnson@example.com',
		role: 'Moderator',
		status: 'Inactive',
		joinedAt: new Date('2023-03-10'),
		lastLogin: new Date('2024-08-10')
	},
	{
		id: 4,
		name: 'Alice Brown',
		email: 'alice.brown@example.com',
		role: 'User',
		status: 'Pending',
		joinedAt: new Date('2024-08-15')
	}
];

@Component({
	selector: 'table-examples-basic-table',
	imports: [
		FktTableComponent
	],
	templateUrl: './table-examples-basic-table.component.html',
	styleUrl: './table-examples-basic-table.component.scss'
})
export class TableExamplesBasicTableComponent {
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
			cell: user.name,
		},
		{
			position: '2',
			name: 'Email',
			cell: user.email
		},
		{
			position: '3',
			name: 'Role',
			cell: user.role
		},
        {
            position: '4',
            name: 'Status',
            cell: user.status,
        }
	];
}
