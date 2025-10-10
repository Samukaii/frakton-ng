import { Meta, StoryObj } from '@storybook/angular';
import { FktInputComponent, fktInputTransformers, fktInputTypes } from 'frakton-ng/input';
import {
	BasicExampleComponent,
	CurrencyExampleComponent,
	CustomFormattingExampleComponent,
	DisabledExampleComponent,
	EmailExampleComponent,
	HourExampleComponent,
	NumberExampleComponent,
	PasswordExampleComponent,
	PercentExampleComponent,
	SignupFormExampleComponent,
	SuffixExampleComponent
} from './examples';
import { customDocsControl } from '../../.storybook/decorators/custom-docs-control';
import { renderComponent } from '../../.storybook/decorators/render-component';
import designTokens from './fkt-input-design-tokens.json';

const meta: Meta<FktInputComponent> = {
	title: 'Components/Form/Input',
	component: FktInputComponent,
	parameters: {
		// options: {
		// 	showPanel: false,
		// 	bottomPanelHeight: 0
		// },
		// controls: {disable: true}
	},
	decorators: [
		customDocsControl({
			designTokens: designTokens as any
		}),
	],
	argTypes: {
		label: {
			control: 'text',
			description: 'Label text displayed above the input field',
			table: {
				category: 'Attributes',
				type: {summary: 'string'},
				defaultValue: {summary: "''"}
			}
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text shown when the input is empty',
			table: {
				category: 'Attributes',
				type: {summary: 'string'},
				defaultValue: {summary: "''"}
			}
		},
		type: {
			control: 'select',
			options: fktInputTypes,
			description: 'The type of input field determining its behavior and validation',
			table: {
				category: 'Attributes',
				type: {
					summary: 'FktInputType',
					detail: "import {FktInputType} from 'frakton-ng/input';"
				},
				defaultValue: {summary: "'text'"}
			}
		},
		formatter: {
			control: 'select',
			options: [...fktInputTransformers],
			description: 'Data transformer for automatic formatting of input values',
			table: {
				category: 'Attributes',
				type: {
					summary: 'FktInputTransformer',
					detail: "import {FktInputTransformer} from 'frakton-ng/input';"
				},
				defaultValue: {summary: 'undefined'}
			}
		},
		spellcheck: {
			control: 'boolean',
			description: 'Enable or disable spell checking for the input',
			table: {
				category: 'Attributes',
				type: {summary: 'boolean'},
				defaultValue: {summary: 'true'}
			}
		}
	}
};

type Story = StoryObj<FktInputComponent>;


export const BasicInput: Story = {
	render: renderComponent(BasicExampleComponent),
	args: {
		label: 'Full Name',
		placeholder: 'Enter your full name',
		type: 'text',
		spellcheck: true
	},
	parameters: {
		options: {
			showPanel: true,
		},
		docs: {
			description: {
				story: 'A basic text input field with label and placeholder text for general text entry.'
			}
		}
	}
};


export const PasswordField: Story = {
	render: renderComponent(PasswordExampleComponent),
	args: {
		label: 'Password',
		placeholder: 'Enter your password'
	},
	parameters: {
		docs: {
			description: {
				story: 'A password input field with show/hide toggle functionality. Click the eye icon to toggle password visibility.'
			}
		}
	}
};

export const EmailField: Story = {
	render: renderComponent(EmailExampleComponent),
	args: {
		label: 'Email Address',
		placeholder: 'Enter your email address'
	},
	parameters: {
		docs: {
			description: {
				story: 'An email input field optimized for email addresses with proper keyboard and validation support.'
			}
		}
	}
};


export const NumericField: Story = {
	render: renderComponent(NumberExampleComponent),
	args: {
		label: 'Age',
		placeholder: 'Enter your age'
	},
	parameters: {
		docs: {
			description: {
				story: 'A numeric input that only accepts numbers and shows numeric keypad on mobile devices.'
			}
		}
	}
};


export const CurrencyTransformer: Story = {
	render: renderComponent(CurrencyExampleComponent),
	args: {
		label: 'Product Price',
		placeholder: '0.00'
	},
	parameters: {
		docs: {
			description: {
				story: 'Input with currency transformer that automatically formats values as currency (e.g., $1,234.56).'
			}
		}
	}
};


export const PercentTransformer: Story = {
	render: renderComponent(PercentExampleComponent),
	args: {
		label: 'Completion Rate',
		placeholder: 'Enter percentage'
	},
	parameters: {
		docs: {
			description: {
				story: 'Input with percentage transformer that automatically formats values as percentages (e.g., 45.5%).'
			}
		}
	}
};


export const HourTransformer: Story = {
	render: renderComponent(HourExampleComponent),
	args: {
		label: 'Work Duration',
		placeholder: 'Enter time duration'
	},
	parameters: {
		docs: {
			description: {
				story: 'Input with hour transformer that formats time values as duration (e.g., 8h 30m).'
			}
		}
	}
};


export const CustomFormatting: Story = {
	render: renderComponent(CustomFormattingExampleComponent),
	args: {
		label: 'CPF (Required)',
		placeholder: 'Enter your CPF',
	},
	parameters: {
		docs: {
			description: {
				story: 'Input with custom formatting showing error states and validation feedback in real-time.'
			}
		}
	}
};


export const DisabledState: Story = {
	render: renderComponent(DisabledExampleComponent),
	args: {
		label: 'Disabled Field',
		placeholder: 'This field is disabled'
	},
	parameters: {
		docs: {
			description: {
				story: 'Input in disabled state that cannot be edited and shows visual disabled feedback.'
			}
		}
	}
};


export const WithCustomSuffix: Story = {
	render: renderComponent(SuffixExampleComponent),
	args: {
		label: 'Search Products',
		placeholder: 'Search products...'
	},
	parameters: {
		docs: {
			description: {
				story: 'Input with custom suffix content (buttons, icons, text) using content projection.'
			}
		}
	}
};


export const Signup: Story = {
	render: renderComponent(SignupFormExampleComponent),
	args: {},
	parameters: {
		docs: {
			description: {
				story: 'A simple signup example with name, email, password and password confirmation fields'
			}
		}
	}
};

export default meta;
