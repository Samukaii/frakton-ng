import { Signal } from "@angular/core";

export type FktOrSignal<T> = {
	[K in keyof T]: T[K] | Signal<T[K]>
}
