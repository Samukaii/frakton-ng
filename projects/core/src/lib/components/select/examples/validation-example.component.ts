import { Component, input } from '@angular/core';
import { FktSelectComponent } from '../fkt-select.component';
import { SignalFormControl } from '../../../form/signal-form-control';
import { SignalValidators } from '../../../form/validators/signal-validators';
import { FktSelectOption } from '../fkt-select.types';

@Component({
  selector: 'select-validation-example',
  template: `
    <fkt-select
      [control]="control"
      [label]="label()"
      [placeholder]="placeholder()"
      [options]="options()"
    />
    <div class="mt-4 p-4 bg-blue-50 rounded">
      <p class="text-sm text-blue-900">
        <strong>Validation Status:</strong>
        {{ control.valid() ? 'Valid ✓' : 'Invalid - Priority is required' }}
      </p>
      <div
        class="mt-2 text-sm font-semibold text-blue-900"
      >
        Touch field and click outside to Show Error
      </div>
    </div>
  `,
  standalone: true,
  imports: [FktSelectComponent]
})
export class ValidationExampleComponent {
  control = new SignalFormControl('', {
    validators: [SignalValidators.required()]
  });
  label = input<string>();
  placeholder = input<string>();
  options = input.required<FktSelectOption[]>();
}
