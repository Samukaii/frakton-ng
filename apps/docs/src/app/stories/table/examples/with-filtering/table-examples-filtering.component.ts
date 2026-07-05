import {
    Component,
    computed,
    inject,
    input,
    resource,
    signal,
} from '@angular/core';
import {
    defineCells,
    defineFilters,
    FktTableColumn,
    FktTableComponent,
} from 'frakton-ng/table';
import { FktNoResults } from 'frakton-ng/no-results';
import { FktTagComponent } from 'frakton-ng/tag';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { FktTableFilterTextComponent } from 'frakton-ng/table/filters/text';
import { FktTableFilterSelectComponent } from 'frakton-ng/table/filters/select';
import { FktTableFilterNumberComponent } from 'frakton-ng/table/filters/number';
import { FktTableFilterDateRangeComponent } from 'frakton-ng/table/filters/date-range';
import { JsonPipe } from '@angular/common';
import { FktButtonLegacyComponent } from 'frakton-ng/button-legacy';
import { ProductsService } from '@/stories/table/services/products.service';
import { Product } from '@/stories/table/models/product';
import { ProductFilters } from '@/stories/table/models/product-filters';
import {
    CATEGORY_COLORS,
    STATUS_COLORS,
    STATUS_LABELS,
} from '@/stories/table/constants/product-constants';
import { stockColor } from '@/stories/table/utils/stock-color';

export const cell = defineCells({
    tag: FktTagComponent,
    actions: FktButtonsListComponent,
});

export const filter = defineFilters({
    text: FktTableFilterTextComponent,
    select: FktTableFilterSelectComponent,
    number: FktTableFilterNumberComponent,
    dateRange: FktTableFilterDateRangeComponent,
});

@Component({
    selector: 'app-table-examples-with-filtering',
    imports: [FktTableComponent, JsonPipe, FktButtonLegacyComponent],
    templateUrl: './table-examples-filtering.component.html',
    styleUrl: './table-examples-filtering.component.scss',
})
export class TableExamplesFilteringComponent {
    loading = input<boolean>(false);
    noResults = input<FktNoResults>({
        label: 'No data available',
        description: 'There are no records to display at this time.',
        icon: { name: 'document-text', size: '80px' },
    });

    private readonly productsService = inject(ProductsService);

    protected readonly defaultFilters: ProductFilters = {
        name: '',
        category: '',
        status: '',
        price: { modifier: 'eq', value: null },
        stock: { modifier: 'eq', value: null },
        createdAt: { from: null, to: null },
    };

    protected readonly filters = signal(this.defaultFilters);

    private response = resource({
        params: this.filters,
        loader: async ({ params }) =>
            this.productsService.getAll({ filters: params, pageSize: 20 }),
    });

    protected total = computed(() => this.response.value()?.total ?? 0);
    protected products = computed(() => this.response.value()?.results ?? []);

    protected columns: FktTableColumn<Product>[] = [
        {
            key: 'name',
            header: 'Name',
            filter: filter.text('name', {
                label: 'Name',
                placeholder: 'Search product name',
            }),
            cell: (product) => product.name,
        },
        {
            key: 'category',
            header: 'Category',
            filter: filter.select('category', {
                label: 'Category',
                labelKey: 'label',
                valueKey: 'value',
                options: [
                    { value: 'Electronics', label: 'Electronics' },
                    { value: 'Clothing', label: 'Clothing' },
                    { value: 'Books', label: 'Books' },
                    { value: 'Sports', label: 'Sports' },
                    { value: 'Food', label: 'Food' },
                ],
            }),
            cell: (product) =>
                cell.tag({
                    variant: 'opaque',
                    text: product.category,
                    color: CATEGORY_COLORS[product.category],
                }),
        },
        {
            key: 'price',
            header: 'Price',
            filter: filter.number('price', {
                label: 'Price ($)',
                placeholder: 'Choose the price'
            }),
            cell: (product) => `$${product.price.toFixed(2)}`,
        },
        {
            key: 'stock',
            header: 'Stock',
            filter: filter.number('stock', {
                label: 'Units',
                placeholder: 'Choose units'
            }),
            cell: (product) =>
                cell.tag({
                    variant: 'opaque',
                    text: String(product.stock),
                    color: stockColor(product.stock),
                }),
        },
        {
            key: 'status',
            header: 'Status',
            filter: filter.select('status', {
                label: 'Status',
                labelKey: 'label',
                valueKey: 'value',
                options: [
                    { value: 'available', label: 'Available' },
                    { value: 'low_stock', label: 'Low stock' },
                    { value: 'out_of_stock', label: 'Out of stock' },
                    { value: 'discontinued', label: 'Discontinued' },
                ],
            }),
            cell: (product) =>
                cell.tag({
                    variant: 'opaque',
                    text: STATUS_LABELS[product.status],
                    color: STATUS_COLORS[product.status],
                }),
        },
        {
            key: 'createdAt',
            header: 'Created at',
            filter: filter.dateRange('createdAt', {}),
            cell: (product) => new Date(product.createdAt).toLocaleDateString(),
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
                            click: () =>
                                console.log(`deleting ${product.name}`),
                        },
                    ],
                }),
        },
    ];

    resetFilters() {
        this.filters.set(this.defaultFilters);
    }
}
