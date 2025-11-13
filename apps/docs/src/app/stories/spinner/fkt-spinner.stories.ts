import { FktSpinnerComponent } from 'frakton-ng/spinner';
import { fktColors } from 'frakton-ng/core';
import {
	FktSpinnerExampleColorThemesComponent,
	FktSpinnerExampleCustomConfigurationComponent,
	FktSpinnerExampleLoadingStateComponent,
	FktSpinnerExampleSizeVariationsComponent
} from './examples';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-spinner.docs.md' with { loader: "text" };

const meta: Meta = {
	title: "Components/Feedback/Spinner",
	component: FktSpinnerComponent,
    description: "The FktSpinner component provides a customizable loading indicator with configurable size, stroke width, and color themes. It's designed to give users visual feedback during loading states and async operations.",
	documentation,
	argTypes: {
		color: {
			control: 'select',
			category: "Attributes",
			type: 'FktColor',
			import: "import {FktColor} from 'frakton-ng/core'",
			options: fktColors,
			defaultValue: 'primary',
			description: 'Spinner color'
		},
		size: {
			control: 'number',
			category: "Attributes",
			type: 'number',
			defaultValue: '40',
			description: 'Spinner size in pixels'
		},
		stroke: {
			control: 'number',
			category: "Attributes",
			type: 'number',
			defaultValue: '4',
			description: 'Spinner stroke width in pixels'
		}
	}
}

export const SizeVariations: Story<FktSpinnerExampleSizeVariationsComponent> = {
	component: FktSpinnerExampleSizeVariationsComponent,
	description: "Spinners with different sizes for various use cases and container sizes.",
	args: {
		stroke: 4,
		color: 'primary'
	}
};

export const ColorThemes: Story<FktSpinnerExampleColorThemesComponent> = {
	component: FktSpinnerExampleColorThemesComponent,
	description: "Spinners showcasing different color themes for various semantic meanings.",
	args: {
		size: 40,
		stroke: 4
	}
};

export const LoadingState: Story<FktSpinnerExampleLoadingStateComponent> = {
	component: FktSpinnerExampleLoadingStateComponent,
	description: "Spinner used in a typical loading state scenario with conditional display.",
	args: {
		size: 40,
		stroke: 4,
		color: 'primary'
	}
};

export const CustomConfiguration: Story<FktSpinnerExampleCustomConfigurationComponent> = {
	component: FktSpinnerExampleCustomConfigurationComponent,
	description: "Spinner with dynamic configuration based on different states or conditions.",
	args: {
		size: 96,
		color: 'primary'
	}
};

export default meta;
