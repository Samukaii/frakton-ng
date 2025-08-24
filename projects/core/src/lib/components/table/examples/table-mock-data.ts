import { FktIdentifiable } from '../../../shared/types';
import { FktButtonAction } from '../../button';
import { FktTableActionFn, FktTableClassesFn, FktTableColumnFn } from '../fkt-table.types';

// Sample Data Interfaces
export interface User extends FktIdentifiable {
	name: string;
	email: string;
	role: 'admin' | 'user' | 'moderator';
	status: 'active' | 'inactive' | 'pending';
	joinedAt: Date;
	lastLogin?: Date;
}

export interface Product extends FktIdentifiable {
	name: string;
	category: string;
	price: number;
	stock: number;
	status: 'active' | 'inactive' | 'discontinued';
	createdAt: Date;
}

export interface Task extends FktIdentifiable {
	title: string;
	description: string;
	priority: 'high' | 'medium' | 'low';
	status: 'todo' | 'in-progress' | 'completed' | 'cancelled';
	assignee: string;
	dueDate: Date;
	completedAt?: Date;
}

// Mock Data Arrays
export const mockUsers: User[] = [
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

export const mockProducts: Product[] = [
	{
		id: 1,
		name: 'Laptop Pro',
		category: 'Electronics',
		price: 1299.99,
		stock: 25,
		status: 'active',
		createdAt: new Date('2023-01-10')
	},
	{
		id: 2,
		name: 'Wireless Headphones',
		category: 'Electronics',
		price: 199.99,
		stock: 0,
		status: 'inactive',
		createdAt: new Date('2023-02-15')
	},
	{
		id: 3,
		name: 'Office Chair',
		category: 'Furniture',
		price: 299.99,
		stock: 12,
		status: 'active',
		createdAt: new Date('2023-03-20')
	},
	{
		id: 4,
		name: 'Standing Desk',
		category: 'Furniture',
		price: 599.99,
		stock: 8,
		status: 'discontinued',
		createdAt: new Date('2023-01-25')
	}
];

export const mockTasks: Task[] = [
	{
		id: 1,
		title: 'Update documentation',
		description: 'Update the API documentation with recent changes',
		priority: 'high',
		status: 'in-progress',
		assignee: 'John Doe',
		dueDate: new Date('2024-08-25')
	},
	{
		id: 2,
		title: 'Fix login bug',
		description: 'Resolve the authentication issue on mobile devices',
		priority: 'high',
		status: 'todo',
		assignee: 'Jane Smith',
		dueDate: new Date('2024-08-23')
	},
	{
		id: 3,
		title: 'Implement search feature',
		description: 'Add search functionality to the products page',
		priority: 'medium',
		status: 'completed',
		assignee: 'Bob Johnson',
		dueDate: new Date('2024-08-20'),
		completedAt: new Date('2024-08-19')
	}
];

// Helper Functions for Column Generation
export const createUserColumns: FktTableColumnFn<User> = (user) => [
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
			type: 'default',
			options: { value: user.role }
		}
	},
	{
		position: '4',
		name: 'Status',
		cell: {
			type: 'default',
			options: { value: user.status }
		}
	}
];

export const createProductColumns: FktTableColumnFn<Product> = (product) => [
	{
		position: '1',
		name: 'Product',
		cell: {
			type: 'default',
			options: { value: product.name }
		}
	},
	{
		position: '2',
		name: 'Category',
		cell: {
			type: 'default',
			options: { value: product.category }
		}
	},
	{
		position: '3',
		name: 'Price',
		cell: {
			type: 'default',
			options: { value: `$${product.price.toFixed(2)}` }
		}
	},
	{
		position: '4',
		name: 'Stock',
		cell: {
			type: 'default',
			options: { value: product.stock.toString() }
		}
	}
];

export const createTaskColumns: FktTableColumnFn<Task> = (task) => [
	{
		position: '1',
		name: 'Task',
		cell: {
			type: 'default',
			options: { value: task.title }
		}
	},
	{
		position: '2',
		name: 'Assignee',
		cell: {
			type: 'default',
			options: { value: task.assignee }
		}
	},
	{
		position: '3',
		name: 'Priority',
		cell: {
			type: 'default',
			options: { value: task.priority }
		}
	},
	{
		position: '4',
		name: 'Status',
		cell: {
			type: 'default',
			options: { value: task.status }
		}
	}
];

