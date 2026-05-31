import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({ selector: '[fktTableExpand]' })
export class FktTableExpandDirective {
    readonly templateRef = inject(TemplateRef<{ $implicit: unknown }>);
}
