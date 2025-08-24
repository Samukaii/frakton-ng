import { computed, signal, WritableSignal } from '@angular/core';
import { FormControlStatus, ValidationErrors } from '@angular/forms';
import { Prettify, SignalFormArrayControls, SignalFormArrayControlValue } from '../shared/types';

export class SignalFormArray<TControls extends SignalFormArrayControls<any>> {
	readonly #controls: WritableSignal<TControls>;

	controls = computed(() => this.#controls?.() ?? []);

	status = computed((): FormControlStatus => {
		const valid = this.valid();
		const disabled = this.disabled();

		if (disabled) return 'DISABLED';

		return valid ? 'VALID' : 'INVALID';
	});

	disabled = computed((): boolean => {
		return this.#controls().every(control => control.disabled());
	});

	invalid = computed((): boolean => {
		return this.#controls().some(control => control.invalid());
	});

	valid = computed((): boolean => {
		return this.#controls().every(control => control.valid());
	});

	errors = computed(() => {
		return this.getErrors();
	});

	touched = computed((): boolean => {
		return this.#controls().some(control => control.touched());
	});

	untouched = computed((): boolean => {
		return this.#controls().every(control => control.untouched());
	});

	pristine = computed((): boolean => {
		return this.#controls().every(control => control.pristine());
	});

	dirty = computed((): boolean => {
		return this.#controls().some(control => control.dirty());
	});

	value = computed((): Prettify<SignalFormArrayControlValue<TControls>> => {
		return this.#controls().map(control => control.value()) as Prettify<
			SignalFormArrayControlValue<TControls>
		>;
	});

	constructor(config: TControls) {
		this.#controls = signal(config);
	}

	private getErrors() {
		let result: ValidationErrors | null = null;

		this.#controls().forEach((control, index) => {
			const errors = control.errors() as ValidationErrors | null;

			if (!errors) return;

			result = {
				...(result ?? {}),
				[index.toString()]: errors,
			};
		});

		return result;
	}

	patchValue(value: Partial<SignalFormArrayControlValue<TControls>>): void {
		this.#controls().forEach((control, index) => {
			if (!value[index]) return;

			if (control instanceof SignalFormArray) {
				if (Array.isArray(value[index]))
					control.patchValue(value[index]);
				return;
			}

			control.patchValue(value[index]);
		});
	}

	markAllAsTouched() {
		this.#controls().forEach(control => {
			if ('markAllAsTouched' in control) {
				control.markAllAsTouched();
				return;
			}
			control.markAsTouched();
		});
	}

	markAllAsDirty() {
		this.#controls().forEach(control => {
			if ('markAllAsDirty' in control) {
				control.markAllAsDirty();
				return;
			}
			control.markAsDirty();
		});
	}

	at(index: number) {
		return this.#controls().at(index);
	}

	push(control: TControls[number]) {
		const controls = [...this.#controls()];

		controls.push(control);

		this.#controls.set(controls as any);
	}

	insert(index: number, control: TControls[number]) {
		const controls = [...this.#controls()];

		controls.splice(index + 1, 0, control as TControls[number]);

		this.#controls.set(controls as any);
	}

	removeAt(index: number) {
		const controls = [...this.#controls()];

		controls.splice(index, 1);

		this.#controls.set(controls as any);
	}

	reset(value: SignalFormArrayControlValue<TControls> = []) {
		this.#controls().forEach((control, index) => {
			if (!value[index]) return;

			if (control instanceof SignalFormArray) {
				if (Array.isArray(value[index]))
					control.reset(value[index]);
				return;
			}

			control.reset(value[index]);
		});
	}

	disable() {
		this.#controls().forEach(control => {
			control.disable();
		});
	}

	enable() {
		this.#controls().forEach(control => {
			control.enable();
		});
	}
}
