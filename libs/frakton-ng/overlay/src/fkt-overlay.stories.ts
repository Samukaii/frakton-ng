import type { Meta, StoryObj } from '@storybook/angular';
import {
	FktCustomTooltipOverlayExampleComponent,
	FktDropdownOverlayExampleComponent,
	FktFormOverlayExampleComponent,
	FktInteractiveOverlayExampleComponent,
	FktSimpleOverlayExampleComponent
} from './examples';
import { fktStoryRenderer } from '../../.storybook/decorators/fkt-story-renderer';
import { renderComponent } from '../../.storybook/decorators/render-component';

const meta: Meta = {
	title: 'Components/Overlay/Overlay',
	parameters: {
		layout: 'centered',
	},
	decorators: [
		fktStoryRenderer(),
	],
};


export const SimpleOverlay: StoryObj = {
	render: renderComponent(FktSimpleOverlayExampleComponent),
	parameters: {
		docs: {
			description: {
				story: 'Simple overlay example'
			}
		}
	}
};

export const CustomTooltipOverlay: StoryObj = {
	render: renderComponent(FktCustomTooltipOverlayExampleComponent),
	parameters: {
		docs: {
			description: {
				story: 'Dark-themed tooltip-style overlays with auto-close functionality. Perfect for contextual help, status messages, and informational content. Tooltips automatically close after 3 seconds.'
			}
		}
	}
};

export const DropdownMenuOverlay: StoryObj = {
	render: renderComponent(FktDropdownOverlayExampleComponent),
	parameters: {
		docs: {
			description: {
				story: 'Action menus and dropdown selectors with icons and various configurations. Demonstrates how to create context menus, navigation dropdowns, and action buttons with custom styling.'
			}
		}
	}
};

export const FormOverlay: StoryObj = {
	render: renderComponent(FktFormOverlayExampleComponent),
	parameters: {
		docs: {
			description: {
				story: 'Forms and input collections within overlays. Shows how to handle form validation, submission, cancellation, and data binding in overlay contexts with different positioning options.'
			}
		}
	}
};

export const InteractiveOverlay: StoryObj = {
	render: renderComponent(FktInteractiveOverlayExampleComponent),
	parameters: {
		docs: {
			description: {
				story: 'Advanced overlays with bidirectional data binding and reactive content. Demonstrates signal-based communication between parent and overlay components, including counters, lists, and complex state management.'
			}
		}
	}
};

export default meta;
