import { Component, inject, input } from '@angular/core';
import { FktInputComponent } from 'frakton-ng/input';
import { SignalFormControl, dateTransformer, FormControlSuffixDirective } from 'frakton-ng/forms';
import { FktOverlayService, FktOverlayRef } from 'frakton-ng/overlay';
import { FktDatePickerModalComponent } from './modal/fkt-date-picker-modal.component';
import { isValidDateString, MarkUsed, outsideClickEffect } from 'frakton-ng/internal/utils';
import { FktGeometryPosition } from 'frakton-ng/internal/types';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
	selector: 'fkt-date-picker',
	imports: [FktInputComponent, FktButtonComponent, FormControlSuffixDirective],
	templateUrl: './fkt-date-picker.component.html',
	styleUrl: './fkt-date-picker.component.scss',
})
export class FktDatePickerComponent {
	label = input<string>();
	placeholder = input<string>();
	control = input.required<SignalFormControl<any>>();

	private overlay = inject(FktOverlayService);
	private overlayRef: FktOverlayRef<FktDatePickerModalComponent> | null =
		null;

	protected transformer = dateTransformer;

	@MarkUsed()
	protected autoclose = outsideClickEffect(
		() => {
			this.closeModal();
		},
		{
			excludeIdsOrElements: ['calendar-datepicker-modal'],
		},
	);

	protected openModal(ref: HTMLElement, position: FktGeometryPosition) {
		if (this.overlayRef) {
			this.closeModal();
			return;
		}

		this.overlayRef = this.overlay.open({
			component: FktDatePickerModalComponent,
			data: {
				currentDate: this.getCurrentDate(this.control().value()),
				select: date => {
					this.control().setValue(date);
					this.closeModal();
				},
			},
			anchorElementRef: { nativeElement: ref },
			panelOptions: {
				id: 'calendar-datepicker-modal',
				width: 'fit-content',
				position,
				maxHeight: 'fit-content',
			},
		});
	}

	private getCurrentDate(value: unknown) {
		if (value instanceof Date) return value;

		if (typeof value === 'string' && isValidDateString(value))
			return new Date(value);

		return new Date();
	}

	private closeModal() {
		this.overlayRef?.close();
		this.overlayRef = null;
	}
}
