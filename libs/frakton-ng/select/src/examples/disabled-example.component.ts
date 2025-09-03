import { Component, input, OnInit } from '@angular/core';
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';
import { SignalFormControl } from 'frakton-ng/forms';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
  selector: 'select-disabled-example',
  template: `
	  <fkt-select
		  [control]="control"
		  [label]="label()"
		  [placeholder]="placeholder()"
		  [options]="options()"
	  />
	  <fkt-button
		  class="w-fit my-4"
		  (click)="toggleDisabled()"
		  theme="stroked"
		  [text]="control.disabled() ? 'Enable field' : 'Disable field'"
	  >
	  </fkt-button>
  `,
  standalone: true,
	imports: [FktSelectComponent, FktButtonComponent]
})
export class DisabledExampleComponent implements OnInit {
  control = new SignalFormControl('option2');
  label = input<string>();
  placeholder = input<string>();
  options = input.required<FktSelectOption[]>();

  ngOnInit() {
    this.control.disable();
  }

  toggleDisabled() {
    if (this.control.disabled()) {
      this.control.enable();
    } else {
      this.control.disable();
    }
  }
}
