import { Component, computed, linkedSignal, model, signal } from '@angular/core';
import { FktAutocompleteComponent, FktAutocompleteOption } from 'frakton-ng/autocomplete';
import { FktNoResults } from 'frakton-ng/no-results';
import { FktButtonComponent } from 'frakton-ng/button';
import { Field, form } from '@angular/forms/signals';

@Component({
	selector: 'fkt-autocomplete-loading-states-example',
	imports: [FktAutocompleteComponent, FktButtonComponent, Field],
	templateUrl: './fkt-autocomplete-loading-states-example.component.html',
	styleUrl: './fkt-autocomplete-loading-states-example.component.scss'
})
export class FktAutocompleteLoadingStatesExampleComponent {
	label = model<string>('Search with Loading States');
	placeholder = model<string>('Type to search');
	loading = model<boolean>(false);

	control = form(signal(''));
	searchTerm = signal('');
	options = signal<FktAutocompleteOption[]>([]);

	allOptions: FktAutocompleteOption[] = [
		{ value: "user1", label: "Alice Johnson" },
		{ value: "user2", label: "Bob Smith" },
		{ value: "user3", label: "Carol Davis" },
		{ value: "user4", label: "David Wilson" },
		{ value: "user5", label: "Emma Brown" },
		{ value: "user6", label: "Frank Miller" },
		{ value: "user7", label: "Grace Taylor" },
		{ value: "user8", label: "Henry Anderson" },
	];

	noResults = model<FktNoResults>({
		label: "No users found. Try a different search term."
	});

	protected filteredOptions = linkedSignal(() => {
		const searchTerm = this.searchTerm();
		if (!searchTerm) return this.options();
		return this.options().filter(option => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
	});

	simulateLoading() {
		this.loading.set(true);
		this.options.set([]);

		// Simulate API call delay
		setTimeout(() => {
			this.options.set(this.allOptions);
			this.loading.set(false);
		}, 2000);
	}

	simulateNoResults() {
		this.loading.set(true);
		this.options.set([]);

		// Simulate API call with no results
		setTimeout(() => {
			this.options.set([]);
			this.loading.set(false);
		}, 1500);
	}

	resetToNormal() {
		this.loading.set(false);
		this.options.set(this.allOptions);
	}

	onSearch(searchTerm: string) {
		this.searchTerm.set(searchTerm);

		if (searchTerm.length >= 2) {
			this.loading.set(true);
			this.options.set([]);

			// Simulate search API call
			setTimeout(() => {
				const filtered = this.allOptions.filter(option =>
					option.label.toLowerCase().includes(searchTerm.toLowerCase())
				);
				this.options.set(filtered);
				this.loading.set(false);
			}, 800);
		} else {
			this.options.set(this.allOptions);
			this.loading.set(false);
		}
	}
}
