import { Component, input, signal } from '@angular/core';
import { FktTextareaComponent } from 'frakton-ng/textarea';
import { Field, form } from '@angular/forms/signals';

@Component({
	selector: 'textarea-basic-example',
	imports: [FktTextareaComponent, Field],
	templateUrl: './basic-example.component.html',
	styleUrl: './basic-example.component.scss'
})
export class BasicExampleComponent {
	label = input('Description');
	placeholder = input('Enter a detailed description...');
	spellcheck = input(true);

	protected control = form(signal(''));
}
