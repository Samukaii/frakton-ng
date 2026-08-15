import { Component } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import {
  FktPopoverComponent,
  FktPopoverContentDirective,
  FktPopoverTriggerDirective,
} from 'frakton-ng/popover';

@Component({
  selector: 'app-popover-anchor-width-example',
  imports: [
    FktButtonComponent,
    FktPopoverComponent,
    FktPopoverTriggerDirective,
    FktPopoverContentDirective,
  ],
  templateUrl: './popover-anchor-width-example.component.html',
  styleUrl: './popover-anchor-width-example.component.scss',
})
export class PopoverAnchorWidthExampleComponent {
  protected readonly examples = [
    {
      label: 'Half width',
      className: 'half-width',
      description: 'The panel uses half of the anchor width.',
      token:
        '--fkt-popover-width: calc(var(--fkt-popover-anchor-width) * 0.5);',
    },
    {
      label: 'Same width',
      className: 'same-width',
      description: 'The panel width matches the anchor width.',
      token: '--fkt-popover-width: var(--fkt-popover-anchor-width);',
    },
    {
      label: 'Double width',
      className: 'double-width',
      description: 'The panel uses twice the anchor width.',
      token: '--fkt-popover-width: calc(var(--fkt-popover-anchor-width) * 2);',
    },
  ];
}
