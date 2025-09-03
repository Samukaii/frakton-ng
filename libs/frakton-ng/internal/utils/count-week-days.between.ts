export function countWeekDaysBetween(startDate: Date, endDate: Date, weekDays: number[]): number {
	let count = 0;
	const current = new Date(startDate);

	while (current <= endDate) {
		if (weekDays.includes(current.getDay())) {
			count++;
		}
		current.setDate(current.getDate() + 1);
	}

	return count;
}
