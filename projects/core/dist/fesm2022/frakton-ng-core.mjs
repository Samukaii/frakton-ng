import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { input, computed, Component, output, inject, ElementRef, signal, effect, Directive, TemplateRef, linkedSignal, untracked, DestroyRef, isSignal, afterRenderEffect, reflectComponentType, twoWayBinding, inputBinding, outputBinding, ChangeDetectionStrategy, contentChild, viewChild, DOCUMENT, InjectionToken, Injectable, ViewContainerRef, createComponent, Injector, booleanAttribute, Pipe, ChangeDetectorRef, model, makeStateKey, PLATFORM_ID, TransferState } from '@angular/core';
import { ValueChangeEvent, TouchedChangeEvent, ReactiveFormsModule } from '@angular/forms';
import { filter } from 'rxjs';
import { NgTemplateOutlet, formatPercent, DatePipe, isPlatformServer } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

class FieldErrorComponent {
    control = input(...(ngDevMode ? [undefined, { debugName: "control" }] : []));
    messages = [
        {
            name: 'required',
            error: () => 'Campo obrigatório',
        },
        {
            name: 'email',
            error: () => 'E-mail inválido',
        },
        {
            name: 'minlength',
            error: errors => `É necessário no mínimo ${errors['requiredLength']} caracteres`,
        },
        {
            name: 'custom',
            error: errors => errors['message'],
        },
    ];
    message = computed(() => {
        const error = this.control()?.errors();
        if (!error)
            return null;
        if (this.control()?.untouched())
            return null;
        const message = this.messages.find(message => !!error[message.name]);
        if (!message)
            return null;
        return message.error(error[message.name]);
    }, ...(ngDevMode ? [{ debugName: "message" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FieldErrorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.1.7", type: FieldErrorComponent, isStandalone: true, selector: "fkt-field-error", inputs: { control: { classPropertyName: "control", publicName: "control", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.max-h-5": "!!message()", "class.max-h-0": "!message()" } }, ngImport: i0, template: "{{message()}}\r\n", styles: ["@reference \"../../styles/tailwind.css\";:host{@apply text-xs text-red-500 transition-all h-5 overflow-hidden flex items-end;}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FieldErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-field-error', imports: [], host: {
                        '[class.max-h-5]': '!!message()',
                        '[class.max-h-0]': '!message()',
                    }, template: "{{message()}}\r\n", styles: ["@reference \"../../styles/tailwind.css\";:host{@apply text-xs text-red-500 transition-all h-5 overflow-hidden flex items-end;}\n"] }]
        }] });

const MarkUsed = () => () => {
};

class DragAndDropDirective {
    dropped = output();
    dragOverClass = input('drag-and-drop-over', ...(ngDevMode ? [{ debugName: "dragOverClass" }] : []));
    elementRef = inject(ElementRef);
    isDraggingOver = signal(false, ...(ngDevMode ? [{ debugName: "isDraggingOver" }] : []));
    updateClass = effect(() => {
        const active = this.isDraggingOver();
        const element = this.elementRef.nativeElement;
        if (active)
            element.classList.add(this.dragOverClass());
        else
            element.classList.remove(this.dragOverClass());
    }, ...(ngDevMode ? [{ debugName: "updateClass" }] : []));
    onDragOver(event) {
        event.preventDefault();
        this.isDraggingOver.set(true);
    }
    onDragLeave(event) {
        event.preventDefault();
        this.isDraggingOver.set(false);
    }
    onDrop(event) {
        event.preventDefault();
        this.isDraggingOver.set(false);
        const files = Array.from(event.dataTransfer?.files || []);
        this.dropped.emit(files);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: DragAndDropDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "20.1.7", type: DragAndDropDirective, isStandalone: true, selector: "[appDragAndDrop]", inputs: { dragOverClass: { classPropertyName: "dragOverClass", publicName: "dragOverClass", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { dropped: "dropped" }, host: { listeners: { "dragover": "onDragOver($event)", "dragleave": "onDragLeave($event)", "drop": "onDrop($event)" } }, ngImport: i0 });
}
__decorate([
    MarkUsed()
], DragAndDropDirective.prototype, "updateClass", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: DragAndDropDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appDragAndDrop]',
                    host: {
                        '(dragover)': "onDragOver($event)",
                        '(dragleave)': "onDragLeave($event)",
                        '(drop)': "onDrop($event)",
                    }
                }]
        }], propDecorators: { updateClass: [] } });

class FormControlSuffixDirective {
    templateRef = inject(TemplateRef);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FormControlSuffixDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "20.1.7", type: FormControlSuffixDirective, isStandalone: true, selector: "[fktFormControlSuffix]", ngImport: i0 });
}
__decorate([
    MarkUsed()
], FormControlSuffixDirective.prototype, "templateRef", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FormControlSuffixDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fktFormControlSuffix]'
                }]
        }], propDecorators: { templateRef: [] } });

class SignalFormControlDirective {
    signalFormControl = input.required(...(ngDevMode ? [{ debugName: "signalFormControl" }] : []));
    transformer = input(...(ngDevMode ? [undefined, { debugName: "transformer" }] : []));
    updateOn = input('blur', ...(ngDevMode ? [{ debugName: "updateOn" }] : []));
    elementRef = inject(ElementRef);
    element = this.elementRef.nativeElement;
    cursorPosition = null;
    viewValue = linkedSignal(() => this.signalFormControl().viewValue(), {
        equal: () => false,
    });
    updateValue = effect(() => {
        this.viewValue();
        this.transformer();
        untracked(() => {
            const viewValue = this.getViewValue();
            if (this.element.value === viewValue)
                return;
            if (typeof viewValue !== "string")
                return;
            if (this.element.type === 'checkbox')
                this.element.checked = !!viewValue;
            else
                this.element.value = viewValue;
            if (this.cursorPosition === null)
                return;
            this.element.setSelectionRange(this.cursorPosition, this.cursorPosition);
        });
    }, ...(ngDevMode ? [{ debugName: "updateValue" }] : []));
    updateTransformer = effect(() => {
        const transformer = this.transformer();
        if (transformer)
            this.onInput();
    }, ...(ngDevMode ? [{ debugName: "updateTransformer" }] : []));
    onInput = () => {
        const transformer = this.transformer();
        const elementValue = this.element.type === 'checkbox'
            ? this.element.checked
            : this.element.value;
        if (!!transformer) {
            const result = transformer(elementValue);
            this.cursorPosition = result.cursorPosition ?? null;
            this.viewValue.set(result.viewValue);
            this.signalFormControl().setValue(result, {
                source: 'ui',
            });
        }
        else {
            this.signalFormControl().setValue(elementValue, {
                source: 'ui',
            });
        }
        this.signalFormControl().markAsDirty();
    };
    getViewValue() {
        const originalViewValue = this.viewValue();
        const transformer = this.transformer();
        if (transformer)
            return transformer(originalViewValue).viewValue;
        return originalViewValue;
    }
    onKeyDown = () => { };
    markAsTouched = () => {
        this.signalFormControl().markAsTouched();
    };
    ngOnInit() {
        this.element.addEventListener('input', this.onInput);
        this.element.addEventListener('keydown', this.onKeyDown);
        this.element.addEventListener(this.updateOn(), this.markAsTouched);
    }
    ngOnDestroy() {
        this.element.removeEventListener('input', this.onInput);
        this.element.removeEventListener(this.updateOn(), this.markAsTouched);
        this.element.removeEventListener('keydown', this.onKeyDown);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: SignalFormControlDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "20.1.7", type: SignalFormControlDirective, isStandalone: true, selector: "input[signalFormControl],textarea[signalFormControl]", inputs: { signalFormControl: { classPropertyName: "signalFormControl", publicName: "signalFormControl", isSignal: true, isRequired: true, transformFunction: null }, transformer: { classPropertyName: "transformer", publicName: "transformer", isSignal: true, isRequired: false, transformFunction: null }, updateOn: { classPropertyName: "updateOn", publicName: "updateOn", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "disabled": "signalFormControl().disabled()" } }, ngImport: i0 });
}
__decorate([
    MarkUsed()
], SignalFormControlDirective.prototype, "updateValue", void 0);
__decorate([
    MarkUsed()
], SignalFormControlDirective.prototype, "updateTransformer", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: SignalFormControlDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[signalFormControl],textarea[signalFormControl]',
                    host: {
                        '[disabled]': 'signalFormControl().disabled()'
                    }
                }]
        }], propDecorators: { updateValue: [], updateTransformer: [] } });

class TabLazyDirective {
    template = inject(TemplateRef);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: TabLazyDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "20.1.7", type: TabLazyDirective, isStandalone: true, selector: "[appTabLazy]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: TabLazyDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appTabLazy]'
                }]
        }] });

const currencyTransformer = value => {
    const raw = typeof value === 'string' || typeof value === 'number'
        ? value.toString()
        : '0';
    const clean = raw
        .replace('R$', '')
        .replace(/\./g, '')
        .replace(',', '')
        .trim();
    let bigIntValue;
    try {
        bigIntValue = BigInt(clean);
    }
    catch {
        bigIntValue = BigInt(0);
    }
    const asNumber = Number(bigIntValue) / 100;
    const viewValue = asNumber.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    return { modelValue: bigIntValue.toString(), viewValue: viewValue };
};

const isValidDateString = (dateString) => {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
};

const isIsoDateString = (str) => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(str) &&
    isValidDateString(str);

const clampNumber = (value, min, max) => {
    return Math.min(Math.max(value, min), max);
};

const transformIso = (value) => {
    const date = new Date(value);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return {
        viewValue: `${day}/${month}/${year}`,
        modelValue: date.toISOString(),
    };
};
const toNumber$1 = (value) => {
    return +value.replace(/\D/g, '');
};
const cleanDate = (value) => {
    let clean = value.replace(/\D/g, '');
    clean = clean.slice(0, 8);
    return clean;
};
const clampDay = (value) => {
    return clampNumber(toNumber$1(value), 1, 31).toString();
};
const clampDayByMonth = (value, month) => {
    const dateMonth = toNumber$1(clampMonth(month)) - 1;
    const date = new Date();
    date.setMonth(dateMonth + 1);
    date.setDate(0);
    return clampNumber(toNumber$1(value), 1, date.getDate()).toString();
};
const clampMonth = (value) => {
    return clampNumber(toNumber$1(value), 1, 12).toString();
};
const clampYear = (value) => {
    const year = toNumber$1(value);
    return clampNumber(year, 1, 9999).toString();
};
const formatDate = (value) => {
    let clean = cleanDate(value);
    const chars = clean.split('');
    let day = '';
    let month = '';
    let year = '';
    chars.forEach((char, index) => {
        if (index === 0) {
            day += char;
            const dayNumber = toNumber$1(day);
            if (dayNumber > 3)
                day = '0' + dayNumber;
        }
        if (index === 1) {
            day += char;
            day = clampDay(day);
            day = day.padStart(2, '0');
        }
        if (index === 2) {
            month = `/${char}`;
            const monthNumber = +month.replace(/\D/g, '');
            if (monthNumber > 1)
                month = '/0' + monthNumber;
        }
        if (index === 3) {
            month += char;
            month = clampMonth(month).toString();
            month = month.padStart(2, '0');
            month = `/${month}`;
            day = clampDayByMonth(day, month);
            day = day.padStart(2, '0');
        }
        if (index === 4)
            year = `/${char}`;
        if (index > 4)
            year += char;
        if (index === 7)
            year = `/${clampYear(year).padStart(4, '0')}`;
    });
    return [day, month, year].join('');
};
const dateTransformer = value => {
    if (isIsoDateString(value) || value instanceof Date)
        return transformIso(value);
    if (typeof value !== 'string')
        return { viewValue: '', modelValue: null };
    const viewValue = formatDate(value);
    const [modelDay, modelMonth, modelYear] = viewValue.split('/');
    let modelValue = null;
    if (viewValue.length === 10) {
        modelValue = new Date(+modelYear, +modelMonth - 1, +modelDay).toISOString();
    }
    return { viewValue, modelValue: modelValue };
};

const toNumber = (value) => {
    return +value.replace(/\D/g, '');
};
const cleanHour = (value) => {
    let clean = value.replace(/\D/g, '');
    clean = clean.slice(0, 4);
    return clean;
};
const clampHour = (value) => {
    return clampNumber(toNumber(value), 0, 24).toString();
};
const clampMinutes = (value) => {
    return clampNumber(toNumber(value), 0, 59).toString();
};
const formatHour = (value) => {
    let clean = cleanHour(value);
    const chars = clean.split('');
    let hours = '';
    let minutes = '';
    chars.forEach((char, index) => {
        if (index === 0) {
            hours += char;
            const hoursNumber = toNumber(hours);
            if (hoursNumber > 2)
                hours = '0' + hoursNumber;
        }
        if (index === 1) {
            hours += char;
            hours = clampHour(hours);
            hours = hours.padStart(2, '0');
        }
        if (index === 2) {
            minutes = `h${char}`;
            const minutesNumber = toNumber(minutes);
            if (minutesNumber > 5)
                minutes = '/0' + minutesNumber;
        }
        if (index === 3) {
            minutes += char;
            minutes = clampMinutes(minutes).toString();
            minutes = minutes.padStart(2, '0');
            minutes = `h${minutes}`;
        }
    });
    return [hours, minutes].join('');
};
const hourTransformer = value => {
    if (typeof value !== 'string')
        return { viewValue: '', modelValue: null };
    const viewValue = formatHour(value);
    let modelValue = null;
    if (viewValue.length === 5)
        modelValue = viewValue;
    return { viewValue, modelValue };
};

const format = (raw, maxDecimals = 2) => {
    const clean = raw
        .replace(/[^\d.,]/g, '')
        .replace(',', '.')
        .trim();
    const MAX_PERCENT_VALUE = '100';
    const MAX_DIGITS_LESS_THAN_HUNDRED = 2;
    const decimalChar = '.';
    const hasDecimalChar = clean.includes(decimalChar);
    if (hasDecimalChar) {
        let [base, ...decimals] = clean.split(decimalChar);
        if (base.includes(MAX_PERCENT_VALUE))
            return MAX_PERCENT_VALUE;
        else
            base = base.slice(0, MAX_DIGITS_LESS_THAN_HUNDRED);
        return `${base}.${(decimals.join('') || '0').slice(0, maxDecimals)}`;
    }
    if (clean.includes(MAX_PERCENT_VALUE))
        return MAX_PERCENT_VALUE;
    return clean.slice(0, MAX_DIGITS_LESS_THAN_HUNDRED);
};
const percentTransformer = value => {
    const raw = typeof value === 'string' || typeof value === 'number'
        ? value.toString()
        : '0';
    let clean = format(raw, 3);
    const asNumber = +clean;
    let formatted = asNumber.toString().replace('.', ',');
    if (clean.includes('.') && !formatted.includes(',')) {
        formatted += ',';
    }
    const viewValue = formatted + '%';
    return {
        modelValue: +asNumber,
        viewValue: viewValue,
        cursorPosition: viewValue.length - 1,
    };
};

const normalizeLevels = {
    'year': date => {
        date.setMonth(0, 1);
        date.setHours(12, 0, 0, 0);
        return date;
    },
    'month': date => {
        date.setDate(1);
        date.setHours(12, 0, 0, 0);
        return date;
    },
    'date': date => {
        date.setHours(12, 0, 0, 0);
        return date;
    },
    'hour': date => {
        date.setMinutes(0, 0, 0);
        return date;
    },
    'minute': date => {
        date.setSeconds(0, 0);
        return date;
    },
    'seconds': date => {
        date.setMilliseconds(0);
        return date;
    },
};
const normalizeDate = (date, level) => {
    return normalizeLevels[level](new Date(date));
};

const compareDates = (first, second, level = 'date') => {
    const result = normalizeDate(first, level).getTime() -
        normalizeDate(second, level).getTime();
    if (result === 0)
        return 'equal';
    if (result > 0)
        return 'first-is-greater';
    return 'second-is-greater';
};

const controlErrorsSignal = (control) => {
    const destroyRef = inject(DestroyRef);
    const controlErrors = signal(null, ...(ngDevMode ? [{ debugName: "controlErrors", equal: () => false }] : [{ equal: () => false }]));
    let subscription = null;
    const watchFormControl = (control) => {
        let changes = control.events;
        controlErrors.set(control.errors);
        const matchEvent = (event) => {
            const events = [
                ValueChangeEvent,
                TouchedChangeEvent
            ];
            return !!events.find(targetEvent => event instanceof targetEvent);
        };
        return changes.pipe(filter(matchEvent)).subscribe(() => {
            controlErrors.set(control.errors);
        });
    };
    if (!isSignal(control)) {
        subscription = watchFormControl(control);
    }
    else {
        afterRenderEffect(() => {
            subscription = watchFormControl(control());
        });
    }
    destroyRef.onDestroy(() => {
        subscription?.unsubscribe();
    });
    return controlErrors;
};

const isWritableSignal = (value) => {
    if (!isSignal(value))
        return false;
    const conditions = [
        'update' in value,
        'set' in value,
        'asReadonly' in value,
    ];
    return conditions.every(Boolean);
};
const createComponentBindings = (component, data) => {
    const bindings = [];
    const mirror = reflectComponentType(component);
    mirror?.inputs.forEach(input => {
        const name = input.templateName;
        const isTwoWayBinding = !!mirror?.outputs.find(output => output.templateName === `${name}Change`);
        if (isTwoWayBinding) {
            if (name in data) {
                const value = data[name];
                bindings.push(twoWayBinding(input.templateName, isWritableSignal(value) ? value : signal(value)));
            }
            return;
        }
        if (name in data) {
            const value = data[name];
            bindings.push(inputBinding(input.templateName, isSignal(value) ? value : signal(value)));
        }
    });
    mirror?.outputs.forEach(output => {
        const name = output.templateName;
        if (name in data) {
            const value = data[name];
            bindings.push(outputBinding(output.templateName, value));
        }
    });
    return bindings;
};

const AUTOCOMPLETE_AUTO_CREATED_OPTION = "autocomplete-auto-created-option";

// Auto-generated icon map
const fontIconsMap = {
    "academic-cap": "",
    "adjustments-horizontal": "",
    "adjustments-vertical": "",
    "archive-box-arrow-down": "",
    "archive-box-x-mark": "",
    "archive-box": "",
    "arrow-down-circle": "",
    "arrow-down-left": "",
    "arrow-down-on-square-stack": "",
    "arrow-down-on-square": "",
    "arrow-down-right": "",
    "arrow-down-tray": "",
    "arrow-down": "",
    "arrow-left-circle": "",
    "arrow-left-end-on-rectangle": "",
    "arrow-left-start-on-rectangle": "",
    "arrow-left": "",
    "arrow-long-down": "",
    "arrow-long-left": "",
    "arrow-long-right": "",
    "arrow-long-up": "",
    "arrow-path-rounded-square": "",
    "arrow-right-circle": "",
    "arrow-right-end-on-rectangle": "",
    "arrow-right-start-on-rectangle": "",
    "arrow-right": "",
    "arrow-top-right-on-square": "",
    "arrow-trending-down": "",
    "arrow-trending-up": "",
    "arrow-turn-down-left": "",
    "arrow-turn-down-right": "",
    "arrow-turn-left-down": "",
    "arrow-turn-left-up": "",
    "arrow-turn-right-down": "",
    "arrow-turn-right-up": "",
    "arrow-turn-up-left": "",
    "arrow-turn-up-right": "",
    "arrow-up-circle": "",
    "arrow-up-left": "",
    "arrow-up-on-square-stack": "",
    "arrow-up-on-square": "",
    "arrow-up-right": "",
    "arrow-up-tray": "",
    "arrow-up": "",
    "arrow-uturn-down": "",
    "arrow-uturn-left": "",
    "arrow-uturn-right": "",
    "arrow-uturn-up": "",
    "arrow": "",
    "arrows-pointing-in": "",
    "arrows-pointing-out": "",
    "arrows-right-left": "",
    "arrows-up-down": "",
    "at-symbol": "",
    "backspace": "",
    "backward": "",
    "banknotes": "",
    "bars-2": "",
    "bars-3-bottom-left": "",
    "bars-3-bottom-right": "",
    "bars-3-center-left": "",
    "bars-3": "",
    "bars-4": "",
    "bars-arrow-down": "",
    "bars-arrow-up": "",
    "battery-0": "",
    "battery-100": "",
    "battery-50": "",
    "beaker": "",
    "bell-alert": "",
    "bell-slash": "",
    "bell-snooze": "",
    "bell": "",
    "bold": "",
    "bolt-slash": "",
    "bolt": "",
    "book-open": "",
    "bookmark-slash": "",
    "bookmark-square": "",
    "bookmark": "",
    "briefcase": "",
    "bug-ant": "",
    "building-library": "",
    "building-office-2": "",
    "building-office": "",
    "building-storefront": "",
    "cake": "",
    "calculator": "",
    "calendar-date-range": "",
    "calendar-days": "",
    "calendar": "",
    "camera": "",
    "chart-bar-square": "",
    "chart-bar": "",
    "chart-pie": "",
    "chat-bubble-bottom-center-text": "",
    "chat-bubble-bottom-center": "",
    "chat-bubble-left-ellipsis": "",
    "chat-bubble-left-right": "",
    "chat-bubble-left": "",
    "chat-bubble-oval-left-ellipsis": "",
    "chat-bubble-oval-left": "",
    "check-badge": "",
    "check-circle": "",
    "check": "",
    "chevron-double-down": "",
    "chevron-double-left": "",
    "chevron-double-right": "",
    "chevron-double-up": "",
    "chevron-down": "",
    "chevron-left": "",
    "chevron-right": "",
    "chevron-up-down": "",
    "chevron-up": "",
    "circle-stack": "",
    "clipboard-document-check": "",
    "clipboard-document-list": "",
    "clipboard-document": "",
    "clipboard": "",
    "clock": "",
    "cloud-arrow-down": "",
    "cloud-arrow-up": "",
    "cloud": "",
    "code-bracket-square": "",
    "code-bracket": "",
    "cog-6-tooth": "",
    "cog-8-tooth": "",
    "cog": "",
    "command-line": "",
    "computer-desktop": "",
    "cpu-chip": "",
    "credit-card": "",
    "cube-transparent": "",
    "cube": "",
    "currency-bangladeshi": "",
    "currency-dollar": "",
    "currency-euro": "",
    "currency-pound": "",
    "currency-rupee": "",
    "currency-yen": "",
    "cursor-arrow-rays": "",
    "cursor-arrow-ripple": "",
    "device-phone-mobile": "",
    "device-tablet": "",
    "divide": "",
    "document-arrow-down": "",
    "document-arrow-up": "",
    "document-chart-bar": "",
    "document-check": "",
    "document-currency-bangladeshi": "",
    "document-currency-dollar": "",
    "document-currency-euro": "",
    "document-currency-pound": "",
    "document-currency-rupee": "",
    "document-currency-yen": "",
    "document-duplicate": "",
    "document-magnifying-glass": "",
    "document-minus": "",
    "document-plus": "",
    "document-text": "",
    "document": "",
    "ellipsis-horizontal-circle": "",
    "ellipsis-horizontal": "",
    "ellipsis-vertical": "",
    "envelope-open": "",
    "envelope": "",
    "equals": "",
    "exclamation-circle": "",
    "exclamation-triangle": "",
    "eye-dropper": "",
    "eye-slash": "",
    "eye": "",
    "face-frown": "",
    "face-smile": "",
    "film": "",
    "finger-print": "",
    "fire": "",
    "flag": "",
    "folder-arrow-down": "",
    "folder-minus": "",
    "folder-open": "",
    "folder-plus": "",
    "folder": "",
    "forward": "",
    "funnel": "",
    "gif": "",
    "gift-top": "",
    "gift": "",
    "globe-alt": "",
    "globe-americas": "",
    "globe-asia-australia": "",
    "globe-europe-africa": "",
    "h1": "",
    "h2": "",
    "h3": "",
    "hand-raised": "",
    "hand-thumb-down": "",
    "hand-thumb-up": "",
    "hashtag": "",
    "heart": "",
    "home-modern": "",
    "home": "",
    "identification": "",
    "inbox-arrow-down": "",
    "inbox-stack": "",
    "inbox": "",
    "information-circle": "",
    "italic": "",
    "key": "",
    "language": "",
    "lifebuoy": "",
    "light-bulb": "",
    "link-slash": "",
    "link": "",
    "list-bullet": "",
    "lock-closed": "",
    "lock-open": "",
    "magnifying-glass-circle": "",
    "magnifying-glass-minus": "",
    "magnifying-glass-plus": "",
    "magnifying-glass": "",
    "map-pin": "",
    "map": "",
    "megaphone": "",
    "microphone": "",
    "minus-circle": "",
    "minus": "",
    "moon": "",
    "musical-note": "",
    "newspaper": "",
    "no-symbol": "",
    "numbered-list": "",
    "output": "",
    "paint-brush": "",
    "paper-airplane": "",
    "paper-clip": "",
    "pause-circle": "",
    "pause": "",
    "pencil-square": "",
    "pencil": "",
    "percent-badge": "",
    "phone-arrow-down-left": "",
    "phone-arrow-up-right": "",
    "phone-x-mark": "",
    "phone": "",
    "photo": "",
    "play-circle": "",
    "play-pause": "",
    "play": "",
    "plus-circle": "",
    "plus": "",
    "power": "",
    "presentation-chart-bar": "",
    "presentation-chart-line": "",
    "printer": "",
    "puzzle-piece": "",
    "qr-code": "",
    "question-mark-circle": "",
    "queue-list": "",
    "radio": "",
    "receipt-percent": "",
    "receipt-refund": "",
    "rectangle-group": "",
    "rectangle-stack": "",
    "rocket-launch": "",
    "rss": "",
    "scale": "",
    "scissors": "",
    "server-stack": "",
    "server": "",
    "share": "",
    "shield-check": "",
    "shield-exclamation": "",
    "shopping-bag": "",
    "shopping-cart": "",
    "signal-slash": "",
    "signal": "",
    "slash": "",
    "sparkles": "",
    "speaker-wave": "",
    "speaker-x-mark": "",
    "square-2-stack": "",
    "square-3-stack-3d": "",
    "squares-2x2": "",
    "squares-plus": "",
    "star": "",
    "stop-circle": "",
    "stop": "",
    "strikethrough": "",
    "sun": "",
    "swatch": "",
    "table-cells": "",
    "tag": "",
    "ticket": "",
    "trash": "",
    "trophy": "",
    "truck": "",
    "tv": "",
    "underline": "",
    "user-circle": "",
    "user-group": "",
    "user-minus": "",
    "user-plus": "",
    "user": "",
    "users": "",
    "variable": "",
    "video-camera-slash": "",
    "video-camera": "",
    "view-columns": "",
    "viewfinder-circle": "",
    "wallet": "",
    "wifi": "",
    "window": "",
    "wrench-screwdriver": "",
    "wrench": "",
    "x-circle": "",
    "x-mark": "",
};

