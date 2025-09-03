import { Component, DOCUMENT, effect, inject, input, output } from '@angular/core';
import { MarkUsed } from 'frakton-ng/internal/utils';
import { FktSpinnerComponent } from 'frakton-ng/spinner';
import { FktNoResults, FktNoResultsComponent } from 'frakton-ng/no-results';
import { FktAutocompleteOption } from 'frakton-ng/autocomplete';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
  selector: 'fkt-fkt-select-overlay',
	imports: [
		FktSpinnerComponent,
		FktNoResultsComponent,
		FktIconComponent
	],
  templateUrl: './fkt-select-overlay.component.html',
  styleUrl: './fkt-select-overlay.component.scss'
})
export class FktSelectOverlayComponent {
	hostElement = input.required<HTMLElement>();
	options = input.required<FktAutocompleteOption[]>();
	loading = input<boolean | undefined>(false);
	selected = input<string | number | null>();
	activeOptionId= input.required<string | null>();
	noResults = input<FktNoResults | undefined>({
		label: 'Sem resultados',
	});
	select = output<FktAutocompleteOption>();

	private document = inject(DOCUMENT);

	@MarkUsed()
	protected scrollToActiveOption = effect(() => {
		const activeOptionId = this.activeOptionId();

		if(!activeOptionId) return;

		this.document.getElementById(activeOptionId)?.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
	});
}
