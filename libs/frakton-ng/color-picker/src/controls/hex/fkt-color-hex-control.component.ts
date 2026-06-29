import { Component, inject, input, model } from '@angular/core';
import { form, FormField, max, min, validate } from '@angular/forms/signals';
import {
    fktColorFormatters,
    transformedSignal,
} from 'frakton-ng/internal/utils';
import { FktColorPickerHSV } from 'frakton-ng/internal/types';
import { FKT_COLOR_PICKER_LOCALE_TOKEN } from '../../injection-tokens/fkt-color-picker-locale-token';
import { FktFieldComponent } from 'frakton-ng/field';
import { FormsModule } from '@angular/forms';
import { FktInputTextDirective } from 'frakton-ng/input-text';
import { HexColorMaskDirective } from '../../directives/hex-color-mask.directive';

@Component({
    selector: 'fkt-color-hex-control',
    imports: [
        FormField,
        FktFieldComponent,
        FormsModule,
        FktInputTextDirective,
        HexColorMaskDirective,
    ],
    templateUrl: './fkt-color-hex-control.component.html',
    styleUrl: './fkt-color-hex-control.component.scss',
})
export class FktColorHexControlComponent {
    value = model.required<FktColorPickerHSV>();
    disableAlphaChannel = input(false);

    protected locale = inject(FKT_COLOR_PICKER_LOCALE_TOKEN);

    protected transformed = transformedSignal(this.value, {
        from: (value) => {
            const { format } = fktColorFormatters.hex;

            return {
                hexCode: format(value).value,
                alpha: Math.round(value.alpha).toString(),
            };
        },
        to: (value, source) => {
            const { extract, toHsv } = fktColorFormatters.hex;

            const extracted = extract(value.hexCode);

            if (!extracted) return source;

            return toHsv(extracted, +value.alpha);
        },
    });

    hexCode = transformedSignal(this.transformed, {
        from: (source) => source.hexCode,
        to: (hexCode, source) => {
            const { extract, hasAlpha, fromAlphaHex, expand } =
                fktColorFormatters.hex;

            const value = extract(hexCode);

            if (!value) return source;

            const newAlpha = hasAlpha(hexCode)
                ? fromAlphaHex(value.alpha)
                : source.alpha;

            return {
                hexCode: expand(hexCode) ?? source.hexCode,
                alpha: newAlpha.toString(),
            };
        },
    });

    alpha = transformedSignal(this.transformed, {
        from: (source) => Math.round(+source.alpha).toString(),
        to: (alpha, source) => {
            const { extract, toHsv, format } = fktColorFormatters.hex;

            const extracted = extract(source.hexCode);

            if (!extracted) return source;

            const value = toHsv(extracted, +alpha);

            const { value: hexCode } = format(value);

            return { alpha, hexCode };
        },
    });

    protected hexCodeField = form(this.hexCode, (field) => {
        validate(field, ({ value }) => {
            const { isValidHex } = fktColorFormatters.hex;

            return isValidHex(value()) ? null : { kind: 'invalid-hex' };
        });
    });
    protected alphaField = form(this.alpha, (field) => {
        min(field, 0);
        max(field, 100);
    });
}
