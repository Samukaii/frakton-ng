import * as frakton_ng_icon from 'frakton-ng/icon';
import { FktIconName } from 'frakton-ng/icon';
import * as _angular_core from '@angular/core';
import { FktIdentifiable } from 'frakton-ng/core';
import { FktNoResults } from 'frakton-ng/no-results';
import { FktButtonAction } from 'frakton-ng/button';
import { FktComponentData } from 'frakton-ng/internal/types';

declare class FktTableCellDefaultComponent {
    classes: _angular_core.InputSignal<string[] | undefined>;
    value: _angular_core.InputSignal<string>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktTableCellDefaultComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktTableCellDefaultComponent, "fkt-table-cell-default", never, { "classes": { "alias": "classes"; "required": false; "isSignal": true; }; "value": { "alias": "value"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class FktTableCellWithActionComponent {
    text: _angular_core.InputSignal<{
        value: string;
        classes?: string[];
    }>;
    actions: _angular_core.InputSignal<{
        loading?: boolean | undefined;
        disabled?: boolean | undefined;
        text?: string | undefined;
        loadingText?: string | undefined;
        color?: "red" | "primary" | "yellow" | "green" | "blue" | undefined;
        theme?: string | undefined;
        variant?: string | undefined;
        iconPosition?: "left" | "right" | undefined;
        icon?: frakton_ng_icon.FktIconName | undefined;
        tooltip?: string | undefined;
        identifier: string;
        condition?: boolean | undefined;
        click?: ((context: any) => void) | undefined;
    }[]>;
    protected getClasses(classes?: string[]): string;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktTableCellWithActionComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktTableCellWithActionComponent, "fkt-table-cells-action", never, { "text": { "alias": "text"; "required": true; "isSignal": true; }; "actions": { "alias": "actions"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class FktTableCellBadgeComponent {
    text: _angular_core.InputSignal<string>;
    color: _angular_core.InputSignal<"red" | "green" | "blue" | "orange">;
    variant: _angular_core.InputSignal<"opaque" | "faded" | undefined>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktTableCellBadgeComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktTableCellBadgeComponent, "fkt-table-cell-badge", never, { "text": { "alias": "text"; "required": true; "isSignal": true; }; "color": { "alias": "color"; "required": true; "isSignal": true; }; "variant": { "alias": "variant"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare const tableCellsMapping: {
    readonly default: typeof FktTableCellDefaultComponent;
    readonly 'with-action': typeof FktTableCellWithActionComponent;
    readonly badge: typeof FktTableCellBadgeComponent;
};

interface FktTableAction extends FktButtonAction {
    classes?: string[];
    name: string;
    condition: boolean;
    icon: FktIconName;
    click: () => void;
}
type FktTableActionFn<T extends FktIdentifiable> = (item: T) => FktButtonAction[];
type FktTableCellsMapping = typeof tableCellsMapping;
type FktTableCellType = keyof FktTableCellsMapping;
type FktTableCell<Type extends FktTableCellType = FktTableCellType> = {
    [k in FktTableCellType]: {
        type: k;
        options: FktComponentData<InstanceType<FktTableCellsMapping[k]>>;
    };
}[Type];
interface FktTableColumn {
    position: string;
    name: string;
    cell: FktTableCell;
}
type FktTableColumnFn<T extends FktIdentifiable> = (item: T) => FktTableColumn[];
type FktTableClassesFn<T extends FktIdentifiable> = (item: T) => string;

declare class FktTableComponent<T extends FktIdentifiable> {
    data: _angular_core.InputSignal<T[]>;
    columnsFn: _angular_core.InputSignal<FktTableColumnFn<T>>;
    classesFn: _angular_core.InputSignal<FktTableClassesFn<T>>;
    actionsFn: _angular_core.InputSignal<FktTableActionFn<T> | undefined>;
    mainAction: _angular_core.InputSignal<{
        loading?: boolean | undefined;
        disabled?: boolean | undefined;
        text?: string | undefined;
        loadingText?: string | undefined;
        color?: "red" | "primary" | "yellow" | "green" | "blue" | undefined;
        theme?: string | undefined;
        variant?: string | undefined;
        iconPosition?: "left" | "right" | undefined;
        icon?: frakton_ng_icon.FktIconName | undefined;
        tooltip?: string | undefined;
        identifier: string;
        condition?: boolean | undefined;
        click?: ((context: any) => void) | undefined;
    } | undefined>;
    loading: _angular_core.InputSignal<boolean>;
    noHeaderWhenEmpty: _angular_core.InputSignalWithTransform<boolean, unknown>;
    noResults: _angular_core.InputSignal<FktNoResults>;
    headers: _angular_core.Signal<FktTableColumn[]>;
    columns: _angular_core.Signal<{
        item: T;
        columns: FktTableColumn[];
    }[]>;
    actions: _angular_core.Signal<{
        loading?: boolean | undefined;
        disabled?: boolean | undefined;
        text?: string | undefined;
        loadingText?: string | undefined;
        color?: "red" | "primary" | "yellow" | "green" | "blue" | undefined;
        theme?: string | undefined;
        variant?: string | undefined;
        iconPosition?: "left" | "right" | undefined;
        icon?: frakton_ng_icon.FktIconName | undefined;
        tooltip?: string | undefined;
        identifier: string;
        condition?: boolean | undefined;
        click?: ((context: any) => void) | undefined;
    }[][]>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktTableComponent<any>, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktTableComponent<any>, "fkt-table", never, { "data": { "alias": "data"; "required": true; "isSignal": true; }; "columnsFn": { "alias": "columnsFn"; "required": true; "isSignal": true; }; "classesFn": { "alias": "classesFn"; "required": false; "isSignal": true; }; "actionsFn": { "alias": "actionsFn"; "required": false; "isSignal": true; }; "mainAction": { "alias": "mainAction"; "required": false; "isSignal": true; }; "loading": { "alias": "loading"; "required": false; "isSignal": true; }; "noHeaderWhenEmpty": { "alias": "noHeaderWhenEmpty"; "required": false; "isSignal": true; }; "noResults": { "alias": "noResults"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

export { FktTableComponent };
export type { FktTableAction, FktTableActionFn, FktTableCell, FktTableClassesFn, FktTableColumn, FktTableColumnFn };
