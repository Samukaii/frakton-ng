import {
    booleanAttribute,
    Component,
    computed,
    contentChild,
    effect,
    ElementRef,
    inject,
    input,
    signal,
    viewChild,
} from '@angular/core';
import { MarkUsed } from 'frakton-ng/internal/utils';
import { FktFieldControl } from 'frakton-ng/internal/directives';
import { FktFieldErrorComponent } from 'frakton-ng/field-error';
import { FKT_FIELD_ERROR_HANDLER } from 'frakton-ng/core';
import { injectI18nIntegration } from 'frakton-ng/internal/di';
import { FktFieldHintComponent } from './hint/fkt-field-hint.component';

@Component({
    selector: 'fkt-field',
    imports: [FktFieldErrorComponent, FktFieldHintComponent],
    templateUrl: './fkt-field.component.html',
    styleUrl: './fkt-field.component.scss',
    host: {
        '[style.--_fkt-field-font-size]': 'fontSizeVariable()',
        '[style.--_fkt-field-horizontal-padding]':
            'horizontalPaddingVariable()',
        '[style.--_fkt-field-vertical-padding]': 'verticalPaddingVariable()',
    },
})
export class FktFieldComponent {
    label = input.required<string>();
    ariaDescribedby = input<string>();
    placeholder = input('');
    hint = input<string>();
    showError = input<boolean>();
    size = input<'sm' | 'md' | 'lg'>('md');
    requiredMarker = input<boolean>();
    hideLabel = input(false, {
        transform: booleanAttribute,
    });

    protected fontSizeVariable = computed(() => {
        return `var(--_fkt-field-font-size-${this.size()})`;
    });

    protected horizontalPaddingVariable = computed(() => {
        return `var(--_fkt-field-horizontal-padding-${this.size()})`;
    });

    protected verticalPaddingVariable = computed(() => {
        return `var(--_fkt-field-vertical-padding-${this.size()})`;
    });

    protected control = contentChild(FktFieldControl);
    protected projectedHint = contentChild(FktFieldHintComponent);
    protected readonly errorHandler = inject(FKT_FIELD_ERROR_HANDLER, {
        optional: true,
    });
    protected readonly i18nIntegration = injectI18nIntegration();

    private readonly prefixElement = viewChild.required('prefix', {
        read: ElementRef,
    });
    private readonly labelElement = viewChild.required('labelElement', {
        read: ElementRef,
    });

    protected readonly prefixWidth = signal(0);
    protected readonly labelWidth = signal(0);

    protected readonly errorVisible = computed(() => {
        const showError = this.showError();

        if (showError !== undefined) return showError;

        const control = this.control();

        return !!control?.invalid() && !!control?.touched();
    });

    protected readonly requiredVisible = computed(() => {
        const requiredMarker = this.requiredMarker();

        if (requiredMarker !== undefined) return requiredMarker;

        return !!this.control()?.required();
    });

    protected readonly hintVisible = computed(() => {
        return (!!this.hint() || !!this.projectedHint()) && !this.errorVisible();
    });

    protected readonly error = computed(() => {
        if (!this.errorHandler) return null;

        this.i18nIntegration.recomputeOn();

        const errors = this.control()?.errors() ?? null;

        return this.errorHandler(errors);
    });

    @MarkUsed()
    protected readonly watchElements = effect((onCleanup) => {
        const prefixElement = this.prefixElement().nativeElement as HTMLElement;
        const labelElement = this.labelElement().nativeElement as HTMLElement;

        this.prefixWidth.set(prefixElement.clientWidth);

        const onResize: ResizeObserverCallback = (entries) => {
            entries.forEach((entry) => {
                const target = entry.target as HTMLElement;

                if (target === prefixElement)
                    this.prefixWidth.set(target.offsetWidth);

                if (target === labelElement)
                    this.labelWidth.set(target.offsetWidth);
            });
        };

        const observer = new ResizeObserver(onResize);

        observer.observe(prefixElement);

        if (!this.hideLabel()) observer.observe(labelElement);

        onCleanup(() => {
            observer.disconnect();
        });
    });
}
