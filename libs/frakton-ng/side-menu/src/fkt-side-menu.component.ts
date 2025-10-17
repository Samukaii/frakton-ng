import { Component, input, model } from '@angular/core';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktTooltipDirective } from 'frakton-ng/tooltip';
import { FktDrawerComponent } from 'frakton-ng/drawer';
import { RouterLink } from '@angular/router';
import { FktMenuGroup } from './fkt-side-menu.types';

/**
 * A component that displays a collapsible side navigation menu with grouped menu items.
 * 
 * @example
 * ```html
 * <fkt-side-menu 
 *   [groups]="menuGroups"
 *   [(opened)]="isMenuOpen">
 * </fkt-side-menu>
 * ```
 * 
 * @example
 * ```typescript
 * export class MyComponent {
 *   isMenuOpen = signal(true);
 *   menuGroups: FktMenuGroup[] = [
 *     {
 *       title: 'Main',
 *       items: [
 *         { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
 *         { label: 'Profile', icon: 'person', route: '/profile' }
 *       ]
 *     }
 *   ];
 * }
 * ```
 */
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
	/**
	 * Array of menu groups to display in the side menu
	 * @required
	 */
	groups = input.required<FktMenuGroup[]>()
	
	/**
	 * Whether the side menu is opened with two-way binding
	 * @default true
	 */
	opened = model(true);
}
