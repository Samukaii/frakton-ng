import { RecomputeOn } from '../models/recompute-on';
import { FKT_TRANSLATION_CONTEXT } from '../di/injection-tokens';

export const withI18nIntegration = <TranslateFn extends (...args: any) => any>(
    config: () => { recomputeOn: RecomputeOn; translateFn: TranslateFn }
) => {
    return [
        {
            provide: FKT_TRANSLATION_CONTEXT,
            useFactory: config,
        },
    ];
};
