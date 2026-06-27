import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({ selector: '[fktSelectHeader]' })
export class FktSelectHeaderDirective {
    readonly template = inject(TemplateRef);
}
