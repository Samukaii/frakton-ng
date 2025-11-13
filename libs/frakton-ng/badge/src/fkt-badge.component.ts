import { Component, computed, input } from '@angular/core';
import { FktBadgeColor, FktBadgeVariant } from './fkt-badge.types';

/**
 * A component that displays a styled badge with customizable color and variant.
 *
 * @example
 * ```html
 * <fkt-badge
 *   text="Urgent"
 *   color="danger"
 *   variant="opaque">
 * </fkt-badge>
 * ```
 *
 * @example
 * ```typescript
 * export class MyComponent {
 *   badgeText = 'New Feature';
 *   badgeColor: FktBadgeColor = 'blue';
 *   badgeVariant: FktBadgeVariant = 'transparent';
 * }
 * ```
 */
@Component({
	selector: 'fkt-badge',
	imports: [],
	templateUrl: './fkt-badge.component.html',
	styleUrl: './fkt-badge.component.scss',
})
export class FktBadgeComponent {
	/**
	 * The text content to display in the badge
	 */
	text = input<string>();

	/**
	 * The color theme of the badge
	 * @required
	 */
	color = input.required<FktBadgeColor>();

	/**
	 * The visual variant of the badge
	 * @default 'opaque'
	 */
	variant = input<FktBadgeVariant>('opaque');

	protected classes = computed(() => {
		const color = this.color();
		const variant = this.variant();

		return [
			`badge--${color}`,
			`badge--${variant}`,
			'badge',
		];
	});
}
