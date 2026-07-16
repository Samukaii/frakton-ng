import { Component, signal } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import {
  FktPopoverComponent,
  FktPopoverContentDirective,
  FktPopoverTriggerDirective,
} from 'frakton-ng/popover';
import { FktSelectComponent } from 'frakton-ng/select';

@Component({
  selector: 'app-popover-rtl-example',
  imports: [
    FktButtonComponent,
    FktPopoverComponent,
    FktPopoverTriggerDirective,
    FktPopoverContentDirective,
    FktSelectComponent,
  ],
  templateUrl: './popover-rtl-example.component.html',
  styleUrl: './popover-rtl-example.component.scss',
})
export class PopoverRtlExampleComponent {
  protected readonly directions = [
    { value: 'ltr', label: 'LTR' },
    { value: 'rtl', label: 'RTL' },
  ];

  protected direction = signal('rtl');
}
