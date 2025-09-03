import { isNumber } from 'frakton-ng/internal/utils';
import { SignalValidatorFn } from '../types';

export const SignalValidators = {
	required: () => options => {
		const value = options.value;

		const invalidConditions = [
			value === null,
			typeof value === 'undefined',
			value === '',
		];

		if (invalidConditions.every(condition => !condition)) return null;

		return {
			required: true,
		};
	},
	requiredTrue: () => options => {
		const value = options.value;

		if(value !== true)
			return {
			requiredTrue: true,
			}

		return null
	},
	minLength: (length: number): SignalValidatorFn<any> => options => {
		const value = options.value;

		if(typeof value !== "string")
			return {
				custom: {
					message: `"${value}" não é um texto`,
				}
			};

		return value.length >= length ? null : {
			custom: {
				message: `O tamanho mínimo é ${length}`,
			}
		};
	},
	maxLength: (length: number): SignalValidatorFn<any> => options => {
		const value = options.value;

		if(typeof value !== "string")
			return {
				custom: {
					message: `"${value}" não é um texto`,
				}
			};

		return value.length <= length ? null : {
			custom: {
				message: `O tamanho máximo é ${length}`,
			}
		};
	},
	email: (): SignalValidatorFn<any> => options => {
		const value = options.value;

		if (value === null || typeof value === 'undefined' || value === '') {
			return null;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailRegex.test(value)) {
			return {
				email: {
					message: 'E-mail inválido',
				}
			};
		}

		return null;
	},
	min:
		(minValue: number): SignalValidatorFn<any> =>
		options => {
			const value = options.value;

			if (!isNumber(value)) {
				return {
					custom: {
						message: `${value} não é um número`,
					}
				};
			}

			if (value < minValue)
				return {
					custom: {
						message: `O campo não pode ser menor que ${minValue}`,
					}
				};

			return null;
		},
	max:
		(maxValue: number): SignalValidatorFn<any> =>
		options => {
			const value = options.value;

			if (!isNumber(value)) {
				return {
					custom: {
						message: `${value} não é um número`,
					}
				};
			}

			if (value > maxValue)
				return {
					custom: {
						message: `O campo não pode ser maior que ${maxValue}`,
					}
				};

			return null;
		},
} satisfies Record<
	string,
	(...args: any[]) => SignalValidatorFn<any>
>;
