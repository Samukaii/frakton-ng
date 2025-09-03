import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { input, output, Component, inject, viewChild, computed } from '@angular/core';
import { FktInputComponent } from 'frakton-ng/input';
import { FktOverlayService } from 'frakton-ng/overlay';
import { FktSpinnerComponent } from 'frakton-ng/spinner';
import { FktNoResultsComponent } from 'frakton-ng/no-results';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { FktIconComponent } from 'frakton-ng/icon';
import { outsideClickEffect, MarkUsed } from 'frakton-ng/internal/utils';

const AUTOCOMPLETE_AUTO_CREATED_OPTION = "autocomplete-auto-created-option";

class FktAutocompleteOptionsComponent {
    options = input.required(...(ngDevMode ? [{ debugName: "options" }] : []));
    loading = input(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    selected = input(...(ngDevMode ? [undefined, { debugName: "selected" }] : []));
    actions = input([], ...(ngDevMode ? [{ debugName: "actions" }] : []));
    noResults = input({
        label: 'Sem resultados',
    }, ...(ngDevMode ? [{ debugName: "noResults" }] : []));
    select = output();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktAutocompleteOptionsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.3", type: FktAutocompleteOptionsComponent, isStandalone: true, selector: "fkt-autocomplete-options", inputs: { options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: true, transformFunction: null }, loading: { classPropertyName: "loading", publicName: "loading", isSignal: true, isRequired: false, transformFunction: null }, selected: { classPropertyName: "selected", publicName: "selected", isSignal: true, isRequired: false, transformFunction: null }, actions: { classPropertyName: "actions", publicName: "actions", isSignal: true, isRequired: false, transformFunction: null }, noResults: { classPropertyName: "noResults", publicName: "noResults", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { select: "select" }, host: { attributes: { "id": "autocomplete-options-overlay" } }, ngImport: i0, template: "<ul class=\"overlay\">\r\n\t@if (loading()) {\r\n\t\t<div class=\"spinner-container\">\r\n\t\t\t<fkt-spinner/>\r\n\t\t</div>\r\n\t} @else {\r\n\t\t@for (option of options(); track option.value) {\r\n\t\t\t<li\r\n\t\t\t\t(click)=\"select.emit(option)\"\r\n\t\t\t>{{ option.label }}\r\n\t\t\t\t<div>\r\n\t\t\t\t\t@if (option.value === selected()) {\r\n\t\t\t\t\t\t<fkt-icon\r\n\t\t\t\t\t\t\tname=\"check\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t<fkt-buttons-list\r\n\t\t\t\t\t\t(click)=\"$event.stopPropagation()\"\r\n\t\t\t\t\t\t[context]=\"option\"\r\n\t\t\t\t\t\t[actions]=\"actions()\"\r\n\t\t\t\t\t/>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t} @empty {\r\n\t\t\t<fkt-no-results\r\n\t\t\t\t[noResults]=\"noResults()!\"\r\n\t\t\t/>\r\n\t\t}\r\n\t}\r\n</ul>\r\n", styles: [":host{display:block;width:100%}:host *{box-sizing:border-box}.overlay{margin:0;background-color:var(--color-neutral-100);width:100%;box-shadow:var(--shadow-md);border-radius:var(--radius-md);border:solid 1px var(--color-neutral-200);z-index:10;padding:0}.overlay li{transition:var(--transition-base);cursor:pointer;display:flex;align-items:center;padding:var(--space-xs) var(--space-md);justify-content:space-between}.overlay li:hover{background-color:var(--color-neutral-200)}.overlay li fkt-icon{color:var(--color-neutral-700);width:var(--space-xl);height:var(--space-xl)}.overlay fkt-no-results{min-height:250px}.spinner-container{display:flex;width:100%;justify-content:center;align-items:center;padding:var(--space-md)}\n"], dependencies: [{ kind: "component", type: FktIconComponent, selector: "fkt-icon", inputs: ["name"] }, { kind: "component", type: FktSpinnerComponent, selector: "fkt-spinner", inputs: ["size", "stroke", "color"] }, { kind: "component", type: FktNoResultsComponent, selector: "fkt-no-results", inputs: ["noResults", "borderless"] }, { kind: "component", type: FktButtonsListComponent, selector: "fkt-buttons-list", inputs: ["context", "orientation", "fill", "verticalAlignment", "horizontalAlignment", "actions"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktAutocompleteOptionsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-autocomplete-options', imports: [
                        FktIconComponent,
                        FktSpinnerComponent,
                        FktNoResultsComponent,
                        FktButtonsListComponent,
                    ], host: {
                        id: 'autocomplete-options-overlay',
                    }, template: "<ul class=\"overlay\">\r\n\t@if (loading()) {\r\n\t\t<div class=\"spinner-container\">\r\n\t\t\t<fkt-spinner/>\r\n\t\t</div>\r\n\t} @else {\r\n\t\t@for (option of options(); track option.value) {\r\n\t\t\t<li\r\n\t\t\t\t(click)=\"select.emit(option)\"\r\n\t\t\t>{{ option.label }}\r\n\t\t\t\t<div>\r\n\t\t\t\t\t@if (option.value === selected()) {\r\n\t\t\t\t\t\t<fkt-icon\r\n\t\t\t\t\t\t\tname=\"check\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t<fkt-buttons-list\r\n\t\t\t\t\t\t(click)=\"$event.stopPropagation()\"\r\n\t\t\t\t\t\t[context]=\"option\"\r\n\t\t\t\t\t\t[actions]=\"actions()\"\r\n\t\t\t\t\t/>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t} @empty {\r\n\t\t\t<fkt-no-results\r\n\t\t\t\t[noResults]=\"noResults()!\"\r\n\t\t\t/>\r\n\t\t}\r\n\t}\r\n</ul>\r\n", styles: [":host{display:block;width:100%}:host *{box-sizing:border-box}.overlay{margin:0;background-color:var(--color-neutral-100);width:100%;box-shadow:var(--shadow-md);border-radius:var(--radius-md);border:solid 1px var(--color-neutral-200);z-index:10;padding:0}.overlay li{transition:var(--transition-base);cursor:pointer;display:flex;align-items:center;padding:var(--space-xs) var(--space-md);justify-content:space-between}.overlay li:hover{background-color:var(--color-neutral-200)}.overlay li fkt-icon{color:var(--color-neutral-700);width:var(--space-xl);height:var(--space-xl)}.overlay fkt-no-results{min-height:250px}.spinner-container{display:flex;width:100%;justify-content:center;align-items:center;padding:var(--space-md)}\n"] }]
        }] });

