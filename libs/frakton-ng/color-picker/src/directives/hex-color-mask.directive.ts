import { Directive } from '@angular/core';

@Directive({
    selector: '[fktHexColorMask]',
    host: {
        '(input)': 'onInput($any($event.target))',
    },
})
export class HexColorMaskDirective {
    protected onInput(target: HTMLInputElement) {
        const value = target.value;

        if (!value) return;

        let cleanValue = value.replace(/^#/, '').replace(/[^a-fA-F0-9]/g, '');

        cleanValue = cleanValue.toUpperCase();

        if (cleanValue.length > 8) {
            cleanValue = cleanValue.substring(0, 8);
        }

        target.value = `#${cleanValue}`;
    }
}
