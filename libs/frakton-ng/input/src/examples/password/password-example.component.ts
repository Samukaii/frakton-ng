import { Component, input, signal } from '@angular/core';
import { FktInputComponent } from '../../../index';
import { Control, form } from '@angular/forms/signals';

@Component({
	selector: 'input-password-example',
	imports: [FktInputComponent, Control],
	styleUrl: './password-example.component.scss',
	templateUrl: './password-example.component.html'
})
export class PasswordExampleComponent {
	control = form(signal(''));
	label = input('Password');
	placeholder = input('Enter your password');
}
