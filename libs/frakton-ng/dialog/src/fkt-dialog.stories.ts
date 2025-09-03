import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FktSmallDialogExampleComponent } from './example/small-dialog-example/fkt-small-dialog-example.component';
import {
	FktFullscreenDialogExampleComponent
} from './example/fullscreen-dialog-example/fkt-fullscreen-dialog-example.component';
import { FktSimpleDialogExampleComponent } from './example/simple-dialog-example/fkt-simple-dialog-example.component';
import { FktFormDialogExampleComponent } from './example/form-dialog-example/fkt-form-dialog-example.component';
import { FktCustomDialogExampleComponent } from './example/custom-dialog-example/fkt-custom-dialog-example.component';
import {
	FktConfirmationDialogExampleComponent
} from './example/confirmation-dialog-example/fkt-confirmation-dialog-example.component';

const meta: Meta = {
    title: 'Components/Overlay/Dialog',
	parameters: {
		layout: 'centered',
	},
    decorators: [
        moduleMetadata({
            imports: [
                FktSimpleDialogExampleComponent,
                FktFormDialogExampleComponent,
                FktCustomDialogExampleComponent,
                FktConfirmationDialogExampleComponent,
                FktFullscreenDialogExampleComponent,
                FktSmallDialogExampleComponent,
            ],
        })
    ],
};

export const SimpleDialog: StoryObj = {
    render: () => ({
        template: '<simple-dialog-example/>',
    }),
    parameters: {
        docs: {
            description: {
                story: 'Basic dialog with signal-based reactivity. Shows how to pass reactive signals to dialog components and update content in real-time. Includes an "Update Message" button to demonstrate live signal updates while the dialog is open.'
            }
        }
    }
};

export const FormDialog = {
    render: () => ({
        template: '<form-dialog-example/>',
    }),
    parameters: {
        docs: {
            description: {
                story: 'Form dialogs with validation and data submission. Features three different forms: Contact Form (empty inputs), User Registration (with initial message), and Feedback Form (pre-filled data). Demonstrates form validation, callback handling, and TypeScript inference for form data.'
            }
        }
    }
};

export const CustomDialog = {
    render: () => ({
        template: '<custom-dialog-example/>',
    }),
    parameters: {
        docs: {
            description: {
                story: 'Advanced dialogs with rich content and interactive elements. Features four themed dialogs: Settings (primary), Premium (green), Warning (yellow), and Error (red). Each includes icons, badges, expandable details, counters, and reactive data with shared state management.'
            }
        }
    }
};

export const ConfirmationDialog = {
    render: () => ({
        template: '<confirmation-dialog-example/>',
    }),
    parameters: {
        docs: {
            description: {
                story: 'Pre-built confirmation dialogs using the confirm() method. Includes Delete Item (red), Save Changes (green), Discard Draft (yellow), and Reset Settings (primary) examples. Features action logging, backdrop click handling, and customizable button actions.'
            }
        }
    }
};

export const FullScreenDialog = {
    render: () => ({
        template: '<fullscreen-dialog-example/>',
    }),
    parameters: {
        docs: {
            description: {
                story: 'Full-screen dialogs (90vw × 80vh) for complex interfaces. Features three examples: Application Dashboard (with tabs), Data Manager (simplified), and System Settings (no counter). Includes tabbed navigation, progress bars, data tables, and comprehensive layouts with header/footer sections.'
            }
        }
    }
};

export const SmallDialog = {
    render: () => ({
        template: '<small-dialog-example/>',
    }),
    parameters: {
        docs: {
            description: {
                story: 'Compact dialogs (300px width) for quick interactions. Includes Quick Confirm (primary), Text Input (green), Number Counter (yellow), and Delete Warning (red). Features input handling, counter controls, and action logging to demonstrate mobile-friendly patterns.'
            }
        }
    }
};

export default meta;
