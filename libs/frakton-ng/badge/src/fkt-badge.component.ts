import { Component, computed, input } from '@angular/core';
import { FktBadgeColor, FktBadgeVariant } from './fkt-badge.types';

@Component({
	selector: 'fkt-badge',
	imports: [],
	templateUrl: './fkt-badge.component.html',
	styleUrl: './fkt-badge.component.scss',
})
export class FktBadgeComponent {
	text = input<string>();
	color = input.required<FktBadgeColor>();
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
