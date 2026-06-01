import {
    AfterViewInit,
    DestroyRef,
    Directive,
    ElementRef,
    inject,
    Signal,
    signal,
} from '@angular/core';

@Directive()
export abstract class FktFieldControl {
    abstract focused: Signal<boolean>;
    abstract hasValue: Signal<boolean>;
    abstract disabled: Signal<boolean>;
}

@Directive({
    selector: 'input[fktInput]',
    providers: [{ provide: FktFieldControl, useExisting: FktInputDirective }],
    host: {
        '[class.field]': 'true',
        '(focus)': 'focused.set(true)',
        '(blur)': 'focused.set(false)',
        '(input)': 'syncFromElement()',
    },
})
export class FktInputDirective implements FktFieldControl, AfterViewInit {
    focused = signal(false);
    hasValue = signal(false);
    disabled = signal(false);

    private elementRef = inject(ElementRef);
    private destroyRef = inject(DestroyRef);

    private get element() {
        return this.elementRef.nativeElement as HTMLInputElement;
    }

    ngAfterViewInit() {
        const observer = new MutationObserver(() => this.syncFromElement());

        observer.observe(this.element, {
            attributes: true,
            attributeFilter: [
                'class',
                'disabled',
                'required',
                'readonly',
                'value',
                'aria-invalid',
            ],
        });

        this.destroyRef.onDestroy(() => observer.disconnect());

        this.syncFromElement();
    }

    protected syncFromElement() {
        this.hasValue.set(!!this.element.value);
        this.disabled.set(this.element.disabled);
    }
}
