import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
    selector: '[fktAutocompleteHeader]',
})
export class FktAutocompleteHeaderDirective {
    template = inject(TemplateRef);
}
