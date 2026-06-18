export interface Country {
    code: string;
    name: string;
    continent: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    department: string;
    country?: string;
    picture?: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}

export const COUNTRIES: Country[] = [
    { code: 'br', name: 'Brazil', continent: 'South America' },
    { code: 'ar', name: 'Argentina', continent: 'South America' },
    { code: 'uy', name: 'Uruguay', continent: 'South America' },
    { code: 'de', name: 'Germany', continent: 'Europe' },
    { code: 'fr', name: 'France', continent: 'Europe' },
    { code: 'nl', name: 'Netherlands', continent: 'Europe' },
    { code: 'jp', name: 'Japan', continent: 'Asia' },
    { code: 'kr', name: 'South Korea', continent: 'Asia' },
    { code: 'in', name: 'India', continent: 'Asia' },
    { code: 'us', name: 'United States', continent: 'North America' },
    { code: 'ca', name: 'Canada', continent: 'North America' },
    { code: 'mx', name: 'Mexico', continent: 'North America' },
];

export const USERS: User[] = [
    {
        id: 'usr-1000',
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        department: 'Finance',
    },
    {
        id: 'usr-1001',
        name: 'Bob Smith',
        email: 'bob.smith@example.com',
        department: 'Engineering',
    },
    {
        id: 'usr-1002',
        name: 'Charlie Williams',
        email: 'charlie.williams@example.com',
        department: 'Engineering',
    },
    {
        id: 'usr-1003',
        name: 'Diana Brown',
        email: 'diana.brown@example.com',
        department: 'Sales',
    },
    {
        id: 'usr-1004',
        name: 'Eve Jones',
        email: 'eve.jones@example.com',
        department: 'Support',
    },
    {
        id: 'usr-1005',
        name: 'Frank Miller',
        email: 'frank.miller@example.com',
        department: 'Finance',
    },
    {
        id: 'usr-1006',
        name: 'Grace Wilson',
        email: 'grace.wilson@example.com',
        department: 'Sales',
    },
    {
        id: 'usr-1007',
        name: 'Henry Taylor',
        email: 'henry.taylor@example.com',
        department: 'Support',
    },
];

export const createLargeUserList = (count = 500) =>
    Array.from({ length: count }, (_, index): User => {
        const department = ['Finance', 'Engineering', 'Sales', 'Support'][
            index % 4
        ];

        return {
            id: `usr-${(index + 1).toString().padStart(4, '0')}`,
            name: `User ${(index + 1).toString().padStart(4, '0')}`,
            email: `user${index + 1}@example.com`,
            department,
        };
    });
