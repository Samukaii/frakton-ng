import * as i0 from '@angular/core';
import { input, computed, Component } from '@angular/core';

class FktBadgeComponent {
    text = input(...(ngDevMode ? [undefined, { debugName: "text" }] : []));
    color = input.required(...(ngDevMode ? [{ debugName: "color" }] : []));
    variant = input('opaque', ...(ngDevMode ? [{ debugName: "variant" }] : []));
    classes = computed(() => {
        const color = this.color();
        const variant = this.variant();
        return [
            `badge--${color}`,
            `badge--${variant}`,
            'badge',
        ];
    }, ...(ngDevMode ? [{ debugName: "classes" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktBadgeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.2.3", type: FktBadgeComponent, isStandalone: true, selector: "fkt-badge", inputs: { text: { classPropertyName: "text", publicName: "text", isSignal: true, isRequired: false, transformFunction: null }, color: { classPropertyName: "color", publicName: "color", isSignal: true, isRequired: true, transformFunction: null }, variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div [class]=\"classes()\">\r\n\t<ng-content select=\"[badge-content]\">\r\n\t\t{{ text() }}\r\n\t</ng-content>\r\n</div>\r\n", styles: [".badge{display:flex;justify-content:center;align-items:center;height:fit-content;width:fit-content;border-radius:var(--radius-md);color:var(--color-neutral-100);gap:var(--space-xs);padding:var(--space-3xs) var(--space-xs);font-weight:var(--font-semibold);font-size:var(--font-size-sm)}.badge.badge--opaque.badge--red{background-color:var(--color-red-500)}.badge.badge--opaque.badge--blue{background-color:var(--color-blue-500)}.badge.badge--opaque.badge--orange{background-color:var(--color-orange-500)}.badge.badge--opaque.badge--green{background-color:var(--color-green-500)}.badge.badge--faded.badge--red{background-color:var(--color-red-200);color:var(--color-neutral-950)}.badge.badge--faded.badge--blue{background-color:var(--color-blue-200);color:var(--color-neutral-950)}.badge.badge--faded.badge--orange{background-color:var(--color-orange-200);color:var(--color-neutral-950)}.badge.badge--faded.badge--green{background-color:var(--color-green-200);color:var(--color-neutral-950)}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktBadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-badge', imports: [], template: "<div [class]=\"classes()\">\r\n\t<ng-content select=\"[badge-content]\">\r\n\t\t{{ text() }}\r\n\t</ng-content>\r\n</div>\r\n", styles: [".badge{display:flex;justify-content:center;align-items:center;height:fit-content;width:fit-content;border-radius:var(--radius-md);color:var(--color-neutral-100);gap:var(--space-xs);padding:var(--space-3xs) var(--space-xs);font-weight:var(--font-semibold);font-size:var(--font-size-sm)}.badge.badge--opaque.badge--red{background-color:var(--color-red-500)}.badge.badge--opaque.badge--blue{background-color:var(--color-blue-500)}.badge.badge--opaque.badge--orange{background-color:var(--color-orange-500)}.badge.badge--opaque.badge--green{background-color:var(--color-green-500)}.badge.badge--faded.badge--red{background-color:var(--color-red-200);color:var(--color-neutral-950)}.badge.badge--faded.badge--blue{background-color:var(--color-blue-200);color:var(--color-neutral-950)}.badge.badge--faded.badge--orange{background-color:var(--color-orange-200);color:var(--color-neutral-950)}.badge.badge--faded.badge--green{background-color:var(--color-green-200);color:var(--color-neutral-950)}\n"] }]
        }] });

const fktBadgeColors = ['green', 'red', 'blue', 'orange'];
const fktBadgeVariants = ['opaque', 'faded'];

/**
 * Generated bundle index. Do not edit.
 */

export { FktBadgeComponent, fktBadgeColors, fktBadgeVariants };
//# sourceMappingURL=frakton-ng-badge.mjs.map
