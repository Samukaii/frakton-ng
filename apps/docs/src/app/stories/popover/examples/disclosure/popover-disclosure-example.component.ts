import { Component } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import {
  FktPopoverComponent,
  FktPopoverContentDirective,
  FktPopoverTriggerDirective,
} from 'frakton-ng/popover';

@Component({
  selector: 'app-popover-disclosure-example',
  imports: [
    FktButtonComponent,
    FktPopoverComponent,
    FktPopoverContentDirective,
    FktPopoverTriggerDirective,
  ],
  templateUrl: './popover-disclosure-example.component.html',
  styleUrl: './popover-disclosure-example.component.scss',
})
export class PopoverDisclosureExampleComponent {}
