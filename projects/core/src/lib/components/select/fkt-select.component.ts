import { Component, computed, inject, input, output, signal } from '@angular/core';
import { SignalFormControl } from '../../form';
import { FktFieldErrorComponent } from '../field-error';
import { FktSelectOption } from './fkt-select.types';
import { FktSelectOverlayComponent } from './overlay/fkt-select-overlay.component';
import { FktOverlayService } from '../overlay/fkt-overlay.service';
import { FktNoResults } from '../no-results';
import { FktAutocompleteOption } from '../autocomplete';
import { FktOverlayRef } from '../overlay/fkt-overlay.types';
import { FktIconComponent } from '../icon';
import { ElementIdGeneratorService } from '../../services/element-id-generator/element-id-generator.service';

@Component({
	selector: 'fkt-select',
	imports: [
		FktFieldErrorComponent,
		FktIconComponent
	],
	templateUrl: './fkt-select.component.html',
	styleUrl: './fkt-select.component.scss',
	host: {
		'[class.opened]': 'opened()',
		'[class.disabled]': 'control().disabled()',
	}
})
export class FktSelectComponent {
	control = input.required<SignalFormControl<any>>();
	label = input<string>();
	placeholder = input<string>();
	loading = input(false);
	options = input.required<FktSelectOption[]>();
	noResults = input<FktNoResults>({
		label: 'Sem resultados',
	});
	selectOpened = output();

	private overlayService = inject(FktOverlayService);
	private idGenerator = inject(ElementIdGeneratorService);

	protected labelId =  this.idGenerator.next('fkt-select-label');
	protected listBoxId =  this.idGenerator.next('fkt-select-list-box');
	protected errorId =  this.idGenerator.next('fkt-select-active-error');

	private overlayRef = signal<FktOverlayRef<FktSelectOverlayComponent> | null>(null);

	protected opened = computed(() => !!this.overlayRef());

	protected activeIndex = signal(-1);

	protected activeOptionId = computed(() => {
		const options = this.options();
		const activeOption = options[this.activeIndex()];

		if(!activeOption) return null;

		return 'fkt-select-option-' + activeOption.value
	})

	protected selectedIndex = computed(() => {
		return this.options().findIndex(option => option.value === this.selectedOption()?.value)
	})

	protected handleKeydown(element: HTMLDivElement, event: KeyboardEvent) {
		if(this.opened() || this.control().disabled())
			return void this.onKeyDownWithOverlayOpened(element, event);

		switch(event.key) {
			case 'ArrowDown':
			case 'ArrowUp':
			case 'Space':
			case ' ':
			case 'Enter':
				this.openOverlay(element)
				event.preventDefault();
				this.activeIndex.set(
					this.selectedIndex() >= 0 ? this.selectedIndex() : 0
				);
				break;
		}
	}

	private onKeyDownWithOverlayOpened(element: HTMLDivElement, event: KeyboardEvent) {
		const activeOption = this.options()[this.activeIndex()];

		switch(event.key) {
			case 'ArrowDown':
				this.activeIndex.set(
					(this.activeIndex() + 1) % this.options().length
				);
				event.preventDefault();
				break;
			case 'ArrowUp':
				this.activeIndex.set(
					(this.activeIndex() - 1 + this.options().length) % this.options().length
				);
				event.preventDefault();
				break;
			case 'Enter':
			case ' ':
				this.selectOption(activeOption)
				event.preventDefault();
				this.activeIndex.set(-1)
				element.focus();
				break;
			case 'Escape':
				this.closeOverlay();
				event.preventDefault();
				this.activeIndex.set(-1)
				element.focus();
				break;
			case 'Tab':
				this.closeOverlay();
				event.preventDefault();
				this.activeIndex.set(-1)
				break;
			case 'Home':
				this.activeIndex.set(0);
				event.preventDefault();
				break;
			case 'End':
				this.activeIndex.set(this.options().length - 1);
				event.preventDefault();
				break;
		}
	}

	protected openOverlay(nativeElement: HTMLDivElement) {
		if(this.control().disabled())
			return;

		if (!!this.overlayRef()) {
			this.closeOverlay();
			return;
		}

		this.selectOpened.emit();

		const overlayRef = this.overlayService.open({
			component: FktSelectOverlayComponent,
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

			}
		});

		this.overlayRef.set(overlayRef);
	}

	protected selectedOption = computed(() => {
		const value = this.control().value();
		const found = this.options().find(item => item.value === value);

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
		this.control().markAsTouched();
		this.overlayRef()?.close();
		this.overlayRef.set(null);
	}
}
