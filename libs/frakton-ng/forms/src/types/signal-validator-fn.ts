import { ValidationErrors } from '@angular/forms';
import { SignalValidatorFnOptions } from './signal-validator-fn-options';

export type SignalValidatorFn<T> = (
	control: SignalValidatorFnOptions<T>,
) => ValidationErrors | null;
