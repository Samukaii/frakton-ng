import { Directive, inject, TemplateRef } from '@angular/core';
import { MarkUsed } from '../utils/mark-used';

@Directive({
  selector: '[fktFormControlSuffix]'
})
export class FormControlSuffixDirective {
	@MarkUsed()
	templateRef = inject(TemplateRef);
}
