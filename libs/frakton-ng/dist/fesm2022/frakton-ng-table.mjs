import * as i0 from '@angular/core';
import { input, Component, inject, ViewContainerRef, booleanAttribute, computed } from '@angular/core';
import { ToClassPipe, CallPipe } from 'frakton-ng/internal/pipes';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { FktBadgeComponent } from 'frakton-ng/badge';
import { createComponentBindings } from 'frakton-ng/internal/utils';
import { FktSpinnerComponent } from 'frakton-ng/spinner';
import { FktNoResultsComponent } from 'frakton-ng/no-results';

class FktTableCellDefaultComponent {
    classes = input(...(ngDevMode ? [undefined, { debugName: "classes" }] : []));
    value = input.required(...(ngDevMode ? [{ debugName: "value" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktTableCellDefaultComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.2.3", type: FktTableCellDefaultComponent, isStandalone: true, selector: "fkt-table-cell-default", inputs: { classes: { classPropertyName: "classes", publicName: "classes", isSignal: true, isRequired: false, transformFunction: null }, value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0, template: "<div [class]=\"(classes() ?? []) | toClass\">\r\n  {{ value() }}\r\n</div>\r\n", styles: ["*{box-sizing:border-box}p{margin:0}\n"], dependencies: [{ kind: "pipe", type: ToClassPipe, name: "toClass" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktTableCellDefaultComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-table-cell-default', imports: [ToClassPipe], template: "<div [class]=\"(classes() ?? []) | toClass\">\r\n  {{ value() }}\r\n</div>\r\n", styles: ["*{box-sizing:border-box}p{margin:0}\n"] }]
        }] });

class FktTableCellWithActionComponent {
    text = input.required(...(ngDevMode ? [{ debugName: "text" }] : []));
    actions = input.required(...(ngDevMode ? [{ debugName: "actions" }] : []));
    getClasses(classes) {
        return classes?.join(' ') ?? '';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktTableCellWithActionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.2.3", type: FktTableCellWithActionComponent, isStandalone: true, selector: "fkt-table-cells-action", inputs: { text: { classPropertyName: "text", publicName: "text", isSignal: true, isRequired: true, transformFunction: null }, actions: { classPropertyName: "actions", publicName: "actions", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0, template: "<p [class]=\"'flex-grow break-all  w-full block ' + (text().classes | call: getClasses)\">\r\n\t{{ text().value }}\r\n</p>\r\n\r\n<fkt-buttons-list\r\n\t[actions]=\"actions()\"\r\n/>\r\n", styles: ["*{box-sizing:border-box}p{margin:0}:host{display:flex;width:100%;gap:var(--space-xs);align-items:center;justify-content:space-between}\n"], dependencies: [{ kind: "component", type: FktButtonsListComponent, selector: "fkt-buttons-list", inputs: ["context", "orientation", "fill", "verticalAlignment", "horizontalAlignment", "actions"] }, { kind: "pipe", type: CallPipe, name: "call" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktTableCellWithActionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-table-cells-action', imports: [
                        CallPipe,
                        FktButtonsListComponent
                    ], template: "<p [class]=\"'flex-grow break-all  w-full block ' + (text().classes | call: getClasses)\">\r\n\t{{ text().value }}\r\n</p>\r\n\r\n<fkt-buttons-list\r\n\t[actions]=\"actions()\"\r\n/>\r\n", styles: ["*{box-sizing:border-box}p{margin:0}:host{display:flex;width:100%;gap:var(--space-xs);align-items:center;justify-content:space-between}\n"] }]
        }] });

