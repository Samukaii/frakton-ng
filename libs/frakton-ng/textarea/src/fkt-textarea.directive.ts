import {
    AfterViewInit,
    booleanAttribute,
    computed,
    Directive,
    effect,
    ElementRef,
    inject,
    input,
    signal,
    untracked,
} from '@angular/core';
import {
    FktFieldControl,
    FktTextFieldControl,
} from 'frakton-ng/internal/directives';
import { injectCompatFormState } from 'frakton-ng/internal/di';
import { MarkUsed } from 'frakton-ng/internal/utils';

@Directive({
    selector: 'textarea[fktTextarea]',
    providers: [
        { provide: FktFieldControl, useExisting: FktTextareaDirective },
        { provide: FktTextFieldControl, useExisting: FktTextareaDirective },
    ],
    host: {
        '[class.fkt-control-field]': 'true',
        '(focus)': 'focused.set(true)',
        '(blur)': 'focused.set(false)',
        '[id]': 'id',
    },
})
export class FktTextareaDirective
    implements FktTextFieldControl, AfterViewInit
{
    autoExpand = input(false, { transform: booleanAttribute });
    private state = injectCompatFormState<string>();
    private element = inject<ElementRef<HTMLTextAreaElement>>(ElementRef);

    private static id = 0;

    id = `fkt-textarea-${FktTextareaDirective.id++}`;

    @MarkUsed()
    protected autoExpandWhenValueChanges = effect(() => {
        this.value();

        untracked(() => {
            this.autoExpandElement();
        });
    });

    focused = signal(false);

    value = computed(() => {
        return this.state.value();
    });

    hasValue = computed(() => !!this.value())

    setValue(value: string) {
        this.state?.setValue?.(value);
    }

    invalid = computed(() => {
        return this.state.invalid();
    });

    touched = computed(() => {
        return this.state.touched();
    });

    disabled = computed(() => {
        return this.state.disabled();
    });

    required = computed(() => {
        return this.state.required();
    });

    errors = computed(() => {
        return this.state.errors();
    });

    maxLength = computed(() => {
        return this.state.maxLength();
    });

    ngAfterViewInit() {
        this.autoExpandElement();
    }

    private autoExpandElement() {
        if (!this.autoExpand()) return;

        const textarea = this.element.nativeElement;
        const VERTICAL_PADDING = 8;

        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + VERTICAL_PADDING + 'px';
    }
}
