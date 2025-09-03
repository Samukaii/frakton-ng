import * as i0 from '@angular/core';
import { input, output, inject, DOCUMENT, effect, Component, signal, computed } from '@angular/core';
import { FktFieldErrorComponent } from 'frakton-ng/field-error';
import { __decorate } from 'tslib';
import { MarkUsed } from 'frakton-ng/internal/utils';
import { FktSpinnerComponent } from 'frakton-ng/spinner';
import { FktNoResultsComponent } from 'frakton-ng/no-results';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktOverlayService } from 'frakton-ng/overlay';
import { ElementIdGeneratorService } from 'frakton-ng/internal/services';

class FktSelectOverlayComponent {
    hostElement = input.required(...(ngDevMode ? [{ debugName: "hostElement" }] : []));
    options = input.required(...(ngDevMode ? [{ debugName: "options" }] : []));
    loading = input(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    selected = input(...(ngDevMode ? [undefined, { debugName: "selected" }] : []));
    activeOptionId = input.required(...(ngDevMode ? [{ debugName: "activeOptionId" }] : []));
    noResults = input({
        label: 'Sem resultados',
    }, ...(ngDevMode ? [{ debugName: "noResults" }] : []));
    select = output();
    document = inject(DOCUMENT);
    scrollToActiveOption = effect(() => {
        const activeOptionId = this.activeOptionId();
        if (!activeOptionId)
            return;
        this.document.getElementById(activeOptionId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }, ...(ngDevMode ? [{ debugName: "scrollToActiveOption" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktSelectOverlayComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.3", type: FktSelectOverlayComponent, isStandalone: true, selector: "fkt-fkt-select-overlay", inputs: { hostElement: { classPropertyName: "hostElement", publicName: "hostElement", isSignal: true, isRequired: true, transformFunction: null }, options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: true, transformFunction: null }, loading: { classPropertyName: "loading", publicName: "loading", isSignal: true, isRequired: false, transformFunction: null }, selected: { classPropertyName: "selected", publicName: "selected", isSignal: true, isRequired: false, transformFunction: null }, activeOptionId: { classPropertyName: "activeOptionId", publicName: "activeOptionId", isSignal: true, isRequired: true, transformFunction: null }, noResults: { classPropertyName: "noResults", publicName: "noResults", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { select: "select" }, ngImport: i0, template: "<ul class=\"overlay\" role=\"listbox\"\r\n>\r\n\t@if (loading()) {\r\n\t\t<div class=\"spinner-container\">\r\n\t\t\t<fkt-spinner/>\r\n\t\t</div>\r\n\t} @else {\r\n\t\t@for (option of options(); track option.value) {\r\n\t\t\t<li\r\n\t\t\t\t#option\r\n\t\t\t\trole=\"option\"\r\n\t\t\t\t[id]=\"'fkt-select-option-' + option.value\"\r\n\t\t\t\t[class.active]=\"('fkt-select-option-' + option.value) === activeOptionId()\"\r\n\t\t\t\t(click)=\"select.emit(option)\"\r\n\t\t\t\t[attr.aria-label]=\"option.label\"\r\n\t\t\t\t[attr.aria-selected]=\"option.value === selected()\"\r\n\t\t\t>\r\n\t\t\t\t{{ option.label }}\r\n\t\t\t\t@if (option.value === selected()) {\r\n\t\t\t\t\t<fkt-icon\r\n\t\t\t\t\t\taria-hidden=\"true\"\r\n\t\t\t\t\t\tname=\"check\"\r\n\t\t\t\t\t/>\r\n\t\t\t\t}\r\n\t\t\t</li>\r\n\t\t} @empty {\r\n\t\t\t<fkt-no-results\r\n\t\t\t\t[noResults]=\"noResults()!\"\r\n\t\t\t/>\r\n\t\t}\r\n\t}\r\n</ul>\r\n", styles: [":host{display:block;width:100%}:host *{box-sizing:border-box}.spinner-container{display:flex;width:100%;justify-content:center;align-items:center;padding:var(--space-md)}.overlay{background-color:var(--color-neutral-100);width:100%;box-shadow:var(--shadow-md);border-radius:var(--radius-md);border:solid 1px var(--color-neutral-200);z-index:10;padding:0;margin:0}.overlay li{padding:var(--space-xs) var(--space-md);cursor:pointer;transition:var(--transition-base);display:flex;justify-content:space-between}.overlay li:hover,.overlay li.active{background-color:var(--color-neutral-200)}.overlay li fkt-icon{color:var(--color-neutral-700);height:var(--space-xl);width:var(--space-xl)}\n"], dependencies: [{ kind: "component", type: FktSpinnerComponent, selector: "fkt-spinner", inputs: ["size", "stroke", "color"] }, { kind: "component", type: FktNoResultsComponent, selector: "fkt-no-results", inputs: ["noResults", "borderless"] }, { kind: "component", type: FktIconComponent, selector: "fkt-icon", inputs: ["name"] }] });
}
__decorate([
    MarkUsed()
], FktSelectOverlayComponent.prototype, "scrollToActiveOption", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktSelectOverlayComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-fkt-select-overlay', imports: [
                        FktSpinnerComponent,
                        FktNoResultsComponent,
                        FktIconComponent
                    ], template: "<ul class=\"overlay\" role=\"listbox\"\r\n>\r\n\t@if (loading()) {\r\n\t\t<div class=\"spinner-container\">\r\n\t\t\t<fkt-spinner/>\r\n\t\t</div>\r\n\t} @else {\r\n\t\t@for (option of options(); track option.value) {\r\n\t\t\t<li\r\n\t\t\t\t#option\r\n\t\t\t\trole=\"option\"\r\n\t\t\t\t[id]=\"'fkt-select-option-' + option.value\"\r\n\t\t\t\t[class.active]=\"('fkt-select-option-' + option.value) === activeOptionId()\"\r\n\t\t\t\t(click)=\"select.emit(option)\"\r\n\t\t\t\t[attr.aria-label]=\"option.label\"\r\n\t\t\t\t[attr.aria-selected]=\"option.value === selected()\"\r\n\t\t\t>\r\n\t\t\t\t{{ option.label }}\r\n\t\t\t\t@if (option.value === selected()) {\r\n\t\t\t\t\t<fkt-icon\r\n\t\t\t\t\t\taria-hidden=\"true\"\r\n\t\t\t\t\t\tname=\"check\"\r\n\t\t\t\t\t/>\r\n\t\t\t\t}\r\n\t\t\t</li>\r\n\t\t} @empty {\r\n\t\t\t<fkt-no-results\r\n\t\t\t\t[noResults]=\"noResults()!\"\r\n\t\t\t/>\r\n\t\t}\r\n\t}\r\n</ul>\r\n", styles: [":host{display:block;width:100%}:host *{box-sizing:border-box}.spinner-container{display:flex;width:100%;justify-content:center;align-items:center;padding:var(--space-md)}.overlay{background-color:var(--color-neutral-100);width:100%;box-shadow:var(--shadow-md);border-radius:var(--radius-md);border:solid 1px var(--color-neutral-200);z-index:10;padding:0;margin:0}.overlay li{padding:var(--space-xs) var(--space-md);cursor:pointer;transition:var(--transition-base);display:flex;justify-content:space-between}.overlay li:hover,.overlay li.active{background-color:var(--color-neutral-200)}.overlay li fkt-icon{color:var(--color-neutral-700);height:var(--space-xl);width:var(--space-xl)}\n"] }]
        }], propDecorators: { scrollToActiveOption: [] } });

