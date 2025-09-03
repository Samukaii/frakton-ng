import * as frakton_ng_icon from 'frakton-ng/icon';
import * as _angular_core from '@angular/core';

declare class FktButtonsListComponent<T> {
    context: _angular_core.InputSignal<T | undefined>;
    orientation: _angular_core.InputSignal<"horizontal" | "vertical">;
    fill: _angular_core.InputSignalWithTransform<boolean, unknown>;
    verticalAlignment: _angular_core.InputSignal<"start" | "space-between" | "space-evenly" | "space-around" | "end">;
    horizontalAlignment: _angular_core.InputSignal<"start" | "space-between" | "space-evenly" | "space-around" | "end">;
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
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktButtonsListComponent<any>, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktButtonsListComponent<any>, "fkt-buttons-list", never, { "context": { "alias": "context"; "required": false; "isSignal": true; }; "orientation": { "alias": "orientation"; "required": false; "isSignal": true; }; "fill": { "alias": "fill"; "required": false; "isSignal": true; }; "verticalAlignment": { "alias": "verticalAlignment"; "required": false; "isSignal": true; }; "horizontalAlignment": { "alias": "horizontalAlignment"; "required": false; "isSignal": true; }; "actions": { "alias": "actions"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare const fktButtonsListOrientations: readonly ["vertical", "horizontal"];
type FktButtonsListOrientation = typeof fktButtonsListOrientations[number];

export { FktButtonsListComponent, fktButtonsListOrientations };
export type { FktButtonsListOrientation };
