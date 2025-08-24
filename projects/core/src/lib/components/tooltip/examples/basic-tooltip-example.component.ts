import { Component } from '@angular/core';
import { FktButtonComponent } from '../../button';
import { FktTooltipDirective } from '../fkt-tooltip.directive';

@Component({
  selector: 'basic-tooltip-example',
  template: `
    <div class="space-y-4">
      <h3 class="text-lg font-semibold">Basic Tooltips</h3>
      <div class="flex flex-wrap gap-4">
        <fkt-button
          text="Hover me"
          theme="stroked"
          color="primary"
          fktTooltip="This is a basic tooltip message"
        ></fkt-button>

        <fkt-button
          text="Info Button"
          theme="raised"
          color="primary"
          fktTooltip="Click this button to perform an action"
        ></fkt-button>

        <fkt-button
          text="Disabled State"
          theme="stroked"
          color="primary"
          [disabled]="true"
          fktTooltip="This button is disabled"
        ></fkt-button>
      </div>
    </div>
  `,
  standalone: true,
  imports: [FktButtonComponent, FktTooltipDirective]
})
export class BasicTooltipExampleComponent {}
