import type { Meta, StoryObj } from '@storybook/angular';
import { FktCalendarNavigatorComponent, fktCalendarNavigatorModes } from 'frakton-ng/calendar-navigator';
import {
	DynamicModeExampleComponent,
	FormIntegrationExampleComponent,
	MonthModeExampleComponent,
	YearModeExampleComponent
} from './examples';
import { fktStoryRenderer } from '../../.storybook/decorators/fkt-story-renderer';
import { renderComponent } from '../../.storybook/decorators/render-component';
import designTokens from './fkt-calendar-navigator-design-tokens.json';

const meta: Meta<FktCalendarNavigatorComponent> = {
	title: 'Components/Navigation/Calendar navigator',
	component: FktCalendarNavigatorComponent,
	decorators: [
		fktStoryRenderer({
			designTokens: designTokens as any
		}),
	],
	argTypes: {
		mode: {
			control: 'select',
			options: fktCalendarNavigatorModes,
			description: 'Display mode for the navigator. Can be "month" or "year".',
			value: 'month',
			table: {
				category: 'Attributes',
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
			table: {
				category: 'Attributes',
				type: {summary: 'Date'}, defaultValue: {summary: 'new Date()'}
			}
		},
	}
};

type Story = StoryObj<FktCalendarNavigatorComponent>;

export const MonthModeNavigator: Story = {
	render: renderComponent(MonthModeExampleComponent),
	parameters: {
		docs: {
			description: {
				story: 'Displays the component in monthly mode, allowing navigation and selection of dates within the current month. Perfect for calendar or dashboard scenarios focused on monthly data.'
			}
		}
	},
	args: {
		mode: 'month',
		currentDate: new Date(),
	}
};

export const YearModeNavigator: Story = {
	render: renderComponent(YearModeExampleComponent),
	parameters: {
		docs: {
			description: {
				story: 'Renders the component in yearly mode, enabling users to view and interact with information distributed throughout the year. Ideal for reports, analytics, or annual overviews.'
			}
		}
	},
	args: {
		mode: 'year',
		currentDate: new Date(),
	}
};

export const FormIntegration: Story = {
	render: renderComponent(FormIntegrationExampleComponent),
	parameters: {
		docs: {
			description: {
				story: 'Demonstrates how to integrate the component with forms, synchronizing state and making it easy to validate or manipulate selected dates within a form context.'
			}
		}
	},
	args: {
		mode: 'month',
		currentDate: new Date(),
	}
};

export const DynamicModeSwitching: Story = {
	render: renderComponent(DynamicModeExampleComponent),
	parameters: {
		docs: {
			description: {
				story: 'Allows dynamic switching between available modes, showcasing how the component adapts in real time to different usage contexts.'
			}
		}
	},
	args: {
		mode: 'month',
		currentDate: new Date(),
	}
};

export default meta;
