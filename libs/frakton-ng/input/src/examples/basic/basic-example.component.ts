import { Component, input } from '@angular/core';
import { FktInputComponent, FktInputType } from 'frakton-ng/input';
import { SignalFormControl } from 'frakton-ng/forms';

@Component({
	selector: 'input-basic-example',
	imports: [FktInputComponent],
	styleUrl: './basic-example.component.scss',
	templateUrl: './basic-example.component.html'
})
export class BasicExampleComponent {
	control = input(new SignalFormControl(''));
	label = input('Full Name');
	placeholder = input('Enter your full name');
	type = input<FktInputType>('text');
	spellcheck = input(true);
}
