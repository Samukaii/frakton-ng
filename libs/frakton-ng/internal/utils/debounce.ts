export const debounce = <Fn extends ((...args: any[]) => void)>(fn: Fn, time: number) => {
	let timeout: any;

	return ((...args) => {
		clearTimeout(timeout);

		timeout = setTimeout(() => {
			fn(...args);
		}, time)
	}) as Fn
}
