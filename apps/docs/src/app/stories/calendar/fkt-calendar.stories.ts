import { FktCalendarComponent } from 'frakton-ng/calendar';
import {
	FktCalendarBasicExampleComponent,
	FktCalendarBorderlessExampleComponent,
	FktCalendarCustomStylingExampleComponent,
	FktCalendarDisabledDatesExampleComponent,
	FktCalendarEventsExampleComponent
} from './examples';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-calendar.docs.md' with { loader: "text" };

const meta: Meta = {
	title: "Components/Navigation/Calendar",
	component: FktCalendarComponent,
    description: "The FktCalendar component provides a comprehensive date selection interface with multiple view modes and extensive customization options. Built with Angular signals for optimal performance and reactivity, it supports date, month, and year selection with configurable styling and behavior.",
	documentation,
	argTypes: {
		configFn: {
			control: 'function',
			category: "Attributes",
			type: 'FktCalendarDateConfigFn',
			import: "import {FktCalendarDateConfigFn} from 'frakton-ng/calendar'",
			defaultValue: '() => ({})',
			description: 'Function to configure individual calendar dates'
		},
		currentDate: {
			control: 'text',
			category: "Form Control",
			type: 'Date',
			defaultValue: 'new Date()',
			description: 'Currently selected date'
		},
		borderless: {
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: 'false',
			description: 'Whether to display the calendar without a border'
		}
	}
}

export const BasicCalendar: Story<FktCalendarBasicExampleComponent> = {
	component: FktCalendarBasicExampleComponent,
	description: "Basic calendar with date selection functionality and month/year navigation.",
	args: {
		currentDate: new Date(),
		borderless: false
	},
};

export const BorderlessCalendar: Story<FktCalendarBorderlessExampleComponent> = {
	component: FktCalendarBorderlessExampleComponent,
	description: "Calendar displayed without border for seamless integration into containers.",
	args: {
		currentDate: new Date(),
		borderless: true
	},
};

export const WithDisabledDates: Story<FktCalendarDisabledDatesExampleComponent> = {
	component: FktCalendarDisabledDatesExampleComponent,
	description: "Calendar with disabled dates to restrict user selection to valid date ranges.",
	args: {
		currentDate: new Date("2025-12-25T12:00:00.000Z"),
		borderless: false
	},
};

export const WithEvents: Story<FktCalendarEventsExampleComponent> = {
	component: FktCalendarEventsExampleComponent,
	description: "Calendar displaying events and highlighting dates with special significance.",
	args: {
		currentDate: new Date(),
		borderless: false
	},
};

export const CustomStyling: Story<FktCalendarCustomStylingExampleComponent> = {
	component: FktCalendarCustomStylingExampleComponent,
	description: "Calendar with custom styling and visual indicators for different date states.",
	args: {
		currentDate: new Date("2025-12-25T12:00:00.000Z"),
		borderless: false
	},
};

export default meta;
