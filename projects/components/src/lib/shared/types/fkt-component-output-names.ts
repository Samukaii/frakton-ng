import { OutputEmitterRef } from "@angular/core";

export type FktComponentOutputNames<T> = {
    [Key in keyof T]: T[Key] extends OutputEmitterRef<any> ? Key : never;
}[keyof T];
