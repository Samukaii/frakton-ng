import { FktAutocompleteValue } from '../fkt-autocomplete.types';

export const normalizeAutocompleteValue = (
    value: FktAutocompleteValue,
    multiple: boolean
): (string | number)[] => {
    if (!multiple) {
        if (Array.isArray(value)) return value[0] ? [value[0]] : [];
        return value ? [value] : [];
    }

    if (Array.isArray(value))
        return value.filter((item): item is string => !!item);
    return value ? [value] : [];
};
