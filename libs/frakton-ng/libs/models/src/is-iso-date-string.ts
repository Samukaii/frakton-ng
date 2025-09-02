import { isValidDateString } from './is-valid-date-string';

export const isIsoDateString = (str: string) =>
	/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(str) &&
	isValidDateString(str);
