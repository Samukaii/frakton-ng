import * as i0 from '@angular/core';
import { output, input, viewChild, ViewContainerRef, Component, computed, inject, Injectable } from '@angular/core';
import { injectWindowScroll } from 'frakton-ng/internal/di';
import { FktElementAnchorService } from 'frakton-ng/internal/services';
import { createComponentBindings } from 'frakton-ng/internal/utils';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { FktIconComponent } from 'frakton-ng/icon';

class DialogAnchorComponent {
    backdropClick = output();
    height = input('fit-content', ...(ngDevMode ? [{ debugName: "height" }] : []));
    width = input('100%', ...(ngDevMode ? [{ debugName: "width" }] : []));
    maxHeight = input('90vh', ...(ngDevMode ? [{ debugName: "maxHeight" }] : []));
    maxWidth = input('1200px', ...(ngDevMode ? [{ debugName: "maxWidth" }] : []));
    borderRadius = input('1rem', ...(ngDevMode ? [{ debugName: "borderRadius" }] : []));
    backgroundColor = input('white', ...(ngDevMode ? [{ debugName: "backgroundColor" }] : []));
    padding = input('1rem', ...(ngDevMode ? [{ debugName: "padding" }] : []));
    container = viewChild.required('container', { read: ViewContainerRef });
    windowScroll = injectWindowScroll();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: DialogAnchorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "20.2.3", type: DialogAnchorComponent, isStandalone: true, selector: "fkt-dialog-host", inputs: { height: { classPropertyName: "height", publicName: "height", isSignal: true, isRequired: false, transformFunction: null }, width: { classPropertyName: "width", publicName: "width", isSignal: true, isRequired: false, transformFunction: null }, maxHeight: { classPropertyName: "maxHeight", publicName: "maxHeight", isSignal: true, isRequired: false, transformFunction: null }, maxWidth: { classPropertyName: "maxWidth", publicName: "maxWidth", isSignal: true, isRequired: false, transformFunction: null }, borderRadius: { classPropertyName: "borderRadius", publicName: "borderRadius", isSignal: true, isRequired: false, transformFunction: null }, backgroundColor: { classPropertyName: "backgroundColor", publicName: "backgroundColor", isSignal: true, isRequired: false, transformFunction: null }, padding: { classPropertyName: "padding", publicName: "padding", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { backdropClick: "backdropClick" }, host: { properties: { "style.--height": "height()", "style.--width": "width()", "style.--max-width": "maxWidth()", "style.--max-height": "maxHeight()", "style.--top": "windowScroll().y + \"px\"", "style.--left": "windowScroll().x + \"px\"", "style.--border-radius": "borderRadius()", "style.--background-color": "backgroundColor()", "style.--padding": "padding()" } }, viewQueries: [{ propertyName: "container", first: true, predicate: ["container"], descendants: true, read: ViewContainerRef, isSignal: true }], ngImport: i0, template: `
        <div class="backdrop" (click)="backdropClick.emit()"></div>
        <div class="container">
            <ng-template #container></ng-template>
        </div>
    `, isInline: true, styles: ["*{box-sizing:border-box}:host{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center;top:var(--top);left:var(--left)}.backdrop{background-color:#0005;width:100%;height:100%;position:absolute;top:0}.container{overflow-x:hidden;display:flex;flex-direction:column;z-index:20;padding:var(--padding);width:var(--width);height:var(--height);max-width:var(--max-width);max-height:var(--max-height);background-color:var(--background-color);border-radius:var(--border-radius)}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: DialogAnchorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-dialog-host', template: `
        <div class="backdrop" (click)="backdropClick.emit()"></div>
        <div class="container">
            <ng-template #container></ng-template>
        </div>
    `, standalone: true, host: {
                        '[style.--height]': 'height()',
                        '[style.--width]': 'width()',
                        '[style.--max-width]': 'maxWidth()',
                        '[style.--max-height]': 'maxHeight()',
                        '[style.--top]': 'windowScroll().y + "px"',
                        '[style.--left]': 'windowScroll().x + "px"',
                        '[style.--border-radius]': 'borderRadius()',
                        '[style.--background-color]': 'backgroundColor()',
                        '[style.--padding]': 'padding()',
                    }, styles: ["*{box-sizing:border-box}:host{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center;top:var(--top);left:var(--left)}.backdrop{background-color:#0005;width:100%;height:100%;position:absolute;top:0}.container{overflow-x:hidden;display:flex;flex-direction:column;z-index:20;padding:var(--padding);width:var(--width);height:var(--height);max-width:var(--max-width);max-height:var(--max-height);background-color:var(--background-color);border-radius:var(--border-radius)}\n"] }]
        }] });

class FktDialogConfirmActionComponent {
    title = input.required(...(ngDevMode ? [{ debugName: "title" }] : []));
    description = input(...(ngDevMode ? [undefined, { debugName: "description" }] : []));
    actions = input(...(ngDevMode ? [undefined, { debugName: "actions" }] : []));
    confirmActions = computed(() => {
        const { primary, secondary } = this.actions() || {};
        const primaryAction = {
            identifier: 'primary',
            text: 'Confirmar',
            color: 'red',
            ...primary,
        };
        const secondaryAction = {
            identifier: 'secondary',
            text: 'Voltar',
            theme: 'stroked',
            ...secondary,
        };
        return [primaryAction, secondaryAction];
    }, ...(ngDevMode ? [{ debugName: "confirmActions" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktDialogConfirmActionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.3", type: FktDialogConfirmActionComponent, isStandalone: true, selector: "fkt-dialog-confirm-action", inputs: { title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: true, transformFunction: null }, description: { classPropertyName: "description", publicName: "description", isSignal: true, isRequired: false, transformFunction: null }, actions: { classPropertyName: "actions", publicName: "actions", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div class=\"content\">\r\n\t<fkt-icon\r\n\t\tname=\"exclamation-triangle\"\r\n\t\tclass=\"!text-[80px] text-red-500\"\r\n\t/>\r\n\t<h3 class=\"content__title\">\r\n\t\t{{title()}}\r\n\t</h3>\r\n\t@if (description()) {\r\n\t\t<p class=\"content__description\">\r\n\t\t\t{{ description() }}\r\n\t\t</p>\r\n\t}\r\n\r\n</div>\r\n<div class=\"actions\">\r\n\t<fkt-buttons-list\r\n\t\torientation=\"vertical\"\r\n\t\tfill\r\n\t\t[actions]=\"confirmActions()\"\r\n\t/>\r\n</div>\r\n\r\n", styles: ["*{box-sizing:border-box}p,h3{margin:0}:host{padding:var(--space-xs);width:400px;display:block}.content{display:flex;justify-content:center;flex-direction:column;align-items:center}.content fkt-icon{font-size:80px;color:var(--color-red-500)}.content__title{font-size:var(--font-size-lg);text-align:center;font-weight:var(--font-semibold);margin:var(--space-md) 0;width:300px}.content__description{color:var(--color-neutral-500)}.actions{display:flex;margin-top:var(--space-md);justify-content:center}.actions fkt-buttons-list{width:100%}\n"], dependencies: [{ kind: "component", type: FktButtonsListComponent, selector: "fkt-buttons-list", inputs: ["context", "orientation", "fill", "verticalAlignment", "horizontalAlignment", "actions"] }, { kind: "component", type: FktIconComponent, selector: "fkt-icon", inputs: ["name"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktDialogConfirmActionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-dialog-confirm-action', imports: [FktButtonsListComponent, FktIconComponent], template: "<div class=\"content\">\r\n\t<fkt-icon\r\n\t\tname=\"exclamation-triangle\"\r\n\t\tclass=\"!text-[80px] text-red-500\"\r\n\t/>\r\n\t<h3 class=\"content__title\">\r\n\t\t{{title()}}\r\n\t</h3>\r\n\t@if (description()) {\r\n\t\t<p class=\"content__description\">\r\n\t\t\t{{ description() }}\r\n\t\t</p>\r\n\t}\r\n\r\n</div>\r\n<div class=\"actions\">\r\n\t<fkt-buttons-list\r\n\t\torientation=\"vertical\"\r\n\t\tfill\r\n\t\t[actions]=\"confirmActions()\"\r\n\t/>\r\n</div>\r\n\r\n", styles: ["*{box-sizing:border-box}p,h3{margin:0}:host{padding:var(--space-xs);width:400px;display:block}.content{display:flex;justify-content:center;flex-direction:column;align-items:center}.content fkt-icon{font-size:80px;color:var(--color-red-500)}.content__title{font-size:var(--font-size-lg);text-align:center;font-weight:var(--font-semibold);margin:var(--space-md) 0;width:300px}.content__description{color:var(--color-neutral-500)}.actions{display:flex;margin-top:var(--space-md);justify-content:center}.actions fkt-buttons-list{width:100%}\n"] }]
        }] });

class FktDialogService {
    anchorService = inject(FktElementAnchorService);
    dialogs = [];
    open(options) {
        const anchor = this.anchorService.createAnchor(DialogAnchorComponent, {
            ...options?.panelOptions,
            backdropClick: () => {
                anchor.destroy();
                options?.panelOptions?.backdropClick?.();
            },
        });
        const componentRef = anchor.componentRef.instance
            .container()
            .createComponent(options.component, {
            bindings: createComponentBindings(options.component, options.data),
        });
        this.dialogs.push({ componentRef, anchor });
        return { componentRef, close: () => anchor.destroy() };
    }
    confirm(options) {
        const instance = this.open({
            component: FktDialogConfirmActionComponent,
            data: {
                ...options,
                actions: {
                    ...options.actions,
                    secondary: {
                        ...options.actions?.secondary,
                        click: () => {
                            options.actions?.secondary?.click?.(null);
                            instance.close();
                        },
                    }
                }
            },
            panelOptions: {
                width: 'fit-content',
                backdropClick: () => {
                    options?.backdropClick?.();
                }
            }
        });
        return instance;
    }
    closeAll() {
        this.dialogs.forEach(dialog => {
            dialog.anchor.destroy();
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktDialogService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktDialogService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktDialogService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FktDialogService };
//# sourceMappingURL=frakton-ng-dialog.mjs.map
