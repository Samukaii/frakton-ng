import { Component, computed, linkedSignal, model, signal } from '@angular/core';
import { FktAutocompleteComponent, FktAutocompleteOption } from 'frakton-ng/autocomplete';
import { Field, form } from '@angular/forms/signals';

@Component({
	selector: 'fkt-autocomplete-basic-example',
	imports: [FktAutocompleteComponent, Field],
	templateUrl: './fkt-autocomplete-basic-example.component.html',
	styleUrl: './fkt-autocomplete-basic-example.component.scss'
})
export class FktAutocompleteBasicExampleComponent {
	label = model<string>('Select a fruit');
	placeholder = model<string>('Start typing...');
	options = model<FktAutocompleteOption[]>([
		{ value: "apple", label: "Apple" },
		{ value: "banana", label: "Banana" },
		{ value: "cherry", label: "Cherry" },
		{ value: "grape", label: "Grape" },
		{ value: "orange", label: "Orange" },
		{ value: "strawberry", label: "Strawberry" },
	]);

	control = form(signal(''));

	protected searchTerm = signal('');

	protected filteredOptions = linkedSignal(() => {
		const searchTerm = this.searchTerm();

		return this.options().filter(option => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
	});

	protected selectedOption = computed(() => {
		return this.options()?.find(option => option.value === this.control().value());
	});

	onSearch(searchTerm: string) {
		console.log('Search term:', searchTerm);
	}
}
