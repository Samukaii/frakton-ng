import { Component, computed, input, signal } from '@angular/core';
import { FktMenuGroup, FktSideMenuComponent } from 'frakton-ng/side-menu';
import { FktBadge, FktBadgeSelectorComponent } from 'frakton-ng/badge-selector';

interface UserPermissions {
	canViewAnalytics: boolean;
	canManageUsers: boolean;
	canManageProducts: boolean;
	canViewReports: boolean;
	isAdmin: boolean;
}

@Component({
	selector: 'dynamic-permissions-side-menu-example',
	templateUrl: './dynamic-permissions-side-menu-example.component.html',
	styleUrl: './dynamic-permissions-side-menu-example.component.scss',
	imports: [FktSideMenuComponent, FktBadgeSelectorComponent]
})
export class DynamicPermissionsSideMenuExampleComponent {
	groups = input.required<FktMenuGroup[]>();
	opened = input<boolean>(true);

	protected userRole = signal<'admin' | 'manager' | 'user'>('user');

	protected currentRoleName = computed(() => {
		const current = this.userRole();

		return this.roles.find((role) => role.id === current)?.name;
	})

	protected roles: FktBadge[] = [
		{
			id: "admin",
			name: "Admin",
			color: "danger"
		},
		{
			id: "manager",
			name: "Manager",
			color: "warning"
		},
		{
			id: "user",
			name: "User",
			color: "info"
		},
	]

	protected userPermissions = computed<UserPermissions>(() => {
		const role = this.userRole();
		switch (role) {
			case 'admin':
				return {
					canViewAnalytics: true,
					canManageUsers: true,
					canManageProducts: true,
					canViewReports: true,
					isAdmin: true
				};
			case 'manager':
				return {
					canViewAnalytics: true,
					canManageUsers: false,
					canManageProducts: true,
					canViewReports: true,
					isAdmin: false
				};
			case 'user':
			default:
				return {
					canViewAnalytics: false,
					canManageUsers: false,
					canManageProducts: false,
					canViewReports: false,
					isAdmin: false
				};
		}
	});

	protected dynamicMenuGroups = computed<FktMenuGroup[]>(() => {
		const permissions = this.userPermissions();
		const groups: FktMenuGroup[] = [
			{
				name: 'Main',
				items: [
					{name: 'Dashboard', icon: 'home', path: '/dashboard'}
				]
			}
		];

		// Add analytics if user can view them
		if (permissions.canViewAnalytics) {
			groups[0].items.push({name: 'Analytics', icon: 'chart-bar', path: '/analytics'});
		}

		// Add management section if user has management permissions
		if (permissions.canManageUsers || permissions.canManageProducts) {
			const managementItems: any[] = [];

			if (permissions.canManageUsers) {
				managementItems.push({name: 'Users', icon: 'users', path: '/users'});
			}

			if (permissions.canManageProducts) {
				managementItems.push({name: 'Products', icon: 'cube', path: '/products'});
			}

			groups.push({
				name: 'Management',
				items: managementItems
			});
		}

		// Add reports for managers and admins
		if (permissions.canViewReports) {
			groups.push({
				name: 'Reports',
				items: [
					{name: 'Sales Report', icon: 'document-chart-bar', path: '/reports/sales'},
					{name: 'User Activity', icon: 'chart-pie', path: '/reports/activity'}
				]
			});
		}

		// Add admin-only section
		if (permissions.isAdmin) {
			groups.push({
				name: 'System',
				items: [
					{name: 'System Logs', icon: 'document-text', path: '/admin/logs'},
					{name: 'Security', icon: 'shield-check', path: '/admin/security'}
				]
			});
		}

		// Always add settings at the end (no group name = divider)
		groups.push({
			items: [
				{name: 'Settings', icon: 'cog-6-tooth', path: '/settings'},
				{name: 'Profile', icon: 'user', path: '/profile'}
			]
		});

		return groups;
	});

	protected setRole(role: 'admin' | 'manager' | 'user'): void {
		this.userRole.set(role);
	}
}
