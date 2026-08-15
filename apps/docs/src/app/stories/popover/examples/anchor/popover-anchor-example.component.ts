import { Component } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import {
  FktPopoverComponent,
  FktPopoverContentDirective,
  FktPopoverTriggerDirective,
} from 'frakton-ng/popover';

@Component({
  selector: 'app-popover-anchor-example',
  imports: [
    FktButtonComponent,
    FktPopoverComponent,
    FktPopoverContentDirective,
    FktPopoverTriggerDirective,
  ],
  templateUrl: './popover-anchor-example.component.html',
  styleUrl: './popover-anchor-example.component.scss',
})
export class PopoverAnchorExampleComponent {}
