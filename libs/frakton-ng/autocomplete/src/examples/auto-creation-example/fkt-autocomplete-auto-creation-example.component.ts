import { Component, computed, input, linkedSignal, model, signal } from '@angular/core';
import {
	FktAutoCompleteAddOptionEvent,
	FktAutocompleteComponent,
	FktAutocompleteOption
} from 'frakton-ng/autocomplete';
import { Control, form } from '@angular/forms/signals';

@Component({
	selector: 'fkt-autocomplete-auto-creation-example',
	imports: [FktAutocompleteComponent, Control],
	templateUrl: './fkt-autocomplete-auto-creation-example.component.html',
	styleUrl: './fkt-autocomplete-auto-creation-example.component.scss'
})
export class FktAutocompleteAutoCreationExampleComponent {
	selectedValue = input<FktAutocompleteOption | null>(null);
	label = input<string>('Country (create new if not found)');
	placeholder = input<string>('Type a country name');
	addOptionLabel = input<string>('Add country "{{inputValue}}"');
	allowAddOption = input<boolean>(true);
	options = model<FktAutocompleteOption[]>([
		{ value: "us", label: "United States" },
		{ value: "ca", label: "Canada" },
		{ value: "uk", label: "United Kingdom" },
		{ value: "de", label: "Germany" },
		{ value: "fr", label: "France" },
		{ value: "es", label: "Spain" },
		{ value: "it", label: "Italy" },
		{ value: "jp", label: "Japan" },
		{ value: "au", label: "Australia" },
		{ value: "br", label: "Brazil" },
	]);

	protected searchTerm = signal('');

	protected filteredOptions = linkedSignal(() => {
		const searchTerm = this.searchTerm();

		return this.options().filter(option => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
	});

	protected control = form(signal(''));

	protected selectedOption = computed(() => {
		return this.options()?.find(option => option.value === this.control().value());
	});

	protected onAutoCreate(event: FktAutoCompleteAddOptionEvent) {
		setTimeout(() => {
			const newOption = {
				value: crypto.randomUUID(),
				label: event.inputValue,
			};

			this.options.update(options => [
				...options,
				newOption
			]);

			event.done(newOption.value)
		}, 1000)
	}
}
