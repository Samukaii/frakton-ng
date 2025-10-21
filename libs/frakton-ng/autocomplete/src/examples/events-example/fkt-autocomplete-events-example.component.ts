import { Component, computed, linkedSignal, model, signal } from '@angular/core';
import { FktAutocompleteComponent, FktAutocompleteOption } from 'frakton-ng/autocomplete';
import { FktButtonAction } from 'frakton-ng/button';
import { FktIconComponent } from 'frakton-ng/icon';
import { Control, form } from '@angular/forms/signals';

@Component({
	selector: 'fkt-autocomplete-events-example',
	imports: [FktAutocompleteComponent, FktIconComponent, Control],
	templateUrl: './fkt-autocomplete-events-example.component.html',
	styleUrl: './fkt-autocomplete-events-example.component.scss'
})
export class FktAutocompleteEventsExampleComponent {
	label = model<string>('Manage tags');
	placeholder = model<string>('Select or search for tags');
	protected lastEvent = signal<string>('');

	protected options = model<FktAutocompleteOption[]>([
		{value: "frontend", label: "Frontend"},
		{value: "backend", label: "Backend"},
		{value: "react", label: "React"},
		{value: "angular", label: "Angular"},
		{value: "vue", label: "Vue"},
		{value: "javascript", label: "JavaScript"},
		{value: "typescript", label: "TypeScript"},
		{value: "nodejs", label: "Node.js"},
		{value: "python", label: "Python"},
		{value: "java", label: "Java"},
	]);

	protected searchTerm = signal('');

	protected filteredOptions = linkedSignal(() => {
		const searchTerm = this.searchTerm();

		return this.options().filter(option => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
	});

	protected selectedOption = computed(() => {
		return this.options()?.find(option => option.value === this.control().value());
	});

	protected control = form(signal(''));

	protected actions = signal<FktButtonAction[]>([
		{
			icon: "pencil",
			color: 'primary',
			theme: 'basic',
			identifier: 'edit',
			ariaLabel: 'Edit option',
			click: () => {
				this.lastEvent.set("edit")
			}
		},
		{
			icon: "star",
			color: 'accent',
			theme: 'basic',
			identifier: 'favorite',
			ariaLabel: 'Favorite option',
			click: () => {
				this.lastEvent.set("favorite")
			}
		},
		{
			icon: "trash",
			color: 'danger',
			theme: 'basic',
			identifier: 'delete',
			ariaLabel: 'Delete option',
			click: () => {
				this.lastEvent.set("delete")
			}
		}
	]);

	onSearch(searchTerm: string) {
		this.lastEvent.set(`Search: "${searchTerm}"`);
		console.log('Search term:', searchTerm);
	}
}
