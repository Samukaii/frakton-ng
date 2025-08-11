import type { Meta } from '@storybook/angular';
import { FktButtonComponent } from './fkt-button.component';
import { FktComponentInputs, fktColors } from '../../shared/types';
import { fktButtonThemes, fktButtonVariants } from './fkt-button.types';
import { fontIconsMap } from '../../static';

const meta: Meta<FktButtonComponent> = {
	title: 'Components/Button',
	component: FktButtonComponent,
	argTypes: {
		text: { control: 'text' },
		color: {
			control: 'select',
			options: fktColors
		},
		icon: {
			control: 'select',
			options: Object.keys(fontIconsMap)
		},
		theme: {
			control: 'select',
			options: fktButtonThemes
		},
		variant: {
			control: 'select',
			options: fktButtonVariants
		},
		disabled: { control: 'boolean' }
	}
};

type Story = {
	args: Partial<FktComponentInputs<FktButtonComponent>>
}

export const Raised: Story = {
	args: {
		text: 'Click me',
		theme: 'raised',
		disabled: false
	}
};

export const Stroked: Story = {
	args: {
		text: 'Cancel',
		theme: 'stroked',
		color: 'primary',
		disabled: false
	}
};

export const Disabled: Story = {
	args: {
		text: 'Disabled',
		theme: 'raised',
		color: 'primary',
		disabled: true
	}
};

export const WithIcon: Story = {
	args: {
		text: 'With icon',
		theme: 'raised',
		color: 'primary',
		icon: "arrow",
		disabled: false,
	}
};

export default meta;