// Action Generators
export const createUserActions: FktTableActionFn<User> = (user) => [
	{
		identifier: 'view',
		condition: true,
		theme: 'basic',
		icon: 'eye',
		color: 'primary',
		click: () => console.log('View user:', user.name)
	},
	{
		identifier: 'edit',
		condition: user.status !== 'inactive',
		theme: 'basic',
		icon: 'pencil',
		color: 'green',
		click: () => console.log('Edit user:', user.name)
	},
	{
		identifier: 'delete',
		condition: user.role === 'admin',
		theme: 'basic',
		icon: 'trash',
		color: 'red',
		click: () => console.log('Delete user:', user.name)
	}
];

export const createProductActions: FktTableActionFn<Product> = (product) => [
	{
		identifier: 'edit',
		condition: product.status !== 'discontinued',
		icon: 'pencil',
		color: 'green',
		theme: 'basic',
		click: () => console.log('Edit product:', product.name)
	},
	{
		identifier: 'delete',
		condition: true,
		icon: 'trash',
		color: 'red',
		theme: 'basic',
		click: () => console.log('Delete product:', product.name)
	}
];

export const createTaskActions: FktTableActionFn<Task> = (task) => [
	{
		identifier: 'complete',
		condition: task.status !== 'completed' && task.status !== 'cancelled',
		icon: 'check',
		color: 'green',
		theme: 'basic',
		click: () => console.log('Complete task:', task.title)
	},
	{
		identifier: 'edit',
		condition: task.status !== 'completed',
		icon: 'pencil',
		color: 'primary',
		theme: 'basic',
		click: () => console.log('Edit task:', task.title)
	},
	{
		identifier: 'cancel',
		condition: task.status !== 'completed' && task.status !== 'cancelled',
		icon: 'x-mark',
		color: 'red',
		theme: 'basic',
		click: () => console.log('Cancel task:', task.title)
	}
];

// Class Generators
export const createUserClasses: FktTableClassesFn<User> = (user) => {
	switch (user.status) {
		case 'active':
			return 'bg-green-50 hover:bg-green-100';
		case 'inactive':
			return 'bg-gray-50 hover:bg-gray-100 opacity-75';
		case 'pending':
			return 'bg-yellow-50 hover:bg-yellow-100';
		default:
			return '';
	}
};

export const createProductClasses: FktTableClassesFn<Product> = (product) => {
	if (product.stock === 0) {
		return 'bg-red-50 hover:bg-red-100';
	}
	if (product.status === 'discontinued') {
		return 'bg-gray-50 hover:bg-gray-100 opacity-75';
	}
	return '';
};

export const createTaskClasses: FktTableClassesFn<Task> = (task) => {
	switch (task.status) {
		case 'completed':
			return 'bg-green-50 hover:bg-green-100';
		case 'in-progress':
			return 'bg-blue-50 hover:bg-blue-100';
		case 'cancelled':
			return 'bg-red-50 hover:bg-red-100';
		default:
			return '';
	}
};

// Main Action Buttons
export const createUserMainAction = (): FktButtonAction => ({
	identifier: 'add-user',
	text: 'Add User',
	theme: 'raised',
	color: 'primary',
	icon: 'plus',
	iconPosition: 'left',
	click: () => console.log('Add new user')
});

export const createProductMainAction = (): FktButtonAction => ({
	identifier: 'add-product',
	text: 'Add Product',
	theme: 'raised',
	color: 'primary',
	icon: 'plus',
	iconPosition: 'left',
	click: () => console.log('Add new product')
});

export const createTaskMainAction = (): FktButtonAction => ({
	identifier: 'add-task',
	text: 'New Task',
	theme: 'raised',
	color: 'primary',
	icon: 'plus',
	iconPosition: 'left',
	click: () => console.log('Add new task')
});
