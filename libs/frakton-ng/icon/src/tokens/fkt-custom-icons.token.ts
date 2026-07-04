import { InjectionToken } from '@angular/core';
import { FktCustomIconCatalog } from '../types/fkt-icon-definition';

export const FKT_CUSTOM_ICONS = new InjectionToken<
    readonly FktCustomIconCatalog[]
>('FKT_CUSTOM_ICONS');
