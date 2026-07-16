import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[fktPopoverContent]',
})
export class FktPopoverContentDirective {
  constructor(readonly templateRef: TemplateRef<unknown>) {}
}
