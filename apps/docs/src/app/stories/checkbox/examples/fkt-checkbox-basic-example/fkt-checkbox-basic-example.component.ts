import { Component, input, signal } from '@angular/core';
import { FktCheckboxComponent } from 'frakton-ng/checkbox';
import { Field, form } from '@angular/forms/signals';

@Component({
	selector: 'fkt-checkbox-basic-example',
	imports: [
		FktCheckboxComponent,
		Field
	],
	templateUrl: './fkt-checkbox-basic-example.component.html',
	styleUrl: './fkt-checkbox-basic-example.component.scss'
})
export class FktCheckboxBasicExampleComponent {
	label = input('Accept terms and conditions');

	protected field = form(signal(false));
}
