import { computed, Directive, inject } from '@angular/core';
import { FktTextFieldControl } from 'frakton-ng/internal/directives';

@Directive({
    selector: `
        input[fktInputText][fktCharacterCount],
        textarea[fktTextarea][fktCharacterCount]
    `,
})
export class FktCharacterCountDirective {
    private readonly control = inject(FktTextFieldControl, { self: true });

    count = computed(() => {
        const value = this.control.value() ?? '';
        const max = this.control.maxLength();

        if (max === null) return null;

        const current = value.length;

        return {
            current,
            max,
            exceeded: max !== null && current > max,
        };
    });
}
