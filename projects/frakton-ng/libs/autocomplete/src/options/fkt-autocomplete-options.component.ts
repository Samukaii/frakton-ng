import { Component, input, output } from '@angular/core';
import { FktSpinnerComponent } from '../../../spinner/src';
import { FktNoResults, FktNoResultsComponent } from '../../../no-results/src';
import { FktButtonsListComponent } from '../../../buttons-list';
import { FktIconComponent } from '../../../icon';
import { FktAutocompleteOption } from '@frakton-ng/autocomplete';
import { FktButtonAction } from '../../../button';

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
