import { argsToTemplate, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { FktNavigatorComponent } from 'frakton-ng/navigator';
import {
	BasicExampleComponent,
	DateNavigationExampleComponent,
	DisabledStateExampleComponent,
	ItemNavigationExampleComponent,
	LoadingExampleComponent,
	PageNavigationExampleComponent
} from './examples';
import { customDocsControl } from '../../.storybook/decorators/custom-docs-control';
import { renderComponent } from '../../.storybook/decorators/render-component';

const meta: Meta<FktNavigatorComponent> = {
	title: 'Components/Navigator',
	component: FktNavigatorComponent,
	decorators: [
		customDocsControl(),
	],
	argTypes: {
		canGoToPrevious: {
			control: 'boolean',
			table: {
				category: 'Attributes'
			}
		},
		canGoToNext: {
			control: 'boolean',
			table: {
				category: 'Attributes'
			}
		},
		next: {
			control: 'object',
			table: {
				category: 'Events'
			}
		},
		previous: {
			control: 'object',
			table: {
				category: 'Events'
			}
		},
	}
};

type Story = StoryObj<FktNavigatorComponent>;

export const BasicNavigator: Story = {
	render: renderComponent(BasicExampleComponent),
	parameters: {
		docs: {
			description: {
				story: "Simple navigation control with previous/next buttons and centered content."
			}
		}
	},
	args: {
		canGoToNext: true,
		canGoToPrevious: true,
	}
};

export const PageNavigation: Story = {
	render: renderComponent(PageNavigationExampleComponent),
	parameters: {
		docs: {
			description: {
				story: "Navigator configured for page-based navigation with page counter."
			}
		}
	},
};


export const DateNavigation: Story = {
	render: renderComponent(DateNavigationExampleComponent),
	parameters: {
		docs: {
			description: {
				story: "Navigator for browsing through months with formatted date display."
			}
		}
	},
};

export const ItemListNavigation: Story = {
	render: renderComponent(ItemNavigationExampleComponent),
	parameters: {
		docs: {
			description: {
				story: "Navigator for browsing through a list of items with item details display."
			}
		}
	},
};

export const DisabledStates: Story = {
	render: renderComponent(DisabledStateExampleComponent),
	parameters: {
		docs: {
			description: {
				story: "Navigator demonstrating disabled button states based on navigation constraints."
			}
		}
	},
};

export const WithLoadingState: Story = {
	render: renderComponent(LoadingExampleComponent),
	parameters: {
		docs: {
			description: {
				story: "Navigator integrated with async operations showing loading states."
			}
		}
	},
};

export default meta;
