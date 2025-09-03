import * as i0 from '@angular/core';
import { input, booleanAttribute, Component } from '@angular/core';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { FktIconComponent } from 'frakton-ng/icon';

class FktNoResultsComponent {
    noResults = input.required(...(ngDevMode ? [{ debugName: "noResults" }] : []));
    borderless = input(false, ...(ngDevMode ? [{ debugName: "borderless", transform: booleanAttribute }] : [{ transform: booleanAttribute }]));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktNoResultsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.3", type: FktNoResultsComponent, isStandalone: true, selector: "fkt-no-results", inputs: { noResults: { classPropertyName: "noResults", publicName: "noResults", isSignal: true, isRequired: true, transformFunction: null }, borderless: { classPropertyName: "borderless", publicName: "borderless", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.with-border": "!borderless()" } }, ngImport: i0, template: "@let icon = noResults().icon;\r\n@let action = noResults().action;\r\n\r\n@if (icon?.name) {\r\n\t<fkt-icon\r\n\t\t[style.font-size]=\"icon!.size || '116px'\"\r\n\t\t[name]=\"icon!.name\"\r\n\t/>\r\n}\r\n\r\n<div class=\"container\">\r\n\t<h3 class=\"container__title\">\r\n\t\t{{ noResults().label }}\r\n\t</h3>\r\n\t@if (noResults().description) {\r\n\t\t<p class=\"container__description\">\r\n\t\t\t{{ noResults().description }}\r\n\t\t</p>\r\n\t}\r\n\r\n\t@if (action) {\r\n\t\t<fkt-buttons-list\r\n\t\t\t[actions]=\"[action]\"\r\n\t\t/>\r\n\t}\r\n\r\n</div>\r\n", styles: [":host{display:flex;gap:var(--space-md);justify-content:center;align-items:center;min-height:400px}:host.with-border{border:solid 1px var(--color-gray-200)}*{box-sizing:border-box}h1,h2,h3,p{margin:0}fkt-icon{color:var(--color-gray-800)}.container{display:flex;flex-direction:column}.container__title{font-size:var(--font-size-lg);line-height:1.75rem;font-weight:var(--font-semibold);color:var(--color-gray-800)}.container__description{margin-bottom:var(--space-sm);color:var(--color-gray-800)}\n"], dependencies: [{ kind: "component", type: FktIconComponent, selector: "fkt-icon", inputs: ["name"] }, { kind: "component", type: FktButtonsListComponent, selector: "fkt-buttons-list", inputs: ["context", "orientation", "fill", "verticalAlignment", "horizontalAlignment", "actions"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktNoResultsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-no-results', imports: [FktIconComponent, FktButtonsListComponent], host: {
                        '[class.with-border]': "!borderless()"
                    }, template: "@let icon = noResults().icon;\r\n@let action = noResults().action;\r\n\r\n@if (icon?.name) {\r\n\t<fkt-icon\r\n\t\t[style.font-size]=\"icon!.size || '116px'\"\r\n\t\t[name]=\"icon!.name\"\r\n\t/>\r\n}\r\n\r\n<div class=\"container\">\r\n\t<h3 class=\"container__title\">\r\n\t\t{{ noResults().label }}\r\n\t</h3>\r\n\t@if (noResults().description) {\r\n\t\t<p class=\"container__description\">\r\n\t\t\t{{ noResults().description }}\r\n\t\t</p>\r\n\t}\r\n\r\n\t@if (action) {\r\n\t\t<fkt-buttons-list\r\n\t\t\t[actions]=\"[action]\"\r\n\t\t/>\r\n\t}\r\n\r\n</div>\r\n", styles: [":host{display:flex;gap:var(--space-md);justify-content:center;align-items:center;min-height:400px}:host.with-border{border:solid 1px var(--color-gray-200)}*{box-sizing:border-box}h1,h2,h3,p{margin:0}fkt-icon{color:var(--color-gray-800)}.container{display:flex;flex-direction:column}.container__title{font-size:var(--font-size-lg);line-height:1.75rem;font-weight:var(--font-semibold);color:var(--color-gray-800)}.container__description{margin-bottom:var(--space-sm);color:var(--color-gray-800)}\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FktNoResultsComponent };
//# sourceMappingURL=frakton-ng-no-results.mjs.map
