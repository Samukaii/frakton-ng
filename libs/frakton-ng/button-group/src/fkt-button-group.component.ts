import { booleanAttribute, Component, computed, input, linkedSignal, model, signal } from '@angular/core';
import { FktButtonGroupOption, FktButtonGroupShape, FktButtonGroupSize } from './fkt-button-group.types';
import { ControlValueAccessor } from '@angular/forms';
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
    providers: [
        provideCVA(FktButtonGroupComponent)
    ],
    host: {
        "[class]": "classes()",
        '(click)': "markAsTouched()"
    }
})
export class FktButtonGroupComponent implements ControlValueAccessor, FormValueControl<string[] | string | null> {
    a = signal([])
    value = model<string[] | string | null>(null)
    touched = model<boolean>(false)
    disabled = model(false);

    options = input<FktButtonGroupOption[]>();
    shape = input<FktButtonGroupShape>('rounded');
    size = input<FktButtonGroupSize>('xs');

    deselectable = input(false, {
        transform: booleanAttribute
    });

    multiple = input(false, {
        transform: booleanAttribute
    });

    selectedOptions = linkedSignal(() => {
        return this.parseToArray(this.value());
    })

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
        this.value.set(obj);
    }

    private onChange?: (value: string[] | string | null) => void;
    private onTouched?: () => void;

    protected classes = computed(() => {
        const shape = this.shape();

        const classes: string[] = [];

        classes.push(`shape-${shape}`);

        return classes.join(' ');
    })

    protected toggle(value: string) {
        const currentValue = this.value();

        if(this.multiple() && Array.isArray(currentValue)) {
            if(currentValue.includes(value))
                this.deselect(value);
            else this.select(value);

            return
        }

        if(currentValue === value)
            this.deselect(value);
        else this.select(value);
    }

    private select(value: string) {
        const selected = this.getSelectedValue(value);

        this.value.set(selected);
        this.onChange?.(selected);
    }

    private deselect(value: string) {
        const currentValue = this.value();

        if (Array.isArray(currentValue) && this.multiple()) {
            const newValue = currentValue.filter(item => item !== value);

            this.value.set(newValue);
            this.onChange?.(newValue);

            return;
        }

        if(value === currentValue) {
            this.value.set(null);
            this.onChange?.(null);
        }
    }

    protected markAsTouched() {
        this.touched.set(true);
        this.onTouched?.();
    }

    private parseToArray(value: string[] | string | null) {
        return Array.isArray(value) ? value : !!value ? [value] : [];
    }

    private getSelectedValue(value: string) {
        const currentValue = this.value();

        if (Array.isArray(currentValue) && this.multiple()) {
            currentValue.push(value);
            return currentValue;
        }

        return value;
    }
}
