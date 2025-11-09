import { Component, input, linkedSignal } from '@angular/core';
import { FktMenuGroup, FktSideMenuComponent } from 'frakton-ng/side-menu';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
	selector: 'collapsible-side-menu-example',
	templateUrl: './collapsible-side-menu-example.component.html',
	styleUrl: './collapsible-side-menu-example.component.scss',
	imports: [FktSideMenuComponent, FktButtonComponent]
})
export class CollapsibleSideMenuExampleComponent {
	groups = input.required<FktMenuGroup[]>();
	opened = input<boolean>(true);

	menuOpened = linkedSignal(this.opened);

	toggleMenu(): void {
		this.menuOpened.update(current => !current);
	}
}
