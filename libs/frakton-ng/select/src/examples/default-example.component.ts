import { Component, input } from '@angular/core';
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';
import { SignalFormControl } from 'frakton-ng/forms';

@Component({
  selector: 'select-default-example',
  template: `
    <fkt-select
      [control]="control"
      [label]="label()"
      [placeholder]="placeholder()"
      [options]="options()"
      [loading]="loading()"
      [noResults]="noResults()"
    />
    <div class="mt-4 p-4 bg-blue-50 text-sm text-blue-900 rounded">
      <strong>Selected Value:</strong> {{ control.value() || 'None' }}
    </div>
  `,
  standalone: true,
  imports: [FktSelectComponent]
})
export class DefaultExampleComponent {
  control = new SignalFormControl('');
  label = input<string>();
  placeholder = input<string>();
  options = input.required<FktSelectOption[]>();
  loading = input<boolean>(false);
  noResults = input<any>();
}
