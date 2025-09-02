import { Component, input } from '@angular/core';
import { FktSelectComponent } from '@frakton-ng/select';
import { SignalFormControl } from '@frakton-ng/forms';
import { FktSelectOption } from '../fkt-select.types';

@Component({
  selector: 'select-loading-example',
  template: `
    <fkt-select
      [control]="control"
      [label]="label()"
      [placeholder]="placeholder()"
      [options]="options()"
      [loading]="loading()"
    />
    <div class="mt-4 p-4 bg-blue-50 text-blue-900 text-sm rounded">
      <p>
        <strong>Loading State:</strong> {{ loading() ? 'Loading options...' : 'Ready' }}
      </p>
    </div>
  `,
  standalone: true,
  imports: [FktSelectComponent]
})
export class LoadingExampleComponent {
  control = new SignalFormControl('');
  label = input<string>();
  placeholder = input<string>();
  options = input.required<FktSelectOption[]>();
  loading = input<boolean>(true);
}
