import { SignalValidatorFn } from '../../shared/types';
import { isNumber } from '../../utils/is-number';

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
