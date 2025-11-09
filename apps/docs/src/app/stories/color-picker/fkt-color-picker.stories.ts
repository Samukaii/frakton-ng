import { FktColorPickerComponent, fktColorPickerFormats } from 'frakton-ng/color-picker';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-color-picker.docs.md' with { loader: "text" };

const meta: Meta = {
	title: "Components/Form/Color Picker",
	component: FktColorPickerComponent,
	documentation,
	argTypes: {
		label: {
			control: 'text',
			category: "Attributes",
			type: 'string',
			defaultValue: "required",
			description: 'Label text displayed for the color picker'
		},
		hideLabel: {
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: 'false',
			description: 'Hide the label text visually while keeping it accessible'
		},
		defaultFormat: {
			control: 'select',
			category: "Attributes",
			type: 'FktColorPickerFormat',
			options: fktColorPickerFormats,
			import: "import {FktColorPickerFormat} from 'frakton-ng/color-picker'",
			defaultValue: "'hsl'",
			description: 'Default color format displayed in the picker'
		},
		outputFormat: {
			control: 'select',
			category: "Attributes",
			type: 'FktColorPickerFormat',
			options: fktColorPickerFormats,
			import: "import {FktColorPickerFormat} from 'frakton-ng/color-picker'",
			defaultValue: "'hex'",
			description: 'Format used for the output value'
		},
		disableAlphaChannel: {
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: 'false',
			description: 'Disable alpha/transparency channel in the color picker'
		},
		disabled: {
			control: 'boolean',
			category: "Form Control",
			type: 'boolean',
			defaultValue: 'false',
			description: 'Disable the color picker interaction'
		},
		value: {
			control: 'text',
			category: "Form Control",
			type: 'string | null',
			defaultValue: 'null',
			description: 'Current color value'
		}
	}
}

export const BasicColorPicker: Story<FktColorPickerComponent> = {
	description: "A basic color picker with default HSL format and HEX output. Supports alpha channel for transparency.",
	args: {
		label: 'Choose Color',
		defaultFormat: 'hsl',
		outputFormat: 'hex'
		// disableAlphaChannel: false
	}
};

export const HexFormat: Story<FktColorPickerComponent> = {
	description: "Color picker configured for HEX format input and output with a pre-selected blue color.",
	args: {
		label: 'Hex Color',
		defaultFormat: 'hex',
		outputFormat: 'hex',
		value: '#3498db'
	}
};

export const RgbFormat: Story<FktColorPickerComponent> = {
	description: "Color picker using RGB format for both input and output with a pre-selected red color.",
	args: {
		label: 'RGB Color',
		defaultFormat: 'rgb',
		outputFormat: 'rgb',
		value: 'rgb(231, 76, 60)'
	}
};

export const HslFormat: Story<FktColorPickerComponent> = {
	description: "Color picker using HSL format for both input and output with a pre-selected green color.",
	args: {
		label: 'HSL Color',
		defaultFormat: 'hsl',
		outputFormat: 'hsl',
		value: 'hsl(142, 71%, 45%)'
	}
};

export const WithAlphaChannel: Story<FktColorPickerComponent> = {
	description: "Color picker with alpha channel enabled, allowing transparency selection. Shows a semi-transparent purple color.",
	args: {
		label: 'Color with Transparency',
		defaultFormat: 'hsl',
		outputFormat: 'hsl',
		// disableAlphaChannel: false,
		value: 'hsla(271, 81%, 56%, 0.7)'
	}
};

export const DisabledState: Story<FktColorPickerComponent> = {
	description: "Color picker in disabled state that cannot be interacted with but shows the current color value.",
	args: {
		label: 'Disabled Color Picker',
		disabled: true,
		value: '#95a5a6'
	}
};

export const HiddenLabel: Story<FktColorPickerComponent> = {
	description: "Color picker with visually hidden label for compact layouts while maintaining accessibility.",
	args: {
		label: 'Theme Color',
		// hideLabel: true,
		value: '#9b59b6'
	}
};

export default meta;