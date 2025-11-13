import { Component, input } from '@angular/core';
import { FktMenuGroup, FktSideMenuComponent } from 'frakton-ng/side-menu';

@Component({
	selector: 'basic-side-menu-example',
	templateUrl: './basic-side-menu-example.component.html',
	styleUrl: './basic-side-menu-example.component.scss',
	imports: [FktSideMenuComponent]
})
export class BasicSideMenuExampleComponent {
	groups = input.required<FktMenuGroup[]>();
	opened = input<boolean>(true);
}
