import * as _angular_core from '@angular/core';
import { Prettify } from 'frakton-ng/internal/types';

interface FktCalendarDateConfig {
    date: string;
    onClick?: () => void;
    isCurrentDate: boolean;
    isToday: boolean;
    classes: string[];
}
type FktCalendarDateOptions = Prettify<Partial<Omit<FktCalendarDateConfig, 'date' | 'isCurrentDate'>>>;
type FktCalendarDateConfigFn = (date: Date) => FktCalendarDateOptions;
declare const fktCalendarStep: readonly ["date", "month", "year"];
type FktCalendarStep = typeof fktCalendarStep[number];

declare class FktCalendarComponent {
    configFn: _angular_core.InputSignal<FktCalendarDateConfigFn>;
    currentDate: _angular_core.ModelSignal<Date>;
    borderless: _angular_core.InputSignal<boolean>;
    protected step: _angular_core.WritableSignal<"date" | "month" | "year">;
    private lastStep;
    protected selectStep(step: FktCalendarStep): void;
    protected goBackToLastStep(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktCalendarComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktCalendarComponent, "fkt-calendar", never, { "configFn": { "alias": "configFn"; "required": false; "isSignal": true; }; "currentDate": { "alias": "currentDate"; "required": false; "isSignal": true; }; "borderless": { "alias": "borderless"; "required": false; "isSignal": true; }; }, { "currentDate": "currentDateChange"; }, never, never, true, never>;
}

declare class CalendarMonthHeaderComponent {
    currentDate: _angular_core.ModelSignal<Date>;
    yearClick: _angular_core.OutputEmitterRef<void>;
    monthClick: _angular_core.OutputEmitterRef<void>;
    protected previous(): void;
    protected next(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<CalendarMonthHeaderComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<CalendarMonthHeaderComponent, "fkt-calendar-month-header", never, { "currentDate": { "alias": "currentDate"; "required": false; "isSignal": true; }; }, { "currentDate": "currentDateChange"; "yearClick": "yearClick"; "monthClick": "monthClick"; }, never, never, true, never>;
}

declare class CalendarYearHeaderComponent {
    currentDate: _angular_core.ModelSignal<Date>;
    yearClick: _angular_core.OutputEmitterRef<void>;
    protected previous(): void;
    protected next(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<CalendarYearHeaderComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<CalendarYearHeaderComponent, "fkt-calendar-year-header", never, { "currentDate": { "alias": "currentDate"; "required": false; "isSignal": true; }; }, { "currentDate": "currentDateChange"; "yearClick": "yearClick"; }, never, never, true, never>;
}

declare class CalendarMultiYearHeaderComponent {
    currentDate: _angular_core.ModelSignal<Date>;
    currentDecade: _angular_core.Signal<string>;
    protected previous(): void;
    protected next(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<CalendarMultiYearHeaderComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<CalendarMultiYearHeaderComponent, "fkt-calendar-multi-year-header", never, { "currentDate": { "alias": "currentDate"; "required": false; "isSignal": true; }; }, { "currentDate": "currentDateChange"; }, never, never, true, never>;
}

declare class CalendarMonthSelectorComponent {
    headerLess: _angular_core.InputSignal<boolean>;
    currentDate: _angular_core.ModelSignal<Date>;
    configFn: _angular_core.InputSignal<FktCalendarDateConfigFn>;
    back: _angular_core.OutputEmitterRef<void>;
    yearClick: _angular_core.OutputEmitterRef<void>;
    protected months: Date[];
    selectMonth(selectedDate: Date): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<CalendarMonthSelectorComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<CalendarMonthSelectorComponent, "fkt-calendar-month-selector", never, { "headerLess": { "alias": "headerLess"; "required": false; "isSignal": true; }; "currentDate": { "alias": "currentDate"; "required": false; "isSignal": true; }; "configFn": { "alias": "configFn"; "required": false; "isSignal": true; }; }, { "currentDate": "currentDateChange"; "back": "back"; "yearClick": "yearClick"; }, never, never, true, never>;
}

declare class CalendarDateSelectorComponent {
    headerLess: _angular_core.InputSignal<boolean>;
    currentDate: _angular_core.ModelSignal<Date>;
    configFn: _angular_core.InputSignal<FktCalendarDateConfigFn>;
    afterSelect: _angular_core.OutputEmitterRef<void>;
    yearClick: _angular_core.OutputEmitterRef<void>;
    monthClick: _angular_core.OutputEmitterRef<void>;
    protected monthPeriod: _angular_core.Signal<{
        startDate: Date;
        endDate: Date;
        daysCount: number;
    }>;
    protected weekdays: _angular_core.Signal<string[]>;
    protected days: _angular_core.Signal<FktCalendarDateConfig[]>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<CalendarDateSelectorComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<CalendarDateSelectorComponent, "fkt-calendar-date-selector", never, { "headerLess": { "alias": "headerLess"; "required": false; "isSignal": true; }; "currentDate": { "alias": "currentDate"; "required": false; "isSignal": true; }; "configFn": { "alias": "configFn"; "required": false; "isSignal": true; }; }, { "currentDate": "currentDateChange"; "afterSelect": "afterSelect"; "yearClick": "yearClick"; "monthClick": "monthClick"; }, never, never, true, never>;
}

declare class CalendarYearSelectorComponent {
    headerLess: _angular_core.InputSignal<boolean>;
    currentDate: _angular_core.ModelSignal<Date>;
    configFn: _angular_core.InputSignal<FktCalendarDateConfigFn>;
    back: _angular_core.OutputEmitterRef<void>;
    years: _angular_core.Signal<Date[]>;
    selectYear(selectedDate: Date): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<CalendarYearSelectorComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<CalendarYearSelectorComponent, "fkt-calendar-year-selector", never, { "headerLess": { "alias": "headerLess"; "required": false; "isSignal": true; }; "currentDate": { "alias": "currentDate"; "required": false; "isSignal": true; }; "configFn": { "alias": "configFn"; "required": false; "isSignal": true; }; }, { "currentDate": "currentDateChange"; "back": "back"; }, never, never, true, never>;
}

export { CalendarDateSelectorComponent, CalendarMonthHeaderComponent, CalendarMonthSelectorComponent, CalendarMultiYearHeaderComponent, CalendarYearHeaderComponent, CalendarYearSelectorComponent, FktCalendarComponent, fktCalendarStep };
export type { FktCalendarDateConfig, FktCalendarDateConfigFn, FktCalendarDateOptions, FktCalendarStep };
