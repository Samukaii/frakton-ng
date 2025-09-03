import { isNumber } from 'frakton-ng/internal/utils';

export const toNumberOrNull = (value: unknown) =>
	isNumber(value) ? +value : null;
