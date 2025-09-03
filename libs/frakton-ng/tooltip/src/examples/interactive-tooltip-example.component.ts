import { Component, inject } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktSelectComponent } from 'frakton-ng/select';
import { FktInputComponent } from 'frakton-ng/input';
import { FktCheckboxComponent } from 'frakton-ng/checkbox';
import { FktTooltipDirective } from 'frakton-ng/tooltip';
import { SignalFormBuilder } from 'frakton-ng/forms';
import { FktGeometryPosition } from 'frakton-ng/internal/types';
import { fktGeometryPositions } from 'frakton-ng/internal/types';

@Component({
  selector: 'interactive-tooltip-example',
  template: `
    <div class="space-y-6">
      <h3 class="text-lg font-semibold">Interactive Tooltip Controls</h3>

      <form class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <fkt-select
            [control]="form.controls.position"
            [label]="'Tooltip Position'"
            [options]="positionOptions"
          ></fkt-select>

          <fkt-checkbox
            [control]="form.controls.enabled"
            [label]="'Enable Tooltips'"
          ></fkt-checkbox>
        </div>

        <fkt-input
          [control]="form.controls.text"
          [label]="'Tooltip Text'"
          [placeholder]="'Enter tooltip message...'"
          [type]="'text'"
        ></fkt-input>
      </form>

      <div class="border-t pt-4 border-gray-200">
        <div class="flex justify-center">
          <fkt-button
            text="Interactive Tooltip Button"
            theme="raised"
            color="primary"
			disableAutoReposition
            [fktTooltip]="form.controls.text.value()"
            [tooltipEnabled]="form.controls.enabled.value()"
            [position]="form.controls.position.value()"
          ></fkt-button>
        </div>
      </div>

      <div class="text-sm text-gray-600 bg-gray-50 p-4 rounded-md">
        <p class="font-medium mb-2">Current Settings:</p>
        <ul class="space-y-1">
          <li><strong>Enabled:</strong> {{ form.controls.enabled.value() ? 'Yes' : 'No' }}</li>
          <li><strong>Position:</strong> {{ form.controls.position.value() }}</li>
          <li><strong>Text:</strong> "{{ form.controls.text.value() }}"</li>
        </ul>

        <div class="mt-3 text-xs text-gray-500">
          <p><strong>Instructions:</strong> Hover over the button above to see the tooltip with your current settings.</p>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [FktButtonComponent, FktSelectComponent, FktInputComponent, FktCheckboxComponent, FktTooltipDirective]
})
export class InteractiveTooltipExampleComponent {
  private fb = inject(SignalFormBuilder);

  form = this.fb.group({
    enabled: true,
    position: 'bottom-center' as FktGeometryPosition,
    text: 'This is a configurable tooltip message'
  });

  positionOptions = fktGeometryPositions.map(position => ({
    value: position,
    label: this.formatPositionLabel(position)
  }));

  private formatPositionLabel(position: FktGeometryPosition): string {
    return position
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
