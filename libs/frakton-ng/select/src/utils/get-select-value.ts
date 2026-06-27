import { Generic } from 'frakton-ng/internal/types';
import { FktSelectValueKey } from '../fkt-select.types';

export const getSelectValue = <Option extends Generic | string | number>(
    option: Option,
    valueKey?: FktSelectValueKey<Option>
): string | number => {
    if (typeof valueKey === 'function') return valueKey(option);
    if (valueKey) return option[valueKey] as string | number;
    if (typeof option === 'string' || typeof option === 'number') return option;

    throw new Error(
        'fkt-select: valueKey is required when options are objects.'
    );
};
