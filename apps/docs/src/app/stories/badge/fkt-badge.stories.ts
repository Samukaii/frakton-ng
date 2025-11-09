import { fktBadgeColors, FktBadgeComponent, fktBadgeVariants } from 'frakton-ng/badge';
import { BadgeVariationsExampleComponent } from './examples';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-badge.docs.md' with { loader: "text" };

const meta: Meta = {
	title: "Components/Data Display/Badge",
	component: FktBadgeComponent,
	documentation,
	argTypes: {
		text: {
			control: 'text',
			category: "Attributes",
			type: 'string',
			defaultValue: "''",
			description: "The text content to display in the badge"
		},
		variant: {
			control: 'select',
			category: "Attributes",
			type: 'FktBadgeVariant',
			options: fktBadgeVariants,
			import: "import {FktBadgeVariant} from 'frakton-ng/badge'",
			defaultValue: "opaque",
			description: "The visual variant of the badge"
		},
		color: {
			control: 'select',
			category: "Attributes",
			type: 'FktBadgeColor',
			options: fktBadgeColors,
			import: "import {FktBadgeColor} from 'frakton-ng/badge'",
			required: true,
			description: "The color theme of the badge"
		}
	}
}

export const SuccessBadge: Story<FktBadgeComponent> = {
	description: "A standard badge with success state and opaque styling, perfect for status indicators.",
	args: {
		text: 'Success',
		color: 'success',
		variant: 'opaque'
	}
};

export const ErrorBadge: Story<FktBadgeComponent> = {
	description: "Badge showing error state with red color for urgent attention.",
	args: {
		text: 'Error',
		color: 'danger',
		variant: 'opaque'
	}
};

export const WarningBadge: Story<FktBadgeComponent> = {
	description: "Badge with orange color for warnings and pending states that need attention.",
	args: {
		text: 'Warning',
		color: 'warning',
		variant: 'opaque'
	}
};

export const InfoBadge: Story<FktBadgeComponent> = {
	description: "Badge with blue color for informational content and faded variant for subtle display.",
	args: {
		text: 'Info',
		color: 'info',
		variant: 'faded'
	}
};

export const BadgeVariations: Story<BadgeVariationsExampleComponent> = {
	component: BadgeVariationsExampleComponent,
	description: "Comprehensive showcase of all available colors and variants, demonstrating the full range of badge styling options.",
	args: {}
};

export const CountBadge: Story<FktBadgeComponent> = {
	description: "Numerical badges perfect for displaying counts, quantities, and numbers.",
	args: {
		text: '5',
		color: 'info',
		variant: 'opaque'
	}
};

export const StatusBadge: Story<FktBadgeComponent> = {
	description: "Status indicators for workflow states, item conditions, and process stages.",
	args: {
		text: 'Online',
		color: 'success',
		variant: 'opaque'
	}
};

export const PriorityBadge: Story<FktBadgeComponent> = {
	description: "Priority indicators for tasks, issues, and items requiring attention levels.",
	args: {
		text: 'High Priority',
		color: 'danger',
		variant: 'opaque'
	}
};

export const CategoryBadge: Story<FktBadgeComponent> = {
	description: "Category and classification badges for organizing and labeling content.",
	args: {
		text: 'Electronics',
		color: 'info',
		variant: 'faded'
	}
};

export const LongTextBadge: Story<FktBadgeComponent> = {
	description: "Badges with longer text content demonstrating text handling and wrapping.",
	args: {
		text: 'Very Long Category Name',
		color: 'info',
		variant: 'faded'
	}
};

export default meta;