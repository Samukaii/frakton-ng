import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FktSideMenuComponent } from '@frakton-ng/side-menu';
import { FktMenuGroup } from './fkt-side-menu.types';
import {
	BasicSideMenuExampleComponent,
	CollapsibleSideMenuExampleComponent,
	MultiGroupSideMenuExampleComponent,
	DynamicPermissionsSideMenuExampleComponent,
	AdminDashboardLayoutExampleComponent
} from './examples';
import { provideRouter, Routes } from '@angular/router';
import {
	WITH_ROUTING_EXAMPLE_ROUTES,
	WithRoutingExampleComponent
} from './examples/with-routing-example/with-routing-example.component';
import { Component } from '@angular/core';

@Component({
	selector: 'fkt-empty',
	template: ``,
	styles: ``
})
class EmptyComponent {}

const DEFAULT_ROUTES: Routes = [
	{
		path: 'empty',
		component: EmptyComponent
	},
	{
		path: '**',
		redirectTo: 'empty'
	}
]

const meta: Meta<FktSideMenuComponent> = {
	title: 'Components/Side Menu',
	component: FktSideMenuComponent,
	parameters: {
		layout: 'fullscreen'
	},
	decorators: [
		moduleMetadata({
			imports: [
				BasicSideMenuExampleComponent,
				CollapsibleSideMenuExampleComponent,
				MultiGroupSideMenuExampleComponent,
				DynamicPermissionsSideMenuExampleComponent,
				AdminDashboardLayoutExampleComponent,
				WithRoutingExampleComponent
			]
		}),
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
	decorators: [
		applicationConfig({
			providers: [provideRouter(DEFAULT_ROUTES)],
		}),
	],
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
	decorators: [
		applicationConfig({
			providers: [provideRouter(DEFAULT_ROUTES)],
		}),
	],
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
	decorators: [
		applicationConfig({
			providers: [provideRouter(DEFAULT_ROUTES)],
		}),
	],
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
	decorators: [
		applicationConfig({
			providers: [provideRouter(DEFAULT_ROUTES)],
		}),
	],
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
	decorators: [
		applicationConfig({
			providers: [provideRouter(DEFAULT_ROUTES)],
		}),
	],
	args: {
		groups: adminMenuGroups,
		opened: true
	}
};

export const WithRouting: Story = {
	render: (args) => ({
		template: '<with-routing-example [groups]="groups" [opened]="opened"></with-routing-example>',
		props: {
			...args
		}
	}),
	decorators: [
		applicationConfig({
			providers: [provideRouter(WITH_ROUTING_EXAMPLE_ROUTES)],
		}),
	],
	args: {
		groups: [
			{
				items: [
					{
						name: "Dashboard",
						icon: "home",
						path: "dashboard"
					},
					{
						name: "Usuários",
						icon: "users",
						path: "users"
					},
					{
						name: "Configurações",
						icon: "cog-6-tooth",
						path: "settings"
					}
				]
			}
		],
		opened: true
	}
};

export default meta;
