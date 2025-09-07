import { Component, input } from '@angular/core';
import { FktMenuGroup, FktSideMenuComponent } from 'frakton-ng/side-menu';

@Component({
	selector: 'multi-group-side-menu-example',
	templateUrl: './multi-group-side-menu-example.component.html',
	styleUrl: './multi-group-side-menu-example.component.scss',
	imports: [FktSideMenuComponent]
})
export class MultiGroupSideMenuExampleComponent {
	groups = input.required<FktMenuGroup[]>();
	opened = input<boolean>(true);
}
