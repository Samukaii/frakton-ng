import {
    AfterViewInit,
    Component,
    computed,
    contentChild,
    effect,
    inject,
    Optional,
    Self,
    viewChild,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import {
    FktErrorDirective,
    FktFieldComponent,
    FktFieldPrefixDirective,
    FktFieldSuffixDirective,
    FktHintEndDirective,
    FktHintStartDirective,
} from 'frakton-ng/field';
import { FktButtonLegacyComponent } from 'frakton-ng/button-legacy';
import { FktIconComponent } from 'frakton-ng/icon';
import { Generic } from 'frakton-ng/internal/types';
import { injectCompatFormStateWithoutNative } from 'frakton-ng/internal/di';
import { FktSelectContextDirective } from './directives/fkt-select-context.directive';
import { FktSelectSelectionDirective } from './directives/fkt-select-selection.directive';
import { FktSelectOverlayDirective } from './directives/fkt-select-overlay.directive';
import { FktSelectControlDirective } from './directives/fkt-select-control.directive';
import { FktSelectKeyboardDirective } from './directives/fkt-select-keyboard.directive';
import { FktSelectStoreService } from './services/fkt-select-store.service';
import {
    FktNormalizedSelectOption,
    FktSelectWritableValue,
} from './fkt-select.types';
import { normalizeWrittenSelectValue } from './utils/normalize-written-select-value';
import { FktSelectChipDirective } from './directives/public/fkt-select-chip.directive';

@Component({
    selector: 'fkt-select',
    imports: [
        NgTemplateOutlet,
        FktFieldComponent,
        FktFieldPrefixDirective,
        FktFieldSuffixDirective,
        FktHintStartDirective,
        FktHintEndDirective,
        FktErrorDirective,
        FktButtonLegacyComponent,
        FktIconComponent,
        FktSelectControlDirective,
        FktSelectKeyboardDirective,
    ],
    templateUrl: './fkt-select.component.html',
    styleUrl: './fkt-select.component.scss',
    providers: [FktSelectStoreService],
    hostDirectives: [
        {
            directive: FktSelectContextDirective,
            inputs: [
                'label',
                'placeholder',
                'hideClearButton',
                'options',
                'value',
                'labelKey',
                'valueKey',
                'groupKey',
                'loading',
                'disabled',
                'multiple',
                'listHeight',
                'hint',
                'showError',
                'size',
                'requiredMarker',
                'hideLabel',
            ],
            outputs: ['valueChange', 'dropdownOpenChange'],
        },
        FktSelectSelectionDirective,
        FktSelectOverlayDirective,
    ],
})
export class FktSelectComponent<Option extends Generic | string | number>
    implements ControlValueAccessor, AfterViewInit
{
    protected readonly formState = injectCompatFormStateWithoutNative();
    protected readonly context = inject<FktSelectContextDirective<Option>>(
        FktSelectContextDirective
    );
    protected readonly selection = inject<FktSelectSelectionDirective<Option>>(
        FktSelectSelectionDirective
    );
    protected readonly store = inject<FktSelectStoreService<Option>>(
        FktSelectStoreService
    );

    private readonly field = viewChild.required(FktFieldComponent);
    protected readonly control = viewChild.required(FktSelectControlDirective);

    protected readonly hintStartDirective = contentChild(FktHintStartDirective);
    protected readonly hintEndDirective = contentChild(FktHintEndDirective);
    protected readonly errorDirective = contentChild(FktErrorDirective);
    protected readonly prefixDirective = contentChild(FktFieldPrefixDirective);
    protected readonly suffixDirective = contentChild(FktFieldSuffixDirective);
    protected readonly chipDirective = contentChild(FktSelectChipDirective);

    private onChange?: (value: unknown) => void;
    protected onTouched?: () => void;

    protected readonly disabled = computed(
        () =>
            this.context.loading() ||
            this.context.disabled() ||
            (this.formState?.disabled() ?? false)
    );

    private readonly emitValue = effect(() => {
        this.onChange?.(this.context.value());
    });

    constructor(@Self() @Optional() ngControl: NgControl) {
        if (ngControl) ngControl.valueAccessor = this;
    }

    ngAfterViewInit() {
        this.context.fieldContainer.set(this.field().container());
    }

    writeValue(value: FktSelectWritableValue<Option>): void {
        const normalized = normalizeWrittenSelectValue(value, {
            multiple: this.context.multiple(),
            valueKey: this.context.valueKey(),
        });

        this.selection.updateValue(normalized.value);

        this.context.preloadedOptions.set(normalized.preloadedOptions);

        if (normalized.preloadedOptions.length) {
            this.onChange?.(this.context.value());
        }
    }

    registerOnChange(fn: (value: unknown) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    protected toggleDropdown() {
        if (this.disabled() || this.context.loading()) return;

        this.context.dropdownOpened()
            ? this.context.closeDropdown()
            : this.context.openDropdown();
    }

    protected clear(event: MouseEvent) {
        event.stopPropagation();
        this.selection.clear();
        this.context.closeDropdown();
    }

    protected remove(
        event: MouseEvent,
        option: FktNormalizedSelectOption<Option>
    ) {
        event.stopPropagation();
        this.selection.remove(option);
    }

}
