import type { Meta, StoryObj } from '@storybook/angular';
import { FktButtonComponent, fktButtonIconPosition, FktButtonIconPosition } from 'frakton-ng/button';
import { FktComponentInputs } from 'frakton-ng/internal/types';
import { fktColors } from 'frakton-ng/core';
import { fktButtonThemes, fktButtonVariants } from 'frakton-ng/button';
import { fontIconNames } from 'frakton-ng/icon';
import { JsonPipe } from '@angular/common';

const meta: Meta<FktButtonComponent> = {
	title: 'Components/Button',
	component: FktButtonComponent,
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
		variant: {
			control: 'select',
			options: fktButtonVariants,
			table: {
				category: "Attributes",
				type: {
					summary: 'FktButtonVariant',
					detail: "import {FktButtonVariant} from 'frakton-ng/button'",
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
	parameters: {
		docs: {
			description: {
				story: "Rectangular icon button with standard padding, perfect for data table actions."
			}
		}
	},
	args: {
		icon: 'trash',
		variant: 'rect',
		theme: 'basic',
		color: 'red',
		disabled: false
	}
};

export const Loading: StoryObj = {
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
		color: 'green',
		disabled: false
	}
};

export const TextVariants: StoryObj = {
	render: (args) => ({
		props: args,
		template: `
      <div class="demo-variants">
        <div class="demo-variants__column">
          <h2 class="demo-variants__title">Rounded</h2>
          <div class="demo-variants__row">
            <strong class="demo-variants__label">Raised</strong>
            <fkt-button class="demo-variants__button" variant="rounded" text="Primary" theme="raised" color="primary"/>
            <fkt-button class="demo-variants__button" variant="rounded" text="Green" theme="raised" color="green"/>
            <fkt-button class="demo-variants__button" variant="rounded" text="Red" theme="raised" color="red"/>
            <fkt-button class="demo-variants__button" variant="rounded" text="Yellow" theme="raised" color="yellow"/>
          </div>
          <div class="demo-variants__row">
            <strong class="demo-variants__label">Stroked</strong>
            <fkt-button class="demo-variants__button" variant="rounded" text="Primary" theme="stroked" color="primary"/>
            <fkt-button class="demo-variants__button" variant="rounded" text="Green" theme="stroked" color="green"/>
            <fkt-button class="demo-variants__button" variant="rounded" text="Red" theme="stroked" color="red"/>
            <fkt-button class="demo-variants__button" variant="rounded" text="Yellow" theme="stroked" color="yellow"/>
          </div>
          <div class="demo-variants__row">
            <strong class="demo-variants__label">Basic</strong>
            <fkt-button class="demo-variants__button" variant="rounded" text="Primary" theme="basic" color="primary"/>
            <fkt-button class="demo-variants__button" variant="rounded" text="Green" theme="basic" color="green"/>
            <fkt-button class="demo-variants__button" variant="rounded" text="Red" theme="basic" color="red"/>
            <fkt-button class="demo-variants__button" variant="rounded" text="Yellow" theme="basic" color="yellow"/>
          </div>
        </div>
        <div class="demo-variants__column">
          <h2 class="demo-variants__title">Rect</h2>
          <div class="demo-variants__row">
            <strong class="demo-variants__label">Raised</strong>
            <fkt-button class="demo-variants__button" variant="rect" text="Primary" theme="raised" color="primary"/>
            <fkt-button class="demo-variants__button" variant="rect" text="Green" theme="raised" color="green"/>
            <fkt-button class="demo-variants__button" variant="rect" text="Red" theme="raised" color="red"/>
            <fkt-button class="demo-variants__button" variant="rect" text="Yellow" theme="raised" color="yellow"/>
          </div>
          <div class="demo-variants__row">
            <strong class="demo-variants__label">Stroked</strong>
            <fkt-button class="demo-variants__button" variant="rect" text="Primary" theme="stroked" color="primary"/>
            <fkt-button class="demo-variants__button" variant="rect" text="Green" theme="stroked" color="green"/>
            <fkt-button class="demo-variants__button" variant="rect" text="Red" theme="stroked" color="red"/>
            <fkt-button class="demo-variants__button" variant="rect" text="Yellow" theme="stroked" color="yellow"/>
          </div>
          <div class="demo-variants__row">
            <strong class="demo-variants__label">Basic</strong>
            <fkt-button class="demo-variants__button" variant="rect" text="Primary" theme="basic" color="primary"/>
            <fkt-button class="demo-variants__button" variant="rect" text="Green" theme="basic" color="green"/>
            <fkt-button class="demo-variants__button" variant="rect" text="Red" theme="basic" color="red"/>
            <fkt-button class="demo-variants__button" variant="rect" text="Yellow" theme="basic" color="yellow"/>
          </div>
        </div>
      </div>
    `,
		styles: [`
      .demo-variants {
        display: flex;
        gap: var(--space-2xl);
        justify-content: flex-start;
        align-items: flex-start;
        padding: var(--space-md) 0;
      }
      .demo-variants__column {
        display: flex;
        flex-direction: column;
        gap: var(--space-xl);
        min-width: 300px;
      }
      .demo-variants__title {
        font-size: var(--font-size-xl);
        font-weight: var(--font-semibold);
        text-align: center;
        border-bottom: 2px solid #e5e7eb;
        margin-bottom: var(--space-sm);
        padding-bottom: var(--space-3xs);
        letter-spacing: 0.02em;
      }
      .demo-variants__row {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        margin-bottom: 0;
      }
      .demo-variants__label {
        font-weight: var(--font-semibold);
        min-width: 60px;
        display: inline-block;
      }
      .demo-variants__button {
        font-size: var(--font-size-md);
        white-space: nowrap;
      }
    `]
	}),
	args: {},
};

export const IconVariants: StoryObj = {
	render: (args) => ({
		props: args,
		template: `
      <div class="demo-variants">
        <div class="demo-variants__column">
          <h2 class="demo-variants__title">Rounded</h2>
          <div class="demo-variants__row">
            <strong class="demo-variants__label">Raised</strong>
            <fkt-button class="demo-variants__button" variant="rounded" icon="plus" theme="raised" color="primary"/>
            <fkt-button class="demo-variants__button" variant="rounded" icon="plus" theme="raised" color="green"/>
            <fkt-button class="demo-variants__button" variant="rounded" icon="plus" theme="raised" color="red"/>
            <fkt-button class="demo-variants__button" variant="rounded" icon="plus" theme="raised" color="yellow"/>
          </div>
          <div class="demo-variants__row">
            <strong class="demo-variants__label">Stroked</strong>
            <fkt-button class="demo-variants__button" variant="rounded" icon="plus" theme="stroked" color="primary"/>
            <fkt-button class="demo-variants__button" variant="rounded" icon="plus" theme="stroked" color="green"/>
            <fkt-button class="demo-variants__button" variant="rounded" icon="plus" theme="stroked" color="red"/>
            <fkt-button class="demo-variants__button" variant="rounded" icon="plus" theme="stroked" color="yellow"/>
          </div>
          <div class="demo-variants__row">
            <strong class="demo-variants__label">Basic</strong>
            <fkt-button class="demo-variants__button" variant="rounded" icon="plus" theme="basic" color="primary"/>
            <fkt-button class="demo-variants__button" variant="rounded" icon="plus" theme="basic" color="green"/>
            <fkt-button class="demo-variants__button" variant="rounded" icon="plus" theme="basic" color="red"/>
            <fkt-button class="demo-variants__button" variant="rounded" icon="plus" theme="basic" color="yellow"/>
          </div>
        </div>
        <div class="demo-variants__column">
          <h2 class="demo-variants__title">Rect</h2>
          <div class="demo-variants__row">
            <strong class="demo-variants__label">Raised</strong>
            <fkt-button class="demo-variants__button" variant="rect" icon="plus" theme="raised" color="primary"/>
            <fkt-button class="demo-variants__button" variant="rect" icon="plus" theme="raised" color="green"/>
            <fkt-button class="demo-variants__button" variant="rect" icon="plus" theme="raised" color="red"/>
            <fkt-button class="demo-variants__button" variant="rect" icon="plus" theme="raised" color="yellow"/>
          </div>
          <div class="demo-variants__row">
            <strong class="demo-variants__label">Stroked</strong>
            <fkt-button class="demo-variants__button" variant="rect" icon="plus" theme="stroked" color="primary"/>
            <fkt-button class="demo-variants__button" variant="rect" icon="plus" theme="stroked" color="green"/>
            <fkt-button class="demo-variants__button" variant="rect" icon="plus" theme="stroked" color="red"/>
            <fkt-button class="demo-variants__button" variant="rect" icon="plus" theme="stroked" color="yellow"/>
          </div>
          <div class="demo-variants__row">
            <strong class="demo-variants__label">Basic</strong>
            <fkt-button class="demo-variants__button" variant="rect" icon="plus" theme="basic" color="primary"/>
            <fkt-button class="demo-variants__button" variant="rect" icon="plus" theme="basic" color="green"/>
            <fkt-button class="demo-variants__button" variant="rect" icon="plus" theme="basic" color="red"/>
            <fkt-button class="demo-variants__button" variant="rect" icon="plus" theme="basic" color="yellow"/>
          </div>
        </div>
      </div>
    `,
		styles: [`
      .demo-variants {
        display: flex;
        gap: var(--space-2xl);
        justify-content: flex-start;
        align-items: flex-start;
        padding: var(--space-md) 0;
      }
      .demo-variants__column {
        display: flex;
        flex-direction: column;
        gap: var(--space-xl);
        min-width: 300px;
      }
      .demo-variants__title {
        font-size: var(--font-size-xl);
        font-weight: var(--font-semibold);
        text-align: center;
        border-bottom: 2px solid #e5e7eb;
        margin-bottom: var(--space-sm);
        padding-bottom: var(--space-3xs);
        letter-spacing: 0.02em;
      }
      .demo-variants__row {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        margin-bottom: 0;
      }
      .demo-variants__label {
        font-weight: var(--font-semibold);
        min-width: 60px;
        display: inline-block;
      }
      .demo-variants__button {
        min-width: 85px;
        font-size: var(--font-size-md);
        white-space: nowrap;
      }
    `]
	}),
	args: {},
};

export const StrokedSecondary: StoryObj = {
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
		color: 'yellow',
		disabled: false
	}
};

export const LongText: StoryObj = {
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
