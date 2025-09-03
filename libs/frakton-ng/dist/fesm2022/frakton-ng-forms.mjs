import { isNumber, MarkUsed, clampNumber, isIsoDateString } from 'frakton-ng/internal/utils';
import * as i0 from '@angular/core';
import { computed, signal, untracked, Injectable, input, inject, ElementRef, linkedSignal, effect, Directive, TemplateRef } from '@angular/core';
import { __decorate } from 'tslib';

const SignalValidators = {
    required: () => options => {
        const value = options.value;
        const invalidConditions = [
            value === null,
            typeof value === 'undefined',
            value === '',
        ];
        if (invalidConditions.every(condition => !condition))
            return null;
        return {
            required: true,
        };
    },
    requiredTrue: () => options => {
        const value = options.value;
        if (value !== true)
            return {
                requiredTrue: true,
            };
        return null;
    },
    minLength: (length) => options => {
        const value = options.value;
        if (typeof value !== "string")
            return {
                custom: {
                    message: `"${value}" não é um texto`,
                }
            };
        return value.length >= length ? null : {
            custom: {
                message: `O tamanho mínimo é ${length}`,
            }
        };
    },
    maxLength: (length) => options => {
        const value = options.value;
        if (typeof value !== "string")
            return {
                custom: {
                    message: `"${value}" não é um texto`,
                }
            };
        return value.length <= length ? null : {
            custom: {
                message: `O tamanho máximo é ${length}`,
            }
        };
    },
    email: () => options => {
        const value = options.value;
        if (value === null || typeof value === 'undefined' || value === '') {
            return null;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return {
                email: {
                    message: 'E-mail inválido',
                }
            };
        }
        return null;
    },
    min: (minValue) => options => {
        const value = options.value;
        if (!isNumber(value)) {
            return {
                custom: {
                    message: `${value} não é um número`,
                }
            };
        }
        if (value < minValue)
            return {
                custom: {
                    message: `O campo não pode ser menor que ${minValue}`,
                }
            };
        return null;
    },
    max: (maxValue) => options => {
        const value = options.value;
        if (!isNumber(value)) {
            return {
                custom: {
                    message: `${value} não é um número`,
                }
            };
        }
        if (value > maxValue)
            return {
                custom: {
                    message: `O campo não pode ser maior que ${maxValue}`,
                }
            };
        return null;
    },
};

class SignalFormArray {
    #controls;
    controls = computed(() => this.#controls?.() ?? [], ...(ngDevMode ? [{ debugName: "controls" }] : []));
    status = computed(() => {
        const valid = this.valid();
        const disabled = this.disabled();
        if (disabled)
            return 'DISABLED';
        return valid ? 'VALID' : 'INVALID';
    }, ...(ngDevMode ? [{ debugName: "status" }] : []));
    disabled = computed(() => {
        return this.#controls().every(control => control.disabled());
    }, ...(ngDevMode ? [{ debugName: "disabled" }] : []));
    invalid = computed(() => {
        return this.#controls().some(control => control.invalid());
    }, ...(ngDevMode ? [{ debugName: "invalid" }] : []));
    valid = computed(() => {
        return this.#controls().every(control => control.valid());
    }, ...(ngDevMode ? [{ debugName: "valid" }] : []));
    errors = computed(() => {
        return this.getErrors();
    }, ...(ngDevMode ? [{ debugName: "errors" }] : []));
    touched = computed(() => {
        return this.#controls().some(control => control.touched());
    }, ...(ngDevMode ? [{ debugName: "touched" }] : []));
    untouched = computed(() => {
        return this.#controls().every(control => control.untouched());
    }, ...(ngDevMode ? [{ debugName: "untouched" }] : []));
    pristine = computed(() => {
        return this.#controls().every(control => control.pristine());
    }, ...(ngDevMode ? [{ debugName: "pristine" }] : []));
    dirty = computed(() => {
        return this.#controls().some(control => control.dirty());
    }, ...(ngDevMode ? [{ debugName: "dirty" }] : []));
    value = computed(() => {
        return this.#controls().map(control => control.value());
    }, ...(ngDevMode ? [{ debugName: "value" }] : []));
    constructor(config) {
        this.#controls = signal(config, ...(ngDevMode ? [{ debugName: "#controls" }] : []));
    }
    getErrors() {
        let result = null;
        this.#controls().forEach((control, index) => {
            const errors = control.errors();
            if (!errors)
                return;
            result = {
                ...(result ?? {}),
                [index.toString()]: errors,
            };
        });
        return result;
    }
    patchValue(value) {
        this.#controls().forEach((control, index) => {
            if (!value[index])
                return;
            if (control instanceof SignalFormArray) {
                if (Array.isArray(value[index]))
                    control.patchValue(value[index]);
                return;
            }
            control.patchValue(value[index]);
        });
    }
    markAllAsTouched() {
        this.#controls().forEach(control => {
            if ('markAllAsTouched' in control) {
                control.markAllAsTouched();
                return;
            }
            control.markAsTouched();
        });
    }
    markAllAsDirty() {
        this.#controls().forEach(control => {
            if ('markAllAsDirty' in control) {
                control.markAllAsDirty();
                return;
            }
            control.markAsDirty();
        });
    }
    at(index) {
        return this.#controls().at(index);
    }
    push(control) {
        const controls = [...this.#controls()];
        controls.push(control);
        this.#controls.set(controls);
    }
    insert(index, control) {
        const controls = [...this.#controls()];
        controls.splice(index + 1, 0, control);
        this.#controls.set(controls);
    }
    removeAt(index) {
        const controls = [...this.#controls()];
        controls.splice(index, 1);
        this.#controls.set(controls);
    }
    reset(value = []) {
        this.#controls().forEach((control, index) => {
            if (!value[index])
                return;
            if (control instanceof SignalFormArray) {
                if (Array.isArray(value[index]))
                    control.reset(value[index]);
                return;
            }
            control.reset(value[index]);
        });
    }
    disable() {
        this.#controls().forEach(control => {
            control.disable();
        });
    }
    enable() {
        this.#controls().forEach(control => {
            control.enable();
        });
    }
}

