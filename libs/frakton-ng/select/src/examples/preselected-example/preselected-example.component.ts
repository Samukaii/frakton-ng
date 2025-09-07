import { Component, computed, input } from '@angular/core';
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';
import { SignalFormControl } from 'frakton-ng/forms';

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
