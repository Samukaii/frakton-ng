import * as i0 from '@angular/core';
import { input, booleanAttribute, Component } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktTooltipDirective } from 'frakton-ng/tooltip';

class FktButtonsListComponent {
    context = input(...(ngDevMode ? [undefined, { debugName: "context" }] : []));
    orientation = input('horizontal', ...(ngDevMode ? [{ debugName: "orientation" }] : []));
    fill = input(false, ...(ngDevMode ? [{ debugName: "fill", transform: booleanAttribute }] : [{ transform: booleanAttribute }]));
    verticalAlignment = input('start', ...(ngDevMode ? [{ debugName: "verticalAlignment" }] : []));
    horizontalAlignment = input('start', ...(ngDevMode ? [{ debugName: "horizontalAlignment" }] : []));
    actions = input.required(...(ngDevMode ? [{ debugName: "actions" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktButtonsListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.3", type: FktButtonsListComponent, isStandalone: true, selector: "fkt-buttons-list", inputs: { context: { classPropertyName: "context", publicName: "context", isSignal: true, isRequired: false, transformFunction: null }, orientation: { classPropertyName: "orientation", publicName: "orientation", isSignal: true, isRequired: false, transformFunction: null }, fill: { classPropertyName: "fill", publicName: "fill", isSignal: true, isRequired: false, transformFunction: null }, verticalAlignment: { classPropertyName: "verticalAlignment", publicName: "verticalAlignment", isSignal: true, isRequired: false, transformFunction: null }, horizontalAlignment: { classPropertyName: "horizontalAlignment", publicName: "horizontalAlignment", isSignal: true, isRequired: false, transformFunction: null }, actions: { classPropertyName: "actions", publicName: "actions", isSignal: true, isRequired: true, transformFunction: null } }, host: { properties: { "class.vertical": "orientation() === \"vertical\"", "class.horizontal": "orientation() === \"horizontal\"", "class.fill": "fill()", "style.--vertical-alignment": "verticalAlignment()", "style.--horizontal-alignment": "horizontalAlignment()" } }, ngImport: i0, template: "@for (action of actions(); track action.identifier) {\r\n\t<fkt-button\r\n\t\t[fktTooltip]=\"action.tooltip ?? ''\"\r\n\t\t[tooltipEnabled]=\"!!action.tooltip\"\r\n\t\t(click)=\"action?.click?.(context())\"\r\n\t\t[loading]=\"action.loading ?? false\"\r\n\t\t[disabled]=\"action.disabled ?? false\"\r\n\t\t[text]=\"action.text ?? ''\"\r\n\t\t[loadingText]=\"action.loadingText ?? ''\"\r\n\t\t[color]=\"action.color ?? 'primary'\"\r\n\t\t[theme]=\"action.theme ?? 'raised'\"\r\n\t\t[variant]=\"action.variant ?? 'rounded'\"\r\n\t\t[icon]=\"action.icon\"\r\n\t\t[iconPosition]=\"action.iconPosition ?? 'right'\"\r\n\t/>\r\n}\r\n", styles: [":host{display:flex;gap:var(--space-xs)}:host.horizontal{justify-content:var(--horizontal-alignment);align-items:var(--vertical-alignment)}:host.vertical{flex-direction:column;justify-content:var(--vertical-alignment);align-items:var(--horizontal-alignment)}:host.fill>*{width:100%}\n"], dependencies: [{ kind: "component", type: FktButtonComponent, selector: "fkt-button", inputs: ["loading", "disabled", "text", "loadingText", "color", "theme", "variant", "icon", "iconPosition"] }, { kind: "directive", type: FktTooltipDirective, selector: "[fktTooltip]", inputs: ["fktTooltip", "tooltipEnabled", "disableAutoReposition", "position"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktButtonsListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-buttons-list', imports: [FktButtonComponent, FktTooltipDirective], host: {
                        '[class.vertical]': 'orientation() === "vertical"',
                        '[class.horizontal]': 'orientation() === "horizontal"',
                        '[class.fill]': 'fill()',
                        '[style.--vertical-alignment]': 'verticalAlignment()',
                        '[style.--horizontal-alignment]': 'horizontalAlignment()',
                    }, template: "@for (action of actions(); track action.identifier) {\r\n\t<fkt-button\r\n\t\t[fktTooltip]=\"action.tooltip ?? ''\"\r\n\t\t[tooltipEnabled]=\"!!action.tooltip\"\r\n\t\t(click)=\"action?.click?.(context())\"\r\n\t\t[loading]=\"action.loading ?? false\"\r\n\t\t[disabled]=\"action.disabled ?? false\"\r\n\t\t[text]=\"action.text ?? ''\"\r\n\t\t[loadingText]=\"action.loadingText ?? ''\"\r\n\t\t[color]=\"action.color ?? 'primary'\"\r\n\t\t[theme]=\"action.theme ?? 'raised'\"\r\n\t\t[variant]=\"action.variant ?? 'rounded'\"\r\n\t\t[icon]=\"action.icon\"\r\n\t\t[iconPosition]=\"action.iconPosition ?? 'right'\"\r\n\t/>\r\n}\r\n", styles: [":host{display:flex;gap:var(--space-xs)}:host.horizontal{justify-content:var(--horizontal-alignment);align-items:var(--vertical-alignment)}:host.vertical{flex-direction:column;justify-content:var(--vertical-alignment);align-items:var(--horizontal-alignment)}:host.fill>*{width:100%}\n"] }]
        }] });

const fktButtonsListOrientations = ['vertical', 'horizontal'];

/**
 * Generated bundle index. Do not edit.
 */

export { FktButtonsListComponent, fktButtonsListOrientations };
//# sourceMappingURL=frakton-ng-buttons-list.mjs.map
