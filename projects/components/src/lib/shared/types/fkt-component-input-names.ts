import { InputSignal, ModelSignal } from '@angular/core';

export type FktComponentInputNames<T> = {
    [Key in keyof T]: T[Key] extends ModelSignal<any> ? never : T[Key] extends InputSignal<any> ? Key : never;
}[keyof T];
