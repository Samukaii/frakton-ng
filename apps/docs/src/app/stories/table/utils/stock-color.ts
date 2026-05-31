import { FktTagColor } from 'frakton-ng/tag';

export function stockColor(stock: number): FktTagColor {
    if (stock === 0) return 'danger';
    if (stock < 50) return 'warning';
    return 'success';
}
