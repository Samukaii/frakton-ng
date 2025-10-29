import {
	booleanAttribute,
	Component,
	computed,
	effect,
	ElementRef,
	inject,
	input,
	model,
	output,
	signal,
	untracked,
	viewChild,
} from '@angular/core';
import { FktInputComponent } from 'frakton-ng/input';
import { FktOverlayRef, FktOverlayService } from 'frakton-ng/overlay';
import { FktButtonAction } from 'frakton-ng/button';
import { FktNoResults } from 'frakton-ng/no-results';
import { FktAutoCompleteAddOptionEvent, FktAutocompleteOption } from './fkt-autocomplete.types';
import { AUTOCOMPLETE_ADD_OPTION } from './static/autocomplete-auto-created-option';
import { FktAutocompleteOptionsComponent } from './options/fkt-autocomplete-options.component';
import { getElementDesignTokens, getElementDesignToken, MarkUsed, outsideClickEffect } from 'frakton-ng/internal/utils';
import { FormValueControl, ValidationError, WithOptionalField } from '@angular/forms/signals';
import { FktSpinnerComponent } from 'frakton-ng/spinner';
import { FormControlSuffixDirective } from 'frakton-ng/forms';

@Component({
	selector: 'fkt-autocomplete',
	templateUrl: './fkt-autocomplete.component.html',
	styleUrl: './fkt-autocomplete.component.scss',
	imports: [
		FktInputComponent,
		FktSpinnerComponent,
		FormControlSuffixDirective
	]
})
export class FktAutocompleteComponent implements FormValueControl<string | number | null> {
	value = model<string | number | null>(null);
	touched = model(false);
	disabled = input(false);
	invalid = input(false);
	errors = input<readonly WithOptionalField<ValidationError>[]>([]);

	options = input<FktAutocompleteOption[]>([]);
	actions = input<FktButtonAction[]>([]);
	allowAddOption = input(false, {transform: booleanAttribute});
	addOptionLabel = input<string>();
	noResults = input<FktNoResults>({
		label: 'Sem resultados',
	});
	loading = input(false);

	placeholder = input('');
	label = input('');
	search = output<string>();
	addOption = output<FktAutoCompleteAddOptionEvent>();

	searchValue = signal('');
	selectedLabel = signal("");

	private overlayService = inject(FktOverlayService);
	private inputComponent = viewChild.required(FktInputComponent, {read: ElementRef});
	protected addingOptionLoading = signal(false);
	protected newOptions = signal<FktAutocompleteOption[]>([]);

	@MarkUsed()
	protected emitSearch = effect(() => {
		const searchValue = this.searchValue();

		untracked(() => {
			if (this.selectedLabel() !== searchValue)
				this.value.set(null);

			this.search.emit(searchValue);
		})
	});

	@MarkUsed()
	protected updateSearch = effect(() => {
		const value = this.value();
		const options = this.options();

		untracked(() => {
			const found = options.find(option => option.value === value);

			if (found) {
				this.searchValue.set(found.label);
				this.selectedLabel.set(found.label);
			}
		})
	});

	protected allOptions = computed(() => {
		const viewValue = this.searchValue();
		const enableAutoCreation = this.allowAddOption();
		const options = this.options();
		const newOptions = this.newOptions();

		if (!enableAutoCreation || !viewValue) return options;

		const alreadySelected = !!options.find(
			option =>
				option.label === viewValue || option.value === viewValue,
		)

		if (alreadySelected) return options;

		return [
			{
				label: viewValue,
				value: AUTOCOMPLETE_ADD_OPTION,
			} as FktAutocompleteOption,
			...options,
			...newOptions
		];
	});

	@MarkUsed()
	protected closeOverlayOnOutsideClick = outsideClickEffect(
		() => {
			this.closeOverlay();
		},
		{excludeIdsOrElements: ['autocomplete-options-overlay']},
	);

	protected openOverlay() {
		if (!!this.overlay || this.disabled()) return;

		const tokens = getElementDesignTokens(this.inputComponent().nativeElement);
		const globalBackgroundColor = getElementDesignToken(this.inputComponent().nativeElement, '--fkt-color-neutral-100');
		const backgroundColor = tokens['--fkt-autocomplete-options-background-color'] ?? globalBackgroundColor ?? '#FFF';

		this.overlay = this.overlayService.open({
			anchorElementRef: this.inputComponent(),
			component: FktAutocompleteOptionsComponent,
			data: {
				options: this.allOptions,
				loading: this.loading,
				addOptionLabel: this.addOptionLabel,
				actions: this.actions(),
				selected: computed(() => this.selectedOption()?.value ?? null),
				noResults: this.noResults(),
				select: option => {
					this.selectOption(option);
				},
			},
			panelOptions: {
				styles: tokens,
				backgroundColor
			}
		});
	}

	private overlay: null | FktOverlayRef<any> =
		null;

	protected selectedOption = computed(() => {
		const value = this.value();
		const found = this.allOptions().find(item => item.value === value);

		return found ?? null;
	});

	protected selectOption(option: FktAutocompleteOption) {
		this.selectedLabel.set(option.label);

		if (option.value === AUTOCOMPLETE_ADD_OPTION && this.allowAddOption()) {
			this.addingOptionLoading.set(true);

			this.addOption.emit({
				inputValue: option.label,
				done: value => {
					this.value.set(value);
					this.addingOptionLoading.set(false);
				}
			});

		} else {
			this.value.set(option.value);
		}

		this.closeOverlay();
	}

	private closeOverlay() {
		this.overlay?.close();
		this.overlay = null;
	}
}