class SignalFormGroup {
    controls;
    controlsList;
    status = computed(() => {
        const valid = this.valid();
        const disabled = this.disabled();
        if (disabled)
            return 'DISABLED';
        return valid ? 'VALID' : 'INVALID';
    }, ...(ngDevMode ? [{ debugName: "status" }] : []));
    disabled = computed(() => {
        return this.controlsList.every(control => control.disabled());
    }, ...(ngDevMode ? [{ debugName: "disabled" }] : []));
    invalid = computed(() => {
        return this.controlsList.some(control => control.invalid());
    }, ...(ngDevMode ? [{ debugName: "invalid" }] : []));
    valid = computed(() => {
        return this.controlsList.every(control => control.valid());
    }, ...(ngDevMode ? [{ debugName: "valid" }] : []));
    errors = computed(() => {
        return this.getErrors();
    }, ...(ngDevMode ? [{ debugName: "errors" }] : []));
    touched = computed(() => {
        return this.controlsList.some(control => control.touched());
    }, ...(ngDevMode ? [{ debugName: "touched" }] : []));
    untouched = computed(() => {
        return this.controlsList.every(control => control.untouched());
    }, ...(ngDevMode ? [{ debugName: "untouched" }] : []));
    pristine = computed(() => {
        return this.controlsList.every(control => control.pristine());
    }, ...(ngDevMode ? [{ debugName: "pristine" }] : []));
    dirty = computed(() => {
        return this.controlsList.some(control => control.dirty());
    }, ...(ngDevMode ? [{ debugName: "dirty" }] : []));
    value = computed(() => {
        const result = {};
        for (const key in this.controls) {
            const controlKey = key;
            const control = this.controls[controlKey];
            result[controlKey] = control.value();
        }
        return result;
    }, ...(ngDevMode ? [{ debugName: "value" }] : []));
    constructor(config) {
        this.controls = config;
        this.controlsList = Object.values(config);
    }
    getErrors() {
        let result = null;
        for (const key in this.controls) {
            const controlKey = key;
            const control = this.controls[controlKey];
            const errors = control.errors();
            if (!errors)
                continue;
            result = {
                ...(result ?? {}),
                [controlKey]: errors,
            };
        }
        return result;
    }
    patchValue(value) {
        for (const valueKey in value) {
            const controlValue = value[valueKey];
            const control = this.controls[valueKey];
            if (!control)
                continue;
            if (!controlValue)
                return;
            if (control instanceof SignalFormArray) {
                if (Array.isArray(controlValue))
                    control.patchValue(controlValue);
                continue;
            }
            control.patchValue(controlValue);
        }
    }
    markAllAsTouched() {
        this.controlsList.forEach(control => {
            if ('markAllAsTouched' in control) {
                control.markAllAsTouched();
                return;
            }
            control.markAsTouched();
        });
    }
    markAllAsDirty() {
        this.controlsList.forEach(control => {
            if ('markAllAsDirty' in control) {
                control.markAllAsDirty();
                return;
            }
            control.markAsDirty();
        });
    }
    reset(value = {}) {
        console.log(value);
        for (const valueKey in this.controls) {
            const controlValue = value[valueKey];
            const control = this.controls[valueKey];
            if (!control)
                continue;
            if (control instanceof SignalFormArray) {
                if (Array.isArray(controlValue))
                    control.reset(controlValue);
                continue;
            }
            control.reset(controlValue);
        }
    }
    disable() {
        this.controlsList.forEach(control => {
            control.disable();
        });
    }
    enable() {
        this.controlsList.forEach(control => {
            control.enable();
        });
    }
    addControl(name, control) {
        this.controls[name] = control;
        this.controlsList = Object.values(this.controls);
    }
}

