import { FktControlFormatter } from '../types';

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

export const percentFormatter: FktControlFormatter<number | null, string> = {
	viewToModelValue: (value) => {
		const clean = value
			.replace(/[^\d.,]/g, '')
			.replace(',', '.')
			.trim();

		return +clean;
	},
	sanitizeViewValue: ({currentValue}) => {
		let clean = format(currentValue, 3);

		const asNumber = +clean;

		let formatted = asNumber.toString().replace('.', ',');

		if (clean.includes('.') && !formatted.includes(',')) {
			formatted += ',';
		}

		const viewValue = formatted + '%';

		return {
			sanitizedValue: viewValue,
			cursorOffset: -1,
		};
	}
}
