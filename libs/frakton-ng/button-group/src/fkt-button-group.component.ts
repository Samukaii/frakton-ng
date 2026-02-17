import { booleanAttribute, Component, computed, inject, input, linkedSignal, model, signal } from '@angular/core';
import { FktButtonGroupOption, FktButtonGroupShape, FktButtonGroupSize } from './fkt-button-group.types';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { FormValueControl } from '@angular/forms/signals';
import { provideCVA } from 'frakton-ng/internal/di';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
    selector: 'fkt-button-group',
    imports: [
        FktIconComponent
    ],
    templateUrl: './fkt-button-group.component.html',
    styleUrl: './fkt-button-group.component.scss',
    host: {
        '(click)': "markAsTouched()",
        '[attr.aria-label]': "accessibleLabel()"
    }
})
export class FktButtonGroupComponent implements ControlValueAccessor, FormValueControl<string[] | string | null> {
    value = model<string[] | string | null>(null)
    touched = model<boolean>(false)
    invalid = input(false);
    disabled = model(false);

    accessibleLabel = input.required<string>();
    options = input.required<FktButtonGroupOption[]>();
    shape = input<FktButtonGroupShape>('rounded');
    size = input<FktButtonGroupSize>('md');

    deselectable = input(false, {
        transform: booleanAttribute
    });

    multiple = input(false, {
        transform: booleanAttribute
    });

    protected readonly selectedOptions = linkedSignal(() => {
        return this.parseToArray(this.value());
    })

    protected readonly ngControl = inject(NgControl, { optional: true, self: true });

    constructor() {
        if (this.ngControl) this.ngControl.valueAccessor = this;
    }

    registerOnChange(fn: (value: string | string[] | null) => void) {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void) {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean) {
        this.disabled.set(isDisabled);
    }

    writeValue(obj: string | null) {
        console.log('Setting value', obj)
        this.value.set(obj);
    }

    private onChange?: (value: string[] | string | null) => void;
    private onTouched?: () => void;

    protected classes = computed(() => {
        const shape = this.shape();
        const size = this.size();

        const classes: string[] = ['container'];

        classes.push(`shape-${shape}`);
        classes.push(`size-${size}`);

        return classes.join(' ');
    })

    protected toggle(value: string) {
        if(this.disabled()) return;

        let currentValue = this.value();

        if(this.multiple()) {
            if(Array.isArray(currentValue)) {
                if(currentValue.includes(value))
                    currentValue = currentValue.filter(item => item !== value);
                else
                    currentValue.push(value);
            }
            else currentValue = [value];
        }
        else {
            if(currentValue === value)
                currentValue = null;
            else currentValue = value
        }

        this.applyChanges(currentValue);
    }

    protected markAsTouched() {
        this.touched.set(true);
        this.onTouched?.();
    }

    private parseToArray(value: string[] | string | null) {
        return Array.isArray(value) ? value : !!value ? [value] : [];
    }

    private applyChanges(value: string[] | string | null) {
        this.value.set(value);
        this.onChange?.(value);
    }
}
