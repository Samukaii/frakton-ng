import { Component, computed, input } from '@angular/core';
import { FktTagColor, FktTagVariant } from './fkt-tag.types';

/**
 * A component that displays a styled badge with customizable color and variant.
 *
 * @example
 * ```html
 * <fkt-tag
 *   text="Urgent"
 *   color="danger"
 *   variant="opaque">
 * </fkt-tag>
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
	selector: 'fkt-tag',
	imports: [],
	templateUrl: './fkt-tag.component.html',
	styleUrl: './fkt-tag.component.scss',
})
export class FktTagComponent {
	/**
	 * The text content to display in the badge
	 */
	text = input<string>();

	/**
	 * The color theme of the badge
	 * @required
	 */
	color = input.required<FktTagColor>();

	/**
	 * The visual variant of the badge
	 * @default 'opaque'
	 */
	variant = input<FktTagVariant>('opaque');

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
