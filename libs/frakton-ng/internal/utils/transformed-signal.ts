import {
    linkedSignal,
    untracked,
    ValueEqualityFn,
    WritableSignal,
} from '@angular/core';

interface TransformedSignalOptions<S, T> {
    from: (source: S) => T;
    to: (transformed: T, source: S) => S;
    equal?: ValueEqualityFn<T>;
}

export const transformedSignal = <S, T>(
    source: WritableSignal<S>,
    options: TransformedSignalOptions<S, T>
) => {
    const lastSourceSynced = linkedSignal(() => untracked(source));

    const transformed = linkedSignal<S, T>({
        source,
        computation: (source, previous) => {
            if (previous && Object.is(lastSourceSynced(), source))
                return previous.value;

            return options.from(source);
        },
        equal: options.equal
    });

    const set = (value: T) => {
        transformed.set(value);
        const to = options.to(value, source());

        source.set(to);
        lastSourceSynced.set(to);
    };

    const update = (fn: (value: T) => T) => {
        set(fn(transformed()));
    };

    return new Proxy(transformed, {
        get(target, propertyKey, receiver) {
            switch (propertyKey) {
                case 'set':
                    return set;
                case 'update':
                    return update;
                default:
                    return Reflect.get(target, propertyKey, receiver);
            }
        },
        apply(target) {
            return target();
        },
    });
};
