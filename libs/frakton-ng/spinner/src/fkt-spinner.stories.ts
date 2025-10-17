import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { fktColors } from 'frakton-ng/core';
import { FktSpinnerComponent } from 'frakton-ng/spinner';
import {
	FktSpinnerExampleColorThemesComponent,
	FktSpinnerExampleCustomConfigurationComponent,
	FktSpinnerExampleLoadingStateComponent,
	FktSpinnerExampleSizeVariationsComponent
} from './examples';
import { customDocsControl } from '../../.storybook/decorators/custom-docs-control';
import { renderComponent } from '../../.storybook/decorators/render-component';

const meta: Meta<FktSpinnerComponent> = {
	title: 'Components/Spinner',
	component: FktSpinnerComponent,
	decorators: [
		customDocsControl(),
	],
	argTypes: {
		color: {
			control: 'select',
			description: 'Spinner color',
			options: fktColors,
			table: {
				category: "Attributes",
				type: {
					summary: 'FktColor',
					detail: "import {FktColor} from 'frakton-ng/core'"
				},
				defaultValue: {summary: 'primary'}
			}
		},
		size: {
			control: "number",
			description: 'Spinner size in px',
			table: {
				category: "Attributes",
				type: {summary: 'number'},
				defaultValue: {summary: '40'}
			}
		},
		stroke: {
			control: "number",
			description: 'Spinner stroke in px',
			table: {
				category: "Attributes",
				type: {summary: 'number'},
				defaultValue: {summary: '4'}
			}
		},
	}
};

type Story = StoryObj<FktSpinnerComponent>;

export const SizeVariations: Story = {
	render: renderComponent(FktSpinnerExampleSizeVariationsComponent),
	parameters: {
		docs: {
			description: {
				story: "Spinners with different sizes for various use cases and container sizes."
			}
		}
	},
	args: {
		stroke: 4,
		color: 'primary'
	}
};

export const ColorThemes: Story = {
	render: renderComponent(FktSpinnerExampleColorThemesComponent),
	parameters: {
		docs: {
			description: {
				story: "Spinners showcasing different color themes for various semantic meanings."
			}
		}
	},
	args: {
		size: 40,
		stroke: 4
	}
};

export const LoadingState: Story = {
	render: renderComponent(FktSpinnerExampleLoadingStateComponent),
	parameters: {
		docs: {
			description: {
				story: "Spinner used in a typical loading state scenario with conditional display."
			}
		}
	},
	args: {
		size: 40,
		stroke: 4,
		color: 'primary'
	}
};

export const CustomConfiguration: Story = {
	render: renderComponent(FktSpinnerExampleCustomConfigurationComponent),
	parameters: {
		docs: {
			description: {
				story: "Spinner with dynamic configuration based on different states or conditions."
			}
		}
	},
	args: {
		size: 96,
		color: 'primary'
	}
};

export default meta;
