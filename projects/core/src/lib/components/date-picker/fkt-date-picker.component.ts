import { Component, inject, input } from '@angular/core';
import { FktInputComponent } from '../input';
import { SignalFormControl } from '../../form/signal-form-control';
import { FktOverlayService } from '../overlay/fkt-overlay.service';
import { FktDatePickerModalComponent } from './modal/fkt-date-picker-modal.component';
import { isValidDateString } from '../../utils/is-valid-date-string';
import { dateTransformer } from '../../utils';
import { MarkUsed } from '../../utils/mark-used';
import { outsideClickEffect } from '../../utils/outside-click-effect';
import { FktGeometryPosition } from '../../shared/types';
import { FktButtonComponent } from '../button';
import { FktOverlayRef } from '../overlay/fkt-overlay.types';

@Component({
	selector: 'fkt-date-picker',
	imports: [FktInputComponent, FktButtonComponent],
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
