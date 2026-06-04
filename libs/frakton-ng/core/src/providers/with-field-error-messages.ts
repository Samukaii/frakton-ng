import {
    FktFieldControlStateErrors,
    GenericFunction,
} from 'frakton-ng/internal/types';
import {
    FKT_FIELD_ERROR_HANDLER,
    FKT_TRANSLATION_CONTEXT,
} from '../di/injection-tokens';
import { inject } from '@angular/core';

export const withFieldErrorMessages = <TranslateFn extends GenericFunction>(
    resolve: (context: {
        errors: FktFieldControlStateErrors;
        t: (...args: any[]) => string | null;
    }) => string | null
) => {
    const missingI18n = () => {
        throw new Error(`[Frakton] t() was called, but no i18n integration was provided.

If you want translated messages, configure:

provideFktConfig(
  withI18nIntegration(...)
)

If you don't use i18n, return plain strings instead of calling t().`);
    };

    return [
        {
            provide: FKT_FIELD_ERROR_HANDLER,
            useFactory: () => {
                const i18n = inject(FKT_TRANSLATION_CONTEXT, {
                    optional: true,
                });

                const translateFn =
                    i18n?.translateFn ??
                    (missingI18n as unknown as TranslateFn);

                return (errors: FktFieldControlStateErrors) => {
                    return resolve({ errors, t: translateFn });
                };
            },
        },
    ];
};
