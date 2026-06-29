import { Component, inject, input, model } from '@angular/core';
import { form, FormField, max, min } from '@angular/forms/signals';
import { FKT_COLOR_PICKER_LOCALE_TOKEN } from '../../injection-tokens/fkt-color-picker-locale-token';
import { FktColorPickerHSV } from 'frakton-ng/internal/types';
import {
    fktColorFormatters,
    transformedSignal,
} from 'frakton-ng/internal/utils';
import { FktFieldComponent } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';

@Component({
    selector: 'fkt-color-hsl-control',
    imports: [FormField, FktFieldComponent, FktInputTextDirective],
    templateUrl: './fkt-color-hsl-control.component.html',
    styleUrl: './fkt-color-hsl-control.component.scss',
})
export class FktColorHslControlComponent {
    value = model.required<FktColorPickerHSV>();
    disableAlphaChannel = input(false);

    private readonly transformed = transformedSignal(this.value, {
        from: (value) => {
            const converted = fktColorFormatters.hsl.fromHsv(value);

            return {
                alpha: Math.round(converted.alpha),
                saturation: Math.round(converted.saturation),
                lightness: Math.round(converted.lightness),
                hue: Math.round(converted.hue),
            };
        },
        to: fktColorFormatters.hsl.toHsv,
    });

    protected locale = inject(FKT_COLOR_PICKER_LOCALE_TOKEN);
    protected form = form(this.transformed, (schema) => {
        min(schema.hue, 0);
        max(schema.hue, 360);

        min(schema.lightness, 0);
        max(schema.lightness, 100);

        min(schema.saturation, 0);
        max(schema.saturation, 100);

        min(schema.alpha, 0);
        max(schema.alpha, 100);
    });
}
