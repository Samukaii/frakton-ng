import * as _angular_core from '@angular/core';
import { SignalFormControl } from 'frakton-ng/forms';
import { FktNoResults } from 'frakton-ng/no-results';
import { FktAutocompleteOption } from 'frakton-ng/autocomplete';

interface FktSelectOption {
    value: number | string;
    label: string;
}

declare class FktSelectComponent {
    control: _angular_core.InputSignal<SignalFormControl<any>>;
    label: _angular_core.InputSignal<string | undefined>;
    placeholder: _angular_core.InputSignal<string | undefined>;
    loading: _angular_core.InputSignal<boolean>;
    options: _angular_core.InputSignal<FktSelectOption[]>;
    noResults: _angular_core.InputSignal<FktNoResults>;
    selectOpened: _angular_core.OutputEmitterRef<void>;
    private overlayService;
    private idGenerator;
    protected labelId: string;
    protected listBoxId: string;
    protected errorId: string;
    private overlayRef;
    protected opened: _angular_core.Signal<boolean>;
    protected activeIndex: _angular_core.WritableSignal<number>;
    protected activeOptionId: _angular_core.Signal<string | null>;
    protected selectedIndex: _angular_core.Signal<number>;
    protected handleKeydown(element: HTMLDivElement, event: KeyboardEvent): undefined;
    private onKeyDownWithOverlayOpened;
    protected openOverlay(nativeElement: HTMLDivElement): void;
    protected selectedOption: _angular_core.Signal<FktSelectOption | null>;
    protected selectOption(option: FktAutocompleteOption): void;
    private closeOverlay;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktSelectComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktSelectComponent, "fkt-select", never, { "control": { "alias": "control"; "required": true; "isSignal": true; }; "label": { "alias": "label"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "loading": { "alias": "loading"; "required": false; "isSignal": true; }; "options": { "alias": "options"; "required": true; "isSignal": true; }; "noResults": { "alias": "noResults"; "required": false; "isSignal": true; }; }, { "selectOpened": "selectOpened"; }, never, never, true, never>;
}

export { FktSelectComponent };
export type { FktSelectOption };
