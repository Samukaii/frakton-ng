import { FktPaginatorComponent } from 'frakton-ng/paginator';
import { BasicExampleComponent, ConfigurableExampleComponent, ResponsiveExampleComponent } from './examples';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// Design tokens will be auto-generated
// @ts-expect-error
import documentation from './fkt-paginator.docs.md' with { loader: "text" };
import { DesignToken } from '@/models/design-token';
import designTokens from './fkt-paginator-design-tokens.json';

const meta: Meta = {
	title: "Components/Navigation/Paginator",
	description: "The FktPaginator component provides server-side pagination controls with configurable display options, responsive design, and accessibility features. Perfect for tables, lists, and any paginated content.",
	component: FktPaginatorComponent,
	documentation,
    designTokens: designTokens as DesignToken[],
	argTypes: {
		state: {
			control: 'object',
			category: "Attributes",
			type: 'FktPaginatorState',
			required: true,
			description: 'Current pagination state with page, pageSize, and total'
		},
        page: {
            control: 'number',
            category: "Attributes",
            type: 'number',
            defaultValue: "1",
            description: 'Current pagination state with page, pageSize, and total'
        },
        pageSize: {
            control: 'number',
            category: "Attributes",
            type: 'number',
            defaultValue: "10",
            description: 'Current pagination state with page, pageSize, and total'
        },
        total: {
            control: 'number',
            category: "Attributes",
            type: 'number',
            required: true,
            description: 'Current pagination state with page, pageSize, and total'
        },
		config: {
			control: 'object',
			category: "Attributes",
			type: 'FktPaginatorConfig',
			defaultValue: "{}",
			description: 'Configuration for which parts of pagination to show/hide'
		},
		disabled: {
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: "false",
			description: 'Whether pagination controls are disabled'
		}
	},
};

export default meta;

export const Basic: Story<FktPaginatorComponent> = {
	description: "Default paginator component with configurable state and options.",
	args: {
        page: 1,
        pageSize: 20,
        total: 247,
		config: {},
		disabled: false
	}
};

export const BasicExample: Story<BasicExampleComponent> = {
	component: BasicExampleComponent,
	description: "Default paginator with all features enabled. Try navigating through pages and changing page size.",
	args: {
		page: 3,
		pageSize: 20,
		total: 247
	}
};

export const ConfigurableExample: Story<ConfigurableExampleComponent> = {
	component: ConfigurableExampleComponent,
	description: "Examples of different paginator configurations for various use cases.",
	args: {
        page: 2,
		pageSize: 10,
		total: 156
	}
};

export const ResponsiveExample: Story<ResponsiveExampleComponent> = {
	component: ResponsiveExampleComponent,
	description: "Responsive design that adapts to different screen sizes with mobile-friendly reordering.",
	args: {
        page: 5,
		pageSize: 25,
		total: 523
	}
};
