import { SignalFormControlBuilderConfig } from './signal-form-control-builder-config';
import { AbstractSignalControl } from './abstract-signal-control';

export type SignalFormArrayBuilderConfig<T> = Array<
	AbstractSignalControl<T> | SignalFormControlBuilderConfig<T>
>;
