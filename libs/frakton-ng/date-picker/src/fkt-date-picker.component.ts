import { Component, computed, inject, input, model } from '@angular/core';
import { FktInputComponent } from 'frakton-ng/input';
import { dateFormatter, FormControlSuffixDirective } from 'frakton-ng/forms';
import { FktOverlayRef, FktOverlayService } from 'frakton-ng/overlay';
import { FktDatePickerModalComponent } from './modal/fkt-date-picker-modal.component';
import { isValidDateString, MarkUsed, outsideClickEffect } from 'frakton-ng/internal/utils';
import { FktGeometryPosition } from 'frakton-ng/internal/types';
import { FktButtonComponent } from 'frakton-ng/button';
import { FormValueControl, ValidationError, WithOptionalField } from '@angular/forms/signals';

@Component({
	selector: 'fkt-date-picker',
	imports: [FktInputComponent, FktButtonComponent, FormControlSuffixDirective],
	templateUrl: './fkt-date-picker.component.html',
	styleUrl: './fkt-date-picker.component.scss',
})
export class FktDatePickerComponent implements FormValueControl<Date | string | null> {
	value = model<Date | string | null>(null);
	touched = model(false);
	disabled = input(false);
	invalid = input(false);
	errors = input<readonly WithOptionalField<ValidationError>[]>([]);

	label = input<string>();
	placeholder = input<string>();
	valueFormat = input<'iso-string' | 'date-instance'>("iso-string");

	protected inputValue = computed(() => {
		const value = this.value();

		if(!value) return null;

		const isValidDate = isValidDateString(value instanceof Date ? value.toISOString() : (value ?? ""));

		return isValidDate ? new Date(value) : null;
	})

	private overlay = inject(FktOverlayService);
	private overlayRef: FktOverlayRef<FktDatePickerModalComponent> | null =
		null;

	protected formatter = dateFormatter;

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
				currentDate: this.getCurrentDate(this.value()),
				select: date => {
					this.onValueChange(date);
					this.closeModal();
				},
			},
			anchorElementRef: {nativeElement: ref},
			panelOptions: {
				id: 'calendar-datepicker-modal',
				width: 'fit-content',
				preferredPositions: position,
				maxHeight: 'fit-content',
                inheritDesignTokensFrom: ref
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

	protected onValueChange($event: Date | null) {
		if($event === null) return this.value.set(null);

		this.value.set(this.valueFormat() === "iso-string" ? new Date($event).toISOString() : new Date($event))
	}
}
