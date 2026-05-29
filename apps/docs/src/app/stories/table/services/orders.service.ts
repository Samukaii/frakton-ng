import { Injectable } from '@angular/core';
import { Order } from '@/stories/table/models/order';
import { OrderStatus } from '@/stories/table/models/order-status';

export interface OrderQueryParams {
    page?: number;
    pageSize?: number;
    filters?: {
        status?: OrderStatus;
        orderNumber?: string;
    };
}

@Injectable({ providedIn: 'root' })
export class OrdersService {
    private cache: Order[] | null = null;
    private cache10K: Order[] | null = null;

    private async load(): Promise<Order[]> {
        if (this.cache) return this.cache;
        const res = await fetch('api/orders.json');
        const data = await res.json();
        this.cache = data.results;
        return this.cache!;
    }

    async get10K(): Promise<{ results: Order[]; total: number }> {
        if (!this.cache10K) {
            const res = await fetch('api/orders-10K.json');
            const data = await res.json();
            this.cache10K = data.results;
        }
        return { results: this.cache10K!, total: this.cache10K!.length };
    }

    async getAll(params?: OrderQueryParams) {
        const { page = 1, pageSize = 5, filters } = params ?? {};

        let results = await this.load();

        if (filters?.status)
            results = results.filter((order) => order.status === filters.status);

        if (filters?.orderNumber)
            results = results.filter((order) =>
                order.orderNumber.toLowerCase().includes(filters.orderNumber ?? '')
            );

        const total = results.length;
        const start = (page - 1) * pageSize;

        return {
            results: results.slice(start, start + pageSize),
            total,
        };
    }
}
