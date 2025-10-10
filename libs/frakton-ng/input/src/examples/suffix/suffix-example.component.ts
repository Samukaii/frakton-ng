import { Component, input, signal } from '@angular/core';
import { FktInputComponent } from 'frakton-ng/input';
import { FktButtonComponent } from 'frakton-ng/button';
import { FormControlSuffixDirective } from 'frakton-ng/forms';
import { Control, form } from '@angular/forms/signals';

@Component({
	selector: 'input-suffix-example',
	imports: [FktInputComponent, FormControlSuffixDirective, FktButtonComponent, Control],
	styleUrl: './suffix-example.component.scss',
	templateUrl: './suffix-example.component.html'
})
export class SuffixExampleComponent {
	control = form(signal(''));
	label = input('Search Products');
	placeholder = input('Search products...');

	protected searchClicked = signal(false);

	performSearch(): void {
		const query = this.control().value();
		if (!query?.trim()) return;

		this.searchClicked.set(true);

		console.log('Searching for:', query);
	}
}
