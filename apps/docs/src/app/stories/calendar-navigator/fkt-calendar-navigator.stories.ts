import { FktCalendarNavigatorComponent, fktCalendarNavigatorModes } from 'frakton-ng/calendar-navigator';
import { DynamicModeExampleComponent, FormIntegrationExampleComponent, MonthModeExampleComponent, YearModeExampleComponent } from './examples';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-calendar-navigator.docs.md' with { loader: "text" };

const meta: Meta = {
	title: "Components/Navigation/Calendar Navigator",
	component: FktCalendarNavigatorComponent,
    description: "The FktCalendarNavigator component provides an interactive calendar header with navigation controls and modal-based date selection. It displays the current month/year and allows users to navigate between dates with modal overlays for detailed selection.",
	documentation,
	argTypes: {
		mode: {
			control: 'select',
			category: "Attributes",
			type: 'FktCalendarNavigatorMode',
			options: fktCalendarNavigatorModes,
			import: "import {FktCalendarNavigatorMode} from 'frakton-ng/calendar-navigator'",
			defaultValue: "'month'",
			description: 'Navigation mode for the calendar'
		},
		currentDate: {
			control: 'object',
			category: "Attributes",
			type: 'Date',
			defaultValue: "new Date()",
			description: 'Currently selected date with two-way binding'
		}
	}
}

export const Month: Story<FktCalendarNavigatorComponent> = {
	description: "Calendar navigator in month mode, allowing users to navigate through months and select specific months.",
	args: {
		mode: 'month',
		currentDate: new Date()
	}
};

export const Year: Story<FktCalendarNavigatorComponent> = {
	description: "Calendar navigator in year mode, allowing users to navigate through years and select specific years.",
	args: {
		mode: 'year',
		currentDate: new Date()
	}
};

export const MonthModeExample: Story<MonthModeExampleComponent> = {
	component: MonthModeExampleComponent,
	description: "Comprehensive example showing month mode navigation with date selection and current date display.",
	args: {},
};

export const YearModeExample: Story<YearModeExampleComponent> = {
	component: YearModeExampleComponent,
	description: "Comprehensive example showing year mode navigation with year selection and current year display.",
	args: {},
};

export const DynamicModeExample: Story<DynamicModeExampleComponent> = {
	component: DynamicModeExampleComponent,
	description: "Dynamic mode switching example showing how to toggle between month and year navigation modes.",
	args: {},
};

export const FormIntegrationExample: Story<FormIntegrationExampleComponent> = {
	component: FormIntegrationExampleComponent,
	description: "Form integration example showing how to use calendar navigator with reactive forms and form validation.",
	args: {},
};

export default meta;
