import { Component, DOCUMENT, effect, inject, input, linkedSignal, model, output, signal } from '@angular/core';
import { MarkUsed } from 'frakton-ng/internal/utils';
import { FktSpinnerComponent } from 'frakton-ng/spinner';
import { FktNoResults, FktNoResultsComponent } from 'frakton-ng/no-results';
import { FktAutocompleteOption } from 'frakton-ng/autocomplete';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktNavigableListDirective } from 'frakton-ng/navigable-list';

@Component({
	selector: 'fkt-fkt-select-options',
	imports: [
		FktSpinnerComponent,
		FktNoResultsComponent,
		FktIconComponent,
		FktNavigableListDirective,
	],
	templateUrl: './fkt-select-options.component.html',
	styleUrl: './fkt-select-options.component.scss',
})
export class FktSelectOptionsComponent {
	hostElement = input.required<HTMLElement>();
	options = input.required<FktAutocompleteOption[]>();
	loading = input<boolean | undefined>(false);
	selected = input<string | number | null>();
	activeOptionId = model<string | null>(null);
	noResults = input<FktNoResults | undefined>({
		label: 'Sem resultados',
	});
	select = output<FktAutocompleteOption>();

	@MarkUsed()
	protected scrollToActiveOption = effect(() => {
		const currentOption = this.options()[this.currentIndex()];

		this.activeOptionId.set(`fkt-select-option-${currentOption.value}`);
	});
	protected currentIndex = linkedSignal(() => {
		const selected = this.selected();
		const options = this.options();

		const optionIndex = options.findIndex(item => item.value === selected);

		if(optionIndex === -1)
			return 0;

		return optionIndex;
	});

	onKeyBoardSelect($event: number) {
		const options = this.options();
		const selected = options[$event];

		if(!selected) return;

		this.select.emit(selected);
	}
}
