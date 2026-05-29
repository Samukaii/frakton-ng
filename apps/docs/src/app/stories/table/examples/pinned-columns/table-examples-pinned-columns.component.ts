import { Component, computed, inject, resource } from '@angular/core';
import { FktTableColumn, FktTableComponent } from 'frakton-ng/table';
import { Order } from '@/stories/table/models/order';
import { OrderStatus } from '@/stories/table/models/order-status';
import { OrdersService } from '@/stories/table/services/orders.service';
import { formatCurrency, formatDate } from '@angular/common';
import { FktTagColor } from 'frakton-ng/tag';
import { cell } from '@/utils/cell-renderer';

const STATUS_INFO: Record<OrderStatus, { label: string; color: FktTagColor }> =
    {
        pending: { label: 'Pending', color: 'warning' },
        processing: { label: 'Processing', color: 'accent' },
        shipped: { label: 'Shipped', color: 'info' },
        delivered: { label: 'Delivered', color: 'success' },
        cancelled: { label: 'Cancelled', color: 'danger' },
    };

const PAYMENT_METHODS = ['Credit card', 'PayPal', 'Bank transfer', 'Crypto'];
const REGIONS = ['North America', 'Europe', 'Asia Pacific', 'Latin America'];

@Component({
    selector: 'app-table-examples-pinned-columns',
    imports: [FktTableComponent],
    templateUrl: './table-examples-pinned-columns.component.html',
    styleUrl: './table-examples-pinned-columns.component.scss',
})
export class TableExamplesPinnedColumnsComponent {
    private readonly ordersService = inject(OrdersService);

    protected readonly response = resource({
        loader: () => this.ordersService.getAll(),
        defaultValue: { results: [], total: 0 },
    });

    protected readonly orders = computed(() => this.response.value().results);

    protected columns: FktTableColumn<Order>[] = [
        {
            key: 'orderNumber',
            header: 'Order',
            pinned: 'left',
            width: '130px',
            cell: (order) => order.orderNumber,
        },
        {
            key: 'customer',
            header: 'Customer',
            pinned: 'left',
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
            key: 'unitPrice',
            header: 'Unit price',
            width: '140px',
            cell: (order) =>
                formatCurrency(order.total / order.items, 'en', '$'),
        },
        {
            key: 'subtotal',
            header: 'Subtotal',
            width: '140px',
            cell: (order) => formatCurrency(order.total * 0.9, 'en', '$'),
        },
        {
            key: 'tax',
            header: 'Tax (10%)',
            width: '140px',
            cell: (order) => formatCurrency(order.total * 0.1, 'en', '$'),
        },
        {
            key: 'total',
            header: 'Total',
            width: '140px',
            cell: (order) => formatCurrency(order.total, 'en', '$'),
        },
        {
            key: 'payment',
            header: 'Payment',
            width: '160px',
            cell: (order) =>
                PAYMENT_METHODS[+order.id % PAYMENT_METHODS.length],
        },
        {
            key: 'region',
            header: 'Region',
            width: '160px',
            cell: (order) => REGIONS[+order.id % REGIONS.length],
        },
        {
            key: 'status',
            header: 'Status',
            pinned: 'right',
            width: '140px',
            cell: (order) =>
                cell.tag({
                    variant: 'opaque',
                    text: STATUS_INFO[order.status].label,
                    color: STATUS_INFO[order.status].color,
                }),
        },
    ];
}
