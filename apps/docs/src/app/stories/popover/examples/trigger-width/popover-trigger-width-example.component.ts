import { Component } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import {
  FktPopoverComponent,
  FktPopoverContentDirective,
  FktPopoverTriggerDirective,
} from 'frakton-ng/popover';

@Component({
  selector: 'app-popover-trigger-width-example',
  imports: [
    FktButtonComponent,
    FktPopoverComponent,
    FktPopoverTriggerDirective,
    FktPopoverContentDirective,
  ],
  templateUrl: './popover-trigger-width-example.component.html',
  styleUrl: './popover-trigger-width-example.component.scss',
})
export class PopoverTriggerWidthExampleComponent {
  protected readonly examples = [
    {
      label: 'Half width',
      className: 'half-width',
      description: 'The panel uses half of the trigger width.',
      token:
        '--fkt-popover-width: calc(var(--fkt-popover-trigger-width) * 0.5);',
    },
    {
      label: 'Same width',
      className: 'same-width',
      description: 'The panel width matches the trigger width.',
      token: '--fkt-popover-width: var(--fkt-popover-trigger-width);',
    },
    {
      label: 'Double width',
      className: 'double-width',
      description: 'The panel uses twice the trigger width.',
      token: '--fkt-popover-width: calc(var(--fkt-popover-trigger-width) * 2);',
    },
  ];
}
