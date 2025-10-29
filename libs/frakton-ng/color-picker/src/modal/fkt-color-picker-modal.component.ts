import { booleanAttribute, Component, computed, input, linkedSignal, output } from '@angular/core';
import { FktHueSelectorComponent } from './selectors/hue/fkt-hue-selector.component';
import {
	FktSaturationLightnessSelectorComponent
} from './selectors/saturation-lightness/fkt-saturation-lightness-selector.component';
import { FktAlphaSelectorComponent } from './selectors/alpha/fkt-alpha-selector.component';
import { FktColorPickerFormat, fktColorPickerFormats } from '../fkt-color-picker.types';
import { FktColorHslControlComponent } from '../controls/hsl/fkt-color-hsl-control.component';
import { FktColorRgbControlComponent } from '../controls/rgb/fkt-color-rgb-control.component';
import { FktAutocompleteOption } from 'frakton-ng/autocomplete';
import { FktColorHexControlComponent } from '../controls/hex/fkt-color-hex-control.component';
import { fktColorFormatters } from 'frakton-ng/internal/utils';
import { parseAnyColorToHSV } from '../helpers/parse-any-color-to-hsl';
import { FktColorPickerHSV } from 'frakton-ng/internal/types';
import { FktColorControlComponent } from '../components/control/fkt-color-control.component';

@Component({
	selector: 'fkt-color-picker-modal',
	imports: [
		FktHueSelectorComponent,
		FktSaturationLightnessSelectorComponent,
		FktAlphaSelectorComponent,
		FktColorHslControlComponent,
		FktColorRgbControlComponent,
		FktColorHexControlComponent,
		FktColorControlComponent
	],
	templateUrl: './fkt-color-picker-modal.component.html',
	styleUrl: './fkt-color-picker-modal.component.scss'
})
export class FktColorPickerModalComponent {
	value = input<string | null>(null);
	colorChange = output<string>();
	defaultFormat = input<FktColorPickerFormat>('rgb');
	outputFormat = input<FktColorPickerFormat>('hsl');
	disableAlphaChanel = input(false, {
		transform: booleanAttribute
	});

	protected defaultColor = {
		saturation: 100,
		value: 100,
		hue: 0,
		alpha: 100
	}

	protected formattedColor = linkedSignal<FktColorPickerHSV>(() => {
		const value = this.value();

		if(!value) return this.defaultColor;

		const parsed = parseAnyColorToHSV(value);

		return parsed ?? this.defaultColor;
	});

	currentFormat = linkedSignal(this.defaultFormat);

	protected formatOptions = fktColorPickerFormats.map((format): FktAutocompleteOption => ({
		value: format,
		label: format.toUpperCase()
	}));

	protected preview = computed(() => {
		const value = this.formattedColor();
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

	protected onValueChange($event: FktColorPickerHSV) {
		const outputFormat = this.outputFormat();

		const formatter = fktColorFormatters[outputFormat];

		this.formattedColor.set($event);
		this.colorChange.emit(formatter.format($event, this.disableAlphaChanel()).value);
	}
}
