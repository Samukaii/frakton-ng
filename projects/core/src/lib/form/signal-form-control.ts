import { computed, signal, untracked, WritableSignal } from '@angular/core';
import { SignalValidatorFn } from '../shared/types';
import { FormControlStatus, ValidationErrors } from '@angular/forms';
import { SignalFormControlOptions } from './signal-form-control-options';

export type SignalFormControlTransformer = (value: any) => {
	modelValue: any;
	viewValue: any;
	cursorPosition?: number;
};

export interface SignalFormControlValueInterceptors {
	formatter?: SignalFormControlTransformer;
}

interface SignalUpdateValueOptions {
	source?: 'ui' | 'programmatic';
}

const isTwoWaySetValue = (
	value: unknown,
): value is { modelValue: any; viewValue: string } => {
	if (typeof value !== 'object') return false;
	if (value === null) return false;

	const conditions = ['modelValue' in value, 'viewValue' in value];

	return conditions.every(Boolean);
};

export class SignalFormControl<T> {
	readonly #state!: WritableSignal<{
		modelValue: T;
		viewValue: any;
	}>;
	readonly #disabled = signal(false);
	readonly #dirty = signal(false);
	readonly #touched = signal(false);

	private validations = signal<SignalValidatorFn<T>[]>([]);

	value = computed(() => this.#state?.().modelValue!);
	viewValue = computed(() => this.#state?.().viewValue!);
	disabled = computed(() => this.#disabled());
	touched = computed(() => this.#touched());
	dirty = computed(() => this.#dirty());
	pristine = computed(() => !this.#dirty());
	untouched = computed(() => !this.#touched());

	status = computed((): FormControlStatus => {
		const valid = this.valid();
		const disabled = this.disabled();

		if (disabled) return 'DISABLED';

		return valid ? 'VALID' : 'INVALID';
	});

	errors = computed(() => {
		let errors: ValidationErrors | null = null;

		const validations = this.validations();
		const value = this.value();

		untracked(() => {
			validations.forEach(validation => {
				const result = validation({ value });

				if (!result) return;

				errors = {
					...result,
				};
			});
		});

		return errors;
	});

	invalid = computed(() => !!this.errors(), { equal: (a, b) => a === b });

	valid = computed(() => !this.invalid());

	constructor(
		public initialValue: T,
		options?: SignalFormControlOptions<T>,
	) {
		this.validations.set(options?.validators ?? []);

		this.#state = signal({
			modelValue: initialValue,
			viewValue: initialValue,
		});
	}

	setValue(
		value: T | { modelValue: any; viewValue: any },
		_?: SignalUpdateValueOptions,
	): void {
		if (isTwoWaySetValue(value)) {
			this.#state.update(currentState => ({
				...currentState,
				modelValue: value.modelValue,
				viewValue: value.viewValue,
			}));

			return;
		}

		this.#state.update(currentState => ({
			...currentState,
			modelValue: value as T,
			viewValue: value,
		}));
	}

	reset(value?: T) {
		this.setValue(value ?? this.initialValue)
	}

	disable() {
		this.#disabled.set(true);
	}

	enable() {
		this.#disabled.set(false);
	}

	markAsTouched() {
		this.#touched.set(true);
	}

	markAsDirty() {
		this.#dirty.set(true);
	}

	markAsUntouched() {
		this.#touched.set(false);
	}

	markAsPristine() {
		this.#dirty.set(false);
	}

	patchValue(value: T) {
		this.setValue(value);
	}
}
