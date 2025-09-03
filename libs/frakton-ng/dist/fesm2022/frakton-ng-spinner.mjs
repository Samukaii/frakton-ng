import * as i0 from '@angular/core';
import { input, Component } from '@angular/core';

class FktSpinnerComponent {
    size = input(40, ...(ngDevMode ? [{ debugName: "size" }] : []));
    stroke = input(4, ...(ngDevMode ? [{ debugName: "stroke" }] : []));
    color = input('primary', ...(ngDevMode ? [{ debugName: "color" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktSpinnerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.2.3", type: FktSpinnerComponent, isStandalone: true, selector: "fkt-spinner", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, stroke: { classPropertyName: "stroke", publicName: "stroke", isSignal: true, isRequired: false, transformFunction: null }, color: { classPropertyName: "color", publicName: "color", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div\r\n\t[style.--stroke]=\"stroke() + 'px'\"\r\n\t[style.--size]=\"size() +  'px'\"\r\n\t[class]=\"'spinner ' + color()\">\r\n</div>\r\n", styles: ["@keyframes spin{to{transform:rotate(360deg)}}.spinner{width:var(--size, 80px);height:var(--size, 80px);border:solid var(--stroke, 6px) var(--color-gray-200);border-radius:var(--radius-full);animation:spin 1s linear infinite}.spinner.primary{border-top-color:var(--color-gray-500)}.spinner.yellow{border-top-color:var(--color-yellow-500)}.spinner.red{border-top-color:var(--color-red-500)}.spinner.green{border-top-color:var(--color-green-500)}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktSpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-spinner', imports: [], template: "<div\r\n\t[style.--stroke]=\"stroke() + 'px'\"\r\n\t[style.--size]=\"size() +  'px'\"\r\n\t[class]=\"'spinner ' + color()\">\r\n</div>\r\n", styles: ["@keyframes spin{to{transform:rotate(360deg)}}.spinner{width:var(--size, 80px);height:var(--size, 80px);border:solid var(--stroke, 6px) var(--color-gray-200);border-radius:var(--radius-full);animation:spin 1s linear infinite}.spinner.primary{border-top-color:var(--color-gray-500)}.spinner.yellow{border-top-color:var(--color-yellow-500)}.spinner.red{border-top-color:var(--color-red-500)}.spinner.green{border-top-color:var(--color-green-500)}\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FktSpinnerComponent };
//# sourceMappingURL=frakton-ng-spinner.mjs.map
