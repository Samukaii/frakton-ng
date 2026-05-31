import { Component, computed, inject, input, resource } from '@angular/core';
import { FktTableColumn, FktTableComponent, FktTableVirtualScrollDirective } from 'frakton-ng/table';
import { formatCurrency, formatDate } from '@angular/common';
import { FktTagColor } from 'frakton-ng/tag';
import { cell } from '@/utils/cell-renderer';
import { OrdersService } from '@/stories/table/services/orders.service';
import { Order } from '@/stories/table/models/order';
import { OrderStatus } from '@/stories/table/models/order-status';

const STATUS_INFO: Record<OrderStatus, { label: string; color: FktTagColor }> = {
    pending: { label: 'Pending', color: 'warning' },
    processing: { label: 'Processing', color: 'accent' },
    shipped: { label: 'Shipped', color: 'info' },
    delivered: { label: 'Delivered', color: 'success' },
    cancelled: { label: 'Cancelled', color: 'danger' },
};


@Component({
    selector: 'app-table-examples-virtual-scroll',
    imports: [FktTableComponent, FktTableVirtualScrollDirective],
    templateUrl: './table-examples-virtual-scroll.component.html',
    styleUrl: './table-examples-virtual-scroll.component.scss',
})
export class TableExamplesVirtualScrollComponent {
    protected readonly rowHeight = input(48);

    private service = inject(OrdersService);

    protected readonly response = resource({
        loader: () => this.service.get10K(),
        defaultValue: {results: [], total: 0}
    })

    protected readonly orders = computed(() => this.response.value().results)


    protected columns: FktTableColumn<Order>[] = [
        {
            key: 'orderNumber',
            header: 'Order',
            width: '130px',
            cell: order => order.orderNumber,
        },
        {
            key: 'customer',
            header: 'Customer',
            width: '200px',
            cell: order => order.customer,
        },
        {
            key: 'date',
            header: 'Date',
            width: '150px',
            cell: order => formatDate(order.date, 'mediumDate', 'en'),
        },
        {
            key: 'items',
            header: 'Items',
            width: '80px',
            cell: order => `${order.items}`,
        },
        {
            key: 'total',
            header: 'Total',
            width: '130px',
            cell: order => formatCurrency(order.total, 'en', '$'),
        },
        {
            key: 'status',
            header: 'Status',
            width: '140px',
            cell: order =>
                cell.tag({
                    variant: 'faded',
                    text: STATUS_INFO[order.status].label,
                    color: STATUS_INFO[order.status].color,
                }),
        },
    ];
}
