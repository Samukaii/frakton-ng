export type FktNumberModifier = 'eq' | 'lt' | 'gt' | 'lte' | 'gte';

export interface FktNumberFilterValue {
    modifier: FktNumberModifier;
    value: number | null;
}
