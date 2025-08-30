import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FktCustomTooltipOverlayExampleComponent } from './example/custom-tooltip-overlay-example/fkt-custom-tooltip-overlay-example.component';
import overlayDocumentation from './fkt-overlay.docs.mdx';
import {
	FktSimpleOverlayExampleComponent
} from './example/simple-overlay-example/fkt-simple-overlay-example.component';
import {
	FktDropdownOverlayExampleComponent
} from './example/dropdown-overlay-example/fkt-dropdown-overlay-example.component';
import { FktFormOverlayExampleComponent } from './example/form-overlay-example/fkt-form-overlay-example.component';
import {
	FktInteractiveOverlayExampleComponent
} from './example/interactive-overlay-example/fkt-interactive-overlay-example.component';

const meta: Meta = {
    title: 'Components/Overlay/Overlay',
    parameters: {
		layout: 'centered',
    },
    decorators: [
        moduleMetadata({
            imports: [
                FktSimpleOverlayExampleComponent,
                FktCustomTooltipOverlayExampleComponent,
                FktDropdownOverlayExampleComponent,
                FktFormOverlayExampleComponent,
                FktInteractiveOverlayExampleComponent,
            ],
        })
    ],
};


export const SimpleOverlay: StoryObj = {
    render: () => ({
        template: '<simple-overlay-example/>',
    }),
};

export const TooltipOverlay: StoryObj = {
    render: () => ({
        template: '<custom-tooltip-overlay-example/>',
    }),
    parameters: {
        docs: {
            description: {
                story: 'Dark-themed tooltip-style overlays with auto-close functionality. Perfect for contextual help, status messages, and informational content. Tooltips automatically close after 3 seconds.'
            }
        }
    }
};

export const DropdownMenuOverlay: StoryObj = {
    render: () => ({
        template: '<dropdown-overlay-example/>',
    }),
    parameters: {
        docs: {
            description: {
                story: 'Action menus and dropdown selectors with icons and various configurations. Demonstrates how to create context menus, navigation dropdowns, and action buttons with custom styling.'
            }
        }
    }
};

export const FormOverlay: StoryObj = {
    render: () => ({
        template: '<form-overlay-example/>',
    }),
    parameters: {
        docs: {
            description: {
                story: 'Forms and input collections within overlays. Shows how to handle form validation, submission, cancellation, and data binding in overlay contexts with different positioning options.'
            }
        }
    }
};

export const InteractiveOverlay: StoryObj = {
    render: () => ({
        template: '<interactive-overlay-example/>',
    }),
    parameters: {
        docs: {
            description: {
                story: 'Advanced overlays with bidirectional data binding and reactive content. Demonstrates signal-based communication between parent and overlay components, including counters, lists, and complex state management.'
            }
        }
    }
};

export default meta;
