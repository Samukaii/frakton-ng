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

const meta: Meta<FktNavigatorComponent> = {
	title: 'Components/Navigator',
	component: FktNavigatorComponent,
	decorators: [
		moduleMetadata({
			imports: [
				BasicExampleComponent,
				DateNavigationExampleComponent,
				DisabledStateExampleComponent,
				ItemNavigationExampleComponent,
				LoadingExampleComponent,
				PageNavigationExampleComponent
			]
		})
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
	parameters: {
		docs: {
			description: {
				story: "Simple navigation control with previous/next buttons and centered content."
			}
		}
	},
	render: (args) => ({
		template: `
			<basic-example ${argsToTemplate(args)} />
		`,
		props: args
	}),
	args: {
		canGoToNext: true,
		canGoToPrevious: true,
	}
};

export const PageNavigation: Story = {
	parameters: {
		docs: {
			description: {
				story: "Navigator configured for page-based navigation with page counter."
			}
		}
	},
	render: (args) => ({
		template: `
			<page-navigation-example ${argsToTemplate(args)} />
		`,
		props: args
	}),
};


export const DateNavigation: Story = {
	parameters: {
		docs: {
			description: {
				story: "Navigator for browsing through months with formatted date display."
			}
		}
	},
	render: (args) => ({
		template: `
			<date-navigation-example ${argsToTemplate(args)} />
		`,
		props: args
	})
};

export const ItemListNavigation: Story = {
	parameters: {
		docs: {
			description: {
				story: "Navigator for browsing through a list of items with item details display."
			}
		}
	},
	render: (args) => ({
		template: `
			<item-navigation-example ${argsToTemplate(args)} />
		`,
		props: args
	})
};

export const DisabledStates: Story = {
	parameters: {
		docs: {
			description: {
				story: "Navigator demonstrating disabled button states based on navigation constraints."
			}
		}
	},
	render: (args) => ({
		template: `
			<disabled-states-example ${argsToTemplate(args)} />
		`,
		props: args
	})
};

export const WithLoadingState: Story = {
	parameters: {
		docs: {
			description: {
				story: "Navigator integrated with async operations showing loading states."
			}
		}
	},
	render: (args) => ({
		template: `
			<loading-example ${argsToTemplate(args)} />
		`,
		props: args
	})
};

export default meta;
