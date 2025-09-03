import * as i0 from '@angular/core';
import { input, output, linkedSignal, Component, model, inject, ElementRef } from '@angular/core';
import { FktOverlayService } from 'frakton-ng/overlay';
import { __decorate } from 'tslib';
import { outsideClickEffect, MarkUsed } from 'frakton-ng/internal/utils';
import { CalendarMonthSelectorComponent, CalendarDateSelectorComponent, CalendarYearSelectorComponent, CalendarMultiYearHeaderComponent, CalendarMonthHeaderComponent, CalendarYearHeaderComponent } from 'frakton-ng/calendar';

class FktCalendarNavigatorModalComponent {
    step = input('date', ...(ngDevMode ? [{ debugName: "step" }] : []));
    currentDate = input(new Date(), ...(ngDevMode ? [{ debugName: "currentDate" }] : []));
    close = output();
    select = output();
    internalDate = linkedSignal(this.currentDate);
    autoClose = outsideClickEffect(() => {
        this.close.emit();
    });
    selectDate($event) {
        this.select.emit($event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktCalendarNavigatorModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.3", type: FktCalendarNavigatorModalComponent, isStandalone: true, selector: "fkt-calendar-navigator-modal", inputs: { step: { classPropertyName: "step", publicName: "step", isSignal: true, isRequired: false, transformFunction: null }, currentDate: { classPropertyName: "currentDate", publicName: "currentDate", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { close: "close", select: "select" }, ngImport: i0, template: "@switch (step()) {\r\n\t@case ('date') {\r\n\t\t<fkt-calendar-date-selector\r\n\t\t\t(currentDateChange)=\"selectDate($event)\"\r\n\t\t\t[currentDate]=\"currentDate()\"\r\n\t\t/>\r\n\t}\r\n\t@case ('month') {\r\n\t\t<fkt-calendar-month-selector\r\n\t\t\t(currentDateChange)=\"selectDate($event)\"\r\n\t\t\t[currentDate]=\"currentDate()\"\r\n\t\t/>\r\n\t}\r\n\t@case ('year') {\r\n\t\t<fkt-calendar-multi-year-header\r\n\t\t\t[(currentDate)]=\"internalDate\"\r\n\t\t/>\r\n\t\t<hr class=\"vertical-separator\">\r\n\r\n\t\t<fkt-calendar-year-selector\r\n\t\t\t(currentDateChange)=\"selectDate($event)\"\r\n\t\t\t[currentDate]=\"internalDate()\"\r\n\t\t/>\r\n\t}\r\n}\r\n", styles: [":host{display:block;height:fit-content;width:fit-content;padding:var(--space-md);min-width:400px}\n"], dependencies: [{ kind: "component", type: CalendarMonthSelectorComponent, selector: "fkt-calendar-month-selector", inputs: ["headerLess", "currentDate", "configFn"], outputs: ["currentDateChange", "back", "yearClick"] }, { kind: "component", type: CalendarDateSelectorComponent, selector: "fkt-calendar-date-selector", inputs: ["headerLess", "currentDate", "configFn"], outputs: ["currentDateChange", "afterSelect", "yearClick", "monthClick"] }, { kind: "component", type: CalendarYearSelectorComponent, selector: "fkt-calendar-year-selector", inputs: ["headerLess", "currentDate", "configFn"], outputs: ["currentDateChange", "back"] }, { kind: "component", type: CalendarMultiYearHeaderComponent, selector: "fkt-calendar-multi-year-header", inputs: ["currentDate"], outputs: ["currentDateChange"] }] });
}
__decorate([
    MarkUsed()
], FktCalendarNavigatorModalComponent.prototype, "autoClose", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktCalendarNavigatorModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-calendar-navigator-modal', imports: [
                        CalendarMonthSelectorComponent,
                        CalendarDateSelectorComponent,
                        CalendarYearSelectorComponent,
                        CalendarMultiYearHeaderComponent,
                    ], template: "@switch (step()) {\r\n\t@case ('date') {\r\n\t\t<fkt-calendar-date-selector\r\n\t\t\t(currentDateChange)=\"selectDate($event)\"\r\n\t\t\t[currentDate]=\"currentDate()\"\r\n\t\t/>\r\n\t}\r\n\t@case ('month') {\r\n\t\t<fkt-calendar-month-selector\r\n\t\t\t(currentDateChange)=\"selectDate($event)\"\r\n\t\t\t[currentDate]=\"currentDate()\"\r\n\t\t/>\r\n\t}\r\n\t@case ('year') {\r\n\t\t<fkt-calendar-multi-year-header\r\n\t\t\t[(currentDate)]=\"internalDate\"\r\n\t\t/>\r\n\t\t<hr class=\"vertical-separator\">\r\n\r\n\t\t<fkt-calendar-year-selector\r\n\t\t\t(currentDateChange)=\"selectDate($event)\"\r\n\t\t\t[currentDate]=\"internalDate()\"\r\n\t\t/>\r\n\t}\r\n}\r\n", styles: [":host{display:block;height:fit-content;width:fit-content;padding:var(--space-md);min-width:400px}\n"] }]
        }], propDecorators: { autoClose: [] } });

