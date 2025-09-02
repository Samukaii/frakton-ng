import { Component, input } from '@angular/core';
import { FktSelectComponent } from '@frakton-ng/select';
import { SignalFormControl } from '@frakton-ng/forms';
import { FktSelectOption } from '../fkt-select.types';
import { FktNoResults } from '@frakton-ng/no-results';

@Component({
  selector: 'select-empty-state-example',
  template: `
    <fkt-select
      [control]="control"
      [label]="label()"
      [placeholder]="placeholder()"
      [options]="options()"
      [loading]="loading()"
      [noResults]="noResults()!"
    />
    <div class="mt-4 p-4 bg-blue-50 rounded">
      <p class="text-sm text-blue-900">
        Click the dropdown to see the custom "no results" message
      </p>
    </div>
  `,
  standalone: true,
  imports: [FktSelectComponent]
})
export class EmptyStateExampleComponent {
  control = new SignalFormControl('');
  label = input<string>();
  placeholder = input<string>();
  options = input.required<FktSelectOption[]>();
  loading = input<boolean>(false);
  noResults = input<FktNoResults>();
}
