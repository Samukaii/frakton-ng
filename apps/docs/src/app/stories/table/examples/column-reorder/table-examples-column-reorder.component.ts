import { Component, computed, inject, resource } from '@angular/core';
import {
    defineCells,
    FktTableColumn,
    FktTableComponent,
    FktTableReorderDirective,
} from 'frakton-ng/table';
import { OrdersService } from '@/stories/table/services/orders.service';
import { Order } from '@/stories/table/models/order';
import { formatCurrency, formatDate } from '@angular/common';
import { FktTagColor, FktTagComponent } from 'frakton-ng/tag';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';

const cell = defineCells({
    tag: FktTagComponent,
    actions: FktButtonsListComponent,
});

const STATUS_INFO: Record<string, { label: string; color: FktTagColor }> = {
    pending: { label: 'Pending', color: 'warning' },
    processing: { label: 'Processing', color: 'accent' },
    shipped: { label: 'Shipped', color: 'info' },
    delivered: { label: 'Delivered', color: 'success' },
    cancelled: { label: 'Cancelled', color: 'danger' },
};

@Component({
    selector: 'app-table-examples-column-reorder',
    imports: [FktTableComponent, FktTableReorderDirective],
    templateUrl: './table-examples-column-reorder.component.html',
    styleUrl: './table-examples-column-reorder.component.scss',
})
export class TableExamplesColumnReorderComponent {
    private readonly ordersService = inject(OrdersService);
    private readonly response = resource({
        loader: () => this.ordersService.getAll(),
    });
    protected readonly orders = computed(
        () => this.response.value()?.results ?? []
    );

    protected columns: FktTableColumn<Order>[] = [
        {
            key: 'orderNumber',
            header: 'Order',
            width: '130px',
            cell: (order) => order.orderNumber,
        },
        {
            key: 'customer',
            header: 'Customer',
            width: '180px',
            cell: (order) => order.customer,
        },
        {
            key: 'date',
            header: 'Order date',
            width: '160px',
            cell: (order) => formatDate(order.date, 'mediumDate', 'en'),
        },
        {
            key: 'items',
            header: 'Items',
            width: '100px',
            cell: (order) => `${order.items}`,
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
        },
    ];
}
