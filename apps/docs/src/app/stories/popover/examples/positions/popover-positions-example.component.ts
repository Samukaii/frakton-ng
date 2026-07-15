import { Component } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import {
  FktPopoverComponent,
  FktPopoverContentDirective,
  FktPopoverPosition,
  FktPopoverTriggerDirective,
} from 'frakton-ng/popover';

@Component({
  selector: 'app-popover-positions-example',
  imports: [
    FktButtonComponent,
    FktPopoverComponent,
    FktPopoverTriggerDirective,
    FktPopoverContentDirective,
  ],
  templateUrl: './popover-positions-example.component.html',
  styleUrl: './popover-positions-example.component.scss',
})
export class PopoverPositionsExampleComponent {
  protected readonly groups: {
    label: string;
    positions: {
      label: string;
      description: string;
      position: FktPopoverPosition;
    }[];
  }[] = [
    {
      label: 'Top',
      positions: [
        {
          label: 'Top start',
          position: 'top-start',
          description:
            'The panel is placed above the trigger and starts aligned with the trigger start edge.',
        },
        {
          label: 'Top center',
          position: 'top-center',
          description:
            'The panel is placed above the trigger and centered horizontally.',
        },
        {
          label: 'Top end',
          position: 'top-end',
          description:
            'The panel is placed above the trigger and ends aligned with the trigger end edge.',
        },
      ],
    },
    {
      label: 'Bottom',
      positions: [
        {
          label: 'Bottom start',
          position: 'bottom-start',
          description:
            'The panel is placed below the trigger and starts aligned with the trigger start edge.',
        },
        {
          label: 'Bottom center',
          position: 'bottom-center',
          description:
            'The panel is placed below the trigger and centered horizontally.',
        },
        {
          label: 'Bottom end',
          position: 'bottom-end',
          description:
            'The panel is placed below the trigger and ends aligned with the trigger end edge.',
        },
      ],
    },
    {
      label: 'Left',
      positions: [
        {
          label: 'Left start',
          position: 'left-start',
          description:
            'The panel is placed to the left of the trigger and starts aligned with the trigger top edge.',
        },
        {
          label: 'Left center',
          position: 'left-center',
          description:
            'The panel is placed to the left of the trigger and centered vertically.',
        },
        {
          label: 'Left end',
          position: 'left-end',
          description:
            'The panel is placed to the left of the trigger and ends aligned with the trigger bottom edge.',
        },
      ],
    },
    {
      label: 'Right',
      positions: [
        {
          label: 'Right start',
          position: 'right-start',
          description:
            'The panel is placed to the right of the trigger and starts aligned with the trigger top edge.',
        },
        {
          label: 'Right center',
          position: 'right-center',
          description:
            'The panel is placed to the right of the trigger and centered vertically.',
        },
        {
          label: 'Right end',
          position: 'right-end',
          description:
            'The panel is placed to the right of the trigger and ends aligned with the trigger bottom edge.',
        },
      ],
    },
    {
      label: 'Corners',
      positions: [
        {
          label: 'Top left',
          position: 'top-left',
          description:
            'The panel is placed around the trigger top-left corner.',
        },
        {
          label: 'Top right',
          position: 'top-right',
          description:
            'The panel is placed around the trigger top-right corner.',
        },
        {
          label: 'Bottom left',
          position: 'bottom-left',
          description:
            'The panel is placed around the trigger bottom-left corner.',
        },
        {
          label: 'Bottom right',
          position: 'bottom-right',
          description:
            'The panel is placed around the trigger bottom-right corner.',
        },
      ],
    },
  ];
}
