import { computed, Directive, inject, input, model } from '@angular/core';
import { FktTableSelection, TableItem } from '../../../fkt-table.types';
import { FktTableContextDirective } from '../../core/fkt-table-context.directive';

@Directive({
    selector: 'fkt-table[fktTableSelection]',
})
export class FktTableSelectionDirective<Item extends TableItem> {
    readonly totalItems = input<number>();
    readonly selection = model<FktTableSelection<Item>>({
        selectAll: false,
        items: [],
    });

    private readonly context = inject(FktTableContextDirective);

    private readonly currentPageIds = computed(() => {
        const data = this.context.data() as Item[];

        const ids = data.map((item) => this.context.getId(item));

        return Array.from(new Set(ids));
    });

    private readonly allSelectedIds = computed(() => {
        const selection = this.selection();

        if (selection.selectAll) return 'all';

        const ids = selection.items.map((item) => this.context.getId(item));

        return Array.from(new Set(ids));
    });

    private readonly selectedIdsOnCurrentPage = computed(() => {
        const currentPageIds = this.currentPageIds();
        const allSelectedIds = this.allSelectedIds();

        if (allSelectedIds === 'all') return 'all';

        const ids = allSelectedIds.filter((selectedId) =>
            currentPageIds.includes(selectedId)
        );

        return Array.from(new Set(ids));
    });

    readonly showBanner = computed(() => {
        const state = this.selectedState();

        return state === 'all' || state === 'all-in-current-page';
    });

    readonly selectedState = computed(() => {
        const allSelectedIds = this.allSelectedIds();
        const selectedIdsOnCurrentPage = this.selectedIdsOnCurrentPage();

        if (allSelectedIds.length === 0) return 'none';

        if (selectedIdsOnCurrentPage === 'all') return 'all';

        const pageIds = this.currentPageIds();

        if (selectedIdsOnCurrentPage.length === 0)
            return 'none-in-current-page';
        if (selectedIdsOnCurrentPage.length === pageIds.length)
            return 'all-in-current-page';

        return 'some-in-current-page';
    });

    toggleAllInCurrentPage(): void {
        const data = this.context.data() as Item[];
        const state = this.selectedState();
        const pageIds = this.currentPageIds();
        const selection = this.selection();

        if (state === 'all' || selection.selectAll) {
            this.selection.set({ selectAll: false, items: [] });
            return;
        }

        if (
            state === 'none' ||
            state === 'none-in-current-page' ||
            state === 'some-in-current-page'
        ) {
            this.selection.set({
                selectAll: false,
                items: data,
            });

            return;
        }

        const allExceptCurrentPage = selection.items.filter(
            (item) => !pageIds.includes(this.context.getId(item))
        );

        this.selection.set({
            selectAll: false,
            items: allExceptCurrentPage,
        });
    }

    toggleRowSelection(row: Item): void {
        const selectedIds = this.allSelectedIds();
        const selection = this.selection();

        if (selectedIds === 'all' || selection.selectAll) return;

        const alreadySelected = selectedIds.includes(this.context.getId(row));
        const items = selection.items;

        const updatedItems = alreadySelected
            ? items.filter((item) => !this.context.isSameRow(item, row))
            : [...items, row];

        this.selection.set({
            selectAll: false,
            items: updatedItems,
        });
    }

    isRowSelected(row: Item): boolean {
        const selectedIds = this.allSelectedIds();

        if (selectedIds === 'all') return true;

        return selectedIds.includes(this.context.getId(row));
    }

    selectAll(): void {
        this.selection.set({ selectAll: true });
    }

    clearSelection(): void {
        this.selection.set({ selectAll: false, items: [] });
    }
}
