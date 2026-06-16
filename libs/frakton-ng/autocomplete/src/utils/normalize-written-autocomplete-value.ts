import { Generic } from 'frakton-ng/internal/types';
import {
    FktAutocompleteValue,
    FktAutocompleteValueKey,
} from '../fkt-autocomplete.types';
import { getValueByKey } from './get-value-by-key';

export type FktAutocompleteWritableValue<Option> =
    | string
    | number
    | Option
    | (string | number | Option)[]
    | null;

export interface NormalizeWrittenAutocompleteValueConfig<Option> {
    multiple: boolean;
    valueKey?: FktAutocompleteValueKey<Option>;
}

export interface NormalizedWrittenAutocompleteValue<Option> {
    preloadedOptions: Option[];
    value: FktAutocompleteValue;
}

export const normalizeWrittenAutocompleteValue = <
    Option extends Generic | string,
>(
    value: FktAutocompleteWritableValue<Option>,
    config: NormalizeWrittenAutocompleteValueConfig<Option>
): NormalizedWrittenAutocompleteValue<Option> => {
    const values = Array.isArray(value) ? value : [value];
    const preloadedOptions: Option[] = [];

    const normalizedValues = values.flatMap((item): (string | number)[] => {
        if (item === null) return [];

        if (isAutocompletePrimitiveValue(item)) return [item];

        preloadedOptions.push(item);

        return [getValueByKey(item, config.valueKey)];
    });

    return {
        preloadedOptions,
        value: config.multiple
            ? normalizedValues
            : normalizedValues[0] ?? null,
    };
};

const isAutocompletePrimitiveValue = <Option>(
    value: string | number | Option
): value is string | number => {
    return typeof value === 'string' || typeof value === 'number';
};
