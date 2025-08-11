import type { Meta } from '@storybook/angular';
import { FktComponentInputs } from '../../shared/types';
import { FktCalendarNavigatorComponent } from './fkt-calendar-navigator.component';
import { fktCalendarNavigatorModes } from './fkt-calendar-navigator.types';

const meta: Meta<FktCalendarNavigatorComponent> = {
	title: 'Components/Calendar navigator',
	component: FktCalendarNavigatorComponent,
	argTypes: {
		mode: {
			control: 'select',
			options: fktCalendarNavigatorModes
		},
		currentDate: {
			control: 'date',
		},
	}
};

type Story = {
	args: Partial<FktComponentInputs<FktCalendarNavigatorComponent>>
}

export const Preview: Story = {
	args: {
		mode: 'month',
	}
};

export default meta;
