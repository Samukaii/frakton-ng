import * as _angular_core from '@angular/core';
import { FktBadgeColor } from 'frakton-ng/badge';

interface FktBadge<Id extends string = string> {
    id: Id;
    name: string;
    color: FktBadgeColor;
}

declare class FktBadgeSelectorComponent<Id extends string> {
    options: _angular_core.InputSignal<FktBadge<Id>[]>;
    currentBadgeId: _angular_core.ModelSignal<Id | undefined>;
    private overlay;
    private ref;
    private elementRef;
    protected selectedOption: _angular_core.Signal<FktBadge<Id> | undefined>;
    protected select(): void;
    private close;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktBadgeSelectorComponent<any>, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktBadgeSelectorComponent<any>, "fkt-badge-selector", never, { "options": { "alias": "options"; "required": true; "isSignal": true; }; "currentBadgeId": { "alias": "currentBadgeId"; "required": false; "isSignal": true; }; }, { "currentBadgeId": "currentBadgeIdChange"; }, never, never, true, never>;
}

export { FktBadgeSelectorComponent };
export type { FktBadge };
