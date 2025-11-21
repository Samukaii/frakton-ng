import"./chunk-ENRHZQ2S.js";var e=`<fkt-table
    [data]="data()"
    [columnsFn]="columnsFn"
    [loading]="loading()"
    [noHeaderWhenEmpty]="noHeaderWhenEmpty()"
    [noResults]="noResults()"
/>
`;var t=`fkt-table {\r
	background-color: var(--fkt-color-neutral-100);\r
}\r
`;var a=`import { Component, input } from '@angular/core';\r
import { FktTableColumnFn, FktTableComponent } from 'frakton-ng/table';\r
import { FktNoResults } from 'frakton-ng/no-results';\r
import { FktIdentifiable } from 'frakton-ng/core';\r
\r
export interface User extends FktIdentifiable {\r
	name: string;\r
	email: string;\r
	role: 'Admin' | 'User' | 'Moderator';\r
	status: 'Active' | 'Inactive' | 'Pending';\r
	joinedAt: Date;\r
	lastLogin?: Date;\r
}\r
\r
export const users: User[] = [\r
	{\r
		id: 1,\r
		name: 'John Doe',\r
		email: 'john.doe@example.com',\r
		role: 'Admin',\r
		status: 'Active',\r
		joinedAt: new Date('2023-01-15'),\r
		lastLogin: new Date('2024-08-20')\r
	},\r
	{\r
		id: 2,\r
		name: 'Jane Smith',\r
		email: 'jane.smith@example.com',\r
		role: 'User',\r
		status: 'Active',\r
		joinedAt: new Date('2023-02-20'),\r
		lastLogin: new Date('2024-08-19')\r
	},\r
	{\r
		id: 3,\r
		name: 'Bob Johnson',\r
		email: 'bob.johnson@example.com',\r
		role: 'Moderator',\r
		status: 'Inactive',\r
		joinedAt: new Date('2023-03-10'),\r
		lastLogin: new Date('2024-08-10')\r
	},\r
	{\r
		id: 4,\r
		name: 'Alice Brown',\r
		email: 'alice.brown@example.com',\r
		role: 'User',\r
		status: 'Pending',\r
		joinedAt: new Date('2024-08-15')\r
	}\r
];\r
\r
@Component({\r
	selector: 'table-examples-basic-table',\r
	imports: [\r
		FktTableComponent\r
	],\r
	templateUrl: './table-examples-basic-table.component.html',\r
	styleUrl: './table-examples-basic-table.component.scss'\r
})\r
export class TableExamplesBasicTableComponent {\r
	data = input<User[]>(users);\r
	loading = input<boolean>(false);\r
	noHeaderWhenEmpty = input<boolean>(false);\r
	noResults = input<FktNoResults>({\r
		label: 'No data available',\r
		description: 'There are no records to display at this time.',\r
		icon: {name: 'document-text', size: '80px'}\r
	});\r
\r
	columnsFn: FktTableColumnFn<User> = (user) => [\r
		{\r
			position: '1',\r
			name: 'Name',\r
			cell: user.name,\r
		},\r
		{\r
			position: '2',\r
			name: 'Email',\r
			cell: user.email\r
		},\r
		{\r
			position: '3',\r
			name: 'Role',\r
			cell: user.role\r
		},\r
        {\r
            position: '4',\r
            name: 'Status',\r
            cell: user.status,\r
        }\r
	];\r
}\r
`;var n=`<fkt-table
    [data]="data()"
    [columnsFn]="columnsFn"
    [loading]="loading()"
    [noHeaderWhenEmpty]="noHeaderWhenEmpty()"
    [noResults]="noResults()"
>
    <div fktTableFooter>
        <fkt-paginator [(page)]="page" [(pageSize)]="pageSize" [total]="total()"/>
    </div>
</fkt-table>
`;var o=`fkt-table {\r
	background-color: var(--fkt-color-neutral-100);\r
}\r
`;var l=`import { Component, input, signal } from '@angular/core';\r
import { FktTableColumnFn, FktTableComponent } from 'frakton-ng/table';\r
import { FktNoResults } from 'frakton-ng/no-results';\r
import { FktIdentifiable } from 'frakton-ng/core';\r
import { FktPaginatorComponent } from 'frakton-ng/paginator';\r
import { users } from '@/stories/table/examples/fkt-table-mock';\r
\r
export interface User extends FktIdentifiable {\r
	name: string;\r
	email: string;\r
	role: 'Admin' | 'User' | 'Moderator';\r
	status: 'Active' | 'Inactive' | 'Pending';\r
	joinedAt: Date;\r
	lastLogin?: Date;\r
}\r
\r
@Component({\r
	selector: 'app-table-examples-with-pagination',\r
    imports: [\r
        FktTableComponent,\r
        FktPaginatorComponent\r
    ],\r
	templateUrl: './table-examples-with-pagination.component.html',\r
	styleUrl: './table-examples-with-pagination.component.scss'\r
})\r
export class TableExamplesWithPaginationComponent {\r
	data = input<User[]>(users);\r
	loading = input<boolean>(false);\r
	noHeaderWhenEmpty = input<boolean>(false);\r
	noResults = input<FktNoResults>({\r
		label: 'No data available',\r
		description: 'There are no records to display at this time.',\r
		icon: {name: 'document-text', size: '80px'}\r
	});\r
\r
	columnsFn: FktTableColumnFn<User> = (user) => [\r
		{\r
			position: '1',\r
			name: 'Name',\r
			cell: user.name,\r
		},\r
		{\r
			position: '2',\r
			name: 'Email',\r
			cell: user.email\r
		},\r
		{\r
			position: '3',\r
			name: 'Role',\r
			cell: user.role\r
		},\r
        {\r
            position: '4',\r
            name: 'Status',\r
            cell: user.status,\r
        }\r
	];\r
    total = signal(500);\r
    pageSize = signal(10);\r
    page = signal(1);\r
}\r
`;var y={TableExamplesBasicTableComponent:{name:"TableExamplesBasicTable",files:[{name:"table-examples-basic-table.component.html",content:e,language:"html"},{name:"table-examples-basic-table.component.ts",content:a,language:"typescript"},{name:"table-examples-basic-table.component.scss",content:t,language:"css"}]},TableExamplesWithPaginationComponent:{name:"TableExamplesWithPagination",files:[{name:"table-examples-with-pagination.component.html",content:n,language:"html"},{name:"table-examples-with-pagination.component.ts",content:l,language:"typescript"},{name:"table-examples-with-pagination.component.scss",content:o,language:"css"}]}};export{y as default};
