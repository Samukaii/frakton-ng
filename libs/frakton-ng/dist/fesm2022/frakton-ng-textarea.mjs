import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { input, booleanAttribute, viewChild, ElementRef, effect, untracked, ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FktFieldErrorComponent } from 'frakton-ng/field-error';
import { SignalFormControlDirective } from 'frakton-ng/forms';
import { MarkUsed } from 'frakton-ng/internal/utils';

class FktTextareaComponent {
    control = input.required(...(ngDevMode ? [{ debugName: "control" }] : []));
    label = input.required(...(ngDevMode ? [{ debugName: "label" }] : []));
    placeholder = input('', ...(ngDevMode ? [{ debugName: "placeholder" }] : []));
    autoExpand = input(false, ...(ngDevMode ? [{ debugName: "autoExpand", transform: booleanAttribute }] : [{ transform: booleanAttribute }]));
    element = viewChild.required('textarea', { read: ElementRef });
    autoExpandWhenValueChanges = effect(() => {
        this.control().value();
        untracked(() => {
            this.autoExpandElement();
        });
    }, ...(ngDevMode ? [{ debugName: "autoExpandWhenValueChanges" }] : []));
    ngAfterViewInit() {
        this.autoExpandElement();
    }
    focus() {
        const element = this.element()?.nativeElement;
        element?.focus();
    }
    autoExpandElement() {
        if (!this.autoExpand())
            return;
        const textarea = this.element().nativeElement;
        const VERTICAL_PADDING = 8;
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + VERTICAL_PADDING + 'px';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktTextareaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "20.2.3", type: FktTextareaComponent, isStandalone: true, selector: "fkt-textarea", inputs: { control: { classPropertyName: "control", publicName: "control", isSignal: true, isRequired: true, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: true, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, autoExpand: { classPropertyName: "autoExpand", publicName: "autoExpand", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.disabled": "control().disabled()" } }, viewQueries: [{ propertyName: "element", first: true, predicate: ["textarea"], descendants: true, read: ElementRef, isSignal: true }], ngImport: i0, template: "<div class=\"label-container\">\r\n\t<div\r\n\t\t[class.error]=\"!!error.message()\"\r\n\t\t[class.float]=\"control().viewValue()\"\r\n\t\t[class.disabled]=\"control().disabled()\"\r\n\t\tclass=\"label-wrapper\">\r\n\t\t<label\r\n\t\t\taria-hidden=\"true\"\r\n\t\t>{{ label() }}</label>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"input\">\r\n\t<textarea\r\n\t\t[attr.aria-label]=\"label()\"\r\n\t\t[class.error]=\"!!error.message()\"\r\n\t\t[signalFormControl]=\"control()\"\r\n\t\t#textarea\r\n\t\t[placeholder]=\"placeholder()\"\r\n\t></textarea>\r\n</div>\r\n\r\n\r\n<fkt-field-error #error [control]=\"control()\"/>\r\n", styles: [":host{display:block;border-radius:var(--radius-md);position:relative;margin-top:var(--space-xs);border-color:var(--color-neutral-800);transition:var(--transition-base);scroll-behavior:smooth;width:100%}:host .label-container{display:flex;gap:.5rem;align-items:center}:host .label-container .label-wrapper{position:absolute;pointer-events:none;padding:0 var(--space-3xs);font-size:var(--font-size-sm);left:.75rem;top:15px;transition:var(--transition-base);color:var(--color-neutral-500);background-color:var(--color-neutral-100)}:host .label-container .label-wrapper.disabled label{opacity:40%;filter:grayscale(1);cursor:not-allowed}:host .label-container .label-wrapper.error{color:var(--color-error)}:host .input{position:relative}:host .input textarea{border:solid 1px var(--color-border);box-sizing:border-box;outline:none;min-height:50px;font-size:var(--font-size-md);width:100%;border-radius:var(--radius-lg);padding:var(--space-md);background-color:transparent}:host .input textarea::placeholder{opacity:0;color:var(--color-neutral-500)}:host .input textarea:disabled{opacity:40%;filter:grayscale(1);cursor:not-allowed}:host .input textarea.error{border-color:var(--color-error)}:host .input textarea.password{padding-right:var(--space-3xl)}:host .input__suffix{position:absolute;pointer-events:none;top:0;width:100%;display:flex;align-items:center;justify-content:end;height:100%}:host .input__suffix-password{position:absolute;top:.5rem;right:.5rem;cursor:pointer}:host .input__suffix-password fkt-button{pointer-events:auto}:host .input__suffix-content{pointer-events:auto;margin-right:.5rem}:host:focus-within .label-container .label-wrapper{color:var(--color-brand-secondary);z-index:50;scale:90% 90%;translate:calc(var(--space-3xs) * -1) calc(var(--space-xl) * -1)}:host:focus-within .input textarea{transition:.15s cubic-bezier(.4,0,.2,1);border-color:var(--color-brand-secondary)}:host:focus-within .input textarea::placeholder{opacity:1}:host .float{z-index:50;scale:90% 90%;translate:calc(var(--space-3xs) * -1) calc(var(--space-xl) * -1)}:host fkt-field-error{padding-left:var(--space-sm)}\n"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "component", type: FktFieldErrorComponent, selector: "fkt-field-error", inputs: ["control"] }, { kind: "directive", type: SignalFormControlDirective, selector: "input[signalFormControl],textarea[signalFormControl]", inputs: ["signalFormControl", "transformer", "updateOn"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
__decorate([
    MarkUsed()
], FktTextareaComponent.prototype, "autoExpandWhenValueChanges", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktTextareaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-textarea', imports: [
                        ReactiveFormsModule,
                        FktFieldErrorComponent,
                        SignalFormControlDirective,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class.disabled]': 'control().disabled()'
                    }, template: "<div class=\"label-container\">\r\n\t<div\r\n\t\t[class.error]=\"!!error.message()\"\r\n\t\t[class.float]=\"control().viewValue()\"\r\n\t\t[class.disabled]=\"control().disabled()\"\r\n\t\tclass=\"label-wrapper\">\r\n\t\t<label\r\n\t\t\taria-hidden=\"true\"\r\n\t\t>{{ label() }}</label>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"input\">\r\n\t<textarea\r\n\t\t[attr.aria-label]=\"label()\"\r\n\t\t[class.error]=\"!!error.message()\"\r\n\t\t[signalFormControl]=\"control()\"\r\n\t\t#textarea\r\n\t\t[placeholder]=\"placeholder()\"\r\n\t></textarea>\r\n</div>\r\n\r\n\r\n<fkt-field-error #error [control]=\"control()\"/>\r\n", styles: [":host{display:block;border-radius:var(--radius-md);position:relative;margin-top:var(--space-xs);border-color:var(--color-neutral-800);transition:var(--transition-base);scroll-behavior:smooth;width:100%}:host .label-container{display:flex;gap:.5rem;align-items:center}:host .label-container .label-wrapper{position:absolute;pointer-events:none;padding:0 var(--space-3xs);font-size:var(--font-size-sm);left:.75rem;top:15px;transition:var(--transition-base);color:var(--color-neutral-500);background-color:var(--color-neutral-100)}:host .label-container .label-wrapper.disabled label{opacity:40%;filter:grayscale(1);cursor:not-allowed}:host .label-container .label-wrapper.error{color:var(--color-error)}:host .input{position:relative}:host .input textarea{border:solid 1px var(--color-border);box-sizing:border-box;outline:none;min-height:50px;font-size:var(--font-size-md);width:100%;border-radius:var(--radius-lg);padding:var(--space-md);background-color:transparent}:host .input textarea::placeholder{opacity:0;color:var(--color-neutral-500)}:host .input textarea:disabled{opacity:40%;filter:grayscale(1);cursor:not-allowed}:host .input textarea.error{border-color:var(--color-error)}:host .input textarea.password{padding-right:var(--space-3xl)}:host .input__suffix{position:absolute;pointer-events:none;top:0;width:100%;display:flex;align-items:center;justify-content:end;height:100%}:host .input__suffix-password{position:absolute;top:.5rem;right:.5rem;cursor:pointer}:host .input__suffix-password fkt-button{pointer-events:auto}:host .input__suffix-content{pointer-events:auto;margin-right:.5rem}:host:focus-within .label-container .label-wrapper{color:var(--color-brand-secondary);z-index:50;scale:90% 90%;translate:calc(var(--space-3xs) * -1) calc(var(--space-xl) * -1)}:host:focus-within .input textarea{transition:.15s cubic-bezier(.4,0,.2,1);border-color:var(--color-brand-secondary)}:host:focus-within .input textarea::placeholder{opacity:1}:host .float{z-index:50;scale:90% 90%;translate:calc(var(--space-3xs) * -1) calc(var(--space-xl) * -1)}:host fkt-field-error{padding-left:var(--space-sm)}\n"] }]
        }], propDecorators: { autoExpandWhenValueChanges: [] } });

/**
 * Generated bundle index. Do not edit.
 */

export { FktTextareaComponent };
//# sourceMappingURL=frakton-ng-textarea.mjs.map
