import { FktBuiltInIconName, outlineIconContents } from './static/generated';

export const fktIconSizes = ['sm', 'md', 'lg'] as const;
export type FktIconSize = (typeof fktIconSizes)[number];

export const fktIconNames = Object.keys(
    outlineIconContents
) as FktBuiltInIconName[];
