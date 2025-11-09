import { Component, computed, input, signal } from '@angular/core';
import { FktTextareaComponent } from 'frakton-ng/textarea';
import { Field, form, maxLength, minLength, required } from '@angular/forms/signals';
import { FktFieldErrorComponent } from 'frakton-ng/field-error';

@Component({
	selector: 'textarea-validation-example',
	imports: [FktTextareaComponent, Field, FktFieldErrorComponent],
	templateUrl: './validation-example.component.html',
	styleUrl: './validation-example.component.scss'
})
export class ValidationExampleComponent {
	minLength = input(20);
	maxLength = input(500);
	label = input('Bio');
	placeholder = input('Tell us about yourself...');

	control = form(signal(''), path => {
		required(path, {message: "The field is required"});
		minLength(path, this.minLength(), {message: `Min length is ${this.minLength()}`});
		maxLength(path, this.maxLength(), {message: `Max length is ${this.maxLength()}`});
	});

	characterCount = computed(() => {
		return this.control().value()?.length || 0;
	});
}
