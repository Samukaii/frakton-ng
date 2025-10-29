import { ChangeDetectionStrategy, Component, computed, effect, input, } from '@angular/core';
import { FktButtonIconPosition, FktButtonShape, FktButtonTheme } from './fkt-button.types';
import { FktIconComponent, FktIconName } from 'frakton-ng/icon';
import { FktColor, fktColors, FktLabelColor } from 'frakton-ng/core';
import { fktColorFormatters, getContrastTextColor, MarkUsed, lightenColor } from 'frakton-ng/internal/utils';

@Component({
	selector: 'fkt-button',
	templateUrl: './fkt-button.component.html',
	styleUrl: './fkt-button.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [FktIconComponent],
	host: {
		'[style.--custom-color]': "customColor()",
		'[style.--custom-hover-color]': "customHoverColor()",
		'[style.--custom-label-color]': "customLabelColor()",
	}
})
export class FktButtonComponent {
	loading = input(false);
	disabled = input(false);
	text = input('');
	ariaLabel = input('');
	loadingText = input('');
	color = input<FktColor>('primary');
	labelColor = input<FktLabelColor>('auto');
	theme = input<FktButtonTheme>('raised');
	shape = input<FktButtonShape>('rounded');
	icon = input<FktIconName>();
	type = input<"submit" | "reset" | "button">("button");
	iconPosition = input<FktButtonIconPosition>('right');

	@MarkUsed()
	protected checkAccessibility = effect(() => {
		if (!this.text() && !this.ariaLabel())
			throw new Error('Accessibility error: When no text is provided, ariaLabel is required')
	});

	protected buttonAriaLabel = computed(() => {
		const loading = this.loading();
		const loadingText = this.loadingText();
		const ariaLabel = this.ariaLabel();
		const text = this.text();

		if (loading)
			return loadingText || ariaLabel || text;

		return ariaLabel || text;
	});

	protected isCustomColor = computed(() => {
		const color = this.color();

		const isSemanticColor = fktColors.includes(color as any);

		if (isSemanticColor) return false;

		const colorHex = fktColorFormatters.hex.parse(this.color());

		if (!colorHex)
			throw new Error(`Invalid color format for color "${color}". It must be in hex format`);

		return true;
	});

	protected customColor = computed(() => {
		const color = this.color();
		const isCustomColor = this.isCustomColor();

		if (!isCustomColor) return 'none';

		return fktColorFormatters.hex.expand(color)!;
	});

	protected customHoverColor = computed(() => {
		const color = this.customColor();

		return lightenColor(color, 0.1);
	})

	protected customLabelColor = computed(() => {
		const color = this.color();
		const labelColor = this.labelColor();
		const isCustomColor = this.isCustomColor();

		if (!isCustomColor) return 'none';

		if (labelColor !== "auto") return labelColor;

		return getContrastTextColor(color);
	});

	protected classes = computed(() => {
		const isCustom = this.isCustomColor();

		let classes = '';

		const color = isCustom ? 'custom' : this.color();

		classes += `theme-${this.theme()}`;
		classes += ` color-${color}`;
		classes += ` shape-${this.shape()}`;

		if (this.loading())
			classes += ' loading';

		if (!this.text() || (this.loading() && !this.loadingText()))
			classes += ` icon-only`;

		return classes;
	})
}
