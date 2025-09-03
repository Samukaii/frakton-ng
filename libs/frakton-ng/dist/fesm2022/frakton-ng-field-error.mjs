import * as i0 from '@angular/core';
import { input, computed, Component } from '@angular/core';

// import { Generic } from 'frakton-ng/internal/types';
class FktFieldErrorComponent {
    control = input(...(ngDevMode ? [undefined, { debugName: "control" }] : []));
    messages = [
        {
            name: 'required',
            error: () => 'Campo obrigatório',
        },
        {
            name: 'email',
            error: () => 'E-mail inválido',
        },
        {
            name: 'minlength',
            error: errors => `É necessário no mínimo ${errors['requiredLength']} caracteres`,
        },
        {
            name: 'custom',
            error: errors => errors['message'],
        },
    ];
    message = computed(() => {
        const error = this.control()?.errors();
        if (!error)
            return null;
        if (this.control()?.untouched())
            return null;
        const message = this.messages.find(message => !!error[message.name]);
        if (!message)
            return null;
        return message.error(error[message.name]);
    }, ...(ngDevMode ? [{ debugName: "message" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktFieldErrorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.2.3", type: FktFieldErrorComponent, isStandalone: true, selector: "fkt-field-error", inputs: { control: { classPropertyName: "control", publicName: "control", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.active": "!!message()" } }, ngImport: i0, template: "{{message()}}\r\n", styles: [":host{display:flex;justify-content:flex-start;font-size:var(--font-size-xs);overflow:hidden;color:var(--color-red-500);transition:var(--transition-base);height:var(--space-lg);max-height:0;line-height:1.25rem}:host.active{max-height:var(--space-lg)}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktFieldErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-field-error', imports: [], host: {
                        '[class.active]': '!!message()',
                    }, template: "{{message()}}\r\n", styles: [":host{display:flex;justify-content:flex-start;font-size:var(--font-size-xs);overflow:hidden;color:var(--color-red-500);transition:var(--transition-base);height:var(--space-lg);max-height:0;line-height:1.25rem}:host.active{max-height:var(--space-lg)}\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FktFieldErrorComponent };
//# sourceMappingURL=frakton-ng-field-error.mjs.map
