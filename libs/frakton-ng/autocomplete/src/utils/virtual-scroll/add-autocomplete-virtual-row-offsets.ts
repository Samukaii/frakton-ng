import {
    FktAutocompleteVirtualRenderRow,
    FktAutocompleteVirtualRenderRowWithOffset,
} from '../../fkt-autocomplete.types';

export const addAutocompleteVirtualRowOffsets = <Option>(
    rows: FktAutocompleteVirtualRenderRow<Option>[]
) => {
    let offset = 0;

    return rows.map(
        (row, index): FktAutocompleteVirtualRenderRowWithOffset<Option> => {
            const current = {
                ...row,
                index,
                offset,
                endOffset: offset + row.height,
            };

            offset += row.height;

            return current;
        }
    );
};
