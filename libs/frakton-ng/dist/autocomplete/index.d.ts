import * as frakton_ng_icon from 'frakton-ng/icon';
import * as _angular_core from '@angular/core';
import { SignalFormControl, SignalFormControlTransformer } from 'frakton-ng/forms';
import { FktNoResults } from 'frakton-ng/no-results';

interface FktAutocompleteOption {
    value: string | number;
    label: string;
}

declare class FktAutocompleteComponent {
    control: _angular_core.InputSignal<SignalFormControl<any>>;
    options: _angular_core.InputSignal<FktAutocompleteOption[]>;
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
    enableAutoCreation: _angular_core.InputSignal<boolean>;
    noResults: _angular_core.InputSignal<FktNoResults>;
    loading: _angular_core.InputSignal<boolean>;
    placeholder: _angular_core.InputSignal<string>;
    label: _angular_core.InputSignal<string>;
    search: _angular_core.OutputEmitterRef<string>;
    private overlayService;
    private inputComponent;
    protected allOptions: _angular_core.Signal<FktAutocompleteOption[]>;
    transformer: SignalFormControlTransformer;
    protected closeOverlayOnOutsideClick: {
        destroy: () => void;
    };
    protected openOverlay(): void;
    private overlay;
    protected selectedOption: _angular_core.Signal<FktAutocompleteOption | null>;
    protected selectOption(option: FktAutocompleteOption): void;
    private closeOverlay;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktAutocompleteComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktAutocompleteComponent, "fkt-autocomplete", never, { "control": { "alias": "control"; "required": true; "isSignal": true; }; "options": { "alias": "options"; "required": false; "isSignal": true; }; "actions": { "alias": "actions"; "required": false; "isSignal": true; }; "enableAutoCreation": { "alias": "enableAutoCreation"; "required": false; "isSignal": true; }; "noResults": { "alias": "noResults"; "required": false; "isSignal": true; }; "loading": { "alias": "loading"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "label": { "alias": "label"; "required": false; "isSignal": true; }; }, { "search": "search"; }, never, never, true, never>;
}

declare const AUTOCOMPLETE_AUTO_CREATED_OPTION = "autocomplete-auto-created-option";

export { AUTOCOMPLETE_AUTO_CREATED_OPTION, FktAutocompleteComponent };
export type { FktAutocompleteOption };
