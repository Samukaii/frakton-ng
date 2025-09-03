import * as _angular_core from '@angular/core';

declare class FktCalendarNavigatorComponent {
    mode: _angular_core.InputSignal<"month" | "year">;
    currentDate: _angular_core.ModelSignal<Date>;
    private overlay;
    private elementRef;
    private overlayRef;
    protected openMonthModal(): void;
    protected openYearModal(): void;
    private openModal;
    private closeModal;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktCalendarNavigatorComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktCalendarNavigatorComponent, "fkt-calendar-navigator", never, { "mode": { "alias": "mode"; "required": false; "isSignal": true; }; "currentDate": { "alias": "currentDate"; "required": false; "isSignal": true; }; }, { "currentDate": "currentDateChange"; }, never, never, true, never>;
}

declare const fktCalendarNavigatorModes: readonly ["month", "year"];
type FktCalendarNavigatorMode = typeof fktCalendarNavigatorModes[number];

export { FktCalendarNavigatorComponent, fktCalendarNavigatorModes };
export type { FktCalendarNavigatorMode };
