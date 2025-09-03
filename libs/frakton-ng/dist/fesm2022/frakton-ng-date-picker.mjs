import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { input, output, linkedSignal, Component, inject } from '@angular/core';
import { FktInputComponent } from 'frakton-ng/input';
import { dateTransformer } from 'frakton-ng/forms';
import { FktOverlayService } from 'frakton-ng/overlay';
import { FktCalendarComponent } from 'frakton-ng/calendar';
import { outsideClickEffect, isValidDateString, MarkUsed } from 'frakton-ng/internal/utils';
import { FktButtonComponent } from 'frakton-ng/button';

class FktDatePickerModalComponent {
    currentDate = input(new Date(), ...(ngDevMode ? [{ debugName: "currentDate" }] : []));
    select = output();
    internalCurrentDate = linkedSignal(this.currentDate);
    dateConfigFn = date => {
        return {
            onClick: () => {
                this.internalCurrentDate.set(date);
                this.select.emit(date);
            },
        };
    };
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktDatePickerModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.2.3", type: FktDatePickerModalComponent, isStandalone: true, selector: "fkt-date-picker-modal", inputs: { currentDate: { classPropertyName: "currentDate", publicName: "currentDate", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { select: "select" }, ngImport: i0, template: "<fkt-calendar\r\n\t[(currentDate)]=\"internalCurrentDate\"\r\n\t[configFn]=\"dateConfigFn\"\r\n/>\r\n", styles: [":host{height:fit-content;width:400px;display:block;padding:0}\n"], dependencies: [{ kind: "component", type: FktCalendarComponent, selector: "fkt-calendar", inputs: ["configFn", "currentDate", "borderless"], outputs: ["currentDateChange"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktDatePickerModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-date-picker-modal', imports: [FktCalendarComponent], template: "<fkt-calendar\r\n\t[(currentDate)]=\"internalCurrentDate\"\r\n\t[configFn]=\"dateConfigFn\"\r\n/>\r\n", styles: [":host{height:fit-content;width:400px;display:block;padding:0}\n"] }]
        }] });

class FktDatePickerComponent {
    label = input(...(ngDevMode ? [undefined, { debugName: "label" }] : []));
    placeholder = input(...(ngDevMode ? [undefined, { debugName: "placeholder" }] : []));
    control = input.required(...(ngDevMode ? [{ debugName: "control" }] : []));
    overlay = inject(FktOverlayService);
    overlayRef = null;
    transformer = dateTransformer;
    autoclose = outsideClickEffect(() => {
        this.closeModal();
    }, {
        excludeIdsOrElements: ['calendar-datepicker-modal'],
    });
    openModal(ref, position) {
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
    getCurrentDate(value) {
        if (value instanceof Date)
            return value;
        if (typeof value === 'string' && isValidDateString(value))
            return new Date(value);
        return new Date();
    }
    closeModal() {
        this.overlayRef?.close();
        this.overlayRef = null;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktDatePickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.2.3", type: FktDatePickerComponent, isStandalone: true, selector: "fkt-date-picker", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, control: { classPropertyName: "control", publicName: "control", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0, template: "<fkt-input\r\n\t#input\r\n\t[label]=\"label() ?? ''\"\r\n\t(click)=\"openModal(input.element()?.nativeElement!, 'bottom-start')\"\r\n\t[placeholder]=\"placeholder() ?? ''\"\r\n\t[transformer]=\"transformer\"\r\n\t[control]=\"control()\"\r\n>\r\n\t<div #ref class=\"mr-1\" *fktFormControlSuffix>\r\n\t\t<fkt-button\r\n\t\t\ttheme=\"basic\"\r\n\t\t\t(click)=\"$event.stopImmediatePropagation(); openModal(ref, 'bottom-end')\"\r\n\t\t\ticon=\"calendar\"\r\n\t\t\tcolor=\"primary\"\r\n\t\t/>\r\n\t</div>\r\n</fkt-input>\r\n", styles: [""], dependencies: [{ kind: "component", type: FktInputComponent, selector: "fkt-input", inputs: ["control", "label", "placeholder", "inputPadding", "type", "transformer", "spellcheck"] }, { kind: "component", type: FktButtonComponent, selector: "fkt-button", inputs: ["loading", "disabled", "text", "loadingText", "color", "theme", "variant", "icon", "iconPosition"] }] });
}
__decorate([
    MarkUsed()
], FktDatePickerComponent.prototype, "autoclose", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktDatePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-date-picker', imports: [FktInputComponent, FktButtonComponent], template: "<fkt-input\r\n\t#input\r\n\t[label]=\"label() ?? ''\"\r\n\t(click)=\"openModal(input.element()?.nativeElement!, 'bottom-start')\"\r\n\t[placeholder]=\"placeholder() ?? ''\"\r\n\t[transformer]=\"transformer\"\r\n\t[control]=\"control()\"\r\n>\r\n\t<div #ref class=\"mr-1\" *fktFormControlSuffix>\r\n\t\t<fkt-button\r\n\t\t\ttheme=\"basic\"\r\n\t\t\t(click)=\"$event.stopImmediatePropagation(); openModal(ref, 'bottom-end')\"\r\n\t\t\ticon=\"calendar\"\r\n\t\t\tcolor=\"primary\"\r\n\t\t/>\r\n\t</div>\r\n</fkt-input>\r\n" }]
        }], propDecorators: { autoclose: [] } });

/**
 * Generated bundle index. Do not edit.
 */

export { FktDatePickerComponent };
//# sourceMappingURL=frakton-ng-date-picker.mjs.map
