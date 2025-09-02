import { Component, input, model } from '@angular/core';
import { FktMenuGroup } from './fkt-side-menu.types';
import { FktIconComponent } from '@frakton-ng/icon';
import { FktTooltipDirective } from '@frakton-ng/tooltip';
import { FktDrawerComponent } from '@frakton-ng/drawer';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'fkt-side-menu',
	imports: [
		FktDrawerComponent,
		FktIconComponent,
		FktTooltipDirective,
		RouterLink,
	],
	templateUrl: './fkt-side-menu.component.html',
	styleUrl: './fkt-side-menu.component.scss',
})
export class FktSideMenuComponent {
	groups = input.required<FktMenuGroup[]>()
	opened = model(true);
}
