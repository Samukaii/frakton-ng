import { argsToTemplate, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import {
	FktCalendarBasicExampleComponent,
	FktCalendarBorderlessExampleComponent,
	FktCalendarCustomStylingExampleComponent,
	FktCalendarDisabledDatesExampleComponent,
	FktCalendarEventsExampleComponent
} from './examples';
import { FktCalendarComponent } from './fkt-calendar.component';

const meta: Meta = {
	title: 'Components/Calendar',
	component: FktCalendarComponent,
	decorators: [
		moduleMetadata({
			imports: [
				FktCalendarBasicExampleComponent,
				FktCalendarBorderlessExampleComponent,
				FktCalendarCustomStylingExampleComponent,
				FktCalendarEventsExampleComponent,
				FktCalendarDisabledDatesExampleComponent,
			],
		})
	],
	argTypes: {
		configFn: {
			control: 'object',
			description: "Advanced configuration function for customizing each date cell in the calendar. " +
				"Use this to dynamically set appearance, state, or behavior based on date properties, selection, " +
				"holidays, and more. Perfect for highlighting weekends, marking special dates, or disabling " +
				"selections on specific conditions.",
			table: {
				category: "Attributes",
				type: {
					summary: "FktCalendarDateConfigFn",
					detail: 'import {FktCalendarDateConfigFn} from "frakton-ng/calendar"'
				},
				defaultValue: {
					summary: "undefined"
				}
			}
		},
		currentDate: {
			control: 'date',
			description: "Currently selected date in the calendar. Should be a ModelSignal<Date> for reactive " +
				"two-way binding. Defaults to the current day (new Date()).",
			table: {
				category: "Attributes",
				type: {summary: 'ModelSignal<Date>'},
				defaultValue: {summary: 'new Date()'}
			}
		},
		borderless: {
			control: 'boolean',
			description: "Removes the calendar border for a cleaner, modern look. Use when embedding the calendar " +
				"in cards, dialogs, or layouts where borders would interfere with design.",
			table: {
				category: "Attributes",
				type: {summary: 'boolean'},
				defaultValue: {summary: "false"}
			}
		},
	}
};

export const Basic: StoryObj = {
	render: (args) => ({
		props: {
			...args,
			currentDate: new Date(args["currentDate"])
		},
		template: `<fkt-calendar-basic-example ${argsToTemplate(args)} />`,
	}),
	args: {
		currentDate: new Date(),
		borderless: false
	},
	parameters: {
		docs: {
			description: {
				story: 'Basic calendar implementation with date selection and two-way data binding. Perfect starting point for most calendar use cases.'
			}
		}
	}
};

export const BorderlessMode: StoryObj = {
	render: (args) => ({
		props: {
			...args,
			currentDate: new Date(args["currentDate"])
		},
		template: `<fkt-calendar-borderless-example ${argsToTemplate(args)} />`,
	}),
	args: {
		currentDate: new Date(),
		borderless: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Calendar without borders for seamless integration into existing layouts. Ideal for embedding within cards, modals, or custom containers.'
			}
		}
	}
};

export const CustomDateStyling: StoryObj = {
	render: (args) => ({
		props: {
			...args,
			currentDate: new Date(args["currentDate"])
		},
		template: `<fkt-calendar-custom-styling-example ${argsToTemplate(args)} />`,
	}),
	args: {
		currentDate: new Date("2025-12-25T12:00:00.000Z"),
		borderless: false
	},
	parameters: {
		docs: {
			description: {
				story: 'Advanced date styling with custom configuration functions. Demonstrates how to apply different styles for weekends, holidays, and past dates using CSS classes.'
			}
		}
	}
};

export const EventsAndCallbacks: StoryObj = {
	render: (args) => ({
		props: {
			...args,
			currentDate: new Date(args["currentDate"])
		},
		template: `<fkt-calendar-events-example ${argsToTemplate(args)} />`,
	}),
	args: {
		currentDate: new Date(),
		borderless: false
	},
	parameters: {
		docs: {
			description: {
				story: 'Interactive calendar with custom click handlers and event indicators. Shows how to track user interactions and display dates with special events or data.'
			}
		}
	}
};

export const DisabledDates: StoryObj = {
	render: (args) => ({
		props: {
			...args,
			currentDate: new Date(args["currentDate"])
		},
		template: `<fkt-calendar-disabled-dates-example ${argsToTemplate(args)} />`,
	}),
	args: {
		currentDate: new Date("2025-12-25T12:00:00.000Z"),
		borderless: false
	},
	parameters: {
		docs: {
			description: {
				story: 'Calendar with disabled date functionality. Perfect for booking systems, scheduling applications, and scenarios where certain dates should be unavailable for selection.'
			}
		}
	}
};

export default meta;
