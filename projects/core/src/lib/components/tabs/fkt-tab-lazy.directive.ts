import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTabLazy]'
})
export class FktTabLazyDirective {
	template = inject(TemplateRef);
}