class FktAutocompleteComponent {
    control = input.required(...(ngDevMode ? [{ debugName: "control" }] : []));
    options = input([], ...(ngDevMode ? [{ debugName: "options" }] : []));
    actions = input([], ...(ngDevMode ? [{ debugName: "actions" }] : []));
    enableAutoCreation = input(false, ...(ngDevMode ? [{ debugName: "enableAutoCreation" }] : []));
    noResults = input({
        label: 'Sem resultados',
    }, ...(ngDevMode ? [{ debugName: "noResults" }] : []));
    loading = input(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    placeholder = input('', ...(ngDevMode ? [{ debugName: "placeholder" }] : []));
    label = input('', ...(ngDevMode ? [{ debugName: "label" }] : []));
    search = output();
    overlayService = inject(FktOverlayService);
    inputComponent = viewChild.required(FktInputComponent);
    allOptions = computed(() => {
        const viewValue = this.control().viewValue();
        const enableAutoCreation = this.enableAutoCreation();
        const options = this.options();
        if (!enableAutoCreation || !viewValue)
            return options;
        if (!!options.find(option => option.label === viewValue || option.value === viewValue))
            return options;
        return [
            {
                label: viewValue,
                value: AUTOCOMPLETE_AUTO_CREATED_OPTION,
            },
            ...options,
        ];
    }, ...(ngDevMode ? [{ debugName: "allOptions" }] : []));
    transformer = value => {
        const search = value;
        const found = this.allOptions().find(item => item.value.toString() === search ||
            item.label.toString() === search);
        if (found)
            return {
                modelValue: found.value,
                viewValue: found.label,
            };
        return {
            viewValue: value,
            modelValue: null,
        };
    };
    closeOverlayOnOutsideClick = outsideClickEffect(() => {
        this.closeOverlay();
    }, { excludeIdsOrElements: ['autocomplete-options-overlay'] });
    openOverlay() {
        if (!!this.overlay || this.control().disabled())
            return;
        this.overlay = this.overlayService.open({
            anchorElementRef: this.inputComponent().element(),
            component: FktAutocompleteOptionsComponent,
            data: {
                options: this.allOptions,
                loading: this.loading,
                actions: this.actions(),
                selected: computed(() => this.selectedOption()?.value ?? null),
                noResults: this.noResults(),
                select: option => {
                    this.selectOption(option);
                },
            },
        });
    }
    overlay = null;
    selectedOption = computed(() => {
        const value = this.control().value();
        const found = this.allOptions().find(item => item.value === value);
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
        this.overlay?.close();
        this.overlay = null;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktAutocompleteComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "20.2.3", type: FktAutocompleteComponent, isStandalone: true, selector: "fkt-autocomplete", inputs: { control: { classPropertyName: "control", publicName: "control", isSignal: true, isRequired: true, transformFunction: null }, options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: false, transformFunction: null }, actions: { classPropertyName: "actions", publicName: "actions", isSignal: true, isRequired: false, transformFunction: null }, enableAutoCreation: { classPropertyName: "enableAutoCreation", publicName: "enableAutoCreation", isSignal: true, isRequired: false, transformFunction: null }, noResults: { classPropertyName: "noResults", publicName: "noResults", isSignal: true, isRequired: false, transformFunction: null }, loading: { classPropertyName: "loading", publicName: "loading", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { search: "search" }, viewQueries: [{ propertyName: "inputComponent", first: true, predicate: FktInputComponent, descendants: true, isSignal: true }], ngImport: i0, template: "<fkt-input\r\n\t[control]=\"control()\"\r\n\t[spellcheck]=\"false\"\r\n\t[label]=\"label()\"\r\n\t[transformer]=\"transformer\"\r\n\t[placeholder]=\"placeholder()\"\r\n\t(click)=\"openOverlay()\"\r\n/>\r\n", styles: [""], dependencies: [{ kind: "component", type: FktInputComponent, selector: "fkt-input", inputs: ["control", "label", "placeholder", "inputPadding", "type", "transformer", "spellcheck"] }] });
}
__decorate([
    MarkUsed()
], FktAutocompleteComponent.prototype, "closeOverlayOnOutsideClick", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktAutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-autocomplete', imports: [
                        FktInputComponent
                    ], template: "<fkt-input\r\n\t[control]=\"control()\"\r\n\t[spellcheck]=\"false\"\r\n\t[label]=\"label()\"\r\n\t[transformer]=\"transformer\"\r\n\t[placeholder]=\"placeholder()\"\r\n\t(click)=\"openOverlay()\"\r\n/>\r\n" }]
        }], propDecorators: { closeOverlayOnOutsideClick: [] } });

/*
    Public API Surface of components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AUTOCOMPLETE_AUTO_CREATED_OPTION, FktAutocompleteComponent };
//# sourceMappingURL=frakton-ng-autocomplete.mjs.map
