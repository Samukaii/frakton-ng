import { booleanAttribute, Component, input, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'fkt-toggle',
  imports: [],
  templateUrl: './fkt-toggle.component.html',
  styleUrl: './fkt-toggle.component.scss'
})
export class FktToggleComponent implements FormValueControl<boolean> {
	value = model(false)

	label = input.required<string>();
	hideLabel = input(false, {
		transform: booleanAttribute
	});

	protected onClick() {
		this.value.update(value => !value);
	}
}
