import { booleanAttribute, Component, computed, inject, input, model, output, signal } from '@angular/core';
import { FktSelectOptionsComponent } from './options/fkt-select-options.component';
import { FktOverlayRef, FktOverlayService } from 'frakton-ng/overlay';
import { FktNoResults } from 'frakton-ng/no-results';
import { FktAutocompleteOption } from 'frakton-ng/autocomplete';
import { FktIconComponent } from 'frakton-ng/icon';
import { ElementIdGeneratorService } from 'frakton-ng/internal/services';
import { FktSelectOption } from './fkt-select.types';
import { FormValueControl, ValidationError, WithOptionalField } from '@angular/forms/signals';
import { getElementDesignTokens, getElementDesignToken } from 'frakton-ng/internal/utils';

@Component({
	selector: 'fkt-select',
	imports: [
		FktIconComponent
	],
	templateUrl: './fkt-select.component.html',
	styleUrl: './fkt-select.component.scss',
	host: {
		'[class.opened]': 'opened()',
		'[class.disabled]': 'disabled()',
	}
})
export class FktSelectComponent implements FormValueControl<string | number | null> {
	value = model<string | number | null>(null);
	touched = model(false);
	disabled = input(false);
	invalid = input(false);
	errors = input<readonly WithOptionalField<ValidationError>[]>([]);

	label = input<string>();
	placeholder = input<string>();
	loading = input(false);
	hideLabel = input(false, {
		transform: booleanAttribute
	});
	options = input.required<FktSelectOption[]>();
	noResults = input<FktNoResults>({
		label: 'Sem resultados',
	});
	selectOpened = output();

	private overlayService = inject(FktOverlayService);
	private idGenerator = inject(ElementIdGeneratorService);

	protected labelId =  this.idGenerator.next('fkt-select-label');
	protected listBoxId =  this.idGenerator.next('fkt-select-list-box');

	private overlayRef = signal<FktOverlayRef<FktSelectOptionsComponent> | null>(null);

	protected opened = computed(() => !!this.overlayRef());

	protected focused = signal(false);

	protected activeOptionId = signal(null);

	protected handleKeydown(element: HTMLDivElement, event: KeyboardEvent) {
		switch(event.key) {
			case 'ArrowDown':
			case 'ArrowUp':
			case 'Space':
			case ' ':
			case 'Enter':
				this.openOverlay(element)
				event.preventDefault();
				break;
		}
	}

	protected openOverlay(nativeElement: HTMLDivElement) {
		if(this.disabled())
			return;

		const tokens = getElementDesignTokens(nativeElement);
		const globalBackgroundColor = getElementDesignToken(nativeElement, '--fkt-color-neutral-100');
		const backgroundColor = tokens['--fkt-select-overlay-background-color'] ?? globalBackgroundColor ?? '#FFF';

		this.selectOpened.emit();

		const overlayRef = this.overlayService.open({
			component: FktSelectOptionsComponent,
			data: {
				hostElement: nativeElement,
				options: this.options,
				loading: this.loading,
				selected: computed(() => this.selectedOption()?.value ?? null),
				noResults: this.noResults(),
				activeOptionId: this.activeOptionId,
				select: (option) => {
					this.selectOption(option);
				},
			},
			anchorElementRef: {nativeElement},
			panelOptions: {
				outsideClick: () => {
					this.closeOverlay();
				},
				maxHeight: '420px',
				styles: tokens,
				backgroundColor
			}
		});

		this.overlayRef.set(overlayRef);
	}

	protected selectedOption = computed(() => {
		const value = this.value();
		const found = this.options().find(item => item.value === value);

		return found ?? null;
	});

	protected selectOption(option: FktAutocompleteOption) {
		this.value.set(option.value);

		this.closeOverlay();
	}

	private closeOverlay() {
		this.touched.set(true);
		this.overlayRef()?.close();
		this.overlayRef.set(null);
	}
}
