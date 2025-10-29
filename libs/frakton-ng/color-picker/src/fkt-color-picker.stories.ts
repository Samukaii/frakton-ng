import { Meta, StoryObj } from '@storybook/angular';
import { FktColorPickerComponent, fktColorPickerFormats } from 'frakton-ng/color-picker';
import { fktStoryRenderer } from '../../.storybook/decorators/fkt-story-renderer';
import { renderComponent } from '../../.storybook/decorators/render-component';
import designTokens from './fkt-color-picker-design-tokens.json';

const meta: Meta<FktColorPickerComponent> = {
	title: 'Components/Form/Color Picker',
	component: FktColorPickerComponent,
	parameters: {
		docs: {
			description: {
				component: 'A comprehensive color picker component with multiple format support and form integration.'
			}
		}
	},
	decorators: [
		fktStoryRenderer({
			designTokens: designTokens as any
		}),
	],
	argTypes: {
		label: {
			control: 'text',
			description: 'Label text displayed for the color picker',
			table: {
				category: 'Attributes',
				type: {summary: 'string'},
				defaultValue: {summary: "required"}
			}
		},
		hideLabel: {
			control: 'boolean',
			description: 'Hide the label text visually while keeping it accessible',
			table: {
				category: 'Attributes',
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'}
			}
		},
		defaultFormat: {
			control: 'select',
			options: fktColorPickerFormats,
			description: 'Default color format displayed in the picker',
			table: {
				category: 'Attributes',
				type: {
					summary: 'FktColorPickerFormat',
					detail: "import {FktColorPickerFormat} from 'frakton-ng/color-picker';"
				},
				defaultValue: {summary: "'hsl'"}
			}
		},
		outputFormat: {
			control: 'select',
			options: fktColorPickerFormats,
			description: 'Format used for the output value',
			table: {
				category: 'Attributes',
				type: {
					summary: 'FktColorPickerFormat',
					detail: "import {FktColorPickerFormat} from 'frakton-ng/color-picker';"
				},
				defaultValue: {summary: "'hex'"}
			}
		},
		disableAlphaChannel: {
			control: 'boolean',
			description: 'Disable alpha/transparency channel in the color picker',
			table: {
				category: 'Attributes',
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'}
			}
		},
		disabled: {
			control: 'boolean',
			description: 'Disable the color picker interaction',
			table: {
				category: 'Form Control',
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'}
			}
		},
		value: {
			control: 'text',
			description: 'Current color value',
			table: {
				category: 'Form Control',
				type: {summary: 'string | null'},
				defaultValue: {summary: 'null'}
			}
		}
	}
};

type Story = StoryObj<FktColorPickerComponent>;

export const BasicColorPicker: Story = {
	render: renderComponent(FktColorPickerComponent),
	args: {
		label: 'Choose Color',
		defaultFormat: 'hsl',
		outputFormat: 'hex',
		disableAlphaChannel: false
	},
	parameters: {
		options: {
			showPanel: true,
		},
		docs: {
			description: {
				story: 'A basic color picker with default HSL format and HEX output. Supports alpha channel for transparency.'
			}
		}
	}
};

export const HexFormat: Story = {
	render: renderComponent(FktColorPickerComponent),
	args: {
		label: 'Hex Color',
		defaultFormat: 'hex',
		outputFormat: 'hex',
		value: '#3498db'
	},
	parameters: {
		docs: {
			description: {
				story: 'Color picker configured for HEX format input and output with a pre-selected blue color.'
			}
		}
	}
};

export const RgbFormat: Story = {
	render: renderComponent(FktColorPickerComponent),
	args: {
		label: 'RGB Color',
		defaultFormat: 'rgb',
		outputFormat: 'rgb',
		value: 'rgb(231, 76, 60)'
	},
	parameters: {
		docs: {
			description: {
				story: 'Color picker using RGB format for both input and output with a pre-selected red color.'
			}
		}
	}
};

export const HslFormat: Story = {
	render: renderComponent(FktColorPickerComponent),
	args: {
		label: 'HSL Color',
		defaultFormat: 'hsl',
		outputFormat: 'hsl',
		value: 'hsl(142, 71%, 45%)'
	},
	parameters: {
		docs: {
			description: {
				story: 'Color picker using HSL format for both input and output with a pre-selected green color.'
			}
		}
	}
};

export const WithAlphaChannel: Story = {
	render: renderComponent(FktColorPickerComponent),
	args: {
		label: 'Color with Transparency',
		defaultFormat: 'hsl',
		outputFormat: 'hsl',
		disableAlphaChannel: false,
		value: 'hsla(271, 81%, 56%, 0.7)'
	},
	parameters: {
		docs: {
			description: {
				story: 'Color picker with alpha channel enabled, allowing transparency selection. Shows a semi-transparent purple color.'
			}
		}
	}
};

export const DisabledState: Story = {
	render: renderComponent(FktColorPickerComponent),
	args: {
		label: 'Disabled Color Picker',
		disabled: true,
		value: '#95a5a6'
	},
	parameters: {
		docs: {
			description: {
				story: 'Color picker in disabled state that cannot be interacted with but shows the current color value.'
			}
		}
	}
};

export const HiddenLabel: Story = {
	render: renderComponent(FktColorPickerComponent),
	args: {
		label: 'Theme Color',
		hideLabel: true,
		value: '#9b59b6'
	},
	parameters: {
		docs: {
			description: {
				story: 'Color picker with visually hidden label for compact layouts while maintaining accessibility.'
			}
		}
	}
};

export default meta;
