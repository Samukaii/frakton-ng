import * as _angular_core from '@angular/core';
import { FktButtonAction } from 'frakton-ng/button';
import { FktIconName } from 'frakton-ng/icon';

interface FktNoResults {
    label: string;
    icon?: {
        name: FktIconName;
        size?: string;
    };
    description?: string;
    action?: FktButtonAction;
}

declare class FktNoResultsComponent {
    noResults: _angular_core.InputSignal<FktNoResults>;
    borderless: _angular_core.InputSignalWithTransform<boolean, unknown>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktNoResultsComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktNoResultsComponent, "fkt-no-results", never, { "noResults": { "alias": "noResults"; "required": true; "isSignal": true; }; "borderless": { "alias": "borderless"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

export { FktNoResultsComponent };
export type { FktNoResults };
