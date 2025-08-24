import { Component, input, computed } from '@angular/core';
import { FktSelectComponent } from '../fkt-select.component';
import { SignalFormControl } from '../../../form/signal-form-control';
import { FktSelectOption } from '../fkt-select.types';

@Component({
  selector: 'select-preselected-example',
  template: `
    <fkt-select
      [control]="control"
      [label]="label()"
      [placeholder]="placeholder()"
      [options]="options()"
    />
    <div class="mt-4 p-4 bg-blue-50 text-blue-900 text-sm rounded">
      <strong>Pre-selected Country:</strong> {{ selectedLabel() }}
    </div>
  `,
  standalone: true,
  imports: [FktSelectComponent]
})
export class PreselectedExampleComponent {
  control = new SignalFormControl('us'); // Pre-selected value
  label = input<string>();
  placeholder = input<string>();
  options = input.required<FktSelectOption[]>();

  selectedLabel = computed(() => {
    const value = this.control.value();
    const option = this.options().find(opt => opt.value === value);
    return option ? option.label : 'None';
  });
}
