import * as i0 from '@angular/core';
import { input, output, Component, model, inject, ElementRef, computed } from '@angular/core';
import { FktOverlayService } from 'frakton-ng/overlay';
import { __decorate } from 'tslib';
import { outsideClickEffect, MarkUsed } from 'frakton-ng/internal/utils';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktBadgeComponent } from 'frakton-ng/badge';

class BadgeSelectorModalComponent {
    options = input.required(...(ngDevMode ? [{ debugName: "options" }] : []));
    selected = input(...(ngDevMode ? [undefined, { debugName: "selected" }] : []));
    select = output();
    close = output();
    autoclose = outsideClickEffect(() => {
        this.close.emit();
    });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: BadgeSelectorModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.3", type: BadgeSelectorModalComponent, isStandalone: true, selector: "fkt-badge-selector-modal", inputs: { options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: true, transformFunction: null }, selected: { classPropertyName: "selected", publicName: "selected", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { select: "select", close: "close" }, ngImport: i0, template: "<div class=\"container\">\r\n\t<div class=\"container__first-row\">\r\n\t\t@for (option of options().slice(0, 3); track option.id) {\r\n\t\t\t<fkt-badge\r\n\t\t\t\tclass=\"container__badge\"\r\n\t\t\t\t(click)=\"select.emit(option)\"\r\n\t\t\t\t[color]=\"option.color\"\r\n\t\t\t>\r\n\t\t\t\t<div badge-content class=\"container__badge-content\">\r\n\t\t\t\t\t<p>{{ option.name }}</p>\r\n\r\n\t\t\t\t\t@if (option.id === selected()?.id) {\r\n\t\t\t\t\t\t<fkt-icon name=\"check\"/>\r\n\t\t\t\t\t}\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</fkt-badge>\r\n\t\t}\r\n\t</div>\r\n\r\n\t@let secondRowOptions = options().slice(3);\r\n\r\n\t@if (secondRowOptions.length) {\r\n\t\t<div class=\"container__second-row\">\r\n\t\t\t@for (option of secondRowOptions; track option.id) {\r\n\t\t\t\t<fkt-badge\r\n\t\t\t\t\tclass=\"container__badge\"\r\n\t\t\t\t\t(click)=\"select.emit(option)\"\r\n\t\t\t\t\t[color]=\"option.color\"\r\n\t\t\t\t>\r\n\t\t\t\t\t<div badge-content class=\"container__badge-content\">\r\n\t\t\t\t\t\t<p>{{ option.name }}</p>\r\n\t\t\t\t\t\t@if (option.id === selected()?.id) {\r\n\t\t\t\t\t\t\t<fkt-icon name=\"check\"/>\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</fkt-badge>\r\n\t\t\t}\r\n\t\t</div>\r\n\t}\r\n\r\n</div>\r\n", styles: ["*{box-sizing:border-box}p{margin:0}.container{padding:var(--space-xs);display:flex;flex-direction:column;gap:var(--space-xs)}.container__first-row{display:flex;gap:var(--space-xs)}.container__second-row{display:flex;flex-wrap:wrap;gap:var(--space-xs)}.container__badge{display:block;cursor:pointer}.container__badge:hover{scale:105%}.container__badge-content{display:flex;align-items:center;gap:var(--space-xs)}.container__badge-content p{white-space:nowrap}.container__badge-content fkt-icon{font-size:var(--font-size-sm)!important}\n"], dependencies: [{ kind: "component", type: FktBadgeComponent, selector: "fkt-badge", inputs: ["text", "color", "variant"] }, { kind: "component", type: FktIconComponent, selector: "fkt-icon", inputs: ["name"] }] });
}
__decorate([
    MarkUsed()
], BadgeSelectorModalComponent.prototype, "autoclose", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: BadgeSelectorModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-badge-selector-modal', imports: [FktBadgeComponent, FktIconComponent], template: "<div class=\"container\">\r\n\t<div class=\"container__first-row\">\r\n\t\t@for (option of options().slice(0, 3); track option.id) {\r\n\t\t\t<fkt-badge\r\n\t\t\t\tclass=\"container__badge\"\r\n\t\t\t\t(click)=\"select.emit(option)\"\r\n\t\t\t\t[color]=\"option.color\"\r\n\t\t\t>\r\n\t\t\t\t<div badge-content class=\"container__badge-content\">\r\n\t\t\t\t\t<p>{{ option.name }}</p>\r\n\r\n\t\t\t\t\t@if (option.id === selected()?.id) {\r\n\t\t\t\t\t\t<fkt-icon name=\"check\"/>\r\n\t\t\t\t\t}\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</fkt-badge>\r\n\t\t}\r\n\t</div>\r\n\r\n\t@let secondRowOptions = options().slice(3);\r\n\r\n\t@if (secondRowOptions.length) {\r\n\t\t<div class=\"container__second-row\">\r\n\t\t\t@for (option of secondRowOptions; track option.id) {\r\n\t\t\t\t<fkt-badge\r\n\t\t\t\t\tclass=\"container__badge\"\r\n\t\t\t\t\t(click)=\"select.emit(option)\"\r\n\t\t\t\t\t[color]=\"option.color\"\r\n\t\t\t\t>\r\n\t\t\t\t\t<div badge-content class=\"container__badge-content\">\r\n\t\t\t\t\t\t<p>{{ option.name }}</p>\r\n\t\t\t\t\t\t@if (option.id === selected()?.id) {\r\n\t\t\t\t\t\t\t<fkt-icon name=\"check\"/>\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</fkt-badge>\r\n\t\t\t}\r\n\t\t</div>\r\n\t}\r\n\r\n</div>\r\n", styles: ["*{box-sizing:border-box}p{margin:0}.container{padding:var(--space-xs);display:flex;flex-direction:column;gap:var(--space-xs)}.container__first-row{display:flex;gap:var(--space-xs)}.container__second-row{display:flex;flex-wrap:wrap;gap:var(--space-xs)}.container__badge{display:block;cursor:pointer}.container__badge:hover{scale:105%}.container__badge-content{display:flex;align-items:center;gap:var(--space-xs)}.container__badge-content p{white-space:nowrap}.container__badge-content fkt-icon{font-size:var(--font-size-sm)!important}\n"] }]
        }], propDecorators: { autoclose: [] } });

