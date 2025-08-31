import { SignalValidatorFn } from '../index';
import { SignalFormControlValueInterceptors } from './signal-form-control-value-interceptors';

export interface SignalFormControlOptions<T> {
	validators?: SignalValidatorFn<T>[];
	interceptors?: SignalFormControlValueInterceptors;
}
