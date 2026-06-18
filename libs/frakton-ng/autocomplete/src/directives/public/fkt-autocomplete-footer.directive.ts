import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
    selector: '[fktAutocompleteFooter]',
})
export class FktAutocompleteFooterDirective {
    template = inject(TemplateRef);
}
