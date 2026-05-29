import {
    Component,
    computed,
    effect,
    inject,
    PLATFORM_ID,
    resource,
    signal,
} from '@angular/core';
import {
    defineCells,
    defineFilters,
    FktTableColumn,
    FktTableComponent,
    FktTableFilterValue,
    FktTableReorderDirective,
    FktTableResizeDirective,
} from 'frakton-ng/table';
import { FktTagColor, FktTagComponent } from 'frakton-ng/tag';
import { FktTableFilterTextComponent } from 'frakton-ng/table/filters/text';
import { FktTableFilterSelectComponent } from 'frakton-ng/table/filters/select';
import { FktButtonComponent } from 'frakton-ng/button';
import { Order } from '@/stories/table/models/order';
import { OrderStatus } from '@/stories/table/models/order-status';
import { OrdersService } from '@/stories/table/services/orders.service';
import { formatCurrency, formatDate, isPlatformServer } from '@angular/common';

const STORAGE_KEY = 'docs-table-stateful';

const cell = defineCells({ tag: FktTagComponent });
const filter = defineFilters({
    text: FktTableFilterTextComponent,
    select: FktTableFilterSelectComponent,
});

const STATUS_INFO: Record<OrderStatus, { label: string; color: FktTagColor }> =
    {
        pending: { label: 'Pending', color: 'warning' },
        processing: { label: 'Processing', color: 'accent' },
        shipped: { label: 'Shipped', color: 'info' },
        delivered: { label: 'Delivered', color: 'success' },
        cancelled: { label: 'Cancelled', color: 'danger' },
    };

const loadStorage = () => {
    const platform = inject(PLATFORM_ID);

    if (isPlatformServer(platform)) return {};

    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}');
};

@Component({
    selector: 'app-table-examples-stateful',
    imports: [
        FktTableComponent,
        FktTableResizeDirective,
        FktTableReorderDirective,
        FktButtonComponent,
    ],
    templateUrl: './table-examples-stateful.component.html',
    styleUrl: './table-examples-stateful.component.scss',
})
export class TableExamplesStatefulComponent {
    private readonly service = inject(OrdersService);

    private readonly saved = loadStorage();

    protected readonly columnWidths = signal<Record<string, number>>(
        this.saved.columnWidths ?? {}
    );
    protected readonly columnOrder = signal<string[]>(
        this.saved.columnOrder ?? []
    );
    protected readonly filters = signal<FktTableFilterValue>(
        this.saved.filters ?? {}
    );

    protected readonly response = resource({
        params: this.filters,
        loader: ({ params }) => this.service.getAll({ filters: params }),
    });

    protected readonly syncWithLocalStorage = effect(() => {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
                columnWidths: this.columnWidths(),
                columnOrder: this.columnOrder(),
                filters: this.filters(),
            })
        );
    });

    protected readonly data = computed(
        () => this.response.value()?.results ?? []
    );

    protected readonly columns: FktTableColumn<Order>[] = [
        {
            key: 'orderNumber',
            header: 'Order',
            width: '130px',
            cell: (order) => order.orderNumber,
            filter: filter.text('orderNumber', { label: 'Search order' }),
        },
        {
            key: 'customer',
            header: 'Customer',
            width: '180px',
            cell: (order) => order.customer,
        },
        {
            key: 'date',
            header: 'Date',
            width: '160px',
            cell: (order) => formatDate(order.date, 'mediumDate', 'en'),
        },
        {
            key: 'items',
            header: 'Items',
            width: '100px',
            cell: (order) => order.items.toString(),
        },
        {
            key: 'total',
            header: 'Total',
            width: '140px',
            cell: (order) => formatCurrency(order.total, 'en', '$'),
        },
        {
            key: 'status',
            header: 'Status',
            width: '140px',
            cell: (order) =>
                cell.tag({
                    variant: 'faded',
                    text: STATUS_INFO[order.status].label,
                    color: STATUS_INFO[order.status].color,
                }),
            filter: filter.select('status', {
                label: 'Status',
                options: Object.entries(STATUS_INFO).map(([value, info]) => ({
                    label: info.label,
                    value,
                })),
            }),
        },
    ];

    protected reset(): void {
        localStorage.removeItem(STORAGE_KEY);
        this.columnWidths.set({});
        this.columnOrder.set([]);
        this.filters.set({});
    }
}
