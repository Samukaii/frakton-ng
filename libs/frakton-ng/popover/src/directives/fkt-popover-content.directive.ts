import { Directive, inject } from '@angular/core';
import { FktPopoverContextDirective } from '../internal/directives/fkt-popover-context.directive';

@Directive({
  selector: '[fktPopoverContent]:not(ng-template)',
  exportAs: 'fktPopoverContent',
})
export class FktPopoverContentDirective {
  protected readonly context = inject(FktPopoverContextDirective);
}
