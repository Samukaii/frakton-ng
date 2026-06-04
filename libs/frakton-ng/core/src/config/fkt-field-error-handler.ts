import { FktFieldControlStateErrors } from 'frakton-ng/internal/types';

export type FktFieldErrorHandler = (
    errors: FktFieldControlStateErrors
) => string | null;
