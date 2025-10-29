import type { Meta, StoryObj } from '@storybook/angular';
import { fktBadgeColors, FktBadgeComponent, fktBadgeVariants } from 'frakton-ng/badge';
import { fktStoryRenderer } from '../../.storybook/decorators/fkt-story-renderer';
import { renderComponent } from '../../.storybook/decorators/render-component';
import { Component } from '@angular/core';
import designTokens from './fkt-badge-design-tokens.json';

const meta: Meta<FktBadgeComponent> = {
	title: 'Components/Data display/Badge',
	component: FktBadgeComponent,
	decorators: [
		fktStoryRenderer({
			designTokens: designTokens as any
		})
	],
	argTypes: {
		text: {
			control: 'text',
			description: "The text content to display in the badge",
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
		variant: {
			control: 'select',
			options: fktBadgeVariants,
			description: "The visual variant of the badge",
			table: {
				category: "Attributes",
				type: {
					summary: 'FktBadgeVariant',
					detail: `import {FktBadgeVariant} from 'frakton-ng/badge';`
				},
				defaultValue: {
					summary: "opaque",
				},
			},
		},
		color: {
			control: 'select',
			options: fktBadgeColors,
			description: "The color theme of the badge",
			type: {
				name: "object",
				value: {},
				required: true
			},
			table: {
				category: "Attributes",
				type: {
					summary: 'FktBadgeColor',
					detail: `import {FktBadgeColor} from 'frakton-ng/badge';`
				},
			},
		},
	}
};

type Story = StoryObj<FktBadgeComponent>


export const SuccessBadge: Story = {
	render: renderComponent(FktBadgeComponent),
	parameters: {
		docs: {
			description: {
				story: "A standard badge with success state and opaque styling, perfect for status indicators."
			}
		}
	},
	args: {
		text: 'Success',
		color: 'success',
		variant: 'opaque',
	}
};

export const ErrorBadge: Story = {
	render: renderComponent(FktBadgeComponent),
	parameters: {
		docs: {
			description: {
				story: "Badge showing error state with red color for urgent attention."
			}
		}
	},
	args: {
		text: 'Error',
		color: 'danger',
		variant: 'opaque',
	}
};

export const WarningBadge: Story = {
	render: renderComponent(FktBadgeComponent),
	parameters: {
		docs: {
			description: {
				story: "Badge with orange color for warnings and pending states that need attention."
			}
		}
	},
	args: {
		text: 'Warning',
		color: 'warning',
		variant: 'opaque',
	}
};


export const InfoBadge: Story = {
	render: renderComponent(FktBadgeComponent),
	parameters: {
		docs: {
			description: {
				story: "Badge with blue color for informational content and faded variant for subtle display."
			}
		}
	},
	args: {
		text: 'Info',
		color: 'info',
		variant: 'faded',
	}
};

@Component({
	imports: [
		FktBadgeComponent
	],
	styles: `
		.container {
			display: flex;
			flex-direction: column;
			gap: var(--fkt-space-md);
		}

		.container__item {
			display: flex;
			flex-direction: column;
			gap: var(--fkt-space-xs);
		}

		.container__item h2 {
			font-size: var(--fkt-font-size-lg);
			font-weight: var(--fkt-font-semibold);
			border-bottom: solid 1px var(--fkt-color-neutral-200);
			padding-bottom: var(--fkt-space-3xs);
		}

		.container__item > div {
			display: flex;
			align-items: center;
			gap: var(--fkt-space-xs);
			flex-wrap: wrap;
		}
	`,
	template: `
		<div class="container">
			<div class="container__item">
				<h2>Opaque Variant</h2>
				<div>
					<fkt-badge text="Success" color="success" variant="opaque"/>
					<fkt-badge text="Danger" color="danger" variant="opaque"/>
					<fkt-badge text="Info" color="info" variant="opaque"/>
					<fkt-badge text="Warning" color="warning" variant="opaque"/>
				</div>
			</div>
			<div class="container__item">
				<h2>Faded Variant</h2>
				<div>
					<fkt-badge text="Success" color="success" variant="faded"/>
					<fkt-badge text="Danger" color="danger" variant="faded"/>
					<fkt-badge text="Info" color="info" variant="faded"/>
					<fkt-badge text="Warning" color="warning" variant="faded"/>
				</div>
			</div>
		</div>
	`
})
class BadgeVariationsComponent {

}


export const BadgeVariations: StoryObj = {
	render: renderComponent(BadgeVariationsComponent),
	parameters: {
		docs: {
			description: {
				story: "Comprehensive showcase of all available colors and variants, demonstrating the full range of badge styling options."
			}
		}
	},
};

export const CountBadge: Story = {
	render: renderComponent(FktBadgeComponent),
	parameters: {
		docs: {
			description: {
				story: "Numerical badges perfect for displaying counts, quantities, and numbers."
			}
		}
	},
	args: {
		text: '5',
		color: 'info',
		variant: 'opaque',
	}
};

export const StatusBadge: Story = {
	render: renderComponent(FktBadgeComponent),
	parameters: {
		docs: {
			moduleImportName: "badge",
			description: {
				story: "Status indicators for workflow states, item conditions, and process stages."
			}
		}
	},
	args: {
		text: 'Online',
		color: 'success',
		variant: 'opaque',
	}
};

export const PriorityBadge: Story = {
	render: renderComponent(FktBadgeComponent),
	parameters: {
		docs: {
			description: {
				story: "Priority indicators for tasks, issues, and items requiring attention levels."
			}
		}
	},
	args: {
		text: 'High Priority',
		color: 'danger',
		variant: 'opaque',
	}
};

export const CategoryBadge: Story = {
	render: renderComponent(FktBadgeComponent),
	parameters: {
		docs: {
			description: {
				story: "Category and classification badges for organizing and labeling content."
			}
		}
	},
	args: {
		text: 'Electronics',
		color: 'info',
		variant: 'faded',
	}
};

export const LongTextBadge: Story = {
	render: renderComponent(FktBadgeComponent),
	parameters: {
		docs: {
			description: {
				story: "Badges with longer text content demonstrating text handling and wrapping."
			}
		}
	},
	args: {
		text: 'Very Long Category Name',
		color: 'info',
		variant: 'faded',
	}
};


export default meta;
