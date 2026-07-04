import { FktBuiltInIconName } from './static/generated/fkt-built-in-icon-name';
import { outlineIconContents } from './static/generated/outline-icon-contents';

export const fktIconSizes = ['sm', 'md', 'lg'] as const;
export type FktIconSize = (typeof fktIconSizes)[number];

export const fktIconNames = Object.keys(
    outlineIconContents
) as FktBuiltInIconName[];

/** @deprecated Use `fktIconNames` instead. */
export const fontIconNames = fktIconNames;
