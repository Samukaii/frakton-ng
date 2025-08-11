import type { Meta } from '@storybook/angular';
import { FktComponentInputs, FktComponentTwoWayBindings } from '../../shared/types';
import { FktButtonsListComponent } from './fkt-buttons-list.component';
import { fktButtonsListOrientations } from './fkt-buttons-list.types';

const meta: Meta<FktButtonsListComponent<void>> = {
	title: 'Components/Buttons list',
	component: FktButtonsListComponent,
	argTypes: {
		context: {
			control: 'object',
		},
		orientation: {
			control: 'select',
			options: fktButtonsListOrientations
		},
		fill: {
			control: 'boolean'
		},
		actions: {
			control: 'object',
			type: {
				name: 'array',
				value: {
					name: "object",
					value: {}
				}
			}
		}
	}
};

type Story = {
	args: Partial<FktComponentInputs<FktButtonsListComponent<void>>> & Partial<FktComponentTwoWayBindings<FktButtonsListComponent<void>>>
}

export const Preview: Story = {
	args: {
		actions: [
			{
				identifier: "action-1",
				theme: "raised",
				color: "primary",
				text: "Action 1"
			},
			{
				identifier: "action-2",
				theme: "stroked",
				color: "green",
				text: "Action 2",
				variant: "default"
			},
			{
				identifier: "action-3",
				theme: "basic",
				color: "red",
				text: "Action 3"
			},
			{
				identifier: "action-4",
				theme: "raised",
				color: "yellow",
				text: "Action 4"
			},
			{
				identifier: "action-5",
				theme: "raised",
				icon: "plus",
				variant: "icon",
				color: "primary"
			},
			{
				identifier: "action-6",
				theme: "basic",
				icon: "trash",
				variant: "rect",
				color: "red"
			}
		]
	}
};


export default meta;
