import { normalizeDate, NormalizeLevel } from './normalize-date';

export const compareDates = (
	first: Date | string,
	second: Date | string,
	level: NormalizeLevel = 'date',
) => {
	const result =
		normalizeDate(first, level).getTime() -
		normalizeDate(second, level).getTime();

	if(result === 0) return 'equal';

	if(result > 0) return 'first-is-greater';
	return 'second-is-greater';
};