const isTwoWaySetValue = (value) => {
    if (typeof value !== 'object')
        return false;
    if (value === null)
        return false;
    const conditions = ['modelValue' in value, 'viewValue' in value];
    return conditions.every(Boolean);
};
class SignalFormControl {
    initialValue;
    #state;
    #disabled = signal(false, ...(ngDevMode ? [{ debugName: "#disabled" }] : []));
    #dirty = signal(false, ...(ngDevMode ? [{ debugName: "#dirty" }] : []));
    #touched = signal(false, ...(ngDevMode ? [{ debugName: "#touched" }] : []));
    validations = signal([], ...(ngDevMode ? [{ debugName: "validations" }] : []));
    value = computed(() => this.#state?.().modelValue, ...(ngDevMode ? [{ debugName: "value" }] : []));
    viewValue = computed(() => this.#state?.().viewValue, ...(ngDevMode ? [{ debugName: "viewValue" }] : []));
    disabled = computed(() => this.#disabled(), ...(ngDevMode ? [{ debugName: "disabled" }] : []));
    touched = computed(() => this.#touched(), ...(ngDevMode ? [{ debugName: "touched" }] : []));
    dirty = computed(() => this.#dirty(), ...(ngDevMode ? [{ debugName: "dirty" }] : []));
    pristine = computed(() => !this.#dirty(), ...(ngDevMode ? [{ debugName: "pristine" }] : []));
    untouched = computed(() => !this.#touched(), ...(ngDevMode ? [{ debugName: "untouched" }] : []));
    status = computed(() => {
        const valid = this.valid();
        const disabled = this.disabled();
        if (disabled)
            return 'DISABLED';
        return valid ? 'VALID' : 'INVALID';
    }, ...(ngDevMode ? [{ debugName: "status" }] : []));
    errors = computed(() => {
        let errors = null;
        const validations = this.validations();
        const value = this.value();
        untracked(() => {
            validations.forEach(validation => {
                const result = validation({ value });
                if (!result)
                    return;
                errors = {
                    ...result,
                };
            });
        });
        return errors;
    }, ...(ngDevMode ? [{ debugName: "errors" }] : []));
    invalid = computed(() => !!this.errors(), ...(ngDevMode ? [{ debugName: "invalid", equal: (a, b) => a === b }] : [{ equal: (a, b) => a === b }]));
    valid = computed(() => !this.invalid(), ...(ngDevMode ? [{ debugName: "valid" }] : []));
    constructor(initialValue, options) {
        this.initialValue = initialValue;
        this.validations.set(options?.validators ?? []);
        this.#state = signal({
            modelValue: initialValue,
            viewValue: initialValue,
        }, ...(ngDevMode ? [{ debugName: "#state" }] : []));
    }
    setValue(value, _) {
        if (isTwoWaySetValue(value)) {
            this.#state.update(currentState => ({
                ...currentState,
                modelValue: value.modelValue,
                viewValue: value.viewValue,
            }));
            return;
        }
        this.#state.update(currentState => ({
            ...currentState,
            modelValue: value,
            viewValue: value,
        }));
    }
    reset(value) {
        this.setValue(value ?? this.initialValue);
    }
    disable() {
        this.#disabled.set(true);
    }
    enable() {
        this.#disabled.set(false);
    }
    markAsTouched() {
        this.#touched.set(true);
    }
    markAsDirty() {
        this.#dirty.set(true);
    }
    markAsUntouched() {
        this.#touched.set(false);
    }
    markAsPristine() {
        this.#dirty.set(false);
    }
    patchValue(value) {
        this.setValue(value);
    }
}

