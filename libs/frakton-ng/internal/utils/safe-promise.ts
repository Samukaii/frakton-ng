export type SafePromiseResult<T, E = unknown> =
	| [error: null, value: T]
	| [error: E, value: null];

export async function safePromise<T, E = Error>(
	promise: Promise<T>,
): Promise<SafePromiseResult<T, E>> {
	try {
		return [null, await promise];
	} catch (error) {
		return [error as E, null];
	}
}
