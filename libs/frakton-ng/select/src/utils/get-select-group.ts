import { Generic } from 'frakton-ng/internal/types';
import { FktSelectGroupKey } from '../fkt-select.types';

export const getSelectGroup = <Option extends Generic | string | number>(
    option: Option,
    groupKey?: FktSelectGroupKey<Option>
): { label: string; value: string } => {
    if (!groupKey) return { label: '', value: '' };

    const result =
        typeof groupKey === 'function' ? groupKey(option) : option[groupKey];

    if (
        typeof result === 'object' &&
        result !== null &&
        'label' in result &&
        'value' in result
    ) {
        return {
            label: String(result.label),
            value: String(result.value),
        };
    }

    return {
        label: String(result),
        value: String(result),
    };
};
