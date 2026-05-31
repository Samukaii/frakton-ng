import { Component, computed, inject, resource } from '@angular/core';
import {
    FktTableClassesFn,
    FktTableColumn,
    FktTableComponent,
} from 'frakton-ng/table';
import { Order } from '@/stories/table/models/order';
import { OrderStatus } from '@/stories/table/models/order-status';
import { OrdersService } from '@/stories/table/services/orders.service';
import { formatDate } from '@angular/common';
import { cell } from '@/utils/cell-renderer';
import { FktTagColor } from 'frakton-ng/tag';

const STATUS_COLORS: Record<OrderStatus, FktTagColor> = {
    pending: 'warning',
    processing: 'info',
    shipped: 'accent',
    delivered: 'success',
    cancelled: 'danger',
};

const STATUS_LABELS: Record<OrderStatus, string> = {
    pending: 'Pending',
    processing: 'Processing',
    shipped: 'Shipped',
    delivered: 'Delivered',
    cancelled: 'Cancelled',
};

@Component({
    selector: 'app-table-examples-conditional-style',
    imports: [FktTableComponent],
    templateUrl: './table-examples-conditional-style.component.html',
    styleUrl: './table-examples-conditional-style.component.scss',
})
export class TableExamplesConditionalStyleComponent {
    private readonly service = inject(OrdersService);

    protected readonly response = resource({
        loader: () => this.service.getAll(),
    });
    protected readonly data = computed(
        () => this.response.value()?.results ?? []
    );

    protected readonly classesFn: FktTableClassesFn<Order> = (order) =>
        `status-${order.status}`;

    protected readonly columns: FktTableColumn<Order>[] = [
        {
            key: 'orderNumber',
            header: 'Order',
            cell: (order) => order.orderNumber,
        },
        {
            key: 'customer',
            header: 'Customer',
            cell: (order) => order.customer,
        },
        {
            key: 'date',
            header: 'Date',
            cell: (order) => formatDate(order.date, 'mediumDate', 'en'),
        },
        {
            key: 'items',
            header: 'Items',
            cell: (order) => order.items.toString(),
        },
        {
            key: 'total',
            header: 'Total',
            cell: (order) => `$${order.total.toFixed(2)}`,
        },
        {
            key: 'status',
            header: 'Status',
            cell: (order) =>
                cell.tag({
                    variant: 'opaque',
                    text: STATUS_LABELS[order.status],
                    color: STATUS_COLORS[order.status],
                }),
        },
    ];
}
