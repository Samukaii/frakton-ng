import type { Meta, StoryObj } from '@storybook/angular';
import { fktBadgeColors, FktBadgeComponent, fktBadgeVariants } from 'frakton-ng/badge';

const meta: Meta<FktBadgeComponent> = {
	title: 'Components/Badge',
	component: FktBadgeComponent,
	parameters: {
		layout: "centered",
	},
	argTypes: {
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
		variant: {
			control: 'select',
			options: fktBadgeVariants,
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
	parameters: {
		docs: {
			description: {
				story: "A standard badge with success state and opaque styling, perfect for status indicators."
			}
		}
	},
	args: {
		text: 'Success',
		color: 'green',
		variant: 'opaque',
	}
};

export const ErrorBadge: Story = {
	parameters: {
		docs: {
			description: {
				story: "Badge showing error state with red color for urgent attention."
			}
		}
	},
	args: {
		text: 'Error',
		color: 'red',
		variant: 'opaque',
	}
};

export const WarningBadge: Story = {
	parameters: {
		docs: {
			description: {
				story: "Badge with orange color for warnings and pending states that need attention."
			}
		}
	},
	args: {
		text: 'Warning',
		color: 'orange',
		variant: 'opaque',
	}
};


export const InfoBadge: Story = {
	parameters: {
		docs: {
			description: {
				story: "Badge with blue color for informational content and faded variant for subtle display."
			}
		}
	},
	args: {
		text: 'Info',
		color: 'blue',
		variant: 'faded',
	}
};


export const BadgeVariations: StoryObj = {
	parameters: {
		docs: {
			description: {
				story: "Comprehensive showcase of all available colors and variants, demonstrating the full range of badge styling options."
			}
		}
	},
	render: (args) => ({
		props: args,
		styles: [`
			.container {
				display: flex;
				flex-direction: column;
				gap: var(--space-md);
			}

			.container__item {
				display: flex;
				flex-direction: column;
				gap: var(--space-xs);
			}

			.container__item h2 {
				font-size: var(--font-size-lg);
				font-weight: var(--font-semibold);
				border-bottom: solid 1px var(--color-gray-200);
				padding-bottom: var(--space-3xs);
			}

			.container__item > div {
				display: flex;
				align-items: center;
				gap: var(--space-xs);
				flex-wrap: wrap;
			}
		`],
		template: `
			<div class="container">
				<div class="container__item">
					<h2>Opaque Variant</h2>
					<div>
						<fkt-badge text="Green" [color]="color" variant="opaque" />
						<fkt-badge text="Red" color="red" variant="opaque" />
						<fkt-badge text="Blue" color="blue" variant="opaque" />
						<fkt-badge text="Orange" color="orange" variant="opaque" />
					</div>
				</div>
				<div class="container__item">
					<h2>Faded Variant</h2>
					<div>
						<fkt-badge text="Green" color="green" variant="faded" />
						<fkt-badge text="Red" color="red" variant="faded" />
						<fkt-badge text="Blue" color="blue" variant="faded" />
						<fkt-badge text="Orange" color="orange" variant="faded" />
					</div>
				</div>
			</div>
		`
	}),
	args: {
		color: "blue"
	}
};

export const CountBadge: Story = {
	parameters: {
		docs: {
			description: {
				story: "Numerical badges perfect for displaying counts, quantities, and numbers."
			}
		}
	},
	args: {
		text: '5',
		color: 'blue',
		variant: 'opaque',
	}
};

export const StatusBadge: Story = {
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
		color: 'green',
		variant: 'opaque',
	}
};

export const PriorityBadge: Story = {
	parameters: {
		docs: {
			description: {
				story: "Priority indicators for tasks, issues, and items requiring attention levels."
			}
		}
	},
	args: {
		text: 'High Priority',
		color: 'red',
		variant: 'opaque',
	}
};

export const CategoryBadge: Story = {
	parameters: {
		docs: {
			description: {
				story: "Category and classification badges for organizing and labeling content."
			}
		}
	},
	args: {
		text: 'Electronics',
		color: 'blue',
		variant: 'faded',
	}
};

export const LongTextBadge: Story = {
	parameters: {
		docs: {
			description: {
				story: "Badges with longer text content demonstrating text handling and wrapping."
			}
		}
	},
	args: {
		text: 'Very Long Category Name',
		color: 'blue',
		variant: 'faded',
	}
};


export default meta;
