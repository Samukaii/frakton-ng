import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SignalFormControl } from '../../form/signal-form-control';
import { SignalFormControlDirective } from '../../directives';

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
