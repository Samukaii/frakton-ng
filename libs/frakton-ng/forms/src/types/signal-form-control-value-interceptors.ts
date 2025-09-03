import { SignalFormControlTransformer } from './signal-form-control-transformer';

export interface SignalFormControlValueInterceptors {
	formatter?: SignalFormControlTransformer;
}
