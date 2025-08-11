const normalizeLevels = {
	'year': date => {
		date.setMonth(0, 1);
		date.setHours(12, 0, 0, 0);

		return date;
	},
	'month': date => {
		date.setDate(1);
		date.setHours(12, 0, 0, 0);

		return date;
	},
	'date': date => {
		date.setHours(12, 0, 0, 0);

		return date;
	},
	'hour': date => {
		date.setMinutes(0, 0, 0);

		return date;
	},
	'minute': date => {
		date.setSeconds(0, 0);

		return date;
	},
	'seconds': date => {
		date.setMilliseconds(0);

		return date;
	},
} as const satisfies Record<string, ((date: Date) => Date)>;

export type NormalizeLevel = keyof typeof normalizeLevels;

export const normalizeDate = (date: Date | string, level: NormalizeLevel) => {
	return normalizeLevels[level](new Date(date));
};
