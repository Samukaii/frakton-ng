import { Component, computed, inject, input, output, viewChild, } from '@angular/core';
import { FktInputComponent } from 'frakton-ng/input';
import { FktOverlayRef, FktOverlayService } from 'frakton-ng/overlay';
import { SignalFormControl, SignalFormControlTransformer } from 'frakton-ng/forms';
import { FktButtonAction } from 'frakton-ng/button';
import { FktNoResults } from 'frakton-ng/no-results';
import { FktAutocompleteOption } from './fkt-autocomplete.types';
import { AUTOCOMPLETE_AUTO_CREATED_OPTION } from './static/autocomplete-auto-created-option';
import {FktAutocompleteOptionsComponent} from './options/fkt-autocomplete-options.component';
import { MarkUsed, outsideClickEffect } from 'frakton-ng/internal/utils';

@Component({
	selector: 'fkt-autocomplete',
	templateUrl: './fkt-autocomplete.component.html',
	styleUrl: './fkt-autocomplete.component.scss',
	imports: [
		FktInputComponent
	]
})
export class FktAutocompleteComponent {
	control = input.required<SignalFormControl<any>>();
	options = input<FktAutocompleteOption[]>([]);
	actions = input<FktButtonAction[]>([]);
	enableAutoCreation = input(false);
	noResults = input<FktNoResults>({
		label: 'Sem resultados',
	});
	loading = input(false);

	placeholder = input('');
	label = input('');
	search = output<string>();

	private overlayService = inject(FktOverlayService);
	private inputComponent = viewChild.required(FktInputComponent);

	protected allOptions = computed(() => {
		const viewValue = this.control().viewValue();
		const enableAutoCreation = this.enableAutoCreation();
		const options = this.options();

		if (!enableAutoCreation || !viewValue) return options;

		if (
			!!options.find(
				option =>
					option.label === viewValue || option.value === viewValue,
			)
		)
			return options;

		return [
			{
				label: viewValue,
				value: AUTOCOMPLETE_AUTO_CREATED_OPTION,
			} as FktAutocompleteOption,
			...options,
		];
	});

	transformer: SignalFormControlTransformer = value => {
		const search: string = value;

		const found = this.allOptions().find(
			item =>
				item.value.toString() === search ||
				item.label.toString() === search,
		);

		if (found)
			return {
				modelValue: found.value,
				viewValue: found.label,
			};

		return {
			viewValue: value,
			modelValue: null,
		};
	};

	@MarkUsed()
	protected closeOverlayOnOutsideClick = outsideClickEffect(
		() => {
			this.closeOverlay();
		},
		{ excludeIdsOrElements: ['autocomplete-options-overlay'] },
	);

	protected openOverlay() {
		if (!!this.overlay || this.control().disabled()) return;

		this.overlay = this.overlayService.open({
			anchorElementRef: this.inputComponent().element(),
			component: FktAutocompleteOptionsComponent,
			data: {
				options: this.allOptions,
				loading: this.loading,
				actions: this.actions(),
				selected: computed(() => this.selectedOption()?.value ?? null),
				noResults: this.noResults(),
				select: option => {
					this.selectOption(option);
				},
			},
		});
	}

	private overlay: null | FktOverlayRef<any> =
		null;

	protected selectedOption = computed(() => {
		const value = this.control().value();
		const found = this.allOptions().find(item => item.value === value);

		return found ?? null;
	});

	protected selectOption(option: FktAutocompleteOption) {
		this.control().setValue({
			modelValue: option.value,
			viewValue: option.label,
		});

		this.closeOverlay();
	}

	private closeOverlay() {
		this.overlay?.close();
		this.overlay = null;
	}
}
