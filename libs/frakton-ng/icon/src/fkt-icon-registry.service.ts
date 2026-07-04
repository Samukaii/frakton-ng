import {
    ErrorHandler,
    inject,
    Injectable,
    PendingTasks,
    signal,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { safePromise } from 'frakton-ng/internal/utils';
import { FktIconName } from './fkt-icon-name';
import { FktIconVariant } from './fkt-icon-variant';
import { iconCatalogLoaders } from './static/icon-catalog.loaders';
import { fktBuiltInIconVariantConfig } from './static/generated/fkt-built-in-icon-variant';
import { outlineIconContents } from './static/generated/outline-icon-contents';
import { FKT_CUSTOM_ICONS } from './tokens/fkt-custom-icons.token';
import {
    FktCustomIcon,
    FktCustomIconCatalog,
    FktIconDefinition,
} from './types/fkt-icon-definition';
import { IconCatalog } from './types/icon.catalog';
import { LazyIconVariant } from './types/lazy-icon.variant';

@Injectable({ providedIn: 'root' })
export class FktIconRegistry {
    private readonly errorHandler = inject(ErrorHandler);
    private readonly pendingTasks = inject(PendingTasks);
    private readonly sanitizer = inject(DomSanitizer);
    private readonly customIcons = this.mergeCustomIconCatalogs(
        inject(FKT_CUSTOM_ICONS, { optional: true }) ?? []
    );
    private readonly catalogs = signal(
        new Map<FktIconVariant, IconCatalog>([['outline', outlineIconContents]])
    );
    private readonly loadingVariants = new Set<LazyIconVariant>();
    private readonly svgContents = new Map<string, SafeHtml>();

    loadIcon(name: FktIconName, variant: FktIconVariant): void {
        if (
            this.getCustomIconDefinition(name, variant) ||
            !Object.hasOwn(outlineIconContents, name)
        ) {
            return;
        }

        this.loadVariant(variant);
    }

    getIcon(name: FktIconName, variant: FktIconVariant): SafeHtml | '' {
        const customIcon = this.getCustomIconDefinition(name, variant);

        if (customIcon) {
            return this.resolveCustomIcon(customIcon, name, variant);
        }

        const catalog = this.catalogs().get(variant);
        const content = catalog?.[name as keyof IconCatalog];

        return content
            ? this.resolveBuiltInIcon(content, name, variant)
            : '';
    }

    private loadVariant(variant: FktIconVariant): void {
        if (
            variant === 'outline' ||
            this.catalogs().has(variant) ||
            this.loadingVariants.has(variant)
        ) {
            return;
        }

        this.loadingVariants.add(variant);

        this.pendingTasks.run(async () => {
            const [error, catalog] = await safePromise(
                iconCatalogLoaders[variant]()
            );

            this.loadingVariants.delete(variant);

            if (catalog === null) {
                this.errorHandler.handleError(error);
                return;
            }

            this.catalogs.update((catalogs) => {
                const updatedCatalogs = new Map(catalogs);
                updatedCatalogs.set(variant, catalog);
                return updatedCatalogs;
            });
        });
    }

    private resolveBuiltInIcon(
        content: string,
        name: FktIconName,
        variant: FktIconVariant
    ): SafeHtml {
        const cacheKey = `${variant}:${name}`;
        const cachedSvg = this.svgContents.get(cacheKey);

        if (cachedSvg !== undefined) {
            return cachedSvg;
        }

        const config = fktBuiltInIconVariantConfig[variant];
        const attributes = Object.entries(config.attributes)
            .filter(([attribute]) => attribute !== 'stroke-width')
            .map(([attribute, value]) => `${attribute}="${value}"`)
            .join(' ');
        const svg = this.trustSvg(config.viewBox, content, attributes);

        this.svgContents.set(cacheKey, svg);
        return svg;
    }

    private resolveCustomIcon(
        definition: FktIconDefinition,
        name: FktIconName,
        variant: FktIconVariant
    ): SafeHtml {
        const cacheKey = `${variant}:${name}`;
        const cachedSvg = this.svgContents.get(cacheKey);

        if (cachedSvg !== undefined) {
            return cachedSvg;
        }

        const svg = this.trustSvg(definition.viewBox, definition.content);
        this.svgContents.set(cacheKey, svg);
        return svg;
    }

    private trustSvg(
        viewBox: string,
        content: string,
        attributes = ''
    ): SafeHtml {
        const escapedViewBox = this.escapeAttribute(viewBox);
        const extraAttributes = attributes ? ` ${attributes}` : '';
        const svg = `<svg viewBox="${escapedViewBox}"${extraAttributes} stroke-width="var(--_fkt-icon-stroke-width)" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" focusable="false" aria-hidden="true" style="display:block">${content}</svg>`;

        return this.sanitizer.bypassSecurityTrustHtml(svg);
    }

    private getCustomIconDefinition(
        name: FktIconName,
        variant: FktIconVariant
    ): FktIconDefinition | undefined {
        const icon = this.customIcons[name];

        if (!icon) {
            return undefined;
        }

        return this.isIconDefinition(icon)
            ? icon
            : icon.variants[variant] ?? icon.fallback;
    }

    private isIconDefinition(
        icon: FktCustomIcon
    ): icon is FktIconDefinition {
        return 'content' in icon;
    }

    private mergeCustomIconCatalogs(
        catalogs: readonly FktCustomIconCatalog[]
    ): FktCustomIconCatalog {
        return Object.assign({}, ...catalogs);
    }

    private escapeAttribute(value: string): string {
        return value.replace(
            /[&<>"']/g,
            (character) =>
                ({
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    '"': '&quot;',
                    "'": '&#39;',
                })[character] ?? character
        );
    }
}
