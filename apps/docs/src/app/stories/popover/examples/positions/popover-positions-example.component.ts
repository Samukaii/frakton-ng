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
      label: 'Start',
      positions: [
        {
          label: 'Start top',
          position: 'start-top',
          description:
            'The panel is placed on the trigger start side and top aligned with the trigger.',
        },
        {
          label: 'Start center',
          position: 'start-center',
          description:
            'The panel is placed on the trigger start side and centered vertically.',
        },
        {
          label: 'Start bottom',
          position: 'start-bottom',
          description:
            'The panel is placed on the trigger start side and bottom aligned with the trigger.',
        },
      ],
    },
    {
      label: 'End',
      positions: [
        {
          label: 'End top',
          position: 'end-top',
          description:
            'The panel is placed on the trigger end side and top aligned with the trigger.',
        },
        {
          label: 'End center',
          position: 'end-center',
          description:
            'The panel is placed on the trigger end side and centered vertically.',
        },
        {
          label: 'End bottom',
          position: 'end-bottom',
          description:
            'The panel is placed on the trigger end side and bottom aligned with the trigger.',
        },
      ],
    },
    {
      label: 'Corners',
      positions: [
        {
          label: 'Top start corner',
          position: 'top-start-corner',
          description:
            'The panel is placed around the trigger top-start corner.',
        },
        {
          label: 'Top end corner',
          position: 'top-end-corner',
          description:
            'The panel is placed around the trigger top-end corner.',
        },
        {
          label: 'Bottom start corner',
          position: 'bottom-start-corner',
          description:
            'The panel is placed around the trigger bottom-start corner.',
        },
        {
          label: 'Bottom end corner',
          position: 'bottom-end-corner',
          description:
            'The panel is placed around the trigger bottom-end corner.',
        },
      ],
    },
  ];
}
