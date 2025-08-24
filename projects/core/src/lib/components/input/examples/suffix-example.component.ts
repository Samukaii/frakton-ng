import { Component, input } from '@angular/core';
import { FktInputComponent } from '../fkt-input.component';
import { FormControlSuffixDirective } from '../../../directives';
import { SignalFormControl } from '../../../form/signal-form-control';
import { FktButtonComponent } from '../../button';

@Component({
	selector: 'input-suffix-example',
	standalone: true,
	imports: [FktInputComponent, FormControlSuffixDirective, FktButtonComponent],
	template: `
		<div class="w-full space-y-4">
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
					text="Search"
					(click)="performSearch()"
				>
				</fkt-button>
			</fkt-input>

			<div class="text-sm text-gray-600">
				<p>Search term: {{ control().value() || '(empty)' }}</p>
				<p>Search clicked: {{ searchClicked() ? '✓' : '✗' }}</p>
				<p class="text-xs text-gray-500">Click the search button to trigger the search action</p>
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
		if (query?.trim()) {
			console.log('Searching for:', query);
			// Here you would typically call a search service
		}
	}
}
