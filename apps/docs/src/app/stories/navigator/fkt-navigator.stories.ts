import { FktNavigatorComponent } from 'frakton-ng/navigator';
import { BasicExampleComponent, DateNavigationExampleComponent, DisabledStateExampleComponent, ItemNavigationExampleComponent, LoadingExampleComponent, PageNavigationExampleComponent } from './examples';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-navigator.docs.md' with { loader: "text" };

const meta: Meta = {
	title: "Components/Navigation/Navigator",
	component: FktNavigatorComponent,
    description: "The FktNavigator component provides a reusable navigation control with previous/next buttons and a flexible content area. It's designed to be a consistent navigation pattern across different components and contexts.",
	documentation,
	argTypes: {
		canGoToPrevious: {
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: "true",
			description: 'Whether the previous button should be enabled'
		},
		canGoToNext: {
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: "true",
			description: 'Whether the next button should be enabled'
		}
	}
}

export const Basic: Story<FktNavigatorComponent> = {
	description: "Basic navigator with both previous and next buttons enabled for simple navigation.",
	args: {
		canGoToPrevious: true,
		canGoToNext: true
	}
};

export const PreviousDisabled: Story<FktNavigatorComponent> = {
	description: "Navigator with previous button disabled, useful when at the beginning of a sequence.",
	args: {
		canGoToPrevious: false,
		canGoToNext: true
	}
};

export const NextDisabled: Story<FktNavigatorComponent> = {
	description: "Navigator with next button disabled, useful when at the end of a sequence.",
	args: {
		canGoToPrevious: true,
		canGoToNext: false
	}
};

export const BothDisabled: Story<FktNavigatorComponent> = {
	description: "Navigator with both buttons disabled, useful when navigation is temporarily unavailable.",
	args: {
		canGoToPrevious: false,
		canGoToNext: false
	}
};

export const BasicExample: Story<BasicExampleComponent> = {
	component: BasicExampleComponent,
	description: "Basic implementation showing simple previous/next navigation with counter state.",
	args: {},
};

export const DateNavigationExample: Story<DateNavigationExampleComponent> = {
	component: DateNavigationExampleComponent,
	description: "Date navigation example showing how to navigate through dates with proper boundary conditions.",
	args: {},
};

export const DisabledStateExample: Story<DisabledStateExampleComponent> = {
	component: DisabledStateExampleComponent,
	description: "Example demonstrating dynamic enable/disable states based on business logic.",
	args: {},
};

export const LoadingExample: Story<LoadingExampleComponent> = {
	component: LoadingExampleComponent,
	description: "Navigation with loading states during async operations like data fetching.",
	args: {},
};

export const ItemNavigationExample: Story<ItemNavigationExampleComponent> = {
	component: ItemNavigationExampleComponent,
	description: "Navigation through a list of items with proper boundary detection.",
	args: {},
};

export const PageNavigationExample: Story<PageNavigationExampleComponent> = {
	component: PageNavigationExampleComponent,
	description: "Pagination-style navigation with page numbers and navigation controls.",
	args: {},
};

export default meta;
