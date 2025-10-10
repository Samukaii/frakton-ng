import { Component, computed, contentChildren, inject, input, model, signal } from '@angular/core';
import { FktSelectComponent } from 'frakton-ng/select';
import { FktColorPickerFormat } from '../../fkt-color-picker.types';
import { FktAutocompleteOption } from 'frakton-ng/autocomplete';
import { FktColorControlItemComponent } from '../item/fkt-color-control-item.component';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktTooltipDirective } from 'frakton-ng/tooltip';
import { getColorDescription } from '../../helpers/get-color-description';
import { fktColorFormatters } from 'frakton-ng/internal/utils';
import { FKT_COLOR_PICKER_LOCALE_TOKEN } from '../../injection-tokens/fkt-color-picker-locale-token';
import { capitalize } from '../../../../internal/utils/capitalize';
import { debouncedComputed } from '../../../../internal/utils/debounced-computed';
import { FktColorPickerHSV } from '../../models/fkt-color-picker-hsv';


@Component({
	selector: 'fkt-color-control',
	imports: [
		FktSelectComponent,
		FktButtonComponent,
		FktTooltipDirective,
		FktColorControlItemComponent
	],
	templateUrl: './fkt-color-control.component.html',
	styleUrl: './fkt-color-control.component.scss'
})
export class FktColorControlComponent {
	currentFormat = model.required<FktColorPickerFormat>();
	value = input.required<FktColorPickerHSV>();
	disableAlphaChanel = input.required<boolean>();
	formatOptions = input.required<FktAutocompleteOption[]>()

	protected locale = inject(FKT_COLOR_PICKER_LOCALE_TOKEN);


	protected controls = contentChildren(FktColorControlItemComponent);
	protected copied = signal(false);

	protected colorDescription = computed(() => {
		const asHSL = fktColorFormatters.hsl.fromHsv(this.value());

		const value = getColorDescription(asHSL, this.locale);

		return capitalize(value);
	});

	protected async copyValue() {
		this.copied.set(true);
		await navigator.clipboard.writeText(this.preview().value);

		setTimeout(() => {
			this.copied.set(false);
		}, 1000);
	}

	protected preview = computed(() => {
		const value = this.value();
		const disableAlphaChanel = this.disableAlphaChanel();
		const currentFormat = this.currentFormat();

		switch (currentFormat) {
			case "hsl":
				return fktColorFormatters.hsl.format(value, disableAlphaChanel);
			case "rgb":
				return fktColorFormatters.rgb.format(value, disableAlphaChanel);
			case "hex":
				return fktColorFormatters.hex.format(value, disableAlphaChanel);
		}
	});

	ariaColorDescription = debouncedComputed(() => {
		const rawValue = this.preview();
		const colorDescription = this.colorDescription();

		return `${this.locale.preview.color}: ${colorDescription}. ${this.locale.preview.code}: ${rawValue.ariaValue}`;
	}, {initialValue: "", time: 500})
}

