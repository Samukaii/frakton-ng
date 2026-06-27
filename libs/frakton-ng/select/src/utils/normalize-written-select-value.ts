import { Generic } from 'frakton-ng/internal/types';
import {
    FktSelectValue,
    FktSelectValueKey,
    FktSelectWritableValue,
} from '../fkt-select.types';
import { getSelectValue } from './get-select-value';

export const normalizeWrittenSelectValue = <
    Option extends Generic | string | number,
>(
    value: FktSelectWritableValue<Option>,
    config: {
        multiple: boolean;
        valueKey?: FktSelectValueKey<Option>;
    }
): { value: FktSelectValue; preloadedOptions: Option[] } => {
    const values = Array.isArray(value) ? value : [value];
    const preloadedOptions: Option[] = [];
    const normalized = values.flatMap((item): (string | number)[] => {
        if (item === null) return [];
        if (typeof item === 'string' || typeof item === 'number') return [item];

        preloadedOptions.push(item);
        return [getSelectValue(item, config.valueKey)];
    });

    return {
        value: config.multiple ? normalized : normalized[0] ?? null,
        preloadedOptions,
    };
};
