import { computed, inject, isSignal, signal } from '@angular/core';
import { FKT_TRANSLATION_CONTEXT, RecomputeOn } from 'frakton-ng/core';
import { merge, Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

const convertToSignals = (recomputeOn: RecomputeOn) => {
    const dependencies = Array.isArray(recomputeOn)
        ? recomputeOn
        : [recomputeOn];
    const observables = dependencies.filter(
        (dependency) => dependency instanceof Observable
    );
    const signals = dependencies.filter((dependency) => isSignal(dependency));

    const asSignals = toSignal(merge(...observables), { initialValue: null });

    return computed(
        () => {
            asSignals();

            signals.forEach((dependency) => dependency());
        },
        { equal: () => false }
    );
};

export const injectI18nIntegration = () => {
    const i18nIntegration = inject(FKT_TRANSLATION_CONTEXT, { optional: true });

    return {
        recomputeOn: convertToSignals(
            i18nIntegration?.recomputeOn ?? signal(true)
        ),
        translate: i18nIntegration?.translateFn ?? ((key: string) => key),
    };
};
