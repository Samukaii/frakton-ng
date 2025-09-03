import * as i0 from '@angular/core';
import { input, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SignalFormControlDirective } from 'frakton-ng/forms';

class FktCheckboxComponent {
    control = input.required(...(ngDevMode ? [{ debugName: "control" }] : []));
    label = input('', ...(ngDevMode ? [{ debugName: "label" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktCheckboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.2.3", type: FktCheckboxComponent, isStandalone: true, selector: "fkt-checkbox", inputs: { control: { classPropertyName: "control", publicName: "control", isSignal: true, isRequired: true, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<label\r\n\t[class.disabled]=\"control().disabled()\">\r\n\t<input\r\n\t\ttype=\"checkbox\"\r\n\t\t[signalFormControl]=\"control()\"\r\n\t/>\r\n\t<span >{{ label() }}</span>\r\n</label>\r\n", styles: [":host{display:block}label{display:inline-flex;align-items:center;cursor:pointer}label span{margin-left:var(--space-xs);font-size:var(--font-size-md);-webkit-user-select:none;user-select:none}label input[type=checkbox]{appearance:none;width:var(--space-lg);height:var(--space-lg);border:2px solid var(--color-neutral-500);border-radius:var(--radius-xs);outline:none;transition:var(--transition-base);position:relative;cursor:pointer;background:var(--color-neutral-100)}label input[type=checkbox]:before{content:\"\";position:absolute;top:2px;left:5px;width:4px;height:8px;border-right:2px solid var(--color-neutral-100);border-bottom:2px solid var(--color-neutral-100);transform:rotate(45deg) scale(0);transition:var(--transition-base);pointer-events:none}label input[type=checkbox]:checked{background-color:var(--color-gray-600);border-color:var(--color-gray-600)}label input[type=checkbox]:checked:before{transform:rotate(45deg) scale(1)}label.disabled{filter:grayscale(1);cursor:not-allowed;opacity:40%}label.disabled input[type=checkbox]{cursor:not-allowed}\n"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: SignalFormControlDirective, selector: "input[signalFormControl],textarea[signalFormControl]", inputs: ["signalFormControl", "transformer", "updateOn"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-checkbox', imports: [ReactiveFormsModule, SignalFormControlDirective], template: "<label\r\n\t[class.disabled]=\"control().disabled()\">\r\n\t<input\r\n\t\ttype=\"checkbox\"\r\n\t\t[signalFormControl]=\"control()\"\r\n\t/>\r\n\t<span >{{ label() }}</span>\r\n</label>\r\n", styles: [":host{display:block}label{display:inline-flex;align-items:center;cursor:pointer}label span{margin-left:var(--space-xs);font-size:var(--font-size-md);-webkit-user-select:none;user-select:none}label input[type=checkbox]{appearance:none;width:var(--space-lg);height:var(--space-lg);border:2px solid var(--color-neutral-500);border-radius:var(--radius-xs);outline:none;transition:var(--transition-base);position:relative;cursor:pointer;background:var(--color-neutral-100)}label input[type=checkbox]:before{content:\"\";position:absolute;top:2px;left:5px;width:4px;height:8px;border-right:2px solid var(--color-neutral-100);border-bottom:2px solid var(--color-neutral-100);transform:rotate(45deg) scale(0);transition:var(--transition-base);pointer-events:none}label input[type=checkbox]:checked{background-color:var(--color-gray-600);border-color:var(--color-gray-600)}label input[type=checkbox]:checked:before{transform:rotate(45deg) scale(1)}label.disabled{filter:grayscale(1);cursor:not-allowed;opacity:40%}label.disabled input[type=checkbox]{cursor:not-allowed}\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FktCheckboxComponent };
//# sourceMappingURL=frakton-ng-checkbox.mjs.map
