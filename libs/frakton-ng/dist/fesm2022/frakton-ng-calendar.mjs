import * as i0 from '@angular/core';
import { input, model, output, computed, Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToClassPipe } from 'frakton-ng/internal/pipes';
import { compareDates } from 'frakton-ng/internal/utils';
import { FktNavigatorComponent } from 'frakton-ng/navigator';

class CalendarDateSelectorComponent {
    headerLess = input(false, ...(ngDevMode ? [{ debugName: "headerLess" }] : []));
    currentDate = model(new Date(), ...(ngDevMode ? [{ debugName: "currentDate" }] : []));
    configFn = input(() => ({}), ...(ngDevMode ? [{ debugName: "configFn" }] : []));
    afterSelect = output();
    yearClick = output();
    monthClick = output();
    monthPeriod = computed(() => {
        const currentDate = this.currentDate();
        const startDate = new Date();
        startDate.setHours(0, 0, 0, 0);
        startDate.setMonth(currentDate.getMonth());
        startDate.setDate(1);
        const endDate = new Date();
        endDate.setHours(23, 59, 59, 59);
        endDate.setMonth(currentDate.getMonth() + 1);
        endDate.setDate(0);
        return { startDate, endDate, daysCount: endDate.getDate() };
    }, ...(ngDevMode ? [{ debugName: "monthPeriod" }] : []));
    weekdays = computed(() => {
        const weekdaysCount = 6;
        const weekDays = [];
        for (let weekday = 0; weekday <= weekdaysCount; weekday++) {
            const now = new Date();
            now.setDate(now.getDate() + now.getDay() + weekday);
            weekDays.push(now.toISOString());
        }
        return weekDays;
    }, ...(ngDevMode ? [{ debugName: "weekdays" }] : []));
    days = computed(() => {
        const { daysCount } = this.monthPeriod();
        const today = new Date();
        const list = [];
        for (let day = 1; day <= daysCount; day++) {
            const date = new Date(this.currentDate());
            date.setDate(day);
            const isCurrentDate = compareDates(date, this.currentDate()) === 'equal';
            const isToday = compareDates(date, today) === 'equal';
            if (day === 1) {
                const weekdays = date.getDay();
                for (let weekDay = 1; weekDay <= weekdays; weekDay++) {
                    const prevMonthDate = new Date(date);
                    prevMonthDate.setDate(prevMonthDate.getDate() - weekDay);
                    list.unshift({
                        date: prevMonthDate.toISOString(),
                        classes: ['calendar__date--out-of-range'],
                        isCurrentDate: false,
                        isToday,
                    });
                }
            }
            const { classes = [], onClick } = this.configFn()(date);
            list.push({
                date: date.toISOString(),
                onClick,
                classes,
                isCurrentDate,
                isToday,
            });
            if (day === daysCount) {
                const weekdays = 6 - date.getDay();
                for (let weekDay = 1; weekDay <= weekdays; weekDay++) {
                    const nextMonthDate = new Date(date);
                    nextMonthDate.setDate(nextMonthDate.getDate() + weekDay);
                    list.push({
                        date: nextMonthDate.toISOString(),
                        classes: ['calendar__date--out-of-range'],
                        isCurrentDate: false,
                        isToday,
                    });
                }
            }
        }
        return list;
    }, ...(ngDevMode ? [{ debugName: "days" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: CalendarDateSelectorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.3", type: CalendarDateSelectorComponent, isStandalone: true, selector: "fkt-calendar-date-selector", inputs: { headerLess: { classPropertyName: "headerLess", publicName: "headerLess", isSignal: true, isRequired: false, transformFunction: null }, currentDate: { classPropertyName: "currentDate", publicName: "currentDate", isSignal: true, isRequired: false, transformFunction: null }, configFn: { classPropertyName: "configFn", publicName: "configFn", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { currentDate: "currentDateChange", afterSelect: "afterSelect", yearClick: "yearClick", monthClick: "monthClick" }, ngImport: i0, template: "<div class=\"calendar\">\r\n\t@for (weekday of weekdays(); track weekday) {\r\n\t\t<div class=\"calendar__weekday\">\r\n\t\t\t{{ weekday | date: 'EEE' }}\r\n\t\t</div>\r\n\t}\r\n\t@for (day of days(); track day.date) {\r\n\t\t<div\r\n\t\t\t[class.calendar__date--clickable]=\"day.onClick\"\r\n\t\t\t[class.calendar__date--today]=\"day.isToday\"\r\n\t\t\t[class.calendar__date--current-date]=\"day.isCurrentDate\"\r\n\t\t\t(click)=\"day.onClick?.()\"\r\n\t\t\t[class]=\"'calendar__date ' + (day.classes | toClass)\">\r\n\t\t\t{{ day.date | date: 'dd' }}\r\n\t\t</div>\r\n\t}\r\n</div>\r\n", styles: [":host *{box-sizing:border-box}.calendar{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));width:100%;gap:var(--space-xs)}.calendar__weekday{text-align:center;text-transform:capitalize}.calendar__date{-webkit-user-select:none;user-select:none;transition:var(--transition-base);border:solid 1px transparent;aspect-ratio:1;display:flex;justify-content:center;align-items:center;border-radius:var(--radius-full)}.calendar__date--clickable{cursor:pointer}.calendar__date--clickable:hover{background-color:var(--color-blue-200)}.calendar__date--today{border:solid 1px var(--color-gray-500)}.calendar__date--current-date{background-color:var(--color-blue-300)}.calendar__date--out-of-range{opacity:20%}\n"], dependencies: [{ kind: "pipe", type: DatePipe, name: "date" }, { kind: "pipe", type: ToClassPipe, name: "toClass" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: CalendarDateSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-calendar-date-selector', imports: [DatePipe, ToClassPipe], template: "<div class=\"calendar\">\r\n\t@for (weekday of weekdays(); track weekday) {\r\n\t\t<div class=\"calendar__weekday\">\r\n\t\t\t{{ weekday | date: 'EEE' }}\r\n\t\t</div>\r\n\t}\r\n\t@for (day of days(); track day.date) {\r\n\t\t<div\r\n\t\t\t[class.calendar__date--clickable]=\"day.onClick\"\r\n\t\t\t[class.calendar__date--today]=\"day.isToday\"\r\n\t\t\t[class.calendar__date--current-date]=\"day.isCurrentDate\"\r\n\t\t\t(click)=\"day.onClick?.()\"\r\n\t\t\t[class]=\"'calendar__date ' + (day.classes | toClass)\">\r\n\t\t\t{{ day.date | date: 'dd' }}\r\n\t\t</div>\r\n\t}\r\n</div>\r\n", styles: [":host *{box-sizing:border-box}.calendar{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));width:100%;gap:var(--space-xs)}.calendar__weekday{text-align:center;text-transform:capitalize}.calendar__date{-webkit-user-select:none;user-select:none;transition:var(--transition-base);border:solid 1px transparent;aspect-ratio:1;display:flex;justify-content:center;align-items:center;border-radius:var(--radius-full)}.calendar__date--clickable{cursor:pointer}.calendar__date--clickable:hover{background-color:var(--color-blue-200)}.calendar__date--today{border:solid 1px var(--color-gray-500)}.calendar__date--current-date{background-color:var(--color-blue-300)}.calendar__date--out-of-range{opacity:20%}\n"] }]
        }] });

const allMonths = [
    { value: 0, label: 'Janeiro' },
    { value: 1, label: 'Fevereiro' },
    { value: 2, label: 'Março' },
    { value: 3, label: 'Abril' },
    { value: 4, label: 'Maio' },
    { value: 5, label: 'Junho' },
    { value: 6, label: 'Julho' },
    { value: 7, label: 'Agosto' },
    { value: 8, label: 'Setembro' },
    { value: 9, label: 'Outubro' },
    { value: 10, label: 'Novembro' },
    { value: 11, label: 'Dezembro' },
];

class CalendarMonthSelectorComponent {
    headerLess = input(false, ...(ngDevMode ? [{ debugName: "headerLess" }] : []));
    currentDate = model(new Date(), ...(ngDevMode ? [{ debugName: "currentDate" }] : []));
    configFn = input(() => ({}), ...(ngDevMode ? [{ debugName: "configFn" }] : []));
    back = output();
    yearClick = output();
    months = allMonths.map(month => {
        const date = new Date();
        date.setMonth(month.value);
        return date;
    });
    selectMonth(selectedDate) {
        this.currentDate.update(date => {
            const currentDate = new Date(date);
            currentDate.setMonth(selectedDate.getMonth());
            return currentDate;
        });
        this.back.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: CalendarMonthSelectorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.3", type: CalendarMonthSelectorComponent, isStandalone: true, selector: "fkt-calendar-month-selector", inputs: { headerLess: { classPropertyName: "headerLess", publicName: "headerLess", isSignal: true, isRequired: false, transformFunction: null }, currentDate: { classPropertyName: "currentDate", publicName: "currentDate", isSignal: true, isRequired: false, transformFunction: null }, configFn: { classPropertyName: "configFn", publicName: "configFn", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { currentDate: "currentDateChange", back: "back", yearClick: "yearClick" }, ngImport: i0, template: "<div class=\"container\">\r\n\t@for (month of months; track month) {\r\n\t\t<div\r\n\t\t\t(click)=\"selectMonth(month)\"\r\n\t\t\tclass=\"container__month\">\r\n\t\t\t{{ month | date: 'MMMM' }}\r\n\t\t</div>\r\n\t}\r\n</div>\r\n", styles: [":host{display:block;width:100%;height:100%}.container{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));width:100%;gap:var(--space-xs)}.container__month{text-align:center;text-transform:capitalize;cursor:pointer;transition:var(--transition-base);padding:var(--space-3xs) var(--space-xs);border-radius:var(--radius-md)}.container__month:hover{background-color:var(--color-blue-100)}\n"], dependencies: [{ kind: "pipe", type: DatePipe, name: "date" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: CalendarMonthSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-calendar-month-selector', imports: [DatePipe], template: "<div class=\"container\">\r\n\t@for (month of months; track month) {\r\n\t\t<div\r\n\t\t\t(click)=\"selectMonth(month)\"\r\n\t\t\tclass=\"container__month\">\r\n\t\t\t{{ month | date: 'MMMM' }}\r\n\t\t</div>\r\n\t}\r\n</div>\r\n", styles: [":host{display:block;width:100%;height:100%}.container{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));width:100%;gap:var(--space-xs)}.container__month{text-align:center;text-transform:capitalize;cursor:pointer;transition:var(--transition-base);padding:var(--space-3xs) var(--space-xs);border-radius:var(--radius-md)}.container__month:hover{background-color:var(--color-blue-100)}\n"] }]
        }] });

class CalendarYearSelectorComponent {
    headerLess = input(false, ...(ngDevMode ? [{ debugName: "headerLess" }] : []));
    currentDate = model(new Date(), ...(ngDevMode ? [{ debugName: "currentDate" }] : []));
    configFn = input(() => ({}), ...(ngDevMode ? [{ debugName: "configFn" }] : []));
    back = output();
    years = computed(() => {
        const currentDate = this.currentDate();
        const currentYear = currentDate.getFullYear();
        const start = currentYear - (currentYear % 10);
        const end = start + 10;
        const allYears = [];
        for (let year = start; year <= end; year++) {
            const date = new Date();
            date.setFullYear(year);
            allYears.push(date);
        }
        return allYears;
    }, ...(ngDevMode ? [{ debugName: "years" }] : []));
    selectYear(selectedDate) {
        this.currentDate.update(date => {
            const currentDate = new Date(date);
            currentDate.setFullYear(selectedDate.getFullYear());
            return currentDate;
        });
        this.back.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: CalendarYearSelectorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.3", type: CalendarYearSelectorComponent, isStandalone: true, selector: "fkt-calendar-year-selector", inputs: { headerLess: { classPropertyName: "headerLess", publicName: "headerLess", isSignal: true, isRequired: false, transformFunction: null }, currentDate: { classPropertyName: "currentDate", publicName: "currentDate", isSignal: true, isRequired: false, transformFunction: null }, configFn: { classPropertyName: "configFn", publicName: "configFn", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { currentDate: "currentDateChange", back: "back" }, ngImport: i0, template: "<div class=\"container\">\r\n\t@for (year of years(); track $index) {\r\n\t\t<div\r\n\t\t\t(click)=\"selectYear(year)\"\r\n\t\t\tclass=\"container__year\">\r\n\t\t\t{{ year | date: 'yyyy' }}\r\n\t\t</div>\r\n\t}\r\n</div>\r\n", styles: [":host{display:block;width:100%;height:100%}.container{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));width:100%;gap:var(--space-xs)}.container__year{text-align:center;text-transform:capitalize;cursor:pointer;transition:var(--transition-base);padding:var(--space-3xs) var(--space-xs);border-radius:var(--radius-md)}.container__year:hover{background-color:var(--color-blue-100)}\n"], dependencies: [{ kind: "pipe", type: DatePipe, name: "date" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: CalendarYearSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-calendar-year-selector', imports: [DatePipe], template: "<div class=\"container\">\r\n\t@for (year of years(); track $index) {\r\n\t\t<div\r\n\t\t\t(click)=\"selectYear(year)\"\r\n\t\t\tclass=\"container__year\">\r\n\t\t\t{{ year | date: 'yyyy' }}\r\n\t\t</div>\r\n\t}\r\n</div>\r\n", styles: [":host{display:block;width:100%;height:100%}.container{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));width:100%;gap:var(--space-xs)}.container__year{text-align:center;text-transform:capitalize;cursor:pointer;transition:var(--transition-base);padding:var(--space-3xs) var(--space-xs);border-radius:var(--radius-md)}.container__year:hover{background-color:var(--color-blue-100)}\n"] }]
        }] });

class CalendarYearHeaderComponent {
    currentDate = model(new Date(), ...(ngDevMode ? [{ debugName: "currentDate" }] : []));
    yearClick = output();
    previous() {
        this.currentDate.update(date => {
            const copy = new Date(date);
            copy.setFullYear(copy.getFullYear() - 1);
            return copy;
        });
    }
    next() {
        this.currentDate.update(date => {
            const copy = new Date(date);
            copy.setFullYear(copy.getFullYear() + 1);
            return copy;
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: CalendarYearHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.2.3", type: CalendarYearHeaderComponent, isStandalone: true, selector: "fkt-calendar-year-header", inputs: { currentDate: { classPropertyName: "currentDate", publicName: "currentDate", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { currentDate: "currentDateChange", yearClick: "yearClick" }, ngImport: i0, template: "<fkt-navigator\r\n\t(next)=\"next()\"\r\n\t(previous)=\"previous()\"\r\n>\r\n\t<div class=\"container\">\r\n\t\t<strong (click)=\"yearClick.emit()\">\r\n\t\t\t{{ currentDate() | date: 'yyyy' }}\r\n\t\t</strong>\r\n\t</div>\r\n</fkt-navigator>\r\n", styles: [".container{display:flex;align-items:center;gap:var(--space-sm)}.container strong{cursor:pointer;transition:var(--transition-base);padding:var(--space-3xs) var(--space-xs);font-size:var(--font-size-lg);font-weight:var(--font-semibold);border-radius:var(--radius-md)}.container strong:hover{background-color:var(--color-blue-100)}\n"], dependencies: [{ kind: "component", type: FktNavigatorComponent, selector: "fkt-navigator", inputs: ["canGoToPrevious", "canGoToNext"], outputs: ["next", "previous"] }, { kind: "pipe", type: DatePipe, name: "date" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: CalendarYearHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-calendar-year-header', imports: [DatePipe, FktNavigatorComponent], template: "<fkt-navigator\r\n\t(next)=\"next()\"\r\n\t(previous)=\"previous()\"\r\n>\r\n\t<div class=\"container\">\r\n\t\t<strong (click)=\"yearClick.emit()\">\r\n\t\t\t{{ currentDate() | date: 'yyyy' }}\r\n\t\t</strong>\r\n\t</div>\r\n</fkt-navigator>\r\n", styles: [".container{display:flex;align-items:center;gap:var(--space-sm)}.container strong{cursor:pointer;transition:var(--transition-base);padding:var(--space-3xs) var(--space-xs);font-size:var(--font-size-lg);font-weight:var(--font-semibold);border-radius:var(--radius-md)}.container strong:hover{background-color:var(--color-blue-100)}\n"] }]
        }] });

class CalendarMonthHeaderComponent {
    currentDate = model(new Date(), ...(ngDevMode ? [{ debugName: "currentDate" }] : []));
    yearClick = output();
    monthClick = output();
    previous() {
        this.currentDate.update(date => {
            const copy = new Date(date);
            copy.setMonth(copy.getMonth() - 1);
            return copy;
        });
    }
    next() {
        this.currentDate.update(date => {
            const copy = new Date(date);
            copy.setMonth(copy.getMonth() + 1);
            return copy;
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: CalendarMonthHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.2.3", type: CalendarMonthHeaderComponent, isStandalone: true, selector: "fkt-calendar-month-header", inputs: { currentDate: { classPropertyName: "currentDate", publicName: "currentDate", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { currentDate: "currentDateChange", yearClick: "yearClick", monthClick: "monthClick" }, ngImport: i0, template: "<fkt-navigator\r\n\t(next)=\"next()\"\r\n\t(previous)=\"previous()\"\r\n>\r\n\t<div class=\"container\">\r\n\t\t<strong\r\n\t\t\t(click)=\"monthClick.emit()\"\r\n\t\t\tclass=\"container__month\">\r\n\t\t\t{{ currentDate() | date: 'MMMM' }}\r\n\t\t</strong>\r\n\r\n\t\t<strong\r\n\t\t\t(click)=\"yearClick.emit()\"\r\n\t\t\tclass=\"container__year\">\r\n\t\t\t{{ currentDate() | date: 'yyyy' }}\r\n\t\t</strong>\r\n\t</div>\r\n</fkt-navigator>\r\n", styles: [".container{display:flex;align-items:center;gap:var(--space-sm)}.container__month{cursor:pointer;transition:var(--transition-base);padding:var(--space-3xs) var(--space-xs);border-radius:var(--radius-md);text-transform:capitalize;font-size:var(--font-size-lg);font-weight:var(--font-semibold)}.container__month:hover{background-color:var(--color-blue-100)}.container__year{cursor:pointer;transition:var(--transition-base);padding:var(--space-3xs) var(--space-xs);border-radius:var(--radius-md);font-size:var(--font-size-lg);font-weight:var(--font-semibold)}.container__year:hover{background-color:var(--color-blue-100)}\n"], dependencies: [{ kind: "component", type: FktNavigatorComponent, selector: "fkt-navigator", inputs: ["canGoToPrevious", "canGoToNext"], outputs: ["next", "previous"] }, { kind: "pipe", type: DatePipe, name: "date" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: CalendarMonthHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-calendar-month-header', imports: [DatePipe, FktNavigatorComponent], template: "<fkt-navigator\r\n\t(next)=\"next()\"\r\n\t(previous)=\"previous()\"\r\n>\r\n\t<div class=\"container\">\r\n\t\t<strong\r\n\t\t\t(click)=\"monthClick.emit()\"\r\n\t\t\tclass=\"container__month\">\r\n\t\t\t{{ currentDate() | date: 'MMMM' }}\r\n\t\t</strong>\r\n\r\n\t\t<strong\r\n\t\t\t(click)=\"yearClick.emit()\"\r\n\t\t\tclass=\"container__year\">\r\n\t\t\t{{ currentDate() | date: 'yyyy' }}\r\n\t\t</strong>\r\n\t</div>\r\n</fkt-navigator>\r\n", styles: [".container{display:flex;align-items:center;gap:var(--space-sm)}.container__month{cursor:pointer;transition:var(--transition-base);padding:var(--space-3xs) var(--space-xs);border-radius:var(--radius-md);text-transform:capitalize;font-size:var(--font-size-lg);font-weight:var(--font-semibold)}.container__month:hover{background-color:var(--color-blue-100)}.container__year{cursor:pointer;transition:var(--transition-base);padding:var(--space-3xs) var(--space-xs);border-radius:var(--radius-md);font-size:var(--font-size-lg);font-weight:var(--font-semibold)}.container__year:hover{background-color:var(--color-blue-100)}\n"] }]
        }] });

class CalendarMultiYearHeaderComponent {
    currentDate = model(new Date(), ...(ngDevMode ? [{ debugName: "currentDate" }] : []));
    currentDecade = computed(() => {
        const currentDate = this.currentDate();
        const currentYear = currentDate.getFullYear();
        const start = currentYear - (currentYear % 10);
        const end = start + 10;
        return `${start} - ${end}`;
    }, ...(ngDevMode ? [{ debugName: "currentDecade" }] : []));
    previous() {
        this.currentDate.update(date => {
            const copy = new Date(date);
            copy.setFullYear(copy.getFullYear() - 10);
            return copy;
        });
    }
    next() {
        this.currentDate.update(date => {
            const copy = new Date(date);
            copy.setFullYear(copy.getFullYear() + 10);
            return copy;
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: CalendarMultiYearHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.2.3", type: CalendarMultiYearHeaderComponent, isStandalone: true, selector: "fkt-calendar-multi-year-header", inputs: { currentDate: { classPropertyName: "currentDate", publicName: "currentDate", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { currentDate: "currentDateChange" }, ngImport: i0, template: "<fkt-navigator\r\n\t(next)=\"next()\"\r\n\t(previous)=\"previous()\"\r\n>\r\n\t<div class=\"container\">\r\n\t\t<strong>\r\n\t\t\t{{ currentDecade() }}\r\n\t\t</strong>\r\n\t</div>\r\n</fkt-navigator>\r\n", styles: [".container{display:flex;align-items:center;gap:var(--space-sm)}.container strong{padding:0 var(--space-3xs);font-weight:var(--font-semibold);font-size:var(--font-size-lg)}\n"], dependencies: [{ kind: "component", type: FktNavigatorComponent, selector: "fkt-navigator", inputs: ["canGoToPrevious", "canGoToNext"], outputs: ["next", "previous"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: CalendarMultiYearHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-calendar-multi-year-header', imports: [FktNavigatorComponent], template: "<fkt-navigator\r\n\t(next)=\"next()\"\r\n\t(previous)=\"previous()\"\r\n>\r\n\t<div class=\"container\">\r\n\t\t<strong>\r\n\t\t\t{{ currentDecade() }}\r\n\t\t</strong>\r\n\t</div>\r\n</fkt-navigator>\r\n", styles: [".container{display:flex;align-items:center;gap:var(--space-sm)}.container strong{padding:0 var(--space-3xs);font-weight:var(--font-semibold);font-size:var(--font-size-lg)}\n"] }]
        }] });

class FktCalendarComponent {
    configFn = input(() => ({}), ...(ngDevMode ? [{ debugName: "configFn" }] : []));
    currentDate = model(new Date(), ...(ngDevMode ? [{ debugName: "currentDate" }] : []));
    borderless = input(false, ...(ngDevMode ? [{ debugName: "borderless" }] : []));
    step = signal('date', ...(ngDevMode ? [{ debugName: "step" }] : []));
    lastStep = this.step();
    selectStep(step) {
        this.lastStep = this.step();
        this.step.set(step);
    }
    goBackToLastStep() {
        if (this.lastStep === 'year')
            this.selectStep('date');
        else
            this.selectStep(this.lastStep);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktCalendarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.3", type: FktCalendarComponent, isStandalone: true, selector: "fkt-calendar", inputs: { configFn: { classPropertyName: "configFn", publicName: "configFn", isSignal: true, isRequired: false, transformFunction: null }, currentDate: { classPropertyName: "currentDate", publicName: "currentDate", isSignal: true, isRequired: false, transformFunction: null }, borderless: { classPropertyName: "borderless", publicName: "borderless", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { currentDate: "currentDateChange" }, host: { properties: { "class.with-border": "!borderless()" } }, ngImport: i0, template: "@switch (step()) {\r\n\t@case ('date') {\r\n\t\t<fkt-calendar-month-header\r\n\t\t\t(yearClick)=\"selectStep('year')\"\r\n\t\t\t(monthClick)=\"selectStep('month')\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t\t<hr class=\"vertical-separator\">\r\n\t\t<fkt-calendar-date-selector\r\n\t\t\t[configFn]=\"configFn()\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t}\r\n\t@case ('month') {\r\n\t\t<fkt-calendar-year-header\r\n\t\t\t(yearClick)=\"selectStep('year')\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t\t<hr class=\"vertical-separator\">\r\n\t\t<fkt-calendar-month-selector\r\n\t\t\t[configFn]=\"configFn()\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t\t(back)=\"goBackToLastStep()\"\r\n\t\t/>\r\n\t}\r\n\t@case ('year') {\r\n\t\t<fkt-calendar-multi-year-header\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t\t<hr class=\"vertical-separator\">\r\n\t\t<fkt-calendar-year-selector\r\n\t\t\t[configFn]=\"configFn()\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t\t(back)=\"goBackToLastStep()\"\r\n\t\t/>\r\n\t}\r\n}\r\n", styles: [":host{display:flex;flex-direction:column;width:100%;height:100%;box-sizing:border-box}:host.with-border{border:solid 1px var(--color-gray-200);padding:var(--space-md);border-radius:var(--radius-md);box-shadow:var(--shadow-md)}\n"], dependencies: [{ kind: "component", type: CalendarDateSelectorComponent, selector: "fkt-calendar-date-selector", inputs: ["headerLess", "currentDate", "configFn"], outputs: ["currentDateChange", "afterSelect", "yearClick", "monthClick"] }, { kind: "component", type: CalendarMonthSelectorComponent, selector: "fkt-calendar-month-selector", inputs: ["headerLess", "currentDate", "configFn"], outputs: ["currentDateChange", "back", "yearClick"] }, { kind: "component", type: CalendarYearSelectorComponent, selector: "fkt-calendar-year-selector", inputs: ["headerLess", "currentDate", "configFn"], outputs: ["currentDateChange", "back"] }, { kind: "component", type: CalendarYearHeaderComponent, selector: "fkt-calendar-year-header", inputs: ["currentDate"], outputs: ["currentDateChange", "yearClick"] }, { kind: "component", type: CalendarMonthHeaderComponent, selector: "fkt-calendar-month-header", inputs: ["currentDate"], outputs: ["currentDateChange", "yearClick", "monthClick"] }, { kind: "component", type: CalendarMultiYearHeaderComponent, selector: "fkt-calendar-multi-year-header", inputs: ["currentDate"], outputs: ["currentDateChange"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktCalendarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-calendar', imports: [
                        CalendarDateSelectorComponent,
                        CalendarMonthSelectorComponent,
                        CalendarYearSelectorComponent,
                        CalendarYearHeaderComponent,
                        CalendarMonthHeaderComponent,
                        CalendarMultiYearHeaderComponent,
                    ], host: {
                        '[class.with-border]': '!borderless()',
                    }, template: "@switch (step()) {\r\n\t@case ('date') {\r\n\t\t<fkt-calendar-month-header\r\n\t\t\t(yearClick)=\"selectStep('year')\"\r\n\t\t\t(monthClick)=\"selectStep('month')\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t\t<hr class=\"vertical-separator\">\r\n\t\t<fkt-calendar-date-selector\r\n\t\t\t[configFn]=\"configFn()\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t}\r\n\t@case ('month') {\r\n\t\t<fkt-calendar-year-header\r\n\t\t\t(yearClick)=\"selectStep('year')\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t\t<hr class=\"vertical-separator\">\r\n\t\t<fkt-calendar-month-selector\r\n\t\t\t[configFn]=\"configFn()\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t\t(back)=\"goBackToLastStep()\"\r\n\t\t/>\r\n\t}\r\n\t@case ('year') {\r\n\t\t<fkt-calendar-multi-year-header\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t\t<hr class=\"vertical-separator\">\r\n\t\t<fkt-calendar-year-selector\r\n\t\t\t[configFn]=\"configFn()\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t\t(back)=\"goBackToLastStep()\"\r\n\t\t/>\r\n\t}\r\n}\r\n", styles: [":host{display:flex;flex-direction:column;width:100%;height:100%;box-sizing:border-box}:host.with-border{border:solid 1px var(--color-gray-200);padding:var(--space-md);border-radius:var(--radius-md);box-shadow:var(--shadow-md)}\n"] }]
        }] });

const fktCalendarStep = ['date', 'month', 'year'];

/**
 * Generated bundle index. Do not edit.
 */

export { CalendarDateSelectorComponent, CalendarMonthHeaderComponent, CalendarMonthSelectorComponent, CalendarMultiYearHeaderComponent, CalendarYearHeaderComponent, CalendarYearSelectorComponent, FktCalendarComponent, fktCalendarStep };
//# sourceMappingURL=frakton-ng-calendar.mjs.map
