import { InjectionToken } from '@angular/core';
import { FktTranslationContext } from './models/fkt-translation-context';
import { FktFieldErrorHandler } from '../models/fkt-field-error-handler';

export const FKT_FIELD_ERROR_HANDLER = new InjectionToken<FktFieldErrorHandler>(
    'FKT_FIELD_ERROR_HANDLER'
);
export const FKT_TRANSLATION_CONTEXT = new InjectionToken<FktTranslationContext>(
    'FKT_TRANSLATION_CONTEXT'
);
