import { Directive, inject, TemplateRef } from '@angular/core';
import { MarkUsed } from 'frakton-ng/internal/utils';

@Directive({
  selector: '[fktFormControlSuffix]'
})
export class FormControlSuffixDirective {
	@MarkUsed()
	templateRef = inject(TemplateRef);
}
