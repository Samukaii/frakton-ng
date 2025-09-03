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
	argTypes: {
		options: {
			control: 'object',
		},
	}
};

type Story = {
	args: Partial<FktComponentInputs<FktBadgeSelectorComponent<string>>> & Partial<FktComponentTwoWayBindings<FktBadgeSelectorComponent<string>>>
}

export const Preview: Story = {
	args: {
		options: [
			{
				id: "opt-1",
				color: "green",
				name: "Success"
			},
			{
				id: "opt-2",
				color: "red",
				name: "Cancelled"
			},
			{
				id: "opt-3",
				color: "blue",
				name: "Reserved"
			},
			{
				id: "opt-4",
				color: "orange",
				name: "Paused"
			},
		],
		currentBadgeId: 'opt-1' as any
	}
};

export const OrderStatus: StoryObj = {
	render: (args) => ({
		props: args,
		template: `<order-status-example></order-status-example>`
	}),
	args: {}
};

export const Priority: StoryObj = {
	render: (args) => ({
		props: args,
		template: `<priority-example></priority-example>`
	}),
	args: {}
};

export const ProjectStatus: Story = {
	args: {
		options: [
			{
				id: "planning",
				color: "blue",
				name: "Planning"
			},
			{
				id: "development",
				color: "orange",
				name: "Development"
			},
			{
				id: "testing",
				color: "orange",
				name: "Testing"
			},
			{
				id: "deployed",
				color: "green",
				name: "Deployed"
			},
			{
				id: "maintenance",
				color: "blue",
				name: "Maintenance"
			},
		],
		currentBadgeId: 'development' as any
	}
};

export const UserStatus: Story = {
	args: {
		options: [
			{
				id: "online",
				color: "green",
				name: "Online"
			},
			{
				id: "away",
				color: "orange",
				name: "Away"
			},
			{
				id: "busy",
				color: "red",
				name: "Busy"
			},
			{
				id: "offline",
				color: "blue",
				name: "Offline"
			},
		],
		currentBadgeId: 'online' as any
	}
};

export const TeamAssignment: Story = {
	args: {
		options: [
			{
				id: "frontend",
				color: "blue",
				name: "Frontend Team"
			},
			{
				id: "backend",
				color: "green",
				name: "Backend Team"
			},
			{
				id: "devops",
				color: "orange",
				name: "DevOps Team"
			},
			{
				id: "qa",
				color: "red",
				name: "QA Team"
			},
		],
		currentBadgeId: 'frontend' as any
	}
};

export const Category: Story = {
	args: {
		options: [
			{
				id: "electronics",
				color: "blue",
				name: "Electronics"
			},
			{
				id: "clothing",
				color: "green",
				name: "Clothing"
			},
			{
				id: "books",
				color: "orange",
				name: "Books"
			},
			{
				id: "home-garden",
				color: "red",
				name: "Home & Garden"
			},
		],
		currentBadgeId: 'electronics' as any
	}
};


export default meta;
