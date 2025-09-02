import { isNumber } from './is-number';

export const toNumberOrNull = (value: unknown) =>
	isNumber(value) ? +value : null;
