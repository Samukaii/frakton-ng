import { Component, computed, input, linkedSignal, signal } from '@angular/core';
import { FktMenuGroup, FktSideMenuComponent } from 'frakton-ng/side-menu';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
	selector: 'admin-dashboard-layout-example',
	templateUrl: './admin-dashboard-layout-example.component.html',
	styleUrl: './admin-dashboard-layout-example.component.scss',
	imports: [FktSideMenuComponent, FktButtonComponent, FktIconComponent]
})
export class AdminDashboardLayoutExampleComponent {
	groups = input.required<FktMenuGroup[]>();
	opened = input<boolean>(true);

	menuOpened = linkedSignal(this.opened);
	private currentPage = signal('dashboard');

	currentPageTitle = computed(() => {
		const page = this.currentPage();
		return page.charAt(0).toUpperCase() + page.slice(1);
	});

	toggleMenu(): void {
		this.menuOpened.update(current => !current);
	}
}
