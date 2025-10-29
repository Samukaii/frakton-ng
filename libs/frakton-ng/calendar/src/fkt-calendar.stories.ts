import type { Meta, StoryObj } from '@storybook/angular';
import {
	FktCalendarBasicExampleComponent,
	FktCalendarBorderlessExampleComponent,
	FktCalendarCustomStylingExampleComponent,
	FktCalendarDisabledDatesExampleComponent,
	FktCalendarEventsExampleComponent
} from './examples';
import { FktCalendarComponent } from './fkt-calendar.component';
import { fktStoryRenderer } from '../../.storybook/decorators/fkt-story-renderer';
import { renderComponent } from '../../.storybook/decorators/render-component';
import designTokens from './fkt-calendar-design-tokens.json';

const meta: Meta<FktCalendarComponent> = {
	title: 'Components/Navigation/Calendar',
	component: FktCalendarComponent,
	decorators: [
		fktStoryRenderer({
			designTokens: designTokens as any
		})
	],
	argTypes: {
		configFn: {
			control: 'object',
			type: {
				name: "object",
				value: {}
			},
			table: {
				category: "Attributes",
				type: {
					summary: "FktCalendarDateConfigFn",
					detail: 'import {FktCalendarDateConfigFn} from "frakton-ng/calendar"'
				},
				defaultValue: {
					summary: "undefined"
				}
			},
			description: "Advanced configuration function for customizing each date cell in the calendar. Use this to dynamically set appearance, state, or behavior based on date properties, selection, holidays, and more."
		},
		currentDate: {
			control: 'date',
			type: {
				name: "object",
				value: {}
			},
			table: {
				category: "Attributes",
				type: {
					summary: 'ModelSignal<Date>'
				},
				defaultValue: {
					summary: 'new Date()'
				}
			},
			description: "Currently selected date in the calendar. Should be a ModelSignal<Date> for reactive two-way binding. Defaults to the current day."
		},
		borderless: {
			control: 'boolean',
			type: {
				name: "boolean",
			},
			table: {
				category: "Attributes",
				type: {
					summary: 'boolean'
				},
				defaultValue: {
					summary: "false"
				}
			},
			description: "Removes the calendar border for a cleaner, modern look. Use when embedding the calendar in cards, dialogs, or layouts where borders would interfere with design."
		},
	}
};

type Story = StoryObj<FktCalendarComponent>;

export const Basic: Story = {
	render: renderComponent(FktCalendarBasicExampleComponent),
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

export const BorderlessMode: Story = {
	render: renderComponent(FktCalendarBorderlessExampleComponent),
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

export const CustomDateStyling: Story = {
	render: renderComponent(FktCalendarCustomStylingExampleComponent),
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

export const EventsAndCallbacks: Story = {
	render: renderComponent(FktCalendarEventsExampleComponent),
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

export const DisabledDates: Story = {
	render: renderComponent(FktCalendarDisabledDatesExampleComponent),
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
