import { Component, computed, input } from '@angular/core';
import { ToClassPipe } from '../../pipes';
import { FktBadgeColor, FktBadgeVariant } from './fkt-badge.types';

@Component({
	selector: 'fkt-badge',
	imports: [ToClassPipe],
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
			color,
			variant,
			'h-fit',
			'w-fit',
			'text-white',
			'text-sm',
			'px-2',
			'py-1',
			'flex',
			'gap-2',
			'font-semibold',
			'items-center',
			'justify-center',
			'rounded-md',
		];
	});
}
