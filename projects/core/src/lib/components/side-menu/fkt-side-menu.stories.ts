import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FktSideMenuComponent } from './fkt-side-menu.component';
import { FktMenuGroup } from './fkt-side-menu.types';
import {
	BasicSideMenuExampleComponent,
	CollapsibleSideMenuExampleComponent,
	MultiGroupSideMenuExampleComponent,
	DynamicPermissionsSideMenuExampleComponent,
	AdminDashboardLayoutExampleComponent
} from './examples';

const meta: Meta<FktSideMenuComponent> = {
	title: 'Components/Side Menu',
	component: FktSideMenuComponent,
	decorators: [
		moduleMetadata({
			imports: [
				BasicSideMenuExampleComponent,
				CollapsibleSideMenuExampleComponent,
				MultiGroupSideMenuExampleComponent,
				DynamicPermissionsSideMenuExampleComponent,
				AdminDashboardLayoutExampleComponent
			]
		})
	],
	argTypes: {
		groups: {
			control: 'object',
			description: 'Array of menu groups with their navigation items. Each group can have an optional name (displays as header) and contains menu items with name, icon, and path.',
			table: {
				type: { summary: 'FktMenuGroup[]' },
				defaultValue: { summary: '[]' }
			}
		},
		opened: {
			control: 'boolean',
			description: 'Controls whether the side menu is expanded (showing text labels) or collapsed (showing only icons with tooltips). Uses two-way binding.',
			table: {
				type: { summary: 'ModelSignal<boolean>' },
				defaultValue: { summary: 'true' }
			}
		}
	}
};

type Story = StoryObj<FktSideMenuComponent>;

// Sample menu data for different scenarios
const defaultMenuGroups: FktMenuGroup[] = [
	{
		items: [
			{ name: 'Dashboard', icon: 'home', path: '/dashboard' },
			{ name: 'Users', icon: 'users', path: '/users' },
			{ name: 'Settings', icon: 'cog-6-tooth', path: '/settings' },
			{ name: 'Reports', icon: 'chart-bar', path: '/reports' }
		]
	}
];

const collapsibleMenuGroups: FktMenuGroup[] = [
	{
		items: [
			{ name: 'Dashboard', icon: 'home', path: '/dashboard' },
			{ name: 'Analytics', icon: 'chart-bar', path: '/analytics' },
			{ name: 'Users', icon: 'users', path: '/users' },
			{ name: 'Products', icon: 'cube', path: '/products' },
			{ name: 'Orders', icon: 'shopping-cart', path: '/orders' },
			{ name: 'Settings', icon: 'cog-6-tooth', path: '/settings' }
		]
	}
];

const multiGroupMenus: FktMenuGroup[] = [
	{
		name: 'Main',
		items: [
			{ name: 'Dashboard', icon: 'home', path: '/dashboard' },
			{ name: 'Analytics', icon: 'chart-bar', path: '/analytics' },
			{ name: 'Overview', icon: 'eye', path: '/overview' }
		]
	},
	{
		name: 'Management',
		items: [
			{ name: 'Users', icon: 'users', path: '/users' },
			{ name: 'Products', icon: 'cube', path: '/products' },
			{ name: 'Orders', icon: 'shopping-cart', path: '/orders' }
		]
	},
	{
		// Group without name - shows divider only
		items: [
			{ name: 'Settings', icon: 'cog-6-tooth', path: '/settings' },
			{ name: 'Profile', icon: 'user', path: '/profile' },
			{ name: 'Help', icon: 'question-mark-circle', path: '/help' }
		]
	}
];

const permissionsMenuGroups: FktMenuGroup[] = [
	{
		name: 'Main',
		items: [
			{ name: 'Dashboard', icon: 'home', path: '/dashboard' },
			{ name: 'Analytics', icon: 'chart-bar', path: '/analytics' }
		]
	},
	{
		name: 'Management',
		items: [
			{ name: 'Products', icon: 'cube', path: '/products' }
		]
	},
	{
		name: 'Reports',
		items: [
			{ name: 'Sales Report', icon: 'document-chart-bar', path: '/reports/sales' },
			{ name: 'User Activity', icon: 'chart-pie', path: '/reports/activity' }
		]
	},
	{
		items: [
			{ name: 'Settings', icon: 'cog-6-tooth', path: '/settings' },
			{ name: 'Profile', icon: 'user', path: '/profile' }
		]
	}
];

const adminMenuGroups: FktMenuGroup[] = [
	{
		name: 'Overview',
		items: [
			{ name: 'Dashboard', icon: 'home', path: '/dashboard' },
			{ name: 'Analytics', icon: 'chart-bar', path: '/analytics' },
			{ name: 'Reports', icon: 'document-chart-bar', path: '/reports' }
		]
	},
	{
		name: 'Management',
		items: [
			{ name: 'Users', icon: 'users', path: '/users' },
			{ name: 'Products', icon: 'cube', path: '/products' },
			{ name: 'Orders', icon: 'shopping-cart', path: '/orders' },
			{ name: 'Inventory', icon: 'squares-2x2', path: '/inventory' }
		]
	},
	{
		name: 'System',
		items: [
			{ name: 'Settings', icon: 'cog-6-tooth', path: '/settings' },
			{ name: 'Security', icon: 'shield-check', path: '/security' },
			{ name: 'Logs', icon: 'document-text', path: '/logs' }
		]
	},
	{
		items: [
			{ name: 'Profile', icon: 'user', path: '/profile' },
			{ name: 'Help & Support', icon: 'question-mark-circle', path: '/support' }
		]
	}
];

export const BasicSideMenu: Story = {
	render: (args) => ({
		template: '<basic-side-menu-example [groups]="groups" [opened]="opened"></basic-side-menu-example>',
		props: {
			...args
		}
	}),
	args: {
		groups: defaultMenuGroups,
		opened: true
	}
};

export const CollapsibleSideMenu: Story = {
	render: (args) => ({
		template: '<collapsible-side-menu-example [groups]="groups" [opened]="opened"></collapsible-side-menu-example>',
		props: {
			...args
		}
	}),
	args: {
		groups: collapsibleMenuGroups,
		opened: true
	}
};

export const MultiGroupSideMenu: Story = {
	render: (args) => ({
		template: '<multi-group-side-menu-example [groups]="groups" [opened]="opened"></multi-group-side-menu-example>',
		props: {
			...args
		}
	}),
	args: {
		groups: multiGroupMenus,
		opened: true
	}
};

export const DynamicPermissionsSideMenu: Story = {
	render: (args) => ({
		template: '<dynamic-permissions-side-menu-example [groups]="groups" [opened]="opened"></dynamic-permissions-side-menu-example>',
		props: {
			...args
		}
	}),
	args: {
		groups: permissionsMenuGroups,
		opened: true
	}
};

export const AdminDashboardLayout: Story = {
	render: (args) => ({
		template: '<admin-dashboard-layout-example [groups]="groups" [opened]="opened"></admin-dashboard-layout-example>',
		props: {
			...args
		}
	}),
	args: {
		groups: adminMenuGroups,
		opened: true
	}
};

export default meta;
