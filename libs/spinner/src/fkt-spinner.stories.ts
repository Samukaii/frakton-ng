import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { fktColors } from '@frakton-ng/core';
import { FktSpinnerComponent } from '@frakton-ng/spinner';
import {
	FktSpinnerExampleColorThemesComponent,
	FktSpinnerExampleCustomConfigurationComponent,
	FktSpinnerExampleLoadingStateComponent,
	FktSpinnerExampleSizeVariationsComponent
} from './examples';

const meta: Meta<FktSpinnerComponent> = {
	title: 'Components/Spinner',
	component: FktSpinnerComponent,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		moduleMetadata({
			imports: [
				FktSpinnerExampleColorThemesComponent,
				FktSpinnerExampleCustomConfigurationComponent,
				FktSpinnerExampleLoadingStateComponent,
				FktSpinnerExampleSizeVariationsComponent
			]
		})
	],
	argTypes: {
		color: {
			control: 'select',
			description: 'Spinner color',
			options: fktColors,
			table: {
				type: { summary: 'FktColor' },
				defaultValue: { summary: 'primary' }
			}
		},
		size: {
			control: "number",
			description: 'Spinner size in px',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: '40' }
			}
		},
		stroke: {
			control: "number",
			description: 'Spinner stroke in px',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: '4' }
			}
		},
	}
};

type Story = StoryObj<FktSpinnerComponent>;

export const SizeVariations: Story = {
	render: (args) => ({
		template: '<fkt-spinner-example-size-variations [stroke]="stroke" [color]="color"/>',
		props: {
			...args
		}
	}),
	args: {
		stroke: 4,
		color: 'primary'
	}
};

export const ColorThemes: Story = {
	render: (args) => ({
		template: '<fkt-spinner-example-color-themes [size]="size" [stroke]="stroke"/>',
		props: {
			...args
		}
	}),
	args: {
		size: 40,
		stroke: 4
	}
};

export const LoadingState: Story = {
	render: (args) => ({
		template: '<fkt-spinner-example-loading-state [size]="size" [stroke]="stroke" [color]="color"/>',
		props: {
			...args
		}
	}),
	args: {
		size: 40,
		stroke: 4,
		color: 'primary'
	}
};

export const CustomConfiguration: Story = {
	render: (args) => ({
		template: '<fkt-spinner-example-custom-configuration [size]="size" [color]="color"/>',
		props: {
			...args
		}
	}),
	args: {
		size: 96,
		color: 'primary'
	}
};

export default meta;
