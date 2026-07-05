import { booleanAttribute, Component, input } from '@angular/core';
import { FktButtonAction, FktButtonLegacyComponent } from 'frakton-ng/button-legacy';
import { FktTooltipDirective } from 'frakton-ng/tooltip';
import { FktButtonsListAlignment, FktButtonsListOrientation } from './fkt-buttons-list.types';

/**
 * A component that displays a list of buttons with configurable layout and alignment.
 *
 * @example
 * ```html
 * <fkt-buttons-list
 *   [actions]="buttonActions"
 *   [context]="userData"
 *   orientation="horizontal"
 *   [fill]="true"
 *   horizontalAlignment="end">
 * </fkt-buttons-list>
 * ```
 *
 * @example
 * ```typescript
 * export class MyComponent {
 *   userData = { id: 1, name: 'John' };
 *   buttonActions: FktButtonAction[] = [
 *     { label: 'Edit', action: (context) => this.edit(context) },
 *     { label: 'Delete', action: (context) => this.delete(context) }
 *   ];
 * }
 * ```
 */
@Component({
	selector: 'fkt-buttons-list',
	imports: [FktButtonLegacyComponent, FktTooltipDirective],
	templateUrl: './fkt-buttons-list.component.html',
	styleUrl: './fkt-buttons-list.component.scss',
	host: {
		'[class.vertical]': 'orientation() === "vertical"',
		'[class.horizontal]': 'orientation() === "horizontal"',
		'[class.fill]': 'fill()',
		'[style.--vertical-alignment]': 'verticalAlignment()',
		'[style.--horizontal-alignment]': 'horizontalAlignment()',
	},
})
export class FktButtonsListComponent<T> {
	/**
	 * Context object passed to button actions
	 */
	context = input<T>();

	/**
	 * Layout orientation of the buttons
	 * @default 'horizontal'
	 */
	orientation = input<FktButtonsListOrientation | undefined>('horizontal');

	/**
	 * Whether buttons should fill the available space
	 * @default false
	 */
	fill = input(false as boolean | undefined, { transform: booleanAttribute });

	/**
	 * Vertical alignment of buttons
	 * @default 'start'
	 */
	verticalAlignment = input<FktButtonsListAlignment | undefined>('start');

	/**
	 * Horizontal alignment of buttons
	 * @default 'start'
	 */
	horizontalAlignment = input<FktButtonsListAlignment | undefined>('start');

	/**
	 * Array of button actions to display
	 * @required
	 */
	actions = input.required<FktButtonAction[]>();
}
