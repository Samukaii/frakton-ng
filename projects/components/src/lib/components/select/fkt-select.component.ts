import { Component, computed, inject, input } from '@angular/core';
import { SignalFormControl } from '../../form/signal-form-control';
import { FieldErrorComponent } from '../field-error/field-error.component';
import { FktSelectOption } from './fkt-select.types';
import { AttachedOverlayRef } from '../attached-overlay/models/attached-overlay-ref';
import { FktSelectOverlayComponent } from './overlay/fkt-select-overlay.component';
import { AttachedOverlayService } from '../attached-overlay/attached-overlay.service';
import { FktNoResults } from '../no-results';
import { FktAutocompleteOption } from '../autocomplete';

@Component({
  selector: 'fkt-select',
	imports: [
		FieldErrorComponent
	],
  templateUrl: './fkt-select.component.html',
  styleUrl: './fkt-select.component.scss'
})
export class FktSelectComponent {
	control = input.required<SignalFormControl<any>>();
	label = input<string>();
	loading = input(false);
	options = input.required<FktSelectOption[]>();
	noResults = input<FktNoResults>({
		label: 'Sem resultados',
	});

	private overlayRef: AttachedOverlayRef<FktSelectOverlayComponent> | null = null;
	private overlayService = inject(AttachedOverlayService);

	protected openOverlay(nativeElement: HTMLDivElement) {
		if(!!this.overlayRef) {
			this.closeOverlay();
			return;
		}

		this.overlayRef = this.overlayService.open({
			component: FktSelectOverlayComponent,
			data: {
				hostElement: nativeElement,
				options: this.options,
				loading: this.loading,
				selected: computed(() => this.selectedOption()?.value ?? null),
				noResults: this.noResults(),
				select: (option) => {
					this.selectOption(option);
				},
				close: () => {
					this.closeOverlay();
				}
			},
			anchorElementRef: {nativeElement}
		})
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

	closeOverlay() {
		this.overlayRef?.close();
		this.overlayRef = null;
	}
}
