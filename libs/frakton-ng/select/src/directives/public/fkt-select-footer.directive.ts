import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({ selector: '[fktSelectFooter]' })
export class FktSelectFooterDirective {
    readonly template = inject(TemplateRef);
}
