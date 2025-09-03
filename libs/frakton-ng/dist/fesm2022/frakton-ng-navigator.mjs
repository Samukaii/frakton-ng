import * as i0 from '@angular/core';
import { output, input, Component } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';

class FktNavigatorComponent {
    next = output();
    previous = output();
    canGoToPrevious = input(true, ...(ngDevMode ? [{ debugName: "canGoToPrevious" }] : []));
    canGoToNext = input(true, ...(ngDevMode ? [{ debugName: "canGoToNext" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktNavigatorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.2.3", type: FktNavigatorComponent, isStandalone: true, selector: "fkt-navigator", inputs: { canGoToPrevious: { classPropertyName: "canGoToPrevious", publicName: "canGoToPrevious", isSignal: true, isRequired: false, transformFunction: null }, canGoToNext: { classPropertyName: "canGoToNext", publicName: "canGoToNext", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { next: "next", previous: "previous" }, ngImport: i0, template: "<div class=\"navigator\">\r\n\t<div class=\"navigator__start\">\r\n\t\t<fkt-button\r\n\t\t\t(click)=\"previous.emit()\"\r\n\t\t\t[disabled]=\"!canGoToPrevious()\"\r\n\t\t\ttheme=\"basic\"\r\n\t\t\ticon=\"chevron-double-left\"\r\n\t\t/>\r\n\t</div>\r\n\t<div class=\"navigator__center\">\r\n\t\t<ng-content/>\r\n\t</div>\r\n\t<div class=\"navigator__end\">\r\n\t\t<fkt-button\r\n\t\t\t(click)=\"next.emit()\"\r\n\t\t\t[disabled]=\"!canGoToNext()\"\r\n\t\t\ttheme=\"basic\"\r\n\t\t\ticon=\"chevron-double-right\"\r\n\t\t/>\r\n\t</div>\r\n</div>\r\n", styles: [".navigator{display:flex;justify-content:space-between;align-items:center}.navigator__start{display:flex;width:100%;justify-content:flex-start}.navigator__center{display:flex;width:100%;justify-content:center;align-items:center}.navigator__end{display:flex;width:100%;justify-content:flex-end}\n"], dependencies: [{ kind: "component", type: FktButtonComponent, selector: "fkt-button", inputs: ["loading", "disabled", "text", "loadingText", "color", "theme", "variant", "icon", "iconPosition"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktNavigatorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-navigator', imports: [FktButtonComponent], template: "<div class=\"navigator\">\r\n\t<div class=\"navigator__start\">\r\n\t\t<fkt-button\r\n\t\t\t(click)=\"previous.emit()\"\r\n\t\t\t[disabled]=\"!canGoToPrevious()\"\r\n\t\t\ttheme=\"basic\"\r\n\t\t\ticon=\"chevron-double-left\"\r\n\t\t/>\r\n\t</div>\r\n\t<div class=\"navigator__center\">\r\n\t\t<ng-content/>\r\n\t</div>\r\n\t<div class=\"navigator__end\">\r\n\t\t<fkt-button\r\n\t\t\t(click)=\"next.emit()\"\r\n\t\t\t[disabled]=\"!canGoToNext()\"\r\n\t\t\ttheme=\"basic\"\r\n\t\t\ticon=\"chevron-double-right\"\r\n\t\t/>\r\n\t</div>\r\n</div>\r\n", styles: [".navigator{display:flex;justify-content:space-between;align-items:center}.navigator__start{display:flex;width:100%;justify-content:flex-start}.navigator__center{display:flex;width:100%;justify-content:center;align-items:center}.navigator__end{display:flex;width:100%;justify-content:flex-end}\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FktNavigatorComponent };
//# sourceMappingURL=frakton-ng-navigator.mjs.map
