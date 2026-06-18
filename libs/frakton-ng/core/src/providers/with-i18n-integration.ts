import { RecomputeOn } from '../models/recompute-on';
import { FKT_TRANSLATION_CONTEXT } from '../di/injection-tokens';
import { Signal } from '@angular/core';
import { Observable } from 'rxjs';

export const withI18nIntegration = <TranslateFn extends (...args: any) => any>(
    config: () => {
        recomputeOn: RecomputeOn;
        currentLanguage: Signal<string> | Observable<string>;
        translateFn: TranslateFn;
    }
) => {
    return [
        {
            provide: FKT_TRANSLATION_CONTEXT,
            useFactory: config,
        },
    ];
};
