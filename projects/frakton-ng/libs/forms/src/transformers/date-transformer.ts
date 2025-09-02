import { isIsoDateString } from '../../../utils/src/is-iso-date-string';
import { clampNumber } from '../../../utils/src/clamp-number';
import { SignalFormControlTransformer } from "../../shared/types/form/signal-form-control-transformer";

const transformIso = (value: string | Date) => {
	const date = new Date(value);
	const day = date.getDate().toString().padStart(2, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const year = date.getFullYear().toString();

	return {
		viewValue: `${day}/${month}/${year}`,
		modelValue: date.toISOString(),
	};
};

const toNumber = (value: string) => {
	return +value.replace(/\D/g, '')
}

const cleanDate = (value: string) => {
	let clean = value.replace(/\D/g, '');

	clean = clean.slice(0, 8);

	return clean;
};

const clampDay = (value: string) => {
	return clampNumber(toNumber(value), 1, 31).toString();
}

const clampDayByMonth = (value: string, month: string) => {
	const dateMonth = toNumber(clampMonth(month)) - 1;
	const date = new Date();
	date.setMonth(dateMonth + 1);
	date.setDate(0);

	return clampNumber(toNumber(value), 1, date.getDate()).toString();
}


const clampMonth = (value: string) => {
	return clampNumber(toNumber(value), 1, 12).toString();
}

const clampYear = (value: string) => {
	const year = toNumber(value);
	return clampNumber(year, 1, 9999).toString();
};


const formatDate = (value: string) => {
	let clean = cleanDate(value);

	const chars = clean.split('');

	let day = '';
	let month = '';
	let year = '';

	chars.forEach((char, index) => {
		if (index === 0) {
			day += char;
			const dayNumber = toNumber(day);

			if (dayNumber > 3) day = '0' + dayNumber;
		}

		if (index === 1) {
			day += char;
			day = clampDay(day);

			day = day.padStart(2, '0');
		}

		if (index === 2) {
			month = `/${char}`;
			const monthNumber = +month.replace(/\D/g, '');

			if (monthNumber > 1) month = '/0' + monthNumber;
		}

		if (index === 3) {
			month += char;
			month = clampMonth(month).toString();
			month = month.padStart(2, '0');
			month = `/${month}`;

			day = clampDayByMonth(day, month);
			day = day.padStart(2, '0');
		}

		if (index === 4) year = `/${char}`;

		if (index > 4) year += char;

		if(index === 7)
			year = `/${clampYear(year).padStart(4, '0')}`;
	});

	return [day, month, year].join('');
};


export const dateTransformer: SignalFormControlTransformer = value => {
	if (isIsoDateString(value) || value instanceof Date)
		return transformIso(value);

	if (typeof value !== 'string') return { viewValue: '', modelValue: null };

	const viewValue = formatDate(value);
	const [modelDay, modelMonth, modelYear] = viewValue.split('/');

	let modelValue = null;

	if (viewValue.length === 10) {
		modelValue = new Date(
			+modelYear,
			+modelMonth - 1,
			+modelDay,
		).toISOString();
	}

	return { viewValue, modelValue: modelValue };
};
