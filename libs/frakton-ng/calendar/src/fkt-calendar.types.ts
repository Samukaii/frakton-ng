import { Prettify } from 'frakton-ng/internal/types';

export interface FktCalendarDateConfig {
	date: string;
	onClick?: () => void;
	isCurrentDate: boolean;
	isToday: boolean;
	classes: string[];
}


export type FktCalendarDateOptions = Prettify<
	Partial<Omit<FktCalendarDateConfig, 'date' | 'isCurrentDate'>>
>;

export type FktCalendarDateConfigFn = (date: Date) => FktCalendarDateOptions;
export const fktCalendarStep = ['date', 'month', 'year'] as const;
export type FktCalendarStep = typeof fktCalendarStep[number];
