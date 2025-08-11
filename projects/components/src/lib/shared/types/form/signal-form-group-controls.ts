import { AbstractSignalControl } from './abstract-signal-control';

export type SignalFormGroupControls<T> = {
	[key in keyof T]: AbstractSignalControl<T[key]>;
};
