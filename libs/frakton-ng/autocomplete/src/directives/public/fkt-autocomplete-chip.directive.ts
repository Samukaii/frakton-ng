import { Directive, inject, TemplateRef } from '@angular/core';
import { FktAutocompleteChipContext } from '../../fkt-autocomplete.types';

@Directive({
    selector: '[fktAutocompleteChip]',
})
export class FktAutocompleteChipDirective {
    readonly template = inject(TemplateRef);

    static ngTemplateContextGuard<T>(
        _: FktAutocompleteChipDirective,
        context: unknown
    ): context is FktAutocompleteChipContext<T> {
        return true;
    }
}
