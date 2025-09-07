import { computed } from '@angular/core';
import { FormControlStatus, ValidationErrors } from '@angular/forms';
import { Generic, Prettify } from 'frakton-ng/internal/types';
import { SignalFormGroupControls, SignalFormGroupValue } from './types';
import { SignalFormArray } from './signal-form-array';

export class SignalFormGroup<
	TControls extends SignalFormGroupControls<Generic>,
> {
	readonly controls!: TControls;

	private controlsList: TControls[keyof TControls][];

	status = computed((): FormControlStatus => {
		const valid = this.valid();
		const disabled = this.disabled();

		if (disabled) return 'DISABLED';

		return valid ? 'VALID' : 'INVALID';
	});

	disabled = computed((): boolean => {
		return this.controlsList.every(control => control.disabled());
	});

	invalid = computed((): boolean => {
		return this.controlsList.some(control => control.invalid());
	});

	valid = computed((): boolean => {
		return this.controlsList.every(control => control.valid());
	});

	errors = computed(() => {
		return this.getErrors();
	});

	touched = computed((): boolean => {
		return this.controlsList.some(control => control.touched());
	});

	untouched = computed((): boolean => {
		return this.controlsList.every(control => control.untouched());
	});

	pristine = computed((): boolean => {
		return this.controlsList.every(control => control.pristine());
	});

	dirty = computed((): boolean => {
		return this.controlsList.some(control => control.dirty());
	});

	value = computed(() => {
		const result = {} as TControls;

		for (const key in this.controls) {
			const controlKey = key as keyof TControls;
			const control = this.controls[controlKey];
			result[controlKey] = control.value();
		}
		return result as unknown as Prettify<SignalFormGroupValue<SignalFormGroup<TControls>>>;
	});

	constructor(config: TControls) {
		this.controls = config;
		this.controlsList = Object.values(
			config,
		) as TControls[keyof TControls][];
	}

	private getErrors() {
		let result: ValidationErrors | null = null;

		for (const key in this.controls) {
			const controlKey = key as keyof typeof this.controls;
			const control = this.controls[controlKey];

			const errors = control.errors() as ValidationErrors | null;

			if (!errors) continue;

			result = {
				...(result ?? {}),
				[controlKey]: errors,
			};
		}
		return result;
	}

	patchValue(value: Partial<Prettify<SignalFormGroupValue<SignalFormGroup<TControls>>>>): void {
		for (const valueKey in value) {
			const controlValue = value[valueKey];
			const control = this.controls[valueKey];

			if (!control) continue;

			if (!controlValue) return;

			if (control instanceof SignalFormArray) {
				if (Array.isArray(controlValue))
					control.patchValue(controlValue);

				continue;
			}

			control.patchValue(controlValue);
		}
	}

	markAllAsTouched() {
		this.controlsList.forEach(control => {
			if ('markAllAsTouched' in control) {
				control.markAllAsTouched();
				return;
			}
			control.markAsTouched();
		});
	}

	markAllAsUntouched() {
		this.controlsList.forEach(control => {
			if ('markAllAsUntouched' in control) {
				control.markAllAsUntouched();
				return;
			}
			control.markAsUntouched();
		});
	}

	markAllAsDirty() {
		this.controlsList.forEach(control => {
			if ('markAllAsDirty' in control) {
				control.markAllAsDirty();
				return;
			}
			control.markAsDirty();
		});
	}

	markAllAsPristine() {
		this.controlsList.forEach(control => {
			if ('markAllAsPristine' in control) {
				control.markAllAsPristine();
				return;
			}
			control.markAsPristine();
		});
	}

	reset(value: Partial<Prettify<SignalFormGroupValue<SignalFormGroup<TControls>>>> = {}) {
		console.log(value);
		for (const valueKey in this.controls) {
			const controlValue = value[valueKey];
			const control = this.controls[valueKey];

			if (!control) continue;

			if (control instanceof SignalFormArray) {
				if (Array.isArray(controlValue))
					control.reset(controlValue);

				continue;
			}

			control.reset(controlValue);
		}
	}

	disable() {
		this.controlsList.forEach(control => {
			control.disable();
		});
	}

	enable() {
		this.controlsList.forEach(control => {
			control.enable();
		});
	}

	addControl(name: keyof TControls, control: TControls[keyof TControls]) {
		this.controls[name] = control;
		this.controlsList = Object.values(
			this.controls,
		) as TControls[keyof TControls][];
	}
}
