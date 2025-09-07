import { Component, computed, input } from '@angular/core';
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';
import { SignalFormControl } from 'frakton-ng/forms';

@Component({
	selector: 'select-preselected-example',
	templateUrl: './preselected-example.component.html',
	styleUrl: './preselected-example.component.scss',
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