class FktSelectComponent {
    control = input.required(...(ngDevMode ? [{ debugName: "control" }] : []));
    label = input(...(ngDevMode ? [undefined, { debugName: "label" }] : []));
    placeholder = input(...(ngDevMode ? [undefined, { debugName: "placeholder" }] : []));
    loading = input(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    options = input.required(...(ngDevMode ? [{ debugName: "options" }] : []));
    noResults = input({
        label: 'Sem resultados',
    }, ...(ngDevMode ? [{ debugName: "noResults" }] : []));
    selectOpened = output();
    overlayService = inject(FktOverlayService);
    idGenerator = inject(ElementIdGeneratorService);
    labelId = this.idGenerator.next('fkt-select-label');
    listBoxId = this.idGenerator.next('fkt-select-list-box');
    errorId = this.idGenerator.next('fkt-select-active-error');
    overlayRef = signal(null, ...(ngDevMode ? [{ debugName: "overlayRef" }] : []));
    opened = computed(() => !!this.overlayRef(), ...(ngDevMode ? [{ debugName: "opened" }] : []));
    activeIndex = signal(-1, ...(ngDevMode ? [{ debugName: "activeIndex" }] : []));
    activeOptionId = computed(() => {
        const options = this.options();
        const activeOption = options[this.activeIndex()];
        if (!activeOption)
            return null;
        return 'fkt-select-option-' + activeOption.value;
    }, ...(ngDevMode ? [{ debugName: "activeOptionId" }] : []));
    selectedIndex = computed(() => {
        return this.options().findIndex(option => option.value === this.selectedOption()?.value);
    }, ...(ngDevMode ? [{ debugName: "selectedIndex" }] : []));
    handleKeydown(element, event) {
        if (this.opened() || this.control().disabled())
            return void this.onKeyDownWithOverlayOpened(element, event);
        switch (event.key) {
            case 'ArrowDown':
            case 'ArrowUp':
            case 'Space':
            case ' ':
            case 'Enter':
                this.openOverlay(element);
                event.preventDefault();
                this.activeIndex.set(this.selectedIndex() >= 0 ? this.selectedIndex() : 0);
                break;
        }
    }
    onKeyDownWithOverlayOpened(element, event) {
        const activeOption = this.options()[this.activeIndex()];
        switch (event.key) {
            case 'ArrowDown':
                this.activeIndex.set((this.activeIndex() + 1) % this.options().length);
                event.preventDefault();
                break;
            case 'ArrowUp':
                this.activeIndex.set((this.activeIndex() - 1 + this.options().length) % this.options().length);
                event.preventDefault();
                break;
            case 'Enter':
            case ' ':
                this.selectOption(activeOption);
                event.preventDefault();
                this.activeIndex.set(-1);
                element.focus();
                break;
            case 'Escape':
                this.closeOverlay();
                event.preventDefault();
                this.activeIndex.set(-1);
                element.focus();
                break;
            case 'Tab':
                this.closeOverlay();
                event.preventDefault();
                this.activeIndex.set(-1);
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
    openOverlay(nativeElement) {
        if (this.control().disabled())
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
            anchorElementRef: { nativeElement },
            panelOptions: {
                outsideClick: () => {
                    this.closeOverlay();
                },
                maxHeight: '420px',
            }
        });
        this.overlayRef.set(overlayRef);
    }
    selectedOption = computed(() => {
        const value = this.control().value();
        const found = this.options().find(item => item.value === value);
        return found ?? null;
    }, ...(ngDevMode ? [{ debugName: "selectedOption" }] : []));
    selectOption(option) {
        this.control().setValue({
            modelValue: option.value,
            viewValue: option.label,
        });
        this.closeOverlay();
    }
    closeOverlay() {
        this.control().markAsTouched();
        this.overlayRef()?.close();
        this.overlayRef.set(null);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktSelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.3", type: FktSelectComponent, isStandalone: true, selector: "fkt-select", inputs: { control: { classPropertyName: "control", publicName: "control", isSignal: true, isRequired: true, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, loading: { classPropertyName: "loading", publicName: "loading", isSignal: true, isRequired: false, transformFunction: null }, options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: true, transformFunction: null }, noResults: { classPropertyName: "noResults", publicName: "noResults", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { selectOpened: "selectOpened" }, host: { properties: { "class.opened": "opened()", "class.disabled": "control().disabled()" } }, ngImport: i0, template: "<div class=\"label-container\">\r\n\t<label\r\n\t\taria-hidden=\"true\"\r\n\t\t[class.error]=\"!!error.message()\"\r\n\t\t[class.float]=\"control().viewValue()\"\r\n\t>{{ label() }}</label>\r\n</div>\r\n\r\n<div class=\"select\">\r\n\t<div\r\n\t\t#element\r\n\t\tclass=\"select__container\"\r\n\t\t[class.opened]=\"opened()\"\r\n\t\t[class.error]=\"!!error.message()\"\r\n\t\t(click)=\"openOverlay(element)\"\r\n\t\t(keydown)=\"handleKeydown(element, $event)\"\r\n\t\trole=\"combobox\"\r\n\t\taria-haspopup=\"listbox\"\r\n\t\ttabindex=\"0\"\r\n\t\t[attr.aria-labelledby]=\"labelId\"\r\n\t\t[attr.aria-expanded]=\"opened()\"\r\n\t\t[attr.aria-controls]=\"opened() ? listBoxId : null\"\r\n\t\t[attr.aria-activedescendant]=\"opened() ? activeOptionId() : null\"\r\n\t\t[attr.aria-disabled]=\"control().disabled()\"\r\n\t\t[attr.aria-label]=\"label()\"\r\n\t\t[attr.aria-invalid]=\"!!error.message()\"\r\n\t\t[attr.aria-errormessage]=\"!!error.message() ? errorId : null\"\r\n\t>\r\n\t\t<div>\r\n\t\t\t@if (selectedOption()?.label) {\r\n\t\t\t\t<span>\r\n\t\t\t\t{{ selectedOption()?.label }}\r\n\t\t\t\t</span>\r\n\t\t\t} @else if (opened()) {\r\n\t\t\t\t<span class=\"placeholder\" aria-hidden=\"true\">{{ placeholder() }}</span>\r\n\t\t\t}\r\n\t\t</div>\r\n\t\t<fkt-icon aria-hidden=\"true\" name=\"chevron-down\"/>\r\n\t</div>\r\n</div>\r\n\r\n<fkt-field-error\r\n\t#error\r\n\t[id]=\"errorId\"\r\n\taria-live=\"polite\"\r\n\t[control]=\"control()\"\r\n/>\r\n", styles: [":host{display:block;border-radius:var(--radius-full);position:relative;margin-top:var(--space-lg);border-color:var(--color-gray-500);transition:var(--transition-base);background-color:var(--color-neutral-100);scroll-behavior:smooth;width:100%}:host *{box-sizing:border-box}:host .label-container{display:flex;gap:var(--space-xs);align-items:center}:host .label-container label{top:15px;position:absolute;padding:0 var(--space-3xs);transition:var(--transition-base);left:var(--space-sm);background-color:var(--color-neutral-100);color:var(--color-gray-800);font-weight:var(--font-normal);font-size:var(--font-size-sm);margin-bottom:var(--space-3xs)}:host .label-container label.error{color:var(--color-red-500)}:host .label-container label.float{z-index:50;scale:90%;translate:calc(var(--space-3xs) * -1) calc(var(--space-xl) * -1)}:host .select{position:relative}:host .select__container{outline:none;border:solid 1px var(--color-gray-400);height:50px;width:100%;transition:var(--transition-base);border-radius:var(--radius-lg);display:flex;justify-content:space-between;align-items:center;padding:var(--space-xs) var(--space-md);background-color:transparent;cursor:pointer}:host .select__container:hover{border-color:var(--color-gray-600)}:host .select__container:focus{border-color:var(--color-gray-950)}:host .select__container.error{border-color:var(--color-red-500)}:host .select__container .placeholder{color:var(--color-gray-400);opacity:0}:host.opened .label-container label{color:var(--color-yellow-500);z-index:50;scale:90%;translate:calc(var(--space-3xs) * -1) calc(var(--space-xl) * -1)}:host.opened .select__container{border-color:var(--color-yellow-500)}:host.opened .select__container .placeholder{opacity:1}:host.disabled{-webkit-user-select:none;user-select:none}:host.disabled .label-container label{color:var(--color-gray-400);z-index:50;scale:90%;translate:calc(var(--space-3xs) * -1) calc(var(--space-xl) * -1)}:host.disabled .select__container{border-color:var(--color-gray-200);color:var(--color-gray-400);cursor:not-allowed}:host fkt-field-error{padding-left:var(--space-sm)}\n"], dependencies: [{ kind: "component", type: FktFieldErrorComponent, selector: "fkt-field-error", inputs: ["control"] }, { kind: "component", type: FktIconComponent, selector: "fkt-icon", inputs: ["name"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-select', imports: [
                        FktFieldErrorComponent,
                        FktIconComponent
                    ], host: {
                        '[class.opened]': 'opened()',
                        '[class.disabled]': 'control().disabled()',
                    }, template: "<div class=\"label-container\">\r\n\t<label\r\n\t\taria-hidden=\"true\"\r\n\t\t[class.error]=\"!!error.message()\"\r\n\t\t[class.float]=\"control().viewValue()\"\r\n\t>{{ label() }}</label>\r\n</div>\r\n\r\n<div class=\"select\">\r\n\t<div\r\n\t\t#element\r\n\t\tclass=\"select__container\"\r\n\t\t[class.opened]=\"opened()\"\r\n\t\t[class.error]=\"!!error.message()\"\r\n\t\t(click)=\"openOverlay(element)\"\r\n\t\t(keydown)=\"handleKeydown(element, $event)\"\r\n\t\trole=\"combobox\"\r\n\t\taria-haspopup=\"listbox\"\r\n\t\ttabindex=\"0\"\r\n\t\t[attr.aria-labelledby]=\"labelId\"\r\n\t\t[attr.aria-expanded]=\"opened()\"\r\n\t\t[attr.aria-controls]=\"opened() ? listBoxId : null\"\r\n\t\t[attr.aria-activedescendant]=\"opened() ? activeOptionId() : null\"\r\n\t\t[attr.aria-disabled]=\"control().disabled()\"\r\n\t\t[attr.aria-label]=\"label()\"\r\n\t\t[attr.aria-invalid]=\"!!error.message()\"\r\n\t\t[attr.aria-errormessage]=\"!!error.message() ? errorId : null\"\r\n\t>\r\n\t\t<div>\r\n\t\t\t@if (selectedOption()?.label) {\r\n\t\t\t\t<span>\r\n\t\t\t\t{{ selectedOption()?.label }}\r\n\t\t\t\t</span>\r\n\t\t\t} @else if (opened()) {\r\n\t\t\t\t<span class=\"placeholder\" aria-hidden=\"true\">{{ placeholder() }}</span>\r\n\t\t\t}\r\n\t\t</div>\r\n\t\t<fkt-icon aria-hidden=\"true\" name=\"chevron-down\"/>\r\n\t</div>\r\n</div>\r\n\r\n<fkt-field-error\r\n\t#error\r\n\t[id]=\"errorId\"\r\n\taria-live=\"polite\"\r\n\t[control]=\"control()\"\r\n/>\r\n", styles: [":host{display:block;border-radius:var(--radius-full);position:relative;margin-top:var(--space-lg);border-color:var(--color-gray-500);transition:var(--transition-base);background-color:var(--color-neutral-100);scroll-behavior:smooth;width:100%}:host *{box-sizing:border-box}:host .label-container{display:flex;gap:var(--space-xs);align-items:center}:host .label-container label{top:15px;position:absolute;padding:0 var(--space-3xs);transition:var(--transition-base);left:var(--space-sm);background-color:var(--color-neutral-100);color:var(--color-gray-800);font-weight:var(--font-normal);font-size:var(--font-size-sm);margin-bottom:var(--space-3xs)}:host .label-container label.error{color:var(--color-red-500)}:host .label-container label.float{z-index:50;scale:90%;translate:calc(var(--space-3xs) * -1) calc(var(--space-xl) * -1)}:host .select{position:relative}:host .select__container{outline:none;border:solid 1px var(--color-gray-400);height:50px;width:100%;transition:var(--transition-base);border-radius:var(--radius-lg);display:flex;justify-content:space-between;align-items:center;padding:var(--space-xs) var(--space-md);background-color:transparent;cursor:pointer}:host .select__container:hover{border-color:var(--color-gray-600)}:host .select__container:focus{border-color:var(--color-gray-950)}:host .select__container.error{border-color:var(--color-red-500)}:host .select__container .placeholder{color:var(--color-gray-400);opacity:0}:host.opened .label-container label{color:var(--color-yellow-500);z-index:50;scale:90%;translate:calc(var(--space-3xs) * -1) calc(var(--space-xl) * -1)}:host.opened .select__container{border-color:var(--color-yellow-500)}:host.opened .select__container .placeholder{opacity:1}:host.disabled{-webkit-user-select:none;user-select:none}:host.disabled .label-container label{color:var(--color-gray-400);z-index:50;scale:90%;translate:calc(var(--space-3xs) * -1) calc(var(--space-xl) * -1)}:host.disabled .select__container{border-color:var(--color-gray-200);color:var(--color-gray-400);cursor:not-allowed}:host fkt-field-error{padding-left:var(--space-sm)}\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FktSelectComponent };
//# sourceMappingURL=frakton-ng-select.mjs.map
