import { Component, input, model } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FktMenuGroup } from './fkt-side-menu.types';
import {FktIconComponent} from '../icon';
import { FktTooltipDirective } from '../tooltip';
import { FktDrawerComponent } from '../sidebar';

@Component({
	selector: 'fkt-side-menu',
	imports: [
		FktDrawerComponent,
		FktIconComponent,
		RouterLink,
		RouterLinkActive,
		FktTooltipDirective,
	],
	templateUrl: './fkt-side-menu.component.html',
	styleUrl: './fkt-side-menu.component.scss',
})
export class FktSideMenuComponent {
	groups = input.required<FktMenuGroup[]>()
	opened = model(true);
}
