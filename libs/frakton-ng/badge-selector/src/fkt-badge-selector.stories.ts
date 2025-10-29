import type { Meta, StoryObj } from '@storybook/angular';
import { FktBadgeSelectorComponent } from 'frakton-ng/badge-selector';
import { OrderStatusExampleComponent, PriorityExampleComponent } from './examples';
import { fktStoryRenderer } from '../../.storybook/decorators/fkt-story-renderer';
import { renderComponent } from '../../.storybook/decorators/render-component';
import designTokens from './fkt-badge-selector-design-tokens.json';

const meta: Meta<FktBadgeSelectorComponent<string>> = {
	title: 'Components/Form/Badge selector',
	component: FktBadgeSelectorComponent,
	decorators: [
		fktStoryRenderer({
			designTokens: designTokens as any
		}),
	],
	argTypes: {
		options: {
			control: 'object',
			options: [],
			description: "Array of badge options to display in the selector",
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
		value: {
			control: 'text',
			description: "Currently selected badge ID with two-way binding",
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

export const Preview: StoryObj = {
	render: renderComponent(FktBadgeSelectorComponent),
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
		value: 'opt-1' as any
	}
};

export const OrderStatus: StoryObj = {
	render: renderComponent(OrderStatusExampleComponent),
	parameters: {
		docs: {
			description: {
				story: "Badge selector for managing order status with multiple workflow states."
			}
		}
	},
	args: {
		options: [
			{id: "pending", color: "warning", name: "Pending"},
			{id: "processing", color: "info", name: "Processing"},
			{id: "shipped", color: "info", name: "Shipped"},
			{id: "delivered", color: "success", name: "Delivered"},
			{id: "cancelled", color: "danger", name: "Cancelled"}
		],
		value: 'processing',
	}
};

export const Priority: StoryObj = {
	render: renderComponent(PriorityExampleComponent),
	parameters: {
		docs: {
			description: {
				story: "Badge selector for task or issue priority levels with visual hierarchy."
			}
		}
	},
	args: {
		options: [
			{id: "low", color: "success", name: "Low"},
			{id: "medium", color: "warning", name: "Medium"},
			{id: "high", color: "danger", name: "High"},
			{id: "critical", color: "danger", name: "Critical"}
		],
		value: 'medium',
	}
};


export const ProjectStatus: StoryObj = {
	render: renderComponent(FktBadgeSelectorComponent),
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
			{ id: "planning", color: "info", name: "Planning" },
			{ id: "development", color: "warning", name: "Development" },
			{ id: "testing", color: "warning", name: "Testing" },
			{ id: "deployed", color: "success", name: "Deployed" },
			{ id: "maintenance", color: "info", name: "Maintenance" },
		],
		value: 'development' as any
	}
};

export const UserStatus: StoryObj = {
	render: renderComponent(FktBadgeSelectorComponent),
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
			{ id: "online", color: "success", name: "Online" },
			{ id: "away", color: "warning", name: "Away" },
			{ id: "busy", color: "danger", name: "Busy" },
			{ id: "offline", color: "info", name: "Offline" },
		],
		value: 'online' as any
	}
};

export const TeamAssignment: StoryObj = {
	render: renderComponent(FktBadgeSelectorComponent),
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
			{ id: "frontend", color: "info", name: "Frontend Team" },
			{ id: "backend", color: "success", name: "Backend Team" },
			{ id: "devops", color: "warning", name: "DevOps Team" },
			{ id: "qa", color: "danger", name: "QA Team" },
		],
		value: 'frontend' as any
	}
};

export const Category: StoryObj = {
	render: renderComponent(FktBadgeSelectorComponent),
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
			{ id: "electronics", color: "info", name: "Electronics" },
			{ id: "clothing", color: "success", name: "Clothing" },
			{ id: "books", color: "warning", name: "Books" },
			{ id: "home-garden", color: "danger", name: "Home & Garden" },
		],
		value: 'electronics' as any
	}
};

export default meta;
