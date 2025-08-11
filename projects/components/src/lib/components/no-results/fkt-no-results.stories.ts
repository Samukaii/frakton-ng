import type { Meta } from '@storybook/angular';
import { FktComponentInputs } from '../../shared/types';
import { FktNoResultsComponent } from './fkt-no-results.component';

const meta: Meta<FktNoResultsComponent> = {
	title: 'Components/No results',
	component: FktNoResultsComponent,
	argTypes: {
		noResults: {
			control: 'object',
			table: {
				type: {
					summary: 'FktNoResults',
				}
			}
		}
	}
};

type Story = {
	args: Partial<FktComponentInputs<FktNoResultsComponent>>
}

export const Preview: Story = {
	args: {
		noResults: {
			label: "No results label",
			description: "No results description",
			icon: {
				name: "rocket-launch",
				size: "100px"
			},
			action: {
				theme: 'stroked',
				text: "Action",
				identifier: 'action',
				icon: "rocket-launch"
			}
		}
	}
};

export default meta;
