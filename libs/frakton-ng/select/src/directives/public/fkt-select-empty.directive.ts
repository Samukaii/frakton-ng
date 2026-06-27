import { Directive, inject, TemplateRef } from '@angular/core';
import { FktSelectEmptyContext } from '../../fkt-select.types';

@Directive({ selector: '[fktSelectEmpty]' })
export class FktSelectEmptyDirective {
    readonly template = inject(TemplateRef);

    static ngTemplateContextGuard(
        _: FktSelectEmptyDirective,
        context: unknown
    ): context is FktSelectEmptyContext {
        return true;
    }
}
