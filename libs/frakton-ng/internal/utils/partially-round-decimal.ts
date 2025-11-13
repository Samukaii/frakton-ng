export const roundDecimal = (value: number, decimalDigits: number) => {
	return +value.toFixed(decimalDigits);
}
export const partiallyRoundDecimal = (value: number, decimalDigits: number) => {
	return value.toString().length > value.toFixed(2).length ? roundDecimal(value, decimalDigits) : value;
}
