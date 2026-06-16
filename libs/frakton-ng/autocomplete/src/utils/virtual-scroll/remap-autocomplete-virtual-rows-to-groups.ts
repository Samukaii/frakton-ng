import {
    FktAutocompleteVirtualRenderRowWithOffset,
    FktGroupedAutocompleteOption,
} from '../../fkt-autocomplete.types';

export const remapAutocompleteVirtualRowsToGroups = <Option>(
    rows: FktAutocompleteVirtualRenderRowWithOffset<Option>[]
) => {
    const groups = new Map<
        string | number,
        FktGroupedAutocompleteOption<Option>
    >();

    for (const row of rows) {
        if (row.kind === 'group') {
            groups.set(row.group.value, {
                label: row.group.label,
                value: row.group.value,
                items: [],
            });

            continue;
        }

        if (!groups.has(row.groupValue)) {
            groups.set(row.groupValue, {
                label: row.groupLabel,
                value: row.groupValue,
                items: [],
            });
        }

        groups.get(row.groupValue)!.items.push(row.item);
    }

    return Array.from(groups.values());
};
