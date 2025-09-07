import { Component, input } from '@angular/core';
import { FktInputComponent } from '../../../index';
import { FktButtonComponent } from 'frakton-ng/button';
import { FormControlSuffixDirective, SignalFormControl } from 'frakton-ng/forms';

@Component({
	selector: 'input-suffix-example',
	imports: [FktInputComponent, FormControlSuffixDirective, FktButtonComponent],
	styleUrl: './suffix-example.component.scss',
	template: `
		<div class="container">
			<fkt-input
				[control]="control()"
				[label]="label()"
				[placeholder]="placeholder()"
				inputPadding="1rem 8rem 1rem 1rem"
				type="text"
			>
				<fkt-button
					*fktFormControlSuffix
					icon="magnifying-glass"
					iconPosition="left"
					theme="basic"
					text="Search"
					(click)="performSearch()"
				>
				</fkt-button>
			</fkt-input>

			<div class="container__info">
				<p>Search term: {{ control().value() || '(empty)' }}</p>
				<p>Search clicked: {{ searchClicked() ? '✓' : '✗' }}</p>
				<p class="container__text">Click the search button to trigger the search action</p>
			</div>
		</div>
	`
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
