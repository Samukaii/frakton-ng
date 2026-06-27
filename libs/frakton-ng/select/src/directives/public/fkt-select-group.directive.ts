import { Directive, inject, TemplateRef } from '@angular/core';
import { FktSelectGroupContext } from '../../fkt-select.types';

@Directive({ selector: '[fktSelectGroup]' })
export class FktSelectGroupDirective {
    readonly template = inject(TemplateRef);

    static ngTemplateContextGuard<T>(
        _: FktSelectGroupDirective,
        context: unknown
    ): context is FktSelectGroupContext<T> {
        return true;
    }
}
