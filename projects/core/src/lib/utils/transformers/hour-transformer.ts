import { clampNumber } from '../clamp-number';

import { SignalFormControlTransformer } from "../../shared/types/form/signal-form-control-transformer";

const toNumber = (value: string) => {
	return +value.replace(/\D/g, '');
};

const cleanHour = (value: string) => {
	let clean = value.replace(/\D/g, '');

	clean = clean.slice(0, 4);

	return clean;
};

const clampHour = (value: string) => {
	return clampNumber(toNumber(value), 0, 24).toString();
};

const clampMinutes = (value: string) => {
	return clampNumber(toNumber(value), 0, 59).toString();
};

const formatHour = (value: string) => {
	let clean = cleanHour(value);

	const chars = clean.split('');

	let hours = '';
	let minutes = '';

	chars.forEach((char, index) => {
		if (index === 0) {
			hours += char;
			const hoursNumber = toNumber(hours);

			if (hoursNumber > 2) hours = '0' + hoursNumber;
		}

		if (index === 1) {
			hours += char;
			hours = clampHour(hours);

			hours = hours.padStart(2, '0');
		}

		if (index === 2) {
			minutes = `h${char}`;
			const minutesNumber = toNumber(minutes);

			if (minutesNumber > 5) minutes = '/0' + minutesNumber;
		}

		if (index === 3) {
			minutes += char;
			minutes = clampMinutes(minutes).toString();
			minutes = minutes.padStart(2, '0');
			minutes = `h${minutes}`;
		}
	});

	return [hours, minutes].join('');
};

export const hourTransformer: SignalFormControlTransformer = value => {
	if (typeof value !== 'string') return { viewValue: '', modelValue: null };

	const viewValue = formatHour(value);

	let modelValue = null;

	if(viewValue.length === 5)
		modelValue = viewValue;

	return { viewValue, modelValue };
};
