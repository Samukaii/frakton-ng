import { Component, input, signal } from '@angular/core';
import { FktInputComponent } from 'frakton-ng/input';
import { Field, form } from '@angular/forms/signals';

@Component({
	selector: 'input-currency-example',
	imports: [FktInputComponent, Field],
	styleUrl: './currency-example.component.scss',
	templateUrl: './currency-example.component.html'
})
export class CurrencyExampleComponent {
	label = input('Product Price');
	placeholder = input('0.00');

	control = form(signal(''));
}
