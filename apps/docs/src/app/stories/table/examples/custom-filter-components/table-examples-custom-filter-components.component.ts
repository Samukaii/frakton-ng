import { Component, computed, inject, resource, signal } from '@angular/core';
import {
    defineCells,
    defineFilters,
    FktTableColumn,
    FktTableComponent,
} from 'frakton-ng/table';
import { FktTagComponent } from 'frakton-ng/tag';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import {
    ProductCategoryFilters,
    ProductsService,
} from '@/stories/table/services/products.service';
import { Product } from '@/stories/table/models/product';
import {
    CATEGORY_COLORS,
    STATUS_COLORS,
    STATUS_LABELS,
} from '@/stories/table/constants/product-constants';
import { stockColor } from '@/stories/table/utils/stock-color';
import { CategoryMultiFilterComponent } from './filters/category-multi-filter/category-multi-filter.component';
import { JsonPipe } from '@angular/common';
import { FktButtonLegacyComponent } from 'frakton-ng/button-legacy';

const cell = defineCells({
    tag: FktTagComponent,
    actions: FktButtonsListComponent,
});

const filter = defineFilters({});

@Component({
    selector: 'app-table-examples-custom-filter-components',
    imports: [FktTableComponent, JsonPipe, FktButtonLegacyComponent],
    templateUrl: './table-examples-custom-filter-components.component.html',
    styleUrl: './table-examples-custom-filter-components.component.scss',
})
export class TableExamplesCustomFilterComponentsComponent {
    private readonly productsService = inject(ProductsService);

    defaultFilters: ProductCategoryFilters = { categories: [] };
    filters = signal(this.defaultFilters);

    protected response = resource({
        params: this.filters,
        loader: ({ params }) =>
            this.productsService.getAllWithCategoryFilter({
                ...params,
                pageSize: 20,
            }),
    });

    protected total = computed(() => this.response.value()?.total ?? 0);
    protected products = computed(() => this.response.value()?.results ?? []);

    resetFilters() {
        this.filters.set(this.defaultFilters);
    }

    protected columns: FktTableColumn<Product>[] = [
        {
            key: 'name',
            header: 'Name',
            cell: (product) => product.name,
        },
        {
            key: 'category',
            header: 'Category',
            filter: filter.custom(
                'categories',
                CategoryMultiFilterComponent,
                {}
            ),
            cell: (product) =>
                cell.tag({
                    variant: 'opaque',
                    text: product.category,
                    color: CATEGORY_COLORS[product.category],
                }),
        },
        {
            key: 'status',
            header: 'Status',
            cell: (product) =>
                cell.tag({
                    variant: 'opaque',
                    text: STATUS_LABELS[product.status],
                    color: STATUS_COLORS[product.status],
                }),
        },
        {
            key: 'stock',
            header: 'Stock',
            cell: (product) =>
                cell.tag({
                    variant: 'opaque',
                    text: String(product.stock),
                    color: stockColor(product.stock),
                }),
        },
        {
            key: 'price',
            header: 'Price',
            cell: (product) => `$${product.price.toFixed(2)}`,
        },
        {
            key: 'actions',
            header: 'Actions',
            cell: (product) =>
                cell.actions({
                    fill: false,
                    actions: [
                        {
                            identifier: 'delete',
                            color: 'danger',
                            icon: 'trash',
                            theme: 'basic',
                            ariaLabel: 'Delete product',
                            click: () => console.log('delete', product.name),
                        },
                    ],
                }),
        },
    ];
}
