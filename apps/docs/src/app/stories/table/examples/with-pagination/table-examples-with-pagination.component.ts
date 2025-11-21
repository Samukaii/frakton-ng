import { Component, input, signal } from '@angular/core';
import { FktTableColumnFn, FktTableComponent } from 'frakton-ng/table';
import { FktNoResults } from 'frakton-ng/no-results';
import { FktIdentifiable } from 'frakton-ng/core';
import { FktPaginatorComponent } from 'frakton-ng/paginator';
import { users } from '@/stories/table/examples/fkt-table-mock';

export interface User extends FktIdentifiable {
	name: string;
	email: string;
	role: 'Admin' | 'User' | 'Moderator';
	status: 'Active' | 'Inactive' | 'Pending';
	joinedAt: Date;
	lastLogin?: Date;
}

@Component({
	selector: 'app-table-examples-with-pagination',
    imports: [
        FktTableComponent,
        FktPaginatorComponent
    ],
	templateUrl: './table-examples-with-pagination.component.html',
	styleUrl: './table-examples-with-pagination.component.scss'
})
export class TableExamplesWithPaginationComponent {
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
    total = signal(500);
    pageSize = signal(10);
    page = signal(1);
}
