import { FktIconName } from 'frakton-ng/icon';

export const fktButtonGroupShapes = ['rounded', 'rect', 'flat'] as const;
export const fktButtonGroupSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export type FktButtonGroupShape = (typeof fktButtonGroupShapes)[number];
export type FktButtonGroupSize = (typeof fktButtonGroupSizes)[number];

export interface FktButtonGroupOption {
    id: string;
    label: string;
    hideLabel?: boolean;
    icon?: FktIconName;
}
