import { Component, signal } from '@angular/core';
import { CodeOutputComponent } from 'apps/docs/src/app/components/code-output/code-output.component';
import { FktButtonComponent } from 'frakton-ng/button';
import {
  FktPopoverComponent,
  FktPopoverContentDirective,
  FktPopoverDismissEvent,
  FktPopoverDismissReason,
  FktPopoverTriggerDirective,
} from 'frakton-ng/popover';

@Component({
  selector: 'app-popover-dismiss-example',
  imports: [
    FktButtonComponent,
    FktPopoverComponent,
    FktPopoverTriggerDirective,
    FktPopoverContentDirective,
    CodeOutputComponent,
  ],
  templateUrl: './popover-dismiss-example.component.html',
  styleUrl: './popover-dismiss-example.component.scss',
})
export class PopoverDismissExampleComponent {
  protected readonly escapeDismissCount = signal(0);
  protected readonly lastDismissReason = signal<FktPopoverDismissReason | null>(
    null
  );
  protected isOpen = signal(false);

  protected trackDismiss(event: FktPopoverDismissEvent) {
    this.lastDismissReason.set(event.reason);
  }

  protected trackEscapeDismiss() {
    this.escapeDismissCount.update((count) => count + 1);
  }
}
