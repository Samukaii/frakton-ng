import { RecomputeOn } from './recompute-on';
import { GenericFunction } from 'frakton-ng/internal/types';
import { Signal } from '@angular/core';
import { Observable } from 'rxjs';

export interface FktTranslationContext {
    translateFn: GenericFunction;
    recomputeOn: RecomputeOn;
    currentLanguage: Signal<string> | Observable<string>;
}
