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
import { FKT_FIELD_ERROR_HANDLER } from 'frakton-ng';

@Component({
    selector: 'fkt-field',
    imports: [FktFieldErrorComponent],
    templateUrl: './fkt-field.component.html',
    styleUrl: './fkt-field.component.scss',
})
export class FktFieldComponent {
    label = input.required<string>();
    ariaDescribedby = input<string>();
    placeholder = input('');
    requiredMarker = input(false, {
        transform: booleanAttribute,
    });
    hideLabel = input(false, {
        transform: booleanAttribute,
    });

    protected control = contentChild(FktFieldControl);
    protected errorHandler = inject(FKT_FIELD_ERROR_HANDLER, {
        optional: true,
    });

    private readonly prefixElement = viewChild.required('prefix', {
        read: ElementRef,
    });
    private readonly labelElement = viewChild.required('labelElement', {
        read: ElementRef,
    });

    protected readonly prefixWidth = signal(0);
    protected readonly labelWidth = signal(0);

    protected readonly error = computed(() => {
        if (!this.errorHandler) return null;

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
        observer.observe(labelElement);

        onCleanup(() => {
            observer.disconnect();
        });
    });
}
