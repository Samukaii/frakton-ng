export type FktExtractNonUndefined<T> = {
	[Key in keyof T]: undefined extends T[Key] ? never : Key;
}[keyof T];
