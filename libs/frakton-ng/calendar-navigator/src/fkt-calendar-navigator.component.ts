import { Component, ElementRef, inject, input, model, } from '@angular/core';
import { FktOverlayRef, FktOverlayService } from 'frakton-ng/overlay';
import { FktCalendarNavigatorModalComponent } from './modal/fkt-calendar-navigator-modal.component';
import { CalendarMonthHeaderComponent, CalendarYearHeaderComponent, FktCalendarStep } from 'frakton-ng/calendar';
import { FktCalendarNavigatorMode } from './fkt-calendar-navigator.types';

/**
 * A component that provides navigation controls for a calendar with month and year selection.
 * Opens modal overlays for date navigation.
 * 
 * @example
 * ```html
 * <fkt-calendar-navigator 
 *   mode="month"
 *   [(currentDate)]="selectedDate">
 * </fkt-calendar-navigator>
 * ```
 * 
 * @example
 * ```typescript
 * export class MyComponent {
 *   selectedDate = signal(new Date());
 *   navigatorMode: FktCalendarNavigatorMode = 'month';
 * }
 * ```
 */
@Component({
	selector: 'fkt-calendar-navigator',
	imports: [CalendarMonthHeaderComponent, CalendarYearHeaderComponent],
	templateUrl: './fkt-calendar-navigator.component.html',
	styleUrl: './fkt-calendar-navigator.component.scss',
})
export class FktCalendarNavigatorComponent {
	/**
	 * Navigation mode for the calendar
	 * @default 'month'
	 */
	mode = input<FktCalendarNavigatorMode>('month');
	
	/**
	 * Currently selected date with two-way binding
	 * @default new Date()
	 */
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
