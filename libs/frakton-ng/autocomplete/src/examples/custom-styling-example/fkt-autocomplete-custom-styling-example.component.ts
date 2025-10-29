import { Component, computed, linkedSignal, model, signal } from '@angular/core';
import { FktAutocompleteComponent, FktAutocompleteOption } from 'frakton-ng/autocomplete';
import { Control, disabled, form } from '@angular/forms/signals';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
	selector: 'fkt-autocomplete-custom-styling-example',
	imports: [FktAutocompleteComponent, Control, FktButtonComponent],
	templateUrl: './fkt-autocomplete-custom-styling-example.component.html',
	styleUrl: './fkt-autocomplete-custom-styling-example.component.scss'
})
export class FktAutocompleteCustomStylingExampleComponent {
	selectedValue = model<FktAutocompleteOption | null>(null);
	label = model<string>('Styled Autocomplete');
	placeholder = model<string>('This field can be disabled');
	options = model<FktAutocompleteOption[]>([
		{ value: "apple", label: "Apple" },
		{ value: "banana", label: "Banana" },
		{ value: "cherry", label: "Cherry" },
		{ value: "grape", label: "Grape" },
		{ value: "orange", label: "Orange" },
		{ value: "strawberry", label: "Strawberry" },
	]);

	private disabled = signal(false);
	protected searchTerm = signal('');

	protected filteredOptions = linkedSignal(() => {
		const searchTerm = this.searchTerm();

		return this.options().filter(option => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
	});

	protected control = form(signal(''), path => {
		disabled(path, () => this.disabled());
	});

	protected selectedOption = computed(() => {
		return this.options()?.find(option => option.value === this.control().value());
	});

	protected toggleDisabled() {
		this.disabled.update(disabled => !disabled);
	}
}
