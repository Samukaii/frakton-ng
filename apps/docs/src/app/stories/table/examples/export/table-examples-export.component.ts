import { Component, computed, inject, resource } from '@angular/core';
import {
    FktTableColumn,
    FktTableComponent,
    FktTableExportDirective,
} from 'frakton-ng/table';
import { FktTagColor } from 'frakton-ng/tag';
import { FktButtonLegacyComponent } from 'frakton-ng/button-legacy';
import { Order } from '@/stories/table/models/order';
import { OrderStatus } from '@/stories/table/models/order-status';
import { OrdersService } from '@/stories/table/services/orders.service';
import { formatDate } from '@angular/common';
import { cell } from '@/utils/cell-renderer';

const STATUS_LABELS: Record<OrderStatus, string> = {
    pending: 'Pending',
    processing: 'Processing',
    shipped: 'Shipped',
    delivered: 'Delivered',
    cancelled: 'Cancelled',
};

const STATUS_COLORS: Record<OrderStatus, FktTagColor> = {
    pending: 'warning',
    processing: 'info',
    shipped: 'accent',
    delivered: 'success',
    cancelled: 'danger',
};

@Component({
    selector: 'app-table-examples-export',
    imports: [FktTableComponent, FktTableExportDirective, FktButtonLegacyComponent],
    templateUrl: './table-examples-export.component.html',
    styleUrl: './table-examples-export.component.scss',
})
export class TableExamplesExportComponent {
    private readonly service = inject(OrdersService);

    protected readonly response = resource({
        loader: () => this.service.getAll(),
    });
    protected readonly data = computed(
        () => this.response.value()?.results ?? []
    );

    protected readonly columns: FktTableColumn<Order>[] = [
        {
            key: 'orderNumber',
            header: 'Order #',
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
            exportValue: (order) => order.date,
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
            exportValue: (order) => order.total.toFixed(2),
        },
        {
            key: 'status',
            header: 'Status',
            exportHeader: 'Status',
            cell: (order) =>
                cell.tag({
                    variant: 'opaque',
                    text: STATUS_LABELS[order.status],
                    color: STATUS_COLORS[order.status],
                }),
            exportValue: (order) => STATUS_LABELS[order.status],
        },
    ];
}
