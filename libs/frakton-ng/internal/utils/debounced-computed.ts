import { effect, signal, untracked } from "@angular/core";
import { debounce } from "./debounce";

export const debouncedComputed = <T>(fn: () => T, options: { initialValue: T, time: number }) => {
	const value = signal(options.initialValue);

	const update = debounce((result: T) => {
		value.set(result);
	}, 300);

	effect(() => {
		const result = fn();

		untracked(() => {
			update(result);
		});
	});

	return value.asReadonly();
}
