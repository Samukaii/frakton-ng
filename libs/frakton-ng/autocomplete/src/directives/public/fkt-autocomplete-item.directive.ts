import { Directive, inject, TemplateRef } from '@angular/core';
import { FktAutocompleteItemContext } from '../../fkt-autocomplete.types';

@Directive({
    selector: '[fktAutocompleteItem]',
})
export class FktAutocompleteItemDirective {
    template = inject(TemplateRef);

    static ngTemplateContextGuard(
        _: FktAutocompleteItemDirective,
        __: unknown
    ): __ is FktAutocompleteItemContext {
        return true;
    }
}
