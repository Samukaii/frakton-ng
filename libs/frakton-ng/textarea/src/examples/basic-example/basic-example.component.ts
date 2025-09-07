import { Component, input } from '@angular/core';
import { FktTextareaComponent } from 'frakton-ng/textarea';
import { SignalFormControl } from 'frakton-ng/forms';

@Component({
	selector: 'textarea-basic-example',
	imports: [FktTextareaComponent],
	templateUrl: './basic-example.component.html',
	styleUrl: './basic-example.component.scss'
})
export class BasicExampleComponent {
	control = input(new SignalFormControl(''));
	label = input('Description');
	placeholder = input('Enter a detailed description...');
}
