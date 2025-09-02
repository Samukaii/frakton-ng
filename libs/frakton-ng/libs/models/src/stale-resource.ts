import {
	linkedSignal,
	resource,
	ResourceOptions,
	ResourceRef,
	Signal,
	WritableSignal,
} from '@angular/core';

interface StaleResourceRef<T> extends ResourceRef<T> {
	staleValue: WritableSignal<T>;
	isFirstLoad: Signal<boolean>;
}

export function staleResource<T, R>(
	options: ResourceOptions<T, R> & {
		defaultValue: NoInfer<T>;
	},
): StaleResourceRef<T>;
export function staleResource<T, R>(
	options: ResourceOptions<T, R>,
): StaleResourceRef<T | undefined>;
export function staleResource(options: any) {
	const result = resource(options) as StaleResourceRef<any>;

	let lastValue = options.defaultValue;
	let isFirstLoadValue = true;

	result.isFirstLoad = linkedSignal({
		source: result.value,
		computation: () => isFirstLoadValue,
	});

	result.staleValue = linkedSignal({
		source: result.value,
		computation: value => {
			if (result.status() === 'resolved') {
				lastValue = value;
				if (isFirstLoadValue) isFirstLoadValue = false;
				return lastValue;
			}

			if (result.status() === 'resolved') lastValue = value;

			return lastValue;
		},
	});

	return result;
}
