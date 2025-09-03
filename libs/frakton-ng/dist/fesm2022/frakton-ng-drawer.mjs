import * as i0 from '@angular/core';
import { input, output, computed, Component } from '@angular/core';

class FktDrawerComponent {
    opened = input(false, ...(ngDevMode ? [{ debugName: "opened" }] : []));
    mode = input('push', ...(ngDevMode ? [{ debugName: "mode" }] : []));
    width = input('250px', ...(ngDevMode ? [{ debugName: "width" }] : []));
    backdropClick = output();
    canShowOverlay = computed(() => {
        if (this.mode() === 'push')
            return false;
        return this.opened();
    }, ...(ngDevMode ? [{ debugName: "canShowOverlay" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktDrawerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.2.3", type: FktDrawerComponent, isStandalone: true, selector: "fkt-drawer", inputs: { opened: { classPropertyName: "opened", publicName: "opened", isSignal: true, isRequired: false, transformFunction: null }, mode: { classPropertyName: "mode", publicName: "mode", isSignal: true, isRequired: false, transformFunction: null }, width: { classPropertyName: "width", publicName: "width", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { backdropClick: "backdropClick" }, ngImport: i0, template: "<div class=\"drawer\">\r\n\t<div\r\n\t\t[class.drawer__side-content--show]=\"opened()\"\r\n\t\t[class.drawer__side-content--overlay]=\"mode() === 'overlay'\"\r\n    \t[style.--show-width]=\"width()\"\r\n\t\tclass=\"drawer__side-content\">\r\n\t\t<ng-content select=\"[side-content]\"/>\r\n\t</div>\r\n\t<div class=\"drawer__side-main\">\r\n\t\t<div\r\n\t\t\tclass=\"drawer__backdrop\"\r\n\t\t\t[class.drawer__backdrop--show]=\"canShowOverlay()\"\r\n\t\t\t(click)=\"backdropClick.emit()\"\r\n\t\t>\r\n\t\t</div>\r\n\t\t<ng-content select=\"[side-main]\"/>\r\n\t</div>\r\n</div>\r\n", styles: [":host{display:flex;height:100%;width:100%}.drawer{position:relative;height:100%;width:100%;display:flex}.drawer__side-content{width:var(--show-width, 250px);max-width:0;transition:var(--transition-base);z-index:20;overflow:hidden;height:100%}.drawer__side-content.drawer__side-content--overlay{position:absolute}.drawer__side-content.drawer__side-content--show{max-width:var(--show-width, 250px)}.drawer__side-main{position:relative;overflow:auto;flex:1;z-index:10;width:100%;height:100%}.drawer__backdrop{position:absolute;transition:var(--transition-base);pointer-events:none;width:100%;height:100%;z-index:10;opacity:0;background-color:#000}.drawer__backdrop.drawer__backdrop--show{pointer-events:none;opacity:50%}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktDrawerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-drawer', imports: [], template: "<div class=\"drawer\">\r\n\t<div\r\n\t\t[class.drawer__side-content--show]=\"opened()\"\r\n\t\t[class.drawer__side-content--overlay]=\"mode() === 'overlay'\"\r\n    \t[style.--show-width]=\"width()\"\r\n\t\tclass=\"drawer__side-content\">\r\n\t\t<ng-content select=\"[side-content]\"/>\r\n\t</div>\r\n\t<div class=\"drawer__side-main\">\r\n\t\t<div\r\n\t\t\tclass=\"drawer__backdrop\"\r\n\t\t\t[class.drawer__backdrop--show]=\"canShowOverlay()\"\r\n\t\t\t(click)=\"backdropClick.emit()\"\r\n\t\t>\r\n\t\t</div>\r\n\t\t<ng-content select=\"[side-main]\"/>\r\n\t</div>\r\n</div>\r\n", styles: [":host{display:flex;height:100%;width:100%}.drawer{position:relative;height:100%;width:100%;display:flex}.drawer__side-content{width:var(--show-width, 250px);max-width:0;transition:var(--transition-base);z-index:20;overflow:hidden;height:100%}.drawer__side-content.drawer__side-content--overlay{position:absolute}.drawer__side-content.drawer__side-content--show{max-width:var(--show-width, 250px)}.drawer__side-main{position:relative;overflow:auto;flex:1;z-index:10;width:100%;height:100%}.drawer__backdrop{position:absolute;transition:var(--transition-base);pointer-events:none;width:100%;height:100%;z-index:10;opacity:0;background-color:#000}.drawer__backdrop.drawer__backdrop--show{pointer-events:none;opacity:50%}\n"] }]
        }] });

const fktSidebarModes = ['overlay', 'push'];

/**
 * Generated bundle index. Do not edit.
 */

export { FktDrawerComponent, fktSidebarModes };
//# sourceMappingURL=frakton-ng-drawer.mjs.map
