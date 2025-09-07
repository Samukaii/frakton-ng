import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { fktColors } from 'frakton-ng/core';
import { FktSpinnerComponent } from 'frakton-ng/spinner';
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
				type: {
					summary: 'FktColor',
					detail: "import {FktColor} from 'frakton-ng/core'"
				},
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
	parameters: {
		docs: {
			description: {
				story: "Spinners with different sizes for various use cases and container sizes."
			}
		}
	},
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
	parameters: {
		docs: {
			description: {
				story: "Spinners showcasing different color themes for various semantic meanings."
			}
		}
	},
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
	parameters: {
		docs: {
			description: {
				story: "Spinner used in a typical loading state scenario with conditional display."
			}
		}
	},
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
	parameters: {
		docs: {
			description: {
				story: "Spinner with dynamic configuration based on different states or conditions."
			}
		}
	},
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
