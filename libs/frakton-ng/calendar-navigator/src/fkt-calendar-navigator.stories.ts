import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FktCalendarNavigatorComponent, fktCalendarNavigatorModes } from 'frakton-ng/calendar-navigator';
import {
	DynamicModeExampleComponent,
	FormIntegrationExampleComponent,
	MonthModeExampleComponent,
	YearModeExampleComponent
} from './examples';

const meta: Meta<FktCalendarNavigatorComponent> = {
	title: 'Components/Calendar navigator',
	component: FktCalendarNavigatorComponent,
	decorators: [
		moduleMetadata({
			imports: [
				MonthModeExampleComponent,
				YearModeExampleComponent,
				FormIntegrationExampleComponent,
				DynamicModeExampleComponent
			]
		})
	],
	argTypes: {
		mode: {
			control: 'select',
			options: fktCalendarNavigatorModes,
			description: 'Display mode for the navigator. Can be "month" or "year".',
			value: 'month',
			table: {
				type: {
					summary: 'FktCalendarNavigatorMode',
					detail: "import {FktCalendarNavigatorMode} from 'frakton-ng/calendar-navigator'",

				},
				defaultValue: {
					summary: '"month"'
				}
			}
		},
		currentDate: {
			control: 'date',
			description: 'The currently selected date. Supports two-way binding.',
			table: {type: {summary: 'Date'}, defaultValue: {summary: 'new Date()'}}
		},
	}
};

type Story = StoryObj<FktCalendarNavigatorComponent>;

export const MonthModeNavigator: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Displays the component in monthly mode, allowing navigation and selection of dates within the current month. Perfect for calendar or dashboard scenarios focused on monthly data.'
			}
		}
	},
	render: (args) => ({
		template: '<month-mode-example [mode]="mode" [currentDate]="currentDate"></month-mode-example>',
		props: {
			...args,
			currentDate: new Date(args.currentDate)
		},
	}),
	args: {
		mode: 'month',
		currentDate: new Date(),
	}
};

export const YearModeNavigator: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Renders the component in yearly mode, enabling users to view and interact with information distributed throughout the year. Ideal for reports, analytics, or annual overviews.'
			}
		}
	},
	render: (args) => ({
		template: '<year-mode-example [mode]="mode" [currentDate]="currentDate"></year-mode-example>',
		props: {
			...args,
			currentDate: new Date(args.currentDate)
		},
	}),
	args: {
		mode: 'year',
		currentDate: new Date(),
	}
};

export const FormIntegration: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Demonstrates how to integrate the component with forms, synchronizing state and making it easy to validate or manipulate selected dates within a form context.'
			}
		}
	},
	render: (args) => ({
		template: '<form-integration-example [mode]="mode" [currentDate]="currentDate"></form-integration-example>',
		props: {
			...args,
			currentDate: new Date(args.currentDate)
		},
	}),
	args: {
		mode: 'month',
		currentDate: new Date(),
	}
};

export const DynamicModeSwitching: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Allows dynamic switching between available modes, showcasing how the component adapts in real time to different usage contexts.'
			}
		}
	},
	render: (args) => ({
		template: '<dynamic-mode-example [mode]="mode" [currentDate]="currentDate"></dynamic-mode-example>',
		props: {
			...args,
			currentDate: new Date(args.currentDate)
		},
	}),
	args: {
		mode: 'month',
		currentDate: new Date(),
	}
};

export default meta;
