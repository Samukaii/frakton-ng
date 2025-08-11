import { Component, input, output } from '@angular/core';
import { FktSpinnerComponent } from '../../spinner/fkt-spinner.component';
import { FktNoResultsComponent } from '../../no-results/fkt-no-results.component';
import { FktButtonsListComponent } from '../../buttons-list/fkt-buttons-list.component';
import { FktIconComponent } from '../../icon';
import { FktAutocompleteOption } from '../fkt-autocomplete.types';
import { FktButtonAction } from '../../button';
import { FktNoResults } from '../../../shared/types';

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
