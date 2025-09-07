import { Component, input } from '@angular/core';
import { FktMenuGroup, FktSideMenuComponent } from 'frakton-ng/side-menu';
import { RouterOutlet, Routes } from '@angular/router';
import { AdminDashboardPageComponent } from './pages/admin-dashboard-page/admin-dashboard-page.component';
import { AdminUsersPageComponent } from './pages/admin-users-page/admin-users-page.component';
import { AdminSettingsPageComponent } from './pages/admin-settings-page/admin-settings-page.component';


export const WITH_ROUTING_EXAMPLE_ROUTES: Routes = [
	{
		path: "dashboard",
		component: AdminDashboardPageComponent,
	},
	{
		path: "users",
		component: AdminUsersPageComponent,
	},
	{
		path: "settings",
		component: AdminSettingsPageComponent,
	},
	{
		path: "**",
		redirectTo: "dashboard",
	}
];

@Component({
	selector: 'with-routing-example',
	template: `
		<div class="with-routing-example">
			<fkt-side-menu
				[groups]="groups()"
				[opened]="opened()"
			>
				<router-outlet/>
			</fkt-side-menu>
		</div>
	`,
	styleUrl: './with-routing-example.component.scss',
	imports: [FktSideMenuComponent, RouterOutlet]
})
export class WithRoutingExampleComponent {
	groups = input.required<FktMenuGroup[]>();
	opened = input<boolean>(true);
}
