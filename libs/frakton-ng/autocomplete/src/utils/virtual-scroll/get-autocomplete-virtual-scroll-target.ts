import { FktAutocompleteVirtualRenderRowWithOffset } from '../../fkt-autocomplete.types';

export const getAutocompleteVirtualScrollTarget = <Option>(
    row: FktAutocompleteVirtualRenderRowWithOffset<Option>,
    viewportHeight: number
) => {
    return row.offset - viewportHeight / 2 + row.height / 2;
};
