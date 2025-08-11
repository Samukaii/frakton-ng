import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTabLazy]'
})
export class TabLazyDirective {
	template = inject(TemplateRef);
}
