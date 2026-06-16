import { FktAutocompleteOption } from '../fkt-autocomplete.types';
import { normalizeSearchText } from './normalize-search-text';

export const findAutocompleteOption = <Option>(
    options: FktAutocompleteOption<Option>[],
    value: string | number
) => {
    return (
        options.find(
            (option) =>
                normalizeSearchText(value) ===
                    normalizeSearchText(option.value) ||
                normalizeSearchText(value) === normalizeSearchText(option.label)
        ) ?? null
    );
};
