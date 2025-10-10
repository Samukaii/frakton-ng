import { Component, effect, inject, input, linkedSignal, model } from '@angular/core';
import { Control, form } from '@angular/forms/signals';
import { FktInputComponent } from "frakton-ng/input";
import { MarkUsed } from 'frakton-ng/internal/utils';
import { FktColorControlItemComponent } from '../../components/item/fkt-color-control-item.component';
import { fktColorFormatters } from '../../../../internal/utils/fkt-color-formatters';
import { FKT_COLOR_PICKER_LOCALE_TOKEN } from '../../injection-tokens/fkt-color-picker-locale-token';
import { FktColorPickerHSV } from '../../models/fkt-color-picker-hsv';


@Component({
  selector: 'fkt-color-rgb-control',
	imports: [
		FktInputComponent,
		Control,
		FktColorControlItemComponent
	],
  templateUrl: './fkt-color-rgb-control.component.html',
  styleUrl: './fkt-color-rgb-control.component.scss'
})
export class FktColorRgbControlComponent {
	value = model.required<FktColorPickerHSV>();
	disableAlphaChannel = input(false);

	protected locale = inject(FKT_COLOR_PICKER_LOCALE_TOKEN);

	protected asRgb = linkedSignal(() => {
		return fktColorFormatters.rgb.fromHsv(this.value());
	});

	protected form = form(this.asRgb);

	@MarkUsed()
	protected updateForm = effect(() => {
		const {alpha} = this.asRgb();

		const converted = fktColorFormatters.rgb.toHsv(this.asRgb());
		const result = {
			...converted,
			alpha: alpha
		};

		const conditions = [
			result.hue.toFixed(2) === this.value().hue.toFixed(2),
			result.saturation.toFixed(2) === this.value().saturation.toFixed(2),
			result.value.toFixed(2) === this.value().value.toFixed(2),
			result.alpha.toFixed(2) === this.value().alpha.toFixed(2)
		]

		if(conditions.every(Boolean))
			return


		this.value.set({
			...this.value(),
			...converted,
			alpha: this.asRgb().alpha
		})
	});
}
