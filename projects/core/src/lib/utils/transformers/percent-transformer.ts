import { SignalFormControlTransformer } from "../../shared/types/form/signal-form-control-transformer";

const format = (raw: string, maxDecimals = 2) => {
	const clean = raw
		.replace(/[^\d.,]/g, '')
		.replace(',', '.')
		.trim();

	const MAX_PERCENT_VALUE = '100';
	const MAX_DIGITS_LESS_THAN_HUNDRED = 2;
	const decimalChar = '.';

	const hasDecimalChar = clean.includes(decimalChar);

	if (hasDecimalChar) {
		let [base, ...decimals] = clean.split(decimalChar);

		if (base.includes(MAX_PERCENT_VALUE)) return MAX_PERCENT_VALUE;
		else base = base.slice(0, MAX_DIGITS_LESS_THAN_HUNDRED);

		return `${base}.${(decimals.join('') || '0').slice(0, maxDecimals)}`;
	}

	if (clean.includes(MAX_PERCENT_VALUE)) return MAX_PERCENT_VALUE;

	return clean.slice(0, MAX_DIGITS_LESS_THAN_HUNDRED);
};

export const percentTransformer: SignalFormControlTransformer = value => {
	const raw =
		typeof value === 'string' || typeof value === 'number'
			? value.toString()
			: '0';

	let clean = format(raw, 3);

	const asNumber = +clean;

	let formatted = asNumber.toString().replace('.', ',');

	if (clean.includes('.') && !formatted.includes(',')) {
		formatted += ',';
	}

	const viewValue = formatted + '%';

	return {
		modelValue: +asNumber,
		viewValue: viewValue,
		cursorPosition: viewValue.length - 1,
	};
};
