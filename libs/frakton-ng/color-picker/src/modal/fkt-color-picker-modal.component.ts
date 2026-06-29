import {
    booleanAttribute,
    Component,
    computed,
    input,
    linkedSignal,
    model,
} from '@angular/core';
import { FktHueSelectorComponent } from './selectors/hue/fkt-hue-selector.component';
import { FktSaturationLightnessSelectorComponent } from './selectors/saturation-lightness/fkt-saturation-lightness-selector.component';
import { FktAlphaSelectorComponent } from './selectors/alpha/fkt-alpha-selector.component';
import {
    FktColorPickerFormat,
    fktColorPickerFormats,
} from '../fkt-color-picker.types';
import { FktColorHslControlComponent } from '../controls/hsl/fkt-color-hsl-control.component';
import { FktColorRgbControlComponent } from '../controls/rgb/fkt-color-rgb-control.component';
import { FktAutocompleteOption } from 'frakton-ng/autocomplete-old';
import { FktColorHexControlComponent } from '../controls/hex/fkt-color-hex-control.component';
import { fktColorFormatters, transformedSignal } from 'frakton-ng/internal/utils';
import { parseAnyColorToHSV } from '../helpers/parse-any-color-to-hsl';
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
        FktColorControlComponent,
    ],
    templateUrl: './fkt-color-picker-modal.component.html',
    styleUrl: './fkt-color-picker-modal.component.scss',
})
export class FktColorPickerModalComponent {
    value = model.required<string | null>();

    defaultFormat = input<FktColorPickerFormat>('rgb');
    outputFormat = input<FktColorPickerFormat>('hsl');
    disableAlphaChanel = input(false, {
        transform: booleanAttribute,
    });

    protected defaultColor = {
        saturation: 100,
        value: 100,
        hue: 0,
        alpha: 100,
    };

    transformedValue = transformedSignal(this.value, {
        from: (source) => {
            if (!source) return this.defaultColor;

            const parsed = parseAnyColorToHSV(source);

            return parsed ?? this.defaultColor;
        },
        to: (transformed) => {
            const outputFormat = this.outputFormat();

            const formatter = fktColorFormatters[outputFormat];

            return formatter.format(transformed, this.disableAlphaChanel())
                .value;
        },
    });

    currentFormat = linkedSignal(this.defaultFormat);

    protected formatOptions = fktColorPickerFormats.map(
        (format): FktAutocompleteOption => ({
            value: format,
            label: format.toUpperCase(),
        })
    );

    protected preview = computed(() => {
        const value = this.transformedValue();
        const disableAlphaChanel = this.disableAlphaChanel();
        const currentFormat = this.currentFormat();

        switch (currentFormat) {
            case 'hsl':
                return fktColorFormatters.hsl.format(value, disableAlphaChanel);
            case 'rgb':
                return fktColorFormatters.rgb.format(value, disableAlphaChanel);
            case 'hex':
                return fktColorFormatters.hex.format(value, disableAlphaChanel);
        }
    });
}
