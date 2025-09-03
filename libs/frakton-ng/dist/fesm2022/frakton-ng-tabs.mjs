import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { inject, TemplateRef, Directive, input, viewChild, contentChild, computed, Component, contentChildren, model, effect, untracked } from '@angular/core';
import { FktIconComponent } from 'frakton-ng/icon';
import { NgTemplateOutlet } from '@angular/common';
import { MarkUsed } from 'frakton-ng/internal/utils';

class FktTabLazyDirective {
    template = inject(TemplateRef);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktTabLazyDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "20.2.3", type: FktTabLazyDirective, isStandalone: true, selector: "[fktTabLazy]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktTabLazyDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fktTabLazy]'
                }]
        }] });

class FktTabComponent {
    label = input.required(...(ngDevMode ? [{ debugName: "label" }] : []));
    key = input.required(...(ngDevMode ? [{ debugName: "key" }] : []));
    icon = input(...(ngDevMode ? [undefined, { debugName: "icon" }] : []));
    containerTemplate = viewChild.required('tab', { read: TemplateRef });
    lazyContent = contentChild(FktTabLazyDirective, ...(ngDevMode ? [{ debugName: "lazyContent" }] : []));
    template = computed(() => this.lazyContent()?.template ?? this.containerTemplate(), ...(ngDevMode ? [{ debugName: "template" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktTabComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "20.2.3", type: FktTabComponent, isStandalone: true, selector: "fkt-tab", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: true, transformFunction: null }, key: { classPropertyName: "key", publicName: "key", isSignal: true, isRequired: true, transformFunction: null }, icon: { classPropertyName: "icon", publicName: "icon", isSignal: true, isRequired: false, transformFunction: null } }, queries: [{ propertyName: "lazyContent", first: true, predicate: FktTabLazyDirective, descendants: true, isSignal: true }], viewQueries: [{ propertyName: "containerTemplate", first: true, predicate: ["tab"], descendants: true, read: TemplateRef, isSignal: true }], exportAs: ["fktTab"], ngImport: i0, template: "<ng-template #tab>\r\n\t<ng-content></ng-content>\r\n</ng-template>\r\n", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktTabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-tab', exportAs: 'fktTab', imports: [], template: "<ng-template #tab>\r\n\t<ng-content></ng-content>\r\n</ng-template>\r\n" }]
        }] });

