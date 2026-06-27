import { Directive, inject, TemplateRef } from '@angular/core';
import { FktSelectChipContext } from '../../fkt-select.types';

@Directive({ selector: '[fktSelectChip]' })
export class FktSelectChipDirective {
    readonly template = inject(TemplateRef);

    static ngTemplateContextGuard<T>(
        _: FktSelectChipDirective,
        context: unknown
    ): context is FktSelectChipContext<T> {
        return true;
    }
}
