import { Component, input } from '@angular/core';
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';
import { SignalFormControl } from 'frakton-ng/forms';

@Component({
  selector: 'select-large-list-example',
  template: `
    <fkt-select
      [control]="control"
      [label]="label()"
      [placeholder]="placeholder()"
      [options]="options()"
    />
    <div class="mt-4 p-4 bg-blue-50 text-blue-900 text-sm rounded">
      <p>
        Scrollable dropdown with {{ options().length }} options
      </p>
      <p class="mt-2">
        <strong>Selected:</strong> {{ control.value() || 'None' }}
      </p>
    </div>
  `,
  standalone: true,
  imports: [FktSelectComponent]
})
export class LargeListExampleComponent {
  control = new SignalFormControl('');
  label = input<string>();
  placeholder = input<string>();
  options = input.required<FktSelectOption[]>();
}
