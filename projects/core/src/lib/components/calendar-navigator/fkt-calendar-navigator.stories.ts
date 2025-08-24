import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FktCalendarNavigatorComponent } from './fkt-calendar-navigator.component';
import { fktCalendarNavigatorModes } from './fkt-calendar-navigator.types';
import {
  MonthModeExampleComponent,
  YearModeExampleComponent,
  FormIntegrationExampleComponent,
  DynamicModeExampleComponent
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
			table: { type: { summary: 'FktCalendarNavigatorMode' }, defaultValue: {summary: 'month'}  }
		},
		currentDate: {
			control: 'date',
			description: 'The currently selected date. Supports two-way binding.',
			table: { type: { summary: 'Date' }, defaultValue: {summary: 'new Date()'} }
		},
	}
};

type Story = StoryObj<FktCalendarNavigatorComponent>;

export const MonthMode: Story = {
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

export const YearMode: Story = {
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

export const DynamicMode: Story = {
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
