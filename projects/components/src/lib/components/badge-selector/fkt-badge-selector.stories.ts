import type { Meta } from '@storybook/angular';
import { FktComponentInputs, FktComponentTwoWayBindings } from '../../shared/types';
import { FktBadgeSelectorComponent } from './fkt-badge-selector.component';
import { signal } from '@angular/core';

const meta: Meta<FktBadgeSelectorComponent<string>> = {
	title: 'Components/Badge selector',
	component: FktBadgeSelectorComponent,
	argTypes: {
		options: {
			control: 'object',
		},
	}
};

type Story = {
	args: Partial<FktComponentInputs<FktBadgeSelectorComponent<string>>> & Partial<FktComponentTwoWayBindings<FktBadgeSelectorComponent<string>>>
}

export const Preview: Story = {
	args: {
		options: [
			{
				id: "opt-1",
				color: "green",
				name: "Success"
			},
			{
				id: "opt-2",
				color: "red",
				name: "Cancelled"
			},
			{
				id: "opt-3",
				color: "blue",
				name: "Reserved"
			},
			{
				id: "opt-4",
				color: "orange",
				name: "Paused"
			},
		],
		currentBadgeId: 'opt-1' as any
	}
};


export default meta;
