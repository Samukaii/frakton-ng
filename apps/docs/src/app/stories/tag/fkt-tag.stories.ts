import { fktTagColors, FktTagComponent, fktTagVariants } from 'frakton-ng/tag';
import { TagVariationsExampleComponent } from './examples';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-tag.docs.md' with { loader: "text" };

const meta: Meta = {
	title: "Components/Data Display/Tag",
	component: FktTagComponent,
    description: "The FktTag component provides a visual indicator for status, categories, counts, and other contextual information. Built with Angular signals and flexible styling options, it offers semantic color coding and variant styles for different visual prominence levels.",
	documentation,
	argTypes: {
		text: {
			control: 'text',
			category: "Attributes",
			type: 'string',
			defaultValue: "''",
			description: "The text content to display in the tag"
		},
		variant: {
			control: 'select',
			category: "Attributes",
			type: 'FktTagVariant',
			options: fktTagVariants,
			import: "import {FktTagVariant} from 'frakton-ng/tag'",
			defaultValue: "opaque",
			description: "The visual variant of the tag"
		},
		color: {
			control: 'select',
			category: "Attributes",
			type: 'FktTagColor',
			options: fktTagColors,
			import: "import {FktTagColor} from 'frakton-ng/tag'",
			required: true,
			description: "The color theme of the tag"
		}
	}
}

export const SuccessTag: Story<FktTagComponent> = {
	description: "A standard badge with success state and opaque styling, perfect for status indicators.",
	args: {
		text: 'Success',
		color: 'success',
		variant: 'opaque'
	}
};

export const ErrorTag: Story<FktTagComponent> = {
	description: "Badge showing error state with red color for urgent attention.",
	args: {
		text: 'Error',
		color: 'danger',
		variant: 'opaque'
	}
};

export const WarningTag: Story<FktTagComponent> = {
	description: "Badge with orange color for warnings and pending states that need attention.",
	args: {
		text: 'Warning',
		color: 'warning',
		variant: 'opaque'
	}
};

export const InfoTag: Story<FktTagComponent> = {
	description: "Badge with blue color for informational content and faded variant for subtle display.",
	args: {
		text: 'Info',
		color: 'info',
		variant: 'faded'
	}
};

export const TagVariations: Story<TagVariationsExampleComponent> = {
	component: TagVariationsExampleComponent,
	description: "Comprehensive showcase of all available colors and variants, demonstrating the full range of badge styling options.",
	args: {}
};

export const CountTag: Story<FktTagComponent> = {
	description: "Numerical badges perfect for displaying counts, quantities, and numbers.",
	args: {
		text: '5',
		color: 'info',
		variant: 'opaque'
	}
};

export const StatusTag: Story<FktTagComponent> = {
	description: "Status indicators for workflow states, item conditions, and process stages.",
	args: {
		text: 'Online',
		color: 'success',
		variant: 'opaque'
	}
};

export const PriorityTag: Story<FktTagComponent> = {
	description: "Priority indicators for tasks, issues, and items requiring attention levels.",
	args: {
		text: 'High Priority',
		color: 'danger',
		variant: 'opaque'
	}
};

export const CategoryTag: Story<FktTagComponent> = {
	description: "Category and classification badges for organizing and labeling content.",
	args: {
		text: 'Electronics',
		color: 'info',
		variant: 'faded'
	}
};

export const LongTextTag: Story<FktTagComponent> = {
	description: "Badges with longer text content demonstrating text handling and wrapping.",
	args: {
		text: 'Very Long Category Name',
		color: 'info',
		variant: 'faded'
	}
};

export default meta;
