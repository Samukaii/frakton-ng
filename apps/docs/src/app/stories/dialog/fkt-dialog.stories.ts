import { FktDialogService } from 'frakton-ng/dialog';
import {
	FktConfirmationDialogExampleComponent,
	FktCustomDialogExampleComponent,
	FktDialogOverviewExampleComponent,
	FktFormDialogExampleComponent,
	FktFullscreenDialogExampleComponent,
	FktSimpleDialogExampleComponent,
	FktSmallDialogExampleComponent
} from './examples';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-dialog.docs.md' with { loader: "text" };

const meta: Meta = {
	title: "Components/Overlays/Dialog",
	component: FktDialogService,
    description: "The FktDialog service provides a powerful and flexible system for creating modal dialogs in your Angular applications.\n" +
        "Built with modern Angular signals and reactive patterns, it supports advanced TypeScript inference, custom components, various sizing options, and pre-built confirmation dialogs with seamless data binding.",
	documentation,
	argTypes: {
		open: {
			category: "Methods",
			type: 'function',
			control: 'text',
			description: 'Opens a dialog with the specified options'
		},
		confirm: {
			category: "Methods",
			type: 'function',
			control: 'text',
			description: 'Opens a confirmation dialog with predefined actions'
		},
		closeAll: {
			category: "Methods",
			type: 'function',
			control: 'text',
			description: 'Closes all open dialogs'
		}
	}
}

export const Simple: Story<FktSimpleDialogExampleComponent> = {
	component: FktSimpleDialogExampleComponent,
	description: "Basic dialog implementation with simple content and close functionality.",
	args: {}
};

export const Confirmation: Story<FktConfirmationDialogExampleComponent> = {
	component: FktConfirmationDialogExampleComponent,
	description: "Dialog for confirmation actions with primary and secondary buttons.",
	args: {}
};

export const Form: Story<FktFormDialogExampleComponent> = {
	component: FktFormDialogExampleComponent,
	description: "Dialog containing form elements for data input and submission.",
	args: {}
};

export const Custom: Story<FktCustomDialogExampleComponent> = {
	component: FktCustomDialogExampleComponent,
	description: "Custom styled dialog with unique appearance and behavior.",
	args: {}
};

export const Small: Story<FktSmallDialogExampleComponent> = {
	component: FktSmallDialogExampleComponent,
	description: "Compact dialog size perfect for quick confirmations and alerts.",
	args: {}
};

export const Fullscreen: Story<FktFullscreenDialogExampleComponent> = {
	component: FktFullscreenDialogExampleComponent,
	description: "Full viewport dialog for complex content and detailed forms.",
	args: {}
};

export const Overview: Story<FktDialogOverviewExampleComponent> = {
	component: FktDialogOverviewExampleComponent,
	description: "Comprehensive showcase of all dialog variants and their use cases.",
	args: {}
};

export default meta;
