import {
    FktAutocompleteVirtualRenderRow,
    FktGroupedAutocompleteOption,
} from '../../fkt-autocomplete.types';

export interface BuildAutocompleteVirtualRowsConfig {
    groupHeight: number;
    itemHeight: number;
}

export const buildAutocompleteVirtualRows = <Option>(
    groups: FktGroupedAutocompleteOption<Option>[],
    config: BuildAutocompleteVirtualRowsConfig
) => {
    return groups.flatMap((group) => {
        const rows: FktAutocompleteVirtualRenderRow<Option>[] = [];

        if (group.label) {
            rows.push({
                kind: 'group',
                group,
                groupValue: group.value,
                height: config.groupHeight,
            });
        }

        rows.push(
            ...group.items.map((item) => ({
                kind: 'item' as const,
                item,
                groupValue: group.value,
                groupLabel: group.label,
                height: config.itemHeight,
            }))
        );

        return rows;
    });
};
