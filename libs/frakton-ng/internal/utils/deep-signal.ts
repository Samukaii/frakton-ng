import { computed, Signal, untracked, WritableSignal } from '@angular/core';
import {SIGNAL} from "@angular/core/primitives/signals";

export function isArray(value: unknown): value is any[] | readonly any[] {
    return Array.isArray(value);
}

function valueForWrite(
    sourceValue: unknown,
    newPropValue: unknown,
    prop: PropertyKey
): unknown {
    if (isArray(sourceValue)) {
        const newValue = [...sourceValue];
        newValue[prop as number] = newPropValue;
        return newValue;
    } else {
        return { ...(sourceValue as object), [prop]: newPropValue };
    }
}

export function deepSignal<S, K extends keyof S>(
    source: WritableSignal<S>,
    prop: Signal<K>
): WritableSignal<S[K]> {
    const read = computed(() => source()[prop()]) as WritableSignal<S[K]>;

    read[SIGNAL] = source[SIGNAL];

    read.set = (value: S[K]) => {
        source.update((current) => valueForWrite(current, value, prop()) as S);
    };

    read.update = (fn: (current: S[K]) => S[K]) => {
        read.set(fn(untracked(read)));
    };

    read.asReadonly = () => read;

    return read;
}
