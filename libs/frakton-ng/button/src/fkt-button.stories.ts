import type { Meta, StoryObj } from '@storybook/angular';
import {
	FktButtonComponent,
	fktButtonIconPosition,
	FktButtonIconPosition,
	fktButtonThemes,
	fktButtonShapes
} from 'frakton-ng/button';
import { fktColors } from 'frakton-ng/core';
import { fontIconNames } from 'frakton-ng/icon';
import { TextVariantsExampleComponent, IconVariantsExampleComponent } from './examples';
import { customDocsControl } from '../../.storybook/decorators/custom-docs-control';
import { renderComponent } from '../../.storybook/decorators/render-component';
import designTokens from './fkt-button-design-tokens.json';

const meta: Meta<FktButtonComponent> = {
	title: 'Components/Button',
	component: FktButtonComponent,
	decorators: [
		customDocsControl({
			designTokens: designTokens as any
		}),
	],
	argTypes: {
		loading: {
			control: 'boolean',
			table: {
				category: "Attributes",
				type: {
					summary: 'boolean',
				},
				defaultValue: {
					summary: "false",
				},
			},
		},
		disabled: {
			control: 'boolean',
			table: {
				category: "Attributes",
				type: {
					summary: 'boolean',
				},
				defaultValue: {
					summary: "false",
				},
			},
		},
		text: {
			control: 'text',
			table: {
				category: "Attributes",
				type: {
					summary: 'string',
				},
				defaultValue: {
					summary: "''",
				},
			},
		},
		loadingText: {
			control: 'text',
			table: {
				category: "Attributes",
				type: {
					summary: 'string',
				},
				defaultValue: {
					summary: "''",
				},
			},
		},
		color: {
			control: 'select',
			options: fktColors,
			table: {
				category: "Attributes",
				type: {
					summary: 'FktColor',
					detail: "import {FktColor} from 'frakton-ng/core'",
				},
				defaultValue: {
					summary: "'primary'",
				},
			},
		},
		theme: {
			control: 'select',
			options: fktButtonThemes,
			table: {
				category: "Attributes",
				type: {
					summary: 'FktButtonTheme',
					detail: "import {FktButtonTheme} from 'frakton-ng/button'",
				},
				defaultValue: {
					summary: "'raised'",
				},
			},
		},
		shape: {
			control: 'select',
			options: fktButtonShapes,
			table: {
				category: "Attributes",
				type: {
					summary: 'FktButtonShape',
					detail: "import {FktButtonShape} from 'frakton-ng/button'",
				},
				defaultValue: {
					summary: "'rounded'",
				},
			},
		},
		icon: {
			control: 'select',
			options: fontIconNames,
			table: {
				category: "Attributes",
				type: {
					summary: 'FktIconName',
					detail: "import {FktIconName} from 'frakton-ng/icon'",
				},
				defaultValue: {
					summary: "undefined",
				},
			},
		},
		iconPosition: {
			control: 'select',
			options: fktButtonIconPosition,
			table: {
				category: "Attributes",
				type: {
					summary: 'FktButtonIconPosition',
					detail: "import {FktButtonIconPosition} from 'frakton-ng/button'",
				},
				defaultValue: {
					summary: "'right'",
				},
			},
		}
	}
};

export const Raised: StoryObj = {
	render: renderComponent(FktButtonComponent),
	parameters: {
		docs: {
			description: {
				story: "A standard button with elevated appearance, perfect for primary actions."
			}
		}
	},
	args: {
		text: 'Click me',
		theme: 'raised',
		disabled: false
	}
};

export const Stroked: StoryObj = {
	render: renderComponent(FktButtonComponent),
	parameters: {
		docs: {
			description: {
				story: "An outlined button style ideal for secondary actions and cancel operations."
			}
		}
	},
	args: {
		text: 'Cancel',
		theme: 'stroked',
		color: 'primary',
		disabled: false
	}
};