class FktTableCellBadgeComponent {
    text = input.required(...(ngDevMode ? [{ debugName: "text" }] : []));
    color = input.required(...(ngDevMode ? [{ debugName: "color" }] : []));
    variant = input(...(ngDevMode ? [undefined, { debugName: "variant" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktTableCellBadgeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.2.3", type: FktTableCellBadgeComponent, isStandalone: true, selector: "fkt-table-cell-badge", inputs: { text: { classPropertyName: "text", publicName: "text", isSignal: true, isRequired: true, transformFunction: null }, color: { classPropertyName: "color", publicName: "color", isSignal: true, isRequired: true, transformFunction: null }, variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<fkt-badge\r\n\t[text]=\"text()\"\r\n\t[color]=\"color()\"\r\n\t[variant]=\"variant() ?? 'opaque'\"\r\n/>\r\n", styles: [""], dependencies: [{ kind: "component", type: FktBadgeComponent, selector: "fkt-badge", inputs: ["text", "color", "variant"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktTableCellBadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-table-cell-badge', imports: [
                        FktBadgeComponent
                    ], template: "<fkt-badge\r\n\t[text]=\"text()\"\r\n\t[color]=\"color()\"\r\n\t[variant]=\"variant() ?? 'opaque'\"\r\n/>\r\n" }]
        }] });

const tableCellsMapping = {
    default: FktTableCellDefaultComponent,
    'with-action': FktTableCellWithActionComponent,
    badge: FktTableCellBadgeComponent
};

class TableCellRendererComponent {
    column = input.required(...(ngDevMode ? [{ debugName: "column" }] : []));
    viewRef = inject(ViewContainerRef);
    componentRef = null;
    ngOnInit() {
        const column = this.column();
        const cell = column.cell;
        const componentToRender = tableCellsMapping[cell.type];
        this.componentRef = this.viewRef.createComponent(componentToRender, {
            bindings: createComponentBindings(componentToRender, cell.options)
        });
    }
    ngOnDestroy() {
        this.componentRef?.destroy();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: TableCellRendererComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.2.3", type: TableCellRendererComponent, isStandalone: true, selector: "fkt-table-cell-renderer", inputs: { column: { classPropertyName: "column", publicName: "column", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0, template: '', isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: TableCellRendererComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-table-cell-renderer', imports: [], template: '' }]
        }] });

