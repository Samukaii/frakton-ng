import {
    Component,
    computed,
    inject,
    resource,
    TemplateRef,
    viewChild,
} from '@angular/core';
import {
    defineCells,
    FktTableColumn,
    FktTableComponent,
} from 'frakton-ng/table';
import { Order } from '@/stories/table/models/order';
import { OrdersService } from '@/stories/table/services/orders.service';
import { FktIconComponent, FktIconName } from 'frakton-ng/icon';

const STATUS_INFO: Record<string, { label: string; icon: FktIconName }> = {
    pending: { icon: 'clock', label: 'Pending' },
    processing: { icon: 'bolt', label: 'Processing' },
    shipped: { icon: 'shopping-bag', label: 'Shipped' },
    delivered: { icon: 'shopping-cart', label: 'Delivered' },
    cancelled: { icon: 'x-mark', label: 'Cancelled' },
};

const cell = defineCells({});

@Component({
    selector: 'app-table-examples-template-cell-rendering',
    imports: [FktTableComponent, FktIconComponent],
    templateUrl: './table-examples-template-cell-rendering.component.html',
    styleUrl: './table-examples-template-cell-rendering.component.scss',
})
export class TableExamplesTemplateCellRenderingComponent {
    private readonly ordersService = inject(OrdersService);

    protected readonly response = resource({
        loader: () => this.ordersService.getAll(),
        defaultValue: {results: [], total: 0}
    })

    protected orders = computed(() => this.response.value().results);
    protected statusInfo = STATUS_INFO;

    private readonly customerCell =
        viewChild.required<TemplateRef<unknown>>('customerCell');
    private readonly totalCell =
        viewChild.required<TemplateRef<unknown>>('totalCell');
    private readonly statusCell =
        viewChild.required<TemplateRef<unknown>>('statusCell');

    protected columns = computed<FktTableColumn<Order>[]>(() => [
        {
            key: 'orderNumber',
            header: 'Order #',
            cell: (order) => order.orderNumber,
        },
        {
            key: 'customer',
            header: 'Customer',
            cell: (order) =>
                cell.template(this.customerCell(), {
                    $implicit: order.customer,
                    since: new Date(order.date).getFullYear(),
                }),
        },
        {
            key: 'items',
            header: 'Items',
            cell: (order) => order.items.toString(),
        },
        {
            key: 'total',
            header: 'Total',
            cell: (order) =>
                cell.template(this.totalCell(), { $implicit: order.total }),
        },
        {
            key: 'status',
            header: 'Status',
            cell: (order) =>
                cell.template(this.statusCell(), { $implicit: order.status }),
        },
        {
            key: 'date',
            header: 'Date',
            cell: (order) =>
                new Date(order.date).toLocaleDateString('en-US', { dateStyle: 'medium' }),
        },
    ]);
}
