import { Provider } from '@angular/core';
import { FKT_CUSTOM_ICONS } from '../tokens/fkt-custom-icons.token';
import { FktCustomIconCatalog } from '../types/fkt-icon-definition';

export function provideFktIcons(icons: FktCustomIconCatalog): Provider {
    return {
        provide: FKT_CUSTOM_ICONS,
        multi: true,
        useValue: icons,
    };
}
