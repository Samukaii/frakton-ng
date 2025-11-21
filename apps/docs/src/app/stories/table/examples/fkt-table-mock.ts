import { User } from "@/stories/table/examples/with-pagination/table-examples-with-pagination.component";

const firstNames = ['John', 'Jane', 'Bob', 'Alice', 'Charlie', 'Diana', 'Edward', 'Fiona', 'George', 'Helen', 'Ian', 'Julia', 'Kevin', 'Laura', 'Michael', 'Nina', 'Oscar', 'Paula', 'Quinn', 'Rachel', 'Steve', 'Tina', 'Victor', 'Wendy', 'Xavier', 'Yvonne', 'Zach'];
const lastNames = ['Doe', 'Smith', 'Johnson', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark'];
const roles: User['role'][] = ['Admin', 'User', 'User', 'User', 'Moderator']; // Mais 'Users' para ser realista
const statuses: User['status'][] = ['Active', 'Active', 'Active', 'Inactive', 'Pending'];

const generateUsers = (count: number): User[] => {
    return Array.from({ length: count }, (_, index) => {
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const role = roles[Math.floor(Math.random() * roles.length)];
        const status = statuses[Math.floor(Math.random() * statuses.length)];

        const start = new Date(2023, 0, 1).getTime();
        const end = new Date().getTime();
        const joinedAt = new Date(start + Math.random() * (end - start));

        const lastLogin = status === 'Pending'
            ? undefined
            : new Date(joinedAt.getTime() + Math.random() * (end - joinedAt.getTime()));

        return {
            id: index + 1,
            name: `${firstName} ${lastName}`,
            email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
            role,
            status,
            joinedAt,
            lastLogin
        };
    });
};

export const users: User[] = generateUsers(100);