class FktTabsListComponent {
    tabs = contentChildren(FktTabComponent, ...(ngDevMode ? [{ debugName: "tabs" }] : []));
    activeTab = model(...(ngDevMode ? [undefined, { debugName: "activeTab" }] : []));
    activeTabComponent = computed(() => {
        const activeTab = this.activeTab();
        if (!activeTab)
            return null;
        return this.tabs().find(tab => tab.key() === activeTab) ?? null;
    }, ...(ngDevMode ? [{ debugName: "activeTabComponent" }] : []));
    selectFirstTab = effect(() => {
        const tabs = this.tabs();
        const activeTab = this.activeTab();
        untracked(() => {
            if (activeTab)
                return;
            if (!tabs.length)
                return;
            const firstTab = tabs[0];
            this.activeTab.set(firstTab.key());
        });
    }, ...(ngDevMode ? [{ debugName: "selectFirstTab" }] : []));
    verifyUnique = effect(() => {
        const tabs = this.tabs();
        untracked(() => {
            const seen = new Set();
            for (const item of tabs) {
                if (seen.has(item.key())) {
                    throw new Error(`Duplicate tab key: ${item.key()}`);
                }
                seen.add(item.key());
            }
            return true;
        });
    }, ...(ngDevMode ? [{ debugName: "verifyUnique" }] : []));
    selectTab(key) {
        this.activeTab.set(key);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktTabsListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.3", type: FktTabsListComponent, isStandalone: true, selector: "fkt-tabs-list", inputs: { activeTab: { classPropertyName: "activeTab", publicName: "activeTab", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { activeTab: "activeTabChange" }, queries: [{ propertyName: "tabs", predicate: FktTabComponent, isSignal: true }], ngImport: i0, template: "<div class=\"container\">\r\n\t@for (tab of tabs(); track tab.key()) {\r\n\t\t<div\r\n\t\t\t(click)=\"selectTab(tab.key())\"\r\n\t\t\tclass=\"container__tab\"\r\n\t\t\t[class.container__tab--active]=\"tab.key() === activeTab()\"\r\n\t\t>\r\n\t\t\t@if (tab.icon()) {\r\n\t\t\t\t<fkt-icon [name]=\"tab.icon()!\"/>\r\n\t\t\t}\r\n\r\n\t\t\t<p class=\"m-0\">{{ tab.label() }}</p>\r\n\r\n\t\t</div>\r\n\t}\r\n</div>\r\n\r\n<div class=\"content\">\r\n\t@if (activeTabComponent()) {\r\n\t\t<ng-container [ngTemplateOutlet]=\"activeTabComponent()?.template()\"/>\r\n\t}\r\n</div>\r\n", styles: ["*{box-sizing:border-box}p{margin:0}:host{display:flex;flex-direction:column}.container{display:flex;flex-direction:column;border:solid 1px var(--color-gray-300);overflow:hidden}.container__tab{display:flex;padding:var(--space-md);width:100%;gap:var(--space-xs);justify-content:center;border-color:transparent;border-left:solid 1px var(--color-gray-300);cursor:pointer;transition:var(--transition-base)}.container__tab:hover{background-color:var(--color-gray-200)}.container__tab--active{border-bottom:solid 2px var(--color-gray-500)}.content{display:flex;width:100%;padding:var(--space-md)}.content>*{width:100%}\n"], dependencies: [{ kind: "component", type: FktIconComponent, selector: "fkt-icon", inputs: ["name"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
}
__decorate([
    MarkUsed()
], FktTabsListComponent.prototype, "selectFirstTab", void 0);
__decorate([
    MarkUsed()
], FktTabsListComponent.prototype, "verifyUnique", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktTabsListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-tabs-list', imports: [
                        FktIconComponent,
                        NgTemplateOutlet
                    ], template: "<div class=\"container\">\r\n\t@for (tab of tabs(); track tab.key()) {\r\n\t\t<div\r\n\t\t\t(click)=\"selectTab(tab.key())\"\r\n\t\t\tclass=\"container__tab\"\r\n\t\t\t[class.container__tab--active]=\"tab.key() === activeTab()\"\r\n\t\t>\r\n\t\t\t@if (tab.icon()) {\r\n\t\t\t\t<fkt-icon [name]=\"tab.icon()!\"/>\r\n\t\t\t}\r\n\r\n\t\t\t<p class=\"m-0\">{{ tab.label() }}</p>\r\n\r\n\t\t</div>\r\n\t}\r\n</div>\r\n\r\n<div class=\"content\">\r\n\t@if (activeTabComponent()) {\r\n\t\t<ng-container [ngTemplateOutlet]=\"activeTabComponent()?.template()\"/>\r\n\t}\r\n</div>\r\n", styles: ["*{box-sizing:border-box}p{margin:0}:host{display:flex;flex-direction:column}.container{display:flex;flex-direction:column;border:solid 1px var(--color-gray-300);overflow:hidden}.container__tab{display:flex;padding:var(--space-md);width:100%;gap:var(--space-xs);justify-content:center;border-color:transparent;border-left:solid 1px var(--color-gray-300);cursor:pointer;transition:var(--transition-base)}.container__tab:hover{background-color:var(--color-gray-200)}.container__tab--active{border-bottom:solid 2px var(--color-gray-500)}.content{display:flex;width:100%;padding:var(--space-md)}.content>*{width:100%}\n"] }]
        }], propDecorators: { selectFirstTab: [], verifyUnique: [] } });

/**
 * Generated bundle index. Do not edit.
 */

export { FktTabComponent, FktTabLazyDirective, FktTabsListComponent };
//# sourceMappingURL=frakton-ng-tabs.mjs.map
