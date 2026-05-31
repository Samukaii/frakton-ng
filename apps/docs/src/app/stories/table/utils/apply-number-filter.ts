import { FktNumberFilterValue } from 'frakton-ng/table/filters/number';

export function applyNumberFilter(
    value: number,
    filter: FktNumberFilterValue
): boolean {
    if (filter.value === null) return true;
    switch (filter.modifier) {
        case 'eq':
            return value === filter.value;
        case 'lt':
            return value < filter.value;
        case 'gt':
            return value > filter.value;
        case 'lte':
            return value <= filter.value;
        case 'gte':
            return value >= filter.value;
    }
}

