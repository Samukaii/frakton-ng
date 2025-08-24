import { FktComponentOutputNames } from "./fkt-component-output-names";
import { OutputEmitterRef } from "@angular/core";

export type FktComponentOutputs<T> = {
    [Key in FktComponentOutputNames<T>]: T[Key] extends OutputEmitterRef<infer OutputValue>
    ? (value: OutputValue) => void
    : never;
}