class FktCalendarNavigatorComponent {
    mode = input('month', ...(ngDevMode ? [{ debugName: "mode" }] : []));
    currentDate = model(new Date(), ...(ngDevMode ? [{ debugName: "currentDate" }] : []));
    overlay = inject(FktOverlayService);
    elementRef = inject(ElementRef);
    overlayRef = null;
    openMonthModal() {
        this.openModal('month');
    }
    openYearModal() {
        this.openModal('year');
    }
    openModal(step) {
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
    closeModal() {
        this.overlayRef?.close();
        this.overlayRef = null;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktCalendarNavigatorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.3", type: FktCalendarNavigatorComponent, isStandalone: true, selector: "fkt-calendar-navigator", inputs: { mode: { classPropertyName: "mode", publicName: "mode", isSignal: true, isRequired: false, transformFunction: null }, currentDate: { classPropertyName: "currentDate", publicName: "currentDate", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { currentDate: "currentDateChange" }, ngImport: i0, template: "@switch (mode()) {\r\n\t@case ('month') {\r\n\t\t<fkt-calendar-month-header\r\n\t\t\t(yearClick)=\"openYearModal()\"\r\n\t\t\t(monthClick)=\"openMonthModal()\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t}\r\n\t@case ('year') {\r\n\t\t<fkt-calendar-year-header\r\n\t\t\t(yearClick)=\"openYearModal()\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t}\r\n}\r\n", styles: [""], dependencies: [{ kind: "component", type: CalendarMonthHeaderComponent, selector: "fkt-calendar-month-header", inputs: ["currentDate"], outputs: ["currentDateChange", "yearClick", "monthClick"] }, { kind: "component", type: CalendarYearHeaderComponent, selector: "fkt-calendar-year-header", inputs: ["currentDate"], outputs: ["currentDateChange", "yearClick"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktCalendarNavigatorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-calendar-navigator', imports: [CalendarMonthHeaderComponent, CalendarYearHeaderComponent], template: "@switch (mode()) {\r\n\t@case ('month') {\r\n\t\t<fkt-calendar-month-header\r\n\t\t\t(yearClick)=\"openYearModal()\"\r\n\t\t\t(monthClick)=\"openMonthModal()\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t}\r\n\t@case ('year') {\r\n\t\t<fkt-calendar-year-header\r\n\t\t\t(yearClick)=\"openYearModal()\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t}\r\n}\r\n" }]
        }] });

const fktCalendarNavigatorModes = ['month', 'year'];

/**
 * Generated bundle index. Do not edit.
 */

export { FktCalendarNavigatorComponent, fktCalendarNavigatorModes };
//# sourceMappingURL=frakton-ng-calendar-navigator.mjs.map
