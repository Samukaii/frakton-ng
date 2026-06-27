export interface SelectUser {
    id: string;
    name: string;
    email: string;
    department: string;
}

export const SELECT_USERS: SelectUser[] = [
    {
        id: 'usr-1001',
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        department: 'Finance',
    },
    {
        id: 'usr-1002',
        name: 'Bob Smith',
        email: 'bob.smith@example.com',
        department: 'Engineering',
    },
    {
        id: 'usr-1003',
        name: 'Charlie Williams',
        email: 'charlie.williams@example.com',
        department: 'Engineering',
    },
    {
        id: 'usr-1004',
        name: 'Diana Brown',
        email: 'diana.brown@example.com',
        department: 'Operations',
    },
    {
        id: 'usr-1005',
        name: 'Eve Jones',
        email: 'eve.jones@example.com',
        department: 'Finance',
    },
];
