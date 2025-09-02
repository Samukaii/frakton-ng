import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[fktTabLazy]'
})
export class FktTabLazyDirective {
	template = inject(TemplateRef);
}
