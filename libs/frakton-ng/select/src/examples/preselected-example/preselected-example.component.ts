import { Component, computed, input, signal } from '@angular/core';
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';
import { Control, form } from '@angular/forms/signals';

@Component({
	selector: 'select-preselected-example',
	templateUrl: './preselected-example.component.html',
	styleUrl: './preselected-example.component.scss',
	imports: [FktSelectComponent, Control]
})
export class PreselectedExampleComponent {
	label = input<string>();
	placeholder = input<string>();
	options = input.required<FktSelectOption[]>();

	protected control = form(signal('us')); // Pre-selected value

	selectedLabel = computed(() => {
		const value = this.control().value();
		const option = this.options().find(opt => opt.value === value);
		return option ? option.label : 'None';
	});
}
