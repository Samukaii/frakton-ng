import { booleanAttribute, Component, inject, input, model } from '@angular/core';
import { FormValueControl, ValidationError, WithOptionalField } from '@angular/forms/signals';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
    selector: 'fkt-toggle',
    imports: [],
    templateUrl: './fkt-toggle.component.html',
    styleUrl: './fkt-toggle.component.scss'
})
export class FktToggleComponent implements FormValueControl<boolean>, ControlValueAccessor {
    value = model(false);
    touched = model(false);
    disabled = model(false);
    invalid = input(false);
    errors = input<readonly WithOptionalField<ValidationError>[]>([]);

    label = input.required<string>();
    hideLabel = input(false, {
        transform: booleanAttribute
    });

    protected readonly ngControl = inject(NgControl, { optional: true, self: true });

    constructor() {
        if (this.ngControl) this.ngControl.valueAccessor = this;
    }

    registerOnChange(fn: (value: boolean) => void) {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void) {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean) {
        this.disabled.set(isDisabled);
    }

    writeValue(value: boolean) {
        this.value.set(value ?? false);
    }

    private onChange?: (value: boolean) => void;
    private onTouched?: () => void;

    protected onClick() {
        if (this.disabled()) return;

        const newValue = !this.value();
        this.value.set(newValue);
        this.onChange?.(newValue);
        this.markAsTouched();
    }

    protected markAsTouched() {
        this.touched.set(true);
        this.onTouched?.();
    }
}
