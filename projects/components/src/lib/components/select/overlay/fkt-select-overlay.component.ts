import { Component, DestroyRef, inject, input, OnInit, output } from '@angular/core';
import { outsideClickEffect } from '../../../utils/outside-click-effect';
import { MarkUsed } from '../../../utils/mark-used';
import { FktSpinnerComponent } from '../../spinner';
import { FktNoResultsComponent } from '../../no-results';
import { FktAutocompleteOption } from '../../autocomplete';
import { FktNoResults } from '../../../shared/types';
import { FktIconComponent } from '../../icon';

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
	noResults = input<FktNoResults | undefined>({
		label: 'Sem resultados',
	});
	close = output();
	select = output<FktAutocompleteOption>();

	@MarkUsed()
	protected autoClose = outsideClickEffect((target) => {
		if(target instanceof HTMLElement && target === this.hostElement()) return;
		this.close.emit();
	});

}
