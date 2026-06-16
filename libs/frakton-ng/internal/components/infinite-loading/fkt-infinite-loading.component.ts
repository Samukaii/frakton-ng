import {
    booleanAttribute,
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    input,
    output,
    untracked,
    viewChild,
} from '@angular/core';
import { FktSpinnerComponent } from 'frakton-ng/spinner';

@Component({
    selector: 'fkt-infinite-loading,[fktInfiniteLoading]',
    imports: [FktSpinnerComponent],
    templateUrl: './fkt-infinite-loading.component.html',
    styleUrl: './fkt-infinite-loading.component.scss',
    host: {
        '[style.display]': '"block"',
        '[style.max-height.px]': 'useViewport() ? null : maxHeight()',
        '[style.overflow-y]': 'useViewport() ? null : "auto"',
    },
})
export class FktInfiniteLoadingComponent {
    /**
     * Whether the underlying list has no more pages. Hides the loading indicator.
     * @required
     */
    hasEnded = input.required<boolean>();
    /**
     * Maximum height (px) of the scroll area. Ignored when `useViewport` is true.
     * @required
     */
    maxHeight = input.required<number>();
    /**
     * i18n key for the loading indicator label.
     * @default 'infinite-loading-container.loading'
     */
    loadingLabel = input('Loading more...');
    /**
     * IntersectionObserver `rootMargin` in px. Pre-fetches the next page before the user reaches the bottom.
     * @default 200
     */
    rootMargin = input<number>(200);
    /**
     * IntersectionObserver `threshold`.
     * @default 0
     */
    threshold = input<number | number[]>(0);
    /**
     * Use the browser viewport as the scroll root instead of the container itself. Disables `maxHeight` and internal overflow.
     * @default false
     */
    useViewport = input(false, { transform: booleanAttribute });
    /**
     * Stops observing the sentinel. Set while a request is in flight to avoid duplicate emissions.
     * @default false
     */
    disabled = input(false, { transform: booleanAttribute });

    /** Emitted when the user nears the bottom. Consumer requests the next page and toggles `disabled`/`hasEnded`. */
    readonly visible = output<void>();

    private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly sentinel =
        viewChild.required<ElementRef<HTMLElement>>('sentinel');

    protected readonly minHeight = computed(() => {
        if (this.useViewport() || this.hasEnded() || this.disabled()) return null;

        return this.maxHeight() + this.rootMargin() + 1;
    });

    private observer: IntersectionObserver | null = null;

    private readonly root = computed<Element | null>(() =>
        this.useViewport() ? null : this.host.nativeElement
    );

    protected readonly observeSentinel = effect((onCleanup) => {
        this.root();
        this.rootMargin();
        this.threshold();
        this.disabled();
        this.sentinel();

        untracked(() => {
            this.syncObserver();
        });

        onCleanup(() => {
            this.teardownObserver();
        });
    });

    private syncObserver(): void {
        this.teardownObserver();

        if (this.disabled() || typeof IntersectionObserver === 'undefined')
            return;

        const options = {
            root: this.root(),
            rootMargin: this.rootMargin() + 'px',
            threshold: this.threshold(),
        };

        this.observer = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                this.visible.emit();
            }
        }, options);
        this.observer.observe(this.sentinel().nativeElement);
    }

    private teardownObserver(): void {
        this.observer?.disconnect();
        this.observer = null;
    }
}
