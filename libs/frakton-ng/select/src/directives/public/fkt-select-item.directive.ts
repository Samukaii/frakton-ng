import { Directive, inject, TemplateRef } from '@angular/core';
import { FktSelectItemContext } from '../../fkt-select.types';

@Directive({ selector: '[fktSelectItem]' })
export class FktSelectItemDirective {
    readonly template = inject(TemplateRef);

    static ngTemplateContextGuard<T>(
        _: FktSelectItemDirective,
        context: unknown
    ): context is FktSelectItemContext<T> {
        return true;
    }
}
