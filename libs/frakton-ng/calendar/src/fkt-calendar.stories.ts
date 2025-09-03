import type { Meta } from '@storybook/angular';
import { FktComponentInputs } from 'frakton-ng/internal/types';
import { FktCalendarExampleComponent } from './example/fkt-calendar-example.component';

const meta: Meta<FktCalendarExampleComponent> = {
	title: 'Components/Calendar',
	component: FktCalendarExampleComponent,
	argTypes: {
		borderless: {
			control: 'boolean',
			table: {
				category: 'Attributes'
			}
		},
		configFn: {
			type: 'function',
			table: {
				category: 'Attributes'
			}
		},
		currentDate: {
			control: 'date',
			table: {
				category: 'Attributes'
			}
		},
	}
};

type Story = {
	args: Partial<FktComponentInputs<FktCalendarExampleComponent>>
}

export const Preview: Story = {
	args: {
		borderless: false,

	}
};

export default meta;
