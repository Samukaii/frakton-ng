import { Component, inject, input, model } from '@angular/core';
import { form, FormField, max, min } from '@angular/forms/signals';
import {
    fktColorFormatters,
    transformedSignal,
} from 'frakton-ng/internal/utils';
import { FKT_COLOR_PICKER_LOCALE_TOKEN } from '../../injection-tokens/fkt-color-picker-locale-token';
import { FktColorPickerHSV } from 'frakton-ng/internal/types';
import { FktFieldComponent } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';

@Component({
    selector: 'fkt-color-rgb-control',
    imports: [FormField, FktFieldComponent, FktInputTextDirective],
    templateUrl: './fkt-color-rgb-control.component.html',
    styleUrl: './fkt-color-rgb-control.component.scss',
})
export class FktColorRgbControlComponent {
    value = model.required<FktColorPickerHSV>();
    disableAlphaChannel = input(false);

    protected locale = inject(FKT_COLOR_PICKER_LOCALE_TOKEN);

    private readonly transformed = transformedSignal(this.value, {
        from: (value) => {
            const converted = fktColorFormatters.rgb.fromHsv(value);

            return {
                red: Math.round(converted.red),
                green: Math.round(converted.green),
                blue: Math.round(converted.blue),
                alpha: Math.round(converted.alpha),
            };
        },
        to: fktColorFormatters.rgb.toHsv,
    });

    protected form = form(this.transformed, (schema) => {
        min(schema.red, 0);
        max(schema.red, 255);

        min(schema.green, 0);
        max(schema.green, 255);

        min(schema.blue, 0);
        max(schema.blue, 255);

        min(schema.alpha, 0);
        max(schema.alpha, 100);
    });
}
