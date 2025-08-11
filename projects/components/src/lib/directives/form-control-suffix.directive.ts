import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appFormControlSuffix]'
})
export class FormControlSuffixDirective {
	templateRef = inject(TemplateRef);
}
