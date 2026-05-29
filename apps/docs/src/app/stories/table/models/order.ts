import { FktIdentifiable } from 'frakton-ng/core';
import { OrderStatus } from './order-status';

export interface Order extends FktIdentifiable {
    orderNumber: string;
    customer: string;
    items: number;
    total: number;
    status: OrderStatus;
    date: string;
}
