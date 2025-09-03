export type FktExtractUndefined<T> = {
	[Key in keyof T]: undefined extends T[Key] ? Key : never;
}[keyof T];
