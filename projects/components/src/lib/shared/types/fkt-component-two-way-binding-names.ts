import { ModelSignal } from '@angular/core';

export type FktComponentTwoWayBindingNames<T> = {
	[Key in keyof T]: T[Key] extends ModelSignal<any> ? Key : never;
}[keyof T];
