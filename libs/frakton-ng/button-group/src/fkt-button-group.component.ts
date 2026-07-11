import {
    booleanAttribute,
    Component,
    computed,
    inject,
    input,
    linkedSignal,
    model,
} from '@angular/core';
import {
    FktButtonGroupOption,
    FktButtonGroupOrientation,
    FktButtonGroupShape,
    FktButtonGroupSize,
} from './fkt-button-group.types';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import {
    FormValueControl,
    ValidationError,
    WithOptionalFieldTree,
} from '@angular/forms/signals';
import { FktIconComponent } from 'frakton-ng/icon';
import { Toolbar, ToolbarWidget } from '@angular/aria/toolbar';

@Component({
    selector: 'fkt-button-group',
    imports: [FktIconComponent, Toolbar, ToolbarWidget],
    templateUrl: './fkt-button-group.component.html',
    styleUrl: './fkt-button-group.component.scss',
    host: {
        '(click)': 'markAsTouched()',
        '[attr.aria-label]': 'accessibleLabel()',
        '[attr.aria-invalid]': 'ngControl?.invalid ?? invalid()',
        '[attr.aria-errormessage]': 'errors()[0]?.message',
        role: 'group',
    },
})
export class FktButtonGroupComponent
    implements ControlValueAccessor, FormValueControl<string[] | string | null>
{
    value = model<string[] | string | null>(null);
    touched = model<boolean>(false);
    invalid = input(false);
    errors = input<readonly WithOptionalFieldTree<ValidationError>[]>([]);
    disabled = model(false);

    accessibleLabel = input.required<string>();
    options = input.required<FktButtonGroupOption[]>();
    shape = input<FktButtonGroupShape>('rounded');
    size = input<FktButtonGroupSize>('md');
    orientation = input<FktButtonGroupOrientation>('horizontal');

    deselectable = input(false, {
        transform: booleanAttribute,
    });

    multiple = input(false, {
        transform: booleanAttribute,
    });

    protected readonly selectedOptions = linkedSignal(() => {
        return this.parseToArray(this.value());
    });

    protected readonly ngControl = inject(NgControl, {
        optional: true,
        self: true,
    });

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
        this.value.set(obj);
    }

    private onChange?: (value: string[] | string | null) => void;
    private onTouched?: () => void;

    protected classes = computed(() => {
        const shape = this.shape();
        const size = this.size();
        const orientation = this.orientation();
        const invalid = this.invalid();

        const classes = new Set([
            'container',
            `shape-${shape}`,
            `size-${size}`,
            `orientation-${orientation}`,
        ]);

        if (invalid) classes.add('invalid');
        else classes.delete('invalid');

        return Array.from(classes).join(' ');
    });

    protected toggle(value: string) {
        if (this.disabled()) return;

        const result = this.multiple()
            ? this.getMultipleToggled(value)
            : this.getSingleToggled(value);

        this.applyChanges(result);
    }

    private getMultipleToggled(value: string) {
        const currentValue = this.value();

        if (!Array.isArray(currentValue)) return [value];

        if (currentValue.includes(value))
            return currentValue.filter((item) => item !== value);

        return [...currentValue, value];
    }

    private getSingleToggled(value: string) {
        const currentValue = this.value();

        if (currentValue === value && this.deselectable()) return null;

        return value;
    }

    protected markAsTouched() {
        this.touched.set(true);
        this.onTouched?.();
    }

    private parseToArray(value: string[] | string | null) {
        return Array.isArray(value) ? value : value ? [value] : [];
    }

    private applyChanges(value: string[] | string | null) {
        this.value.set(value);
        this.onChange?.(value);
    }
}
