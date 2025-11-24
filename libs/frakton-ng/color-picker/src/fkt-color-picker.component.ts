import { booleanAttribute, Component, computed, inject, input, model, signal, Signal } from '@angular/core';
import { FormValueControl, ValidationError, WithOptionalField } from '@angular/forms/signals';
import { FktOverlayService } from 'frakton-ng/overlay';
import { FktColorPickerModalComponent } from './modal/fkt-color-picker-modal.component';
import { FktColorPickerFormat } from './fkt-color-picker.types';
import { capitalize, fktColorFormatters } from 'frakton-ng/internal/utils';
import { parseAnyColorToHSV } from './helpers/parse-any-color-to-hsl';
import { FktColorPickerHSV } from 'frakton-ng/internal/types';
import { FktButtonComponent } from 'frakton-ng/button';
import { getColorDescription } from './helpers/get-color-description';
import { FKT_COLOR_PICKER_LOCALE_TOKEN } from './injection-tokens/fkt-color-picker-locale-token';

@Component({
	selector: 'fkt-color-picker',
	imports: [
		FktButtonComponent
	],
	templateUrl: './fkt-color-picker.component.html',
	styleUrl: './fkt-color-picker.component.scss'
})
export class FktColorPickerComponent implements FormValueControl<string | null> {
	value = model<string | null>(null);
	touched = model(false);
	disabled = input(false);
	invalid = input(false);
	errors = input<readonly WithOptionalField<ValidationError>[]>([]);

	label = input.required<string>();

	hideLabel = input(false, {
		transform: booleanAttribute
	});

	defaultFormat = input<FktColorPickerFormat>('hex');
	outputFormat = input<FktColorPickerFormat>('hex');
	disableAlphaChannel = input<boolean, unknown>(false, {
		transform: booleanAttribute
	});

	protected copied = signal(false);

	protected locale = inject(FKT_COLOR_PICKER_LOCALE_TOKEN);

	protected colorDescription = computed(() => {
		const value = this.value();

		if(!value) return;

		const asHsv = parseAnyColorToHSV(value);

		if(!asHsv) return;

		const asHSL = fktColorFormatters.hsl.fromHsv(asHsv);

		const description = getColorDescription(asHSL, this.locale);

		return capitalize(description);
	});

	protected formattedColor = computed<FktColorPickerHSV | null>(() => {
		const value = this.value();

		if (!value) return null;

		return parseAnyColorToHSV(value) ?? null;
	});

	protected previewColor = computed(() => {
		const formatted = this.formattedColor();

		if(!formatted)
			return `hsl(0, 0%, 100%)`;

		const {hue, saturation, lightness, alpha} = fktColorFormatters.hsl.fromHsv(formatted);

		return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha}%)`
	})

	private overlay = inject(FktOverlayService);

	protected openPicker(nativeElement: HTMLElement) {
		this.overlay.open({
			anchorElementRef: {nativeElement},
			component: FktColorPickerModalComponent,
			data: {
				value: this.value(),
				colorChange: (value) => {
					this.value.set(value);
				},
				disableAlphaChanel: this.disableAlphaChannel as unknown as Signal<never>,
				defaultFormat: this.defaultFormat,
				outputFormat: this.outputFormat
			},
			panelOptions: {
				preferredPositions: 'bottom-start',
				width: "500px",
				padding: '1rem',
				maxHeight: 'fit-content',
				inheritDesignTokensFrom: nativeElement
			}
		})
	}

	protected clear() {
		this.value.set(null);
	}

	protected async copy() {
		this.copied.set(true);
		await navigator.clipboard.writeText(this.value() ?? '');

		setTimeout(() => {
			this.copied.set(false);
		}, 1000);
	}
}
