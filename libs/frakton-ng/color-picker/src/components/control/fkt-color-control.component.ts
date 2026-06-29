import {
    Component,
    computed,
    inject,
    input,
    model,
    signal,
} from '@angular/core';
import { FktSelectComponent } from 'frakton-ng/select';
import { FktColorPickerFormat } from '../../fkt-color-picker.types';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktTooltipDirective } from 'frakton-ng/tooltip';
import { getColorDescription } from '../../helpers/get-color-description';
import { capitalize, fktColorFormatters } from 'frakton-ng/internal/utils';
import { FKT_COLOR_PICKER_LOCALE_TOKEN } from '../../injection-tokens/fkt-color-picker-locale-token';
import { FktColorPickerHSV } from 'frakton-ng/internal/types';
import { parseAnyColorToHSV } from '../../helpers/parse-any-color-to-hsl';
import { injectEyeDropper } from 'frakton-ng/internal/di';

@Component({
    selector: 'fkt-color-control',
    imports: [FktSelectComponent, FktButtonComponent, FktTooltipDirective],
    templateUrl: './fkt-color-control.component.html',
    styleUrl: './fkt-color-control.component.scss',
})
export class FktColorControlComponent {
    currentFormat = model.required<FktColorPickerFormat>();
    value = model.required<FktColorPickerHSV>();
    disableAlphaChanel = input.required<boolean>();
    formatOptions = input.required<{ value: string; label: string }[]>();

    protected locale = inject(FKT_COLOR_PICKER_LOCALE_TOKEN);

    protected copied = signal(false);

    protected readonly eyeDropper = injectEyeDropper();

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
            case 'hsl':
                return fktColorFormatters.hsl.format(value, disableAlphaChanel);
            case 'rgb':
                return fktColorFormatters.rgb.format(value, disableAlphaChanel);
            case 'hex':
                return fktColorFormatters.hex.format(value, disableAlphaChanel);
        }
    });

    async pickByEyeDropper() {
        if (!this.eyeDropper) return;

        try {
            const { sRGBHex } = await this.eyeDropper.open();
            const asHSV = parseAnyColorToHSV(sRGBHex);
            if (asHSV) this.value.set(asHSV);
        } catch {
            /* empty */
        }
    }
}
