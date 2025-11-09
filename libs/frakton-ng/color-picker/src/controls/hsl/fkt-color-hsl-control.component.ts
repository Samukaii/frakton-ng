import { Component, inject, input, linkedSignal, model } from '@angular/core';
import { Field, form } from '@angular/forms/signals';
import { FktInputComponent } from "frakton-ng/input";
import { FktColorControlItemComponent } from '../../components/item/fkt-color-control-item.component';
import { FKT_COLOR_PICKER_LOCALE_TOKEN } from '../../injection-tokens/fkt-color-picker-locale-token';
import { FktColorPickerHSV } from 'frakton-ng/internal/types';
import { fktColorFormatters } from 'frakton-ng/internal/utils';

@Component({
  selector: 'fkt-color-hsl-control',
	imports: [
		FktInputComponent,
        Field,
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
