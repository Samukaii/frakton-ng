import {
    contentChild,
    Directive,
    effect,
    ElementRef,
    inject,
    Injector,
    signal,
    untracked,
} from '@angular/core';
import { Generic } from 'frakton-ng/internal/types';
import { FktOverlayRef, FktOverlayService } from 'frakton-ng/overlay';
import { FktSelectOptionsComponent } from '../options/fkt-select-options.component';
import { FktSelectContextDirective } from './fkt-select-context.directive';
import { FktSelectSelectionDirective } from './fkt-select-selection.directive';
import { FktSelectItemDirective } from './public/fkt-select-item.directive';
import { FktSelectGroupDirective } from './public/fkt-select-group.directive';
import { FktSelectHeaderDirective } from './public/fkt-select-header.directive';
import { FktSelectFooterDirective } from './public/fkt-select-footer.directive';
import { FktSelectEmptyDirective } from './public/fkt-select-empty.directive';

@Directive({ selector: 'fkt-select[fktSelectOverlay]' })
export class FktSelectOverlayDirective<
    Option extends Generic | string | number,
> {
    private readonly overlayService = inject(FktOverlayService);
    private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly injector = inject(Injector);
    private readonly context = inject<FktSelectContextDirective<Option>>(
        FktSelectContextDirective
    );
    private readonly selection = inject<FktSelectSelectionDirective<Option>>(
        FktSelectSelectionDirective
    );

    private readonly itemTemplate = contentChild(FktSelectItemDirective);
    private readonly groupTemplate = contentChild(FktSelectGroupDirective);
    private readonly headerTemplate = contentChild(FktSelectHeaderDirective);
    private readonly footerTemplate = contentChild(FktSelectFooterDirective);
    private readonly emptyTemplate = contentChild(FktSelectEmptyDirective);

    private readonly overlayRef = signal<FktOverlayRef<
        FktSelectOptionsComponent<Option>
    > | null>(null);

    private readonly syncOpenState = effect(() => {
        const opened = this.context.dropdownOpened();

        untracked(() => (opened ? this.open() : this.close()));
    });

    private open() {
        const anchor = this.context.fieldContainer();

        if (!anchor || this.overlayRef()) return;

        this.overlayRef.set(
            this.overlayService.open({
                anchorElementRef: anchor,
                component: FktSelectOptionsComponent<Option>,
                data: {
                    itemTemplate: this.itemTemplate()?.template,
                    groupTemplate: this.groupTemplate()?.template,
                    headerTemplate: this.headerTemplate()?.template,
                    footerTemplate: this.footerTemplate()?.template,
                    emptyTemplate: this.emptyTemplate()?.template,
                    select: (option) => this.selection.select(option),
                },
                panelOptions: {
                    parentInjector: this.injector,
                    inheritDesignTokensFrom: this.host.nativeElement,
                    autoFocusOnOpen: false,
                    distanceFromAnchor: '4px 0',
                    maxHeight: 'fit-content',
                    borderRadius:
                        'var(--fkt-select-options-border-radius, var(--fkt-radius-md))',
                    backgroundColor:
                        'var(--fkt-select-options-background-color, var(--fkt-color-modal-background))',
                    boxShadow:
                        'var(--fkt-select-options-shadow, var(--fkt-shadow-md))',
                    onAutoClose: () => this.context.closeDropdown(),
                },
            })
        );
    }

    private close() {
        this.overlayRef()?.close();
        this.overlayRef.set(null);
    }

    restoreFocus() {
        this.overlayRef()?.restoreFocus();
    }
}
