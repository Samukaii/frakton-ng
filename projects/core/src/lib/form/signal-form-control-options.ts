import { SignalFormControlValueInterceptors } from './signal-form-control';
import { SignalValidatorFn } from '../shared/types';

export interface SignalFormControlOptions<T> {
	validators?: SignalValidatorFn<T>[];
	interceptors?: SignalFormControlValueInterceptors;
}
