import * as _angular_core from '@angular/core';
import { ViewContainerRef, Type, ComponentRef } from '@angular/core';
import * as frakton_ng_icon from 'frakton-ng/icon';
import { FktButtonAction } from 'frakton-ng/button';
import * as frakton_ng_internal_types from 'frakton-ng/internal/types';
import { FktReactiveComponentData, FktComponentData } from 'frakton-ng/internal/types';

declare class FktDialogConfirmActionComponent {
    title: _angular_core.InputSignal<string>;
    description: _angular_core.InputSignal<string | undefined>;
    actions: _angular_core.InputSignal<{
        primary?: Partial<FktButtonAction>;
        secondary?: Partial<FktButtonAction>;
    } | undefined>;
    protected confirmActions: _angular_core.Signal<{
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
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktDialogConfirmActionComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktDialogConfirmActionComponent, "fkt-dialog-confirm-action", never, { "title": { "alias": "title"; "required": true; "isSignal": true; }; "description": { "alias": "description"; "required": false; "isSignal": true; }; "actions": { "alias": "actions"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class DialogAnchorComponent {
    backdropClick: _angular_core.OutputEmitterRef<void>;
    height: _angular_core.InputSignal<string>;
    width: _angular_core.InputSignal<string>;
    maxHeight: _angular_core.InputSignal<string>;
    maxWidth: _angular_core.InputSignal<string>;
    borderRadius: _angular_core.InputSignal<string>;
    backgroundColor: _angular_core.InputSignal<string>;
    padding: _angular_core.InputSignal<string>;
    container: _angular_core.Signal<ViewContainerRef>;
    protected windowScroll: _angular_core.Signal<frakton_ng_internal_types.FktGeometryPoint>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<DialogAnchorComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<DialogAnchorComponent, "fkt-dialog-host", never, { "height": { "alias": "height"; "required": false; "isSignal": true; }; "width": { "alias": "width"; "required": false; "isSignal": true; }; "maxHeight": { "alias": "maxHeight"; "required": false; "isSignal": true; }; "maxWidth": { "alias": "maxWidth"; "required": false; "isSignal": true; }; "borderRadius": { "alias": "borderRadius"; "required": false; "isSignal": true; }; "backgroundColor": { "alias": "backgroundColor"; "required": false; "isSignal": true; }; "padding": { "alias": "padding"; "required": false; "isSignal": true; }; }, { "backdropClick": "backdropClick"; }, never, never, true, never>;
}

interface FktConfirmActionOptions extends FktComponentData<FktDialogConfirmActionComponent> {
    backdropClick?: () => void;
}
interface FktDialogOptions<T> {
    component: Type<T>;
    data: FktReactiveComponentData<T>;
    panelOptions?: Partial<FktReactiveComponentData<DialogAnchorComponent>>;
}

declare class FktDialogService {
    private anchorService;
    private dialogs;
    open<T>(options: FktDialogOptions<T>): {
        componentRef: ComponentRef<T>;
        close: () => void;
    };
    confirm(options: FktConfirmActionOptions): {
        componentRef: ComponentRef<FktDialogConfirmActionComponent>;
        close: () => void;
    };
    closeAll(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktDialogService, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<FktDialogService>;
}

export { FktDialogService };
export type { FktConfirmActionOptions, FktDialogOptions };
