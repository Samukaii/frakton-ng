import { FktControlFormatter } from '../types';
import { partiallyRoundDecimal } from 'frakton-ng/internal/utils';
import { roundDecimal } from 'frakton-ng/internal/utils';

interface Options {
	min?: number;
	max?: number;
	maxDecimals?: number;
}

const isNumber = (value: unknown): value is (string | number) => {
	if(typeof value === 'number')
		return true;

	if(typeof value !== "string")
		return false;

	return !isNaN(+value);
};

export const numberFormatter = (options?: Options): FktControlFormatter<number, string> => {
	return {
		viewToModelValue: value => {
			return isNumber(value) ? roundDecimal(+value, options?.maxDecimals ?? 0) : 0;
		},
		modelToViewValue: value => {
			if(!isNumber(value)) return "";

			return partiallyRoundDecimal(+value, options?.maxDecimals ?? 0).toString();
		},
		sanitizeViewValue: ({currentValue}) => {
			const {min, max, maxDecimals = 0} = options ?? {};

			const value: string | number = currentValue as string | number;


			if (!value) return {sanitizedValue: "0"};

			let newValue: string;

			if (typeof value === "number") {
				newValue = value.toString();
			} else {
				newValue = currentValue.replace(/[^\d\-,.]/g, '');

				newValue = newValue.replaceAll(',', '.');

				if(options?.maxDecimals === 0) {
					newValue = newValue.replaceAll(',', '').replace('.', '');
				}
			}

			let parsedNumber = !isNaN(+newValue) ? newValue : "0";


			if (!(parsedNumber.endsWith(".")) || (!!max && +parsedNumber >= max)) {
				let asNumber = +parsedNumber;

				if(max) {
					asNumber = Math.min(+parsedNumber, max);
				}
				if(min) {
					asNumber = Math.max(+parsedNumber, min);
				}

				if (asNumber.toString().length > asNumber.toFixed(maxDecimals).length)
					parsedNumber = asNumber.toFixed(maxDecimals);
				else parsedNumber = asNumber.toString();
			}


			return {
				sanitizedValue: parsedNumber.toString()
			}
		}
	}
}
