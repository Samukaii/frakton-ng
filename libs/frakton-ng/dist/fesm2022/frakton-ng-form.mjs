import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { input, output, effect, untracked, Component } from '@angular/core';
import { MarkUsed } from 'frakton-ng/internal/utils';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';

class FktFormComponent {
    form = input.required(...(ngDevMode ? [{ debugName: "form" }] : []));
    data = input(...(ngDevMode ? [undefined, { debugName: "data" }] : []));
    formModifiers = input(...(ngDevMode ? [undefined, { debugName: "formModifiers" }] : []));
    submit = output();
    updateForm = effect(() => {
        this.data();
        this.form();
        this.formModifiers();
        untracked(() => {
            this.patchForm();
        });
    }, ...(ngDevMode ? [{ debugName: "updateForm" }] : []));
    patchForm() {
        const data = this.data();
        const form = this.form();
        const modifiers = this.formModifiers();
        if (!data)
            return;
        const controls = form.controls;
        const finalObject = {};
        for (const controlKey in controls) {
            const modifier = modifiers?.[controlKey] ?? null;
            if (modifier) {
                finalObject[controlKey] = modifier(data);
                continue;
            }
            if (data[controlKey])
                finalObject[controlKey] = data[controlKey];
        }
        form.patchValue(finalObject);
    }
    onSubmit() {
        this.submit.emit(this.form().value());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktFormComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.2.3", type: FktFormComponent, isStandalone: true, selector: "fkt-form", inputs: { form: { classPropertyName: "form", publicName: "form", isSignal: true, isRequired: true, transformFunction: null }, data: { classPropertyName: "data", publicName: "data", isSignal: true, isRequired: false, transformFunction: null }, formModifiers: { classPropertyName: "formModifiers", publicName: "formModifiers", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { submit: "submit" }, ngImport: i0, template: "<form (ngSubmit)=\"onSubmit()\">\r\n\t<ng-content/>\r\n</form>\r\n", styles: [":host{display:flex;height:100%;width:100%}form{width:100%;height:100%}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }] });
}
__decorate([
    MarkUsed()
], FktFormComponent.prototype, "updateForm", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-form', imports: [
                        FormsModule
                    ], template: "<form (ngSubmit)=\"onSubmit()\">\r\n\t<ng-content/>\r\n</form>\r\n", styles: [":host{display:flex;height:100%;width:100%}form{width:100%;height:100%}\n"] }]
        }], propDecorators: { updateForm: [] } });

/**
 * Generated bundle index. Do not edit.
 */

export { FktFormComponent };
//# sourceMappingURL=frakton-ng-form.mjs.map
