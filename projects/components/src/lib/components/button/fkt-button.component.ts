import { ChangeDetectionStrategy, Component, computed, input, } from '@angular/core';
import { FktColor, FktIconName } from '../../shared/types';
import { FktIconComponent } from '../icon';
import { FktButtonTheme, FktButtonVariant } from './fkt-button.types';

@Component({
	selector: 'fkt-button',
	templateUrl: './fkt-button.component.html',
	styleUrl: './fkt-button.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [FktIconComponent],
})
export class FktButtonComponent {
	loading = input(false);
	disabled = input(false);
	text = input('');
	loadingText = input('');
	color = input<FktColor>('primary');
	theme = input<FktButtonTheme>('raised');
	variant = input<FktButtonVariant>('default');
	icon = input<FktIconName>();
	iconPosition = input<'left' | 'right'>('right');

	protected classes = computed(() => {
		let classes = '';

		classes += `theme-${this.theme()}`;
		classes += ` color-${this.color()}`;

		if (this.variant())
			classes += ` variant-${this.variant()}`;

		return classes;
	})
}
