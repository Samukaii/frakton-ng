import { Component, effect, inject, input, linkedSignal, model } from '@angular/core';
import { Field, form } from '@angular/forms/signals';
import { FktInputComponent } from "frakton-ng/input";
import { fktColorFormatters, MarkUsed } from 'frakton-ng/internal/utils';
import { FktControlFormatter } from 'frakton-ng/forms';
import { FktColorControlItemComponent } from '../../components/item/fkt-color-control-item.component';
import { FktColorPickerHSV } from 'frakton-ng/internal/types';
import { FKT_COLOR_PICKER_LOCALE_TOKEN } from '../../injection-tokens/fkt-color-picker-locale-token';


@Component({
	selector: 'fkt-color-hex-control',
    imports: [
        FktInputComponent,
        FktColorControlItemComponent,
        Field
    ],
	templateUrl: './fkt-color-hex-control.component.html',
	styleUrl: './fkt-color-hex-control.component.scss'
})
export class FktColorHexControlComponent {
	value = model.required<FktColorPickerHSV>();
	disableAlphaChannel = input(false);

	protected locale = inject(FKT_COLOR_PICKER_LOCALE_TOKEN);

	protected asHex = linkedSignal<FktColorPickerHSV, { hex: string; fromModel: boolean; }>({
		source: this.value,
		computation: (value, previous) => {
			const result = fktColorFormatters.hex.format(value, false).value;

			if (!previous?.value.hex)
				return {hex: result, fromModel: true};

			if (!fktColorFormatters.hex.expand(previous.value.hex))
				return previous.value;

			if (fktColorFormatters.hex.expand(previous.value.hex) === fktColorFormatters.hex.expand(result))
				return previous.value;

			return {hex: result, fromModel: true};
		}
	});

	protected form = form(this.asHex);
	protected hslForm = form(this.value);

	@MarkUsed()
	protected updateForm = effect(() => {
		const {hex, fromModel} = this.asHex();

		if (!hex || fromModel) return;
		const expanded = fktColorFormatters.hex.extract(hex);

		if (!expanded) return;

		const converted = fktColorFormatters.hex.toHsv(expanded);

		const conditions = [
			converted.hue.toFixed(2) === this.value().hue.toFixed(2),
			converted.saturation.toFixed(2) === this.value().saturation.toFixed(2),
			converted.value.toFixed(2) === this.value().value.toFixed(2),
			converted.alpha.toFixed(2) === this.value().alpha.toFixed(2)
		]

		if (conditions.every(Boolean))
			return;

		this.value.set({
			...this.value(),
			...converted,
		})
	});

	protected formatter: FktControlFormatter<string, string> = {
		viewToModelValue: value => value,
		sanitizeViewValue: ({currentValue}) => {
			let sanitizedValue = currentValue.replace(/[^0-9a-fA-F]/g, '');

			sanitizedValue = sanitizedValue.toUpperCase();

			if (this.disableAlphaChannel())
				sanitizedValue = sanitizedValue.slice(0, 6);
			else sanitizedValue = sanitizedValue.slice(0, 8);

			sanitizedValue = `#${sanitizedValue}`;

			return {sanitizedValue};
		}
	}

	protected updateHex($event: string | null) {
		this.asHex.set({
			hex: $event ?? '',
			fromModel: false,
		});
	}

	// onBlur() {
	// 	const {hex} = this.asHex();
	//
	// 	const expanded = fktColorFormatters.hex.extract(hex);
	// 	console.log(expanded)
	//
	// 	if (!expanded) return;
	// 	const converted = fktColorFormatters.hex.toHsv(expanded);
	//
	// 	this.value.set({
	// 		...this.value(),
	// 		...converted,
	// 	})
	// }
}
