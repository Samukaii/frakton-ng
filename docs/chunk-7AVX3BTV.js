import"./chunk-A25UGBQK.js";var e=`<div class="admin-dashboard-example">\r
	<fkt-side-menu\r
		[groups]="groups()"\r
		[(opened)]="menuOpened"\r
	>\r
		<!-- Main Content Area -->\r
		<div class="admin-dashboard-example__layout">\r
			<!-- Header -->\r
			<header class="admin-dashboard-example__header">\r
				<div class="admin-dashboard-example__header-left">\r
					<fkt-button\r
						[icon]="menuOpened() ? 'bars-3' : 'bars-3'"\r
						[shape]="'rect'"\r
						[theme]="'basic'"\r
						[color]="'primary'"\r
						[ariaLabel]="menuOpened() ? 'Close menu' : 'Open menu'"\r
						(click)="toggleMenu()"\r
					/>\r
					<h1 class="admin-dashboard-example__title">{{ currentPageTitle() }}</h1>\r
				</div>\r
				<div class="admin-dashboard-example__header-right">\r
					<fkt-button\r
						[icon]="'bell'"\r
						[shape]="'rect'"\r
						[theme]="'basic'"\r
						[color]="'primary'"\r
						ariaLabel="Notifications"\r
					/>\r
					<div class="admin-dashboard-example__avatar">\r
                        <fkt-icon name="user"/>\r
                    </div>\r
				</div>\r
			</header>\r
\r
			<!-- Main Content -->\r
			<main class="admin-dashboard-example__content">\r
				<div class="admin-dashboard-example__container">\r
					<div class="admin-dashboard-example__stats">\r
						<!-- Stats Cards -->\r
						<div class="admin-dashboard-example__card">\r
							<div class="admin-dashboard-example__card-header">\r
								<span class="admin-dashboard-example__card-label">Total Users</span>\r
								<div\r
									class="admin-dashboard-example__card-icon admin-dashboard-example__card-icon--blue">\r
									<fkt-icon name="user-group"/>\r
								</div>\r
							</div>\r
							<div class="admin-dashboard-example__card-value">1,249</div>\r
							<div\r
								class="admin-dashboard-example__card-change admin-dashboard-example__card-change--positive">\r
								+12.5% from last month\r
							</div>\r
						</div>\r
\r
						<div class="admin-dashboard-example__card">\r
							<div class="admin-dashboard-example__card-header">\r
								<span class="admin-dashboard-example__card-label">Revenue</span>\r
								<div\r
									class="admin-dashboard-example__card-icon admin-dashboard-example__card-icon--green">\r
									<fkt-icon name="currency-dollar"/>\r
								</div>\r
							</div>\r
							<div class="admin-dashboard-example__card-value">$54,329</div>\r
							<div\r
								class="admin-dashboard-example__card-change admin-dashboard-example__card-change--positive">\r
								+8.2% from last month\r
							</div>\r
						</div>\r
\r
						<div class="admin-dashboard-example__card">\r
							<div class="admin-dashboard-example__card-header">\r
								<span class="admin-dashboard-example__card-label">Orders</span>\r
								<div\r
									class="admin-dashboard-example__card-icon admin-dashboard-example__card-icon--yellow">\r
									<fkt-icon name="cube"/>\r
								</div>\r
							</div>\r
							<div class="admin-dashboard-example__card-value">328</div>\r
							<div\r
								class="admin-dashboard-example__card-change admin-dashboard-example__card-change--negative">\r
								-2.1% from last month\r
							</div>\r
						</div>\r
					</div>\r
\r
					<div class="admin-dashboard-example__activity">\r
						<h2 class="admin-dashboard-example__activity-title">Recent Activity</h2>\r
						<div class="admin-dashboard-example__activity-list">\r
							<div class="admin-dashboard-example__activity-item">\r
								<div\r
									class="admin-dashboard-example__activity-indicator admin-dashboard-example__activity-indicator--green"></div>\r
								<span class="admin-dashboard-example__activity-text">New user registration: john.doe&#64;example.com</span>\r
								<span class="admin-dashboard-example__activity-time">2 minutes ago</span>\r
							</div>\r
							<div class="admin-dashboard-example__activity-item">\r
								<div\r
									class="admin-dashboard-example__activity-indicator admin-dashboard-example__activity-indicator--blue"></div>\r
								<span\r
									class="admin-dashboard-example__activity-text">Order #1248 has been completed</span>\r
								<span class="admin-dashboard-example__activity-time">15 minutes ago</span>\r
							</div>\r
							<div class="admin-dashboard-example__activity-item">\r
								<div\r
									class="admin-dashboard-example__activity-indicator admin-dashboard-example__activity-indicator--yellow"></div>\r
								<span class="admin-dashboard-example__activity-text">Product inventory updated: Wireless Headphones</span>\r
								<span class="admin-dashboard-example__activity-time">1 hour ago</span>\r
							</div>\r
						</div>\r
					</div>\r
				</div>\r
			</main>\r
		</div>\r
	</fkt-side-menu>\r
</div>\r
`;var a=`* {\r
	box-sizing: border-box;\r
}\r
\r
.admin-dashboard-example {\r
	height: 100%;\r
	width: 100%;\r
	display: flex;\r
\r
	&__layout {\r
		display: flex;\r
		flex-direction: column;\r
		width: 100%;\r
		height: 100%;\r
		background-color: var(--fkt-color-neutral-background);\r
	}\r
\r
	&__header {\r
		border-bottom: 1px solid var(--fkt-color-neutral-200);\r
		background-color: var(--fkt-color-card-background);\r
\r
		padding: 16px 24px;\r
		display: flex;\r
		justify-content: space-between;\r
		align-items: center;\r
	}\r
\r
	&__header-left {\r
		display: flex;\r
		align-items: center;\r
		gap: 16px;\r
	}\r
\r
	&__header-right {\r
		display: flex;\r
		align-items: center;\r
		gap: 12px;\r
	}\r
\r
	&__title {\r
		margin: 0;\r
		font-size: 24px;\r
		font-weight: 600;\r
		color: var(--fkt-color-neutral-900);\r
	}\r
\r
	&__avatar {\r
		width: 32px;\r
		height: 32px;\r
        display: flex;\r
        justify-content: center;\r
        align-items: center;\r
        color: #f1f5f9;\r
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r
		border-radius: 50%;\r
	}\r
\r
	&__content {\r
		flex: 1;\r
		padding: 24px;\r
		overflow-y: auto;\r
	}\r
\r
	&__container {\r
		max-width: 1200px;\r
		margin: 0 auto;\r
	}\r
\r
	&__stats {\r
		display: grid;\r
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\r
		gap: 24px;\r
		margin-bottom: 32px;\r
	}\r
\r
	&__card {\r
		background: var(--fkt-color-card-background);\r
		border-radius: 8px;\r
		padding: 24px;\r
		border: 1px solid var(--fkt-color-neutral-300);\r
	}\r
\r
	&__card-header {\r
		display: flex;\r
		align-items: center;\r
		justify-content: space-between;\r
		margin-bottom: 8px;\r
	}\r
\r
	&__card-label {\r
		color: var(--fkt-color-neutral-600);\r
		font-size: 14px;\r
		font-weight: 500;\r
	}\r
\r
	&__card-icon {\r
		width: 32px;\r
		height: 32px;\r
		border-radius: 6px;\r
		display: flex;\r
		align-items: center;\r
		justify-content: center;\r
\r
		&--blue {\r
			background: var(--fkt-color-info-opacity-10);\r
			color: var(--fkt-color-info);\r
		}\r
\r
		&--green {\r
			background: var(--fkt-color-success-opacity-10);\r
			color: var(--fkt-color-success);\r
		}\r
\r
		&--yellow {\r
			background: var(--fkt-color-warning-opacity-10);\r
			color: var(--fkt-color-warning);\r
		}\r
	}\r
\r
	&__card-value {\r
		font-size: 32px;\r
		font-weight: 700;\r
		color: var(--fkt-color-neutral-900);\r
		margin-bottom: 4px;\r
	}\r
\r
	&__card-change {\r
		font-size: 14px;\r
		font-weight: 500;\r
\r
		&--positive {\r
			color: var(--fkt-color-success);\r
		}\r
\r
		&--negative {\r
			color: var(--fkt-color-danger);\r
		}\r
	}\r
\r
	&__activity {\r
		background: var(--fkt-color-card-background);\r
		border-radius: 8px;\r
		padding: 24px;\r
		border: 1px solid var(--fkt-color-neutral-300);\r
	}\r
\r
	&__activity-title {\r
		margin: 0 0 16px 0;\r
		font-size: 18px;\r
		font-weight: 600;\r
		color: var(--fkt-color-neutral-900);\r
	}\r
\r
	&__activity-list {\r
		display: flex;\r
		flex-direction: column;\r
		gap: 8px;\r
	}\r
\r
	&__activity-item {\r
		display: flex;\r
		align-items: center;\r
		gap: 12px;\r
		padding: 12px;\r
		background: var(--fkt-color-neutral-200);\r
		border-radius: 6px;\r
	}\r
\r
	&__activity-indicator {\r
		width: 8px;\r
		height: 8px;\r
		border-radius: 50%;\r
\r
		&--green {\r
			background: var(--fkt-color-success);\r
		}\r
\r
		&--blue {\r
			background: var(--fkt-color-info);\r
		}\r
\r
		&--yellow {\r
			background: var(--fkt-color-warning);\r
		}\r
	}\r
\r
	&__activity-text {\r
		flex: 1;\r
		color: var(--fkt-color-neutral-800);\r
	}\r
\r
	&__activity-time {\r
		color: var(--fkt-color-neutral-700);\r
		font-size: 14px;\r
	}\r
}\r
`;var t=`import { Component, computed, input, linkedSignal, signal } from '@angular/core';\r
import { FktMenuGroup, FktSideMenuComponent } from 'frakton-ng/side-menu';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { FktIconComponent } from 'frakton-ng/icon';\r
\r
@Component({\r
	selector: 'admin-dashboard-layout-example',\r
	templateUrl: './admin-dashboard-layout-example.component.html',\r
	styleUrl: './admin-dashboard-layout-example.component.scss',\r
	imports: [FktSideMenuComponent, FktButtonComponent, FktIconComponent]\r
})\r
export class AdminDashboardLayoutExampleComponent {\r
	groups = input.required<FktMenuGroup[]>();\r
	opened = input<boolean>(true);\r
\r
	menuOpened = linkedSignal(this.opened);\r
	private currentPage = signal('dashboard');\r
\r
	currentPageTitle = computed(() => {\r
		const page = this.currentPage();\r
		return page.charAt(0).toUpperCase() + page.slice(1);\r
	});\r
\r
	toggleMenu(): void {\r
		this.menuOpened.update(current => !current);\r
	}\r
}\r
`;var n=`<div class="basic-side-menu-example">\r
	<fkt-side-menu\r
		[groups]="groups()"\r
		[opened]="opened()"\r
	>\r
		<div class="basic-side-menu-example__content">\r
			<h1 class="basic-side-menu-example__title">Main Content</h1>\r
			<p class="basic-side-menu-example__description">This is the main content area. Use the side menu to\r
				navigate.</p>\r
		</div>\r
	</fkt-side-menu>\r
</div>\r
`;var o=`* {\r
	box-sizing: border-box;\r
}\r
\r
.basic-side-menu-example {\r
	height: 100%;\r
	width: 100%;\r
	display: flex;\r
\r
	&__content {\r
		padding: 24px;\r
		background-color: var(--fkt-color-neutral-background);\r
		width: 100%;\r
		height: 100%;\r
	}\r
\r
	&__title {\r
		margin: 0 0 16px 0;\r
		font-size: 24px;\r
		font-weight: 600;\r
	}\r
\r
	&__description {\r
		margin: 0;\r
		color: var(--fkt-color-neutral-600);\r
	}\r
}\r
`;var s=`import { Component, input } from '@angular/core';\r
import { FktMenuGroup, FktSideMenuComponent } from 'frakton-ng/side-menu';\r
\r
@Component({\r
	selector: 'basic-side-menu-example',\r
	templateUrl: './basic-side-menu-example.component.html',\r
	styleUrl: './basic-side-menu-example.component.scss',\r
	imports: [FktSideMenuComponent]\r
})\r
export class BasicSideMenuExampleComponent {\r
	groups = input.required<FktMenuGroup[]>();\r
	opened = input<boolean>(true);\r
}\r
`;var i=`<div class="collapsible-side-menu-example">\r
      <fkt-side-menu\r
        [groups]="groups()"\r
        [(opened)]="menuOpened"\r
      >\r
        <div class="collapsible-side-menu-example__content">\r
          <div class="collapsible-side-menu-example__header">\r
            <h1 class="collapsible-side-menu-example__title">Dashboard</h1>\r
            <fkt-button\r
              [text]="menuOpened() ? 'Collapse Menu' : 'Expand Menu'"\r
              [icon]="menuOpened() ? 'chevron-left' : 'chevron-right'"\r
              [theme]="'stroked'"\r
              [color]="'primary'"\r
              [iconPosition]="menuOpened() ? 'right' : 'left'"\r
              (click)="toggleMenu()"\r
            />\r
          </div>\r
          <p class="collapsible-side-menu-example__description">\r
            The side menu is currently <strong>{{ menuOpened() ? 'expanded' : 'collapsed' }}</strong>.\r
            When collapsed, hover over menu items to see tooltips with their full names.\r
          </p>\r
        </div>\r
      </fkt-side-menu>\r
    </div>`;var r=`* {\r
	box-sizing: border-box;\r
}\r
\r
.collapsible-side-menu-example {\r
	height: 100%;\r
	width: 100%;\r
	display: flex;\r
\r
	&__content {\r
		padding: 24px;\r
		background-color: var(--fkt-color-neutral-background);\r
		width: 100%;\r
		height: 100%;\r
	}\r
\r
	&__header {\r
		display: flex;\r
		justify-content: space-between;\r
		align-items: center;\r
		margin-bottom: 24px;\r
	}\r
\r
	&__title {\r
		margin: 0;\r
		font-size: 24px;\r
		font-weight: 600;\r
	}\r
\r
	&__description {\r
		margin: 0;\r
		color: var(--fkt-color-neutral-600);\r
		line-height: 1.6;\r
	}\r
}\r
`;var d=`import { Component, input, linkedSignal } from '@angular/core';\r
import { FktMenuGroup, FktSideMenuComponent } from 'frakton-ng/side-menu';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
\r
@Component({\r
	selector: 'collapsible-side-menu-example',\r
	templateUrl: './collapsible-side-menu-example.component.html',\r
	styleUrl: './collapsible-side-menu-example.component.scss',\r
	imports: [FktSideMenuComponent, FktButtonComponent]\r
})\r
export class CollapsibleSideMenuExampleComponent {\r
	groups = input.required<FktMenuGroup[]>();\r
	opened = input<boolean>(true);\r
\r
	menuOpened = linkedSignal(this.opened);\r
\r
	toggleMenu(): void {\r
		this.menuOpened.update(current => !current);\r
	}\r
}\r
`;var m=`<div class="dynamic-permissions-example">\r
	<fkt-side-menu\r
		[groups]="dynamicMenuGroups()"\r
		[opened]="opened()"\r
	>\r
		<div class="dynamic-permissions-example__content">\r
			<div class="dynamic-permissions-example__controls">\r
				<h1 class="dynamic-permissions-example__title">User Role: {{ currentRoleName() }}</h1>\r
				<div class="dynamic-permissions-example__role-selector">\r
					<fkt-badge-selector [options]="roles" [(value)]="userRole"/>\r
				</div>\r
			</div>\r
			<p class="dynamic-permissions-example__description">\r
				The menu items change based on the selected user role.\r
				Switch between roles to see how the navigation adapts dynamically.\r
			</p>\r
		</div>\r
	</fkt-side-menu>\r
</div>\r
`;var l=`* {\r
	box-sizing: border-box;\r
}\r
\r
.dynamic-permissions-example {\r
	height: 100%;\r
	width: 100%;\r
	display: flex;\r
\r
	&__content {\r
		padding: 24px;\r
		background-color: var(--fkt-color-neutral-background);\r
		width: 100%;\r
		height: 100%;\r
	}\r
\r
	&__controls {\r
		margin-bottom: 24px;\r
	}\r
\r
	&__title {\r
		margin: 0 0 16px 0;\r
		font-size: 24px;\r
		font-weight: 600;\r
	}\r
\r
	&__role-selector {\r
		display: flex;\r
		gap: 8px;\r
		flex-wrap: wrap;\r
	}\r
\r
	&__description {\r
		margin: 0;\r
		color: var(--fkt-color-neutral-600);\r
		line-height: 1.6;\r
	}\r
}\r
`;var p=`import { Component, computed, input, signal } from '@angular/core';\r
import { FktMenuGroup, FktSideMenuComponent } from 'frakton-ng/side-menu';\r
import { FktBadge, FktBadgeSelectorComponent } from 'frakton-ng/badge-selector';\r
\r
interface UserPermissions {\r
	canViewAnalytics: boolean;\r
	canManageUsers: boolean;\r
	canManageProducts: boolean;\r
	canViewReports: boolean;\r
	isAdmin: boolean;\r
}\r
\r
@Component({\r
	selector: 'dynamic-permissions-side-menu-example',\r
	templateUrl: './dynamic-permissions-side-menu-example.component.html',\r
	styleUrl: './dynamic-permissions-side-menu-example.component.scss',\r
	imports: [FktSideMenuComponent, FktBadgeSelectorComponent]\r
})\r
export class DynamicPermissionsSideMenuExampleComponent {\r
	groups = input.required<FktMenuGroup[]>();\r
	opened = input<boolean>(true);\r
\r
	protected userRole = signal<'admin' | 'manager' | 'user'>('user');\r
\r
	protected currentRoleName = computed(() => {\r
		const current = this.userRole();\r
\r
		return this.roles.find((role) => role.id === current)?.name;\r
	})\r
\r
	protected roles: FktBadge[] = [\r
		{\r
			id: "admin",\r
			name: "Admin",\r
			color: "danger"\r
		},\r
		{\r
			id: "manager",\r
			name: "Manager",\r
			color: "warning"\r
		},\r
		{\r
			id: "user",\r
			name: "User",\r
			color: "info"\r
		},\r
	]\r
\r
	protected userPermissions = computed<UserPermissions>(() => {\r
		const role = this.userRole();\r
		switch (role) {\r
			case 'admin':\r
				return {\r
					canViewAnalytics: true,\r
					canManageUsers: true,\r
					canManageProducts: true,\r
					canViewReports: true,\r
					isAdmin: true\r
				};\r
			case 'manager':\r
				return {\r
					canViewAnalytics: true,\r
					canManageUsers: false,\r
					canManageProducts: true,\r
					canViewReports: true,\r
					isAdmin: false\r
				};\r
			case 'user':\r
			default:\r
				return {\r
					canViewAnalytics: false,\r
					canManageUsers: false,\r
					canManageProducts: false,\r
					canViewReports: false,\r
					isAdmin: false\r
				};\r
		}\r
	});\r
\r
	protected dynamicMenuGroups = computed<FktMenuGroup[]>(() => {\r
		const permissions = this.userPermissions();\r
		const groups: FktMenuGroup[] = [\r
			{\r
				name: 'Main',\r
				items: [\r
					{name: 'Dashboard', icon: 'home', path: '/dashboard'}\r
				]\r
			}\r
		];\r
\r
		// Add analytics if user can view them\r
		if (permissions.canViewAnalytics) {\r
			groups[0].items.push({name: 'Analytics', icon: 'chart-bar', path: '/analytics'});\r
		}\r
\r
		// Add management section if user has management permissions\r
		if (permissions.canManageUsers || permissions.canManageProducts) {\r
			const managementItems: any[] = [];\r
\r
			if (permissions.canManageUsers) {\r
				managementItems.push({name: 'Users', icon: 'users', path: '/users'});\r
			}\r
\r
			if (permissions.canManageProducts) {\r
				managementItems.push({name: 'Products', icon: 'cube', path: '/products'});\r
			}\r
\r
			groups.push({\r
				name: 'Management',\r
				items: managementItems\r
			});\r
		}\r
\r
		// Add reports for managers and admins\r
		if (permissions.canViewReports) {\r
			groups.push({\r
				name: 'Reports',\r
				items: [\r
					{name: 'Sales Report', icon: 'document-chart-bar', path: '/reports/sales'},\r
					{name: 'User Activity', icon: 'chart-pie', path: '/reports/activity'}\r
				]\r
			});\r
		}\r
\r
		// Add admin-only section\r
		if (permissions.isAdmin) {\r
			groups.push({\r
				name: 'System',\r
				items: [\r
					{name: 'System Logs', icon: 'document-text', path: '/admin/logs'},\r
					{name: 'Security', icon: 'shield-check', path: '/admin/security'}\r
				]\r
			});\r
		}\r
\r
		// Always add settings at the end (no group name = divider)\r
		groups.push({\r
			items: [\r
				{name: 'Settings', icon: 'cog-6-tooth', path: '/settings'},\r
				{name: 'Profile', icon: 'user', path: '/profile'}\r
			]\r
		});\r
\r
		return groups;\r
	});\r
\r
	protected setRole(role: 'admin' | 'manager' | 'user'): void {\r
		this.userRole.set(role);\r
	}\r
}\r
`;var c=`<div class="multi-group-side-menu-example">\r
      <fkt-side-menu\r
        [groups]="groups()"\r
        [opened]="opened()"\r
      >\r
        <div class="multi-group-side-menu-example__content">\r
          <h1 class="multi-group-side-menu-example__title">Multi-Section Navigation</h1>\r
          <p class="multi-group-side-menu-example__description">\r
            This example shows how to organize menu items into logical groups.\r
            Groups with names display headers, while groups without names show dividers.\r
          </p>\r
        </div>\r
      </fkt-side-menu>\r
    </div>`;var u=`* {\r
	box-sizing: border-box;\r
}\r
\r
.multi-group-side-menu-example {\r
	height: 100%;\r
	width: 100%;\r
	display: flex;\r
\r
	&__content {\r
		padding: 24px;\r
		background-color: var(--fkt-color-neutral-background);\r
		width: 100%;\r
		height: 100%;\r
	}\r
\r
	&__title {\r
		margin: 0 0 16px 0;\r
		font-size: 24px;\r
		font-weight: 600;\r
	}\r
\r
	&__description {\r
		margin: 0;\r
		color: var(--fkt-color-neutral-600);\r
		line-height: 1.6;\r
	}\r
}\r
`;var g=`import { Component, input } from '@angular/core';\r
import { FktMenuGroup, FktSideMenuComponent } from 'frakton-ng/side-menu';\r
\r
@Component({\r
	selector: 'multi-group-side-menu-example',\r
	templateUrl: './multi-group-side-menu-example.component.html',\r
	styleUrl: './multi-group-side-menu-example.component.scss',\r
	imports: [FktSideMenuComponent]\r
})\r
export class MultiGroupSideMenuExampleComponent {\r
	groups = input.required<FktMenuGroup[]>();\r
	opened = input<boolean>(true);\r
}\r
`;var h=`<div class="admin-page admin-dashboard">\r
			<h1 class="admin-page__title">Dashboard</h1>\r
			<div class="admin-page__content">\r
				<p class="admin-dashboard__welcome">Bem-vindo ao painel de administra\xE7\xE3o! Aqui voc\xEA visualiza m\xE9tricas e\r
					acessos r\xE1pidos.</p>\r
				<div class="admin-dashboard__stats">\r
					<div class="admin-dashboard__stat">\r
						<span class="admin-dashboard__stat-label">Usu\xE1rios ativos</span>\r
						<span class="admin-dashboard__stat-value">1.245</span>\r
					</div>\r
					<div class="admin-dashboard__stat">\r
						<span class="admin-dashboard__stat-label">Novos cadastros</span>\r
						<span class="admin-dashboard__stat-value">38</span>\r
					</div>\r
					<div class="admin-dashboard__stat">\r
						<span class="admin-dashboard__stat-label">Visitas hoje</span>\r
						<span class="admin-dashboard__stat-value">8.102</span>\r
					</div>\r
				</div>\r
			</div>\r
		</div>`;var x=`* {\r
	box-sizing: border-box;\r
}\r
\r
.with-routing-example {\r
	height: 100%;\r
	width: 100%;\r
	display: block;\r
}\r
`;var _=`import { Component, input } from '@angular/core';\r
import { FktMenuGroup, FktSideMenuComponent } from 'frakton-ng/side-menu';\r
import { RouterOutlet, Routes } from '@angular/router';\r
import { AdminDashboardPageComponent } from './pages/admin-dashboard-page/admin-dashboard-page.component';\r
import { AdminUsersPageComponent } from './pages/admin-users-page/admin-users-page.component';\r
import { AdminSettingsPageComponent } from './pages/admin-settings-page/admin-settings-page.component';\r
\r
\r
export const WITH_ROUTING_EXAMPLE_ROUTES: Routes = [\r
	{\r
		path: "dashboard",\r
		component: AdminDashboardPageComponent,\r
	},\r
	{\r
		path: "users",\r
		component: AdminUsersPageComponent,\r
	},\r
	{\r
		path: "settings",\r
		component: AdminSettingsPageComponent,\r
	},\r
	{\r
		path: "**",\r
		redirectTo: "dashboard",\r
	}\r
];\r
\r
@Component({\r
	selector: 'with-routing-example',\r
	template: \`\r
		<div class="with-routing-example">\r
			<fkt-side-menu\r
				[groups]="groups()"\r
				[opened]="opened()"\r
			>\r
				<router-outlet/>\r
			</fkt-side-menu>\r
		</div>\r
	\`,\r
	styleUrl: './with-routing-example.component.scss',\r
	imports: [FktSideMenuComponent, RouterOutlet]\r
})\r
export class WithRoutingExampleComponent {\r
	groups = input.required<FktMenuGroup[]>();\r
	opened = input<boolean>(true);\r
}\r
`;var b=`<div class="admin-page admin-dashboard">\r
	<h1 class="admin-page__title">Dashboard</h1>\r
	<div class="admin-page__content">\r
		<p class="admin-dashboard__welcome">Bem-vindo ao painel de administra\xE7\xE3o! Aqui voc\xEA visualiza m\xE9tricas e\r
			acessos r\xE1pidos.</p>\r
		<div class="admin-dashboard__stats">\r
			<div class="admin-dashboard__stat">\r
				<span class="admin-dashboard__stat-label">Usu\xE1rios ativos</span>\r
				<span class="admin-dashboard__stat-value">1.245</span>\r
			</div>\r
			<div class="admin-dashboard__stat">\r
				<span class="admin-dashboard__stat-label">Novos cadastros</span>\r
				<span class="admin-dashboard__stat-value">38</span>\r
			</div>\r
			<div class="admin-dashboard__stat">\r
				<span class="admin-dashboard__stat-label">Visitas hoje</span>\r
				<span class="admin-dashboard__stat-value">8.102</span>\r
			</div>\r
		</div>\r
	</div>\r
</div>\r
`;var f=`* {\r
	box-sizing: border-box;\r
}\r
\r
:host {\r
	display: block;\r
	height: 100%;\r
}\r
\r
.admin-page {\r
	padding: 40px 24px;\r
	height: 100%;\r
	background: var(--fkt-color-neutral-background);\r
}\r
\r
.admin-page__title {\r
	font-size: 2.2rem;\r
	margin-bottom: 18px;\r
	font-weight: 700;\r
	color: var(--fkt-color-neutral-800);\r
}\r
\r
.admin-page__content {\r
	background: var(--fkt-color-card-background);\r
	border-radius: 10px;\r
	box-shadow: var(--fkt-shadow-md);\r
	padding: 32px;\r
}\r
\r
.admin-dashboard__welcome {\r
	margin-bottom: 24px;\r
	color: var(--fkt-color-neutral-800);\r
}\r
\r
.admin-dashboard__stats {\r
	display: flex;\r
	gap: 32px;\r
}\r
\r
.admin-dashboard__stat {\r
	background: var(--fkt-color-neutral-200);\r
	border-radius: 8px;\r
	padding: 24px 18px;\r
	flex: 1;\r
	text-align: center;\r
}\r
\r
.admin-dashboard__stat-label {\r
	font-size: 1rem;\r
	color: var(--fkt-color-neutral-600);\r
}\r
\r
.admin-dashboard__stat-value {\r
	font-size: 2rem;\r
	font-weight: 600;\r
	color: var(--fkt-color-neutral-800);\r
	margin-top: 8px;\r
	display: block;\r
}\r
\r
`;var v=`import { Component } from "@angular/core";\r
\r
@Component({\r
	selector: 'admin-dashboard-page',\r
	templateUrl: './admin-dashboard-page.component.html',\r
	styleUrl: './admin-dashboard-page.component.scss'\r
})\r
export class AdminDashboardPageComponent {\r
}\r
`;var k=`<div class="admin-page admin-settings">\r
	<h1 class="admin-page__title">Configura\xE7\xF5es do Sistema</h1>\r
	<div class="admin-page__content">\r
		<form class="admin-settings__form">\r
			<fkt-input\r
				label="Nome da aplica\xE7\xE3o"\r
				placeholder="Informe aqui o nome da aplica\xE7\xE3o"\r
				[field]="form.name"\r
			/>\r
			<fkt-checkbox\r
				label="Modo escuro"\r
				[field]="form.darkMode"\r
			/>\r
			<fkt-button\r
				type="submit"\r
				text="Salvar configura\xE7\xF5es"\r
			/>\r
		</form>\r
	</div>\r
</div>\r
`;var y=`* {\r
	box-sizing: border-box;\r
}\r
\r
:host {\r
	display: block;\r
	height: 100%;\r
}\r
\r
.admin-page {\r
	padding: 40px 24px;\r
	height: 100%;\r
	background: var(--fkt-color-neutral-background);\r
}\r
\r
.admin-page__title {\r
	font-size: 2.2rem;\r
	margin-bottom: 18px;\r
	font-weight: 700;\r
	color: var(--fkt-color-neutral-800);\r
}\r
\r
.admin-page__content {\r
	background: var(--fkt-color-card-background);\r
	border-radius: 10px;\r
	box-shadow: var(--fkt-shadow-md);\r
	padding: 32px;\r
}\r
\r
.admin-settings__form {\r
	display: flex;\r
	flex-direction: column;\r
	gap: .5rem;\r
\r
	fkt-button {\r
		margin-top: 1rem;\r
	}\r
}\r
`;var w=`import { Component, signal } from "@angular/core";\r
import { FktButtonComponent } from "frakton-ng/button";\r
import { FktCheckboxComponent } from "frakton-ng/checkbox";\r
import { FktInputComponent } from "frakton-ng/input";\r
import { Field, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'admin-settings-page',\r
	templateUrl: './admin-settings-page.component.html',\r
	imports: [\r
		FktButtonComponent,\r
		FktCheckboxComponent,\r
		FktInputComponent,\r
		Field\r
	],\r
	styleUrl: './admin-settings-page.component.scss'\r
})\r
export class AdminSettingsPageComponent {\r
	private value = signal({\r
		name: '',\r
		darkMode: false,\r
	})\r
\r
	protected form = form(this.value);\r
}\r
`;var C=`<div class="admin-page admin-users">\r
			<h1 class="admin-page__title">Gest\xE3o de Usu\xE1rios</h1>\r
			<div class="admin-page__content">\r
				<p class="admin-users__subtitle">Acompanhe, edite e remova usu\xE1rios cadastrados.</p>\r
				<ul class="admin-users__list">\r
					<li class="admin-users__item">\r
						<span class="admin-users__avatar">AB</span>\r
						<span class="admin-users__name">Ana Beatriz</span>\r
						<fkt-badge\r
							text="Administrador"\r
							color="warning"\r
						/>\r
						<fkt-button\r
							text="Editar"\r
						/>\r
					</li>\r
					<li class="admin-users__item">\r
						<span class="admin-users__avatar">RF</span>\r
						<span class="admin-users__name">Rafael Ferreira</span>\r
						<fkt-badge\r
							text="Usu\xE1rio"\r
							color="info"\r
						/>\r
						<fkt-button\r
							text="Editar"\r
						/>\r
					</li>\r
					<li class="admin-users__item">\r
						<span class="admin-users__avatar">JG</span>\r
						<span class="admin-users__name">Jo\xE3o Guilherme</span>\r
						<fkt-badge\r
							text="Usu\xE1rio"\r
							color="info"\r
						/>\r
						<fkt-button\r
							text="Editar"\r
						/>\r
					</li>\r
				</ul>\r
			</div>\r
		</div>\r
`;var M=`* {\r
	box-sizing: border-box;\r
}\r
\r
:host {\r
	display: block;\r
	height: 100%;\r
}\r
\r
.admin-page {\r
	padding: 40px 24px;\r
	height: 100%;\r
	background: var(--fkt-color-neutral-background);\r
}\r
\r
.admin-page__title {\r
	font-size: 2.2rem;\r
	margin-bottom: 18px;\r
	font-weight: 700;\r
	color: var(--fkt-color-neutral-800);\r
}\r
\r
.admin-page__content {\r
	background: var(--fkt-color-card-background);\r
	border-radius: 10px;\r
	box-shadow: var(--fkt-shadow-md);\r
	padding: 32px;\r
}\r
\r
.admin-users__subtitle {\r
	margin-bottom: 22px;\r
	color: var(--fkt-color-neutral-600);\r
}\r
\r
.admin-users__list {\r
	list-style: none;\r
	padding: 0;\r
	margin: 0;\r
}\r
\r
.admin-users__item {\r
	display: flex;\r
	align-items: center;\r
	gap: 18px;\r
	padding: 18px 0;\r
	border-bottom: 1px solid var(--fkt-color-neutral-400);\r
}\r
\r
.admin-users__avatar {\r
	background:  var(--fkt-color-neutral-300);\r
	color: var(--fkt-color-neutral-600);\r
	border-radius: 50%;\r
	width: 38px;\r
	height: 38px;\r
	display: flex;\r
	align-items: center;\r
	justify-content: center;\r
	font-weight: 700;\r
	font-size: 1.1rem;\r
}\r
\r
.admin-users__name {\r
	flex: 1;\r
	font-weight: 500;\r
	color: var(--fkt-color-neutral-900);\r
}\r
`;var S=`import { Component } from "@angular/core";\r
import { FktButtonComponent } from "frakton-ng/button";\r
import { FktBadgeComponent } from "frakton-ng/badge";\r
\r
@Component({\r
	selector: 'admin-users-page',\r
	templateUrl: './admin-users-page.component.html',\r
	imports: [\r
		FktButtonComponent,\r
		FktBadgeComponent\r
	],\r
	styleUrl: './admin-users-page.component.scss'\r
})\r
export class AdminUsersPageComponent {\r
}\r
`;var ea={AdminDashboardLayoutExampleComponent:{name:"AdminDashboardLayoutExample",files:[{name:"admin-dashboard-layout-example.component.html",content:e,language:"html"},{name:"admin-dashboard-layout-example.component.ts",content:t,language:"typescript"},{name:"admin-dashboard-layout-example.component.scss",content:a,language:"css"}]},BasicSideMenuExampleComponent:{name:"BasicSideMenuExample",files:[{name:"basic-side-menu-example.component.html",content:n,language:"html"},{name:"basic-side-menu-example.component.ts",content:s,language:"typescript"},{name:"basic-side-menu-example.component.scss",content:o,language:"css"}]},CollapsibleSideMenuExampleComponent:{name:"CollapsibleSideMenuExample",files:[{name:"collapsible-side-menu-example.component.html",content:i,language:"html"},{name:"collapsible-side-menu-example.component.ts",content:d,language:"typescript"},{name:"collapsible-side-menu-example.component.scss",content:r,language:"css"}]},DynamicPermissionsSideMenuExampleComponent:{name:"DynamicPermissionsSideMenuExample",files:[{name:"dynamic-permissions-side-menu-example.component.html",content:m,language:"html"},{name:"dynamic-permissions-side-menu-example.component.ts",content:p,language:"typescript"},{name:"dynamic-permissions-side-menu-example.component.scss",content:l,language:"css"}]},MultiGroupSideMenuExampleComponent:{name:"MultiGroupSideMenuExample",files:[{name:"multi-group-side-menu-example.component.html",content:c,language:"html"},{name:"multi-group-side-menu-example.component.ts",content:g,language:"typescript"},{name:"multi-group-side-menu-example.component.scss",content:u,language:"css"}]},WithRoutingExampleComponent:{name:"WithRoutingExample",files:[{name:"with-routing-example.component.html",content:h,language:"html"},{name:"with-routing-example.component.ts",content:_,language:"typescript"},{name:"with-routing-example.component.scss",content:x,language:"css"}]},AdminDashboardPageComponent:{name:"AdminDashboardPage",files:[{name:"admin-dashboard-page.component.html",content:b,language:"html"},{name:"admin-dashboard-page.component.ts",content:v,language:"typescript"},{name:"admin-dashboard-page.component.scss",content:f,language:"css"}]},AdminSettingsPageComponent:{name:"AdminSettingsPage",files:[{name:"admin-settings-page.component.html",content:k,language:"html"},{name:"admin-settings-page.component.ts",content:w,language:"typescript"},{name:"admin-settings-page.component.scss",content:y,language:"css"}]},AdminUsersPageComponent:{name:"AdminUsersPage",files:[{name:"admin-users-page.component.html",content:C,language:"html"},{name:"admin-users-page.component.ts",content:S,language:"typescript"},{name:"admin-users-page.component.scss",content:M,language:"css"}]}};export{ea as default};
