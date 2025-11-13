import { FktButtonComponent, fktButtonIconPosition, fktButtonShapes, fktButtonThemes } from 'frakton-ng/button';
import { fktColors } from 'frakton-ng/core';
import { fontIconNames } from 'frakton-ng/icon';
import { IconVariantsExampleComponent, TextVariantsExampleComponent } from './examples';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
import designTokens from './fkt-button-design-tokens.json';
import { DesignToken } from '@/models/design-token';
// @ts-expect-error
import documentation from './fkt-button.docs.md' with { loader: "text" };

const meta: Meta = {
	title: "Components/Actions/Button",
    description: "The FktButton component provides a versatile and customizable button with multiple themes, variants, and styling options. Built with Angular signals and modern design patterns, it supports various visual styles, icons, loading states, and accessibility features.",
	component: FktButtonComponent,
	loadType: 'eagerly',
	documentation,
	designTokens: designTokens as DesignToken[],
	argTypes: {
		loading: {
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: "false",
		},
		disabled: {
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: "false",
		},
		ariaLabel: {
			control: 'text',
			category: "Attributes",
			type: 'string',
			defaultValue: "''",
		},
		text: {
			control: 'text',
			category: "Attributes",
			type: 'string',
			defaultValue: "''",
		},
		loadingText: {
			control: 'text',
			category: "Attributes",
			type: 'string',
			defaultValue: "''",
		},
		color: {
			control: 'select',
			category: "Attributes",
			type: 'FktColor',
			options: fktColors,
			import: "import {FktColor} from 'frakton-ng/core'",
			defaultValue: "'primary'",
		},
		labelColor: {
			control: 'color',
			category: "Attributes",
			type: 'string',
			defaultValue: "''",
		},
		theme: {
			control: 'select',
			category: "Attributes",
			type: 'FktButtonTheme',
			options: fktButtonThemes,
			import: "import {FktButtonTheme} from 'frakton-ng/button'",
			defaultValue: "'raised'",
		},
		shape: {
			control: 'select',
			category: "Attributes",
			type: 'FktButtonShape',
			options: fktButtonShapes,
			import: "import {FktButtonShape} from 'frakton-ng/button'",
			defaultValue: "'rounded'",
		},
		icon: {
			control: 'select',
			category: "Attributes",
			type: 'FktIconName',
			options: fontIconNames,
			import: "import {FktIconName} from 'frakton-ng/icon'",
			defaultValue: "undefined",
		},
		iconPosition: {
			control: 'select',
			category: "Attributes",
			options: fktButtonIconPosition,
			type: 'FktButtonIconPosition',
			import: "import {FktButtonIconPosition} from 'frakton-ng/button'",
			defaultValue: "'right'",
		}
	}
}


export const Raised: Story<FktButtonComponent> = {
	description: "A standard button with elevated appearance, perfect for primary actions.",
	args: {
		text: 'Click me',
		theme: 'raised',
		disabled: false
	}
};

export const Stroked: Story<FktButtonComponent> = {
	description: "An outlined button style ideal for secondary actions and cancel operations.",
	args: {
		text: 'Cancel',
		theme: 'stroked',
		color: 'primary',
		disabled: false
	}
};

export const Disabled: Story<FktButtonComponent> = {
	description: "Button in disabled state showing non-interactive appearance and behavior.",
	args: {
		text: 'Disabled',
		theme: 'raised',
		color: 'primary',
		disabled: true
	}
};

export const WithIcon: Story<FktButtonComponent> = {
	description: "Button with icon support, demonstrating icon positioning and combination with text.",
	args: {
		text: 'With icon',
		theme: 'raised',
		color: 'primary',
		icon: "arrow",
		disabled: false,
	}
};

export const Basic: Story<FktButtonComponent> = {
	description: "Minimal button style with basic theme, perfect for subtle actions and text-only interactions.",
	args: {
		text: 'Basic Button',
		theme: 'basic',
		color: 'primary',
		disabled: false
	}
};

export const IconOnly: Story<FktButtonComponent> = {
	description: "Compact circular button with just an icon, ideal for toolbars and action menus.",
	args: {
		icon: 'plus',
		ariaLabel: 'Icon only example',
		theme: 'raised',
		color: 'primary',
		disabled: false
	}
};

export const RectIcon: Story<FktButtonComponent> = {
	description: "Rectangular icon button with standard padding, perfect for data table actions.",
	args: {
		icon: 'trash',
		ariaLabel: 'Rect icon example',
		shape: 'rect',
		theme: 'basic',
		color: 'danger',
		disabled: false
	}
};

export const Loading: Story<FktButtonComponent> = {
	description: "Button showing loading state with custom loading text, perfect for async operations.",
	args: {
		text: 'Save Changes',
		loadingText: 'Saving...',
		theme: 'raised',
		color: 'primary',
		loading: true,
		disabled: false
	}
};

export const WithLeftIcon: Story<FktButtonComponent> = {
	description: "Button with icon positioned to the left of the text for enhanced visual hierarchy.",
	args: {
		text: 'Download',
		icon: 'trash',
		iconPosition: 'left',
		theme: 'raised',
		color: 'success',
		disabled: false
	}
};

export const TextVariants: Story<TextVariantsExampleComponent> = {
	component: TextVariantsExampleComponent,
	description: "Comprehensive showcase of all button text variants across different themes, colors, and shapes.",
	args: {},
};

export const IconVariants: Story<IconVariantsExampleComponent> = {
	component: IconVariantsExampleComponent,
	description: "Comprehensive showcase of all button icon variants across different themes, colors, and shapes.",
	args: {},
};

export const StrokedSecondary: Story<FktButtonComponent> = {
	description: "Buttons demonstrating different theme options with the same color for consistency.",
	args: {
		text: 'Secondary',
		theme: 'stroked',
		color: 'accent',
		disabled: false
	}
};

export const LongText: Story<FktButtonComponent> = {
	description: "Button with longer text content showing how the component handles text wrapping.",
	args: {
		text: 'This is a very long button text that demonstrates wrapping',
		theme: 'raised',
		color: 'primary',
		disabled: false
	}
};

export default meta;


