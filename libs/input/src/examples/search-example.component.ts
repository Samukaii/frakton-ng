import { Component, input, signal } from '@angular/core';
import { FktInputComponent } from '@frakton-ng/input';
import { FktIconComponent } from '@frakton-ng/icon';
import { SignalFormControl, FormControlSuffixDirective } from '@frakton-ng/forms';

@Component({
	selector: 'input-search-example',
	standalone: true,
	imports: [FktInputComponent, FormControlSuffixDirective, FktIconComponent],
	template: `
		<div class="w-full space-y-4">
			<fkt-input
				[control]="control()"
				[label]="label()"
				[placeholder]="placeholder()"
				inputPadding="8rem 8rem 8rem 8rem"
				type="text"
			>
				<button
					*fktFormControlSuffix
					class="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition flex items-center gap-1"
					[disabled]="!control().value()?.trim()"
					(click)="performSearch()"
				>
					<fkt-icon name="magnifying-glass" class="size-4"></fkt-icon>
					Search
				</button>
			</fkt-input>

			<div class="text-sm text-gray-600">
				<p>Search term: {{ control().value() || '(empty)' }}</p>
				<p>Searches performed: {{ searchCount() }}</p>
				<p class="text-xs text-gray-500">Enter a search term and click the search button</p>
				@if (lastSearchTerm()) {
					<p class="text-xs text-blue-600">Last search: "{{ lastSearchTerm() }}"</p>
				}
			</div>
		</div>
	`
})
export class SearchExampleComponent {
	control = input(new SignalFormControl(''));
	label = input('Product Search');
	placeholder = input('Search for products...');

	searchCount = signal(0);
	lastSearchTerm = signal('');

	performSearch(): void {
		const query = this.control().value()?.trim();
		if (query) {
			this.searchCount.update(count => count + 1);
			this.lastSearchTerm.set(query);
			console.log('Searching for:', query);
			// Here you would typically call a search service
		}
	}
}
