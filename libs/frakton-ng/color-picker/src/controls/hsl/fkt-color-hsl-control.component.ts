import { Component, inject, input, linkedSignal, model } from '@angular/core';
import { Control, form } from '@angular/forms/signals';
import { FktInputComponent } from "frakton-ng/input";
import { FktColorControlItemComponent } from '../../components/item/fkt-color-control-item.component';
import { FKT_COLOR_PICKER_LOCALE_TOKEN } from '../../injection-tokens/fkt-color-picker-locale-token';
import { FktColorPickerHSV } from '../../models/fkt-color-picker-hsv';
import { fktColorFormatters } from '../../../../internal/utils/fkt-color-formatters';

@Component({
  selector: 'fkt-color-hsl-control',
	imports: [
		FktInputComponent,
		Control,
		FktColorControlItemComponent
	],
  templateUrl: './fkt-color-hsl-control.component.html',
  styleUrl: './fkt-color-hsl-control.component.scss'
})
export class FktColorHslControlComponent {
	value = model.required<FktColorPickerHSV>();
	disableAlphaChannel = input(false);

	protected asHSL = linkedSignal(() => {
		return fktColorFormatters.hsl.fromHsv(this.value())
	})

	protected locale = inject(FKT_COLOR_PICKER_LOCALE_TOKEN);
	protected form = form(this.asHSL);
}
