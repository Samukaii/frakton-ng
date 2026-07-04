import { FktBuiltInIconName } from './static/generated/fkt-built-in-icon-name';

/**
 * Augment this interface with the application's custom icon catalog.
 *
 * @example
 * declare module 'frakton-ng/icon' {
 *     interface FktCustomIcons extends CustomIcons {}
 * }
 */
export interface FktCustomIcons {}

export type FktIconName =
    | FktBuiltInIconName
    | Extract<keyof FktCustomIcons, string>;
