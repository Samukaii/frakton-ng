import { Component, computed, inject, resource } from '@angular/core';
import {
    FktTableColumn,
    FktTableComponent,
    FktTableExpandDirective,
} from 'frakton-ng/table';
import { Order } from '@/stories/table/models/order';
import { OrderStatus } from '@/stories/table/models/order-status';
import { OrdersService } from '@/stories/table/services/orders.service';
import { CurrencyPipe, DatePipe, formatCurrency } from '@angular/common';
import { cell } from '@/utils/cell-renderer';
import { FktTagColor, FktTagComponent } from 'frakton-ng/tag';

const STATUS_INFO: Record<OrderStatus, {label: string; color: FktTagColor}> = {
    pending: {label: 'Pending', color: "warning"},
    processing: {label: 'Processing', color: "accent"},
    shipped: {label: 'Shipped', color: "info"},
    delivered: {label: 'Delivered', color: "success"},
    cancelled: {label: 'Cancelled', color: "danger"},
};

@Component({
    selector: 'app-table-examples-expandable-rows',
    imports: [
        FktTableComponent,
        FktTableExpandDirective,
        CurrencyPipe,
        DatePipe,
        FktTagComponent,
    ],
    templateUrl: './table-examples-expandable-rows.component.html',
    styleUrl: './table-examples-expandable-rows.component.scss',
})
export class TableExamplesExpandableRowsComponent {
    private readonly ordersService = inject(OrdersService);
    private readonly response = resource({ loader: () => this.ordersService.getAll() });
    protected readonly orders = computed(() => this.response.value()?.results ?? []);

    protected readonly statusInfo = STATUS_INFO as Record<
        string,
        { label: string; color: FktTagColor }
    >;

    protected columns: FktTableColumn<Order>[] = [
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
            key: 'status',
            header: 'Status',
            cell: (order) =>
                cell.tag({
                    variant: 'opaque',
                    text: STATUS_INFO[order.status].label,
                    color: STATUS_INFO[order.status].color,
                }),
        },
        {
            key: 'total',
            header: 'Total',
            cell: (order) => formatCurrency(order.total, 'en', '$'),
        },
    ];
}