class FktBadgeSelectorComponent {
    options = input.required(...(ngDevMode ? [{ debugName: "options" }] : []));
    currentBadgeId = model(...(ngDevMode ? [undefined, { debugName: "currentBadgeId" }] : []));
    overlay = inject(FktOverlayService);
    ref = null;
    elementRef = inject(ElementRef);
    selectedOption = computed(() => {
        const currentBadgeId = this.currentBadgeId();
        const options = this.options();
        return options.find(option => option.id === currentBadgeId);
    }, ...(ngDevMode ? [{ debugName: "selectedOption" }] : []));
    select() {
        if (this.ref)
            return;
        this.ref = this.overlay.open({
            component: (BadgeSelectorModalComponent),
            data: {
                options: this.options,
                selected: this.selectedOption,
                select: badge => {
                    this.currentBadgeId.set(badge.id);
                    this.close();
                },
            },
            anchorElementRef: this.elementRef,
            panelOptions: {
                position: 'bottom-start',
                minWidth: 'fit-content',
                width: 'fit-content',
                maxHeight: 'fit-content',
                outsideClick: () => {
                    this.close();
                }
            },
        });
    }
    close() {
        this.ref?.close();
        this.ref = null;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktBadgeSelectorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.3", type: FktBadgeSelectorComponent, isStandalone: true, selector: "fkt-badge-selector", inputs: { options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: true, transformFunction: null }, currentBadgeId: { classPropertyName: "currentBadgeId", publicName: "currentBadgeId", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { currentBadgeId: "currentBadgeIdChange" }, ngImport: i0, template: "@let selectedOptionValue = selectedOption();\r\n\r\n@if (selectedOptionValue) {\r\n\t<fkt-badge\r\n\t\tclass=\"badge\"\r\n\t\t(click)=\"select()\"\r\n\t\t[color]=\"selectedOptionValue.color\"\r\n\t>\r\n\t\t<div badge-content class=\"badge__content\">\r\n\t\t\t<p class=\"whitespace-nowrap\">\r\n\t\t\t\t{{ selectedOption()?.name }}\r\n\r\n\t\t\t</p>\r\n\t\t\t<fkt-icon\r\n\t\t\t\tname=\"chevron-down\"\r\n\t\t\t/>\r\n\t\t</div>\r\n\t</fkt-badge>\r\n}\r\n", styles: [":host{width:fit-content;display:flex}:host *{box-sizing:border-box}.badge{cursor:pointer;transition:var(--transition-base);display:block}.badge:hover{scale:105%}.badge__content{display:flex;align-items:center;gap:var(--space-xs)}.badge__content p{margin:0;white-space:nowrap}\n"], dependencies: [{ kind: "component", type: FktBadgeComponent, selector: "fkt-badge", inputs: ["text", "color", "variant"] }, { kind: "component", type: FktIconComponent, selector: "fkt-icon", inputs: ["name"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktBadgeSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-badge-selector', imports: [FktBadgeComponent, FktIconComponent], template: "@let selectedOptionValue = selectedOption();\r\n\r\n@if (selectedOptionValue) {\r\n\t<fkt-badge\r\n\t\tclass=\"badge\"\r\n\t\t(click)=\"select()\"\r\n\t\t[color]=\"selectedOptionValue.color\"\r\n\t>\r\n\t\t<div badge-content class=\"badge__content\">\r\n\t\t\t<p class=\"whitespace-nowrap\">\r\n\t\t\t\t{{ selectedOption()?.name }}\r\n\r\n\t\t\t</p>\r\n\t\t\t<fkt-icon\r\n\t\t\t\tname=\"chevron-down\"\r\n\t\t\t/>\r\n\t\t</div>\r\n\t</fkt-badge>\r\n}\r\n", styles: [":host{width:fit-content;display:flex}:host *{box-sizing:border-box}.badge{cursor:pointer;transition:var(--transition-base);display:block}.badge:hover{scale:105%}.badge__content{display:flex;align-items:center;gap:var(--space-xs)}.badge__content p{margin:0;white-space:nowrap}\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FktBadgeSelectorComponent };
//# sourceMappingURL=frakton-ng-badge-selector.mjs.map
