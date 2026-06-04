import { FktFieldControlStateErrors } from 'frakton-ng/internal/types';
import { inject } from '@angular/core';
import {
    FKT_FIELD_ERROR_HANDLER,
    FKT_TRANSLATION_CONTEXT,
} from '../injection-tokens';

export const withFieldErrorMessages = <
    TranslateFn extends (...args: any) => any
>(
    resolve: (context: {
        errors: FktFieldControlStateErrors;
        t: TranslateFn;
    }) => string | null
) => {
    return [
        {
            provide: FKT_FIELD_ERROR_HANDLER,
            useFactory: () => {
                const i18n = inject(FKT_TRANSLATION_CONTEXT, {
                    optional: true,
                });

                const translateFn = (i18n?.translateFn ??
                    ((value) => value)) as TranslateFn;

                return (errors: FktFieldControlStateErrors) => {
                    return resolve({ errors, t: translateFn });
                };
            },
        },
    ];
};
