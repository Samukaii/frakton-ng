import {
    AfterViewInit,
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    input,
    output,
    TemplateRef,
    untracked,
    viewChild,
    viewChildren,
} from '@angular/core';
import { FktSpinnerComponent } from 'frakton-ng/spinner';
import { FktIconComponent } from 'frakton-ng/icon';
import {
    FktAutocompleteEmptyContext,
    FktAutocompleteEmptyState,
    FktAutocompleteOption,
} from '../fkt-autocomplete.types';
import { NgTemplateOutlet } from '@angular/common';
import { CallPipe, TranslatePipe } from 'frakton-ng/internal/pipes';
import { FktAutocompleteVirtualScrollDirective } from '../directives/public/fkt-autocomplete-virtual-scroll.directive';
import { FktInfiniteLoadingComponent } from 'frakton-ng/internal/components';
import { FktAutocompleteStoreService } from '../services/fkt-autocomplete-store.service';
import { FktAutocompleteSelectionDirective } from '../directives/fkt-autocomplete-selection.directive';
import { FktAutocompleteContextDirective } from '../directives/fkt-autocomplete-context.directive';
import { Generic } from 'frakton-ng/internal/types';
import { FktAutocompleteInfiniteLoadingDirective } from '../directives/public/fkt-autocomplete-infinite-loading.directive';
import { FktTranslatorService } from 'frakton-ng/internal/services';

export interface ItemContext<T> {
    $implicit: FktAutocompleteOption<T>;
    isSelected?: boolean;
}

@Component({
    selector: 'fkt-autocomplete-options',
    imports: [
        FktIconComponent,
        FktSpinnerComponent,
        NgTemplateOutlet,
        CallPipe,
        FktInfiniteLoadingComponent,
        TranslatePipe,
    ],
    templateUrl: './fkt-autocomplete-options.component.html',
    styleUrl: './fkt-autocomplete-options.component.scss',
    host: {
        id: 'autocomplete-options-overlay',
    },
})
export class FktAutocompleteOptionsComponent<Option extends Generic | string>
    implements AfterViewInit
{
    itemTemplate = input<TemplateRef<any>>();
    groupTemplate = input<TemplateRef<any>>();
    headerTemplate = input<TemplateRef<any>>();
    footerTemplate = input<TemplateRef<any>>();
    emptyTemplate = input<TemplateRef<FktAutocompleteEmptyContext>>();

    select = output<FktAutocompleteOption<Option>>();

    private elementRef = viewChild<ElementRef<HTMLUListElement>>('list');
    private items = viewChildren<ElementRef<HTMLLIElement>>('item');

    protected readonly store = inject(FktAutocompleteStoreService<Option>);
    protected readonly selectionService = inject(
        FktAutocompleteSelectionDirective<Option>
    );
    protected readonly context = inject(FktAutocompleteContextDirective);
    protected readonly translator = inject(FktTranslatorService);

    protected readonly infiniteLoading = inject(
        FktAutocompleteInfiniteLoadingDirective,
        { optional: true }
    );

    protected readonly virtualScroll = inject(
        FktAutocompleteVirtualScrollDirective,
        { optional: true }
    );

    protected readonly noResults =
        this.translator.translateComputed<FktAutocompleteEmptyState>((t) => {
            const query = this.store.query();
            const minSearch = this.context.minSearch();

            if (query.length < minSearch)
                return {
                    query,
                    minSearch,
                    reason: 'min-search',
                    label:
                        minSearch === 1
                            ? t('autocomplete.noResults.fewCharacters.singular')
                            : t('autocomplete.noResults.fewCharacters.plural', {
                                  minSearch,
                              }),
                };

            if (query.length)
                return {
                    query,
                    minSearch,
                    reason: 'query-no-results',
                    label: t('autocomplete.noResults.notFoundForQuery.label', {
                        query,
                    }),
                };

            return {
                query,
                minSearch,
                reason: 'no-results',
                label: t('autocomplete.noResults.noResultsAtAll.label'),
            };
        });

    protected getEmptyTemplateContext(
        state: FktAutocompleteEmptyState
    ): FktAutocompleteEmptyContext {
        return { $implicit: state };
    }

    private readonly moveFocusToActiveElement = effect(() => {
        const index = this.store.activeDescendant.index();

        untracked(() => {
            if (!this.store.activeDescendant.option().scroll) return;

            const virtualScroll = this.virtualScroll;

            if (virtualScroll) {
                virtualScroll.scrollToOption(
                    index,
                    this.store.sourceGrouped(),
                    this.elementRef()?.nativeElement
                );
                return;
            }

            const active = this.items().find(
                (item) =>
                    item.nativeElement.id === this.store.activeDescendant.id()
            );

            active?.nativeElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        });
    });

    protected isSelected(
        option: FktAutocompleteOption<Option>,
        selectedOptions?: FktAutocompleteOption<Option>[]
    ) {
        return !!selectedOptions?.find((selectedOption) =>
            Object.is(selectedOption.value, option.value)
        );
    }

    protected getItemTemplateContext(
        option: FktAutocompleteOption<Option>,
        selectedOptions?: FktAutocompleteOption<Option>[]
    ): ItemContext<Option> {
        return {
            $implicit: option,
            isSelected: this.isSelected(option, selectedOptions),
        };
    }

    ngAfterViewInit() {
        this.onScroll();
    }

    protected onScroll() {
        this.virtualScroll?.updateViewport(this.elementRef()?.nativeElement);
    }
}
