import { FktMenuGroup, FktSideMenuComponent } from 'frakton-ng/side-menu';
import {
    AdminDashboardLayoutExampleComponent,
    DynamicPermissionsSideMenuExampleComponent,
    WithRoutingExampleComponent
} from './examples';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-side-menu.docs.md' with { loader: 'text' };
import { provideRouter } from '@angular/router';
import { fontIconNames } from 'frakton-ng/icon';

const meta: Meta<FktSideMenuComponent> = {
    title: "Components/Navigation/Side Menu",
    description: "A responsive and customizable side navigation menu component with collapsible states, grouped menu items, and integrated routing support. Built with Angular signals for optimal performance and provides tooltips for collapsed states.",
    component: FktSideMenuComponent,
    documentation,
    panelStyle: {
        outerHeight: "800px",
        outerWidth: '100%',
        fillContainer: true,
        outerPadding: '0px'
    },
    argTypes: {
        groups: {
            control: 'array',
            schema: {
                name: 'text',
                items: {
                    type: "array",
                    schema: {
                        name: 'text',
                        icon: {
                            type: 'select',
                            options: fontIconNames,
                        },
                        path: 'text',
                    }
                }
            },
            category: "Attributes",
            type: 'FktMenuGroup[]',
            import: "import {FktMenuGroup} from 'frakton-ng/side-menu'",
            defaultValue: "[]",
            description: 'Array of menu groups to display in the side menu'
        },
        opened: {
            control: 'boolean',
            category: "Attributes",
            type: 'boolean',
            defaultValue: "true",
            description: 'Whether the side menu is opened with two-way binding'
        }
    }
}

const defaultMenuGroups: FktMenuGroup[] = [
    {
        items: [
            {name: 'Dashboard', icon: 'home', path: '/dashboard'},
            {name: 'Users', icon: 'users', path: '/users'},
            {name: 'Settings', icon: 'cog-6-tooth', path: '/settings'},
            {name: 'Reports', icon: 'chart-bar', path: '/reports'}
        ]
    }
];

const collapsibleMenuGroups: FktMenuGroup[] = [
    {
        items: [
            {name: 'Dashboard', icon: 'home', path: '/dashboard'},
            {name: 'Analytics', icon: 'chart-bar', path: '/analytics'},
            {name: 'Users', icon: 'users', path: '/users'},
            {name: 'Products', icon: 'cube', path: '/products'},
            {name: 'Orders', icon: 'shopping-cart', path: '/orders'},
            {name: 'Settings', icon: 'cog-6-tooth', path: '/settings'}
        ]
    }
];

const multiGroupMenus: FktMenuGroup[] = [
    {
        name: 'Main',
        items: [
            {name: 'Dashboard', icon: 'home', path: '/dashboard'},
            {name: 'Analytics', icon: 'chart-bar', path: '/analytics'},
            {name: 'Overview', icon: 'eye', path: '/overview'}
        ]
    },
    {
        name: 'Management',
        items: [
            {name: 'Users', icon: 'users', path: '/users'},
            {name: 'Products', icon: 'cube', path: '/products'},
            {name: 'Orders', icon: 'shopping-cart', path: '/orders'}
        ]
    },
    {
        items: [
            {name: 'Settings', icon: 'cog-6-tooth', path: '/settings'},
            {name: 'Profile', icon: 'user', path: '/profile'},
            {name: 'Help', icon: 'question-mark-circle', path: '/help'}
        ]
    }
];

const permissionsMenuGroups: FktMenuGroup[] = [
    {
        name: 'Main',
        items: [
            {name: 'Dashboard', icon: 'home', path: '/dashboard'},
            {name: 'Analytics', icon: 'chart-bar', path: '/analytics'}
        ]
    },
    {
        name: 'Management',
        items: [
            {name: 'Products', icon: 'cube', path: '/products'}
        ]
    },
    {
        name: 'Reports',
        items: [
            {name: 'Sales Report', icon: 'document-chart-bar', path: '/reports/sales'},
            {name: 'User Activity', icon: 'chart-pie', path: '/reports/activity'}
        ]
    },
    {
        items: [
            {name: 'Settings', icon: 'cog-6-tooth', path: '/settings'},
            {name: 'Profile', icon: 'user', path: '/profile'}
        ]
    }
];

const adminMenuGroups: FktMenuGroup[] = [
    {
        name: 'Overview',
        items: [
            {name: 'Dashboard', icon: 'home', path: '/dashboard'},
            {name: 'Analytics', icon: 'chart-bar', path: '/analytics'},
            {name: 'Reports', icon: 'document-chart-bar', path: '/reports'}
        ]
    },
    {
        name: 'Management',
        items: [
            {name: 'Users', icon: 'users', path: '/users'},
            {name: 'Products', icon: 'cube', path: '/products'},
            {name: 'Orders', icon: 'shopping-cart', path: '/orders'},
            {name: 'Inventory', icon: 'squares-2x2', path: '/inventory'}
        ]
    },
    {
        name: 'System',
        items: [
            {name: 'Settings', icon: 'cog-6-tooth', path: '/settings'},
            {name: 'Security', icon: 'shield-check', path: '/security'},
            {name: 'Logs', icon: 'document-text', path: '/logs'}
        ]
    },
    {
        items: [
            {name: 'Profile', icon: 'user', path: '/profile'},
            {name: 'Help & Support', icon: 'question-mark-circle', path: '/support'}
        ]
    }
];


export const BasicSideMenu: Story<FktSideMenuComponent> = {
    description: "Basic side menu with simple menu groups and items for standard navigation.",
    providers: [
        provideRouter([])
    ],
    args: {
        groups: defaultMenuGroups,
        opened: true
    }
};

export const CollapsibleSideMenu: Story<FktSideMenuComponent> = {
    description: "Side menu in collapsed state showing only icons with tooltips for space-efficient navigation.",
    providers: [
        provideRouter([])
    ],
    args: {
        groups: collapsibleMenuGroups,
        opened: true
    }
};

export const MultipleGroups: Story<FktSideMenuComponent> = {
    description: "Side menu with multiple grouped sections for organized navigation in complex applications.",
    providers: [
        provideRouter([])
    ],
    args: {
        groups: multiGroupMenus,
        opened: true
    }
};

export const DynamicMenuWithPermissions: Story<DynamicPermissionsSideMenuExampleComponent> = {
    component: DynamicPermissionsSideMenuExampleComponent,
    description: "Advanced example showing dynamic menu generation based on user permissions.",
    providers: [
        provideRouter([])
    ],
    args: {
        groups: permissionsMenuGroups,
        opened: true
    }
};

export const AdminDashboardLayout: Story<AdminDashboardLayoutExampleComponent> = {
    component: AdminDashboardLayoutExampleComponent,
    description: "Complete dashboard layout showcasing real-world usage with content integration.",
    providers: [
        provideRouter([])
    ],
    args: {
        groups: adminMenuGroups,
        opened: true
    }
};

export const WithRouting: Story<WithRoutingExampleComponent> = {
    component: WithRoutingExampleComponent,
    description: "Complete dashboard layout showcasing real-world usage with content integration.",
    providers: [
        provideRouter([])
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
