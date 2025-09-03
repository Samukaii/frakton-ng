import { Component, ElementRef, inject, input, model, } from '@angular/core';
import { FktOverlayRef, FktOverlayService } from 'frakton-ng/overlay';
import { FktCalendarNavigatorModalComponent } from './modal/fkt-calendar-navigator-modal.component';
import { CalendarMonthHeaderComponent, CalendarYearHeaderComponent, FktCalendarStep } from 'frakton-ng/calendar';
import { FktCalendarNavigatorMode } from './fkt-calendar-navigator.types';


@Component({
	selector: 'fkt-calendar-navigator',
	imports: [CalendarMonthHeaderComponent, CalendarYearHeaderComponent],
	templateUrl: './fkt-calendar-navigator.component.html',
	styleUrl: './fkt-calendar-navigator.component.scss',
})
export class FktCalendarNavigatorComponent {
	mode = input<FktCalendarNavigatorMode>('month');
	currentDate = model<Date>(new Date());

	private overlay = inject(FktOverlayService);
	private elementRef = inject(ElementRef);

	private overlayRef: FktOverlayRef<FktCalendarNavigatorModalComponent> | null =
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
