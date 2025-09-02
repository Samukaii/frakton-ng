import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SignalFormControl, SignalFormControlDirective } from '@frakton-ng/forms';

@Component({
	selector: 'fkt-checkbox',
	imports: [ReactiveFormsModule, SignalFormControlDirective],
	templateUrl: './fkt-checkbox.component.html',
	styleUrl: './fkt-checkbox.component.scss',
})
export class FktCheckboxComponent {
	control = input.required<SignalFormControl<any>>();
	label = input('');
}
