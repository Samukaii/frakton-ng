import { FktBadgeSelectorComponent } from 'frakton-ng/badge-selector';
import { OrderStatusExampleComponent, PriorityExampleComponent } from './examples';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-badge-selector.docs.md' with { loader: "text" };

const meta: Meta = {
	title: "Components/Form/Badge Selector",
	component: FktBadgeSelectorComponent,
    description: "The FktBadgeSelector component provides an interactive dropdown for selecting from a list of badge options. Built with Angular signals and the overlay system, it offers a clean interface for choosing status, categories, or other badge-represented values.",
	documentation,
	argTypes: {
		options: {
			control: 'object',
			category: "Attributes",
			type: 'FktBadge<T>[]',
			import: "import {FktBadge} from 'frakton-ng/badge-selector'",
			defaultValue: "[]",
			description: "Array of badge options to display in the selector"
		},
		value: {
			control: 'text',
			category: "Attributes",
			type: 'T',
			defaultValue: "undefined",
			description: "Currently selected badge ID with two-way binding"
		}
	}
}

export const Preview: Story<FktBadgeSelectorComponent<string>> = {
	description: "Interactive badge selector with predefined status options. Click to open dropdown and select an option.",
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
		value: 'opt-1'
	}
};

export const OrderStatus: Story<OrderStatusExampleComponent> = {
	component: OrderStatusExampleComponent,
	description: "Badge selector for managing order status with multiple workflow states.",
	args: {
		options: [
			{id: "pending", color: "warning", name: "Pending"},
			{id: "processing", color: "info", name: "Processing"},
			{id: "shipped", color: "info", name: "Shipped"},
			{id: "delivered", color: "success", name: "Delivered"},
			{id: "cancelled", color: "danger", name: "Cancelled"}
		],
		value: 'processing'
	}
};

export const Priority: Story<PriorityExampleComponent> = {
	component: PriorityExampleComponent,
	description: "Badge selector for task or issue priority levels with visual hierarchy.",
	args: {
		options: [
			{id: "low", color: "success", name: "Low"},
			{id: "medium", color: "warning", name: "Medium"},
			{id: "high", color: "danger", name: "High"},
			{id: "critical", color: "danger", name: "Critical"}
		],
		value: 'medium'
	}
};

export const ProjectStatus: Story<FktBadgeSelectorComponent<string>> = {
	description: "Displays the status of a project using colored badges for each phase. Use this example for dashboards, kanbans or project summary views.",
	args: {
		options: [
			{ id: "planning", color: "info", name: "Planning" },
			{ id: "development", color: "warning", name: "Development" },
			{ id: "testing", color: "warning", name: "Testing" },
			{ id: "deployed", color: "success", name: "Deployed" },
			{ id: "maintenance", color: "info", name: "Maintenance" },
		],
		value: 'development'
	}
};

export const UserStatus: Story<FktBadgeSelectorComponent<string>> = {
	description: "Represents the status of a user with classic availability badges (Online, Away, Busy, Offline). Useful in chat apps, team dashboards, or user presence indicators.",
	args: {
		options: [
			{ id: "online", color: "success", name: "Online" },
			{ id: "away", color: "warning", name: "Away" },
			{ id: "busy", color: "danger", name: "Busy" },
			{ id: "offline", color: "info", name: "Offline" },
		],
		value: 'online'
	}
};

export const TeamAssignment: Story<FktBadgeSelectorComponent<string>> = {
	description: "Showcases different team assignments using distinctive badge colors. Handy for project management tools, HR apps, or team allocation displays.",
	args: {
		options: [
			{ id: "frontend", color: "info", name: "Frontend Team" },
			{ id: "backend", color: "success", name: "Backend Team" },
			{ id: "devops", color: "warning", name: "DevOps Team" },
			{ id: "qa", color: "danger", name: "QA Team" },
		],
		value: 'frontend'
	}
};

export const Category: Story<FktBadgeSelectorComponent<string>> = {
	description: "Demonstrates badges for product or content categories. Use this pattern for e-commerce, content tagging, search filters, or any interface that organizes information by category.",
	args: {
		options: [
			{ id: "electronics", color: "info", name: "Electronics" },
			{ id: "clothing", color: "success", name: "Clothing" },
			{ id: "books", color: "warning", name: "Books" },
			{ id: "home-garden", color: "danger", name: "Home & Garden" },
		],
		value: 'electronics'
	}
};

export default meta;
