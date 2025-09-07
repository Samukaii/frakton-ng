import { Component, input } from '@angular/core';
import { FktInputComponent } from '../../../index';
import { SignalFormControl } from 'frakton-ng/forms';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
	selector: 'input-password-example',
	imports: [FktInputComponent, FktIconComponent],
	styleUrl: './password-example.component.scss',
	templateUrl: './password-example.component.html'
})
export class PasswordExampleComponent {
	control = input(new SignalFormControl(''));
	label = input('Password');
	placeholder = input('Enter your password');
}
