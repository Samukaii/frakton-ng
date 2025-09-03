import * as _angular_core from '@angular/core';
import { FktIconName } from 'frakton-ng/icon';
import { Prettify, FktComponentInputs } from 'frakton-ng/internal/types';

declare class FktButtonComponent {
    loading: _angular_core.InputSignal<boolean>;
    disabled: _angular_core.InputSignal<boolean>;
    text: _angular_core.InputSignal<string>;
    loadingText: _angular_core.InputSignal<string>;
    color: _angular_core.InputSignal<"red" | "primary" | "yellow" | "green" | "blue">;
    theme: _angular_core.InputSignal<string>;
    variant: _angular_core.InputSignal<string>;
    icon: _angular_core.InputSignal<FktIconName | undefined>;
    iconPosition: _angular_core.InputSignal<"left" | "right">;
    protected classes: _angular_core.Signal<string>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktButtonComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktButtonComponent, "fkt-button", never, { "loading": { "alias": "loading"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "text": { "alias": "text"; "required": false; "isSignal": true; }; "loadingText": { "alias": "loadingText"; "required": false; "isSignal": true; }; "color": { "alias": "color"; "required": false; "isSignal": true; }; "theme": { "alias": "theme"; "required": false; "isSignal": true; }; "variant": { "alias": "variant"; "required": false; "isSignal": true; }; "icon": { "alias": "icon"; "required": false; "isSignal": true; }; "iconPosition": { "alias": "iconPosition"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare const fktButtonVariants: string[];
declare const fktButtonThemes: string[];
type FktButtonVariant = typeof fktButtonVariants[number];
type FktButtonTheme = typeof fktButtonThemes[number];
type FktButtonAction<Context = any> = Prettify<Partial<FktComponentInputs<FktButtonComponent>> & {
    tooltip?: string;
    identifier: string;
    condition?: boolean;
    click?: (context: Context) => void;
}>;

export { FktButtonComponent, fktButtonThemes, fktButtonVariants };
export type { FktButtonAction, FktButtonTheme, FktButtonVariant };
