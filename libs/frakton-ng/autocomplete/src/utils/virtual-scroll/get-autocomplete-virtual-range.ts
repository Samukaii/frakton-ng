import {
    FktAutocompleteVirtualRange,
    FktAutocompleteVirtualRenderRowWithOffset,
} from '../../fkt-autocomplete.types';

export interface GetAutocompleteVirtualRangeConfig {
    buffer: number;
    scrollTop: number;
    viewportHeight: number;
}

export const getAutocompleteVirtualRange = <Option>(
    rows: FktAutocompleteVirtualRenderRowWithOffset<Option>[],
    config: GetAutocompleteVirtualRangeConfig
): FktAutocompleteVirtualRange => {
    const totalHeight = rows.at(-1)?.endOffset ?? 0;
    const viewportEnd = config.scrollTop + config.viewportHeight;

    const firstVisible = rows.findIndex(
        (row) => row.endOffset >= config.scrollTop
    );

    const lastVisible = rows.findIndex((row) => row.offset > viewportEnd);

    const startIndex = Math.max(
        0,
        (firstVisible === -1 ? 0 : firstVisible) - config.buffer
    );

    const endIndex = Math.min(
        rows.length - 1,
        (lastVisible === -1 ? rows.length - 1 : lastVisible) + config.buffer
    );

    const topSpacerHeight = rows[startIndex]?.offset ?? 0;
    const renderedEnd = rows[endIndex]?.endOffset ?? 0;

    return {
        startIndex,
        endIndex,
        topSpacerHeight,
        bottomSpacerHeight: Math.max(0, totalHeight - renderedEnd),
    };
};