class FktTableComponent {
    data = input.required(...(ngDevMode ? [{ debugName: "data" }] : []));
    columnsFn = input.required(...(ngDevMode ? [{ debugName: "columnsFn" }] : []));
    classesFn = input(() => '', ...(ngDevMode ? [{ debugName: "classesFn" }] : []));
    actionsFn = input(...(ngDevMode ? [undefined, { debugName: "actionsFn" }] : []));
    mainAction = input(...(ngDevMode ? [undefined, { debugName: "mainAction" }] : []));
    loading = input(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    noHeaderWhenEmpty = input(false, ...(ngDevMode ? [{ debugName: "noHeaderWhenEmpty", transform: booleanAttribute }] : [{ transform: booleanAttribute }]));
    noResults = input({
        label: 'Sem resultados',
    }, ...(ngDevMode ? [{ debugName: "noResults" }] : []));
    headers = computed(() => {
        const columnsFn = this.columnsFn();
        const data = this.data();
        if (!data.length)
            return [];
        return columnsFn(this.data()[0]);
    }, ...(ngDevMode ? [{ debugName: "headers" }] : []));
    columns = computed(() => {
        const columnsFn = this.columnsFn();
        const data = this.data();
        return data.map(item => {
            return {
                item,
                columns: columnsFn(item),
            };
        });
    }, ...(ngDevMode ? [{ debugName: "columns" }] : []));
    actions = computed(() => {
        const actionsFn = this.actionsFn();
        const data = this.data();
        if (!actionsFn)
            return [];
        return data.map(item => actionsFn(item));
    }, ...(ngDevMode ? [{ debugName: "actions" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktTableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.3", type: FktTableComponent, isStandalone: true, selector: "fkt-table", inputs: { data: { classPropertyName: "data", publicName: "data", isSignal: true, isRequired: true, transformFunction: null }, columnsFn: { classPropertyName: "columnsFn", publicName: "columnsFn", isSignal: true, isRequired: true, transformFunction: null }, classesFn: { classPropertyName: "classesFn", publicName: "classesFn", isSignal: true, isRequired: false, transformFunction: null }, actionsFn: { classPropertyName: "actionsFn", publicName: "actionsFn", isSignal: true, isRequired: false, transformFunction: null }, mainAction: { classPropertyName: "mainAction", publicName: "mainAction", isSignal: true, isRequired: false, transformFunction: null }, loading: { classPropertyName: "loading", publicName: "loading", isSignal: true, isRequired: false, transformFunction: null }, noHeaderWhenEmpty: { classPropertyName: "noHeaderWhenEmpty", publicName: "noHeaderWhenEmpty", isSignal: true, isRequired: false, transformFunction: null }, noResults: { classPropertyName: "noResults", publicName: "noResults", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "@let action = mainAction();\r\n\r\n<div class=\"table-container\">\r\n\t@if ((loading() || !data().length)) {\r\n\t\t<div class=\"table-container__no-data\">\r\n\t\t\t@if (!noHeaderWhenEmpty() && !loading()) {\r\n\t\t\t\t<div class=\"table-container__no-data-header\">\r\n\t\t\t\t\t@if (action) {\r\n\t\t\t\t\t\t<fkt-buttons-list\r\n\t\t\t\t\t\t\t[actions]=\"[action]\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t}\r\n\t\t\t\t</div>\r\n\t\t\t}\r\n\r\n\t\t\t<div class=\"table-container__no-data-content\">\r\n\t\t\t\t@if (loading()) {\r\n\t\t\t\t\t<fkt-spinner [size]=\"80\" [stroke]=\"8\"/>\r\n\t\t\t\t} @else {\r\n\t\t\t\t\t@let noResultsVar = noResults();\r\n\r\n\t\t\t\t\t<fkt-no-results\r\n\t\t\t\t\t\tborderless\r\n\t\t\t\t\t\t[noResults]=\"noResultsVar\"\r\n\t\t\t\t\t/>\r\n\t\t\t\t}\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t} @else {\r\n\t\t<table class=\"table\">\r\n\t\t\t<thead class=\"table__header\">\r\n\t\t\t<tr>\r\n\t\t\t\t@for (header of headers(); track header.position) {\r\n\t\t\t\t\t<th class=\"table__header-title\">\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t{{ header.name }}\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t}\r\n\t\t\t\t@if (!!actionsFn() || !!action) {\r\n\t\t\t\t\t<th class=\"table__header-actions\">\r\n\t\t\t\t\t\t@if (action) {\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<fkt-buttons-list\r\n\t\t\t\t\t\t\t\t\t[actions]=\"[action]\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t</th>\r\n\t\t\t\t}\r\n\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t@for (item of columns(); track item) {\r\n\t\t\t\t\t<tr\r\n\t\t\t\t\t\t[class]=\"item.item | call: classesFn()\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\t@for (column of item.columns; track column.position) {\r\n\t\t\t\t\t\t\t<td class=\"table__header-cell\">\r\n\t\t\t\t\t\t\t\t<fkt-table-cell-renderer\r\n\t\t\t\t\t\t\t\t\t[column]=\"column\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\t@if (!!actionsFn() || !!action) {\r\n\t\t\t\t\t\t\t<td class=\"table__header-cell--actions\">\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<fkt-buttons-list\r\n\t\t\t\t\t\t\t\t\t\t[actions]=\"actions()[$index]\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t}\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t}\r\n</div>\r\n", styles: [":host{overflow:auto;flex:1 1 0;width:100%;display:block;border-radius:var(--space-sm);box-shadow:0 0 0 1px var(--color-gray-300)}*{box-sizing:border-box}p{margin:0}.table-container{overflow-x:auto;flex:1 1 0;width:100%;height:100%}.table-container__no-data{display:flex;flex-direction:column;height:100%}.table-container__no-data-header{display:flex;padding:var(--space-xs) var(--space-md);justify-content:flex-end;align-items:center;border-bottom-width:1px;border-color:var(--color-gray-300);min-height:70px;width:100%}.table-container__no-data-content{display:flex;padding:1rem;flex-direction:column;flex:1 1 0;justify-content:center;align-items:center;width:100%;height:100%}.table-container__no-results{display:flex;gap:var(--space-md);align-items:center;min-height:400px}.table{overflow:hidden;width:100%;font-size:var(--font-size-sm);line-height:1.25rem;table-layout:fixed;border-collapse:collapse}.table__header{text-align:left}.table__header-title{padding:var(--space-md);font-weight:var(--font-semibold);color:var(--color-gray-900)}.table__header-actions{padding:var(--space-md);width:13rem;font-weight:var(--font-bold);color:var(--color-gray-950)}.table__header-actions>div{display:flex;justify-content:flex-end;width:100%}.table__header-cell{padding:var(--space-md);color:var(--color-gray-950);overflow-wrap:break-word}.table__header-cell--actions{padding:1rem;color:var(--color-gray-950);white-space:nowrap}.table__header-cell--actions>div{display:flex;gap:var(--space-md);justify-content:flex-end}.table tbody tr:hover{background-color:var(--color-gray-200)}.table tbody tr:not(:last-child){border-bottom:solid 1px var(--color-gray-300)}.table thead{border-bottom:solid 1px var(--color-gray-300)}\n"], dependencies: [{ kind: "component", type: TableCellRendererComponent, selector: "fkt-table-cell-renderer", inputs: ["column"] }, { kind: "component", type: FktSpinnerComponent, selector: "fkt-spinner", inputs: ["size", "stroke", "color"] }, { kind: "component", type: FktButtonsListComponent, selector: "fkt-buttons-list", inputs: ["context", "orientation", "fill", "verticalAlignment", "horizontalAlignment", "actions"] }, { kind: "component", type: FktNoResultsComponent, selector: "fkt-no-results", inputs: ["noResults", "borderless"] }, { kind: "pipe", type: CallPipe, name: "call" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-table', imports: [
                        CallPipe,
                        TableCellRendererComponent,
                        FktSpinnerComponent,
                        FktButtonsListComponent,
                        FktNoResultsComponent,
                    ], template: "@let action = mainAction();\r\n\r\n<div class=\"table-container\">\r\n\t@if ((loading() || !data().length)) {\r\n\t\t<div class=\"table-container__no-data\">\r\n\t\t\t@if (!noHeaderWhenEmpty() && !loading()) {\r\n\t\t\t\t<div class=\"table-container__no-data-header\">\r\n\t\t\t\t\t@if (action) {\r\n\t\t\t\t\t\t<fkt-buttons-list\r\n\t\t\t\t\t\t\t[actions]=\"[action]\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t}\r\n\t\t\t\t</div>\r\n\t\t\t}\r\n\r\n\t\t\t<div class=\"table-container__no-data-content\">\r\n\t\t\t\t@if (loading()) {\r\n\t\t\t\t\t<fkt-spinner [size]=\"80\" [stroke]=\"8\"/>\r\n\t\t\t\t} @else {\r\n\t\t\t\t\t@let noResultsVar = noResults();\r\n\r\n\t\t\t\t\t<fkt-no-results\r\n\t\t\t\t\t\tborderless\r\n\t\t\t\t\t\t[noResults]=\"noResultsVar\"\r\n\t\t\t\t\t/>\r\n\t\t\t\t}\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t} @else {\r\n\t\t<table class=\"table\">\r\n\t\t\t<thead class=\"table__header\">\r\n\t\t\t<tr>\r\n\t\t\t\t@for (header of headers(); track header.position) {\r\n\t\t\t\t\t<th class=\"table__header-title\">\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t{{ header.name }}\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t}\r\n\t\t\t\t@if (!!actionsFn() || !!action) {\r\n\t\t\t\t\t<th class=\"table__header-actions\">\r\n\t\t\t\t\t\t@if (action) {\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<fkt-buttons-list\r\n\t\t\t\t\t\t\t\t\t[actions]=\"[action]\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t</th>\r\n\t\t\t\t}\r\n\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t@for (item of columns(); track item) {\r\n\t\t\t\t\t<tr\r\n\t\t\t\t\t\t[class]=\"item.item | call: classesFn()\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\t@for (column of item.columns; track column.position) {\r\n\t\t\t\t\t\t\t<td class=\"table__header-cell\">\r\n\t\t\t\t\t\t\t\t<fkt-table-cell-renderer\r\n\t\t\t\t\t\t\t\t\t[column]=\"column\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\t@if (!!actionsFn() || !!action) {\r\n\t\t\t\t\t\t\t<td class=\"table__header-cell--actions\">\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<fkt-buttons-list\r\n\t\t\t\t\t\t\t\t\t\t[actions]=\"actions()[$index]\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t}\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t}\r\n</div>\r\n", styles: [":host{overflow:auto;flex:1 1 0;width:100%;display:block;border-radius:var(--space-sm);box-shadow:0 0 0 1px var(--color-gray-300)}*{box-sizing:border-box}p{margin:0}.table-container{overflow-x:auto;flex:1 1 0;width:100%;height:100%}.table-container__no-data{display:flex;flex-direction:column;height:100%}.table-container__no-data-header{display:flex;padding:var(--space-xs) var(--space-md);justify-content:flex-end;align-items:center;border-bottom-width:1px;border-color:var(--color-gray-300);min-height:70px;width:100%}.table-container__no-data-content{display:flex;padding:1rem;flex-direction:column;flex:1 1 0;justify-content:center;align-items:center;width:100%;height:100%}.table-container__no-results{display:flex;gap:var(--space-md);align-items:center;min-height:400px}.table{overflow:hidden;width:100%;font-size:var(--font-size-sm);line-height:1.25rem;table-layout:fixed;border-collapse:collapse}.table__header{text-align:left}.table__header-title{padding:var(--space-md);font-weight:var(--font-semibold);color:var(--color-gray-900)}.table__header-actions{padding:var(--space-md);width:13rem;font-weight:var(--font-bold);color:var(--color-gray-950)}.table__header-actions>div{display:flex;justify-content:flex-end;width:100%}.table__header-cell{padding:var(--space-md);color:var(--color-gray-950);overflow-wrap:break-word}.table__header-cell--actions{padding:1rem;color:var(--color-gray-950);white-space:nowrap}.table__header-cell--actions>div{display:flex;gap:var(--space-md);justify-content:flex-end}.table tbody tr:hover{background-color:var(--color-gray-200)}.table tbody tr:not(:last-child){border-bottom:solid 1px var(--color-gray-300)}.table thead{border-bottom:solid 1px var(--color-gray-300)}\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FktTableComponent };
//# sourceMappingURL=frakton-ng-table.mjs.map
