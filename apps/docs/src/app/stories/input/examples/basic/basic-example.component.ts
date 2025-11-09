import { Component, input, signal } from '@angular/core';
import { FktInputComponent, FktInputType } from 'frakton-ng/input';
import { Field, form } from '@angular/forms/signals';

@Component({
	selector: 'input-basic-example',
    imports: [FktInputComponent, Field],
	styleUrl: './basic-example.component.scss',
	templateUrl: './basic-example.component.html'
})
export class BasicExampleComponent {
	label = input('Full Name');
	placeholder = input('Enter your full name');
	type = input<FktInputType>('text');
	spellcheck = input(true);

	protected field = form(signal(''))
}
