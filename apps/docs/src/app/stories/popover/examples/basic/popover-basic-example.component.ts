import { Component } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import {
  FktPopoverComponent,
  FktPopoverContentDirective,
  FktPopoverTriggerDirective,
} from 'frakton-ng/popover';

@Component({
  selector: 'app-popover-basic-example',
  imports: [
    FktButtonComponent,
    FktPopoverComponent,
    FktPopoverTriggerDirective,
    FktPopoverContentDirective,
  ],
  templateUrl: './popover-basic-example.component.html',
  styleUrl: './popover-basic-example.component.scss',
})
export class PopoverBasicExampleComponent {}
