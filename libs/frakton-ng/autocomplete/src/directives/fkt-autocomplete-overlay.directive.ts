import {
    computed,
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
import { FktAutocompleteOptionsComponent } from '../options/fkt-autocomplete-options.component';
import { FktAutocompleteItemDirective } from './public/fkt-autocomplete-item.directive';
import { FktAutocompleteGroupDirective } from './public/fkt-autocomplete-group.directive';
import { FktAutocompleteHeaderDirective } from './public/fkt-autocomplete-header.directive';
import { FktAutocompleteFooterDirective } from './public/fkt-autocomplete-footer.directive';
import { FktAutocompleteSelectionDirective } from './fkt-autocomplete-selection.directive';
import { FktAutocompleteStoreService } from '../services/fkt-autocomplete-store.service';
import { FktAutocompleteContextDirective } from './fkt-autocomplete-context.directive';
import { FktNoResults } from 'frakton-ng/no-results';

@Directive({ selector: 'fkt-autocomplete[fktAutocompleteOverlay]' })
export class FktAutocompleteOverlayDirective<Option extends Generic | string> {
    private readonly overlayService = inject(FktOverlayService);
    private readonly elementRef = inject(ElementRef);

    private readonly store = inject(FktAutocompleteStoreService<Option>);
    private readonly selectionService = inject(
        FktAutocompleteSelectionDirective<Option>
    );
    private readonly context = inject(FktAutocompleteContextDirective);
    private readonly injector = inject(Injector);

    private readonly itemTemplate = contentChild(FktAutocompleteItemDirective);
    private readonly groupTemplate = contentChild(
        FktAutocompleteGroupDirective
    );
    private readonly headerTemplate = contentChild(
        FktAutocompleteHeaderDirective
    );
    private readonly footerTemplate = contentChild(
        FktAutocompleteFooterDirective
    );

    private readonly syncDropdownState = effect(() => {
        const isDropdownOpened = this.context.isDropdownOpened();

        untracked(() => {
            if (isDropdownOpened) this.open();
            else this.close();
        });
    });

    private readonly overlayRef = signal<FktOverlayRef<
        FktAutocompleteOptionsComponent<Option>
    > | null>(null);

    private open() {
        const fieldContainer = this.context.fieldContainer();

        if (this.overlayRef() || !fieldContainer) return;

        const overlayRef = this.overlayService.open({
            anchorElementRef: fieldContainer,
            component: FktAutocompleteOptionsComponent<Option>,
            data: {
                groupTemplate: this.groupTemplate()?.template,
                itemTemplate: this.itemTemplate()?.template,
                headerTemplate: this.headerTemplate()?.template,
                footerTemplate: this.footerTemplate()?.template,
                select: (option) => {
                    this.selectionService.selectItem(option);
                    this.restoreFocus();
                },
            },
            panelOptions: {
                onAutoClose: () => {
                    this.context.closeDropdown();

                    if (
                        this.context.freeText() ||
                        this.selectionService.typedValueExists()
                    ) {
                        this.selectionService.addTypedValue();

                        if (this.context.multiple())
                            this.context.search().clear();
                        return;
                    }

                    this.context.search().clear();
                },
                autoFocusOnOpen: false,
                inheritDesignTokensFrom: this.elementRef.nativeElement,
                distanceFromAnchor: '4px 0',
                maxHeight: 'fit-content',
                borderRadius: 'var(--fkt-radius-sm)',
                parentInjector: this.injector,
            },
        });

        this.overlayRef.set(overlayRef);
    }

    private close() {
        this.overlayRef()?.close();
        this.overlayRef.set(null);
    }

    restoreFocus() {
        this.overlayRef()?.restoreFocus();
    }

    focusFirstElement() {
        this.overlayRef()?.focusFirstElement();
    }
}
