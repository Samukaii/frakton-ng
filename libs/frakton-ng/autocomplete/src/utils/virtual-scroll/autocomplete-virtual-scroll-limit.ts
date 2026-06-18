import {
    FktAutocompleteVirtualRenderRow,
    FktGroupedAutocompleteOption,
} from '../../fkt-autocomplete.types';

export const AUTOCOMPLETE_BROWSER_SCROLL_HEIGHT_LIMIT = 33_000_000;

export interface AutocompleteVirtualScrollLimitConfig {
    groupHeight: number;
    itemHeight: number;
    maxItems: number;
}

export const getAutocompleteVirtualScrollTotalHeight = <Option>(
    rows: FktAutocompleteVirtualRenderRow<Option>[],
    config: AutocompleteVirtualScrollLimitConfig
) => {
    const maxItemsHeight =
        config.maxItems * Math.max(config.itemHeight, config.groupHeight);
    const actualHeight = rows.reduce((sum, row) => sum + row.height, 0);

    return Math.max(maxItemsHeight, actualHeight);
};

export const exceedsAutocompleteBrowserScrollLimit = <Option>(
    rows: FktAutocompleteVirtualRenderRow<Option>[],
    config: AutocompleteVirtualScrollLimitConfig
) => {
    return (
        getAutocompleteVirtualScrollTotalHeight(rows, config) >
        AUTOCOMPLETE_BROWSER_SCROLL_HEIGHT_LIMIT
    );
};

export const createAutocompleteVirtualScrollLimitMessage = <Option>(
    rows: FktAutocompleteVirtualRenderRow<Option>[],
    groups: FktGroupedAutocompleteOption<Option>[],
    config: AutocompleteVirtualScrollLimitConfig
) => {
    return (
        'fkt-autocomplete: virtual scroll height exceeds browser limits. ' +
        `maxVirtualItems=${config.maxItems}, optionHeight=${config.itemHeight}px, ` +
        `groupHeight=${config.groupHeight}px, renderedRows=${rows.length}, ` +
        `groups=${groups.length}. Use remote search or reduce the virtual scroll size.`
    );
};
