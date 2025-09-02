import type { Meta, StoryObj } from '@storybook/angular';
import { FktComponentInputs } from '@frakton-ng/internal/types';
import { FktBadgeComponent } from './fkt-badge.component';
import { fktBadgeColors, fktBadgeVariants } from './fkt-badge.types';

const meta: Meta<FktBadgeComponent> = {
	title: 'Components/Badge',
	component: FktBadgeComponent,
	argTypes: {
		text: { control: 'text' },
		variant: {
			control: 'select',
			options: fktBadgeVariants,

		},
		color: {
			control: 'select',
			options: fktBadgeColors
		},
	}
};

type Story = {
	args: Partial<FktComponentInputs<FktBadgeComponent>>
}

export const Success: Story = {
	args: {
		text: 'Success',
		color: 'green',
		variant: 'opaque',
	}
};

export const Error: Story = {
	args: {
		text: 'Error',
		color: 'red',
		variant: 'opaque',
	}
};

export const Warning: Story = {
	args: {
		text: 'Warning',
		color: 'orange',
		variant: 'opaque',
	}
};


export const Info: Story = {
	args: {
		text: 'Info',
		color: 'blue',
		variant: 'faded',
	}
};


export const Variations: StoryObj = {
	render: (args) => ({
		props: args,
		template: `
			<div class="flex flex-col gap-4">
				<div class="flex flex-col gap-2">
					<h2 class="text-lg font-semibold border-b border-gray-200 pb-1">Opaque Variant</h2>
					<div class="flex gap-2 items-center flex-wrap">
						<fkt-badge text="Green" color="green" variant="opaque" />
						<fkt-badge text="Red" color="red" variant="opaque" />
						<fkt-badge text="Blue" color="blue" variant="opaque" />
						<fkt-badge text="Orange" color="orange" variant="opaque" />
					</div>
				</div>
				<div class="flex flex-col gap-2">
					<h2 class="text-lg font-semibold border-b border-gray-200 pb-1">Faded Variant</h2>
					<div class="flex gap-2 items-center flex-wrap">
						<fkt-badge text="Green" color="green" variant="faded" />
						<fkt-badge text="Red" color="red" variant="faded" />
						<fkt-badge text="Blue" color="blue" variant="faded" />
						<fkt-badge text="Orange" color="orange" variant="faded" />
					</div>
				</div>
			</div>
		`
	}),
	args: {}
};

export const Count: Story = {
	args: {
		text: '5',
		color: 'blue',
		variant: 'opaque',
	}
};

export const Status: Story = {
	args: {
		text: 'Online',
		color: 'green',
		variant: 'opaque',
	}
};

export const Category: Story = {
	args: {
		text: 'Electronics',
		color: 'blue',
		variant: 'faded',
	}
};

export const Priority: Story = {
	args: {
		text: 'High Priority',
		color: 'red',
		variant: 'opaque',
	}
};

export const LongText: Story = {
	args: {
		text: 'Very Long Category Name',
		color: 'blue',
		variant: 'faded',
	}
};

// Aliases for MDX documentation compatibility
export const CountBadge = Count;
export const StatusBadge = Status;
export const CategoryBadge = Category;
export const PriorityBadge = Priority;
export const LongTextBadge = LongText;

export default meta;
