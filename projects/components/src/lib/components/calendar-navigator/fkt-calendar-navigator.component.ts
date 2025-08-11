import { Component, ElementRef, inject, input, model, } from '@angular/core';
import { CalendarMonthHeaderComponent } from '../calendar/header/month/calendar-month-header.component';
import { AttachedOverlayService } from '../attached-overlay/attached-overlay.service';
import { FktCalendarNavigatorModalComponent } from './modal/fkt-calendar-navigator-modal.component';
import { AttachedOverlayRef } from '../attached-overlay/models/attached-overlay-ref';
import { CalendarYearHeaderComponent } from '../calendar/header/year/calendar-year-header.component';
import { FktCalendarStep } from '../calendar';

export type CalendarNavigatorMode = 'month' | 'year';

@Component({
	selector: 'fkt-calendar-navigator',
	imports: [CalendarMonthHeaderComponent, CalendarYearHeaderComponent],
	templateUrl: './fkt-calendar-navigator.component.html',
	styleUrl: './fkt-calendar-navigator.component.scss',
})
export class FktCalendarNavigatorComponent {
	mode = input<CalendarNavigatorMode>('month');
	currentDate = model<Date>(new Date());

	private overlay = inject(AttachedOverlayService);
	private elementRef = inject(ElementRef);

	private overlayRef: AttachedOverlayRef<FktCalendarNavigatorModalComponent> | null =
		null;

	protected openMonthModal() {
		this.openModal('month');
	}

	protected openYearModal() {
		this.openModal('year');
	}

	private openModal(step: FktCalendarStep) {
		if (this.overlayRef) {
			this.closeModal();
		}

		this.overlayRef = this.overlay.open({
			component: FktCalendarNavigatorModalComponent,
			data: {
				step,
				currentDate: this.currentDate(),
				select: date => {
					this.currentDate.set(date);
					this.closeModal();
				},
				close: () => {
					this.closeModal();
				},
			},
			anchorElementRef: this.elementRef,
			panelOptions: {
				maxHeight: 'fit-content',
				width: 'fit-content',
			},
		});
	}

	private closeModal() {
		this.overlayRef?.close();
		this.overlayRef = null;
	}
}
