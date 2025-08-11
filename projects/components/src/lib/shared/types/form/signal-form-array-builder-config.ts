import { AbstractSignalControl } from './abstract-signal-control';
import { SignalFormControlBuilderConfig } from './signal-form-control-builder-config';

export type SignalFormArrayBuilderConfig<T> = Array<
	AbstractSignalControl<T> | SignalFormControlBuilderConfig<T>
>;
