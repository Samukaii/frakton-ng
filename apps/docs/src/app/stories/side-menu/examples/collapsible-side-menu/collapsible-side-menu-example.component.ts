import { Component, input, linkedSignal } from '@angular/core';
import { FktMenuGroup, FktSideMenuComponent } from 'frakton-ng/side-menu';
import { FktButtonLegacyComponent } from 'frakton-ng/button-legacy';

@Component({
	selector: 'collapsible-side-menu-example',
	templateUrl: './collapsible-side-menu-example.component.html',
	styleUrl: './collapsible-side-menu-example.component.scss',
	imports: [FktSideMenuComponent, FktButtonLegacyComponent]
})
export class CollapsibleSideMenuExampleComponent {
	groups = input.required<FktMenuGroup[]>();
	opened = input<boolean>(true);

	menuOpened = linkedSignal(this.opened);

	toggleMenu(): void {
		this.menuOpened.update(current => !current);
	}
}
