import { OutputEmitterRef } from "@angular/core";
import { FktComponentOutputNames } from './fkt-component-output-names';

export type FktComponentOutputs<T> = {
    [Key in FktComponentOutputNames<T>]: T[Key] extends OutputEmitterRef<infer OutputValue>
    ? (value: OutputValue) => void
    : never;
}
