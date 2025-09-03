import * as i0 from '@angular/core';
import { input, booleanAttribute, Component } from '@angular/core';

class FktCardComponent {
    borderless = input(false, ...(ngDevMode ? [{ debugName: "borderless", transform: booleanAttribute }] : [{
            transform: booleanAttribute,
        }]));
    shadowless = input(false, ...(ngDevMode ? [{ debugName: "shadowless", transform: booleanAttribute }] : [{
            transform: booleanAttribute,
        }]));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.2.3", type: FktCardComponent, isStandalone: true, selector: "fkt-card", inputs: { borderless: { classPropertyName: "borderless", publicName: "borderless", isSignal: true, isRequired: false, transformFunction: null }, shadowless: { classPropertyName: "shadowless", publicName: "shadowless", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.with-border": "!borderless()", "class.with-shadow": "!shadowless()" } }, ngImport: i0, template: "<ng-content/>\r\n", styles: [":host{display:flex;flex-direction:column;overflow:auto}:host.with-border{border:solid 1px var(--color-gray-950);border-radius:var(--radius-lg)}:host.with-shadow{box-shadow:var(--shadow-lg)}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-card', imports: [], host: {
                        '[class.with-border]': '!borderless()',
                        '[class.with-shadow]': '!shadowless()',
                    }, template: "<ng-content/>\r\n", styles: [":host{display:flex;flex-direction:column;overflow:auto}:host.with-border{border:solid 1px var(--color-gray-950);border-radius:var(--radius-lg)}:host.with-shadow{box-shadow:var(--shadow-lg)}\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FktCardComponent };
//# sourceMappingURL=frakton-ng-card.mjs.map
