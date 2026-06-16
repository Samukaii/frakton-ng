import { Directive, inject, TemplateRef } from '@angular/core';
import { FktAutocompleteGroupContext } from '../../fkt-autocomplete.types';

import { FktAutocompleteItemDirective } from './fkt-autocomplete-item.directive';

@Directive({
    selector: '[fktAutocompleteGroup]',
})
export class FktAutocompleteGroupDirective {
    template = inject(TemplateRef);

    static ngTemplateContextGuard<T>(
        _: FktAutocompleteItemDirective,
        __: unknown
    ): __ is FktAutocompleteGroupContext<T> {
        return true;
    }
}
