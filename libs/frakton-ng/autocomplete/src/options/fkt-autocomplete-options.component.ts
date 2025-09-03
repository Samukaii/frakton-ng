import { Component, input, output } from '@angular/core';
import { FktSpinnerComponent } from 'frakton-ng/spinner';
import { FktNoResults, FktNoResultsComponent } from 'frakton-ng/no-results';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktButtonAction } from 'frakton-ng/button';
import { FktAutocompleteOption } from '../fkt-autocomplete.types';

@Component({
	selector: 'fkt-autocomplete-options',
	imports: [
		FktIconComponent,
		FktSpinnerComponent,
		FktNoResultsComponent,
		FktButtonsListComponent,
	],
	templateUrl: './fkt-autocomplete-options.component.html',
	styleUrl: './fkt-autocomplete-options.component.scss',
	host: {
		id: 'autocomplete-options-overlay',
	},
})
export class FktAutocompleteOptionsComponent {
	options = input.required<FktAutocompleteOption[]>();
	loading = input<boolean | undefined>(false);
	selected = input<string | number | null>();
	actions = input<FktButtonAction[]>([]);
	noResults = input<FktNoResults | undefined>({
		label: 'Sem resultados',
	});

	select = output<FktAutocompleteOption>();
}