class FktIconComponent {
    name = input.required(...(ngDevMode ? [{ debugName: "name" }] : []));
    icon = computed(() => fontIconsMap[this.name()], ...(ngDevMode ? [{ debugName: "icon" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.1.7", type: FktIconComponent, isStandalone: true, selector: "fkt-icon", inputs: { name: { classPropertyName: "name", publicName: "name", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0, template: "{{ icon() }}\r\n", styles: [":host{line-height:1!important;font-family:FintraxIcons,sans-serif;font-size:1.25rem;width:fit-content;height:fit-content;min-height:0}:host.transition{transition:all .15s cubic-bezier(.4,0,.2,1)}:host.rounded-full{border-radius:9999px}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-icon', imports: [], template: "{{ icon() }}\r\n", styles: [":host{line-height:1!important;font-family:FintraxIcons,sans-serif;font-size:1.25rem;width:fit-content;height:fit-content;min-height:0}:host.transition{transition:all .15s cubic-bezier(.4,0,.2,1)}:host.rounded-full{border-radius:9999px}\n"] }]
        }] });

class FktButtonComponent {
    loading = input(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    disabled = input(false, ...(ngDevMode ? [{ debugName: "disabled" }] : []));
    text = input('', ...(ngDevMode ? [{ debugName: "text" }] : []));
    loadingText = input('', ...(ngDevMode ? [{ debugName: "loadingText" }] : []));
    color = input('primary', ...(ngDevMode ? [{ debugName: "color" }] : []));
    theme = input('raised', ...(ngDevMode ? [{ debugName: "theme" }] : []));
    variant = input('rounded', ...(ngDevMode ? [{ debugName: "variant" }] : []));
    icon = input(...(ngDevMode ? [undefined, { debugName: "icon" }] : []));
    iconPosition = input('right', ...(ngDevMode ? [{ debugName: "iconPosition" }] : []));
    classes = computed(() => {
        let classes = '';
        classes += `theme-${this.theme()}`;
        classes += ` color-${this.color()}`;
        if (this.variant())
            classes += ` variant-${this.variant()}`;
        if (!this.text())
            classes += ` icon-only`;
        return classes;
    }, ...(ngDevMode ? [{ debugName: "classes" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.1.7", type: FktButtonComponent, isStandalone: true, selector: "fkt-button", inputs: { loading: { classPropertyName: "loading", publicName: "loading", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, text: { classPropertyName: "text", publicName: "text", isSignal: true, isRequired: false, transformFunction: null }, loadingText: { classPropertyName: "loadingText", publicName: "loadingText", isSignal: true, isRequired: false, transformFunction: null }, color: { classPropertyName: "color", publicName: "color", isSignal: true, isRequired: false, transformFunction: null }, theme: { classPropertyName: "theme", publicName: "theme", isSignal: true, isRequired: false, transformFunction: null }, variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null }, icon: { classPropertyName: "icon", publicName: "icon", isSignal: true, isRequired: false, transformFunction: null }, iconPosition: { classPropertyName: "iconPosition", publicName: "iconPosition", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<button (click)=\"$event.preventDefault()\" [disabled]=\"disabled() || loading()\" [class]=\"classes()\">\r\n\t@if (loading()) {\r\n\t\t<div class=\"spinner\"></div>\r\n\t\t<p>{{ loadingText() || text() }}</p>\r\n\t} @else {\r\n\t\t<div\r\n\t\t\t[class.icon-left]=\"iconPosition() === 'left'\"\r\n\t\t\tclass=\"button-content\"\r\n\t\t>\r\n\t\t\t@let iconName = icon();\r\n\t\t\t@if (text()) {\r\n\t\t\t\t<p>{{ text() }}</p>\r\n\t\t\t}\r\n\t\t\t@if (iconName) {\r\n\t\t\t\t<fkt-icon [name]=\"iconName\"></fkt-icon>\r\n\t\t\t}\r\n\t\t</div>\r\n\t}\r\n</button>\r\n", styles: [":host{display:block}button{width:100%;display:flex;justify-content:center;cursor:pointer;border:none;background:none;font-family:inherit;font-size:inherit;outline:none}button:disabled{cursor:not-allowed}.button-content{display:flex;align-items:center;gap:.5rem}.button-content.icon-left{flex-direction:row-reverse}.spinner{width:20px;height:20px;border:2px solid #e5e7eb;border-top-color:currentColor;border-radius:50%;animation:spin 1s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}.theme-raised{transition:all .3s ease;display:flex;gap:.5rem;font-weight:600;color:#fff;border:2px solid;padding:.5rem 1rem;border-radius:9999px;box-shadow:0 4px 6px -1px #0000001a}.theme-raised:disabled{opacity:.4;box-shadow:none}.theme-raised:disabled:hover{box-shadow:none}.theme-raised:hover:not(:disabled){box-shadow:0 10px 15px -3px #0000004d}.theme-raised.variant-rounded.icon-only{padding:.5rem}.theme-raised.variant-rect{border-radius:.375rem}.theme-raised.variant-rect.icon-only{padding:.5rem}.theme-raised.color-primary{background-color:#1f2937;border-color:#1f2937}.theme-raised.color-primary:hover:not(:disabled){background-color:#374151;box-shadow:0 10px 15px -3px #1118274d}.theme-raised.color-primary:disabled:hover{background-color:#374151}.theme-raised.color-yellow{background-color:#eab308;border-color:#eab308;color:#1f2937}.theme-raised.color-yellow:hover:not(:disabled){background-color:#facc15}.theme-raised.color-yellow:disabled:hover{background-color:#ca8a04}.theme-raised.color-red{background-color:#dc2626;border-color:#dc2626}.theme-raised.color-red:hover:not(:disabled){background-color:#ef4444}.theme-raised.color-red:disabled:hover{background-color:#b91c1c}.theme-raised.color-green{background-color:#16a34a;border-color:#16a34a}.theme-raised.color-green:hover:not(:disabled){background-color:#22c55e;border-color:#22c55e}.theme-raised.color-green:disabled:hover{background-color:#15803d}.theme-stroked{transition:background-color .3s ease;display:flex;align-items:center;gap:.5rem;font-weight:600;border:2px solid;padding:.5rem 1rem;border-radius:9999px;background-color:transparent}.theme-stroked:disabled{opacity:.6;filter:grayscale(100%)}.theme-stroked.variant-rounded.icon-only{padding:.5rem}.theme-stroked.variant-rect{border-radius:.375rem}.theme-stroked.variant-rect.icon-only{padding:.5rem}.theme-stroked.color-yellow{color:#eab308;border-color:#eab308}.theme-stroked.color-yellow:hover:not(:disabled){background-color:#eab308;color:#f9fafb;border-color:#eab308}.theme-stroked.color-primary{color:#1f2937;border-color:#1f2937}.theme-stroked.color-primary:hover:not(:disabled){background-color:#1f2937;color:#f9fafb;border-color:#1f2937}.theme-stroked.color-red{color:#ef4444;border-color:#ef4444}.theme-stroked.color-red:hover:not(:disabled){background-color:#ef4444;color:#f9fafb;border-color:#ef4444}.theme-stroked.color-green{color:#22c55e;border-color:#22c55e}.theme-stroked.color-green:hover:not(:disabled){background-color:#22c55e;color:#f9fafb;border-color:#22c55e}.theme-basic{transition:all .3s ease;display:flex;align-items:center;gap:.5rem;font-weight:600;padding:.5rem 1rem;border-radius:9999px;background-color:transparent;border:none}.theme-basic:hover:not(:disabled){background-color:#00000017}.theme-basic:disabled{opacity:.6;filter:grayscale(100%);background-color:#d1d5db}.theme-basic:disabled:hover{background-color:#d1d5db}.theme-basic.variant-rounded.icon-only{padding:.5rem}.theme-basic.variant-rect{border-radius:.375rem}.theme-basic.variant-rect.icon-only{padding:.5rem}.theme-basic.color-yellow{color:#eab308}.theme-basic.color-primary{color:#1f2937}.theme-basic.color-red{color:#ef4444}.theme-basic.color-green{color:#22c55e}\n"], dependencies: [{ kind: "component", type: FktIconComponent, selector: "fkt-icon", inputs: ["name"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-button', changeDetection: ChangeDetectionStrategy.OnPush, imports: [FktIconComponent], template: "<button (click)=\"$event.preventDefault()\" [disabled]=\"disabled() || loading()\" [class]=\"classes()\">\r\n\t@if (loading()) {\r\n\t\t<div class=\"spinner\"></div>\r\n\t\t<p>{{ loadingText() || text() }}</p>\r\n\t} @else {\r\n\t\t<div\r\n\t\t\t[class.icon-left]=\"iconPosition() === 'left'\"\r\n\t\t\tclass=\"button-content\"\r\n\t\t>\r\n\t\t\t@let iconName = icon();\r\n\t\t\t@if (text()) {\r\n\t\t\t\t<p>{{ text() }}</p>\r\n\t\t\t}\r\n\t\t\t@if (iconName) {\r\n\t\t\t\t<fkt-icon [name]=\"iconName\"></fkt-icon>\r\n\t\t\t}\r\n\t\t</div>\r\n\t}\r\n</button>\r\n", styles: [":host{display:block}button{width:100%;display:flex;justify-content:center;cursor:pointer;border:none;background:none;font-family:inherit;font-size:inherit;outline:none}button:disabled{cursor:not-allowed}.button-content{display:flex;align-items:center;gap:.5rem}.button-content.icon-left{flex-direction:row-reverse}.spinner{width:20px;height:20px;border:2px solid #e5e7eb;border-top-color:currentColor;border-radius:50%;animation:spin 1s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}.theme-raised{transition:all .3s ease;display:flex;gap:.5rem;font-weight:600;color:#fff;border:2px solid;padding:.5rem 1rem;border-radius:9999px;box-shadow:0 4px 6px -1px #0000001a}.theme-raised:disabled{opacity:.4;box-shadow:none}.theme-raised:disabled:hover{box-shadow:none}.theme-raised:hover:not(:disabled){box-shadow:0 10px 15px -3px #0000004d}.theme-raised.variant-rounded.icon-only{padding:.5rem}.theme-raised.variant-rect{border-radius:.375rem}.theme-raised.variant-rect.icon-only{padding:.5rem}.theme-raised.color-primary{background-color:#1f2937;border-color:#1f2937}.theme-raised.color-primary:hover:not(:disabled){background-color:#374151;box-shadow:0 10px 15px -3px #1118274d}.theme-raised.color-primary:disabled:hover{background-color:#374151}.theme-raised.color-yellow{background-color:#eab308;border-color:#eab308;color:#1f2937}.theme-raised.color-yellow:hover:not(:disabled){background-color:#facc15}.theme-raised.color-yellow:disabled:hover{background-color:#ca8a04}.theme-raised.color-red{background-color:#dc2626;border-color:#dc2626}.theme-raised.color-red:hover:not(:disabled){background-color:#ef4444}.theme-raised.color-red:disabled:hover{background-color:#b91c1c}.theme-raised.color-green{background-color:#16a34a;border-color:#16a34a}.theme-raised.color-green:hover:not(:disabled){background-color:#22c55e;border-color:#22c55e}.theme-raised.color-green:disabled:hover{background-color:#15803d}.theme-stroked{transition:background-color .3s ease;display:flex;align-items:center;gap:.5rem;font-weight:600;border:2px solid;padding:.5rem 1rem;border-radius:9999px;background-color:transparent}.theme-stroked:disabled{opacity:.6;filter:grayscale(100%)}.theme-stroked.variant-rounded.icon-only{padding:.5rem}.theme-stroked.variant-rect{border-radius:.375rem}.theme-stroked.variant-rect.icon-only{padding:.5rem}.theme-stroked.color-yellow{color:#eab308;border-color:#eab308}.theme-stroked.color-yellow:hover:not(:disabled){background-color:#eab308;color:#f9fafb;border-color:#eab308}.theme-stroked.color-primary{color:#1f2937;border-color:#1f2937}.theme-stroked.color-primary:hover:not(:disabled){background-color:#1f2937;color:#f9fafb;border-color:#1f2937}.theme-stroked.color-red{color:#ef4444;border-color:#ef4444}.theme-stroked.color-red:hover:not(:disabled){background-color:#ef4444;color:#f9fafb;border-color:#ef4444}.theme-stroked.color-green{color:#22c55e;border-color:#22c55e}.theme-stroked.color-green:hover:not(:disabled){background-color:#22c55e;color:#f9fafb;border-color:#22c55e}.theme-basic{transition:all .3s ease;display:flex;align-items:center;gap:.5rem;font-weight:600;padding:.5rem 1rem;border-radius:9999px;background-color:transparent;border:none}.theme-basic:hover:not(:disabled){background-color:#00000017}.theme-basic:disabled{opacity:.6;filter:grayscale(100%);background-color:#d1d5db}.theme-basic:disabled:hover{background-color:#d1d5db}.theme-basic.variant-rounded.icon-only{padding:.5rem}.theme-basic.variant-rect{border-radius:.375rem}.theme-basic.variant-rect.icon-only{padding:.5rem}.theme-basic.color-yellow{color:#eab308}.theme-basic.color-primary{color:#1f2937}.theme-basic.color-red{color:#ef4444}.theme-basic.color-green{color:#22c55e}\n"] }]
        }] });

const fktButtonVariants = ['rounded', 'rect'];
const fktButtonThemes = ['raised', 'stroked', 'basic'];

class FktInputComponent {
    control = input.required(...(ngDevMode ? [{ debugName: "control" }] : []));
    label = input('', ...(ngDevMode ? [{ debugName: "label" }] : []));
    placeholder = input('', ...(ngDevMode ? [{ debugName: "placeholder" }] : []));
    inputPadding = input('.5rem 1rem', ...(ngDevMode ? [{ debugName: "inputPadding" }] : []));
    type = input('text', ...(ngDevMode ? [{ debugName: "type" }] : []));
    transformer = input(...(ngDevMode ? [undefined, { debugName: "transformer" }] : []));
    spellcheck = input(true, ...(ngDevMode ? [{ debugName: "spellcheck" }] : []));
    suffix = contentChild(FormControlSuffixDirective, ...(ngDevMode ? [{ debugName: "suffix" }] : []));
    showPassword = signal(false, ...(ngDevMode ? [{ debugName: "showPassword" }] : []));
    inputType = computed(() => {
        const type = this.type();
        const showPassword = this.showPassword();
        if (type !== 'password')
            return type;
        return showPassword ? 'text' : 'password';
    }, ...(ngDevMode ? [{ debugName: "inputType" }] : []));
    transformerValue = computed(() => {
        const transformer = this.transformer();
        if (transformer === 'currency')
            return currencyTransformer;
        if (transformer === 'percent')
            return percentTransformer;
        if (transformer === 'hour')
            return hourTransformer;
        return transformer;
    }, ...(ngDevMode ? [{ debugName: "transformerValue" }] : []));
    element = viewChild('input', ...(ngDevMode ? [{ debugName: "element", read: ElementRef }] : [{ read: ElementRef }]));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.1.7", type: FktInputComponent, isStandalone: true, selector: "fkt-input", inputs: { control: { classPropertyName: "control", publicName: "control", isSignal: true, isRequired: true, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, inputPadding: { classPropertyName: "inputPadding", publicName: "inputPadding", isSignal: true, isRequired: false, transformFunction: null }, type: { classPropertyName: "type", publicName: "type", isSignal: true, isRequired: false, transformFunction: null }, transformer: { classPropertyName: "transformer", publicName: "transformer", isSignal: true, isRequired: false, transformFunction: null }, spellcheck: { classPropertyName: "spellcheck", publicName: "spellcheck", isSignal: true, isRequired: false, transformFunction: null } }, queries: [{ propertyName: "suffix", first: true, predicate: FormControlSuffixDirective, descendants: true, isSignal: true }], viewQueries: [{ propertyName: "element", first: true, predicate: ["input"], descendants: true, read: ElementRef, isSignal: true }], ngImport: i0, template: "<div class=\"flex gap-2 items-center\">\r\n\t<label [class.!text-red-500]=\"!!error.message()\"\r\n\t\t   [class.float]=\"control().viewValue()\"\r\n\t\t   class=\"text-gray-800 font-medium text-sm mb-1\">{{ label() }}</label>\r\n</div>\r\n\r\n<div class=\"relative\">\r\n\t<input\r\n\t\t[spellcheck]=\"spellcheck() ? 'true' : 'false'\"\r\n\t\t[class.!pr-10]=\"type() === 'password'\"\r\n\t\t[class.!border-red-500]=\"!!error.message()\"\r\n\t\tclass=\"!border-[1px] border-transparent\"\r\n\t\t#input\r\n\t\t[type]=\"inputType()\"\r\n\t\t[style.padding]=\"inputPadding()\"\r\n\t\t[placeholder]=\"placeholder()\"\r\n\t\t[signalFormControl]=\"control()\"\r\n\t\t[transformer]=\"transformerValue()\"\r\n\t/>\r\n\r\n\t<div class=\"absolute pointer-events-none top-0 w-full flex items-center justify-end h-full\">\r\n\t\t@if (type() === \"password\") {\r\n\t\t\t<div class=\"absolute top-2 right-2 cursor-pointer\">\r\n\t\t\t\t@if (showPassword()) {\r\n\t\t\t\t\t<fkt-button\r\n\t\t\t\t\t\tclass=\"pointer-events-auto\"\r\n\t\t\t\t\t\t(click)=\"showPassword.set(false)\"\r\n\t\t\t\t\t\ttheme=\"basic\"\r\n\t\t\t\t\t\ticon=\"eye-slash\"\r\n\t\t\t\t\t/>\r\n\t\t\t\t} @else {\r\n\t\t\t\t\t<fkt-button\r\n\t\t\t\t\t\tclass=\"pointer-events-auto\"\r\n\t\t\t\t\t\t(click)=\"showPassword.set(true)\"\r\n\t\t\t\t\t\ttheme=\"basic\"\r\n\t\t\t\t\t\ticon=\"eye\"\r\n\t\t\t\t\t/>\r\n\t\t\t\t}\r\n\t\t\t</div>\r\n\t\t} @else if (suffix()) {\r\n\t\t\t<div class=\"pointer-events-auto mr-2\">\r\n\t\t\t\t<ng-container\r\n\t\t\t\t\t[ngTemplateOutlet]=\"suffix()!.templateRef\"\r\n\t\t\t\t/>\r\n\t\t\t</div>\r\n\t\t}\r\n\t</div>\r\n\r\n</div>\r\n\r\n<fkt-field-error #error [control]=\"control()\" />\r\n", styles: ["@reference \"../../styles/tailwind.css\";:host{@apply block rounded-full relative mt-5 border-gray-500 transition scroll-smooth w-full;}:host input{@apply outline-none border-gray-400 min-h-[50px] w-full border-2 rounded-lg px-4 py-2 bg-transparent;}:host input::placeholder{@apply opacity-0;}:host input:disabled{@apply opacity-40 grayscale;}:host label{@apply absolute px-1 top-[15px] left-3 transition bg-white text-gray-500;}:host:focus-within label{@apply text-yellow-500 z-50 scale-90 -translate-x-1 -translate-y-[27px];}:host:focus-within input{@apply transition border-yellow-500;}:host:focus-within input::placeholder{@apply opacity-100;}:host .float{@apply z-50 scale-90 -translate-x-1 -translate-y-[27px];}:host fkt-field-error{@apply pl-3;}\n"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "component", type: FieldErrorComponent, selector: "fkt-field-error", inputs: ["control"] }, { kind: "directive", type: SignalFormControlDirective, selector: "input[signalFormControl],textarea[signalFormControl]", inputs: ["signalFormControl", "transformer", "updateOn"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: FktButtonComponent, selector: "fkt-button", inputs: ["loading", "disabled", "text", "loadingText", "color", "theme", "variant", "icon", "iconPosition"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-input', imports: [
                        ReactiveFormsModule,
                        FieldErrorComponent,
                        SignalFormControlDirective,
                        NgTemplateOutlet,
                        FktButtonComponent,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"flex gap-2 items-center\">\r\n\t<label [class.!text-red-500]=\"!!error.message()\"\r\n\t\t   [class.float]=\"control().viewValue()\"\r\n\t\t   class=\"text-gray-800 font-medium text-sm mb-1\">{{ label() }}</label>\r\n</div>\r\n\r\n<div class=\"relative\">\r\n\t<input\r\n\t\t[spellcheck]=\"spellcheck() ? 'true' : 'false'\"\r\n\t\t[class.!pr-10]=\"type() === 'password'\"\r\n\t\t[class.!border-red-500]=\"!!error.message()\"\r\n\t\tclass=\"!border-[1px] border-transparent\"\r\n\t\t#input\r\n\t\t[type]=\"inputType()\"\r\n\t\t[style.padding]=\"inputPadding()\"\r\n\t\t[placeholder]=\"placeholder()\"\r\n\t\t[signalFormControl]=\"control()\"\r\n\t\t[transformer]=\"transformerValue()\"\r\n\t/>\r\n\r\n\t<div class=\"absolute pointer-events-none top-0 w-full flex items-center justify-end h-full\">\r\n\t\t@if (type() === \"password\") {\r\n\t\t\t<div class=\"absolute top-2 right-2 cursor-pointer\">\r\n\t\t\t\t@if (showPassword()) {\r\n\t\t\t\t\t<fkt-button\r\n\t\t\t\t\t\tclass=\"pointer-events-auto\"\r\n\t\t\t\t\t\t(click)=\"showPassword.set(false)\"\r\n\t\t\t\t\t\ttheme=\"basic\"\r\n\t\t\t\t\t\ticon=\"eye-slash\"\r\n\t\t\t\t\t/>\r\n\t\t\t\t} @else {\r\n\t\t\t\t\t<fkt-button\r\n\t\t\t\t\t\tclass=\"pointer-events-auto\"\r\n\t\t\t\t\t\t(click)=\"showPassword.set(true)\"\r\n\t\t\t\t\t\ttheme=\"basic\"\r\n\t\t\t\t\t\ticon=\"eye\"\r\n\t\t\t\t\t/>\r\n\t\t\t\t}\r\n\t\t\t</div>\r\n\t\t} @else if (suffix()) {\r\n\t\t\t<div class=\"pointer-events-auto mr-2\">\r\n\t\t\t\t<ng-container\r\n\t\t\t\t\t[ngTemplateOutlet]=\"suffix()!.templateRef\"\r\n\t\t\t\t/>\r\n\t\t\t</div>\r\n\t\t}\r\n\t</div>\r\n\r\n</div>\r\n\r\n<fkt-field-error #error [control]=\"control()\" />\r\n", styles: ["@reference \"../../styles/tailwind.css\";:host{@apply block rounded-full relative mt-5 border-gray-500 transition scroll-smooth w-full;}:host input{@apply outline-none border-gray-400 min-h-[50px] w-full border-2 rounded-lg px-4 py-2 bg-transparent;}:host input::placeholder{@apply opacity-0;}:host input:disabled{@apply opacity-40 grayscale;}:host label{@apply absolute px-1 top-[15px] left-3 transition bg-white text-gray-500;}:host:focus-within label{@apply text-yellow-500 z-50 scale-90 -translate-x-1 -translate-y-[27px];}:host:focus-within input{@apply transition border-yellow-500;}:host:focus-within input::placeholder{@apply opacity-100;}:host .float{@apply z-50 scale-90 -translate-x-1 -translate-y-[27px];}:host fkt-field-error{@apply pl-3;}\n"] }]
        }] });

const fktInputTypes = ['text', 'password', 'number', 'email'];
const fktInputTransformers = ['currency', 'percent', 'hour'];

const outsideClickEffect = (fn, options) => {
    const elementRef = inject(ElementRef);
    const destroyRef = inject(DestroyRef);
    const document = inject(DOCUMENT);
    const handleClickOutside = (event) => {
        const wrapper = elementRef.nativeElement;
        const excludedElements = options?.excludeIdsOrElements
            ?.map(id => typeof id === "string" ? document.getElementById(id) : id)
            ?.filter(element => !!element) ?? [];
        const isAnExcludedElement = excludedElements.some(excluded => excluded.contains(event.target));
        if (isAnExcludedElement)
            return;
        if (!wrapper.contains(event.target))
            fn(event.target);
    };
    document.addEventListener('mousedown', handleClickOutside);
    const destroy = () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
    destroyRef.onDestroy(destroy);
    return { destroy };
};

const topStart = (anchor, target) => ({
    x: anchor.x,
    y: anchor.y - target.height,
});
const topEnd = (anchor, target) => ({
    x: anchor.x + anchor.width - target.width,
    y: anchor.y - target.height,
});
const topLeft = (anchor, target) => ({
    x: anchor.x - target.width,
    y: anchor.y - target.height,
});
const topRight = (anchor, target) => ({
    x: anchor.x + anchor.width,
    y: anchor.y - target.height,
});
const topCenter = (anchor, target) => ({
    x: anchor.x + anchor.width / 2 - target.width / 2,
    y: anchor.y - target.height,
});
const bottomStart = (anchor) => ({
    x: anchor.x,
    y: anchor.y + anchor.height,
});
const bottomEnd = (anchor, target) => ({
    x: anchor.x + anchor.width - target.width,
    y: anchor.y + anchor.height,
});
const bottomLeft = (anchor, target) => ({
    x: anchor.x - target.width,
    y: anchor.y + anchor.height,
});
const bottomRight = (anchor) => ({
    x: anchor.x + anchor.width,
    y: anchor.y + anchor.height,
});
const bottomCenter = (anchor, target) => ({
    x: anchor.x + anchor.width / 2 - target.width / 2,
    y: anchor.y + anchor.height,
});
const leftStart = (anchor, target) => ({
    x: anchor.x - target.width,
    y: anchor.y,
});
const leftCenter = (anchor, target) => ({
    x: anchor.x - target.width,
    y: anchor.y + anchor.height / 2 - target.height / 2,
});
const leftEnd = (anchor, target) => ({
    x: anchor.x - target.width,
    y: anchor.y + anchor.height - target.height,
});
const rightStart = (anchor) => ({
    x: anchor.x + anchor.width,
    y: anchor.y,
});
const rightEnd = (anchor, target) => ({
    x: anchor.x + anchor.width,
    y: anchor.y + anchor.height - target.height,
});
const rightCenter = (anchor, target) => ({
    x: anchor.x + anchor.width,
    y: anchor.y + anchor.height / 2 - target.height / 2,
});
const geometryPositionCalculations = {
    'top-start': topStart,
    'bottom-start': bottomStart,
    'left-start': leftStart,
    'right-start': rightStart,
    'top-center': topCenter,
    'bottom-center': bottomCenter,
    'left-center': leftCenter,
    'right-center': rightCenter,
    'top-left': topLeft,
    'top-right': topRight,
    'bottom-left': bottomLeft,
    'bottom-right': bottomRight,
    'top-end': topEnd,
    'bottom-end': bottomEnd,
    'left-end': leftEnd,
    'right-end': rightEnd,
};

const WINDOW = new InjectionToken('window', {
    factory: () => window
});

class FktGeometryAlignmentService {
    window = inject(WINDOW);
    alignTargetTo(options) {
        const paddingX = typeof options.padding === 'number'
            ? options.padding
            : options.padding?.x ?? 8;
        const paddingY = typeof options.padding === 'number'
            ? options.padding
            : options.padding?.y ?? 8;
        const aligner = geometryPositionCalculations[options.position];
        const base = aligner(options.anchor, options.targetSize);
        let offsetX = 0;
        let offsetY = 0;
        const pos = options.position;
        if (pos.startsWith('top'))
            offsetY = -paddingY;
        else if (pos.startsWith('bottom'))
            offsetY = paddingY;
        if (pos.startsWith('left') || pos.endsWith('left'))
            offsetX = -paddingX;
        else if (pos.startsWith('right') || pos.endsWith('right'))
            offsetX = paddingX;
        return {
            x: base.x + offsetX,
            y: base.y + offsetY + this.window.scrollY,
        };
    }
    ;
    smartAlignTargetTo(options) {
        const bestFit = this.calculateBestFit(options);
        return {
            position: bestFit,
            result: this.alignTargetTo({
                ...options,
                position: bestFit
            })
        };
    }
    ;
    calculateBestFit(options) {
        const defaultPositions = [
            'bottom-center',
            'bottom-start',
            'bottom-end',
            'top-center',
            'top-start',
            'top-end',
            'left-start',
            'left-center',
            'left-end',
            'right-start',
            'right-center',
            'right-end',
            'bottom-left',
            'bottom-right',
            'top-left',
            'top-right',
        ];
        const positions = [
            ...(options.preferredPositions ?? []),
            ...(options.disableAutoReposition === true ? [] : defaultPositions)
        ];
        const container = options.container ?? {
            x: 0,
            y: 0,
            width: this.window.innerWidth,
            height: this.window.innerHeight
        };
        let bestFit = null;
        let smallestOverflow = Infinity;
        for (const position of positions) {
            const result = this.alignTargetTo({
                ...options,
                position
            });
            const rightOverflow = Math.max(0, result.x + options.targetSize.width - (container.x + container.width));
            const bottomOverflow = Math.max(0, result.y + options.targetSize.height - (container.y + container.height));
            const leftOverflow = Math.max(0, container.x - result.x);
            const topOverflow = Math.max(0, container.y - result.y);
            const totalOverflow = rightOverflow + bottomOverflow + leftOverflow + topOverflow;
            if (totalOverflow === 0) {
                return position;
            }
            if (totalOverflow < smallestOverflow) {
                smallestOverflow = totalOverflow;
                bestFit = position;
            }
        }
        return bestFit;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktGeometryAlignmentService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktGeometryAlignmentService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktGeometryAlignmentService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

const elementSizeSignal = (element, options) => {
    const destroyRef = inject(DestroyRef);
    const size = signal(options?.startWithNull ? null : element.getBoundingClientRect(), ...(ngDevMode ? [{ debugName: "size" }] : []));
    const observer = new ResizeObserver(() => {
        size.set(element.getBoundingClientRect());
    });
    observer.observe(element);
    destroyRef.onDestroy(() => {
        observer.disconnect();
    });
    return size.asReadonly();
};

/**
 * Verifica se o elemento "target" está contido dentro do "container".
 * Isso inclui casos em que o target é o próprio container.
 */
function isElementInside(target, container) {
    let node = target;
    while (node) {
        if (node === container) {
            return true;
        }
        node = node.parentElement;
    }
    return false;
}

class FktOverlayAnchorComponent {
    container = viewChild.required('container', { read: ViewContainerRef });
    id = input.required(...(ngDevMode ? [{ debugName: "id" }] : []));
    anchor = input.required(...(ngDevMode ? [{ debugName: "anchor" }] : []));
    spacing = input(16, ...(ngDevMode ? [{ debugName: "spacing" }] : []));
    position = input(...(ngDevMode ? [undefined, { debugName: "position" }] : []));
    disableAutoReposition = input(...(ngDevMode ? [undefined, { debugName: "disableAutoReposition" }] : []));
    maxHeight = input('300px', ...(ngDevMode ? [{ debugName: "maxHeight" }] : []));
    minWidth = input('200px', ...(ngDevMode ? [{ debugName: "minWidth" }] : []));
    width = input(...(ngDevMode ? [undefined, { debugName: "width" }] : []));
    padding = input(...(ngDevMode ? [undefined, { debugName: "padding" }] : []));
    borderRadius = input(...(ngDevMode ? [undefined, { debugName: "borderRadius" }] : []));
    backgroundColor = input(...(ngDevMode ? [undefined, { debugName: "backgroundColor" }] : []));
    overflow = input(...(ngDevMode ? [undefined, { debugName: "overflow" }] : []));
    boxShadow = input(...(ngDevMode ? [undefined, { debugName: "boxShadow" }] : []));
    outsideClick = output();
    closeClick = output();
    alignmentService = inject(FktGeometryAlignmentService);
    overlayInfo = inject(OVERLAY_INFO);
    autoClose = outsideClickEffect((element) => {
        if (!(element instanceof HTMLElement))
            return;
        if (isElementInside(element, this.anchor().nativeElement))
            return;
        this.outsideClick.emit(element);
    });
    elementRef = inject(ElementRef);
    sizeSignal = elementSizeSignal(this.elementRef.nativeElement, {
        startWithNull: true,
    });
    canShow = signal(false, ...(ngDevMode ? [{ debugName: "canShow" }] : []));
    internalWidth = computed(() => {
        const width = this.width();
        if (width)
            return width;
        return `${this.anchor().nativeElement.getBoundingClientRect().width}px`;
    }, ...(ngDevMode ? [{ debugName: "internalWidth" }] : []));
    alignedPosition = computed(() => {
        const anchor = this.anchor();
        const anchorRect = anchor.nativeElement.getBoundingClientRect();
        const size = this.sizeSignal();
        if (!size)
            return null;
        return this.alignmentService.smartAlignTargetTo({
            anchor: anchorRect,
            targetSize: size,
            disableAutoReposition: this.disableAutoReposition() ?? false,
            preferredPositions: [this.position() ?? 'bottom-center'],
        });
    }, ...(ngDevMode ? [{ debugName: "alignedPosition" }] : []));
    updateOverlayInfoPosition = effect(() => {
        const alignedPosition = this.alignedPosition();
        this.overlayInfo.currentPosition.set(alignedPosition?.position ?? null);
    }, ...(ngDevMode ? [{ debugName: "updateOverlayInfoPosition" }] : []));
    updateVisibility = effect(() => {
        if (this.sizeSignal()) {
            setTimeout(() => {
                this.canShow.set(true);
            }, 100);
        }
    }, ...(ngDevMode ? [{ debugName: "updateVisibility" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktOverlayAnchorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "20.1.7", type: FktOverlayAnchorComponent, isStandalone: true, selector: "fkt-overlay-anchor", inputs: { id: { classPropertyName: "id", publicName: "id", isSignal: true, isRequired: true, transformFunction: null }, anchor: { classPropertyName: "anchor", publicName: "anchor", isSignal: true, isRequired: true, transformFunction: null }, spacing: { classPropertyName: "spacing", publicName: "spacing", isSignal: true, isRequired: false, transformFunction: null }, position: { classPropertyName: "position", publicName: "position", isSignal: true, isRequired: false, transformFunction: null }, disableAutoReposition: { classPropertyName: "disableAutoReposition", publicName: "disableAutoReposition", isSignal: true, isRequired: false, transformFunction: null }, maxHeight: { classPropertyName: "maxHeight", publicName: "maxHeight", isSignal: true, isRequired: false, transformFunction: null }, minWidth: { classPropertyName: "minWidth", publicName: "minWidth", isSignal: true, isRequired: false, transformFunction: null }, width: { classPropertyName: "width", publicName: "width", isSignal: true, isRequired: false, transformFunction: null }, padding: { classPropertyName: "padding", publicName: "padding", isSignal: true, isRequired: false, transformFunction: null }, borderRadius: { classPropertyName: "borderRadius", publicName: "borderRadius", isSignal: true, isRequired: false, transformFunction: null }, backgroundColor: { classPropertyName: "backgroundColor", publicName: "backgroundColor", isSignal: true, isRequired: false, transformFunction: null }, overflow: { classPropertyName: "overflow", publicName: "overflow", isSignal: true, isRequired: false, transformFunction: null }, boxShadow: { classPropertyName: "boxShadow", publicName: "boxShadow", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { outsideClick: "outsideClick", closeClick: "closeClick" }, host: { properties: { "style.opacity": "canShow() ? 1 : 0", "style.left.px": "alignedPosition()?.result?.x ?? 0", "style.top.px": "alignedPosition()?.result?.y ?? 0", "style.width": "internalWidth()", "style.--max-height": "maxHeight()", "style.--padding": "padding()", "style.--min-width": "minWidth()", "style.--border-radius": "borderRadius()", "style.--background-color": "backgroundColor()", "style.--overflow": "overflow()", "style.--box-shadow": "boxShadow()", "id": "id()" } }, viewQueries: [{ propertyName: "container", first: true, predicate: ["container"], descendants: true, read: ViewContainerRef, isSignal: true }], ngImport: i0, template: ` <div class="overlay-container">
		<ng-template #container></ng-template>
	</div>`, isInline: true, styles: [":host{position:absolute;height:fit-content;opacity:0}.overlay-container{min-width:var(--min-width, 200px);max-height:var(--max-height, 300px);overflow:var(--overflow, auto);background-color:var(--background-color, white);box-shadow:var(--box-shadow, -4px 7px 20px 0px rgba(0, 0, 0, .18));padding:var(--padding);border-radius:var(--border-radius, 10px)}\n"] });
}
__decorate([
    MarkUsed()
], FktOverlayAnchorComponent.prototype, "autoClose", void 0);
__decorate([
    MarkUsed()
], FktOverlayAnchorComponent.prototype, "updateOverlayInfoPosition", void 0);
__decorate([
    MarkUsed()
], FktOverlayAnchorComponent.prototype, "updateVisibility", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktOverlayAnchorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-overlay-anchor', template: ` <div class="overlay-container">
		<ng-template #container></ng-template>
	</div>`, standalone: true, host: {
                        '[style.opacity]': 'canShow() ? 1 : 0',
                        '[style.left.px]': 'alignedPosition()?.result?.x ?? 0',
                        '[style.top.px]': 'alignedPosition()?.result?.y ?? 0',
                        '[style.width]': 'internalWidth()',
                        '[style.--max-height]': 'maxHeight()',
                        '[style.--padding]': 'padding()',
                        '[style.--min-width]': 'minWidth()',
                        '[style.--border-radius]': 'borderRadius()',
                        '[style.--background-color]': 'backgroundColor()',
                        '[style.--overflow]': 'overflow()',
                        '[style.--box-shadow]': 'boxShadow()',
                        '[id]': 'id()',
                    }, styles: [":host{position:absolute;height:fit-content;opacity:0}.overlay-container{min-width:var(--min-width, 200px);max-height:var(--max-height, 300px);overflow:var(--overflow, auto);background-color:var(--background-color, white);box-shadow:var(--box-shadow, -4px 7px 20px 0px rgba(0, 0, 0, .18));padding:var(--padding);border-radius:var(--border-radius, 10px)}\n"] }]
        }], propDecorators: { autoClose: [], updateOverlayInfoPosition: [], updateVisibility: [] } });

class FktElementAnchorService {
    appRef;
    injector;
    document = inject(DOCUMENT);
    zIndex = 9999;
    constructor(appRef, injector) {
        this.appRef = appRef;
        this.injector = injector;
    }
    createAnchor(component, options, injector) {
        const componentRef = createComponent(component, {
            elementInjector: injector,
            environmentInjector: this.injector,
            bindings: createComponentBindings(component, options ?? {})
        });
        this.appRef.attachView(componentRef.hostView);
        const el = componentRef.hostView.rootNodes[0];
        this.document.body.appendChild(el);
        const element = componentRef.location.nativeElement;
        element.style.zIndex = `${this.getZIndex()}`;
        return { componentRef, destroy: () => this.destroy(componentRef), zIndex: this.getZIndex() };
    }
    getZIndex() {
        this.zIndex++;
        return this.zIndex;
    }
    destroy(ref) {
        ref.destroy();
        this.zIndex--;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktElementAnchorService, deps: [{ token: i0.ApplicationRef }, { token: i0.EnvironmentInjector }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktElementAnchorService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktElementAnchorService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i0.ApplicationRef }, { type: i0.EnvironmentInjector }] });

const OVERLAY_INFO = new InjectionToken('overlay-info', {
    factory: () => ({
        currentPosition: signal(null)
    })
});
class FktOverlayService {
    anchorService = inject(FktElementAnchorService);
    overlays = new Map();
    open(options) {
        if (options.panelOptions?.id && !this.canUseId(options.panelOptions.id))
            throw new Error(`The overlay id "${options.panelOptions.id}" is already in use. Please choose a different id.`);
        const id = options.panelOptions?.id ?? this.createId();
        const injector = Injector.create({
            providers: [
                {
                    provide: OVERLAY_INFO,
                    useValue: {
                        currentPosition: signal(null),
                    }
                }
            ]
        });
        const close = () => {
            this.overlays.delete(id);
            anchor.destroy();
            componentRef.destroy();
        };
        const anchor = this.anchorService.createAnchor(FktOverlayAnchorComponent, {
            anchor: options.anchorElementRef,
            id,
            width: options.panelOptions?.width,
            position: options.panelOptions?.position,
            padding: options?.panelOptions?.padding,
            maxHeight: options.panelOptions?.maxHeight ?? '300px',
            minWidth: options.panelOptions?.minWidth ?? '200px',
            borderRadius: options.panelOptions?.borderRadius ?? '10px',
            backgroundColor: options.panelOptions?.backgroundColor,
            disableAutoReposition: options.panelOptions?.disableAutoReposition ?? false,
            overflow: options.panelOptions?.overflow,
            boxShadow: options.panelOptions?.boxShadow,
            outsideClick: (element) => {
                options?.panelOptions?.outsideClick?.(element);
                close();
            }
        }, injector);
        const componentRef = anchor.componentRef.instance
            .container()
            .createComponent(options.component, {
            bindings: createComponentBindings(options.component, options.data),
        });
        const overlayRef = {
            componentRef,
            close,
        };
        this.overlays.set(id, overlayRef);
        return overlayRef;
    }
    canUseId(id) {
        return !this.overlays.has(id);
    }
    createId() {
        let counter = 1;
        let id = `overlay-container-${counter}`;
        while (!this.canUseId(id)) {
            counter++;
            id = `overlay-container-${counter}`;
        }
        return id;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktOverlayService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktOverlayService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktOverlayService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class FktSpinnerComponent {
    size = input(40, ...(ngDevMode ? [{ debugName: "size" }] : []));
    stroke = input(4, ...(ngDevMode ? [{ debugName: "stroke" }] : []));
    color = input('primary', ...(ngDevMode ? [{ debugName: "color" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktSpinnerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.1.7", type: FktSpinnerComponent, isStandalone: true, selector: "fkt-spinner", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, stroke: { classPropertyName: "stroke", publicName: "stroke", isSignal: true, isRequired: false, transformFunction: null }, color: { classPropertyName: "color", publicName: "color", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div\r\n\t[style.--stroke]=\"stroke() + 'px'\"\r\n\t[style.--size]=\"size() +  'px'\"\r\n\t[class]=\"'spinner ' + color()\">\r\n</div>\r\n", styles: ["@reference \"../../styles/tailwind.css\";.spinner{border-width:var(--stroke, 6px);width:var(--size, 80px);height:var(--size, 80px);@apply border-gray-100 rounded-full animate-spin;}.spinner.primary{@apply border-t-gray-500;}.spinner.yellow{@apply border-t-yellow-500;}.spinner.red{@apply border-t-red-500;}.spinner.green{@apply border-t-green-500;}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktSpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-spinner', imports: [], template: "<div\r\n\t[style.--stroke]=\"stroke() + 'px'\"\r\n\t[style.--size]=\"size() +  'px'\"\r\n\t[class]=\"'spinner ' + color()\">\r\n</div>\r\n", styles: ["@reference \"../../styles/tailwind.css\";.spinner{border-width:var(--stroke, 6px);width:var(--size, 80px);height:var(--size, 80px);@apply border-gray-100 rounded-full animate-spin;}.spinner.primary{@apply border-t-gray-500;}.spinner.yellow{@apply border-t-yellow-500;}.spinner.red{@apply border-t-red-500;}.spinner.green{@apply border-t-green-500;}\n"] }]
        }] });

class FktTooltipComponent {
    text = input.required(...(ngDevMode ? [{ debugName: "text" }] : []));
    color = input(...(ngDevMode ? [undefined, { debugName: "color" }] : []));
    overlayInfo = inject(OVERLAY_INFO);
    colorMap = {
        red: '#ef4444',
        green: '#22c55e',
        primary: '#1f2937',
        yellow: '#eab308',
    };
    tipPositionMap = {
        'bottom-center': 'top-center-position',
        'bottom-end': 'top-end-position',
        'bottom-left': 'top-left-position',
        'bottom-right': 'top-right-position',
        'bottom-start': 'top-start-position',
        'left-center': 'right-center-position',
        'left-end': 'right-end-position',
        'left-start': 'right-start-position',
        'right-center': 'left-center-position',
        'right-end': 'left-end-position',
        'right-start': 'left-start-position',
        'top-center': 'bottom-center-position',
        'top-end': 'bottom-end-position',
        'top-left': 'bottom-left-position',
        'top-right': 'bottom-right-position',
        'top-start': 'bottom-start-position',
    };
    tooltipColor = computed(() => {
        return this.colorMap[this.color() ?? 'primary'];
    }, ...(ngDevMode ? [{ debugName: "tooltipColor" }] : []));
    tipStyles = computed(() => {
        const color = this.color() ?? 'primary';
        const colorHex = this.colorMap[color];
        return {
            'border-color': colorHex,
        };
    }, ...(ngDevMode ? [{ debugName: "tipStyles" }] : []));
    messageStyles = computed(() => {
        const color = this.color() ?? 'primary';
        const colorHex = this.colorMap[color];
        return {
            'background-color': colorHex,
        };
    }, ...(ngDevMode ? [{ debugName: "messageStyles" }] : []));
    positionClass = computed(() => {
        const currentPosition = this.overlayInfo.currentPosition();
        return this.tipPositionMap[currentPosition ?? 'bottom-center'];
    }, ...(ngDevMode ? [{ debugName: "positionClass" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktTooltipComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.1.7", type: FktTooltipComponent, isStandalone: true, selector: "app-tooltip", inputs: { text: { classPropertyName: "text", publicName: "text", isSignal: true, isRequired: true, transformFunction: null }, color: { classPropertyName: "color", publicName: "color", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class": "positionClass()", "style.--color": "tooltipColor()" } }, ngImport: i0, template: "<div class=\"relative\">\r\n\t<div\r\n\t\tclass=\"tip\"></div>\r\n\r\n\t<div\r\n\t\tclass=\"relative bg-red p-2 text-sm text-white font-semibold message\">\r\n\t\t{{ text() }}\r\n\t</div>\r\n</div>\r\n", styles: ["@reference \"../../styles/tailwind.css\";:host{@apply block w-fit relative bg-transparent p-2;}:host .message{box-shadow:1px 8px 15px 5px #00000026;background-color:var(--color);border-radius:6px}:host .tip{border-color:var(--color);@apply border-b-[10px] border-r-[5px] border-t-transparent border-l-[5px] border-l-transparent border-r-transparent absolute;}:host.left-center-position .tip{top:50%;left:0;transform:translate(-100%) translateY(-50%) rotate(270deg)}:host.left-start-position .tip{top:6px;left:0;transform:translate(-100%) translateY(0) rotate(270deg)}:host.left-end-position .tip{bottom:6px;left:0;transform:translate(-100%) translateY(0) rotate(270deg)}:host.right-center-position .tip{top:50%;right:0;transform:translate(100%) translateY(-50%) rotate(90deg)}:host.right-start-position .tip{top:6px;right:0;transform:translate(100%) translateY(0) rotate(90deg)}:host.right-end-position .tip{bottom:6px;right:0;transform:translate(100%) translateY(0) rotate(90deg)}:host.top-center-position .tip{top:0;left:50%;transform:translate(-50%) translateY(-100%)}:host.top-start-position .tip{top:0;left:6px;transform:translate(0) translateY(-100%)}:host.top-end-position .tip{top:0;right:6px;transform:translate(0) translateY(-100%)}:host.top-left-position .tip{transform:rotate(45deg);right:-5.0710678119px;top:-5.0710678119px}:host.top-right-position .tip{transform:rotate(-45deg);left:-5.0710678119px;top:-5.0710678119px}:host.bottom-center-position .tip{bottom:0;left:50%;transform:translate(50%) translateY(100%) rotate(180deg)}:host.bottom-start-position .tip{bottom:0;left:6px;transform:translate(0) translateY(100%) rotate(180deg)}:host.bottom-end-position .tip{bottom:0;right:6px;transform:translate(0) translateY(100%) rotate(180deg)}:host.bottom-left-position .tip{transform:rotate(135deg);right:-5.0710678119px;bottom:-5.0710678119px}:host.bottom-right-position .tip{transform:rotate(-135deg);left:-5.0710678119px;bottom:-5.0710678119px}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktTooltipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-tooltip', imports: [], host: {
                        '[class]': 'positionClass()',
                        '[style.--color]': 'tooltipColor()',
                    }, template: "<div class=\"relative\">\r\n\t<div\r\n\t\tclass=\"tip\"></div>\r\n\r\n\t<div\r\n\t\tclass=\"relative bg-red p-2 text-sm text-white font-semibold message\">\r\n\t\t{{ text() }}\r\n\t</div>\r\n</div>\r\n", styles: ["@reference \"../../styles/tailwind.css\";:host{@apply block w-fit relative bg-transparent p-2;}:host .message{box-shadow:1px 8px 15px 5px #00000026;background-color:var(--color);border-radius:6px}:host .tip{border-color:var(--color);@apply border-b-[10px] border-r-[5px] border-t-transparent border-l-[5px] border-l-transparent border-r-transparent absolute;}:host.left-center-position .tip{top:50%;left:0;transform:translate(-100%) translateY(-50%) rotate(270deg)}:host.left-start-position .tip{top:6px;left:0;transform:translate(-100%) translateY(0) rotate(270deg)}:host.left-end-position .tip{bottom:6px;left:0;transform:translate(-100%) translateY(0) rotate(270deg)}:host.right-center-position .tip{top:50%;right:0;transform:translate(100%) translateY(-50%) rotate(90deg)}:host.right-start-position .tip{top:6px;right:0;transform:translate(100%) translateY(0) rotate(90deg)}:host.right-end-position .tip{bottom:6px;right:0;transform:translate(100%) translateY(0) rotate(90deg)}:host.top-center-position .tip{top:0;left:50%;transform:translate(-50%) translateY(-100%)}:host.top-start-position .tip{top:0;left:6px;transform:translate(0) translateY(-100%)}:host.top-end-position .tip{top:0;right:6px;transform:translate(0) translateY(-100%)}:host.top-left-position .tip{transform:rotate(45deg);right:-5.0710678119px;top:-5.0710678119px}:host.top-right-position .tip{transform:rotate(-45deg);left:-5.0710678119px;top:-5.0710678119px}:host.bottom-center-position .tip{bottom:0;left:50%;transform:translate(50%) translateY(100%) rotate(180deg)}:host.bottom-start-position .tip{bottom:0;left:6px;transform:translate(0) translateY(100%) rotate(180deg)}:host.bottom-end-position .tip{bottom:0;right:6px;transform:translate(0) translateY(100%) rotate(180deg)}:host.bottom-left-position .tip{transform:rotate(135deg);right:-5.0710678119px;bottom:-5.0710678119px}:host.bottom-right-position .tip{transform:rotate(-135deg);left:-5.0710678119px;bottom:-5.0710678119px}\n"] }]
        }] });

const outsideMouseEnterWatcher = (options) => {
    const elementRef = inject(ElementRef);
    const destroyRef = inject(DestroyRef);
    const document = inject(DOCUMENT);
    let handler = () => { };
    let registered = false;
    const handleMouseOver = (event) => {
        const wrapper = elementRef.nativeElement;
        const related = event.relatedTarget;
        const excludedElements = options?.excludeIds
            ?.map(id => document.getElementById(id))
            ?.filter(element => !!element) ?? [];
        const isStillInside = wrapper.contains(event.target) ||
            wrapper.contains(related) ||
            excludedElements.some(el => el.contains(event.target) || el.contains(related));
        if (isStillInside)
            return;
        handler();
    };
    const watch = (fn) => {
        handler = fn;
        if (!registered) {
            document.addEventListener('mouseover', handleMouseOver, true);
            registered = true;
        }
    };
    const stop = () => {
        if (!registered)
            return;
        document.removeEventListener('mouseover', handleMouseOver, true);
        registered = false;
    };
    destroyRef.onDestroy(stop);
    return { watch, stop };
};

class FktTooltipDirective {
    fktTooltip = input.required(...(ngDevMode ? [{ debugName: "fktTooltip" }] : []));
    tooltipEnabled = input(true, ...(ngDevMode ? [{ debugName: "tooltipEnabled" }] : []));
    disableAutoReposition = input(false, ...(ngDevMode ? [{ debugName: "disableAutoReposition", transform: booleanAttribute }] : [{ transform: booleanAttribute }]));
    position = input('bottom-center', ...(ngDevMode ? [{ debugName: "position" }] : []));
    overlay = inject(FktOverlayService);
    overlayRef = null;
    elementRef = inject(ElementRef);
    outsideWatcher = outsideMouseEnterWatcher();
    show() {
        if (!this.tooltipEnabled())
            return;
        if (this.overlayRef)
            return;
        this.overlayRef = this.overlay.open({
            component: FktTooltipComponent,
            data: {
                text: this.fktTooltip(),
            },
            panelOptions: {
                width: 'fit-content',
                maxHeight: 'fit-content',
                minWidth: 'fit-content',
                position: this.position(),
                borderRadius: '0px',
                overflow: 'visible',
                padding: '0',
                boxShadow: 'none',
                backgroundColor: 'transparent',
                disableAutoReposition: this.disableAutoReposition(),
            },
            anchorElementRef: this.elementRef,
        });
        this.outsideWatcher.watch(() => {
            this.outsideWatcher.stop();
            this.hide();
        });
    }
    hide = () => {
        this.overlayRef?.close();
        this.overlayRef = null;
    };
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktTooltipDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "20.1.7", type: FktTooltipDirective, isStandalone: true, selector: "[fktTooltip]", inputs: { fktTooltip: { classPropertyName: "fktTooltip", publicName: "fktTooltip", isSignal: true, isRequired: true, transformFunction: null }, tooltipEnabled: { classPropertyName: "tooltipEnabled", publicName: "tooltipEnabled", isSignal: true, isRequired: false, transformFunction: null }, disableAutoReposition: { classPropertyName: "disableAutoReposition", publicName: "disableAutoReposition", isSignal: true, isRequired: false, transformFunction: null }, position: { classPropertyName: "position", publicName: "position", isSignal: true, isRequired: false, transformFunction: null } }, host: { listeners: { "mouseenter": "show();" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktTooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fktTooltip]',
                    host: {
                        '(mouseenter)': 'show();',
                    },
                }]
        }] });

class FktButtonsListComponent {
    context = input(...(ngDevMode ? [undefined, { debugName: "context" }] : []));
    orientation = input('horizontal', ...(ngDevMode ? [{ debugName: "orientation" }] : []));
    fill = input(false, ...(ngDevMode ? [{ debugName: "fill", transform: booleanAttribute }] : [{ transform: booleanAttribute }]));
    verticalAlignment = input('start', ...(ngDevMode ? [{ debugName: "verticalAlignment" }] : []));
    horizontalAlignment = input('start', ...(ngDevMode ? [{ debugName: "horizontalAlignment" }] : []));
    actions = input.required(...(ngDevMode ? [{ debugName: "actions" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktButtonsListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.1.7", type: FktButtonsListComponent, isStandalone: true, selector: "fkt-buttons-list", inputs: { context: { classPropertyName: "context", publicName: "context", isSignal: true, isRequired: false, transformFunction: null }, orientation: { classPropertyName: "orientation", publicName: "orientation", isSignal: true, isRequired: false, transformFunction: null }, fill: { classPropertyName: "fill", publicName: "fill", isSignal: true, isRequired: false, transformFunction: null }, verticalAlignment: { classPropertyName: "verticalAlignment", publicName: "verticalAlignment", isSignal: true, isRequired: false, transformFunction: null }, horizontalAlignment: { classPropertyName: "horizontalAlignment", publicName: "horizontalAlignment", isSignal: true, isRequired: false, transformFunction: null }, actions: { classPropertyName: "actions", publicName: "actions", isSignal: true, isRequired: true, transformFunction: null } }, host: { properties: { "class.vertical": "orientation() === \"vertical\"", "class.horizontal": "orientation() === \"horizontal\"", "class.fill": "fill()", "style.--vertical-alignment": "verticalAlignment()", "style.--horizontal-alignment": "horizontalAlignment()" } }, ngImport: i0, template: "@for (action of actions(); track action.identifier) {\r\n\t<fkt-button\r\n\t\t[fktTooltip]=\"action.tooltip ?? ''\"\r\n\t\t[tooltipEnabled]=\"!!action.tooltip\"\r\n\t\t(click)=\"action?.click?.(context())\"\r\n\t\t[loading]=\"action.loading ?? false\"\r\n\t\t[disabled]=\"action.disabled ?? false\"\r\n\t\t[text]=\"action.text ?? ''\"\r\n\t\t[loadingText]=\"action.loadingText ?? ''\"\r\n\t\t[color]=\"action.color ?? 'primary'\"\r\n\t\t[theme]=\"action.theme ?? 'raised'\"\r\n\t\t[variant]=\"action.variant ?? 'rounded'\"\r\n\t\t[icon]=\"action.icon\"\r\n\t\t[iconPosition]=\"action.iconPosition ?? 'right'\"\r\n\t/>\r\n}\r\n", styles: ["@reference \"../../styles/tailwind.css\";:host{@apply flex gap-2;}:host.horizontal{justify-content:var(--horizontal-alignment);align-items:var(--vertical-alignment)}:host.vertical{@apply flex-col;justify-content:var(--vertical-alignment);align-items:var(--horizontal-alignment)}:host.fill>*{width:100%}\n"], dependencies: [{ kind: "component", type: FktButtonComponent, selector: "fkt-button", inputs: ["loading", "disabled", "text", "loadingText", "color", "theme", "variant", "icon", "iconPosition"] }, { kind: "directive", type: FktTooltipDirective, selector: "[fktTooltip]", inputs: ["fktTooltip", "tooltipEnabled", "disableAutoReposition", "position"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktButtonsListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-buttons-list', imports: [FktButtonComponent, FktTooltipDirective], host: {
                        '[class.vertical]': 'orientation() === "vertical"',
                        '[class.horizontal]': 'orientation() === "horizontal"',
                        '[class.fill]': 'fill()',
                        '[style.--vertical-alignment]': 'verticalAlignment()',
                        '[style.--horizontal-alignment]': 'horizontalAlignment()',
                    }, template: "@for (action of actions(); track action.identifier) {\r\n\t<fkt-button\r\n\t\t[fktTooltip]=\"action.tooltip ?? ''\"\r\n\t\t[tooltipEnabled]=\"!!action.tooltip\"\r\n\t\t(click)=\"action?.click?.(context())\"\r\n\t\t[loading]=\"action.loading ?? false\"\r\n\t\t[disabled]=\"action.disabled ?? false\"\r\n\t\t[text]=\"action.text ?? ''\"\r\n\t\t[loadingText]=\"action.loadingText ?? ''\"\r\n\t\t[color]=\"action.color ?? 'primary'\"\r\n\t\t[theme]=\"action.theme ?? 'raised'\"\r\n\t\t[variant]=\"action.variant ?? 'rounded'\"\r\n\t\t[icon]=\"action.icon\"\r\n\t\t[iconPosition]=\"action.iconPosition ?? 'right'\"\r\n\t/>\r\n}\r\n", styles: ["@reference \"../../styles/tailwind.css\";:host{@apply flex gap-2;}:host.horizontal{justify-content:var(--horizontal-alignment);align-items:var(--vertical-alignment)}:host.vertical{@apply flex-col;justify-content:var(--vertical-alignment);align-items:var(--horizontal-alignment)}:host.fill>*{width:100%}\n"] }]
        }] });

class FktNoResultsComponent {
    noResults = input.required(...(ngDevMode ? [{ debugName: "noResults" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktNoResultsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.1.7", type: FktNoResultsComponent, isStandalone: true, selector: "fkt-no-results", inputs: { noResults: { classPropertyName: "noResults", publicName: "noResults", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0, template: "@let icon = noResults().icon;\r\n@let action = noResults().action;\r\n\r\n@if (icon?.name) {\r\n\t<fkt-icon\r\n\t\t[style.font-size]=\"icon!.size || '116px'\"\r\n\t\t[class]=\"'text-gray-800'\"\r\n\t\t[name]=\"icon!.name\"\r\n\t/>\r\n}\r\n\r\n<div class=\"flex flex-col\">\r\n\t<h3 class=\"text-lg font-semibold text-gray-800\">\r\n\t\t{{ noResults().label }}\r\n\t</h3>\r\n\t@if (noResults().description) {\r\n\t\t<p class=\"mb-3  text-gray-800\">\r\n\t\t\t{{ noResults().description }}\r\n\t\t</p>\r\n\t}\r\n\r\n\t@if (action) {\r\n\t\t<fkt-buttons-list\r\n\t\t\t[actions]=\"[action]\"\r\n\t\t/>\r\n\t}\r\n\r\n</div>\r\n", styles: ["@reference \"../../styles/tailwind.css\";:host{@apply flex border border-gray-200 gap-4 min-h-[400px] justify-center items-center;}\n"], dependencies: [{ kind: "component", type: FktIconComponent, selector: "fkt-icon", inputs: ["name"] }, { kind: "component", type: FktButtonsListComponent, selector: "fkt-buttons-list", inputs: ["context", "orientation", "fill", "verticalAlignment", "horizontalAlignment", "actions"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktNoResultsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-no-results', imports: [FktIconComponent, FktButtonsListComponent], template: "@let icon = noResults().icon;\r\n@let action = noResults().action;\r\n\r\n@if (icon?.name) {\r\n\t<fkt-icon\r\n\t\t[style.font-size]=\"icon!.size || '116px'\"\r\n\t\t[class]=\"'text-gray-800'\"\r\n\t\t[name]=\"icon!.name\"\r\n\t/>\r\n}\r\n\r\n<div class=\"flex flex-col\">\r\n\t<h3 class=\"text-lg font-semibold text-gray-800\">\r\n\t\t{{ noResults().label }}\r\n\t</h3>\r\n\t@if (noResults().description) {\r\n\t\t<p class=\"mb-3  text-gray-800\">\r\n\t\t\t{{ noResults().description }}\r\n\t\t</p>\r\n\t}\r\n\r\n\t@if (action) {\r\n\t\t<fkt-buttons-list\r\n\t\t\t[actions]=\"[action]\"\r\n\t\t/>\r\n\t}\r\n\r\n</div>\r\n", styles: ["@reference \"../../styles/tailwind.css\";:host{@apply flex border border-gray-200 gap-4 min-h-[400px] justify-center items-center;}\n"] }]
        }] });

class FktAutocompleteOptionsComponent {
    options = input.required(...(ngDevMode ? [{ debugName: "options" }] : []));
    loading = input(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    selected = input(...(ngDevMode ? [undefined, { debugName: "selected" }] : []));
    actions = input([], ...(ngDevMode ? [{ debugName: "actions" }] : []));
    noResults = input({
        label: 'Sem resultados',
    }, ...(ngDevMode ? [{ debugName: "noResults" }] : []));
    select = output();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktAutocompleteOptionsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.1.7", type: FktAutocompleteOptionsComponent, isStandalone: true, selector: "fkt-autocomplete-options", inputs: { options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: true, transformFunction: null }, loading: { classPropertyName: "loading", publicName: "loading", isSignal: true, isRequired: false, transformFunction: null }, selected: { classPropertyName: "selected", publicName: "selected", isSignal: true, isRequired: false, transformFunction: null }, actions: { classPropertyName: "actions", publicName: "actions", isSignal: true, isRequired: false, transformFunction: null }, noResults: { classPropertyName: "noResults", publicName: "noResults", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { select: "select" }, host: { attributes: { "id": "autocomplete-options-overlay" } }, ngImport: i0, template: "<ul class=\"overlay\">\r\n\t@if (loading()) {\r\n\t\t<div class=\"flex w-full justify-center items-center p-4\">\r\n\t\t\t<fkt-spinner/>\r\n\t\t</div>\r\n\t} @else {\r\n\t\t@for (option of options(); track option.value) {\r\n\t\t\t<li\r\n\t\t\t\t(click)=\"select.emit(option)\"\r\n\t\t\t>{{ option.label }}\r\n\t\t\t\t<div>\r\n\t\t\t\t\t@if (option.value === selected()) {\r\n\t\t\t\t\t\t<fkt-icon\r\n\t\t\t\t\t\t\tclass=\"text-gray-700 size-6\"\r\n\t\t\t\t\t\t\tname=\"check\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t<fkt-buttons-list\r\n\t\t\t\t\t\t(click)=\"$event.stopPropagation()\"\r\n\t\t\t\t\t\t[context]=\"option\"\r\n\t\t\t\t\t\t[actions]=\"actions()\"\r\n\t\t\t\t\t/>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t} @empty {\r\n\t\t\t<fkt-no-results\r\n\t\t\t\tclass=\"!min-h-[250px]\"\r\n\t\t\t\t[noResults]=\"noResults()!\"\r\n\t\t\t/>\r\n\t\t}\r\n\t}\r\n</ul>\r\n", styles: ["@reference \"../../../styles/tailwind.css\";:host{display:block;width:100%}.overlay{@apply bg-white w-full shadow-md rounded-md drop-shadow-md border border-gray-100 z-10;}.overlay li{@apply hover:bg-gray-100 px-4 py-2 transition cursor-pointer flex justify-between;}\n"], dependencies: [{ kind: "component", type: FktIconComponent, selector: "fkt-icon", inputs: ["name"] }, { kind: "component", type: FktSpinnerComponent, selector: "fkt-spinner", inputs: ["size", "stroke", "color"] }, { kind: "component", type: FktNoResultsComponent, selector: "fkt-no-results", inputs: ["noResults"] }, { kind: "component", type: FktButtonsListComponent, selector: "fkt-buttons-list", inputs: ["context", "orientation", "fill", "verticalAlignment", "horizontalAlignment", "actions"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktAutocompleteOptionsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-autocomplete-options', imports: [
                        FktIconComponent,
                        FktSpinnerComponent,
                        FktNoResultsComponent,
                        FktButtonsListComponent,
                    ], host: {
                        id: 'autocomplete-options-overlay',
                    }, template: "<ul class=\"overlay\">\r\n\t@if (loading()) {\r\n\t\t<div class=\"flex w-full justify-center items-center p-4\">\r\n\t\t\t<fkt-spinner/>\r\n\t\t</div>\r\n\t} @else {\r\n\t\t@for (option of options(); track option.value) {\r\n\t\t\t<li\r\n\t\t\t\t(click)=\"select.emit(option)\"\r\n\t\t\t>{{ option.label }}\r\n\t\t\t\t<div>\r\n\t\t\t\t\t@if (option.value === selected()) {\r\n\t\t\t\t\t\t<fkt-icon\r\n\t\t\t\t\t\t\tclass=\"text-gray-700 size-6\"\r\n\t\t\t\t\t\t\tname=\"check\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t<fkt-buttons-list\r\n\t\t\t\t\t\t(click)=\"$event.stopPropagation()\"\r\n\t\t\t\t\t\t[context]=\"option\"\r\n\t\t\t\t\t\t[actions]=\"actions()\"\r\n\t\t\t\t\t/>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t} @empty {\r\n\t\t\t<fkt-no-results\r\n\t\t\t\tclass=\"!min-h-[250px]\"\r\n\t\t\t\t[noResults]=\"noResults()!\"\r\n\t\t\t/>\r\n\t\t}\r\n\t}\r\n</ul>\r\n", styles: ["@reference \"../../../styles/tailwind.css\";:host{display:block;width:100%}.overlay{@apply bg-white w-full shadow-md rounded-md drop-shadow-md border border-gray-100 z-10;}.overlay li{@apply hover:bg-gray-100 px-4 py-2 transition cursor-pointer flex justify-between;}\n"] }]
        }] });

class FktAutocompleteComponent {
    control = input.required(...(ngDevMode ? [{ debugName: "control" }] : []));
    options = input([], ...(ngDevMode ? [{ debugName: "options" }] : []));
    actions = input([], ...(ngDevMode ? [{ debugName: "actions" }] : []));
    enableAutoCreation = input(false, ...(ngDevMode ? [{ debugName: "enableAutoCreation" }] : []));
    noResults = input({
        label: 'Sem resultados',
    }, ...(ngDevMode ? [{ debugName: "noResults" }] : []));
    loading = input(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    placeholder = input('', ...(ngDevMode ? [{ debugName: "placeholder" }] : []));
    label = input('', ...(ngDevMode ? [{ debugName: "label" }] : []));
    search = output();
    overlayService = inject(FktOverlayService);
    inputComponent = viewChild.required(FktInputComponent);
    allOptions = computed(() => {
        const viewValue = this.control().viewValue();
        const enableAutoCreation = this.enableAutoCreation();
        const options = this.options();
        if (!enableAutoCreation || !viewValue)
            return options;
        if (!!options.find(option => option.label === viewValue || option.value === viewValue))
            return options;
        return [
            {
                label: viewValue,
                value: AUTOCOMPLETE_AUTO_CREATED_OPTION,
            },
            ...options,
        ];
    }, ...(ngDevMode ? [{ debugName: "allOptions" }] : []));
    transformer = value => {
        const search = value;
        const found = this.allOptions().find(item => item.value.toString() === search ||
            item.label.toString() === search);
        if (found)
            return {
                modelValue: found.value,
                viewValue: found.label,
            };
        return {
            viewValue: value,
            modelValue: null,
        };
    };
    closeOverlayOnOutsideClick = outsideClickEffect(() => {
        this.closeOverlay();
    }, { excludeIdsOrElements: ['autocomplete-options-overlay'] });
    openOverlay() {
        if (!!this.overlay || this.control().disabled())
            return;
        this.overlay = this.overlayService.open({
            anchorElementRef: this.inputComponent().element(),
            component: FktAutocompleteOptionsComponent,
            data: {
                options: this.allOptions,
                loading: this.loading,
                actions: this.actions(),
                selected: computed(() => this.selectedOption()?.value ?? null),
                noResults: this.noResults(),
                select: option => {
                    this.selectOption(option);
                },
            },
        });
    }
    overlay = null;
    selectedOption = computed(() => {
        const value = this.control().value();
        const found = this.allOptions().find(item => item.value === value);
        return found ?? null;
    }, ...(ngDevMode ? [{ debugName: "selectedOption" }] : []));
    selectOption(option) {
        this.control().setValue({
            modelValue: option.value,
            viewValue: option.label,
        });
        this.closeOverlay();
    }
    closeOverlay() {
        this.overlay?.close();
        this.overlay = null;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktAutocompleteComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "20.1.7", type: FktAutocompleteComponent, isStandalone: true, selector: "fkt-autocomplete", inputs: { control: { classPropertyName: "control", publicName: "control", isSignal: true, isRequired: true, transformFunction: null }, options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: false, transformFunction: null }, actions: { classPropertyName: "actions", publicName: "actions", isSignal: true, isRequired: false, transformFunction: null }, enableAutoCreation: { classPropertyName: "enableAutoCreation", publicName: "enableAutoCreation", isSignal: true, isRequired: false, transformFunction: null }, noResults: { classPropertyName: "noResults", publicName: "noResults", isSignal: true, isRequired: false, transformFunction: null }, loading: { classPropertyName: "loading", publicName: "loading", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { search: "search" }, viewQueries: [{ propertyName: "inputComponent", first: true, predicate: FktInputComponent, descendants: true, isSignal: true }], ngImport: i0, template: "<fkt-input\r\n\t[control]=\"control()\"\r\n\t[spellcheck]=\"false\"\r\n\t[label]=\"label()\"\r\n\t[transformer]=\"transformer\"\r\n\t[placeholder]=\"placeholder()\"\r\n\t(click)=\"openOverlay()\"\r\n/>\r\n", styles: ["@reference \"../../styles/tailwind.css\";.overlay-container{@apply relative opacity-0 pointer-events-none transition;}.overlay-container.show{@apply opacity-100 pointer-events-auto;}.overlay{@apply bg-white absolute w-full shadow-md rounded-md drop-shadow-md border border-gray-500 z-10;}.overlay li{@apply hover:bg-gray-100 px-4 py-2 transition cursor-pointer flex justify-between;}\n"], dependencies: [{ kind: "component", type: FktInputComponent, selector: "fkt-input", inputs: ["control", "label", "placeholder", "inputPadding", "type", "transformer", "spellcheck"] }] });
}
__decorate([
    MarkUsed()
], FktAutocompleteComponent.prototype, "closeOverlayOnOutsideClick", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktAutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-autocomplete', imports: [FktInputComponent], template: "<fkt-input\r\n\t[control]=\"control()\"\r\n\t[spellcheck]=\"false\"\r\n\t[label]=\"label()\"\r\n\t[transformer]=\"transformer\"\r\n\t[placeholder]=\"placeholder()\"\r\n\t(click)=\"openOverlay()\"\r\n/>\r\n", styles: ["@reference \"../../styles/tailwind.css\";.overlay-container{@apply relative opacity-0 pointer-events-none transition;}.overlay-container.show{@apply opacity-100 pointer-events-auto;}.overlay{@apply bg-white absolute w-full shadow-md rounded-md drop-shadow-md border border-gray-500 z-10;}.overlay li{@apply hover:bg-gray-100 px-4 py-2 transition cursor-pointer flex justify-between;}\n"] }]
        }], propDecorators: { closeOverlayOnOutsideClick: [] } });

class AbsPipe {
    transform(value) {
        return Math.abs(value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: AbsPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "20.1.7", ngImport: i0, type: AbsPipe, isStandalone: true, name: "abs" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: AbsPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'abs'
                }]
        }] });

class CallPipe {
    context = inject(ChangeDetectorRef).context;
    transform(first, fn, ...params) {
        return fn.apply(this.context, [first, ...params]);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: CallPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "20.1.7", ngImport: i0, type: CallPipe, isStandalone: true, name: "call" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: CallPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'call',
                }]
        }] });

class FormatCentsPipe {
    transform(value) {
        return (value / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FormatCentsPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "20.1.7", ngImport: i0, type: FormatCentsPipe, isStandalone: true, name: "formatCents" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FormatCentsPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'formatCents'
                }]
        }] });

class FormatCurrencyPipe {
    transform(value) {
        return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FormatCurrencyPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "20.1.7", ngImport: i0, type: FormatCurrencyPipe, isStandalone: true, name: "formatCurrency" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FormatCurrencyPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'formatCurrency'
                }]
        }] });

class SanitizePipe {
    sanitizer = inject(DomSanitizer);
    transform(value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: SanitizePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "20.1.7", ngImport: i0, type: SanitizePipe, isStandalone: true, name: "sanitize" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: SanitizePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'sanitize',
                    standalone: true
                }]
        }] });

class ToClassPipe {
    transform(value) {
        return value.join(' ');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: ToClassPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "20.1.7", ngImport: i0, type: ToClassPipe, isStandalone: true, name: "toClass" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: ToClassPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'toClass',
                }]
        }] });

class ToPercentPipe {
    transform(value) {
        return formatPercent(value, 'en');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: ToPercentPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "20.1.7", ngImport: i0, type: ToPercentPipe, isStandalone: true, name: "toPercent" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: ToPercentPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'toPercent'
                }]
        }] });

class FktBadgeComponent {
    text = input(...(ngDevMode ? [undefined, { debugName: "text" }] : []));
    color = input.required(...(ngDevMode ? [{ debugName: "color" }] : []));
    variant = input('opaque', ...(ngDevMode ? [{ debugName: "variant" }] : []));
    classes = computed(() => {
        const color = this.color();
        const variant = this.variant();
        return [
            color,
            variant,
            'h-fit',
            'w-fit',
            'text-white',
            'text-sm',
            'px-2',
            'py-1',
            'flex',
            'gap-2',
            'font-semibold',
            'items-center',
            'justify-center',
            'rounded-md',
        ];
    }, ...(ngDevMode ? [{ debugName: "classes" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktBadgeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.1.7", type: FktBadgeComponent, isStandalone: true, selector: "fkt-badge", inputs: { text: { classPropertyName: "text", publicName: "text", isSignal: true, isRequired: false, transformFunction: null }, color: { classPropertyName: "color", publicName: "color", isSignal: true, isRequired: true, transformFunction: null }, variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div [class]=\"classes() | toClass\">\r\n\t<ng-content select=\"[badge-content]\">\r\n\t\t{{ text() }}\r\n\t</ng-content>\r\n</div>\r\n", styles: ["@reference \"../../styles/tailwind.css\";.opaque.red{@apply bg-red-500;}.opaque.blue{@apply bg-blue-500;}.opaque.orange{@apply bg-orange-500;}.opaque.green{@apply bg-green-500;}.faded.red{@apply bg-red-200 text-black;}.faded.blue{@apply bg-blue-200 text-black;}.faded.orange{@apply bg-orange-200 text-black;}.faded.green{@apply bg-green-200 text-black;}\n"], dependencies: [{ kind: "pipe", type: ToClassPipe, name: "toClass" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktBadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-badge', imports: [ToClassPipe], template: "<div [class]=\"classes() | toClass\">\r\n\t<ng-content select=\"[badge-content]\">\r\n\t\t{{ text() }}\r\n\t</ng-content>\r\n</div>\r\n", styles: ["@reference \"../../styles/tailwind.css\";.opaque.red{@apply bg-red-500;}.opaque.blue{@apply bg-blue-500;}.opaque.orange{@apply bg-orange-500;}.opaque.green{@apply bg-green-500;}.faded.red{@apply bg-red-200 text-black;}.faded.blue{@apply bg-blue-200 text-black;}.faded.orange{@apply bg-orange-200 text-black;}.faded.green{@apply bg-green-200 text-black;}\n"] }]
        }] });

const fktBadgeColors = ['green', 'red', 'blue', 'orange'];
const fktBadgeVariants = ['opaque', 'faded'];

class BadgeSelectorModalComponent {
    options = input.required(...(ngDevMode ? [{ debugName: "options" }] : []));
    selected = input(...(ngDevMode ? [undefined, { debugName: "selected" }] : []));
    select = output();
    close = output();
    autoclose = outsideClickEffect(() => {
        this.close.emit();
    });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: BadgeSelectorModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.1.7", type: BadgeSelectorModalComponent, isStandalone: true, selector: "fkt-badge-selector-modal", inputs: { options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: true, transformFunction: null }, selected: { classPropertyName: "selected", publicName: "selected", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { select: "select", close: "close" }, ngImport: i0, template: "<div class=\"p-2 flex flex-col gap-2\">\r\n\t<div class=\"flex gap-2\">\r\n\t\t@for (option of options().slice(0, 3); track option.id) {\r\n\t\t\t<fkt-badge\r\n\t\t\t\tclass=\"block cursor-pointer hover:scale-105\"\r\n\t\t\t\t(click)=\"select.emit(option)\"\r\n\t\t\t\t[color]=\"option.color\"\r\n\t\t\t>\r\n\t\t\t\t<div badge-content class=\"flex gap-2 items-center\">\r\n\t\t\t\t\t@if (option.id === selected()?.id) {\r\n\t\t\t\t\t\t<fkt-icon name=\"check\" class=\"!text-sm\" />\r\n\t\t\t\t\t}\r\n\t\t\t\t\t<p class=\"whitespace-nowrap\">\r\n\t\t\t\t\t\t{{ option.name }}\r\n\t\t\t\t\t</p>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</fkt-badge>\r\n\t\t}\r\n\t</div>\r\n\r\n\t@let secondRowOptions = options().slice(3);\r\n\r\n\t@if (secondRowOptions.length) {\r\n\t\t<div class=\"flex flex-wrap gap-2\">\r\n\t\t\t@for (option of secondRowOptions; track option.id) {\r\n\t\t\t\t<fkt-badge\r\n\t\t\t\t\tclass=\"block cursor-pointer hover:scale-105\"\r\n\t\t\t\t\t(click)=\"select.emit(option)\"\r\n\t\t\t\t\t[color]=\"option.color\"\r\n\t\t\t\t>\r\n\t\t\t\t\t<div badge-content class=\"flex gap-2 items-center\">\r\n\t\t\t\t\t\t<p class=\"whitespace-nowrap\">\r\n\t\t\t\t\t\t\t{{ option.name }}\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t@if (option.id === selected()?.id) {\r\n\t\t\t\t\t\t\t<fkt-icon name=\"check\" />\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</fkt-badge>\r\n\t\t\t}\r\n\t\t</div>\r\n\t}\r\n\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "component", type: FktBadgeComponent, selector: "fkt-badge", inputs: ["text", "color", "variant"] }, { kind: "component", type: FktIconComponent, selector: "fkt-icon", inputs: ["name"] }] });
}
__decorate([
    MarkUsed()
], BadgeSelectorModalComponent.prototype, "autoclose", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: BadgeSelectorModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-badge-selector-modal', imports: [FktBadgeComponent, FktIconComponent], template: "<div class=\"p-2 flex flex-col gap-2\">\r\n\t<div class=\"flex gap-2\">\r\n\t\t@for (option of options().slice(0, 3); track option.id) {\r\n\t\t\t<fkt-badge\r\n\t\t\t\tclass=\"block cursor-pointer hover:scale-105\"\r\n\t\t\t\t(click)=\"select.emit(option)\"\r\n\t\t\t\t[color]=\"option.color\"\r\n\t\t\t>\r\n\t\t\t\t<div badge-content class=\"flex gap-2 items-center\">\r\n\t\t\t\t\t@if (option.id === selected()?.id) {\r\n\t\t\t\t\t\t<fkt-icon name=\"check\" class=\"!text-sm\" />\r\n\t\t\t\t\t}\r\n\t\t\t\t\t<p class=\"whitespace-nowrap\">\r\n\t\t\t\t\t\t{{ option.name }}\r\n\t\t\t\t\t</p>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</fkt-badge>\r\n\t\t}\r\n\t</div>\r\n\r\n\t@let secondRowOptions = options().slice(3);\r\n\r\n\t@if (secondRowOptions.length) {\r\n\t\t<div class=\"flex flex-wrap gap-2\">\r\n\t\t\t@for (option of secondRowOptions; track option.id) {\r\n\t\t\t\t<fkt-badge\r\n\t\t\t\t\tclass=\"block cursor-pointer hover:scale-105\"\r\n\t\t\t\t\t(click)=\"select.emit(option)\"\r\n\t\t\t\t\t[color]=\"option.color\"\r\n\t\t\t\t>\r\n\t\t\t\t\t<div badge-content class=\"flex gap-2 items-center\">\r\n\t\t\t\t\t\t<p class=\"whitespace-nowrap\">\r\n\t\t\t\t\t\t\t{{ option.name }}\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t@if (option.id === selected()?.id) {\r\n\t\t\t\t\t\t\t<fkt-icon name=\"check\" />\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</fkt-badge>\r\n\t\t\t}\r\n\t\t</div>\r\n\t}\r\n\r\n</div>\r\n" }]
        }], propDecorators: { autoclose: [] } });

class FktBadgeSelectorComponent {
    options = input.required(...(ngDevMode ? [{ debugName: "options" }] : []));
    currentBadgeId = model(...(ngDevMode ? [undefined, { debugName: "currentBadgeId" }] : []));
    overlay = inject(FktOverlayService);
    ref = null;
    elementRef = inject(ElementRef);
    selectedOption = computed(() => {
        const currentBadgeId = this.currentBadgeId();
        const options = this.options();
        return options.find(option => option.id === currentBadgeId);
    }, ...(ngDevMode ? [{ debugName: "selectedOption" }] : []));
    select() {
        if (this.ref)
            return;
        this.ref = this.overlay.open({
            component: (BadgeSelectorModalComponent),
            data: {
                options: this.options,
                selected: this.selectedOption,
                select: badge => {
                    this.currentBadgeId.set(badge.id);
                    this.close();
                },
            },
            anchorElementRef: this.elementRef,
            panelOptions: {
                position: 'bottom-start',
                minWidth: 'fit-content',
                width: 'fit-content',
                maxHeight: 'fit-content',
                outsideClick: () => {
                    this.close();
                }
            },
        });
    }
    close() {
        this.ref?.close();
        this.ref = null;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktBadgeSelectorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.1.7", type: FktBadgeSelectorComponent, isStandalone: true, selector: "fkt-badge-selector", inputs: { options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: true, transformFunction: null }, currentBadgeId: { classPropertyName: "currentBadgeId", publicName: "currentBadgeId", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { currentBadgeId: "currentBadgeIdChange" }, ngImport: i0, template: "@let selectedOptionValue = selectedOption();\r\n\r\n@if (selectedOptionValue) {\r\n\t<fkt-badge\r\n\t\tclass=\"cursor-pointer hover:scale-105 transition block\"\r\n\t\t(click)=\"select()\"\r\n\t\t[color]=\"selectedOptionValue.color\"\r\n\t>\r\n\t\t<div badge-content class=\"flex gap-2 items-center\">\r\n\t\t\t<p class=\"whitespace-nowrap\">\r\n\t\t\t\t{{ selectedOption()?.name }}\r\n\r\n\t\t\t</p>\r\n\t\t\t<fkt-icon\r\n\t\t\t\tname=\"chevron-down\"\r\n\t\t\t/>\r\n\t\t</div>\r\n\t</fkt-badge>\r\n\r\n}\r\n", styles: [":host{width:fit-content;display:flex}\n"], dependencies: [{ kind: "component", type: FktBadgeComponent, selector: "fkt-badge", inputs: ["text", "color", "variant"] }, { kind: "component", type: FktIconComponent, selector: "fkt-icon", inputs: ["name"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktBadgeSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-badge-selector', imports: [FktBadgeComponent, FktIconComponent], template: "@let selectedOptionValue = selectedOption();\r\n\r\n@if (selectedOptionValue) {\r\n\t<fkt-badge\r\n\t\tclass=\"cursor-pointer hover:scale-105 transition block\"\r\n\t\t(click)=\"select()\"\r\n\t\t[color]=\"selectedOptionValue.color\"\r\n\t>\r\n\t\t<div badge-content class=\"flex gap-2 items-center\">\r\n\t\t\t<p class=\"whitespace-nowrap\">\r\n\t\t\t\t{{ selectedOption()?.name }}\r\n\r\n\t\t\t</p>\r\n\t\t\t<fkt-icon\r\n\t\t\t\tname=\"chevron-down\"\r\n\t\t\t/>\r\n\t\t</div>\r\n\t</fkt-badge>\r\n\r\n}\r\n", styles: [":host{width:fit-content;display:flex}\n"] }]
        }] });

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
                        classes: ['opacity-20'],
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
                        classes: ['opacity-20'],
                        isCurrentDate: false,
                        isToday,
                    });
                }
            }
        }
        return list;
    }, ...(ngDevMode ? [{ debugName: "days" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: CalendarDateSelectorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.1.7", type: CalendarDateSelectorComponent, isStandalone: true, selector: "fkt-calendar-date-selector", inputs: { headerLess: { classPropertyName: "headerLess", publicName: "headerLess", isSignal: true, isRequired: false, transformFunction: null }, currentDate: { classPropertyName: "currentDate", publicName: "currentDate", isSignal: true, isRequired: false, transformFunction: null }, configFn: { classPropertyName: "configFn", publicName: "configFn", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { currentDate: "currentDateChange", afterSelect: "afterSelect", yearClick: "yearClick", monthClick: "monthClick" }, ngImport: i0, template: "<div class=\"grid-cols-7 grid w-full gap-2\">\r\n\t@for (weekday of weekdays(); track weekday) {\r\n\t\t<div class=\"text-center capitalize\">\r\n\t\t\t{{ weekday | date: 'EEE' }}\r\n\t\t</div>\r\n\t}\r\n\t@for (day of days(); track day.date) {\r\n\t\t<div\r\n\t\t\t[class.cursor-pointer]=\"day.onClick\"\r\n\t\t\t[class.hover:bg-blue-200]=\"day.onClick\"\r\n\t\t\t[class.!border-gray-500]=\"day.isToday\"\r\n\t\t\t[class.!bg-blue-300]=\"day.isCurrentDate\"\r\n\t\t\t(click)=\"day.onClick?.()\"\r\n\t\t\t[class]=\"'select-none transition  border border-transparent aspect-square flex justify-center items-center rounded-full ' + (day.classes | toClass)\">\r\n\t\t\t{{ day.date | date: 'dd' }}\r\n\t\t</div>\r\n\t}\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "pipe", type: DatePipe, name: "date" }, { kind: "pipe", type: ToClassPipe, name: "toClass" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: CalendarDateSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-calendar-date-selector', imports: [DatePipe, ToClassPipe], template: "<div class=\"grid-cols-7 grid w-full gap-2\">\r\n\t@for (weekday of weekdays(); track weekday) {\r\n\t\t<div class=\"text-center capitalize\">\r\n\t\t\t{{ weekday | date: 'EEE' }}\r\n\t\t</div>\r\n\t}\r\n\t@for (day of days(); track day.date) {\r\n\t\t<div\r\n\t\t\t[class.cursor-pointer]=\"day.onClick\"\r\n\t\t\t[class.hover:bg-blue-200]=\"day.onClick\"\r\n\t\t\t[class.!border-gray-500]=\"day.isToday\"\r\n\t\t\t[class.!bg-blue-300]=\"day.isCurrentDate\"\r\n\t\t\t(click)=\"day.onClick?.()\"\r\n\t\t\t[class]=\"'select-none transition  border border-transparent aspect-square flex justify-center items-center rounded-full ' + (day.classes | toClass)\">\r\n\t\t\t{{ day.date | date: 'dd' }}\r\n\t\t</div>\r\n\t}\r\n</div>\r\n" }]
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: CalendarMonthSelectorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.1.7", type: CalendarMonthSelectorComponent, isStandalone: true, selector: "fkt-calendar-month-selector", inputs: { headerLess: { classPropertyName: "headerLess", publicName: "headerLess", isSignal: true, isRequired: false, transformFunction: null }, currentDate: { classPropertyName: "currentDate", publicName: "currentDate", isSignal: true, isRequired: false, transformFunction: null }, configFn: { classPropertyName: "configFn", publicName: "configFn", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { currentDate: "currentDateChange", back: "back", yearClick: "yearClick" }, ngImport: i0, template: "<div class=\"grid-cols-3 grid w-full gap-2\">\r\n\t@for (month of months; track month) {\r\n\t\t<div\r\n\t\t\t(click)=\"selectMonth(month)\"\r\n\t\t\tclass=\"text-center capitalize cursor-pointer hover:bg-blue-100 transition px-2 py-1 rounded-md\">\r\n\t\t\t{{ month | date: 'MMMM' }}\r\n\t\t</div>\r\n\t}\r\n</div>\r\n", styles: ["@reference \"../../../../styles/tailwind.css\";:host{@apply block w-full h-full;}\n"], dependencies: [{ kind: "pipe", type: DatePipe, name: "date" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: CalendarMonthSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-calendar-month-selector', imports: [DatePipe], template: "<div class=\"grid-cols-3 grid w-full gap-2\">\r\n\t@for (month of months; track month) {\r\n\t\t<div\r\n\t\t\t(click)=\"selectMonth(month)\"\r\n\t\t\tclass=\"text-center capitalize cursor-pointer hover:bg-blue-100 transition px-2 py-1 rounded-md\">\r\n\t\t\t{{ month | date: 'MMMM' }}\r\n\t\t</div>\r\n\t}\r\n</div>\r\n", styles: ["@reference \"../../../../styles/tailwind.css\";:host{@apply block w-full h-full;}\n"] }]
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: CalendarYearSelectorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.1.7", type: CalendarYearSelectorComponent, isStandalone: true, selector: "fkt-calendar-year-selector", inputs: { headerLess: { classPropertyName: "headerLess", publicName: "headerLess", isSignal: true, isRequired: false, transformFunction: null }, currentDate: { classPropertyName: "currentDate", publicName: "currentDate", isSignal: true, isRequired: false, transformFunction: null }, configFn: { classPropertyName: "configFn", publicName: "configFn", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { currentDate: "currentDateChange", back: "back" }, ngImport: i0, template: "<div class=\"grid-cols-3 grid w-full gap-2\">\r\n\t@for (year of years(); track $index) {\r\n\t\t<div\r\n\t\t\t(click)=\"selectYear(year)\"\r\n\t\t\tclass=\"text-center capitalize cursor-pointer hover:bg-blue-100 transition px-2 py-1 rounded-md\">\r\n\t\t\t{{ year | date: 'yyyy' }}\r\n\t\t</div>\r\n\t}\r\n</div>\r\n", styles: ["@reference \"../../../../styles/tailwind.css\";:host{@apply block w-full h-full;}\n"], dependencies: [{ kind: "pipe", type: DatePipe, name: "date" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: CalendarYearSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-calendar-year-selector', imports: [DatePipe], template: "<div class=\"grid-cols-3 grid w-full gap-2\">\r\n\t@for (year of years(); track $index) {\r\n\t\t<div\r\n\t\t\t(click)=\"selectYear(year)\"\r\n\t\t\tclass=\"text-center capitalize cursor-pointer hover:bg-blue-100 transition px-2 py-1 rounded-md\">\r\n\t\t\t{{ year | date: 'yyyy' }}\r\n\t\t</div>\r\n\t}\r\n</div>\r\n", styles: ["@reference \"../../../../styles/tailwind.css\";:host{@apply block w-full h-full;}\n"] }]
        }] });

class FktNavigatorComponent {
    next = output();
    previous = output();
    canGoToPrevious = input(true, ...(ngDevMode ? [{ debugName: "canGoToPrevious" }] : []));
    canGoToNext = input(true, ...(ngDevMode ? [{ debugName: "canGoToNext" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktNavigatorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.1.7", type: FktNavigatorComponent, isStandalone: true, selector: "fkt-navigator", inputs: { canGoToPrevious: { classPropertyName: "canGoToPrevious", publicName: "canGoToPrevious", isSignal: true, isRequired: false, transformFunction: null }, canGoToNext: { classPropertyName: "canGoToNext", publicName: "canGoToNext", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { next: "next", previous: "previous" }, ngImport: i0, template: "<div class=\"flex justify-between items-center\">\r\n\t<div class=\"flex\">\r\n\t\t<fkt-button\r\n\t\t\t(click)=\"previous.emit()\"\r\n\t\t\t[disabled]=\"!canGoToPrevious()\"\r\n\t\t\ttheme=\"basic\"\r\n\t\t\ticon=\"chevron-double-left\"\r\n\t\t/>\r\n\t</div>\r\n\t<div class=\"flex w-full justify-center items-center\">\r\n\t\t<ng-content/>\r\n\t</div>\r\n\t<div class=\"flex justify-end\">\r\n\t\t<fkt-button\r\n\t\t\t(click)=\"next.emit()\"\r\n\t\t\t[disabled]=\"!canGoToNext()\"\r\n\t\t\ttheme=\"basic\"\r\n\t\t\ticon=\"chevron-double-right\"\r\n\t\t/>\r\n\t</div>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "component", type: FktButtonComponent, selector: "fkt-button", inputs: ["loading", "disabled", "text", "loadingText", "color", "theme", "variant", "icon", "iconPosition"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktNavigatorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-navigator', imports: [FktButtonComponent], template: "<div class=\"flex justify-between items-center\">\r\n\t<div class=\"flex\">\r\n\t\t<fkt-button\r\n\t\t\t(click)=\"previous.emit()\"\r\n\t\t\t[disabled]=\"!canGoToPrevious()\"\r\n\t\t\ttheme=\"basic\"\r\n\t\t\ticon=\"chevron-double-left\"\r\n\t\t/>\r\n\t</div>\r\n\t<div class=\"flex w-full justify-center items-center\">\r\n\t\t<ng-content/>\r\n\t</div>\r\n\t<div class=\"flex justify-end\">\r\n\t\t<fkt-button\r\n\t\t\t(click)=\"next.emit()\"\r\n\t\t\t[disabled]=\"!canGoToNext()\"\r\n\t\t\ttheme=\"basic\"\r\n\t\t\ticon=\"chevron-double-right\"\r\n\t\t/>\r\n\t</div>\r\n</div>\r\n" }]
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: CalendarYearHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.1.7", type: CalendarYearHeaderComponent, isStandalone: true, selector: "fkt-calendar-year-header", inputs: { currentDate: { classPropertyName: "currentDate", publicName: "currentDate", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { currentDate: "currentDateChange", yearClick: "yearClick" }, ngImport: i0, template: "<fkt-navigator\r\n\t(next)=\"next()\"\r\n\t(previous)=\"previous()\"\r\n>\r\n\t<div class=\"flex items-center gap-3\">\r\n\t\t<strong\r\n\t\t\t(click)=\"yearClick.emit()\"\r\n\t\t\tclass=\"cursor-pointer hover:bg-blue-100 transition px-1 rounded-md text-lg font-semibold\">\r\n\t\t\t{{ currentDate() | date: 'yyyy' }}\r\n\t\t</strong>\r\n\t</div>\r\n</fkt-navigator>\r\n", styles: [""], dependencies: [{ kind: "component", type: FktNavigatorComponent, selector: "fkt-navigator", inputs: ["canGoToPrevious", "canGoToNext"], outputs: ["next", "previous"] }, { kind: "pipe", type: DatePipe, name: "date" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: CalendarYearHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-calendar-year-header', imports: [DatePipe, FktNavigatorComponent], template: "<fkt-navigator\r\n\t(next)=\"next()\"\r\n\t(previous)=\"previous()\"\r\n>\r\n\t<div class=\"flex items-center gap-3\">\r\n\t\t<strong\r\n\t\t\t(click)=\"yearClick.emit()\"\r\n\t\t\tclass=\"cursor-pointer hover:bg-blue-100 transition px-1 rounded-md text-lg font-semibold\">\r\n\t\t\t{{ currentDate() | date: 'yyyy' }}\r\n\t\t</strong>\r\n\t</div>\r\n</fkt-navigator>\r\n" }]
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: CalendarMonthHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.1.7", type: CalendarMonthHeaderComponent, isStandalone: true, selector: "fkt-calendar-month-header", inputs: { currentDate: { classPropertyName: "currentDate", publicName: "currentDate", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { currentDate: "currentDateChange", yearClick: "yearClick", monthClick: "monthClick" }, ngImport: i0, template: "<fkt-navigator\r\n\t(next)=\"next()\"\r\n\t(previous)=\"previous()\"\r\n>\r\n\t<div class=\"flex items-center gap-3\">\r\n\t\t<strong\r\n\t\t\t(click)=\"monthClick.emit()\"\r\n\t\t\tclass=\"cursor-pointer hover:bg-blue-100 transition px-1 rounded-md capitalize text-lg font-semibold\">\r\n\t\t\t{{ currentDate() | date: 'MMMM' }}\r\n\t\t</strong>\r\n\r\n\t\t<strong\r\n\t\t\t(click)=\"yearClick.emit()\"\r\n\t\t\tclass=\"cursor-pointer hover:bg-blue-100 transition px-1 rounded-md text-lg font-semibold\">\r\n\t\t\t{{ currentDate() | date: 'yyyy' }}\r\n\t\t</strong>\r\n\t</div>\r\n</fkt-navigator>\r\n", styles: [""], dependencies: [{ kind: "component", type: FktNavigatorComponent, selector: "fkt-navigator", inputs: ["canGoToPrevious", "canGoToNext"], outputs: ["next", "previous"] }, { kind: "pipe", type: DatePipe, name: "date" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: CalendarMonthHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-calendar-month-header', imports: [DatePipe, FktNavigatorComponent], template: "<fkt-navigator\r\n\t(next)=\"next()\"\r\n\t(previous)=\"previous()\"\r\n>\r\n\t<div class=\"flex items-center gap-3\">\r\n\t\t<strong\r\n\t\t\t(click)=\"monthClick.emit()\"\r\n\t\t\tclass=\"cursor-pointer hover:bg-blue-100 transition px-1 rounded-md capitalize text-lg font-semibold\">\r\n\t\t\t{{ currentDate() | date: 'MMMM' }}\r\n\t\t</strong>\r\n\r\n\t\t<strong\r\n\t\t\t(click)=\"yearClick.emit()\"\r\n\t\t\tclass=\"cursor-pointer hover:bg-blue-100 transition px-1 rounded-md text-lg font-semibold\">\r\n\t\t\t{{ currentDate() | date: 'yyyy' }}\r\n\t\t</strong>\r\n\t</div>\r\n</fkt-navigator>\r\n" }]
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: CalendarMultiYearHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.1.7", type: CalendarMultiYearHeaderComponent, isStandalone: true, selector: "fkt-calendar-multi-year-header", inputs: { currentDate: { classPropertyName: "currentDate", publicName: "currentDate", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { currentDate: "currentDateChange" }, ngImport: i0, template: "<fkt-navigator\r\n\t(next)=\"next()\"\r\n\t(previous)=\"previous()\"\r\n>\r\n\t<div class=\"flex items-center gap-3\">\r\n\t\t<strong\r\n\t\t\tclass=\"px-1 text-lg font-semibold\">\r\n\t\t\t{{ currentDecade() }}\r\n\t\t</strong>\r\n\t</div>\r\n</fkt-navigator>\r\n", styles: [""], dependencies: [{ kind: "component", type: FktNavigatorComponent, selector: "fkt-navigator", inputs: ["canGoToPrevious", "canGoToNext"], outputs: ["next", "previous"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: CalendarMultiYearHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-calendar-multi-year-header', imports: [FktNavigatorComponent], template: "<fkt-navigator\r\n\t(next)=\"next()\"\r\n\t(previous)=\"previous()\"\r\n>\r\n\t<div class=\"flex items-center gap-3\">\r\n\t\t<strong\r\n\t\t\tclass=\"px-1 text-lg font-semibold\">\r\n\t\t\t{{ currentDecade() }}\r\n\t\t</strong>\r\n\t</div>\r\n</fkt-navigator>\r\n" }]
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktCalendarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.1.7", type: FktCalendarComponent, isStandalone: true, selector: "fkt-calendar", inputs: { configFn: { classPropertyName: "configFn", publicName: "configFn", isSignal: true, isRequired: false, transformFunction: null }, currentDate: { classPropertyName: "currentDate", publicName: "currentDate", isSignal: true, isRequired: false, transformFunction: null }, borderless: { classPropertyName: "borderless", publicName: "borderless", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { currentDate: "currentDateChange" }, host: { properties: { "class.with-border": "!borderless()" } }, ngImport: i0, template: "@switch (step()) {\r\n\t@case ('date') {\r\n\t\t<fkt-calendar-month-header\r\n\t\t\t(yearClick)=\"selectStep('year')\"\r\n\t\t\t(monthClick)=\"selectStep('month')\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t\t<hr class=\"my-2 border-gray-200 \">\r\n\t\t<fkt-calendar-date-selector\r\n\t\t\t[configFn]=\"configFn()\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t}\r\n\t@case ('month') {\r\n\t\t<fkt-calendar-year-header\r\n\t\t\t(yearClick)=\"selectStep('year')\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t\t<hr class=\"my-2 border-gray-200\">\r\n\t\t<fkt-calendar-month-selector\r\n\t\t\t[configFn]=\"configFn()\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t\t(back)=\"goBackToLastStep()\"\r\n\t\t/>\r\n\t}\r\n\t@case ('year') {\r\n\t\t<fkt-calendar-multi-year-header\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t\t<hr class=\"my-2 border-gray-200\">\r\n\t\t<fkt-calendar-year-selector\r\n\t\t\t[configFn]=\"configFn()\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t\t(back)=\"goBackToLastStep()\"\r\n\t\t/>\r\n\t}\r\n}\r\n", styles: ["@reference \"../../styles/tailwind.css\";:host{@apply flex flex-col w-full h-full;}:host.with-border{@apply border border-gray-200 p-4 rounded-md shadow-md;}\n"], dependencies: [{ kind: "component", type: CalendarDateSelectorComponent, selector: "fkt-calendar-date-selector", inputs: ["headerLess", "currentDate", "configFn"], outputs: ["currentDateChange", "afterSelect", "yearClick", "monthClick"] }, { kind: "component", type: CalendarMonthSelectorComponent, selector: "fkt-calendar-month-selector", inputs: ["headerLess", "currentDate", "configFn"], outputs: ["currentDateChange", "back", "yearClick"] }, { kind: "component", type: CalendarYearSelectorComponent, selector: "fkt-calendar-year-selector", inputs: ["headerLess", "currentDate", "configFn"], outputs: ["currentDateChange", "back"] }, { kind: "component", type: CalendarYearHeaderComponent, selector: "fkt-calendar-year-header", inputs: ["currentDate"], outputs: ["currentDateChange", "yearClick"] }, { kind: "component", type: CalendarMonthHeaderComponent, selector: "fkt-calendar-month-header", inputs: ["currentDate"], outputs: ["currentDateChange", "yearClick", "monthClick"] }, { kind: "component", type: CalendarMultiYearHeaderComponent, selector: "fkt-calendar-multi-year-header", inputs: ["currentDate"], outputs: ["currentDateChange"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktCalendarComponent, decorators: [{
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
                    }, template: "@switch (step()) {\r\n\t@case ('date') {\r\n\t\t<fkt-calendar-month-header\r\n\t\t\t(yearClick)=\"selectStep('year')\"\r\n\t\t\t(monthClick)=\"selectStep('month')\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t\t<hr class=\"my-2 border-gray-200 \">\r\n\t\t<fkt-calendar-date-selector\r\n\t\t\t[configFn]=\"configFn()\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t}\r\n\t@case ('month') {\r\n\t\t<fkt-calendar-year-header\r\n\t\t\t(yearClick)=\"selectStep('year')\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t\t<hr class=\"my-2 border-gray-200\">\r\n\t\t<fkt-calendar-month-selector\r\n\t\t\t[configFn]=\"configFn()\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t\t(back)=\"goBackToLastStep()\"\r\n\t\t/>\r\n\t}\r\n\t@case ('year') {\r\n\t\t<fkt-calendar-multi-year-header\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t\t<hr class=\"my-2 border-gray-200\">\r\n\t\t<fkt-calendar-year-selector\r\n\t\t\t[configFn]=\"configFn()\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t\t(back)=\"goBackToLastStep()\"\r\n\t\t/>\r\n\t}\r\n}\r\n", styles: ["@reference \"../../styles/tailwind.css\";:host{@apply flex flex-col w-full h-full;}:host.with-border{@apply border border-gray-200 p-4 rounded-md shadow-md;}\n"] }]
        }] });

const fktCalendarStep = ['date', 'month', 'year'];

class FktCalendarNavigatorModalComponent {
    step = input('date', ...(ngDevMode ? [{ debugName: "step" }] : []));
    currentDate = input(new Date(), ...(ngDevMode ? [{ debugName: "currentDate" }] : []));
    close = output();
    select = output();
    internalDate = linkedSignal(this.currentDate);
    autoClose = outsideClickEffect(() => {
        this.close.emit();
    });
    selectDate($event) {
        this.select.emit($event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktCalendarNavigatorModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.1.7", type: FktCalendarNavigatorModalComponent, isStandalone: true, selector: "fkt-calendar-navigator-modal", inputs: { step: { classPropertyName: "step", publicName: "step", isSignal: true, isRequired: false, transformFunction: null }, currentDate: { classPropertyName: "currentDate", publicName: "currentDate", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { close: "close", select: "select" }, ngImport: i0, template: "@switch (step()) {\r\n\t@case ('date') {\r\n\t\t<fkt-calendar-date-selector\r\n\t\t\t(currentDateChange)=\"selectDate($event)\"\r\n\t\t\t[currentDate]=\"currentDate()\"\r\n\t\t/>\r\n\t}\r\n\t@case ('month') {\r\n\t\t<fkt-calendar-month-selector\r\n\t\t\t(currentDateChange)=\"selectDate($event)\"\r\n\t\t\t[currentDate]=\"currentDate()\"\r\n\t\t/>\r\n\t}\r\n\t@case ('year') {\r\n\t\t<fkt-calendar-multi-year-header\r\n\t\t\t[(currentDate)]=\"internalDate\"\r\n\t\t/>\r\n\t\t<hr class=\"my-2 border-gray-200\">\r\n\r\n\t\t<fkt-calendar-year-selector\r\n\t\t\t(currentDateChange)=\"selectDate($event)\"\r\n\t\t\t[currentDate]=\"internalDate()\"\r\n\t\t/>\r\n\t}\r\n}\r\n", styles: ["@reference \"../../../styles/tailwind.css\";:host{@apply block h-fit w-fit p-4 min-w-[400px];}\n"], dependencies: [{ kind: "component", type: CalendarMonthSelectorComponent, selector: "fkt-calendar-month-selector", inputs: ["headerLess", "currentDate", "configFn"], outputs: ["currentDateChange", "back", "yearClick"] }, { kind: "component", type: CalendarDateSelectorComponent, selector: "fkt-calendar-date-selector", inputs: ["headerLess", "currentDate", "configFn"], outputs: ["currentDateChange", "afterSelect", "yearClick", "monthClick"] }, { kind: "component", type: CalendarYearSelectorComponent, selector: "fkt-calendar-year-selector", inputs: ["headerLess", "currentDate", "configFn"], outputs: ["currentDateChange", "back"] }, { kind: "component", type: CalendarMultiYearHeaderComponent, selector: "fkt-calendar-multi-year-header", inputs: ["currentDate"], outputs: ["currentDateChange"] }] });
}
__decorate([
    MarkUsed()
], FktCalendarNavigatorModalComponent.prototype, "autoClose", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktCalendarNavigatorModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-calendar-navigator-modal', imports: [
                        CalendarMonthSelectorComponent,
                        CalendarDateSelectorComponent,
                        CalendarYearSelectorComponent,
                        CalendarMultiYearHeaderComponent,
                    ], template: "@switch (step()) {\r\n\t@case ('date') {\r\n\t\t<fkt-calendar-date-selector\r\n\t\t\t(currentDateChange)=\"selectDate($event)\"\r\n\t\t\t[currentDate]=\"currentDate()\"\r\n\t\t/>\r\n\t}\r\n\t@case ('month') {\r\n\t\t<fkt-calendar-month-selector\r\n\t\t\t(currentDateChange)=\"selectDate($event)\"\r\n\t\t\t[currentDate]=\"currentDate()\"\r\n\t\t/>\r\n\t}\r\n\t@case ('year') {\r\n\t\t<fkt-calendar-multi-year-header\r\n\t\t\t[(currentDate)]=\"internalDate\"\r\n\t\t/>\r\n\t\t<hr class=\"my-2 border-gray-200\">\r\n\r\n\t\t<fkt-calendar-year-selector\r\n\t\t\t(currentDateChange)=\"selectDate($event)\"\r\n\t\t\t[currentDate]=\"internalDate()\"\r\n\t\t/>\r\n\t}\r\n}\r\n", styles: ["@reference \"../../../styles/tailwind.css\";:host{@apply block h-fit w-fit p-4 min-w-[400px];}\n"] }]
        }], propDecorators: { autoClose: [] } });

class FktCalendarNavigatorComponent {
    mode = input('month', ...(ngDevMode ? [{ debugName: "mode" }] : []));
    currentDate = model(new Date(), ...(ngDevMode ? [{ debugName: "currentDate" }] : []));
    overlay = inject(FktOverlayService);
    elementRef = inject(ElementRef);
    overlayRef = null;
    openMonthModal() {
        this.openModal('month');
    }
    openYearModal() {
        this.openModal('year');
    }
    openModal(step) {
        if (this.overlayRef) {
            this.closeModal();
        }
        this.overlayRef = this.overlay.open({
            component: FktCalendarNavigatorModalComponent,
            data: {
                step,
                currentDate: this.currentDate(),
                select: date => {
                    this.currentDate.set(date);
                    this.closeModal();
                },
                close: () => {
                    this.closeModal();
                },
            },
            anchorElementRef: this.elementRef,
            panelOptions: {
                maxHeight: 'fit-content',
                width: 'fit-content',
            },
        });
    }
    closeModal() {
        this.overlayRef?.close();
        this.overlayRef = null;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktCalendarNavigatorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.1.7", type: FktCalendarNavigatorComponent, isStandalone: true, selector: "fkt-calendar-navigator", inputs: { mode: { classPropertyName: "mode", publicName: "mode", isSignal: true, isRequired: false, transformFunction: null }, currentDate: { classPropertyName: "currentDate", publicName: "currentDate", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { currentDate: "currentDateChange" }, ngImport: i0, template: "@switch (mode()) {\r\n\t@case ('month') {\r\n\t\t<fkt-calendar-month-header\r\n\t\t\t(yearClick)=\"openYearModal()\"\r\n\t\t\t(monthClick)=\"openMonthModal()\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t}\r\n\t@case ('year') {\r\n\t\t<fkt-calendar-year-header\r\n\t\t\t(yearClick)=\"openYearModal()\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t}\r\n}\r\n", styles: [""], dependencies: [{ kind: "component", type: CalendarMonthHeaderComponent, selector: "fkt-calendar-month-header", inputs: ["currentDate"], outputs: ["currentDateChange", "yearClick", "monthClick"] }, { kind: "component", type: CalendarYearHeaderComponent, selector: "fkt-calendar-year-header", inputs: ["currentDate"], outputs: ["currentDateChange", "yearClick"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktCalendarNavigatorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-calendar-navigator', imports: [CalendarMonthHeaderComponent, CalendarYearHeaderComponent], template: "@switch (mode()) {\r\n\t@case ('month') {\r\n\t\t<fkt-calendar-month-header\r\n\t\t\t(yearClick)=\"openYearModal()\"\r\n\t\t\t(monthClick)=\"openMonthModal()\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t}\r\n\t@case ('year') {\r\n\t\t<fkt-calendar-year-header\r\n\t\t\t(yearClick)=\"openYearModal()\"\r\n\t\t\t[(currentDate)]=\"currentDate\"\r\n\t\t/>\r\n\t}\r\n}\r\n" }]
        }] });

const fktCalendarNavigatorModes = ['month', 'year'];

class FktCardComponent {
    borderless = input(false, ...(ngDevMode ? [{ debugName: "borderless", transform: booleanAttribute }] : [{
            transform: booleanAttribute,
        }]));
    shadowless = input(false, ...(ngDevMode ? [{ debugName: "shadowless", transform: booleanAttribute }] : [{
            transform: booleanAttribute,
        }]));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.1.7", type: FktCardComponent, isStandalone: true, selector: "fkt-card", inputs: { borderless: { classPropertyName: "borderless", publicName: "borderless", isSignal: true, isRequired: false, transformFunction: null }, shadowless: { classPropertyName: "shadowless", publicName: "shadowless", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.with-border": "!borderless()", "class.with-shadow": "!shadowless()" } }, ngImport: i0, template: "<ng-content/>\r\n", styles: ["@reference \"../../styles/tailwind.css\";:host{@apply flex flex-col overflow-auto;}:host.with-border{@apply border rounded-lg;}:host.with-shadow{@apply shadow-lg;}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-card', imports: [], host: {
                        '[class.with-border]': '!borderless()',
                        '[class.with-shadow]': '!shadowless()',
                    }, template: "<ng-content/>\r\n", styles: ["@reference \"../../styles/tailwind.css\";:host{@apply flex flex-col overflow-auto;}:host.with-border{@apply border rounded-lg;}:host.with-shadow{@apply shadow-lg;}\n"] }]
        }] });

class FktCheckboxComponent {
    control = input.required(...(ngDevMode ? [{ debugName: "control" }] : []));
    label = input('', ...(ngDevMode ? [{ debugName: "label" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktCheckboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.1.7", type: FktCheckboxComponent, isStandalone: true, selector: "fkt-checkbox", inputs: { control: { classPropertyName: "control", publicName: "control", isSignal: true, isRequired: true, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<label class=\"inline-flex items-center cursor-pointer group\">\r\n\t<input\r\n\t\ttype=\"checkbox\"\r\n\t\t[signalFormControl]=\"control()\"\r\n\t\tclass=\"appearance-none w-5 h-5 border-2 border-gray-400 rounded-sm\r\n           checked:bg-gray-600 checked:border-gray-600\r\n           outline-none\r\n           transition-all duration-150\r\n           relative\r\n           cursor-pointer\r\n           before:content-[''] before:absolute before:top-0 before:left-1 before:w-2 before:h-3\r\n           before:border-white before:border-r-2 before:border-b-2\r\n           before:rotate-45 before:scale-0 checked:before:scale-100\r\n           peer\"\r\n\t/>\r\n\t<span class=\"ml-2 text-md  select-none\">{{ label() }}</span>\r\n</label>\r\n", styles: ["@reference \"../../styles/tailwind.css\";:host{@apply block mt-4;}\n"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: SignalFormControlDirective, selector: "input[signalFormControl],textarea[signalFormControl]", inputs: ["signalFormControl", "transformer", "updateOn"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-checkbox', imports: [ReactiveFormsModule, SignalFormControlDirective], template: "<label class=\"inline-flex items-center cursor-pointer group\">\r\n\t<input\r\n\t\ttype=\"checkbox\"\r\n\t\t[signalFormControl]=\"control()\"\r\n\t\tclass=\"appearance-none w-5 h-5 border-2 border-gray-400 rounded-sm\r\n           checked:bg-gray-600 checked:border-gray-600\r\n           outline-none\r\n           transition-all duration-150\r\n           relative\r\n           cursor-pointer\r\n           before:content-[''] before:absolute before:top-0 before:left-1 before:w-2 before:h-3\r\n           before:border-white before:border-r-2 before:border-b-2\r\n           before:rotate-45 before:scale-0 checked:before:scale-100\r\n           peer\"\r\n\t/>\r\n\t<span class=\"ml-2 text-md  select-none\">{{ label() }}</span>\r\n</label>\r\n", styles: ["@reference \"../../styles/tailwind.css\";:host{@apply block mt-4;}\n"] }]
        }] });

class FktDatePickerModalComponent {
    currentDate = input(new Date(), ...(ngDevMode ? [{ debugName: "currentDate" }] : []));
    select = output();
    internalCurrentDate = linkedSignal(this.currentDate);
    dateConfigFn = date => {
        return {
            onClick: () => {
                this.internalCurrentDate.set(date);
                this.select.emit(date);
            },
        };
    };
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktDatePickerModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.1.7", type: FktDatePickerModalComponent, isStandalone: true, selector: "fkt-date-picker-modal", inputs: { currentDate: { classPropertyName: "currentDate", publicName: "currentDate", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { select: "select" }, ngImport: i0, template: "<fkt-calendar\r\n\t[(currentDate)]=\"internalCurrentDate\"\r\n\t[configFn]=\"dateConfigFn\"\r\n/>\r\n", styles: ["@reference \"../../../styles/tailwind.css\";:host{@apply h-fit w-[400px] block p-4;}\n"], dependencies: [{ kind: "component", type: FktCalendarComponent, selector: "fkt-calendar", inputs: ["configFn", "currentDate", "borderless"], outputs: ["currentDateChange"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktDatePickerModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-date-picker-modal', imports: [FktCalendarComponent], template: "<fkt-calendar\r\n\t[(currentDate)]=\"internalCurrentDate\"\r\n\t[configFn]=\"dateConfigFn\"\r\n/>\r\n", styles: ["@reference \"../../../styles/tailwind.css\";:host{@apply h-fit w-[400px] block p-4;}\n"] }]
        }] });

class FktDatePickerComponent {
    label = input(...(ngDevMode ? [undefined, { debugName: "label" }] : []));
    placeholder = input(...(ngDevMode ? [undefined, { debugName: "placeholder" }] : []));
    control = input.required(...(ngDevMode ? [{ debugName: "control" }] : []));
    overlay = inject(FktOverlayService);
    overlayRef = null;
    transformer = dateTransformer;
    autoclose = outsideClickEffect(() => {
        this.closeModal();
    }, {
        excludeIdsOrElements: ['calendar-datepicker-modal'],
    });
    openModal(ref, position) {
        if (this.overlayRef) {
            this.closeModal();
            return;
        }
        this.overlayRef = this.overlay.open({
            component: FktDatePickerModalComponent,
            data: {
                currentDate: this.getCurrentDate(this.control().value()),
                select: date => {
                    this.control().setValue(date);
                    this.closeModal();
                },
            },
            anchorElementRef: { nativeElement: ref },
            panelOptions: {
                id: 'calendar-datepicker-modal',
                width: 'fit-content',
                position,
                maxHeight: 'fit-content',
            },
        });
    }
    getCurrentDate(value) {
        if (value instanceof Date)
            return value;
        if (typeof value === 'string' && isValidDateString(value))
            return new Date(value);
        return new Date();
    }
    closeModal() {
        this.overlayRef?.close();
        this.overlayRef = null;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktDatePickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.1.7", type: FktDatePickerComponent, isStandalone: true, selector: "fkt-date-picker", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, control: { classPropertyName: "control", publicName: "control", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0, template: "<fkt-input\r\n\t#input\r\n\t[label]=\"label() ?? ''\"\r\n\t(click)=\"openModal(input.element()?.nativeElement!, 'bottom-start')\"\r\n\t[placeholder]=\"placeholder() ?? ''\"\r\n\t[transformer]=\"transformer\"\r\n\t[control]=\"control()\"\r\n>\r\n\t<div #ref class=\"mr-1\" *appFormControlSuffix>\r\n\t\t<fkt-button\r\n\t\t\ttheme=\"basic\"\r\n\t\t\t(click)=\"$event.stopImmediatePropagation(); openModal(ref, 'bottom-end')\"\r\n\t\t\tvariant=\"icon\"\r\n\t\t\ticon=\"calendar\"\r\n\t\t\tcolor=\"primary\"\r\n\t\t/>\r\n\t</div>\r\n</fkt-input>\r\n", styles: [""], dependencies: [{ kind: "component", type: FktInputComponent, selector: "fkt-input", inputs: ["control", "label", "placeholder", "inputPadding", "type", "transformer", "spellcheck"] }, { kind: "component", type: FktButtonComponent, selector: "fkt-button", inputs: ["loading", "disabled", "text", "loadingText", "color", "theme", "variant", "icon", "iconPosition"] }] });
}
__decorate([
    MarkUsed()
], FktDatePickerComponent.prototype, "autoclose", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktDatePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-date-picker', imports: [FktInputComponent, FktButtonComponent], template: "<fkt-input\r\n\t#input\r\n\t[label]=\"label() ?? ''\"\r\n\t(click)=\"openModal(input.element()?.nativeElement!, 'bottom-start')\"\r\n\t[placeholder]=\"placeholder() ?? ''\"\r\n\t[transformer]=\"transformer\"\r\n\t[control]=\"control()\"\r\n>\r\n\t<div #ref class=\"mr-1\" *appFormControlSuffix>\r\n\t\t<fkt-button\r\n\t\t\ttheme=\"basic\"\r\n\t\t\t(click)=\"$event.stopImmediatePropagation(); openModal(ref, 'bottom-end')\"\r\n\t\t\tvariant=\"icon\"\r\n\t\t\ticon=\"calendar\"\r\n\t\t\tcolor=\"primary\"\r\n\t\t/>\r\n\t</div>\r\n</fkt-input>\r\n" }]
        }], propDecorators: { autoclose: [] } });

const injectWindowScroll = () => {
    const destroyRef = inject(DestroyRef);
    const window = inject(WINDOW);
    const scroll = signal({
        x: window.scrollX,
        y: window.scrollY,
    }, ...(ngDevMode ? [{ debugName: "scroll" }] : []));
    const onScroll = () => {
        scroll.set({
            x: window.scrollX,
            y: window.scrollY,
        });
    };
    window.addEventListener('scroll', onScroll);
    destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', onScroll);
    });
    return scroll.asReadonly();
};

class DialogAnchorComponent {
    backdropClick = output();
    height = input('fit-content', ...(ngDevMode ? [{ debugName: "height" }] : []));
    width = input('100%', ...(ngDevMode ? [{ debugName: "width" }] : []));
    maxHeight = input('90vh', ...(ngDevMode ? [{ debugName: "maxHeight" }] : []));
    maxWidth = input('1200px', ...(ngDevMode ? [{ debugName: "maxWidth" }] : []));
    borderRadius = input('1rem', ...(ngDevMode ? [{ debugName: "borderRadius" }] : []));
    backgroundColor = input('white', ...(ngDevMode ? [{ debugName: "backgroundColor" }] : []));
    padding = input('1rem', ...(ngDevMode ? [{ debugName: "padding" }] : []));
    container = viewChild.required('container', { read: ViewContainerRef });
    windowScroll = injectWindowScroll();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: DialogAnchorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "20.1.7", type: DialogAnchorComponent, isStandalone: true, selector: "fkt-dialog-host", inputs: { height: { classPropertyName: "height", publicName: "height", isSignal: true, isRequired: false, transformFunction: null }, width: { classPropertyName: "width", publicName: "width", isSignal: true, isRequired: false, transformFunction: null }, maxHeight: { classPropertyName: "maxHeight", publicName: "maxHeight", isSignal: true, isRequired: false, transformFunction: null }, maxWidth: { classPropertyName: "maxWidth", publicName: "maxWidth", isSignal: true, isRequired: false, transformFunction: null }, borderRadius: { classPropertyName: "borderRadius", publicName: "borderRadius", isSignal: true, isRequired: false, transformFunction: null }, backgroundColor: { classPropertyName: "backgroundColor", publicName: "backgroundColor", isSignal: true, isRequired: false, transformFunction: null }, padding: { classPropertyName: "padding", publicName: "padding", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { backdropClick: "backdropClick" }, host: { properties: { "style.--height": "height()", "style.--width": "width()", "style.--max-width": "maxWidth()", "style.--max-height": "maxHeight()", "style.--top": "windowScroll().y + \"px\"", "style.--left": "windowScroll().x + \"px\"", "style.--border-radius": "borderRadius()", "style.--background-color": "backgroundColor()", "style.--padding": "padding()" } }, viewQueries: [{ propertyName: "container", first: true, predicate: ["container"], descendants: true, read: ViewContainerRef, isSignal: true }], ngImport: i0, template: `
        <div class="backdrop" (click)="backdropClick.emit()"></div>
        <div class="container">
            <ng-template #container></ng-template>
        </div>
    `, isInline: true, styles: ["@reference \"../../../styles/tailwind.css\";:host{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center;top:var(--top);left:var(--left)}.backdrop{background-color:#0005;width:100%;height:100%;position:absolute;top:0}.container{overflow-x:hidden;display:flex;flex-direction:column;z-index:20;padding:var(--padding);width:var(--width);height:var(--height);max-width:var(--max-width);max-height:var(--max-height);background-color:var(--background-color);border-radius:var(--border-radius)}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: DialogAnchorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-dialog-host', template: `
        <div class="backdrop" (click)="backdropClick.emit()"></div>
        <div class="container">
            <ng-template #container></ng-template>
        </div>
    `, standalone: true, host: {
                        '[style.--height]': 'height()',
                        '[style.--width]': 'width()',
                        '[style.--max-width]': 'maxWidth()',
                        '[style.--max-height]': 'maxHeight()',
                        '[style.--top]': 'windowScroll().y + "px"',
                        '[style.--left]': 'windowScroll().x + "px"',
                        '[style.--border-radius]': 'borderRadius()',
                        '[style.--background-color]': 'backgroundColor()',
                        '[style.--padding]': 'padding()',
                    }, styles: ["@reference \"../../../styles/tailwind.css\";:host{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center;top:var(--top);left:var(--left)}.backdrop{background-color:#0005;width:100%;height:100%;position:absolute;top:0}.container{overflow-x:hidden;display:flex;flex-direction:column;z-index:20;padding:var(--padding);width:var(--width);height:var(--height);max-width:var(--max-width);max-height:var(--max-height);background-color:var(--background-color);border-radius:var(--border-radius)}\n"] }]
        }] });

class FktDialogConfirmActionComponent {
    title = input.required(...(ngDevMode ? [{ debugName: "title" }] : []));
    description = input(...(ngDevMode ? [undefined, { debugName: "description" }] : []));
    actions = input(...(ngDevMode ? [undefined, { debugName: "actions" }] : []));
    confirmActions = computed(() => {
        const { primary, secondary } = this.actions() || {};
        const primaryAction = {
            identifier: 'primary',
            text: 'Confirmar',
            color: 'red',
            ...primary,
        };
        const secondaryAction = {
            identifier: 'secondary',
            text: 'Voltar',
            theme: 'stroked',
            ...secondary,
        };
        return [primaryAction, secondaryAction];
    }, ...(ngDevMode ? [{ debugName: "confirmActions" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktDialogConfirmActionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.1.7", type: FktDialogConfirmActionComponent, isStandalone: true, selector: "fkt-dialog-confirm-action", inputs: { title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: true, transformFunction: null }, description: { classPropertyName: "description", publicName: "description", isSignal: true, isRequired: false, transformFunction: null }, actions: { classPropertyName: "actions", publicName: "actions", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div class=\"flex justify-center flex-col items-center\">\r\n\t<fkt-icon\r\n\t\tname=\"exclamation-triangle\"\r\n\t\tclass=\"!text-[80px] text-red-500\"\r\n\t/>\r\n\t<h3 class=\"text-lg text-center font-semibold my-4 w-[300px]\">\r\n\t\t{{title()}}\r\n\t</h3>\r\n\t@if (description()) {\r\n\t\t<p class=\"text-gray-500\">\r\n\t\t\t{{ description() }}\r\n\t\t</p>\r\n\t}\r\n\r\n</div>\r\n<div class=\"flex justify-center mt-4\">\r\n\t<fkt-buttons-list\r\n\t\tclass=\"w-full\"\r\n\t\torientation=\"vertical\"\r\n\t\tfill\r\n\t\t[actions]=\"confirmActions()\"\r\n\t/>\r\n</div>\r\n\r\n", styles: ["@reference \"../../../styles/tailwind.css\";:host{@apply p-2 w-[400px] block;}\n"], dependencies: [{ kind: "component", type: FktButtonsListComponent, selector: "fkt-buttons-list", inputs: ["context", "orientation", "fill", "verticalAlignment", "horizontalAlignment", "actions"] }, { kind: "component", type: FktIconComponent, selector: "fkt-icon", inputs: ["name"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktDialogConfirmActionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-dialog-confirm-action', imports: [FktButtonsListComponent, FktIconComponent], template: "<div class=\"flex justify-center flex-col items-center\">\r\n\t<fkt-icon\r\n\t\tname=\"exclamation-triangle\"\r\n\t\tclass=\"!text-[80px] text-red-500\"\r\n\t/>\r\n\t<h3 class=\"text-lg text-center font-semibold my-4 w-[300px]\">\r\n\t\t{{title()}}\r\n\t</h3>\r\n\t@if (description()) {\r\n\t\t<p class=\"text-gray-500\">\r\n\t\t\t{{ description() }}\r\n\t\t</p>\r\n\t}\r\n\r\n</div>\r\n<div class=\"flex justify-center mt-4\">\r\n\t<fkt-buttons-list\r\n\t\tclass=\"w-full\"\r\n\t\torientation=\"vertical\"\r\n\t\tfill\r\n\t\t[actions]=\"confirmActions()\"\r\n\t/>\r\n</div>\r\n\r\n", styles: ["@reference \"../../../styles/tailwind.css\";:host{@apply p-2 w-[400px] block;}\n"] }]
        }] });

class FktDialogService {
    anchorService = inject(FktElementAnchorService);
    dialogs = [];
    open(options) {
        const anchor = this.anchorService.createAnchor(DialogAnchorComponent, {
            ...options?.panelOptions,
            backdropClick: () => {
                anchor.destroy();
                options?.panelOptions?.backdropClick?.();
            },
        });
        const componentRef = anchor.componentRef.instance
            .container()
            .createComponent(options.component, {
            bindings: createComponentBindings(options.component, options.data),
        });
        this.dialogs.push({ componentRef, anchor });
        return { componentRef, close: () => anchor.destroy() };
    }
    confirm(options) {
        const instance = this.open({
            component: FktDialogConfirmActionComponent,
            data: {
                ...options,
                actions: {
                    ...options.actions,
                    secondary: {
                        ...options.actions?.secondary,
                        click: () => {
                            options.actions?.secondary?.click?.(null);
                            instance.close();
                        },
                    }
                }
            },
            panelOptions: {
                width: 'fit-content',
                backdropClick: () => {
                    options?.backdropClick?.();
                }
            }
        });
        return instance;
    }
    closeAll() {
        this.dialogs.forEach(dialog => {
            dialog.anchor.destroy();
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktDialogService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktDialogService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktDialogService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class FktSelectOverlayComponent {
    hostElement = input.required(...(ngDevMode ? [{ debugName: "hostElement" }] : []));
    options = input.required(...(ngDevMode ? [{ debugName: "options" }] : []));
    loading = input(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    selected = input(...(ngDevMode ? [undefined, { debugName: "selected" }] : []));
    activeOptionId = input.required(...(ngDevMode ? [{ debugName: "activeOptionId" }] : []));
    noResults = input({
        label: 'Sem resultados',
    }, ...(ngDevMode ? [{ debugName: "noResults" }] : []));
    select = output();
    document = inject(DOCUMENT);
    scrollToActiveOption = effect(() => {
        const activeOptionId = this.activeOptionId();
        if (!activeOptionId)
            return;
        this.document.getElementById(activeOptionId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }, ...(ngDevMode ? [{ debugName: "scrollToActiveOption" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktSelectOverlayComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.1.7", type: FktSelectOverlayComponent, isStandalone: true, selector: "fkt-fkt-select-overlay", inputs: { hostElement: { classPropertyName: "hostElement", publicName: "hostElement", isSignal: true, isRequired: true, transformFunction: null }, options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: true, transformFunction: null }, loading: { classPropertyName: "loading", publicName: "loading", isSignal: true, isRequired: false, transformFunction: null }, selected: { classPropertyName: "selected", publicName: "selected", isSignal: true, isRequired: false, transformFunction: null }, activeOptionId: { classPropertyName: "activeOptionId", publicName: "activeOptionId", isSignal: true, isRequired: true, transformFunction: null }, noResults: { classPropertyName: "noResults", publicName: "noResults", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { select: "select" }, ngImport: i0, template: "<ul class=\"overlay\" role=\"listbox\"\r\n>\r\n\t@if (loading()) {\r\n\t\t<div class=\"flex w-full justify-center items-center p-4\">\r\n\t\t\t<fkt-spinner/>\r\n\t\t</div>\r\n\t} @else {\r\n\t\t@for (option of options(); track option.value) {\r\n\t\t\t<li\r\n\t\t\t\t#option\r\n\t\t\t\trole=\"option\"\r\n\t\t\t\t[id]=\"'fkt-select-option-' + option.value\"\r\n\t\t\t\t[class.bg-gray-100]=\"('fkt-select-option-' + option.value) === activeOptionId()\"\r\n\t\t\t\t(click)=\"select.emit(option)\"\r\n\t\t\t\t[attr.aria-label]=\"option.label\"\r\n\t\t\t\t[attr.aria-selected]=\"option.value === selected()\"\r\n\t\t\t>\r\n\t\t\t\t{{ option.label }}\r\n\t\t\t\t@if (option.value === selected()) {\r\n\t\t\t\t\t<fkt-icon\r\n\t\t\t\t\t\taria-hidden=\"true\"\r\n\t\t\t\t\t\tclass=\"text-gray-700 size-6\"\r\n\t\t\t\t\t\tname=\"check\"\r\n\t\t\t\t\t/>\r\n\t\t\t\t}\r\n\t\t\t</li>\r\n\t\t} @empty {\r\n\t\t\t<fkt-no-results\r\n\t\t\t\t[noResults]=\"noResults()!\"\r\n\t\t\t/>\r\n\t\t}\r\n\t}\r\n</ul>\r\n", styles: ["@reference \"../../../styles/tailwind.css\";:host{display:block;width:100%}.overlay{@apply bg-white w-full shadow-md rounded-md drop-shadow-md border border-gray-100 z-10;}.overlay li{@apply hover:bg-gray-100 px-4 py-2 transition cursor-pointer flex justify-between;}\n"], dependencies: [{ kind: "component", type: FktSpinnerComponent, selector: "fkt-spinner", inputs: ["size", "stroke", "color"] }, { kind: "component", type: FktNoResultsComponent, selector: "fkt-no-results", inputs: ["noResults"] }, { kind: "component", type: FktIconComponent, selector: "fkt-icon", inputs: ["name"] }] });
}
__decorate([
    MarkUsed()
], FktSelectOverlayComponent.prototype, "scrollToActiveOption", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktSelectOverlayComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-fkt-select-overlay', imports: [
                        FktSpinnerComponent,
                        FktNoResultsComponent,
                        FktIconComponent
                    ], template: "<ul class=\"overlay\" role=\"listbox\"\r\n>\r\n\t@if (loading()) {\r\n\t\t<div class=\"flex w-full justify-center items-center p-4\">\r\n\t\t\t<fkt-spinner/>\r\n\t\t</div>\r\n\t} @else {\r\n\t\t@for (option of options(); track option.value) {\r\n\t\t\t<li\r\n\t\t\t\t#option\r\n\t\t\t\trole=\"option\"\r\n\t\t\t\t[id]=\"'fkt-select-option-' + option.value\"\r\n\t\t\t\t[class.bg-gray-100]=\"('fkt-select-option-' + option.value) === activeOptionId()\"\r\n\t\t\t\t(click)=\"select.emit(option)\"\r\n\t\t\t\t[attr.aria-label]=\"option.label\"\r\n\t\t\t\t[attr.aria-selected]=\"option.value === selected()\"\r\n\t\t\t>\r\n\t\t\t\t{{ option.label }}\r\n\t\t\t\t@if (option.value === selected()) {\r\n\t\t\t\t\t<fkt-icon\r\n\t\t\t\t\t\taria-hidden=\"true\"\r\n\t\t\t\t\t\tclass=\"text-gray-700 size-6\"\r\n\t\t\t\t\t\tname=\"check\"\r\n\t\t\t\t\t/>\r\n\t\t\t\t}\r\n\t\t\t</li>\r\n\t\t} @empty {\r\n\t\t\t<fkt-no-results\r\n\t\t\t\t[noResults]=\"noResults()!\"\r\n\t\t\t/>\r\n\t\t}\r\n\t}\r\n</ul>\r\n", styles: ["@reference \"../../../styles/tailwind.css\";:host{display:block;width:100%}.overlay{@apply bg-white w-full shadow-md rounded-md drop-shadow-md border border-gray-100 z-10;}.overlay li{@apply hover:bg-gray-100 px-4 py-2 transition cursor-pointer flex justify-between;}\n"] }]
        }], propDecorators: { scrollToActiveOption: [] } });

const KEY = makeStateKey('fkt-id-sequence');
class ElementIdGeneratorService {
    platformId = inject(PLATFORM_ID);
    transferState = inject(TransferState);
    clientBuffer = null;
    clientIdx = 0;
    serverCounter = 0;
    next(prefix) {
        const isServer = isPlatformServer(this.platformId);
        if (isServer) {
            const id = `${prefix}-${this.serverCounter++}`;
            const sequence = this.transferState.get(KEY, []);
            this.transferState.set(KEY, [...sequence, id]);
            return id;
        }
        if (!this.clientBuffer)
            this.clientBuffer = this.transferState.get(KEY, []);
        const fromSSR = this.clientBuffer[this.clientIdx++];
        if (fromSSR)
            return fromSSR;
        return `${prefix}-${Date.now()}-${this.clientIdx++}`;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: ElementIdGeneratorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: ElementIdGeneratorService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: ElementIdGeneratorService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

class FktSelectComponent {
    control = input.required(...(ngDevMode ? [{ debugName: "control" }] : []));
    label = input(...(ngDevMode ? [undefined, { debugName: "label" }] : []));
    placeholder = input(...(ngDevMode ? [undefined, { debugName: "placeholder" }] : []));
    loading = input(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    options = input.required(...(ngDevMode ? [{ debugName: "options" }] : []));
    noResults = input({
        label: 'Sem resultados',
    }, ...(ngDevMode ? [{ debugName: "noResults" }] : []));
    selectOpened = output();
    overlayService = inject(FktOverlayService);
    idGenerator = inject(ElementIdGeneratorService);
    labelId = this.idGenerator.next('fkt-select-label');
    listBoxId = this.idGenerator.next('fkt-select-list-box');
    errorId = this.idGenerator.next('fkt-select-active-error');
    overlayRef = signal(null, ...(ngDevMode ? [{ debugName: "overlayRef" }] : []));
    opened = computed(() => !!this.overlayRef(), ...(ngDevMode ? [{ debugName: "opened" }] : []));
    activeIndex = signal(-1, ...(ngDevMode ? [{ debugName: "activeIndex" }] : []));
    activeOptionId = computed(() => {
        const options = this.options();
        const activeOption = options[this.activeIndex()];
        if (!activeOption)
            return null;
        return 'fkt-select-option-' + activeOption.value;
    }, ...(ngDevMode ? [{ debugName: "activeOptionId" }] : []));
    selectedIndex = computed(() => {
        return this.options().findIndex(option => option.value === this.selectedOption()?.value);
    }, ...(ngDevMode ? [{ debugName: "selectedIndex" }] : []));
    handleKeydown(element, event) {
        if (this.opened() || this.control().disabled())
            return void this.onKeyDownWithOverlayOpened(element, event);
        switch (event.key) {
            case 'ArrowDown':
            case 'ArrowUp':
            case 'Space':
            case ' ':
            case 'Enter':
                this.openOverlay(element);
                event.preventDefault();
                this.activeIndex.set(this.selectedIndex() >= 0 ? this.selectedIndex() : 0);
                break;
        }
    }
    onKeyDownWithOverlayOpened(element, event) {
        const activeOption = this.options()[this.activeIndex()];
        switch (event.key) {
            case 'ArrowDown':
                this.activeIndex.set((this.activeIndex() + 1) % this.options().length);
                event.preventDefault();
                break;
            case 'ArrowUp':
                this.activeIndex.set((this.activeIndex() - 1 + this.options().length) % this.options().length);
                event.preventDefault();
                break;
            case 'Enter':
            case ' ':
                this.selectOption(activeOption);
                event.preventDefault();
                this.activeIndex.set(-1);
                element.focus();
                break;
            case 'Escape':
                this.closeOverlay();
                event.preventDefault();
                this.activeIndex.set(-1);
                element.focus();
                break;
            case 'Tab':
                this.closeOverlay();
                event.preventDefault();
                this.activeIndex.set(-1);
                break;
            case 'Home':
                this.activeIndex.set(0);
                event.preventDefault();
                break;
            case 'End':
                this.activeIndex.set(this.options().length - 1);
                event.preventDefault();
                break;
        }
    }
    openOverlay(nativeElement) {
        if (this.control().disabled())
            return;
        if (!!this.overlayRef()) {
            this.closeOverlay();
            return;
        }
        this.selectOpened.emit();
        const overlayRef = this.overlayService.open({
            component: FktSelectOverlayComponent,
            data: {
                hostElement: nativeElement,
                options: this.options,
                loading: this.loading,
                selected: computed(() => this.selectedOption()?.value ?? null),
                noResults: this.noResults(),
                activeOptionId: this.activeOptionId,
                select: (option) => {
                    this.selectOption(option);
                },
            },
            anchorElementRef: { nativeElement },
            panelOptions: {
                outsideClick: () => {
                    this.closeOverlay();
                },
                maxHeight: '420px',
            }
        });
        this.overlayRef.set(overlayRef);
    }
    selectedOption = computed(() => {
        const value = this.control().value();
        const found = this.options().find(item => item.value === value);
        return found ?? null;
    }, ...(ngDevMode ? [{ debugName: "selectedOption" }] : []));
    selectOption(option) {
        this.control().setValue({
            modelValue: option.value,
            viewValue: option.label,
        });
        this.closeOverlay();
    }
    closeOverlay() {
        this.control().markAsTouched();
        this.overlayRef()?.close();
        this.overlayRef.set(null);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktSelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.1.7", type: FktSelectComponent, isStandalone: true, selector: "fkt-select", inputs: { control: { classPropertyName: "control", publicName: "control", isSignal: true, isRequired: true, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, loading: { classPropertyName: "loading", publicName: "loading", isSignal: true, isRequired: false, transformFunction: null }, options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: true, transformFunction: null }, noResults: { classPropertyName: "noResults", publicName: "noResults", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { selectOpened: "selectOpened" }, host: { properties: { "class.opened": "opened()", "class.disabled": "control().disabled()" } }, ngImport: i0, template: "<div class=\"flex gap-2 items-center\">\r\n\t<label\r\n\t\t[id]=\"labelId\"\r\n\t\t[class.!text-red-500]=\"!!error.message()\"\r\n\t\t[class.float]=\"control().viewValue()\"\r\n\t\tclass=\"text-gray-800 font-medium text-sm mb-1\"\r\n\t>{{ label() }}</label>\r\n</div>\r\n\r\n<div class=\"relative\">\r\n\t<div\r\n\t\t#element\r\n\t\tclass=\"container\"\r\n\t\t[class.opened]=\"opened()\"\r\n\t\t[class.!border-red-500]=\"!!error.message()\"\r\n\t\t(click)=\"openOverlay(element)\"\r\n\t\t(keydown)=\"handleKeydown(element, $event)\"\r\n\t\trole=\"combobox\"\r\n\t\taria-haspopup=\"listbox\"\r\n\t\ttabindex=\"0\"\r\n\t\t[attr.aria-labelledby]=\"labelId\"\r\n\t\t[attr.aria-expanded]=\"opened()\"\r\n\t\t[attr.aria-controls]=\"opened() ? listBoxId : null\"\r\n\t\t[attr.aria-activedescendant]=\"opened() ? activeOptionId() : null\"\r\n\t\t[attr.aria-disabled]=\"control().disabled()\"\r\n\t\t[attr.aria-invalid]=\"!!error.message()\"\r\n\t\t[attr.aria-errormessage]=\"!!error.message() ? errorId : null\"\r\n\t>\r\n\t\t<div>\r\n\t\t\t@if (selectedOption()?.label) {\r\n\t\t\t\t<span>\r\n\t\t\t\t{{ selectedOption()?.label }}\r\n\t\t\t\t</span>\r\n\t\t\t} @else if (opened()) {\r\n\t\t\t\t<span class=\"text-gray-400\" aria-hidden=\"true\">{{ placeholder() }}</span>\r\n\t\t\t}\r\n\t\t</div>\r\n\t\t<fkt-icon aria-hidden=\"true\" name=\"chevron-down\"/>\r\n\t</div>\r\n</div>\r\n\r\n<fkt-field-error\r\n\t#error\r\n\t[id]=\"errorId\"\r\n\taria-live=\"polite\"\r\n\t[control]=\"control()\"\r\n/>\r\n", styles: ["@reference \"../../styles/tailwind.css\";:host{@apply block rounded-full relative mt-5 border-gray-500 transition scroll-smooth w-full;}:host .container{@apply outline-none border-gray-400 min-h-[50px] w-full transition border hover:border-gray-600 focus:border-black rounded-lg flex justify-between items-center px-4 py-2 bg-transparent cursor-pointer;}:host .container::placeholder{@apply opacity-0;}:host label{@apply absolute px-1 top-[15px] left-3 transition bg-white text-gray-500;}:host.opened label{@apply text-yellow-500 z-50 scale-90 -translate-x-1 -translate-y-[27px];}:host.opened .container{@apply border-yellow-500;}:host.disabled{@apply select-none;}:host.disabled label{@apply text-gray-400 z-50 scale-90 -translate-x-1 -translate-y-[27px];}:host.disabled .container{@apply border-gray-200 text-gray-400 cursor-not-allowed;}:host .float{@apply z-50 scale-90 -translate-x-1 -translate-y-[27px];}:host fkt-field-error{@apply pl-3;}\n"], dependencies: [{ kind: "component", type: FieldErrorComponent, selector: "fkt-field-error", inputs: ["control"] }, { kind: "component", type: FktIconComponent, selector: "fkt-icon", inputs: ["name"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-select', imports: [
                        FieldErrorComponent,
                        FktIconComponent
                    ], host: {
                        '[class.opened]': 'opened()',
                        '[class.disabled]': 'control().disabled()',
                    }, template: "<div class=\"flex gap-2 items-center\">\r\n\t<label\r\n\t\t[id]=\"labelId\"\r\n\t\t[class.!text-red-500]=\"!!error.message()\"\r\n\t\t[class.float]=\"control().viewValue()\"\r\n\t\tclass=\"text-gray-800 font-medium text-sm mb-1\"\r\n\t>{{ label() }}</label>\r\n</div>\r\n\r\n<div class=\"relative\">\r\n\t<div\r\n\t\t#element\r\n\t\tclass=\"container\"\r\n\t\t[class.opened]=\"opened()\"\r\n\t\t[class.!border-red-500]=\"!!error.message()\"\r\n\t\t(click)=\"openOverlay(element)\"\r\n\t\t(keydown)=\"handleKeydown(element, $event)\"\r\n\t\trole=\"combobox\"\r\n\t\taria-haspopup=\"listbox\"\r\n\t\ttabindex=\"0\"\r\n\t\t[attr.aria-labelledby]=\"labelId\"\r\n\t\t[attr.aria-expanded]=\"opened()\"\r\n\t\t[attr.aria-controls]=\"opened() ? listBoxId : null\"\r\n\t\t[attr.aria-activedescendant]=\"opened() ? activeOptionId() : null\"\r\n\t\t[attr.aria-disabled]=\"control().disabled()\"\r\n\t\t[attr.aria-invalid]=\"!!error.message()\"\r\n\t\t[attr.aria-errormessage]=\"!!error.message() ? errorId : null\"\r\n\t>\r\n\t\t<div>\r\n\t\t\t@if (selectedOption()?.label) {\r\n\t\t\t\t<span>\r\n\t\t\t\t{{ selectedOption()?.label }}\r\n\t\t\t\t</span>\r\n\t\t\t} @else if (opened()) {\r\n\t\t\t\t<span class=\"text-gray-400\" aria-hidden=\"true\">{{ placeholder() }}</span>\r\n\t\t\t}\r\n\t\t</div>\r\n\t\t<fkt-icon aria-hidden=\"true\" name=\"chevron-down\"/>\r\n\t</div>\r\n</div>\r\n\r\n<fkt-field-error\r\n\t#error\r\n\t[id]=\"errorId\"\r\n\taria-live=\"polite\"\r\n\t[control]=\"control()\"\r\n/>\r\n", styles: ["@reference \"../../styles/tailwind.css\";:host{@apply block rounded-full relative mt-5 border-gray-500 transition scroll-smooth w-full;}:host .container{@apply outline-none border-gray-400 min-h-[50px] w-full transition border hover:border-gray-600 focus:border-black rounded-lg flex justify-between items-center px-4 py-2 bg-transparent cursor-pointer;}:host .container::placeholder{@apply opacity-0;}:host label{@apply absolute px-1 top-[15px] left-3 transition bg-white text-gray-500;}:host.opened label{@apply text-yellow-500 z-50 scale-90 -translate-x-1 -translate-y-[27px];}:host.opened .container{@apply border-yellow-500;}:host.disabled{@apply select-none;}:host.disabled label{@apply text-gray-400 z-50 scale-90 -translate-x-1 -translate-y-[27px];}:host.disabled .container{@apply border-gray-200 text-gray-400 cursor-not-allowed;}:host .float{@apply z-50 scale-90 -translate-x-1 -translate-y-[27px];}:host fkt-field-error{@apply pl-3;}\n"] }]
        }] });

class FktDrawerComponent {
    opened = input(false, ...(ngDevMode ? [{ debugName: "opened" }] : []));
    mode = input('push', ...(ngDevMode ? [{ debugName: "mode" }] : []));
    width = input('250px', ...(ngDevMode ? [{ debugName: "width" }] : []));
    backdropClick = output();
    canShowOverlay = computed(() => {
        if (this.mode() === 'push')
            return false;
        return this.opened();
    }, ...(ngDevMode ? [{ debugName: "canShowOverlay" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktDrawerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.1.7", type: FktDrawerComponent, isStandalone: true, selector: "fkt-drawer", inputs: { opened: { classPropertyName: "opened", publicName: "opened", isSignal: true, isRequired: false, transformFunction: null }, mode: { classPropertyName: "mode", publicName: "mode", isSignal: true, isRequired: false, transformFunction: null }, width: { classPropertyName: "width", publicName: "width", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { backdropClick: "backdropClick" }, ngImport: i0, template: "<div class=\"relative h-full w-full flex\">\r\n\t<div\r\n\t\t[class.show]=\"opened()\"\r\n\t\t[class.overlay]=\"mode() === 'overlay'\"\r\n    \t[style.--show-width]=\"width()\"\r\n\t\tclass=\"side-menu\">\r\n\t\t<ng-content select=\"[side-content]\"/>\r\n\t</div>\r\n\t<div class=\"relative overflow-auto flex-1 w-full h-full\">\r\n\t\t<div\r\n\t\t\tclass=\"backdrop z-10\"\r\n\t\t\t[class.show]=\"canShowOverlay()\"\r\n\t\t\t(click)=\"backdropClick.emit()\"\r\n\t\t>\r\n\t\t</div>\r\n\t\t<ng-content select=\"[side-main]\"/>\r\n\t</div>\r\n</div>\r\n", styles: ["@reference \"../../styles/tailwind.css\";:host{@apply h-full w-full flex;}.side-menu{width:0;transition:.3s;@apply z-20 overflow-hidden h-full flex-shrink-0;}.side-menu.overlay{@apply absolute;}.side-menu.show{width:var(--show-width, 250px)}.backdrop{@apply absolute transition pointer-events-none w-full h-full opacity-0 bg-black;}.backdrop.show{@apply pointer-events-auto opacity-50;}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktDrawerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-drawer', imports: [], template: "<div class=\"relative h-full w-full flex\">\r\n\t<div\r\n\t\t[class.show]=\"opened()\"\r\n\t\t[class.overlay]=\"mode() === 'overlay'\"\r\n    \t[style.--show-width]=\"width()\"\r\n\t\tclass=\"side-menu\">\r\n\t\t<ng-content select=\"[side-content]\"/>\r\n\t</div>\r\n\t<div class=\"relative overflow-auto flex-1 w-full h-full\">\r\n\t\t<div\r\n\t\t\tclass=\"backdrop z-10\"\r\n\t\t\t[class.show]=\"canShowOverlay()\"\r\n\t\t\t(click)=\"backdropClick.emit()\"\r\n\t\t>\r\n\t\t</div>\r\n\t\t<ng-content select=\"[side-main]\"/>\r\n\t</div>\r\n</div>\r\n", styles: ["@reference \"../../styles/tailwind.css\";:host{@apply h-full w-full flex;}.side-menu{width:0;transition:.3s;@apply z-20 overflow-hidden h-full flex-shrink-0;}.side-menu.overlay{@apply absolute;}.side-menu.show{width:var(--show-width, 250px)}.backdrop{@apply absolute transition pointer-events-none w-full h-full opacity-0 bg-black;}.backdrop.show{@apply pointer-events-auto opacity-50;}\n"] }]
        }] });

const fktSidebarModes = ['overlay', 'push'];

class FktTextareaComponent {
    control = input.required(...(ngDevMode ? [{ debugName: "control" }] : []));
    label = input.required(...(ngDevMode ? [{ debugName: "label" }] : []));
    placeholder = input('', ...(ngDevMode ? [{ debugName: "placeholder" }] : []));
    autoExpand = input(false, ...(ngDevMode ? [{ debugName: "autoExpand", transform: booleanAttribute }] : [{ transform: booleanAttribute }]));
    element = viewChild.required('textarea', { read: ElementRef });
    autoExpandWhenValueChanges = effect(() => {
        this.control().value();
        untracked(() => {
            this.autoExpandElement();
        });
    }, ...(ngDevMode ? [{ debugName: "autoExpandWhenValueChanges" }] : []));
    ngAfterViewInit() {
        this.autoExpandElement();
    }
    focus() {
        const element = this.element()?.nativeElement;
        element?.focus();
    }
    autoExpandElement() {
        if (!this.autoExpand())
            return;
        const textarea = this.element().nativeElement;
        const VERTICAL_PADDING = 8;
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + VERTICAL_PADDING + 'px';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktTextareaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "20.1.7", type: FktTextareaComponent, isStandalone: true, selector: "fkt-textarea", inputs: { control: { classPropertyName: "control", publicName: "control", isSignal: true, isRequired: true, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: true, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, autoExpand: { classPropertyName: "autoExpand", publicName: "autoExpand", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.disabled": "control().disabled()" } }, viewQueries: [{ propertyName: "element", first: true, predicate: ["textarea"], descendants: true, read: ElementRef, isSignal: true }], ngImport: i0, template: "<div class=\"flex gap-2 items-center\">\r\n\t<label [class.!text-red-500]=\"!!error.message()\"\r\n\t\t   [class.float]=\"!!control().viewValue()\"\r\n\t\t   aria-hidden=\"true\"\r\n\t\t   class=\"text-gray-800 font-medium text-sm mb-1\">{{ label() }}</label>\r\n</div>\r\n\r\n<div class=\"relative\">\r\n\t<textarea\r\n\t\t[class.!border-red-500]=\"!!error.message()\"\r\n\t\t[attr.aria-label]=\"label()\"\r\n\t\tclass=\"!border-[1px] border-transparent\"\r\n\t\t[signalFormControl]=\"control()\"\r\n\t\t#textarea\r\n\t\t[placeholder]=\"placeholder()\"\r\n\t></textarea>\r\n</div>\r\n\r\n\r\n<fkt-field-error #error [control]=\"control()\"/>\r\n", styles: ["@reference \"../../styles/tailwind.css\";:host{@apply block rounded-md relative mt-5 border-gray-500 transition scroll-smooth w-full;}:host textarea{@apply outline-none border-gray-400 w-full border-2 rounded-md p-2 bg-transparent;}:host textarea::placeholder{@apply opacity-0;}:host.disabled{@apply select-none;}:host.disabled label{@apply text-gray-400 z-50 scale-90 -translate-x-1 -translate-y-[27px];}:host.disabled textarea{@apply border-gray-200 select-none text-gray-400 cursor-not-allowed;}:host label{@apply absolute px-1 top-[15px] left-3 transition bg-white text-gray-500;}:host:focus-within label{@apply text-yellow-500 z-50 scale-90 -translate-x-1 -translate-y-[27px];}:host:focus-within textarea{@apply transition border-yellow-500;}:host:focus-within textarea::placeholder{@apply opacity-100;}:host .float{@apply z-50 scale-90 -translate-x-1 -translate-y-[27px];}:host fkt-field-error{@apply pl-3;}\n"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "component", type: FieldErrorComponent, selector: "fkt-field-error", inputs: ["control"] }, { kind: "directive", type: SignalFormControlDirective, selector: "input[signalFormControl],textarea[signalFormControl]", inputs: ["signalFormControl", "transformer", "updateOn"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
__decorate([
    MarkUsed()
], FktTextareaComponent.prototype, "autoExpandWhenValueChanges", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.7", ngImport: i0, type: FktTextareaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-textarea', imports: [
                        ReactiveFormsModule,
                        FieldErrorComponent,
                        SignalFormControlDirective,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class.disabled]': 'control().disabled()'
                    }, template: "<div class=\"flex gap-2 items-center\">\r\n\t<label [class.!text-red-500]=\"!!error.message()\"\r\n\t\t   [class.float]=\"!!control().viewValue()\"\r\n\t\t   aria-hidden=\"true\"\r\n\t\t   class=\"text-gray-800 font-medium text-sm mb-1\">{{ label() }}</label>\r\n</div>\r\n\r\n<div class=\"relative\">\r\n\t<textarea\r\n\t\t[class.!border-red-500]=\"!!error.message()\"\r\n\t\t[attr.aria-label]=\"label()\"\r\n\t\tclass=\"!border-[1px] border-transparent\"\r\n\t\t[signalFormControl]=\"control()\"\r\n\t\t#textarea\r\n\t\t[placeholder]=\"placeholder()\"\r\n\t></textarea>\r\n</div>\r\n\r\n\r\n<fkt-field-error #error [control]=\"control()\"/>\r\n", styles: ["@reference \"../../styles/tailwind.css\";:host{@apply block rounded-md relative mt-5 border-gray-500 transition scroll-smooth w-full;}:host textarea{@apply outline-none border-gray-400 w-full border-2 rounded-md p-2 bg-transparent;}:host textarea::placeholder{@apply opacity-0;}:host.disabled{@apply select-none;}:host.disabled label{@apply text-gray-400 z-50 scale-90 -translate-x-1 -translate-y-[27px];}:host.disabled textarea{@apply border-gray-200 select-none text-gray-400 cursor-not-allowed;}:host label{@apply absolute px-1 top-[15px] left-3 transition bg-white text-gray-500;}:host:focus-within label{@apply text-yellow-500 z-50 scale-90 -translate-x-1 -translate-y-[27px];}:host:focus-within textarea{@apply transition border-yellow-500;}:host:focus-within textarea::placeholder{@apply opacity-100;}:host .float{@apply z-50 scale-90 -translate-x-1 -translate-y-[27px];}:host fkt-field-error{@apply pl-3;}\n"] }]
        }], propDecorators: { autoExpandWhenValueChanges: [] } });

const fktColors = ['red', 'primary', 'yellow', 'green'];

/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DragAndDropDirective, FktAutocompleteComponent, FktBadgeComponent, FktBadgeSelectorComponent, FktButtonComponent, FktButtonsListComponent, FktCalendarComponent, FktCalendarNavigatorComponent, FktCardComponent, FktCheckboxComponent, FktDatePickerComponent, FktDialogService, FktDrawerComponent, FktIconComponent, FktInputComponent, FktNavigatorComponent, FktNoResultsComponent, FktSelectComponent, FktSpinnerComponent, FktTextareaComponent, FormControlSuffixDirective, SignalFormControlDirective, TabLazyDirective, fktBadgeColors, fktBadgeVariants, fktButtonThemes, fktButtonVariants, fktCalendarNavigatorModes, fktCalendarStep, fktColors, fktInputTransformers, fktInputTypes, fktSidebarModes };
//# sourceMappingURL=frakton-ng-core.mjs.map