class SignalFormBuilder {
    group(config) {
        const controls = {};
        Object.entries(config).forEach(([key, value]) => {
            const controlConfig = value;
            const controlKey = key;
            if (value instanceof SignalFormGroup)
                controls[controlKey] = controlConfig;
            else if (value instanceof SignalFormArray)
                controls[controlKey] = controlConfig;
            else if (value instanceof SignalFormControl)
                controls[controlKey] = controlConfig;
            else
                controls[controlKey] = this.control(controlConfig);
        });
        return new SignalFormGroup(controls);
    }
    array(config) {
        const controls = [];
        config.forEach(control => {
            if (control instanceof SignalFormGroup)
                controls.push(control);
            else if (control instanceof SignalFormArray)
                controls.push(control);
            else if (control instanceof SignalFormControl)
                controls.push(control);
            else
                controls.push(this.control(control));
        });
        return new SignalFormArray(controls);
    }
    strictGroup(config) {
        return this.group(config);
    }
    control(config) {
        let options;
        let initialValue;
        if (Array.isArray(config) && config.length === 2) {
            initialValue = config[0];
            const controlConfig = config[1];
            if (Array.isArray(controlConfig)) {
                controlConfig.forEach(validator => {
                    if (typeof validator !== 'function')
                        throw new Error(`Invalid control config: must be a function, got ${validator}`);
                });
                options = {
                    validators: controlConfig,
                };
            }
            else if (typeof controlConfig === 'function') {
                options = {
                    validators: [controlConfig],
                };
            }
            else {
                options = controlConfig;
            }
        }
        else {
            initialValue = config;
        }
        return new SignalFormControl(initialValue, options);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: SignalFormBuilder, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: SignalFormBuilder, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: SignalFormBuilder, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

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
            if (typeof viewValue !== "string" && typeof viewValue !== "boolean" && typeof viewValue !== "number")
                return;
            if (this.element.type === 'checkbox') {
                this.element.checked = !!viewValue;
                console.log(viewValue);
            }
            else
                this.element.value = viewValue.toString();
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
    onKeyDown = () => {
    };
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: SignalFormControlDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "20.2.3", type: SignalFormControlDirective, isStandalone: true, selector: "input[signalFormControl],textarea[signalFormControl]", inputs: { signalFormControl: { classPropertyName: "signalFormControl", publicName: "signalFormControl", isSignal: true, isRequired: true, transformFunction: null }, transformer: { classPropertyName: "transformer", publicName: "transformer", isSignal: true, isRequired: false, transformFunction: null }, updateOn: { classPropertyName: "updateOn", publicName: "updateOn", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "disabled": "signalFormControl().disabled()" } }, ngImport: i0 });
}
__decorate([
    MarkUsed()
], SignalFormControlDirective.prototype, "updateValue", void 0);
__decorate([
    MarkUsed()
], SignalFormControlDirective.prototype, "updateTransformer", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: SignalFormControlDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[signalFormControl],textarea[signalFormControl]',
                    host: {
                        '[disabled]': 'signalFormControl().disabled()'
                    }
                }]
        }], propDecorators: { updateValue: [], updateTransformer: [] } });

class FormControlSuffixDirective {
    templateRef = inject(TemplateRef);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FormControlSuffixDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "20.2.3", type: FormControlSuffixDirective, isStandalone: true, selector: "[fktFormControlSuffix]", ngImport: i0 });
}
__decorate([
    MarkUsed()
], FormControlSuffixDirective.prototype, "templateRef", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FormControlSuffixDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fktFormControlSuffix]'
                }]
        }], propDecorators: { templateRef: [] } });

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

/**
 * Generated bundle index. Do not edit.
 */

export { FormControlSuffixDirective, SignalFormArray, SignalFormBuilder, SignalFormControl, SignalFormControlDirective, SignalFormGroup, SignalValidators, currencyTransformer, dateTransformer, hourTransformer, percentTransformer };
//# sourceMappingURL=frakton-ng-forms.mjs.map
