import * as _angular_core from '@angular/core';

declare class FktBadgeComponent {
    text: _angular_core.InputSignal<string | undefined>;
    color: _angular_core.InputSignal<"green" | "red" | "blue" | "orange">;
    variant: _angular_core.InputSignal<"opaque" | "faded">;
    protected classes: _angular_core.Signal<string[]>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktBadgeComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktBadgeComponent, "fkt-badge", never, { "text": { "alias": "text"; "required": false; "isSignal": true; }; "color": { "alias": "color"; "required": true; "isSignal": true; }; "variant": { "alias": "variant"; "required": false; "isSignal": true; }; }, {}, never, ["[badge-content]"], true, never>;
}

declare const fktBadgeColors: readonly ["green", "red", "blue", "orange"];
declare const fktBadgeVariants: readonly ["opaque", "faded"];
type FktBadgeColor = typeof fktBadgeColors[number];
type FktBadgeVariant = typeof fktBadgeVariants[number];

export { FktBadgeComponent, fktBadgeColors, fktBadgeVariants };
export type { FktBadgeColor, FktBadgeVariant };
