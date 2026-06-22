import { Directive, inject, TemplateRef } from '@angular/core';
import { FktAutocompleteEmptyContext } from '../../fkt-autocomplete.types';

@Directive({
    selector: '[fktAutocompleteEmpty]',
})
export class FktAutocompleteEmptyDirective {
    readonly template = inject(TemplateRef);

    static ngTemplateContextGuard(
        _: FktAutocompleteEmptyDirective,
        context: unknown
    ): context is FktAutocompleteEmptyContext {
        return true;
    }
}
