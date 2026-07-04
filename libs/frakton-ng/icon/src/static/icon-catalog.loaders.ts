import { LazyIconVariant } from '../types/lazy-icon.variant';
import { IconCatalog } from '../types/icon.catalog';

export const iconCatalogLoaders: Readonly<
    Record<LazyIconVariant, () => Promise<IconCatalog>>
> = {
    solid: () =>
        import('./generated/solid-icon-contents').then(
            (module) => module.solidIconContents
        ),
    mini: () =>
        import('./generated/mini-icon-contents').then(
            (module) => module.miniIconContents
        ),
    micro: () =>
        import('./generated/micro-icon-contents').then(
            (module) => module.microIconContents
        ),
};
