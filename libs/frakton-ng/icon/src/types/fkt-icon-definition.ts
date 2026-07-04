import { FktIconVariant } from '../fkt-icon-variant';

/**
 * SVG markup trusted by the application.
 *
 * The content is rendered as HTML and must never include user-provided data.
 */
export interface FktIconDefinition {
    readonly viewBox: string;
    readonly content: string;
}

export interface FktIconVariants {
    readonly variants: Readonly<
        Partial<Record<FktIconVariant, FktIconDefinition>>
    >;
    readonly fallback?: FktIconDefinition;
}

export type FktCustomIcon = FktIconDefinition | FktIconVariants;

export type FktCustomIconCatalog = Readonly<
    Record<string, FktCustomIcon>
>;
