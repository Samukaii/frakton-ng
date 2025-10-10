import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FktComponentInputs, FktComponentTwoWayBindings } from 'frakton-ng/internal/types';
import { FktBadgeSelectorComponent } from 'frakton-ng/badge-selector';
import { OrderStatusExampleComponent, PriorityExampleComponent } from './examples';

const meta: Meta<FktBadgeSelectorComponent<string>> = {
	title: 'Components/Badge selector',
	component: FktBadgeSelectorComponent,
	decorators: [
		moduleMetadata({
			imports: [OrderStatusExampleComponent, PriorityExampleComponent]
		})
	],
	parameters: {
		layout: "centered"
	},
	argTypes: {
		options: {
			control: 'object',
			options: [],
			type: {
				name: "array",
				value: {name: "object", value: {}},
				required: true
			},
			table: {
				category: "Attributes",
				type: {
					detail: "import {FktBadge} from 'frakton-ng/badge-selector'",
					summary: 'FktBadge<T>[]',
				},
				defaultValue: {
					summary: "[]",
				},
			},
		},
		currentBadgeId: {
			control: 'object',
			table: {
				category: "Attributes",
				type: {
					summary: 'T',
				},
				defaultValue: {
					summary: "undefined",
				},
			},
		}
	}
};

type Story = {
	args: Partial<FktComponentInputs<FktBadgeSelectorComponent<string>>> & Partial<FktComponentTwoWayBindings<FktBadgeSelectorComponent<string>>>
}

export const Preview: StoryObj = {
	parameters: {
		docs: {
			description: {
				story: "Interactive badge selector with predefined status options. Click to open dropdown and select an option."
			}
		}
	},
	args: {
		options: [
			{
				id: "opt-1",
				color: "success",
				name: "Success"
			},
			{
				id: "opt-2",
				color: "danger",
				name: "Cancelled"
			},
			{
				id: "opt-3",
				color: "info",
				name: "Reserved"
			},
			{
				id: "opt-4",
				color: "warning",
				name: "Paused"
			},
		],
		currentBadgeId: 'opt-1' as any
	}
};

export const OrderStatus: StoryObj = {
	parameters: {
		docs: {
			description: {
				story: "Badge selector for managing order status with multiple workflow states."
			}
		}
	},
	render: (args) => ({
		props: args,
		template: `<order-status-example [options]="options" [(currentBadgeId)]="currentBadgeId"></order-status-example>`
	}),
	args: {
		options: [
			{id: "pending", color: "warning", name: "Pending"},
			{id: "processing", color: "info", name: "Processing"},
			{id: "shipped", color: "info", name: "Shipped"},
			{id: "delivered", color: "success", name: "Delivered"},
			{id: "cancelled", color: "danger", name: "Cancelled"}
		],
		currentBadgeId: 'processing',
	}
};

export const Priority: StoryObj = {
	parameters: {
		docs: {
			description: {
				story: "Badge selector for task or issue priority levels with visual hierarchy."
			}
		}
	},
	render: (args) => ({
		props: args,
		template: `<priority-example [options]="options" [(currentBadgeId)]="currentBadgeId"></priority-example>`
	}),
	args: {
		options: [
			{id: "low", color: "success", name: "Low"},
			{id: "medium", color: "warning", name: "Medium"},
			{id: "high", color: "danger", name: "High"},
			{id: "critical", color: "danger", name: "Critical"}
		],
		currentBadgeId: 'medium',
	}
};


export const ProjectStatus: StoryObj = {
	parameters: {
		docs: {
			description: {
				story: `Displays the status of a project using colored badges for each phase.
Use this example for dashboards, kanbans or project summary views where it's important to visualize the current stage—like Planning, Development, Testing, Deployment, or Maintenance—at a glance.`
			}
		}
	},
	args: {
		options: [
			{ id: "planning", color: "blue", name: "Planning" },
			{ id: "development", color: "orange", name: "Development" },
			{ id: "testing", color: "orange", name: "Testing" },
			{ id: "deployed", color: "green", name: "Deployed" },
			{ id: "maintenance", color: "blue", name: "Maintenance" },
		],
		currentBadgeId: 'development' as any
	}
};

export const UserStatus: StoryObj = {
	parameters: {
		docs: {
			description: {
				story: `Represents the status of a user with classic availability badges (Online, Away, Busy, Offline).
This is useful in chat apps, team dashboards, or any context where you want to provide a quick visual cue of user presence.`
			}
		}
	},
	args: {
		options: [
			{ id: "online", color: "green", name: "Online" },
			{ id: "away", color: "orange", name: "Away" },
			{ id: "busy", color: "red", name: "Busy" },
			{ id: "offline", color: "blue", name: "Offline" },
		],
		currentBadgeId: 'online' as any
	}
};

export const TeamAssignment: StoryObj = {
	parameters: {
		docs: {
			description: {
				story: `Showcases different team assignments using distinctive badge colors.
Handy for project management tools, HR apps, or anywhere you want to display team allocation or filter by squads (Frontend, Backend, DevOps, QA, etc).`
			}
		}
	},
	args: {
		options: [
			{ id: "frontend", color: "blue", name: "Frontend Team" },
			{ id: "backend", color: "green", name: "Backend Team" },
			{ id: "devops", color: "orange", name: "DevOps Team" },
			{ id: "qa", color: "red", name: "QA Team" },
		],
		currentBadgeId: 'frontend' as any
	}
};

export const Category: StoryObj = {
	parameters: {
		docs: {
			description: {
				story: `Demonstrates badges for product or content categories, with different colors for each segment.
Use this pattern for e-commerce, content tagging, search filters, or any interface that organizes information by category (Electronics, Clothing, Books, Home & Garden, etc).`
			}
		}
	},
	args: {
		options: [
			{ id: "electronics", color: "blue", name: "Electronics" },
			{ id: "clothing", color: "green", name: "Clothing" },
			{ id: "books", color: "orange", name: "Books" },
			{ id: "home-garden", color: "red", name: "Home & Garden" },
		],
		currentBadgeId: 'electronics' as any
	}
};

export default meta;
