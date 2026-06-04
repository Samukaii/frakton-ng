import { RecomputeOn } from './recompute-on';
import { GenericFunction } from 'frakton-ng/internal/types';

export interface FktTranslationContext {
    translateFn: GenericFunction;
    recomputeOn: RecomputeOn;
}
