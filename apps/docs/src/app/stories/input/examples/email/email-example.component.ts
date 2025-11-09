import { Component, input, signal } from '@angular/core';
import { FktInputComponent } from 'frakton-ng/input';
import { email, Field, form, required } from '@angular/forms/signals';

@Component({
	selector: 'input-email-example',
    imports: [FktInputComponent, Field],
	styleUrl: './email-example.component.scss',
	templateUrl: './email-example.component.html'
})
export class EmailExampleComponent {
	control = form(signal(''), (path) => {
		required(path, {message: "Field is required"})
		email(path, {message: "Email is invalid"})
	});
	label = input('Email Address');
	placeholder = input('Enter your email address');
}
