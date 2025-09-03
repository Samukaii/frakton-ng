import { FktIconName } from 'frakton-ng/icon';
import * as _angular_core from '@angular/core';

interface FktMenuItem {
    name: string;
    icon: FktIconName;
    path: string;
}
interface FktMenuGroup {
    name?: string;
    items: FktMenuItem[];
}

declare class FktSideMenuComponent {
    groups: _angular_core.InputSignal<FktMenuGroup[]>;
    opened: _angular_core.ModelSignal<boolean>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktSideMenuComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktSideMenuComponent, "fkt-side-menu", never, { "groups": { "alias": "groups"; "required": true; "isSignal": true; }; "opened": { "alias": "opened"; "required": false; "isSignal": true; }; }, { "opened": "openedChange"; }, never, ["*"], true, never>;
}

export { FktSideMenuComponent };
export type { FktMenuGroup, FktMenuItem };
