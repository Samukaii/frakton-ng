import { Component, input } from '@angular/core';
import { FktInputComponent } from '../../../index';
import { FktButtonComponent } from 'frakton-ng/button';
import { FormControlSuffixDirective, SignalFormControl } from 'frakton-ng/forms';

@Component({
	selector: 'input-suffix-example',
	imports: [FktInputComponent, FormControlSuffixDirective, FktButtonComponent],
	styleUrl: './suffix-example.component.scss',
	templateUrl: './suffix-example.component.html'
})
export class SuffixExampleComponent {
	control = input(new SignalFormControl(''));
	label = input('Search Products');
	placeholder = input('Search products...');
	searchClicked = input(false);

	performSearch(): void {
		const query = this.control().value();
		if (!query?.trim()) return;

		console.log('Searching for:', query);
	}
}