export const Disabled: StoryObj = {
	render: renderComponent(FktButtonComponent),
	parameters: {
		docs: {
			description: {
				story: "Button in disabled state showing non-interactive appearance and behavior."
			}
		}
	},
	args: {
		text: 'Disabled',
		theme: 'raised',
		color: 'primary',
		disabled: true
	}
};

export const WithIcon: StoryObj = {
	render: renderComponent(FktButtonComponent),
	parameters: {
		docs: {
			description: {
				story: "Button with icon support, demonstrating icon positioning and combination with text."
			}
		}
	},
	args: {
		text: 'With icon',
		theme: 'raised',
		color: 'primary',
		icon: "arrow",
		disabled: false,
	}
};

export const Basic: StoryObj = {
	render: renderComponent(FktButtonComponent),
	parameters: {
		docs: {
			description: {
				story: "Minimal button style with basic theme, perfect for subtle actions and text-only interactions."
			}
		}
	},
	args: {
		text: 'Basic Button',
		theme: 'basic',
		color: 'primary',
		disabled: false
	}
};

export const IconOnly: StoryObj = {
	render: renderComponent(FktButtonComponent),
	parameters: {
		docs: {
			description: {
				story: "Compact circular button with just an icon, ideal for toolbars and action menus."
			}
		}
	},
	args: {
		icon: 'plus',
		theme: 'raised',
		color: 'primary',
		disabled: false
	}
};

export const RectIcon: StoryObj = {
	render: renderComponent(FktButtonComponent),
	parameters: {
		docs: {
			description: {
				story: "Rectangular icon button with standard padding, perfect for data table actions."
			}
		}
	},
	args: {
		icon: 'trash',
		shape: 'rect',
		theme: 'basic',
		color: 'danger',
		disabled: false
	}
};

export const Loading: StoryObj = {
	render: renderComponent(FktButtonComponent),
	parameters: {
		docs: {
			description: {
				story: "Button showing loading state with custom loading text, perfect for async operations."
			}
		}
	},
	args: {
		text: 'Save Changes',
		loadingText: 'Saving...',
		theme: 'raised',
		color: 'primary',
		loading: true,
		disabled: false
	}
};

export const WithLeftIcon: StoryObj = {
	render: renderComponent(FktButtonComponent),
	parameters: {
		docs: {
			description: {
				story: "Button with icon positioned to the left of the text for enhanced visual hierarchy."
			}
		}
	},
	args: {
		text: 'Download',
		icon: 'trash',
		iconPosition: 'left',
		theme: 'raised',
		color: 'success',
		disabled: false
	}
};

export const TextVariants: StoryObj = {
	render: renderComponent(TextVariantsExampleComponent),
	parameters: {
		docs: {
			description: {
				story: "Comprehensive showcase of all button text variants across different themes, colors, and shapes."
			}
		}
	},
	args: {},
};

export const IconVariants: StoryObj = {
	render: renderComponent(IconVariantsExampleComponent),
	parameters: {
		docs: {
			description: {
				story: "Comprehensive showcase of all button icon variants across different themes, colors, and shapes."
			}
		}
	},
	args: {},
};

export const StrokedSecondary: StoryObj = {
	render: renderComponent(FktButtonComponent),
	parameters: {
		docs: {
			description: {
				story: "Buttons demonstrating different theme options with the same color for consistency."
			}
		}
	},
	args: {
		text: 'Secondary',
		theme: 'stroked',
		color: 'accent',
		disabled: false
	}
};

export const LongText: StoryObj = {
	render: renderComponent(FktButtonComponent),
	parameters: {
		docs: {
			description: {
				story: "Button with longer text content showing how the component handles text wrapping."
			}
		}
	},
	args: {
		text: 'This is a very long button text that demonstrates wrapping',
		theme: 'raised',
		color: 'primary',
		disabled: false
	}
};

export default meta;
