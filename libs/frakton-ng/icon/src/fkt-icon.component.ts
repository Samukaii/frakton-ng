import {
	Component,
	computed,
	effect,
	inject,
	input,
} from '@angular/core';
import { FktIconRegistry } from './fkt-icon-registry.service';
import { FktIconName } from './fkt-icon-name';
import { FktIconVariant } from './fkt-icon-variant';
import { FktIconSize } from './fkt-icon.types';

@Component({
	selector: 'fkt-icon',
	imports: [],
	template: '',
	styleUrl: './fkt-icon.component.scss',
	host: {
		'aria-hidden': 'true',
		'[innerHTML]': 'svgContent()',
		'[class.size-sm]': 'size() === "sm"',
		'[class.size-md]': 'size() === "md"',
		'[class.size-lg]': 'size() === "lg"',
	},
})
export class FktIconComponent {
	private readonly iconRegistry = inject(FktIconRegistry);

	readonly name = input.required<FktIconName>();
	readonly variant = input<FktIconVariant>('outline');
	readonly size = input<FktIconSize>('md');

	private readonly loadIcon = effect(() => {
		this.iconRegistry.loadIcon(this.name(), this.variant());
	});
	protected readonly svgContent = computed(() =>
		this.iconRegistry.getIcon(this.name(), this.variant()),
	);
}
