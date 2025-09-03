import { Injectable } from '@angular/core';


import { Generic, Prettify } from 'frakton-ng/internal/types';
import {
	ArrayBuilderConfigToSignalFormArray,
	FormBuilderConfigToSignalFormGroup,
	InterfaceToFormConfig,
	SignalFormArrayBuilderConfig,
	SignalFormArrayControls,
	SignalFormControlBuilderConfig,
	SignalFormControlOptions,
	SignalFormGroupBuilderConfig,
	TypeToSignalFormGroupControls
} from './types';
import { SignalFormGroup } from './signal-form-group';
import { SignalFormArray } from './signal-form-array';
import { SignalFormControl } from './signal-form-control';

@Injectable({
	providedIn: 'root',
})
export class SignalFormBuilder {
	group<T extends SignalFormGroupBuilderConfig<any>>(config: T) {
		const controls: Generic = {};

		Object.entries(config).forEach(([key, value]) => {
			const controlConfig = value;
			const controlKey = key as keyof typeof controls;

			if (value instanceof SignalFormGroup)
				controls[controlKey] = controlConfig;
			else if (value instanceof SignalFormArray)
				controls[controlKey] = controlConfig;
			else if (value instanceof SignalFormControl)
				controls[controlKey] = controlConfig;
			else controls[controlKey] = this.control(controlConfig);
		});

		return new SignalFormGroup(controls) as SignalFormGroup<
			FormBuilderConfigToSignalFormGroup<T>
		>;
	}

	array<T extends SignalFormArrayBuilderConfig<any>>(config: T) {
		const controls: SignalFormArrayControls<any> = [];

		config.forEach(control => {
			if (control instanceof SignalFormGroup) controls.push(control);
			else if (control instanceof SignalFormArray) controls.push(control);
			else if (control instanceof SignalFormControl)
				controls.push(control);
			else controls.push(this.control(control));
		});

		return new SignalFormArray(controls) as SignalFormArray<
			ArrayBuilderConfigToSignalFormArray<T>[]
		>;
	}

	strictGroup<T extends Generic>(config: Prettify<InterfaceToFormConfig<T>>) {
		return this.group(config) as unknown as SignalFormGroup<
			TypeToSignalFormGroupControls<T>
		>;
	}

	control<T>(config: SignalFormControlBuilderConfig<T>) {
		let options: SignalFormControlOptions<T> | undefined;
		let initialValue: T;

		if (Array.isArray(config) && config.length === 2) {
			initialValue = config[0];
			const controlConfig = config[1];

			if (Array.isArray(controlConfig)) {
				controlConfig.forEach(validator => {
					if (typeof validator !== 'function')
						throw new Error(
							`Invalid control config: must be a function, got ${validator}`,
						);
				});

				options = {
					validators: controlConfig,
				};
			} else if (typeof controlConfig === 'function') {
				options = {
					validators: [controlConfig],
				};
			} else {
				options = controlConfig;
			}
		} else {
			initialValue = config as T;
		}

		return new SignalFormControl<T>(initialValue, options);
	}
}
